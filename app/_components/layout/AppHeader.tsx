"use client";
import { type NavLink } from "@/app/_types/NavLink";
import { RiLogoutBoxRLine } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppHeader() {
    const pathname = usePathname();
    const navLinks = [
        { title: "Inventory", href: "/dashboard", isActive: false },
        { title: "Shipments", href: "/shipments", isActive: false },
        { title: "Orders", href: "/orders", isActive: false },
        { title: "Reports", href: "/reports", isActive: false },
    ];

    navLinks.forEach((link: NavLink) => {
        if (link.href == pathname) {
            link.isActive = true;
        }
    });

    return (
        <header className="bg-black">
            <div className="w-full py-4 max-w-[1440px] px-12 inline-flex justify-between items-center">
                <div className="size- flex justify-start items-center gap-8">
                    <div className="size- inline-flex flex-col justify-start items-start">
                        <Link
                            href="/dashboard"
                            className="justify-center text-white text-3xl font-bold"
                        >
                            WarehouseOS
                        </Link>
                    </div>
                    <ul className="size- flex justify-start items-center gap-6">
                        {navLinks.map((link) => (
                            <li
                                key={link.href}
                                className={`flex justify-start items-center py-2 ${
                                    link.isActive
                                        ? "border-b-2 border-amber-800"
                                        : ""
                                }`}
                            >
                                <Link
                                    href={link.href}
                                    className={`justify-center  text-sm font-bold leading-5 tracking-tight transition hover:text-white ${
                                        link.isActive
                                            ? "text-white"
                                            : "text-[#7C839B]"
                                    }`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="size- flex justify-start items-center gap-4">
                    <div className="size- flex flex items-ceneter gap-3">
                        <div className="size- flex flex-col justify-center items-end">
                            <div className="size- flex flex-col justify-start items-start">
                                <div className="justify-center text-white text-sm font-bold leading-5 tracking-tight">
                                    John Doe
                                </div>
                            </div>
                            <div className="size- opacity-70 flex flex-col justify-start items-start">
                                <div className="justify-center text-white text-xs font-medium leading-4 tracking-wide">
                                    john@example.com
                                </div>
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                        <button
                            className="text-white text-sm font-medium leading-5 tracking-tight cursor-pointer"
                            title="Log out"
                        >
                            <RiLogoutBoxRLine />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
