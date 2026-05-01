import {users} from "../data/db.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';


export function register(req, res) {
    console.log(req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email and password are required" });
    }
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find(
        (u) => u.email?.toLowerCase() === normalizedEmail
    );
    if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
        id: uuidv4(),
        username,
        email: normalizedEmail,
        password: hashedPassword
    };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully", users: newUser });
}

export function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = users.find((u) => u.email === email);
    if (!existingUser) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const passwordMatch = bcrypt.compareSync(password, existingUser.password);
    if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", users: existingUser });
}
