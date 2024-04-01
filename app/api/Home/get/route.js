import { connectDB } from "@/app/database";
import Home from "@/app/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectDB();
        const extractData = await Home.find({});
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
        console.log("Home", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}