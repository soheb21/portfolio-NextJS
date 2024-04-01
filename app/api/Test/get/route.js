import { connectDB } from "@/app/database";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectDB();
        return NextResponse.json({
            sucess: true,
            message: "Data Fetch Test Sucessfully"
        })


    } catch (e) {
        console.log("Home", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}