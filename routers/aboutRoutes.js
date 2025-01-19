import express from "express";
import { getAboutContent, updateAboutContent } from "../controllers/aboutController.js";

const router = express.Router();

// Route to get About content
router.get("/", getAboutContent);

// Route to update About content using POST
router.post("/", updateAboutContent);

export default router;
