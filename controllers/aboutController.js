import About from "../models/About.js"; // Import the About model

// Get About content
export const getAboutContent = async (req, res) => {
  try {
    const aboutContent = await About.findOne({}); // Retrieve the single About document
    if (!aboutContent) {
      return res.status(404).json({ message: "About content not found!" });
    }
    res.json({ content: aboutContent.content }); // Send the content back
  } catch (error) {
    console.error("Error fetching About content:", error);
    res.status(500).json({ message: "Failed to fetch About content" });
  }
};

// Update About content using POST
export const updateAboutContent = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    // Find and update the About document, or create it if it doesn't exist
    const updatedAbout = await About.findOneAndUpdate(
      {},
      { content },
      { new: true, upsert: true } // Create a new document if none exists
    );

    res.json({ message: "About content updated successfully!", content: updatedAbout.content });
  } catch (error) {
    console.error("Error updating About content:", error);
    res.status(500).json({ message: "Failed to update About content" });
  }
};
