import mongoose from "mongoose";

const ParticipationSchema = new mongoose.Schema(
  {
    numberOfParticipants: {
      type: Number,
      required: function () {
        return this.gameType === "Individual";
      }, // Required only for Individual type games
      min: [1, "Number of participants must be at least 1."],
    },
    paidAmount: {
      type: Number,
      required: true,
      min: [0, "Paid amount must be a positive number."],
    },
    paymentStatus: {
      type: String,
      enum: ["SUCCESS", "PENDING", "FAILED"],
      default: "PENDING",
      required: true,
    },
    PRN: {
      type: String,
      required: true,
      unique: true, // Ensure PRN is unique
      validate: {
        validator: function (v) {
          return v && v.trim().length > 0;
        },
        message: "PRN cannot be empty.",
      },
    },
    fee: {
      type: Number,
      required: true,
      min: [0, "Fee must be a positive number."],
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to validate numberOfParticipants based on game type
ParticipationSchema.pre("validate", async function (next) {
  if (this.gameId) {
    const Game = mongoose.model("Game");
    const game = await Game.findById(this.gameId);

    if (game && game.type === "Individual" && !this.numberOfParticipants) {
      return next(
        new Error(
          "Number of participants is required for Individual type games."
        )
      );
    }
  }
  next();
});

// Create and export the model
const Participation = mongoose.model("Participation", ParticipationSchema);

export default Participation;
