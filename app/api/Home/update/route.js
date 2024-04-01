import { connectDB } from "@/app/database";
import Home from "@/app/models/Home";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function PUT(req) {
    try {
        await connectDB();
        const extractData = await req.json();
        const { heading, summary, _id } = extractData;
        const updatedData = await Home.findOneAndUpdate({ _id: _id }, { heading, summary }, { new: true })
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
        console.log("Home-update", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}