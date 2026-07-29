"use client";
import Loading from "@/app/_components/global/Loading";
import { type CategoryI } from "@/app/_types/Category";
import { RiAddLine } from "@remixicon/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ca } from "zod/locales";

export default function Categories() {
    const [loading, setLoading] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoryI[] | null>(null);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get("/api/categories");
                setCategories(data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
                const errorMessage: string =
                    error.response?.data?.message ||
                    error.response?.statusText ||
                    "Something went wrong!";

                setError(errorMessage);
                setCategories(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col gap-8 py-8">
            {/* Breadcrumb */}
            <section>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <Link href="/">Dashboard</Link>
                        </li>

                        <li>Categories</li>
                    </ul>
                </div>
            </section>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-black text-3xl font-semibold leading-tight">
                        Category Management
                    </h1>
                    <p className="text-zinc-700 text-base">
                        Configure and organize product classification
                        hierarchies.
                    </p>
                </div>
                <Link
                    href="/categories/add-new-category"
                    className="px-4 py-2 bg-black flex items-center gap-2 text-white text-base font-normal tracking-wide"
                >
                    <RiAddLine />
                    Add Category
                </Link>
            </div>

            {loading && <Loading />}

            {!categories?.length && categories != null && (
                <div className="col-span-12 h-[200px] flex justify-center items-center">
                    <p>No Categories to Show!</p>
                </div>
            )}

            {/* Main Table Card */}
            {categories?.length && (
                <div className="bg-white border border-neutral-300 flex flex-col overflow-hidden">
                    {/* Tabs / Filter Bar */}
                    <div className="px-8 py-4 bg-gray-100 border-b border-neutral-300 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            ALL CATEGORIES
                        </div>
                    </div>

                    {/* Table Content Container */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-zinc-700 text-base font-bold uppercase tracking-wide border-b border-neutral-300">
                                    <th className="px-8 py-2 w-80">
                                        CATEGORY NAME
                                    </th>
                                    <th className="px-8 py-2 w-96">
                                        DESCRIPTION
                                    </th>
                                    <th className="px-8 py-2 w-64">
                                        CREATION DATE
                                    </th>
                                    <th className="px-8 py-2 text-right">
                                        ACTIONS
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-300">
                                {/* Row 1 */}
                                {categories.map((category: CategoryI) => (
                                    <tr key={category.id}>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="size-8 bg-zinc-200 flex items-center justify-center">
                                                    <div className="size-5 bg-black" />
                                                </div>
                                                <span className="text-black text-base">
                                                    {category.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-zinc-700 text-base max-w-xs">
                                            {category.description}
                                        </td>
                                        <td className="px-8 py-5 text-zinc-700 text-base">
                                            {new Date(
                                                category.createdAt!
                                            ).toLocaleDateString("en-CA")}
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-1">
                                                    <div className="size-4 bg-black" />
                                                </button>
                                                <button className="p-1">
                                                    <div className="size-4 bg-zinc-700" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
