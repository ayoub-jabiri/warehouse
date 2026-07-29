"use client";
import { RiSave2Line } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import AlertPopup from "@/app/_components/global/AlertPopup";
import { type CategoryI } from "@/app/_types/Category";
import { set } from "mongoose";

interface FormErrors {
    name?: { error: string };
    description?: { error: string };
}

export default function AddNewCategory() {
    const [newCategoryData, setNewCategoryData] = useState<CategoryI>({
        name: "",
        description: "",
    });
    const [formErrors, setFormErros] = useState<FormErrors | null>(null);
    const [successMessage, setSuccessMessage] = useState<null | string>(null);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewCategoryData((prevData: CategoryI) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSaveCategory(
        e: React.SubmitEvent<HTMLFormElement>
    ): Promise<void> {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                `/api/categories`,
                newCategoryData
            );

            setSuccessMessage(data.message);
            setFormErros(null);
            setNewCategoryData({
                name: "",
                description: "",
            });
        } catch (error) {
            console.error("Error saving category:", error.response);
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
                                <Link href="/categories">Categories</Link>
                            </li>

                            <li>Add New Category</li>
                        </ul>
                    </div>
                </section>
                <section className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <h1 className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Inter'] leading-10">
                            Add New Category to Catalog
                        </h1>
                    </div>
                </section>
                <form
                    onSubmit={handleSaveCategory}
                    className="bg-white w-full p-6 border border-[#C7C4D8] flex flex-col gap-5 rounded-md"
                >
                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Category Name
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter the category name"
                                name="name"
                                value={newCategoryData.name}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.name &&
                                    `* ${formErrors.name.error}`}
                            </p>
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Category Description
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter the category description"
                                name="description"
                                value={newCategoryData.description}
                                onChange={handleChange}
                            />
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.description &&
                                    `* ${formErrors.description.error}`}
                            </p>
                        </fieldset>
                    </div>
                    <div className="self-stretch pt-4 mt-4 border-t border-slate-300 inline-flex justify-end items-center gap-4">
                        <button className="size- px-8 py-2.5 bg-black rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-2 cursor-pointer">
                            <div className="size- inline-flex flex-col justify-start items-center">
                                <RiSave2Line className="text-white" />
                            </div>
                            <div className="text-center justify-center text-white text-sm font-medium font-['Inter'] leading-5">
                                Save Category
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
