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
import {Carousel} from "flowbite-react";
import SliderOneImg from "../../../../public/assets/images/slider1.jpg";
import SliderTwoImg from "../../../../public/assets/images/slider2.jpg";
import SliderThreeImg from "../../../../public/assets/images/slider3.jpg";
import {IoCartOutline} from "react-icons/io5";
import {HiUserCircle} from "react-icons/hi";

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
                    {/* Listings */}
                    <div className="product_content mb-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="col">
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
                                                        Newsfeed
                                                    </li>
                                                    <span className="mx-2 text-gray-400">/</span>
                                                    <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                                        All Categories
                                                    </li>
                                                    <span className="mx-2 text-gray-400">/</span>
                                                    <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                                        Electronics
                                                    </li>
                                                    <span className="mx-2 text-gray-400">/</span>
                                                    <li className="text-prgcolor">
                                                        Sony
                                                    </li>
                                                </ol>
                                            </nav>
                                        </>
                                    )}
                                </div>

                                {/* Slider */}
                                <div className="slider_wrapper h-56 sm:h-64 md:h-[450px] bg-black">
                                    <Carousel slide={false} indicators={false}>
                                        <Image src={SliderOneImg} className="slider_image"
                                               alt="SliderOneImg"/>
                                        <Image src={SliderTwoImg} className="slider_image"
                                               alt="SliderTwoImg"/>
                                        <Image src={SliderThreeImg} className="slider_image"
                                               alt="SliderThreeImg"/>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mt-14 product_content">
                                    <h1 className="text-[20px] font-semibold text-prgcolor">
                                        Playstation X - Best Gaming<br/>
                                        Experience
                                        (Black)
                                    </h1>
                                    <div className="mt-3">
                                        <h4 className="text-[14px] text-graycolor">
                                            Condition: <span className="text-prgcolor">New</span>
                                        </h4>
                                        <h4 className="text-[14px] text-graycolor">
                                            Brand: <span className="text-prgcolor">Sony</span>
                                        </h4>
                                        <h4 className="text-[20px] text-black font-semibold mt-1">
                                            $350
                                        </h4>
                                        <div className="mt-3 flex items-center gap-2">
                                            <button type='button'
                                                    className="py-2 px-6 flex items-center gap-2 bg-primary border hover:bg-white hover:border-primary hover:text-black rounded text-[14px] text-white">
                                                <IoCartOutline size={20}
                                                               className=""/>
                                                Add to Cart
                                            </button>
                                            <button type='button'
                                                    className="py-2 px-6 bg-white border hover:bg-primary hover:border-primary hover:text-white rounded text-[14px] text-prgcolor">
                                                Contract Seller
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <h4 className="text-[14px] text-graycolor">
                                            Delivery: <span className="text-prgcolor">Ship Only</span>
                                        </h4>
                                        <h4 className="text-[14px] text-graycolor">
                                            Store Located: <span className="text-prgcolor">California, USA</span>
                                        </h4>

                                        <Link href='#' className="mt-2 flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Sony Inc.
                                                </h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description mt-6">
                            <h4 className="text-[16px] font-[500] text-prgcolor pb-2">
                                Description
                            </h4>
                            <hr/>
                            <h4 className="mt-4 text-[14px] text-graycolor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae consequatur
                                culpa ea eius itaque maxime minus odio omnis,
                                <br/>
                                perferendis perspiciatis porro praesentium
                                quo recusandae, sequi temporibus ullam! Delectus
                                <br/>
                                <br/>
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop<br/> publishing software like Aldus.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;