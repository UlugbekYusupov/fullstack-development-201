import { users } from "../data/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

async function register(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email and password are required!" });
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({ message: "Email already exists!" });
  }

  const passwordHash = await bcrypt.hashSync(password, 10);

  const newUser = {
    id: uuidv4(),
    username,
    email,
    password: passwordHash,
  };

  users.push(newUser);
  res.status(201).json({ message: "User registered successfully!" });
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required!" });
  }

  const existingUser = users.find((user) => user.email === email);

  if (!existingUser) {
    return res.status(404).json({ message: "Invalid email or password!" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password,
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid email or password!" });
  }

  const token = jwt.sign({ email }, "JWT Secret key", { expiresIn: "1d" });

  return res.status(200).json({ message: "Login successful!", token });
}

export { register, login };
