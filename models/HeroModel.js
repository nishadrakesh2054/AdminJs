import mongoose from "mongoose";

const heroImageSchema = new mongoose.Schema(
  {
    imageKey: {
      type: String,
    },
    bucket: {
      type: String,
    },
    mime: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "HeroImage",
    timestamps: true,
  }
);

const HeroImage = mongoose.model("HeroImage", heroImageSchema);

export default HeroImage;
