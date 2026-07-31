import { z } from "zod";

export const movementSchema = z
    .object({
        productId: z.string({ error: "Product ID is required" }),
        quantity: z.string({ error: "Quantity is required" }),
        movementType: z.enum(["entrance", "exit"], {
            error: "Invalid movement type: must be either 'entrance' or 'exit'",
        }),
    })
    .superRefine(({ quantity }, ctx) => {
        if (+quantity <= 0) {
            ctx.addIssue({
                code: "custom",
                message: "Quantity must be greater than 0",
                path: ["quantity"],
            });
        }
    });
