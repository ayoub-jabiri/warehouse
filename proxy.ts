import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/route";

export async function proxy(req: NextRequest) {
    console.log(req.nextUrl.pathname);

    const session = await getServerSession(authOptions);

    if (req.nextUrl.pathname == "/dashboard" && !session?.user) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (
        (req.nextUrl.pathname == "/login" ||
            req.nextUrl.pathname == "/register") &&
        session?.user
    ) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
}
