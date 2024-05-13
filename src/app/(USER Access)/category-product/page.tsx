"use client";
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Checkbox} from "antd";
import ProductImg from '@/../public/assets/images/product.png';
import {RxPlus} from "react-icons/rx";
import "@/app/multiRangeSlider/multiRangeSlider.css";
import classnames from "classnames";
import {RiArrowDropDownLine} from "react-icons/ri";
import Image from "next/image";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Link from "next/link";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import Skeleton from "react-loading-skeleton";

function Page() {
    const loading = useLoading();
    useTitle("Category products")

    // For price range slider
    const [minVal, setMinVal] = useState<number>(0);
    const [maxVal, setMaxVal] = useState<number>(2500); // Updated max value
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const rangeRef = useRef<HTMLDivElement>(null);

    const min = 0; // Updated min value
    const max = 5000; // Updated max value

    const getPercent = useCallback((value: number) => {
        return Math.round(((value - min) / (max - min)) * 100);
    }, [min, max]);

    useEffect(() => {
        if (maxValRef.current && rangeRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(parseInt(maxValRef.current.value));

            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    useEffect(() => {
        if (minValRef.current && rangeRef.current) {
            const minPercent = getPercent(parseInt(minValRef.current.value));
            const maxPercent = getPercent(maxVal);

            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+event.target.value, maxVal - 1);
        setMinVal(value);
        event.target.value = value.toString();
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+event.target.value, minVal + 1);
        setMaxVal(value);
        event.target.value = value.toString();
    };

    //----------- FilterListingTab Dropdown Start --------------//
    const [isOpenDropdownFilterListingTab, setIsOpenDropdownFilterListingTab] = useState(false);
    const [selectedOptionFilterListingTab, setSelectedOptionFilterListingTab] = useState("Sort by"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterListingTab = () => {
        setIsOpenDropdownFilterListingTab(!isOpenDropdownFilterListingTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterListingTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterListingTab(option);
        setIsOpenDropdownFilterListingTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterListingTabRef = useRef(null);
    const handleClickOutsideFilterListingTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterListingTabRef.current && !dropdownFilterListingTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterListingTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterListingTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterListingTab);
        };
    }, []);
    //----------- FilterListingTab Dropdown End --------------//
    return (
        <>
            <section id="category-product-section">
                <div className="container pt-[50px]">
                    {/* Breadcrumb */}
                    <div className="breadcrumb_wrap">
                        {loading ? (
                            <div className="mt-6 mb-3">
                                <Skeleton height={20} width={340} count={1}/>
                            </div>
                        ) : (
                            <>
                                <nav className="mt-6 mb-3 flex justify-between" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center text-[14px] mb-3 sm:mb-0">
                                        <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                            Home
                                        </li>
                                        <span className="mx-2 text-gray-400">/</span>
                                        <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                            All Categories
                                        </li>
                                        <span className="mx-2 text-gray-400">/</span>
                                        <li className="text-prgcolor">
                                            Electronics
                                        </li>
                                    </ol>
                                </nav>
                            </>
                        )}
                    </div>

                    {/* Listings */}
                    <div className="listings_content mb-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="col lg:col-span-4">
                                <div className="pb-4">
                                    {loading ? (
                                        <Skeleton height={20} count={1}/>
                                    ) : (
                                        <>
                                            <h4 className="text-[14px] text-prgcolor">Filters</h4>
                                        </>
                                    )}
                                </div>
                                <div className="box py-3 px-6 bg-white rounded">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={20} width={200} count={4}/>
                                        </div>
                                    ) : (
                                        <>
                                            <details open={true} className="group pb-3">
                                                <summary
                                                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                    Sub-category
                                                    <RxPlus
                                                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                </summary>
                                                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                    <div id="checkbox" className="mt-3">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox defaultChecked>
                                                                Cameras
                                                            </Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Computers</Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Speakers</Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Smartphones</Checkbox>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </details>
                                            <hr/>
                                        </>
                                    )}

                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <details className="group py-3">
                                                <summary
                                                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                    Brand
                                                    <RxPlus
                                                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                </summary>
                                                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                    <div id="checkbox" className="mt-3">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox defaultChecked>
                                                                Apple
                                                            </Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Samsung</Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Xiaomi</Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Honor</Checkbox>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </details>
                                            <hr/>
                                        </>
                                    )}
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <details className="group py-3">
                                                <summary
                                                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                    Condition
                                                    <RxPlus
                                                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                </summary>
                                                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                    <div id="checkbox" className="mt-3">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox defaultChecked>
                                                                New
                                                            </Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Used</Checkbox>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </details>
                                            <hr/>
                                        </>
                                    )}
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <details className="group py-3">
                                                <summary
                                                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                    Range
                                                    <RxPlus
                                                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                </summary>
                                                <div className="py-2 overflow-hidden">
                                                    <div className="value_box flex items-center gap-4 mb-4">
                                                        <input
                                                            className="m-0 rounded w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                            type="text"
                                                            placeholder="$"
                                                            value={`$${minVal}`}
                                                            onChange={(e) => {
                                                                let value = e.target.value;
                                                                // Allow only numbers and the "$" sign
                                                                const newValue = value.replace(/[^0-9$]/g, '');
                                                                // Remove "$" sign and handle empty value
                                                                let newValueWithoutDollar = newValue.replace('$', '');
                                                                // Limit max value to 5000
                                                                if (newValueWithoutDollar !== '' && parseFloat(newValueWithoutDollar) > 4999) {
                                                                    newValueWithoutDollar = '4999';
                                                                }
                                                                setMinVal(newValueWithoutDollar === '' ? 0 : parseFloat(newValueWithoutDollar));
                                                            }}
                                                        />
                                                        <input
                                                            className="m-0 rounded w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                            type="text"
                                                            placeholder="$"
                                                            value={`$${maxVal}`}
                                                            onChange={(e) => {
                                                                let value = e.target.value;
                                                                // Allow only numbers and the "$" sign
                                                                const newValue = value.replace(/[^0-9$]/g, '');
                                                                // Remove "$" sign and handle empty value
                                                                let newValueWithoutDollar = newValue.replace('$', '');
                                                                // Limit max value to 5000
                                                                if (newValueWithoutDollar !== '' && parseFloat(newValueWithoutDollar) > 5000) {
                                                                    newValueWithoutDollar = '5000';
                                                                }
                                                                setMaxVal(newValueWithoutDollar === '' ? 0 : parseFloat(newValueWithoutDollar));
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="slider_range_wrap w-full">
                                                        <input
                                                            type="range"
                                                            min={min}
                                                            max={max}
                                                            value={minVal}
                                                            ref={minValRef}
                                                            onChange={handleMinChange}
                                                            className={classnames("thumb thumb--zindex-3", {
                                                                "thumb--zindex-5": minVal > max - 100
                                                            })}
                                                        />
                                                        <input
                                                            type="range"
                                                            min={min}
                                                            max={max}
                                                            value={maxVal}
                                                            ref={maxValRef}
                                                            onChange={handleMaxChange}
                                                            className="thumb thumb--zindex-4"
                                                        />
                                                        <div className="slider">
                                                            <div className="slider__track"/>
                                                            <div ref={rangeRef} className="slider__range"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </details>
                                            <hr/>
                                        </>
                                    )}
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <details className="group py-3">
                                                <summary
                                                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                    Shipping method
                                                    <RxPlus
                                                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                </summary>
                                                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                    <div id="checkbox" className="mt-3">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox defaultChecked>
                                                                Ship Only
                                                            </Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Click & Collect</Checkbox>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </details>
                                        </>
                                    )}
                                    <div className="group">
                                        <hr/>
                                        <div className="mt-3">
                                            {loading ? (
                                                <Skeleton height={20} count={1}/>
                                            ) : (
                                                <>
                                                    <button type='button'
                                                            className="py-2 px-4 bg-gray-50 hover:bg-primary hover:text-white hover:border-primary rounded text-[14px] border">
                                                        Clear Settings
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col lg:col-span-8">
                                <div className="flex text-[14px] items-center justify-end">
                                    {/* FilterListingTab dropdown */}
                                    <div ref={dropdownFilterListingTabRef}
                                         onClick={toggleDropdownFilterListingTab}
                                         className="filter_dropdown  z-20 cursor-pointer relative">
                                        <div
                                            className="w-[150px] h-8 bg-white flex border border-gray-200 rounded items-center">
                                            <input value={selectedOptionFilterListingTab} name="select"
                                                   id="select"
                                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full bg-white"
                                                   readOnly/>
                                            <button type='button'
                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                <RiArrowDropDownLine size={25}/>
                                            </button>
                                        </div>

                                        {isOpenDropdownFilterListingTab && (
                                            <div
                                                className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterListingTab("Sort by")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Sort by
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterListingTab("Relevance")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Relevance
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterListingTab("Popular")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Popular
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterListingTab("Newest")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary border-blue-600 hover:bg-gray-100">
                                                        Newest
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="box py-4 px-6 bg-white rounded mt-1">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pb-4">
                                        <div className="col border rounded p-4 cursor-pointer">
                                            {loading ? (
                                                <Skeleton height={170} count={1}/>
                                            ) : (
                                                <>
                                                    <Image src={ProductImg} alt="ProductImg"/>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="mt-3">
                                                    <Skeleton height={10} count={3}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="product_content mt-3">
                                                        <h4 className='text-[12px] text-graycolor'>
                                                            Electronics
                                                        </h4>
                                                        <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                            Playstation X
                                                        </h4>
                                                        <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                            $1200.00
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            {loading ? (
                                                <Skeleton height={170} count={1}/>
                                            ) : (
                                                <>
                                                    <Image src={ProductImg} alt="ProductImg"/>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="mt-3">
                                                    <Skeleton height={10} count={3}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="product_content mt-3">
                                                        <h4 className='text-[12px] text-graycolor'>
                                                            Electronics
                                                        </h4>
                                                        <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                            Playstation X
                                                        </h4>
                                                        <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                            $1200.00
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            {loading ? (
                                                <Skeleton height={170} count={1}/>
                                            ) : (
                                                <>
                                                    <Image src={ProductImg} alt="ProductImg"/>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="mt-3">
                                                    <Skeleton height={10} count={3}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="product_content mt-3">
                                                        <h4 className='text-[12px] text-graycolor'>
                                                            Electronics
                                                        </h4>
                                                        <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                            Playstation X
                                                        </h4>
                                                        <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                            $1200.00
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            {loading ? (
                                                <Skeleton height={170} count={1}/>
                                            ) : (
                                                <>
                                                    <Image src={ProductImg} alt="ProductImg"/>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="mt-3">
                                                    <Skeleton height={10} count={3}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="product_content mt-3">
                                                        <h4 className='text-[12px] text-graycolor'>
                                                            Electronics
                                                        </h4>
                                                        <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                            Playstation X
                                                        </h4>
                                                        <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                            $1200.00
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            {loading ? (
                                                <Skeleton height={170} count={1}/>
                                            ) : (
                                                <>
                                                    <Image src={ProductImg} alt="ProductImg"/>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="mt-3">
                                                    <Skeleton height={10} count={3}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="product_content mt-3">
                                                        <h4 className='text-[12px] text-graycolor'>
                                                            Electronics
                                                        </h4>
                                                        <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                            Playstation X
                                                        </h4>
                                                        <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                            $1200.00
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            {loading ? (
                                                <Skeleton height={170} count={1}/>
                                            ) : (
                                                <>
                                                    <Image src={ProductImg} alt="ProductImg"/>
                                                </>
                                            )}
                                            {loading ? (
                                                <div className="mt-3">
                                                    <Skeleton height={10} count={3}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="product_content mt-3">
                                                        <h4 className='text-[12px] text-graycolor'>
                                                            Electronics
                                                        </h4>
                                                        <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                            Playstation X
                                                        </h4>
                                                        <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                            $1200.00
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                    <div className="pagination mt-4 flex items-center justify-center">
                                        <nav aria-label="Page navigation example">
                                            <ul className="inline-flex -space-x-px text-[14px] gap-1">
                                                <li>
                                                    <Link href='#' aria-current="page"
                                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                                        <HiArrowLongLeft/>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='#' aria-current="page"
                                                          className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">
                                                        1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='#'
                                                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">
                                                        2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='#' aria-current="page"
                                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                                        <HiArrowLongRight/>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
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