import { RiArrowRightLongLine } from "@remixicon/react";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-96 max-w-96 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-1">
                <h1 className="text-center justify-center text-black text-4xl font-bold leading-[56px]">
                    WarehouseOS
                </h1>
            </div>
            <div className="self-stretch p-8 bg-white shadow-[0px_4px_20px_0px_rgba(15,23,42,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <h2 className="self-stretch justify-center text-zinc-900 text-2xl font-semibold leading-8">
                            System Login
                        </h2>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <p className="self-stretch justify-center text-zinc-700 text-sm font-normal leading-5">
                            Access your inventory and order management
                            <br />
                            dashboard.
                        </p>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <fieldset className="w-full">
                            <legend className="fieldset-legend">
                                Email Address
                            </legend>
                            <input
                                type="text"
                                className="input w-full bg-gray-100"
                                placeholder="Enter your email address"
                                name="email"
                            />
                        </fieldset>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <fieldset className="w-full">
                            <legend className="fieldset-legend">
                                Password
                            </legend>
                            <input
                                type="password"
                                className="input w-full bg-gray-100"
                                placeholder="Enter your password"
                                name="password"
                            />
                        </fieldset>
                    </div>
                    <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                            <button className="self-stretch h-12 bg-black inline-flex justify-center items-center gap-2 cursor-pointer">
                                <div className="size- inline-flex flex-col justify-start items-center">
                                    <div className="text-center justify-center text-white text-sm font-medium leading-5 tracking-tight">
                                        Login to Dashboard
                                    </div>
                                </div>
                                <RiArrowRightLongLine className="text-white" />
                            </button>
                            <div className="self-stretch py-2 inline-flex justify-start items-center gap-2">
                                <div className="w-44 h-px bg-neutral-300" />
                                <div className="size- opacity-50 inline-flex flex-col justify-start items-start">
                                    <div className="justify-center text-zinc-700 text-xs font-medium uppercase leading-4">
                                        OR
                                    </div>
                                </div>
                                <div className="w-44 h-px bg-neutral-300" />
                            </div>
                            <Link
                                href="/register"
                                className="self-stretch h-12 outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center"
                            >
                                <div className="text-center justify-center text-black text-sm font-medium leading-5 tracking-tight">
                                    Create New Account
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
