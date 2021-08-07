import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  url:String,
  description: String,
  author: mongoose.Types.ObjectId,
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
