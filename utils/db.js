import mongoose from "mongoose";

// const URL = "mongodb+srv://maruti2816:maruti1628@cluster0.5ni10qr.mongodb.net/"
// mongooge.connect(URL);

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connection successfully to DB", process.env.MONGODB_URL)
    } catch (error) {
        console.log("database connection failed")
        process.exit(0);
    }
}

export default connectDb;