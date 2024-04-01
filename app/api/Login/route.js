import { connectDB } from "@/app/database";
import User from "@/app/models/User";
import { compare, hash } from "bcrypt";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        await connectDB();
        const extractData = await req.json();
        const { username, password } = extractData;
        const response = await User.findOne({ username })
        const hashPassword = await hash(password, 12);
        const checkPassword = await compare(password, hashPassword);
        if (!response) {
            return NextResponse.json({
                sucess: false,
                message: "User is not present"
            })
        }
        if (!checkPassword) {
            return NextResponse.json({
                sucess: false,
                message: "Password is wrong !"
            })
        }
        return NextResponse.json({
            sucess: true,
            message: `Welcome ${username}`
        })


    } catch (e) {
        console.log("Login", e)
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })

    }
}