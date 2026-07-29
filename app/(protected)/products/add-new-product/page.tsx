"use client";
import { RiSave2Line } from "@remixicon/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertPopup from "@/app/_components/global/AlertPopup";
import { ProductI } from "@/app/_types/Product";

interface FormErrors {
    name?: { error: string };
    sku?: { error: string };
    description?: { error: string };
    category?: { error: string };
    price?: { error: string };
    quantity?: { error: string };
}

export default function AddNewProduct() {
    const [newProductData, setNewProductData] = useState<ProductI>({
        name: "",
        sku: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
    });
    const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
    const [formErrors, setFormErros] = useState<FormErrors | null>(null);
    const [successMessage, setSuccessMessage] = useState<null | string>(null);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewProductData((prevData: ProductI) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get("/api/categories");
                setCategoryOptions(
                    data.categories.map(
                        (category: { name: string }) => category.name
                    )
                );
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    async function handleSaveProduct(
        e: React.SubmitEvent<HTMLFormElement>
    ): Promise<void> {
        e.preventDefault();

        try {
            const { data } = await axios.post(`/api/products`, newProductData);

            setSuccessMessage(data.message);
            setFormErros(null);
            setNewProductData({
                name: "",
                sku: "",
                description: "",
                category: "",
                price: "",
                quantity: "",
            });
        } catch (error) {
            console.error("Error saving product:", error.response);
            if (error.response?.data?.errors) {
                const errors: FormErrors = {};

                error.response?.data?.errors.map((error) => {
                    errors[error.path[0]] = {
                        error: error.message,
                    };
                });

                setFormErros(errors);
            }

            setErrorMessage(
                error.response?.data?.message || "Something went wrong!"
            );
        }
    }

    return (
        <div className="py-8">
            <div className="flex flex-col justify-start items-start gap-6">
                <section>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href="/">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>

                            <li>Add New Product</li>
                        </ul>
                    </div>
                </section>
                <section className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <h1 className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Inter'] leading-10">
                            Add New Product to Catalog
                        </h1>
                    </div>
                </section>
                <form
                    onSubmit={handleSaveProduct}
                    className="bg-white w-full p-6 border border-[#C7C4D8] flex flex-col gap-5 rounded-md"
                >
                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Product Name
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter the product name"
                                name="name"
                                value={newProductData.name}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.name &&
                                    `* ${formErrors.name.error}`}
                            </p>
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                SKU (reference)
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter the SKU of the product"
                                name="sku"
                                value={newProductData.sku}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.sku && `* ${formErrors.sku.error}`}
                            </p>
                        </fieldset>
                    </div>
                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Description
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter the product description"
                                name="description"
                                value={newProductData.description}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.description &&
                                    `* ${formErrors.description.error}`}
                            </p>
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Category
                            </legend>
                            <select
                                className="select w-full"
                                name="category"
                                value={newProductData.category}
                                onChange={handleChange}
                            >
                                <option value="" disabled>
                                    The product category
                                </option>
                                {categoryOptions.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.category &&
                                    `* ${formErrors.category.error}`}
                            </p>
                        </fieldset>
                    </div>
                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">Price</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="e.g. 19.99"
                                name="price"
                                value={newProductData.price}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.price &&
                                    `* ${formErrors.price.error}`}
                            </p>
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Quantity
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="e.g. 100"
                                name="quantity"
                                value={newProductData.quantity}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.quantity &&
                                    `* ${formErrors.quantity.error}`}
                            </p>
                        </fieldset>
                    </div>

                    <div className="self-stretch pt-4 mt-4 border-t border-slate-300 inline-flex justify-end items-center gap-4">
                        <button className="size- px-8 py-2.5 bg-black rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-2 cursor-pointer">
                            <div className="size- inline-flex flex-col justify-start items-center">
                                <RiSave2Line className="text-white" />
                            </div>
                            <div className="text-center justify-center text-white text-sm font-medium font-['Inter'] leading-5">
                                Save Product
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            {successMessage && (
                <AlertPopup
                    isSuccess={true}
                    message={successMessage}
                    setMessage={setSuccessMessage}
                />
            )}
            {errorMessage && (
                <AlertPopup
                    isSuccess={false}
                    message={errorMessage}
                    setMessage={setErrorMessage}
                />
            )}
        </div>
    );
}
