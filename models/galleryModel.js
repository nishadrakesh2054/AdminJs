import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Gallery = mongoose.model("Gallery", GallerySchema);

export default Gallery;
