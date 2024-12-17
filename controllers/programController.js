import Program from "../models/programModel.js";

// Get all galleries
export const getProgram = async (req, res) => {
  try {
    const program = await Program.find();
    if (program.length == 0) {
      return res.status(404).json({ message: "No program found" });
    }
    res.status(200).json({
      message: "program fetched successfully",
      program,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
