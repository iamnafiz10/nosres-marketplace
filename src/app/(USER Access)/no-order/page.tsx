"use client";
import React from 'react';
import {LuShoppingBag} from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";

function Page() {
    const loading = useLoading();
    return (
        <>
            <section id="thank-you-order-section" className="flex justify-center items-center h-screen">
                <div className="thank_you_box bg-white rounded-lg text-center py-[35px] px-[55px]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="icon">
                            <LuShoppingBag className="w-[50px] h-[50px] text-primary"/>
                        </div>
                        <h4 className="text-prgcolor text-[18px] mt-3">
                            You Currently Have No Orders.
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-3">
                            It looks like you haven’t made any purchases yet. Browse our<br/>
                            wide range of products and find something you love. We’re<br/>
                            sure you’ll find something that catches your eye.
                        </h4>
                        <div className="block items-center justify-center w-full mt-4">
                            <button type='button'
                                    className="text-[14px] py-2 px-6 w-full bg-transparent border text-primary rounded hover:bg-primary hover:text-white">
                                Browse Categories
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;