import { findUserByEmail } from "@/app/_back-end/_services/auth.service";
import { dbConnect } from "@/app/_lib/db";
import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password credentials");
                }

                await dbConnect();
                const user = await findUserByEmail(credentials.email);

                if (!user) {
                    throw new Error("No user found with this email");
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isPasswordValid) {
                    throw new Error("Password is not correct");
                }

                return {
                    id: user.id,
                    name: user.fullname,
                    email: user.email,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRECT,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
