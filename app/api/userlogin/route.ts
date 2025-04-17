import connectDB from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/user.model";

connectDB();

export async function POST(req: NextRequest){
    try {
        const { user_name, password } = await req.json();
        console.log(user_name, password)
        const exist = await Users.findOne({ user_name });
        if(exist) {
            return new NextResponse("already exist", { status: 202 })
        }

        const user_data = new Users({
            user_name: user_name, password: password
        })
        const savedData = await user_data.save();
        return Response.json(savedData);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error.", { status: 500 });
    }
}

export const dynamic = "force-dynamic";
