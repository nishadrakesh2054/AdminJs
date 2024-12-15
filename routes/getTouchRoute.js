// routes/contactRoutes.js
import express from "express";
import {
  registerUser,
  getAllUsers,
  deleteUserById,
} from "../controllers/getTouchController.js";

const router = express.Router();

// Routes for CRUD operations on contacts
router.route("/").get(getAllUsers).post(registerUser);
router.route("/:id").delete(deleteUserById);

export default router;
