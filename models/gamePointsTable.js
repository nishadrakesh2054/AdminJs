import mongoose from "mongoose";
import { Schema } from "mongoose";

const GamePointsTableSchema = new Schema(
  {
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "School",
      required: [true, "School ID is required"],
    },
    gameId: {
      type: Schema.Types.ObjectId,
      ref: "Game",
      required: [true, "Game ID is required"],
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "GameGroup",
      default: null,
    },
    played: {
      type: Number,
      default: 0,
      min: [0, "Played games count cannot be negative"],
    },
    won: {
      type: Number,
      default: 0,
      min: [0, "Won games count cannot be negative"],
    },
    lost: {
      type: Number,
      default: 0,
      min: [0, "Lost games count cannot be negative"],
    },
    drawn: {
      type: Number,
      default: 0,
      min: [0, "Drawn games count cannot be negative"],
    },
    points: {
      type: Number,
      default: 0,
      min: [0, "Points cannot be negative"],
    },
    additionalStats: {
      type: Schema.Types.Mixed, // Store JSON-like data
      default: {},
    },
  },
  {
    timestamps: true,
    versionKey: false, // Optional: Disable version key (_v) in MongoDB
  }
);

// Static method to reset stats
GamePointsTableSchema.statics.resetAllStats = async function (gameId) {
  await this.updateMany(
    { gameId: gameId },
    {
      played: 0,
      won: 0,
      lost: 0,
      drawn: 0,
      points: 0,
      additionalStats: {},
    }
  );
};

// Instance methods
GamePointsTableSchema.methods.resetStats = async function () {
  this.played = 0;
  this.won = 0;
  this.lost = 0;
  this.drawn = 0;
  this.points = 0;
  this.additionalStats = {};
  await this.save();
};

GamePointsTableSchema.methods.updateAdditionalStats = async function (
  newStats
) {
  this.additionalStats = { ...this.additionalStats, ...newStats };
  await this.save();
};

GamePointsTableSchema.methods.updateResult = async function (result) {
  this.played++;
  if (result === "win") this.won++;
  else if (result === "loss") this.lost++;
  else if (result === "draw") this.drawn++;
  await this.save();
};

// Pre-save hook to calculate points
GamePointsTableSchema.pre("save", function (next) {
  // Calculate points based on results (adjust according to your rules)
  this.points = this.won * 3 + this.drawn;
  next();
});

// Mongoose Scopes (custom queries)
GamePointsTableSchema.statics.topPerformers = function (limit = 5) {
  return this.find().sort({ points: -1 }).limit(limit);
};

GamePointsTableSchema.statics.byGame = function (gameId) {
  return this.find({ gameId: gameId });
};

GamePointsTableSchema.statics.bySchool = function (schoolId) {
  return this.find({ schoolId: schoolId });
};

GamePointsTableSchema.statics.byGroup = function (groupId) {
  return this.find({ groupId: groupId });
};

// Validation to ensure won + lost + drawn do not exceed played
GamePointsTableSchema.methods.bothCoordsOrNone = function () {
  if (this.won + this.lost + this.drawn > this.played) {
    throw new Error(
      "Sum of won, lost, and drawn cannot exceed total played games"
    );
  }
};

const GamePointsTable = mongoose.model(
  "GamePointsTable",
  GamePointsTableSchema
);

export default GamePointsTable;
