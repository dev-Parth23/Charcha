import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import connectDB from "./config/db.js";
connectDB();
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser());


import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
// import chats from "./data/data.js";

app.get("/", function (req, res) {
  res.send("index");
});
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);


const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});