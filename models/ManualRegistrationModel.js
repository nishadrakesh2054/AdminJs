import mongoose from "mongoose";

// Define the schema for ManualRegistration
const ManualRegistrationSchema = new mongoose.Schema(
  {
    paymentType: {
      type: String,
      enum: ["Cash", "QR"],
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: [0, "Total amount must be a positive number."],
    },
    gameFee: {
      type: Number,
      required: true,
      min: [0, "Fee must be a positive number."],
    },
    noOfParticipants: {
      type: String,
      required: false,
    },
    gameCategory: {
      type: String,
      required: true,
      minlength: [3, "Category must be between 3 and 255 characters."],
      maxlength: [255, "Category must be between 3 and 255 characters."],
    },
    gameName: {
      type: String,
      required: true,
      minlength: [3, "Game name must be between 3 and 255 characters."],
      maxlength: [255, "Game name must be between 3 and 255 characters."],
    },
    gameType: {
      type: String,
      enum: ["Individual", "Squad"],
      required: true,
    },
    schoolEmail: {
      type: String,
      required: true,
      match: [/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, "Please provide a valid email address."],
    },
    schoolContactNo: {
      type: String,
      required: true,
      match: [/^\d{10,15}$/, "Contact number must contain only numeric characters and be between 10 and 15 digits long."],
    },
    schoolName: {
      type: String,
      required: true,
      minlength: [3, "School name must be between 3 and 255 characters."],
      maxlength: [255, "School name must be between 3 and 255 characters."],
    },
  },
  { timestamps: true }
);

// Before saving, calculate the totalAmount based on gameType and noOfParticipants
ManualRegistrationSchema.pre("save", function (next) {
  if (this.gameType === "Individual") {
    this.totalAmount = this.gameFee * (this.noOfParticipants || 1);
  } else {
    this.totalAmount = this.gameFee;
  }
  next();
});

// Create and export the model
const ManualRegistration = mongoose.model("ManualRegistration", ManualRegistrationSchema);

export default ManualRegistration;
