"use client";
import Loading from "@/app/_components/global/Loading";
import { ProductI } from "@/app/_types/Product";
import { RiAddLine, RiBarcodeLine } from "@remixicon/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductI[] | null>(null);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get("/api/products");
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
                const errorMessage: string =
                    error.response?.data?.message ||
                    error.response?.statusText ||
                    "Something went wrong!";

                setError(errorMessage);
                setProducts(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="w-full py-8 bg-slate-50 flex flex-col gap-6">
            {/* Breadcrumb */}
            <section>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <Link href="/">Dashboard</Link>
                        </li>

                        <li>Add New Product</li>
                    </ul>
                </div>
            </section>

            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight">
                        Products
                    </h1>
                    <p className="max-w-xl text-zinc-700 text-base">
                        Manage global stock levels, industrial SKU mapping, and
                        real-time inventory allocation across nodes.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/add-new-product"
                        className="px-8 py-2.5 bg-black flex items-center gap-2 text-white text-sm font-medium tracking-tight"
                    >
                        <RiAddLine />
                        <span>Add Product</span>
                    </Link>
                </div>
            </div>

            {/* Main Card Container */}
            <div className="bg-white shadow-sm outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col overflow-hidden">
                {/* Sub-header */}
                <div className="px-6 py-4 bg-gray-100 border-b border-neutral-300 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="text-zinc-900 text-sm font-bold uppercase tracking-tight">
                            INVENTORY MATRIX
                        </span>
                    </div>
                </div>

                {loading && <Loading />}

                {!products?.length && products != null && (
                    <div className="col-span-12 h-[200px] flex justify-center items-center">
                        <p>No Products to Show!</p>
                    </div>
                )}
                {/* Table Content Container */}
                <div className="overflow-x-auto">
                    {products?.length && (
                        <table className="w-full text-left border-collapse">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-slate-50 border-b border-neutral-300 text-zinc-700 text-xs font-medium uppercase tracking-wide">
                                    <th className="px-6 py-4">NAME</th>
                                    <th className="px-6 py-4">SKU</th>
                                    <th className="px-6 py-4">CATEGORY</th>
                                    <th className="px-6 py-4 text-right">
                                        PRICE
                                    </th>
                                    <th className="px-6 py-4">STOCK</th>
                                    <th className="px-6 py-4 text-right">
                                        ACTIONS
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-neutral-300">
                                {products.map((product: ProductI) => (
                                    <tr key={product.id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 bg-zinc-200 flex items-center justify-center">
                                                    <RiBarcodeLine />
                                                </div>
                                                <span className="text-black text-sm font-medium">
                                                    {product.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-900 text-sm">
                                            {product.sku}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-gray-200 rounded-xl text-zinc-700 text-xs uppercase">
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right text-zinc-900 text-sm">
                                            ${product.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-zinc-900 text-sm font-bold">
                                                    {product.quantity}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-3">
                                                <div className="p-1">
                                                    <div className="w-5 h-3.5 bg-zinc-900" />
                                                </div>
                                                <div className="p-1">
                                                    <div className="size-4 bg-zinc-900" />
                                                </div>
                                                <div className="p-1">
                                                    <div className="size-4 bg-zinc-900" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
