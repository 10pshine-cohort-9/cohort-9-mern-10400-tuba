import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Notes App API 🚀"
  });
});

export default app;