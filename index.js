import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";
import cors from "cors";

const PORT = 8000;

const DB_URL = `mongodb+srv://user:user@cluster0.qnyit.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const { id, title, genres, stock, rate } = req.body;
    const post = await Post.create({ id, title, genres, stock, rate });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`server ${PORT}chi port orqali ishlayapti`);
    });
  } catch (err) {
    console.log(err);
  }
}

startApp();
