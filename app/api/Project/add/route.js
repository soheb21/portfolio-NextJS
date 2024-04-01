import { connectDB } from "@/app/database";
import Project from "@/app/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        await connectDB();
        const extractData = await req.json();
        const saveData = await Project.create(extractData);
        if (saveData) {
            return NextResponse.json({
                sucess: true,
                message: "Data Saved Sucessfully"
            })
        } else {
            return NextResponse.json({
                sucess: false,
                message: "Failed to Saved Data"
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