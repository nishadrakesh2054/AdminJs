import express from "express";
import { getAgeData } from "../controllers/ageController.js";

const router = express.Router();

router.route("/").get(getAgeData);

export default router;
