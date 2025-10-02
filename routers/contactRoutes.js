import express from 'express';
import { handleContactFormSubmission } from '../controllers/contactController.js';

const router = express.Router();

// Route for handling contact form submission
router.post('/contact', handleContactFormSubmission);

export default router;
