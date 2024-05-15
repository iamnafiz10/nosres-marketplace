"use client";
import React, {useEffect, useRef, useState} from 'react';
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import Link from "next/link";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import {RiArrowDropDownLine} from "react-icons/ri";

function Page() {
    useTitle("Orders")
    const loading = useLoading();

    //----------- FilterUserTab Dropdown Start --------------//
    const [isOpenDropdownFilterUserTab, setIsOpenDropdownFilterUserTab] = useState(false);
    const [selectedOptionFilterUserTab, setSelectedOptionFilterUserTab] = useState("Sort by"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterUserTab = () => {
        setIsOpenDropdownFilterUserTab(!isOpenDropdownFilterUserTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterUserTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterUserTab(option);
        setIsOpenDropdownFilterUserTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterUserTabRef = useRef(null);
    const handleClickOutsideFilterUserTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterUserTabRef.current && !dropdownFilterUserTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterUserTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterUserTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterUserTab);
        };
    }, []);
    //----------- FilterUserTab Dropdown End --------------//
    return (
        <>
            <section id="order-section">
                {/*<div className="container pt-[50px] pb-14">*/}
                {/*    <div className="grid grid-cols-1 lg:grid-cols-12">*/}
                {/*        <div className="col lg:col-span-2"></div>*/}
                {/*        <div className="col ml-0 lg:ml-10 lg:col-span-10">*/}
                {/*            <div className="header_wrap mt-4">*/}
                {/*                {loading ? (*/}
                {/*                    <div>*/}
                {/*                        <Skeleton height={20} count={1}/>*/}
                {/*                        <Skeleton height={10} count={1}/>*/}
                {/*                    </div>*/}
                {/*                ) : (*/}
                {/*                    <>*/}
                {/*                        <h4 className="text-[20px] font-semibold">*/}
                {/*                            Orders*/}
                {/*                        </h4>*/}
                {/*                        <h4 className="text-[14px] text-graycolor">*/}
                {/*                            View and manage all your orders*/}
                {/*                        </h4>*/}
                {/*                    </>*/}
                {/*                )}*/}
                {/*            </div>*/}

                {/*            /!* FilterUserTab dropdown *!/*/}
                {/*            <div className="flex text-[14px] items-center justify-end">*/}
                {/*                <div ref={dropdownFilterUserTabRef} onClick={toggleDropdownFilterUserTab}*/}
                {/*                     className="filter_dropdown  z-20 cursor-pointer relative">*/}
                {/*                    <div*/}
                {/*                        className="w-[150px] h-8 bg-white flex border border-gray-200 rounded items-center">*/}
                {/*                        <input value={selectedOptionFilterUserTab} name="select"*/}
                {/*                               id="select"*/}
                {/*                               className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full bg-white"*/}
                {/*                               readOnly/>*/}
                {/*                        <button type='button'*/}
                {/*                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">*/}
                {/*                            <RiArrowDropDownLine size={25}/>*/}
                {/*                        </button>*/}
                {/*                    </div>*/}

                {/*                    {isOpenDropdownFilterUserTab && (*/}
                {/*                        <div*/}
                {/*                            className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">*/}
                {/*                            <div className="cursor-pointer"*/}
                {/*                                 onClick={() => handleOptionSelectFilterUserTab("Sort by")}>*/}
                {/*                                <div*/}
                {/*                                    className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">*/}
                {/*                                    Sort by*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="cursor-pointer"*/}
                {/*                                 onClick={() => handleOptionSelectFilterUserTab("Relevance")}>*/}
                {/*                                <div*/}
                {/*                                    className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">*/}
                {/*                                    Relevance*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="cursor-pointer"*/}
                {/*                                 onClick={() => handleOptionSelectFilterUserTab("Popular")}>*/}
                {/*                                <div*/}
                {/*                                    className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">*/}
                {/*                                    Popular*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="cursor-pointer"*/}
                {/*                                 onClick={() => handleOptionSelectFilterUserTab("Newest")}>*/}
                {/*                                <div*/}
                {/*                                    className="block p-2 border-transparent border-l-4 hover:border-primary border-blue-600 hover:bg-gray-100">*/}
                {/*                                    Newest*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!* Product Table *!/*/}
                {/*            <div className="block mt-2 w-full overflow-x-auto">*/}
                {/*                <table className="items-start bg-transparent w-full border-collapse">*/}
                {/*                    <thead>*/}
                {/*                    <tr>*/}
                {/*                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}
                {/*                            Order ID*/}
                {/*                        </th>*/}
                {/*                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}
                {/*                            Order Placed*/}
                {/*                        </th>*/}
                {/*                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}
                {/*                            Total*/}
                {/*                        </th>*/}
                {/*                        <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}

                {/*                        </th>*/}
                {/*                    </tr>*/}
                {/*                    </thead>*/}

                {/*                    <tbody>*/}
                {/*                    <tr>*/}
                {/*                        <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
                {/*                            <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                #100190*/}
                {/*                            </h4>*/}
                {/*                        </th>*/}
                {/*                        <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
                {/*                            <div className="flex items-center gap-4">*/}
                {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                    01 May 2024*/}
                {/*                                </h4>*/}
                {/*                                <button type='button'*/}
                {/*                                        className="text-[12px] py-1 px-4 bg-[#E6EDF4] rounded text-primary text-prgcolor">*/}
                {/*                                    In progress*/}
                {/*                                </button>*/}
                {/*                            </div>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">*/}
                {/*                            <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                $11890.00*/}
                {/*                            </h4>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-top border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                {/*                            <button type='button'*/}
                {/*                                    className="py-2 px-4 text-[14px] bg-primary text-white border border-primary rounded hover:bg-transparent hover:text-primary transition">*/}
                {/*                                Order Details*/}
                {/*                            </button>*/}
                {/*                        </td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">*/}
                {/*                            <div className="product_image cursor-pointer">*/}
                {/*                                <Image src={ProductImg} className="w-20" alt="ProductImg"/>*/}
                {/*                            </div>*/}
                {/*                        </th>*/}
                {/*                        <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">*/}
                {/*                            <div className="wrap">*/}
                {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                    T-Shirt - Black*/}
                {/*                                </h4>*/}
                {/*                                <h4 className="text-[14px] font-normal text-graycolor">*/}
                {/*                                    Delivery: <span className="text-prgcolor">Ship Only</span>*/}
                {/*                                </h4>*/}
                {/*                            </div>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">*/}
                {/*                            <h4 className="text-[14px] font-normal text-prgcolor">*/}
                {/*                                $120.00*/}
                {/*                            </h4>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}

                {/*                        </td>*/}
                {/*                    </tr>*/}
                {/*                    <tr className="border-b-2">*/}
                {/*                        <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">*/}
                {/*                            <div className="product_image cursor-pointer">*/}
                {/*                                <Image src={ProductImg} className="w-20" alt="ProductImg"/>*/}
                {/*                            </div>*/}
                {/*                        </th>*/}
                {/*                        <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">*/}
                {/*                            <div className="wrap">*/}
                {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                    T-Shirt - Red*/}
                {/*                                </h4>*/}
                {/*                                <h4 className="text-[14px] font-normal text-graycolor">*/}
                {/*                                    Delivery: <span className="text-prgcolor">Ship Only</span>*/}
                {/*                                </h4>*/}
                {/*                            </div>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">*/}
                {/*                            <h4 className="text-[14px] font-normal text-prgcolor">*/}
                {/*                                $210.00*/}
                {/*                            </h4>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}

                {/*                        </td>*/}
                {/*                    </tr>*/}

                {/*                    <tr>*/}
                {/*                        <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
                {/*                            <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                #100191*/}
                {/*                            </h4>*/}
                {/*                        </th>*/}
                {/*                        <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
                {/*                            <div className="flex items-center gap-4">*/}
                {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                    02 May 2024*/}
                {/*                                </h4>*/}
                {/*                                <button type='button'*/}
                {/*                                        className="text-[12px] py-1 px-4 bg-[#E6EDF4] rounded text-primary text-prgcolor">*/}
                {/*                                    In progress*/}
                {/*                                </button>*/}
                {/*                            </div>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">*/}
                {/*                            <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                $12523.00*/}
                {/*                            </h4>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-top border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                {/*                            <button type='button'*/}
                {/*                                    className="py-2 px-4 text-[14px] bg-primary text-white border border-primary rounded hover:bg-transparent hover:text-primary transition">*/}
                {/*                                Order Details*/}
                {/*                            </button>*/}
                {/*                        </td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">*/}
                {/*                            <div className="product_image cursor-pointer">*/}
                {/*                                <Image src={ProductImg} className="w-20" alt="ProductImg"/>*/}
                {/*                            </div>*/}
                {/*                        </th>*/}
                {/*                        <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">*/}
                {/*                            <div className="wrap">*/}
                {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
                {/*                                    T-Shirt - Yellow*/}
                {/*                                </h4>*/}
                {/*                                <h4 className="text-[14px] font-normal text-graycolor">*/}
                {/*                                    Delivery: <span className="text-prgcolor">Ship Only</span>*/}
                {/*                                </h4>*/}
                {/*                            </div>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">*/}
                {/*                            <h4 className="text-[14px] font-normal text-prgcolor">*/}
                {/*                                $172.00*/}
                {/*                            </h4>*/}
                {/*                        </td>*/}
                {/*                        <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}

                {/*                        </td>*/}
                {/*                    </tr>*/}
                {/*                    </tbody>*/}
                {/*                </table>*/}
                {/*                /!* Pagination *!/*/}
                {/*                <div className="pagination mt-4 flex items-center justify-center">*/}
                {/*                    <nav aria-label="Page navigation example">*/}
                {/*                        <ul className="inline-flex -space-x-px text-[14px] gap-1">*/}
                {/*                            <li>*/}
                {/*                                <Link href='#' aria-current="page"*/}
                {/*                                      className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">*/}
                {/*                                    <HiArrowLongLeft/>*/}
                {/*                                </Link>*/}
                {/*                            </li>*/}
                {/*                            <li>*/}
                {/*                                <Link href='#' aria-current="page"*/}
                {/*                                      className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">*/}
                {/*                                    1*/}
                {/*                                </Link>*/}
                {/*                            </li>*/}
                {/*                            <li>*/}
                {/*                                <Link href='#'*/}
                {/*                                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">*/}
                {/*                                    2*/}
                {/*                                </Link>*/}
                {/*                            </li>*/}
                {/*                            <li>*/}
                {/*                                <Link href='#' aria-current="page"*/}
                {/*                                      className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">*/}
                {/*                                    <HiArrowLongRight/>*/}
                {/*                                </Link>*/}
                {/*                            </li>*/}
                {/*                        </ul>*/}
                {/*                    </nav>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>
    );
}

export default Page;