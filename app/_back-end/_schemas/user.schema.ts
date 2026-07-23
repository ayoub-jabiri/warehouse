import z, { email } from "zod";

export const userSchema = z
    .object({
        fullname: z.string().min(1, { error: "The fullname is required" }),
        email: z.email({
            error: "The email is required and must be a valid email",
        }),
        password: z.string().min(3, {
            error: "The password is required",
        }),
        passwordConfirm: z
            .string()
            .min(3, { error: "The password confirm is required" }),
    })
    .refine((data) => data.password == data.passwordConfirm, {
        path: ["passwordConfirm"],
        error: "The password confirm does not match the password",
    });
