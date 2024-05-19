"use client";
import React from 'react';
import useTitle from "@/app/useTitle";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import {CiLock} from "react-icons/ci";
import useLoading from "@/app/useLoading";

function Page() {
    useTitle("Dashboard")
    const loading = useLoading();
    return (
        <>
            <section id="dashboard-section">
                <div className="w-full pt-[50px] pb-20">
                    {/* Dashboard Body */}
                    <div className="ml-0 lg:ml-[295px]">
                        <div className="mx-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                                {loading ? (
                                    <Skeleton height={80} count={1}/>
                                ) : (
                                    <>
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
                                    </>
                                )}
                                {loading ? (
                                    <Skeleton height={80} count={1}/>
                                ) : (
                                    <>
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
                                    </>
                                )}

                                {loading ? (
                                    <Skeleton height={80} count={1}/>
                                ) : (
                                    <>
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
                                    </>
                                )}

                                {loading ? (
                                    <Skeleton height={80} count={1}/>
                                ) : (
                                    <>
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
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="mx-5 mt-4">
                            {loading ? (
                                <Skeleton height={50} count={1}/>
                            ) : (
                                <>
                                    <div
                                        className="stripe_account bg-white rounded block lg:flex items-center justify-between py-4 px-6">
                                        <div className="wrap">
                                            <div className="flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                        strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path
                                                            d="m2 7 4.41-4.41A2 2 0 01 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 00 2-2v-8"/>
                                                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
                                                        <path d="M27h20"/>
                                                        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82
                                                        0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7
                                                        2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0
                                                        0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
                                                    </svg>
                                                </div>
                                                <h4 className='text-[14px] text-prgcolor'>Set Up Stripe Account</h4>
                                            </div>
                                            <h4 className='text-[12px] text-graycolor mt-1 ml-[1px]'>
                                                Before you can sell on Nosres Marketplace, you need to have a Stripe
                                                account. You can link an existing account or create a new one.
                                            </h4>
                                        </div>
                                        <button type='button'
                                                className="mt-2 lg:mt-0 py-2 px-4 bg-primary rounded text-[14px] border border-primary text-white hover:bg-transparent hover:text-primary">
                                            Get Started
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mx-5 mt-4">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                                <div className="col lg:col-span-8">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={30} count={1}/>
                                            <Skeleton height={273} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <div
                                                className="flex flex-col items-start w-full max-w-screen-md px-6 py-4 bg-white rounded">
                                                <h2 className="text-[16px] font-[500]">Shop Visits</h2>
                                                <div
                                                    className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
                                                    {/* Jan */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">5,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[40px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Jan</span>
                                                    </div>

                                                    {/* Feb */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">7,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[85px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Feb</span>
                                                    </div>

                                                    {/* Mar */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">8,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[150px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Mar</span>
                                                    </div>

                                                    {/* Apr */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">12,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[150px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Apr</span>
                                                    </div>

                                                    {/* May */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">5,150</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[82px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">May</span>
                                                    </div>

                                                    {/* Jun */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">1,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[20px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Jun</span>
                                                    </div>

                                                    {/* Jul */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">52,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[225px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Jul</span>
                                                    </div>

                                                    {/* Aug */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">7,200</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[98px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Aug</span>
                                                    </div>

                                                    {/* Sep */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">500</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[15px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Sep</span>
                                                    </div>

                                                    {/* Oct */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">2,360</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[46px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Oct</span>
                                                    </div>

                                                    {/* Nov */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">9,200</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-[148px] bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Nov</span>
                                                    </div>

                                                    {/* Dec */}
                                                    <div
                                                        className="relative flex flex-col items-center flex-grow pb-5 group">
                                                <span
                                                    className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">75,000</span>
                                                        <div className="flex items-end w-[5px]">
                                                            <div
                                                                className="relative flex justify-center flex-grow h-40 bg-primary rounded-full"></div>
                                                        </div>
                                                        <span
                                                            className="absolute bottom-0 text-[12px] text-graycolor font-normal">Dec</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="col lg:col-span-4">
                                    <div className="box py-4 px-6 bg-white rounded">
                                        <div className="product_wrap space-y-3">
                                            {loading ? (
                                                <Skeleton height={20} count={1}/>
                                            ) : (
                                                <>
                                                    <h4 className="text-[14px] text-prgcolor font-semibold">
                                                        Popular Listings
                                                    </h4>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="py-1 flex items-center justify-start gap-2 w-full">
                                                    <Skeleton width={80} height={60} borderRadius="10%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <Link href='#'
                                                          className="show_product group mt-2 flex items-start gap-4">
                                                        <div className="p-1 border rounded">
                                                            <Image src={ProductImg} className="w-16"
                                                                   alt="ProductImg"/>
                                                        </div>
                                                        <div className="product_content">
                                                            <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                                iPhone XS</h4>
                                                            <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                                        </div>
                                                    </Link>
                                                </>
                                            )}

                                            {loading ? (
                                                <div className="py-1 flex items-center justify-start gap-2 w-full">
                                                    <Skeleton width={80} height={60} borderRadius="10%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <Link href='#'
                                                          className="show_product group mt-2 flex items-start gap-4">
                                                        <div className="p-1 border rounded">
                                                            <Image src={ProductImg} className="w-16"
                                                                   alt="ProductImg"/>
                                                        </div>
                                                        <div className="product_content">
                                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">T-Shirt</h4>
                                                            <h4 className="text-[12px] text-graycolor">$450.00</h4>
                                                        </div>
                                                    </Link>
                                                </>
                                            )}

                                            {loading ? (
                                                <div className="py-1 flex items-center justify-start gap-2 w-full">
                                                    <Skeleton width={80} height={60} borderRadius="10%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <Link href='#'
                                                          className="show_product group mt-2 flex items-start gap-4">
                                                        <div className="p-1 border rounded">
                                                            <Image src={ProductImg} className="w-16"
                                                                   alt="ProductImg"/>
                                                        </div>
                                                        <div className="product_content">
                                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">Polo
                                                                Shirt</h4>
                                                            <h4 className="text-[12px] text-graycolor">$320.00</h4>
                                                        </div>
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 mt-8">
                            <div className="header_wrap mt-4">
                                {loading ? (
                                    <div>
                                        <Skeleton height={20} count={1}/>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-[16px] font-normal">
                                            Recent Order
                                        </h4>
                                    </>
                                )}
                            </div>
                            <div className="block mt-2 w-full overflow-x-auto bg-white rounded">
                                {loading ? (
                                    <div>
                                        <div className="px-2 py-1">
                                            <Skeleton height={40} count={1}/>
                                        </div>
                                        <div className="px-2 py-1 w-full">
                                            <Skeleton height={30} count={1}/>
                                        </div>
                                        <div className="px-2 py-1 w-full">
                                            <Skeleton height={30} count={1}/>
                                        </div>
                                        <div className="px-2 py-1 w-full">
                                            <Skeleton height={30} count={1}/>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <table className="items-start bg-transparent w-full border-collapse">
                                            <thead>
                                            <tr>
                                                <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                    Product Name
                                                </th>
                                                <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                    Amount
                                                </th>
                                                <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                    Price
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        iPhone 15
                                                    </h4>
                                                </th>
                                                <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-center">
                                                    <div
                                                        className="text-[12px] py-1 px-4 w-[90px] bg-green-200 rounded text-green-500">
                                                        Completed
                                                    </div>
                                                </td>
                                                <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                                <td className="align-top border-t-0 px-6 text-start border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        iPhone 15
                                                    </h4>
                                                </th>
                                                <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-center">
                                                    <div
                                                        className="text-[12px] py-1 w-[90px] px-4 bg-[#E6EDF4] rounded text-primary">
                                                        In progress
                                                    </div>
                                                </td>
                                                <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                                <td className="align-top border-t-0 px-6 text-start border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        iPhone 14
                                                    </h4>
                                                </th>
                                                <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-center">
                                                    <div
                                                        className="text-[12px] py-1 px-4 w-[90px] bg-red-200 rounded text-red-600">
                                                        Canceled
                                                    </div>
                                                </td>
                                                <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                                <td className="align-top border-t-0 px-6 text-start border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <h4 className="text-[14px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="align-top border-0 px-6 p-4 pb-4 whitespace-nowrap text-left">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        Samsung
                                                    </h4>
                                                </th>
                                                <td className="align-top border-0 px-6 p-4 pb-4 whitespace-nowrap text-center">
                                                    <div
                                                        className="text-[12px] py-1 w-[90px] px-4 bg-yellow-100 rounded text-yellow-400">
                                                        Pending
                                                    </div>
                                                </td>
                                                <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-4">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                                <td className="align-top border-t-0 px-6 text-start border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-4">
                                                    <h4 className="text-[12px] font-normal text-prgcolor">
                                                        $5015.00
                                                    </h4>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;