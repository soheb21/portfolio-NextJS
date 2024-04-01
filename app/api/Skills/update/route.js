import { connectDB } from "@/app/database";
import Skills from "@/app/models/Skills";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function PUT(req) {
    try {
        await connectDB();
        const extractData = await req.json();

        const { skills, _id } = extractData;
        const updatedData = await Skills.findOneAndUpdate({ _id }, { skills }, { new: true })
        if (updatedData) {
            return NextResponse.json({
                sucess: true,
                message: "Data updated Sucessfully",
                data: updatedData
            })
        } else {
            return NextResponse.json({
                sucess: false,
                message: "Failed to update Data"
            })
        }

    } catch (e) {
        console.log("Skills-update", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}