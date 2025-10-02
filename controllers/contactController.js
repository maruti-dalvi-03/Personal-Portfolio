import  sendContactEmail  from '../models/contactModel.js';

// Controller: Handle Contact Form Submission
export const handleContactFormSubmission = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Call the model function to send an email
  const result = await sendContactEmail(name, email, message);

  // Return the result from the model
  if (result.success) {
    return res.status(200).json({ message: result.message });
  } else {
    return res.status(500).json({ message: result.message });
  }
};


