import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

    } catch (error) {
        if (error) throw error;
    }
}


