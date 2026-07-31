"use client";
import AlertPopup from "@/app/_components/global/AlertPopup";
import { type MovementI } from "@/app/_types/Movement";
import { type ProductI } from "@/app/_types/Product";
import { RiCheckLine } from "@remixicon/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FormErrors {
    productId?: { error: string };
    quantity?: { error: string };
    movementType?: { error: string };
}

export default function Movements() {
    const [newMovementData, setNewMovementData] = useState<MovementI>({
        productId: "",
        quantity: "",
        movementType: "",
    });
    const [products, setProducts] = useState<ProductI[]>([]);
    const [formErrors, setFormErros] = useState<FormErrors | null>(null);
    const [successMessage, setSuccessMessage] = useState<null | string>(null);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewMovementData((prevData: MovementI) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get("/api/products");
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    async function handleSaveMovement(
        e: React.SubmitEvent<HTMLFormElement>
    ): Promise<void> {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                "/api/movements",
                newMovementData
            );
            setSuccessMessage(data.message);
            setErrorMessage(null);
            setFormErros(null);
            setNewMovementData({
                productId: "",
                quantity: "",
                movementType: "",
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
        <div className="flex flex-col gap-8 py-8">
            {/* Breadcrumb */}
            <section>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <Link href="/">Dashboard</Link>
                        </li>

                        <li>Movements</li>
                    </ul>
                </div>
            </section>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-black text-3xl font-semibold leading-tight">
                        Record Stock Movement
                    </h1>
                    <p className="max-w-2xl text-zinc-700 text-base">
                        Execute industrial-grade logistics tracking by
                        documenting SKU inflow or outflow events with precision.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left / Main Form Panel */}
                <div className="lg:col-span-2 p-8 bg-white shadow-sm border border-neutral-300 flex flex-col gap-6">
                    {/* Form Inputs Grid */}
                    <form
                        onSubmit={handleSaveMovement}
                        className="bg-white w-full p-6 border border-[#C7C4D8] flex flex-col gap-5 rounded-md"
                    >
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Movement Type
                            </legend>
                            <select
                                className="select w-full"
                                name="movementType"
                                value={newMovementData.movementType}
                                onChange={handleChange}
                            >
                                <option value="" disabled>
                                    The movement type
                                </option>
                                <option value="entrance">Entrance</option>
                                <option value="exit">Exit</option>
                            </select>
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.movementType &&
                                    `* ${formErrors.movementType.error}`}
                            </p>
                        </fieldset>
                        <div className="flex justify-between">
                            <fieldset className="fieldset w-[49%]">
                                <legend className="fieldset-legend">
                                    Product
                                </legend>
                                <select
                                    className="select w-full"
                                    name="productId"
                                    value={newMovementData.productId}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        The product
                                    </option>
                                    {products.map((product) => (
                                        <option
                                            key={product.id}
                                            value={product.id}
                                        >
                                            {product.name}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-[#F44336] text-sm mt-2">
                                    {formErrors?.productId &&
                                        `* ${formErrors.productId.error}`}
                                </p>
                            </fieldset>
                            <fieldset className="fieldset w-[49%]">
                                <legend className="fieldset-legend">
                                    Quantity
                                </legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="0.00"
                                    name="quantity"
                                    value={newMovementData.quantity}
                                    onChange={handleChange}
                                />
                                <p className="text-[#F44336] text-sm mt-2">
                                    {formErrors?.quantity &&
                                        `* ${formErrors.quantity.error}`}
                                </p>
                            </fieldset>
                        </div>
                        <div className="flex justify-end pt-4">
                            <button className="px-8 py-2 bg-amber-800 hover:bg-amber-900 text-white text-sm font-normal uppercase tracking-widest flex items-center gap-3 transition-colors cursor-pointer">
                                <RiCheckLine />
                                CONFIRM SHIPMENT
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Sidebar */}
                <div className="flex flex-col gap-6">
                    {/* Recent Movement Logs */}
                    <div className="p-4 bg-gray-200 border border-neutral-300 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="size-2.5 bg-zinc-700" />
                            <span className="text-zinc-700 text-xs font-medium uppercase tracking-wide">
                                RECENT MOVEMENT LOGS
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            {/* Log Item 1 */}
                            <div className="p-3 bg-white border border-neutral-300 flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-amber-800">
                                        + ENTRANCE
                                    </span>
                                    <span className="text-zinc-700 text-[10px]">
                                        14:22 PM
                                    </span>
                                </div>
                                <span className="text-zinc-900 text-base">
                                    SKU-441-A • 500 Units
                                </span>
                            </div>

                            {/* Log Item 2 */}
                            <div className="p-3 bg-white/60 border border-neutral-300 flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-black">- EXIT</span>
                                    <span className="text-zinc-700 text-[10px]">
                                        12:05 PM
                                    </span>
                                </div>
                                <span className="text-zinc-900 text-base">
                                    SKU-129-C • 12 Units
                                </span>
                            </div>

                            {/* Log Item 3 */}
                            <div className="p-3 bg-white/60 border border-neutral-300 flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-amber-800">
                                        + ENTRANCE
                                    </span>
                                    <span className="text-zinc-700 text-[10px]">
                                        09:14 AM
                                    </span>
                                </div>
                                <span className="text-zinc-900 text-base">
                                    SKU-882-X • 1,200 Units
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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
