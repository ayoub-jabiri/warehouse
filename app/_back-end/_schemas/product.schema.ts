import z from "zod";

export const productSchema = z
    .object({
        name: z.string().min(1, { error: "The product name is required" }),
        description: z
            .string()
            .min(1, { error: "The product description is required" }),
        sku: z.string().min(1, { error: "The product SKU is required" }),
        category: z
            .string()
            .min(1, { error: "The product category is required" }),
        price: z.string().min(1, { error: "The product price is required" }),
        quantity: z
            .string()
            .min(1, { error: "The product quantity is required" }),
    })
    .superRefine(({ price, quantity }, ctx) => {
        if (+price <= 0) {
            ctx.addIssue({
                code: "custom",
                message: "The price should be greater than 0",
                path: ["price"],
            });
        }

        if (+quantity <= 0) {
            ctx.addIssue({
                code: "custom",
                message: "The price should be greater than 0",
                path: ["price"],
            });
        }
    });
