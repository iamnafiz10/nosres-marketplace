"use client";
import React from 'react';
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";

function Page() {
    useTitle("Checkout")
    const loading = useLoading();
    return (
        <>
            <section id="checkout-section">
                <div className="container pt-[50px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            HI
                        </div>
                        <div className="col-span-7">
                            <div className="header_wrap">
                                {loading ? (
                                    <Skeleton height={20} count={1}/>
                                ) : (
                                    <>
                                        <h4 className="text-[20px] font-semibold">
                                            Checkout
                                        </h4>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col-span-3">
                            HI
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;