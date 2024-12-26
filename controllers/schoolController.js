import School from "../models/SchoolModel";

export const School = async (req, res) => {
  try {
    const school = await School.find();
    if (school.length == 0) {
      return res.status(404).json({ message: "No School found" });
    }
    res.status(200).json({
      message: "School fetched successfully",
      school,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
