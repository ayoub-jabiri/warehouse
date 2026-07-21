import { registerUser } from "@/app/_back-end/_services/auth.service";
import { dbConnect } from "@/app/_lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await dbConnect();

    const { fullname, email, password, passwordConfirm } = await req.json();

    try {
        const user = await registerUser({ fullname, email, password });

        return NextResponse.json(
            { message: "User registered successfully", user },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.log(error.response.data);
        return NextResponse.json(
            { message: "User registered successfully", user },
            { status: 201 }
        );
    }
}
