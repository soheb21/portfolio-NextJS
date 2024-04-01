import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ansarishoeb53:adil@cluster0.kxwskpf.mongodb.net/myPortfolio);

    } catch (error) {
        if (error) throw error;
    }
}


