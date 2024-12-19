import mongoose from "mongoose";

const RegistrationPaymentSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount must be a positive number"],
    },
    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "ERROR"],
      required: [true, "Status is required"],
    },
    prn: {
      type: String,
      required: [true, "PRN is required"],
      unique: true,
    },
    participationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participation",
      required: [true, "Participation ID is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
const RegistrationPayment = mongoose.model(
  "RegistrationPayment",
  RegistrationPaymentSchema
);

export default RegistrationPayment;
