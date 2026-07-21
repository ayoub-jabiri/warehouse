import { dbConnect } from "@/app/_lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await dbConnect();

    const { fullname, email, password, passwordConfirm } = await req.json();

    try {
        return NextResponse.json({ name: "Ahmed" }, { status: 201 });
    } catch (error: unknown) {
        console.log(error);
    }
}
