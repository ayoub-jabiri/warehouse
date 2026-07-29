import z from "zod";

export const categorySchema = z.object({
    name: z.string().min(1, { error: "The category name is required" }),
    description: z
        .string()
        .min(1, { error: "The category description is required" }),
});
