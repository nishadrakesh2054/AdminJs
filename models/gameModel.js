import mongoose from "mongoose";

// Define the schema for Game
const gameSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: [true, "Game name cannot be empty."],
      minlength: [3, "Game name must be between 3 and 255 characters."],
      maxlength: [255, "Game name must be between 3 and 255 characters."],
    },
    type: {
      type: String,
      required: [true, "Game type must be either 'Individual' or 'Squad'."],
      enum: {
        values: ["Individual", "Squad"],
        message: "Game type must be either 'Individual' or 'Squad'.",
      },
    },
    category: {
      type: String,
      required: [true, "Category cannot be empty."],
      minlength: [3, "Category must be between 3 and 255 characters."],
      maxlength: [255, "Category must be between 3 and 255 characters."],
    },
    fee: {
      type: Number,
      required: [true, "Fee must be a valid number."],
      min: [0, "Fee must be a positive number."],
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const Game = mongoose.model("Game", gameSchema);

export default Game;
