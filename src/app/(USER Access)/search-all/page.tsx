"use client";
import React from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import Image from "next/image";
import CategoryOneImg from '../../../../public/assets/images/category-two.png';

export default function Home() {
    const loading = useLoading();
    useTitle("Search-All")
    return (
        <>
            <section id="home-page-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-2"></div>
                        <div className="col ml-0 lg:ml-10 lg:col-span-6">
                            {/* Body Content */}
                            <div className="heading_wrap">
                                <h4 className="text-[20px] font-[500]">All Categories</h4>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                                <div className="col image_box cursor-pointer pt-4 pl-6 bg-white rounded pb-0">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={150} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-[16px] font-[500]">
                                                Electronics
                                            </h4>
                                            <Image src={CategoryOneImg} className="w-full mt-4" alt="CategoryImg"/>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-4 right_sidebar hidden lg:block ml-7 mt-2 mr-[0px]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

