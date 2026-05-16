import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});