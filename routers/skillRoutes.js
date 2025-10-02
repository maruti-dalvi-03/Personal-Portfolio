import express from "express";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";

const router = express.Router();

router.get("/", getSkills);           // Get all skills
router.post("/", addSkill);           // Add a skill
router.put("/:id", updateSkill);      // Update a skill
router.delete("/:id", deleteSkill);   // Delete a skill

export default router;
