"use client";
import AlertPopup from "@/app/_components/layout/global/AlertPopup";
import { UserI } from "@/app/_types/User";
import { RiArrowRightLongLine } from "@remixicon/react";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState<UserI>({
        fullname: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let success: boolean = false;

        try {
            const { data } = await axios.post("/api/auth/register", formData);

            success = true;
        } catch (error) {
            console.log(error.response);

            setErrorMessage(
                error.response?.data?.message || "Something went wrong!"
            );
        }

        if (success) {
            redirect("/login");
        }
    }

    return (
        <div className=" bg-white rounded-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch p-8 border-b border-neutral-300 flex flex-col justify-start items-start gap-1">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-900 text-2xl font-semibold leading-8">
                        Create Account
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-700 text-sm font-normal leading-5">
                        Join the logistics network. Secure access to your
                        inventory
                        <br />
                        management systems.
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="self-stretch p-8 flex flex-col justify-start items-start gap-4"
            >
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <fieldset className="w-full">
                        <legend className="fieldset-legend">Full Name</legend>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="e.g. John Doe"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <fieldset className="w-full">
                        <legend className="fieldset-legend">
                            Email Address
                        </legend>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="e.g. john.doe@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <fieldset className="w-full">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <fieldset className="w-full">
                        <legend className="fieldset-legend">
                            Password Confirm
                        </legend>
                        <input
                            type="password"
                            className="input w-full bg-gray-100"
                            placeholder="Confirm your password"
                            name="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>

                <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                    <button className="self-stretch py-4 bg-black shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-2 cursor-pointer">
                        <div className="text-center justify-center text-white text-sm font-medium uppercase leading-5 tracking-wider">
                            CREATE ACCOUNT
                        </div>
                        <RiArrowRightLongLine className="text-white" />
                    </button>
                </div>
                <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-center">
                        <div className="text-center justify-center">
                            <span className="text-zinc-700 text-sm font-normal leading-5">
                                Already have an account?{" "}
                            </span>
                            <Link
                                href="/login"
                                className="text-amber-800 text-sm font-normal leading-5"
                            >
                                Login here
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
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
