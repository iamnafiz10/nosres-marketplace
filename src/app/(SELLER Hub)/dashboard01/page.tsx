"use client";
import React from 'react';
import useTitle from "@/app/useTitle";

function Page() {
    useTitle("Dashboard")
    return (
        <>
            <section id="dashboard-section">
                <div className="w-full pt-[50px]">
                    {/* Dashboard Body */}
                    <div className="ml-0 lg:ml-[295px]">
                        <div className="mx-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                                <div className="col box bg-white rounded p-4 cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div className="wrap">
                                            <div className="text-[14px] text-prgcolor">
                                                Listings quantity
                                            </div>
                                            <div className="text-[20px] font-semibold">
                                                <h4>5</h4>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                <span className="flex items-center">30%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col box bg-white rounded p-4 cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div className="wrap">
                                            <div className="text-[14px] text-prgcolor">
                                                Total Sales
                                            </div>
                                            <div className="text-[20px] font-semibold">
                                                <h4>15</h4>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className="bg-primary rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                <span className="flex items-center">25%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col box bg-white rounded p-4 cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div className="wrap">
                                            <div className="text-[14px] text-prgcolor">
                                                Total Orders
                                            </div>
                                            <div className="text-[20px] font-semibold">
                                                <h4>3</h4>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className="bg-yellow-300 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                <span className="flex items-center">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col box bg-white rounded p-4 cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div className="wrap">
                                            <div className="text-[14px] text-prgcolor">
                                                Total Balance
                                            </div>
                                            <div className="text-[20px] font-semibold">
                                                <h4>$765</h4>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className="bg-blue-400 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                <span className="flex items-center">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;