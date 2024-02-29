import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";

const app = express();
dotenv.config();

// Constents
const PORT = process.env.PORT || 3001;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb://localhost:27017/${DB_NAME}`
    )

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
