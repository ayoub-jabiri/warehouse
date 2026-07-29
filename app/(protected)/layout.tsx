"use client";
import { SessionProvider } from "next-auth/react";
import AppHeader from "../_components/layout/AppHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <SessionProvider>
                <AppHeader />
                <main className="min-h-[calc(100vh-60px)] px-10">
                    {children}
                </main>
            </SessionProvider>
        </div>
    );
}
