import express from "express";
import {
  createBrandLogo,
  getBrandLogos,
  updateBrandLogo,
  deleteBrandLogo,
} from "../controllers/brandController.js";

import upload from "../multer/upload.js";

const router = express.Router();

// Create a new brand logo
router.route("/").post(upload.single("logoImg"),createBrandLogo);

// Get all brand logos
router.route("/").get(getBrandLogos);

// Update a brand logo by ID
router.route("/:id").put(updateBrandLogo);

// Delete a brand logo by ID
router.route("/:id").delete(deleteBrandLogo);

export default router;
