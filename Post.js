import mongoose from "mongoose";

const   Post = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  genres: { type: String, required: true },
  stock: { type: String, required: true },
  rate: { type: String, required: true },
});

export default mongoose.model("Post", Post);
