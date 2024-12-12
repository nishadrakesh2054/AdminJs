import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nishadrakesh2054:12345@cluster0.umjwm.mongodb.net/");
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDatabase;
