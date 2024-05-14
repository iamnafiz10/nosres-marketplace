"use client";
import React from 'react';
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";

function Page() {
    useTitle("Orders")
    const loading = useLoading();
    return (
        <>
            <section id="order-section">
                <div className="container pt-[50px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-2"></div>
                        <div className="col ml-0 lg:ml-10 lg:col-span-10">
                            <div className="header_wrap mt-4">
                                {loading ? (
                                    <div>
                                        <Skeleton height={20} count={1}/>
                                        <Skeleton height={10} count={1}/>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-[20px] font-semibold">
                                            Orders
                                        </h4>
                                        <h4 className="text-[14px] text-graycolor">
                                            View and manage all your orders
                                        </h4>
                                    </>
                                )}
                            </div>

                            {/* Product Table */}
                            <div className="block mt-6 w-full overflow-x-auto">
                                <table className="items-start bg-transparent w-full border-collapse">
                                    <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                            Order ID
                                        </th>
                                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                            Order Placed
                                        </th>
                                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                            Total
                                        </th>
                                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">

                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                            <h4 className="text-[14px] font-semibold text-prgcolor">
                                                #100190
                                            </h4>
                                        </th>
                                        <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                            <div className="flex items-center gap-4">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    01 May 2024
                                                </h4>
                                                <button type='button'
                                                        className="text-[12px] py-1 px-4 bg-[#E6EDF4] rounded text-primary text-prgcolor">
                                                    In progress
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                            <h4 className="text-[14px] font-semibold text-prgcolor">
                                                $11890.00
                                            </h4>
                                        </td>
                                        <td className="align-top border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button type='button'
                                                    className="py-2 px-4 text-[14px] bg-primary text-white border border-primary rounded hover:bg-transparent hover:text-primary transition">
                                                Order Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">
                                            <div className="product_image cursor-pointer">
                                                <Image src={ProductImg} className="w-20" alt="ProductImg"/>
                                            </div>
                                        </th>
                                        <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    T-Shirt - Black
                                                </h4>
                                                <h4 className="text-[14px] font-normal text-graycolor">
                                                    Delivery: <span className="text-prgcolor">Ship Only</span>
                                                </h4>
                                            </div>
                                        </td>
                                        <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            <h4 className="text-[14px] font-normal text-prgcolor">
                                                $120.00
                                            </h4>
                                        </td>
                                        <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                        </td>
                                    </tr>
                                    <tr className="border-b-2">
                                        <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">
                                            <div className="product_image cursor-pointer">
                                                <Image src={ProductImg} className="w-20" alt="ProductImg"/>
                                            </div>
                                        </th>
                                        <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    T-Shirt - Red
                                                </h4>
                                                <h4 className="text-[14px] font-normal text-graycolor">
                                                    Delivery: <span className="text-prgcolor">Ship Only</span>
                                                </h4>
                                            </div>
                                        </td>
                                        <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            <h4 className="text-[14px] font-normal text-prgcolor">
                                                $210.00
                                            </h4>
                                        </td>
                                        <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                            <h4 className="text-[14px] font-semibold text-prgcolor">
                                                #100191
                                            </h4>
                                        </th>
                                        <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                            <div className="flex items-center gap-4">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    02 May 2024
                                                </h4>
                                                <button type='button'
                                                        className="text-[12px] py-1 px-4 bg-[#E6EDF4] rounded text-primary text-prgcolor">
                                                    In progress
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                            <h4 className="text-[14px] font-semibold text-prgcolor">
                                                $12523.00
                                            </h4>
                                        </td>
                                        <td className="align-top border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button type='button'
                                                    className="py-2 px-4 text-[14px] bg-primary text-white border border-primary rounded hover:bg-transparent hover:text-primary transition">
                                                Order Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">
                                            <div className="product_image cursor-pointer">
                                                <Image src={ProductImg} className="w-20" alt="ProductImg"/>
                                            </div>
                                        </th>
                                        <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    T-Shirt - Yellow
                                                </h4>
                                                <h4 className="text-[14px] font-normal text-graycolor">
                                                    Delivery: <span className="text-prgcolor">Ship Only</span>
                                                </h4>
                                            </div>
                                        </td>
                                        <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            <h4 className="text-[14px] font-normal text-prgcolor">
                                                $172.00
                                            </h4>
                                        </td>
                                        <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;