import bcrypt from "bcrypt"; // Ensure you have bcrypt for password hashing
import Users from "../models/UserModel.js";

// Default admin credentials
const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};

// Function to authenticate users
const authenticate = async (email, password) => {
  // Check if it's the default admin
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve({ email: DEFAULT_ADMIN.email, role: "admin" });
  }

  // Check for regular users
  const user = await Users.findOne({ email }); // Correct syntax for Mongoose
  console.log("user data", user);

  if (!user) {
    return null; // User not found
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null; // Invalid password
  }

  // If authenticated, return the user's details (email, role)
  return {
    email: user.email,
    role: user.role, // Return the user's role (Admin, Front desk, etc.)
  };
};

export default authenticate;
