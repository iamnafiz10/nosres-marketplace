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
                    <div className="p-4 sm:ml-0 lg:ml-[315px] bg-gray-50">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;