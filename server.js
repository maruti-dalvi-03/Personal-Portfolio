import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routers/userRouter.js";
import aboutRoutes from './routers/aboutRoutes.js';
import contactRoutes from './routers/contactRoutes.js';
import skillRoutes from './routers/skillRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use("/", (req, res) => {
//   res.send("sads");
// });

app.use("/api/users", userRoutes);

app.use("/api/about", aboutRoutes);

app.use('/api', contactRoutes);

app.use("/api/skills", skillRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Database connection error:", error));

console.log("MongoDB URI:", process.env.MONGODB_URL);

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
