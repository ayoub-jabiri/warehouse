import { userSchema } from "@/app/_back-end/_schemas/user.schema";
import {
    findUserByEmail,
    registerUser,
} from "@/app/_back-end/_services/auth.service";
import { dbConnect } from "@/app/_lib/db";
import { internalError } from "@/app/_lib/internalError";
import { NextResponse } from "next/server";
import z from "zod";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    await dbConnect();

    const { fullname, email, password, passwordConfirm } = await req.json();

    try {
        userSchema.parse({ fullname, email, password, passwordConfirm });

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return NextResponse.json(
                { message: "User with this email already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await registerUser({
            fullname,
            email,
            password: hashedPassword,
        });

        return NextResponse.json(
            { message: "User registered successfully", user },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: "Validation Failed!",
                    errors: [...JSON.parse(error)],
                },
                { status: 400 }
            );
        }

        return internalError(error);
    }
}
