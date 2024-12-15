import mongoose from "mongoose";


const ageGroupSchema = new mongoose.Schema(
  {
    ageGroup: {
      type: String,
      required: true,  
    },
    description: {
      type: String,  
    },
    image: {
      type: String,
    },
    imageKey: {
      type: String,
    },
    bucket: {
      type: String,
    },
    mime: {
      type: String,
    },
    programId: {
      type: mongoose.Schema.Types.ObjectId, // For references, use ObjectId
      required: true,  
      ref: "Program",  // Reference to the Program model (like a foreign key)
    },
  },
  {
   
    timestamps: true, 
  }
);

// Create and export the model
const AgeGroup = mongoose.model("AgeGroup", ageGroupSchema);

export default AgeGroup;
