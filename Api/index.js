import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/user.router.js';

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/room_rent")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error", err));

// routes
app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("server invoked at http://localhost:3001");
});
