import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    Cllg_School_name: String,
    Cllg_School_Date: String,
    Cllg_School_field: String,
},{ timestamps: true })

const Education = mongoose.models.Education || mongoose.model("Education", EducationSchema);
export default Education;