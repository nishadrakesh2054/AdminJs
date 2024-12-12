// routes/contactRoutes.js
import express from "express";
import {
  getContacts,
  createContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Routes for CRUD operations on contacts
router.route("/").get(getContacts).post(createContact);
router.route("/:id").delete(deleteContact);

export default router;
