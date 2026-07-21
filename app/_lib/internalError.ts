import { NextResponse } from "next/server";

export const internalError = () =>
    NextResponse.json(
        { message: "An internal error occurred" },
        { status: 500 }
    );
