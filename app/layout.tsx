import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Warehouse",
    description:
        "WarehouseOS is a web-based warehouse management application designed to facilitate the management of products, stock, and inventory movements.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
