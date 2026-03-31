import user from "../data/db.js";
import generateId from "../utils/generateid.js";

function register(req, res) {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const userId = generateId(user);
  user.push({ id: userId, username, password, email });
  res.status(201).json({ message: "User registered successfully" });
}

function login(req, res) {
  const { username, password } = req.body;
  const existingUser = user.find((u) => u.username === username && u.password === password);
  if (!existingUser) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful" });
}

export { register, login };