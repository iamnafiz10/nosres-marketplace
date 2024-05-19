"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import {GoPlus} from "react-icons/go";
import {RiArrowDropDownLine} from "react-icons/ri";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import ProductImgTwo from "../../../../public/assets/images/product-2.png";
import ProductImgThree from "../../../../public/assets/images/product-3.png";
import Link from "next/link";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import {Modal} from "flowbite-react";

function Page() {
    useTitle("Listings")
    const loading = useLoading();

    // Top Tab
    const [activeTab, setActiveTab] = useState('published');
    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

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

    // 👇️ Post 3 dots (Me)
    const [postMeDotClick, setPostMeDotClick] = useState(false);
    const PostMeDotDropdownRef = useRef(null);
    const handlePostMeDotClick = () => {
        setPostMeDotClick(!postMeDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostMeDotDropdownRef.current && !PostMeDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostMeDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // 👇️ Post 3 dots (Draft)
    const [postDraftDotClick, setPostDraftDotClick] = useState(false);
    const PostDraftDotDropdownRef = useRef(null);
    const handlePostDraftDotClick = () => {
        setPostDraftDotClick(!postDraftDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostDraftDotDropdownRef.current && !PostDraftDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostDraftDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // 👇️ Post 3 dots (Sold)
    const [postSoldDotClick, setPostSoldDotClick] = useState(false);
    const PostSoldDotDropdownRef = useRef(null);
    const handlePostSoldDotClick = () => {
        setPostSoldDotClick(!postSoldDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostSoldDotDropdownRef.current && !PostSoldDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostSoldDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Delete Modals
    const [openDeleteListingModal, setOpenDeleteListingModal] = useState<boolean>(false);
    const [openDeleteDraftModal, setOpenDeleteDraftModal] = useState<boolean>(false);
    const [openDeleteSoldModal, setOpenDeleteSoldModal] = useState<boolean>(false);
    return (
        <>
            <section id="listingss-section">
                <div className="w-full pt-[50px] pb-20">
                    {/* Dashboard Body */}
                    <div className="ml-0 lg:ml-[295px]">
                        <div className="mx-5">
                            <div className="header_wrap mt-4">
                                {loading ? (
                                    <div className='pb-0'>
                                        <Skeleton height={20} count={2}/>
                                    </div>
                                ) : (
                                    <>
                                        <div className="block md:flex items-center justify-between">
                                            <div className="wrap">
                                                <h4 className="text-[20px]">
                                                    Listings
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">
                                                    View and manage all your listings effortlessly. Easily find listings
                                                    using the search feature.
                                                </h4>
                                            </div>
                                            <button type='button'
                                                    className="py-2 mt-3 md:mt-0 px-4 text-white flex items-center gap-2 bg-primary hover:bg-transparent hover:border-primary hover:text-primary hover:bg-primary border text-[14px] rounded">
                                                <GoPlus size={15}/>
                                                New Listing
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            {loading ? (
                                <Skeleton height={20} count={1}/>
                            ) : (
                                <>
                                    {/* Tabs */}
                                    <div className="flex items-center gap-4 mt-6 border-b">
                                        <button
                                            onClick={() => handleTabClick('published')}
                                            type='button'
                                            className={`py-1 px-1 text-[14px] ${
                                                activeTab === 'published'
                                                    ? 'text-prgcolor border-b-2 border-primary'
                                                    : ''
                                            }`}>
                                            Published
                                        </button>
                                        <button
                                            type='button'
                                            onClick={() => handleTabClick('draft')}
                                            className={`py-1 px-1 text-[14px] ${
                                                activeTab === 'draft'
                                                    ? 'text-prgcolor border-b-2 border-primary'
                                                    : ''
                                            }`}
                                        >
                                            Draft
                                        </button>
                                        <button
                                            type='button'
                                            onClick={() => handleTabClick('sold')}
                                            className={`py-1 px-1 text-[14px] ${
                                                activeTab === 'sold'
                                                    ? 'text-prgcolor border-b-2 border-primary'
                                                    : ''
                                            }`}
                                        >
                                            Sold
                                        </button>
                                    </div>
                                    <hr/>
                                </>
                            )}

                            {/* FilterUserTab dropdown */}
                            {loading ? (
                                <Skeleton height={20} count={1}/>
                            ) : (
                                <>
                                    <div className="mt-4 flex text-[14px] items-center justify-end">
                                        <div ref={dropdownFilterUserTabRef} onClick={toggleDropdownFilterUserTab}
                                             className="filter_dropdown  z-20 cursor-pointer relative">
                                            <div
                                                className="w-[150px] h-8 bg-white flex border border-gray-200 rounded items-center">
                                                <input value={selectedOptionFilterUserTab} name="select"
                                                       id="select"
                                                       className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full bg-white"
                                                       readOnly/>
                                                <button type='button'
                                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                    <RiArrowDropDownLine size={25}/>
                                                </button>
                                            </div>

                                            {isOpenDropdownFilterUserTab && (
                                                <div
                                                    className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                    <div className="cursor-pointer"
                                                         onClick={() => handleOptionSelectFilterUserTab("Sort by")}>
                                                        <div
                                                            className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                            Sort by
                                                        </div>
                                                    </div>
                                                    <div className="cursor-pointer"
                                                         onClick={() => handleOptionSelectFilterUserTab("Relevance")}>
                                                        <div
                                                            className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                            Relevance
                                                        </div>
                                                    </div>
                                                    <div className="cursor-pointer"
                                                         onClick={() => handleOptionSelectFilterUserTab("Popular")}>
                                                        <div
                                                            className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                            Popular
                                                        </div>
                                                    </div>
                                                    <div className="cursor-pointer"
                                                         onClick={() => handleOptionSelectFilterUserTab("Newest")}>
                                                        <div
                                                            className="block p-2 border-transparent border-l-4 hover:border-primary border-blue-600 hover:bg-gray-100">
                                                            Newest
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Published Content */}
                            <div
                                className={`published_content mx-auto w-full ${activeTab === 'published' ? 'block' : 'hidden'}`}>
                                {/* Product Table */}
                                <div className="block mt-2 w-full overflow-x-auto bg-white">
                                    {loading ? (
                                        <div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <table className="items-start bg-transparent w-full border-collapse">
                                                <thead>
                                                <tr>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Product
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Create at
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Amount
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">

                                                    </th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div onClick={handlePostMeDotClick}
                                                                 ref={PostMeDotDropdownRef}
                                                                 className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postMeDotClick ? 'bg-gray-100' : ''}`}>
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                                {postMeDotClick &&
                                                                    <div
                                                                        className="dots-dropdown-menu w-[250px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                        <div className="container py-2">
                                                                            <div className="space-y-1 text-[14px]">
                                                                                <Link href='#'
                                                                                      className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M17 3a2.85 2.83 0 1 1
                                                                            4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                                                        <path d="m15 5 4 4"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Edit
                                                                                    </h4>
                                                                                </Link>

                                                                                <div
                                                                                    onClick={() => setOpenDeleteListingModal(true)}
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24
                                                                                    24" fill="none" stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M3 6h18"/>
                                                                                        <path
                                                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0
                                                                                    2 1 2 2v2"/>
                                                                                        <line x1="10" x2="10" y1="11"
                                                                                              y2="17"/>
                                                                                        <line x1="14" x2="14" y1="11"
                                                                                              y2="17"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Delete
                                                                                    </h4>
                                                                                </div>

                                                                                <div
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path
                                                                                            d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                                                                        <circle cx="12" cy="12" r="3"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        View
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImg} className="w-[70px] h-[70px]"
                                                                       alt="ProductImg"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Draft Content */}
                            <div
                                className={`draft_content mx-auto w-full ${activeTab === 'draft' ? 'block' : 'hidden'}`}>
                                {/* Product Table */}
                                <div className="block mt-2 w-full overflow-x-auto bg-white">
                                    {loading ? (
                                        <div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <table className="items-start bg-transparent w-full border-collapse">
                                                <thead>
                                                <tr>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Product
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Create at
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Amount
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">

                                                    </th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div onClick={handlePostDraftDotClick}
                                                                 ref={PostDraftDotDropdownRef}
                                                                 className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postMeDotClick ? 'bg-gray-100' : ''}`}>
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                                {postDraftDotClick &&
                                                                    <div
                                                                        className="dots-dropdown-menu w-[250px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                        <div className="container py-2">
                                                                            <div className="space-y-1 text-[14px]">
                                                                                <Link href='#'
                                                                                      className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M17 3a2.85 2.83 0 1 1
                                                                            4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                                                        <path d="m15 5 4 4"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Edit
                                                                                    </h4>
                                                                                </Link>

                                                                                <div
                                                                                    onClick={() => setOpenDeleteDraftModal(true)}
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24
                                                                                    24" fill="none" stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M3 6h18"/>
                                                                                        <path
                                                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0
                                                                                    2 1 2 2v2"/>
                                                                                        <line x1="10" x2="10" y1="11"
                                                                                              y2="17"/>
                                                                                        <line x1="14" x2="14" y1="11"
                                                                                              y2="17"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Delete
                                                                                    </h4>
                                                                                </div>

                                                                                <div
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="m22 2-7 20-4-9-9-4Z"/>
                                                                                        <path d="M22 2 11 13"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Publish
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgTwo} className="w-[70px] h-[70px]"
                                                                       alt="ProductImgTwo"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Sold Content */}
                            <div
                                className={`sold_content mx-auto w-full ${activeTab === 'sold' ? 'block' : 'hidden'}`}>
                                {/* Product Table */}
                                <div className="block mt-2 w-full overflow-x-auto bg-white">
                                    {loading ? (
                                        <div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1">
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                            <div className="px-2 py-1 flex items-center justify-start gap-2 w-full">
                                                <Skeleton width={60} height={60} borderRadius="10%" count={1}/>
                                                <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <table className="items-start bg-transparent w-full border-collapse">
                                                <thead>
                                                <tr>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Product
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Create at
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">
                                                        Amount
                                                    </th>
                                                    <th className="px-6 py-3 bg-white font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">

                                                    </th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div onClick={handlePostSoldDotClick}
                                                                 ref={PostSoldDotDropdownRef}
                                                                 className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postMeDotClick ? 'bg-gray-100' : ''}`}>
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                                {postSoldDotClick &&
                                                                    <div
                                                                        className="dots-dropdown-menu w-[250px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                        <div className="container py-2">
                                                                            <div className="space-y-1 text-[14px]">
                                                                                <Link href='#'
                                                                                      className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path
                                                                                            d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                                                                        <circle cx="12" cy="12" r="3"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        View
                                                                                    </h4>
                                                                                </Link>

                                                                                <div
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M16 12H3"/>
                                                                                        <path d="M16 18H3"/>
                                                                                        <path d="M10 6H3"/>
                                                                                        <path
                                                                                            d="M21 18V8a2 2 0 0 0-2-2h-5"/>
                                                                                        <path d="m16 8-2-2 2-2"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Relist
                                                                                    </h4>
                                                                                </div>
                                                                                <div
                                                                                    onClick={() => setOpenDeleteSoldModal(true)}
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24
                                                                                    24" fill="none" stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M3 6h18"/>
                                                                                        <path
                                                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0
                                                                                    2 1 2 2v2"/>
                                                                                        <line x1="10" x2="10" y1="11"
                                                                                              y2="17"/>
                                                                                        <line x1="14" x2="14" y1="11"
                                                                                              y2="17"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Delete
                                                                                    </h4>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <div className="flex items-center gap-1">
                                                            <div className="product_image cursor-pointer w-[70px]">
                                                                <Image src={ProductImgThree}
                                                                       className="w-[70px] h-[70px]"
                                                                       alt="ProductImgThree"/>
                                                            </div>
                                                            <div className="wrap">
                                                                <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer hover:underline">
                                                                    Playstation X - Best Gaming Experience (Black)
                                                                </h4>
                                                                <h4 className="text-[12px] font-normal text-graycolor">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit...
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-center border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            01 May 2024
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">
                                                        <h4 className="text-[14px] font-normal text-prgcolor">
                                                            $11890.00
                                                        </h4>
                                                    </td>
                                                    <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div className="flex items-center justify-end text-end">
                                                            <div
                                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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

                {/* Delete Listing Pop-Up Start */}
                <Modal size="lg"
                       show={openDeleteListingModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenDeleteListingModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Delete Listing</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Are you sure to delete this listing? This action cannot be undone.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenDeleteListingModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenDeleteListingModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Delete
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Listing Post Pop-Up End */}

                {/* Delete Draft Pop-Up Start */}
                <Modal size="lg"
                       show={openDeleteDraftModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenDeleteDraftModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Delete Draft</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Are you sure to delete this draft? This action cannot be undone.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenDeleteDraftModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenDeleteDraftModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Delete
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Draft Post Pop-Up End */}

                {/* Delete Sold Pop-Up Start */}
                <Modal size="lg"
                       show={openDeleteSoldModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenDeleteSoldModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Delete Sold</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Are you sure to delete this sold? This action cannot be undone.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenDeleteSoldModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenDeleteSoldModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Delete
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Sold Post Pop-Up End */}
            </section>
        </>
    );
}

export default Page;