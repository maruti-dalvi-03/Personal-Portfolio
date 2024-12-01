import dotenv from "dotenv";
import express from 'express';
import authRouter from './routers/auth-router.js';
import connectDb from './utils/db.js';

//configure env
dotenv.config();

//rest objest
const app = express();

//middelware
app.use(express.json());

//Routers
app.use("/api/auth", authRouter);
app.use("/api/auth/registration", authRouter);

connectDb().then(() => {
  const PORT = process.env.PORT || 7070;
    app.listen(PORT, () => {
        console.log(`App ruuning on port ${PORT}`);
      });
});
