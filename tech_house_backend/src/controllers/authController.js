    import users from "../data/db.js";
    import generateIde from "../utils/generateId.js";
    import bcrypt from "bcrypt";
    import jwt from "jsonwebtoken";


    export async function register(req, res){

        const {username,  email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, eamil and password required",
            });
        }

        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            return res.status(409).json({message: "User already exist"})
        }
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = {
            id: generateIde(users),
            username,
            email,
            password: passwordHash,
        };
        users.push(newUser)
        return res.status(201).json({message: "User created"});
        //console.log(`User info ${username} ${email} ${password}`);
    }

    export async function login(req, res) {
        const {password, email} = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "Emailil and password required",
            });
        }

        const existingUser = users.find((user) => user.email === email);
        console.log(existingUser.password)
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!existingUser || !isPasswordCorrect) {
            return res.status(400).json({message: "Email or password is not correct, Please check!"})
        }

        const  token = jwt.sign({email}, "JWT Secret key", {expiresIn: "1h"})

        return res.status(200).json({message: "Login successfully", token: token})
    }