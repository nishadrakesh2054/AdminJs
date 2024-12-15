import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user",
  },
  password: { type: String },
});

const Users = mongoose.model("User", userSchema);

export default Users;
