import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";

//Home page
export const homeController = async (req, res) => {
  try {
    res.status(200).send("This is Home page..");
  } catch (error) {
    console.log(error);
  }
};

// Registraton Logic
export const registerController = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Validation
    if (!username || !email || !password || !phone) {
      return res.status(200).send({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the email is already registered
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Email is already registered. Please login.",
      });
    }

    // Hash the password before saving it
    const hashedPassword = await hashPassword(password);

    // Create and save the user
    const user = await new userModel({
      username,
      email,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: 'Error in registration',
        error,
      });
  }
};
