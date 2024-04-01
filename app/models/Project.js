import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    projectName: String,
    projectSkills: String,
    projectLink: String,
    projectGitHubLink: String,
}, { timestamps: true })

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;