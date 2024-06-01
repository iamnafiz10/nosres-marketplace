"use client";
import React from 'react';
import {LuShoppingBag} from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import {MdSearchOff} from "react-icons/md";

function Page() {
    const loading = useLoading();
    return (
        <>
            <section id="thank-you-order-section" className="flex justify-center items-center h-screen">
                <div className="thank_you_box rounded-lg text-center py-[35px] px-[55px]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="icon">
                            <MdSearchOff size={100} className="text-graycolor"/>
                        </div>
                        <h4 className="text-prgcolor text-[20px]">
                            Sorry, no results were found for<br/>
                            “qtqqtqtaaaavavava”.
                        </h4>
                        <div className="block items-center justify-center w-full mt-4">
                            <h4 className="text-[14px] w-full text-graycolor">
                                Try a new search.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;