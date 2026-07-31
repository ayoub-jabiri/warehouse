import { movementSchema } from "@/app/_back-end/_schemas/movement.schema";
import { registerMovement } from "@/app/_back-end/_services/movement.service";
import { getSingleProductById } from "@/app/_back-end/_services/product.service";
import { dbConnect } from "@/app/_lib/db";
import { internalError } from "@/app/_lib/internalError";
import { NextResponse } from "next/server";
import z from "zod";

export async function POST(request: Request) {
    try {
        await dbConnect();

        const { productId, quantity, movementType } = await request.json();

        movementSchema.parse({
            productId,
            quantity,
            movementType,
        });

        const product = await getSingleProductById(productId);

        if (!product) {
            return NextResponse.json(
                {
                    message: "Product not found",
                },
                { status: 404 }
            );
        }

        if (movementType === "exit" && +quantity > +product.quantity) {
            return NextResponse.json(
                {
                    message: "Insufficient product quantity",
                },
                { status: 400 }
            );
        }

        const newMovement = await registerMovement({
            productId,
            quantity,
            movementType,
        });

        return NextResponse.json(
            { message: "Movement registered successfully", newMovement },
            {
                status: 201,
            }
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
