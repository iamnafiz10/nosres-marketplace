"use client";
import React from 'react';
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import Image from "next/image";
import ReportImg from '../../../../public/assets/images/report-image.png';

function Page() {
    useTitle("Report Issue")
    const loading = useLoading();
    return (
        <>
            <section id="report-section">
                <div className="container">
                    <div className="w-full pt-[80px] pb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="col text_box">
                                <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-[#263F5C] font-bold md:font-medium mb-4">
                                    Report <span className="text-[#3A5F8A]">an</span>
                                    <span className="text-primary"> Issue</span>
                                </h1>
                                <p className="mt-3 text-[16px]">
                                    Our application is a work in progress. Consequently, if you encounter any
                                    issues or have suggestions for improvements, please report them here. Your
                                    feedback is valuable in helping us make our application better
                                </p>
                                <button
                                    className="text-white bg-primary hover:bg-[#3A5F8A] hover:text-white rounded px-6 py-2 mt-3 border text-[14px]">
                                    Report an Issue
                                </button>
                            </div>
                            <div className="col image_boxx mt-6 lg:mt-0">
                                <Image src={ReportImg} className="w-full h-full"
                                       alt="ReportImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;