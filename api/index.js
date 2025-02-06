import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import ListingRouter from './routes/listing.routes.js'
import exp from "constants";

import cors from 'cors';
dotenv.config();
const PORT = 3000;
const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://imaginative-begonia-7d4dde.netlify.app'], // Replace with the frontend URL
  methods: 'GET, POST, PUT, DELETE', // Methods you want to allow
  allowedHeaders: 'Content-Type, Authorization', // Headers you want to allow
}));
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log("Error", err));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", UserRouter);
app.use("/api/listing", ListingRouter);

app.use((err, req, res, next) => {
  const StatusCode = err.StatusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(StatusCode).json({
    success: false,
    StatusCode,
    message,
  });
});
