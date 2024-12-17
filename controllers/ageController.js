import ageGroup from "../models/ageGroupModel.js";

// Get all galleries
export const getAgeData = async (req, res) => {
  try {
    const agegroupData = await ageGroup.find();
    if (agegroupData.length == 0) {
      return res.status(404).json({ message: "No agegroupData found" });
    }
    res.status(200).json({
      message: "agegroupData fetched successfully",
      agegroupData,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
