import mongoose from "mongoose";

const brandLogoSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brandLink: {
    type: String,
    required: true,
  },
  imageKey: { type: String },
  bucket: { type: String },
  mimeType: { type: String },
});

const BrandLogo = mongoose.model("BrandLogo", brandLogoSchema);

export default BrandLogo;
