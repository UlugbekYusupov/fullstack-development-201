import users from "../data/db.js";
import generateIde from "../utils/generateId.js";
import bcrypt from "bcrypt";

export function register(req, res){
    console.log(`Checking request body ${req.body}`);

    const {username,  email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Username, eamil and password required",
        });
    }

    const passwordHash = bcrypt.hash(password, 10)
    const user = {
        id: generateIde(users),
        username,
        email,
        password

    }
    console.log(`User info ${username} ${email} ${password}`);
}

export function login() {

}