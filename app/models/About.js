import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
    heading: String,
    myself: String,
    email: String,
    name: String,
    phone: Number,
}, { timestamps: true })

const About = mongoose.models.About || mongoose.model("About", AboutSchema);
export default About;