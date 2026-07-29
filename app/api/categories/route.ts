import { categorySchema } from "@/app/_back-end/_schemas/category.schema";
import {
    addNewCategory,
    getCategories,
    getCategoryByName,
} from "@/app/_back-end/_services/category.service";
import { dbConnect } from "@/app/_lib/db";
import { internalError } from "@/app/_lib/internalError";
import { type CategoryI } from "@/app/_types/Category";
import { NextResponse } from "next/server";
import z from "zod";

export async function GET(request: Request) {
    try {
        await dbConnect();

        const categories = await getCategories();
        return NextResponse.json(
            { categories: categories },
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

        const { name, description } = await request.json();

        categorySchema.parse({
            name,
            description,
        });

        const existingCategory = await getCategoryByName(name);
        if (existingCategory) {
            return NextResponse.json(
                { message: "Category with this name already exists" },
                { status: 400 }
            );
        }

        const newCategory: CategoryI = await addNewCategory({
            name,
            description,
        });
        return NextResponse.json(
            { message: "Category added successfully", newCategory },
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
