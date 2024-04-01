import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
    skills: String
},{ timestamps: true })

const Skills = mongoose.models.Skills || mongoose.model("Skills", SkillsSchema);
export default Skills;