import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { loggingMiddleware } from "./middlewares/loggingMiddleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggingMiddleware);

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is working perfect!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
