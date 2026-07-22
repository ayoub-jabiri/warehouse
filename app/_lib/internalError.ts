import { NextResponse } from "next/server";

export const internalError = (error: Error) =>
    NextResponse.json(
        { message: "An internal error occurred", error },
        { status: 500 }
    );
