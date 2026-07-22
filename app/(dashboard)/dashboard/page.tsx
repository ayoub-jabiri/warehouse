"use client";
import { RiExchangeFundsLine } from "@remixicon/react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data, status } = useSession();

    if (status === "loading") {
        return (
            <div className="h-[calc(100vh-60px)] flex justify-center items-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className=" py-8 inline-flex flex-col justify-start items-start gap-y-8">
            <section className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <h1 className="self-stretch justify-center text-zinc-900 text-5xl font-bold leading-[56px]">
                        Welcome back, {data?.user?.name}
                    </h1>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-700 text-lg font-normal leading-7">
                        Your warehouse operations are running within optimal
                        parameters. System
                        <br />
                        heartbeat is nominal across all 4 sectors.
                    </div>
                </div>
            </section>
            <section className="w-full grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-3 p-8 bg-white outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch pb-4 border-b border-neutral-300 inline-flex justify-start items-center gap-4">
                        <div className="size-16 bg-gray-200 rounded-sm flex justify-center items-center overflow-hidden">
                            <img
                                className="flex-1 self-stretch relative"
                                src="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="size- inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-900 text-2xl font-semibold leading-8">
                                    {data?.user?.name}
                                </div>
                            </div>
                            <div className="size- px-2 py-0.5 bg-rose-200/30 inline-flex justify-start items-start">
                                <div className="justify-center text-amber-800 text-xs font-medium leading-4 tracking-wide">
                                    ADMINISTRATOR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-zinc-700 text-xs font-medium uppercase leading-4 tracking-wide">
                                    EMAIL ADDRESS
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-zinc-900 text-base font-normal leading-6">
                                    {data?.user?.email}
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-zinc-700 text-xs font-medium uppercase leading-4 tracking-wide">
                                    DEPARTMENT
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-zinc-900 text-base font-normal leading-6">
                                    Central Logistics Hub
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-zinc-700 text-xs font-medium uppercase leading-4 tracking-wide">
                                    CONNECTION DATE
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-zinc-900 text-base font-normal leading-6">
                                    Oct 14, 2023 • 08:42 AM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9 inline-flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch inline-flex max-sm:flex-col justify-center items-start gap-6">
                        <div className="max-lg:w-full w-60 px-4 pt-5 pb-4 bg-white outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-2.5">
                            <div className="justify-center text-zinc-700 text-xs font-medium uppercase leading-4 tracking-wide">
                                ACTIVE SHIPMENTS
                            </div>
                            <div className="self-stretch inline-flex justify-between items-end">
                                <div className="size- inline-flex flex-col justify-start items-start">
                                    <div className="justify-center text-black text-5xl font-bold leading-[48px]">
                                        24
                                    </div>
                                </div>
                                <div className="size- flex justify-start items-center">
                                    <div className="justify-center text-green-600 text-sm font-medium leading-5 tracking-tight">
                                        +4.2%
                                    </div>
                                    <div className="size- inline-flex flex-col justify-start items-start">
                                        <RiExchangeFundsLine className=" text-green-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:w-full w-60 px-4 pt-5 pb-4 bg-white outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-2.5">
                            <div className="justify-center text-zinc-700 text-xs font-medium uppercase leading-4 tracking-wide">
                                LOW STOCK ALERTS
                            </div>
                            <div className="self-stretch inline-flex justify-between items-end">
                                <div className="size- inline-flex flex-col justify-start items-start">
                                    <div className="justify-center text-amber-800 text-5xl font-bold leading-[48px]">
                                        08
                                    </div>
                                </div>
                                <div className="size- inline-flex flex-col justify-start items-start">
                                    <div className="justify-center text-zinc-700 text-sm font-medium leading-5 tracking-tight">
                                        Review Now
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:w-full w-60 px-4 pt-5 pb-4 bg-white outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-2.5">
                            <div className="justify-center text-zinc-700 text-xs font-medium uppercase leading-4 tracking-wide">
                                SYSTEM STATUS
                            </div>
                            <div className="self-stretch inline-flex justify-start items-end gap-2">
                                <div className="w-3 h-5 pb-2 inline-flex flex-col justify-start items-start">
                                    <div className="size-3 bg-green-500 rounded-xl" />
                                </div>
                                <div className="size- inline-flex flex-col justify-start items-start">
                                    <div className="justify-center text-black text-5xl font-bold leading-[48px]">
                                        99.9%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
