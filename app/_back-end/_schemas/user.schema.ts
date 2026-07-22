import z, { email } from "zod";

export const userSchema = z
    .object({
        fullname: z.string({
            error: "The fullname is required",
        }),
        email: z.email({
            error: "The email is required and must be a valid email",
        }),
        password: z.string({ error: "The password is required" }),
        passwordConfirm: z.string({
            error: "The passworf confirm is required",
        }),
    })
    .refine((data) => data.password == data.passwordConfirm, {
        path: ["passwordConfirm"],
        error: "The password confirm does not match the password",
    });
