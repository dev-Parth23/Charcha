import express from "express";
import dotenv from "dotenv";
import chats from "./data/data.js";
const app = express();  
dotenv.config();

  app.get("/", function (req, res) {
    res.send ("index");
    
  });
app.get("/api/chat", (req, res) => {
  try {
    console.log("Chats data:", chats);
    res.json(chats);
  } catch (error) {
    console.error("API ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
  app.get("/api/chat/:id",  (req, res) => {
    const singlechat = chats.find(c => c._id === req.params.id);
    res.send(singlechat);
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Working hogya ");
});
 