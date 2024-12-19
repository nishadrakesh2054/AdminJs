import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "School name cannot be empty."],
      minlength: [3, "School name must be at least 3 characters long."],
      maxlength: [255, "School name cannot exceed 255 characters."],
      trim: true, // Automatically trim whitespace
    },
    email: {
      type: String,
      required: [true, "Email address cannot be empty."],
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "Please provide a valid email address.",
      },
      lowercase: true,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number cannot be empty."],
      validate: {
        validator: function (v) {
          return /^\d{10,15}$/.test(v);
        },
        message:
          "Contact number must be between 10 and 15 digits and contain only numeric characters.",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const School = mongoose.model("School", SchoolSchema);

export default School;
