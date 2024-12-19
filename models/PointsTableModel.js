import mongoose from "mongoose";

const PointsTableSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: [true, "School name is required"],
    },
    goldFirst: {
      type: Number,
      default: 0,
      min: [0, "Gold medals count cannot be negative"],
    },
    silverSecond: {
      type: Number,
      default: 0,
      min: [0, "Silver medals count cannot be negative"],
    },
    bronzeThird: {
      type: Number,
      default: 0,
      min: [0, "Bronze medals count cannot be negative"],
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    position: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to calculate totalPoints before saving
PointsTableSchema.pre("save", function (next) {
  this.totalPoints =
    this.goldFirst * 5 + this.silverSecond * 3 + this.bronzeThird * 1;
  next();
});

// Static method to update positions after each save
PointsTableSchema.statics.updatePositions = async function () {
  const allEntries = await this.find().sort({ totalPoints: -1 });

  for (let i = 0; i < allEntries.length; i++) {
    allEntries[i].position = i + 1;
    await allEntries[i].save();
  }
};

// Post-save hook to update positions
PointsTableSchema.post("save", async function () {
  await this.constructor.updatePositions();
});

// Export the model
const PointsTable = mongoose.model("PointsTable", PointsTableSchema);

export default PointsTable;
