import { connectDB } from "@/app/database";
import Project from "@/app/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectDB();
        const extractData = await Project.find({});
        if (extractData) {
            return NextResponse.json({
                sucess: true,
                message: "Data Saved Sucessfully",
                data: extractData
            })
        } else {
            return NextResponse.json({
                sucess: false,
                message: "Failed to Fetch Data"
            })
        }

    } catch (e) {
        console.log("Project", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}