import { productSchema } from "@/app/_back-end/_schemas/product.schema";
import {
    addNewProduct,
    getAllProducts,
    getSingleProductBySku,
} from "@/app/_back-end/_services/product.service";
import { dbConnect } from "@/app/_lib/db";
import { internalError } from "@/app/_lib/internalError";
import { ProductI } from "@/app/_types/Product";
import { NextResponse } from "next/server";
import z from "zod";

export async function GET(request: Request) {
    try {
        await dbConnect();

        const products = await getAllProducts();
        return NextResponse.json(
            { products: products },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.log(error);

        return internalError(error);
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();

        const { name, sku, description, category, price, quantity } =
            await request.json();

        productSchema.parse({
            name,
            sku,
            description,
            category,
            price,
            quantity,
        });

        const existingProduct = await getSingleProductBySku(sku);
        if (existingProduct) {
            return NextResponse.json(
                { message: "Product with this SKU already exists" },
                { status: 400 }
            );
        }

        const newProduct: ProductI = await addNewProduct({
            name,
            sku,
            description,
            category,
            price,
            quantity,
        });
        return NextResponse.json(
            { message: "Product added successfully", newProduct },
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
