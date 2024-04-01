import { connectDB } from "@/app/database";
import About from "@/app/models/About";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function PUT(req) {
    try {
        await connectDB();
        const extractData = await req.json();

        const { heading, myself, email, name, phone, _id } = extractData;
        const updatedData = await About.findOneAndUpdate({ _id: _id }, { heading, myself, email, name, phone }, { new: true })
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
        console.log("About-update", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}