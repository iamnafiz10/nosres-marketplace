"use client";
import React, {useCallback, useEffect, useRef, useState} from "react";
import "@/app/multiRangeSlider/multiRangeSlider.css";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import ProductImg from '@/../public/assets/images/product.png';
import StoreImg from '@/../public/assets/images/store.jpg';
import UserImg from '@/../public/assets/images/profile/user.jpg';
import Image from "next/image";
import {FaPlus} from "react-icons/fa";
import {GoComment, GoHeart, GoHeartFill, GoSmiley, GoSync} from "react-icons/go";
import {HiUserCircle} from "react-icons/hi";
import Link from "next/link";
import {LuDot} from "react-icons/lu";
import {IoMdGlobe} from "react-icons/io";
import SliderOneImg from "../../../../public/assets/images/slider1.jpg";
import SliderTwoImg from "../../../../public/assets/images/slider2.jpg";
import {Carousel, Modal} from "flowbite-react";
import SliderThreeImg from "../../../../public/assets/images/slider3.jpg";
import {RxPlus} from "react-icons/rx";
import {Checkbox} from "antd";
import {RiArrowDropDownLine} from "react-icons/ri";

export default function Home() {
    const loading = useLoading();
    useTitle("Search-All")

    // Top Tab
    const [activeTab, setActiveTab] = useState('all');
    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    // Like post
    const [isClickedLikePostTwo, setIsClickedLikePostTwo] = useState(false);
    const [isClickedLikePostThree, setIsClickedLikePostThree] = useState(false);
    // Post Image Modal
    const [openStartPostImageModal, setOpenStartPostImageModal] = useState<boolean>(false);
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


    //----------- Filter Dropdown Start --------------//
    const [isOpenDropdownFilter, setIsOpenDropdownFilter] = useState(false);
    const [selectedOptionFilter, setSelectedOptionFilter] = useState("Sort by"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilter = () => {
        setIsOpenDropdownFilter(!isOpenDropdownFilter);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilter = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilter(option);
        setIsOpenDropdownFilter(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterRef = useRef(null);
    const handleClickOutside = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterRef.current && !dropdownFilterRef.current.contains(event.target)) {
            setIsOpenDropdownFilter(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    //----------- Filter Dropdown End --------------//
    return (
        <>
            <section id="home-page-section">
                <div className="py-[49px]">
                    <div className="topbar_tab_wrap fixed w-full bg-white py-2 border z-20">
                        <div className="container">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleTabClick('all')}
                                    type='button'
                                    className={`py-1 px-4 rounded text-[12px] ${
                                        activeTab === 'all'
                                            ? 'text-white bg-primary border'
                                            : 'text-black bg-gray-100 hover:bg-primary hover:text-white border hover:border-primary'
                                    }`}>
                                    All
                                </button>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('posts')}
                                    className={`py-1 px-4 rounded text-[12px] ${
                                        activeTab === 'posts'
                                            ? 'text-white bg-primary border'
                                            : 'text-black bg-gray-100 hover:bg-primary hover:text-white border hover:border-primary'
                                    }`}
                                >
                                    Posts
                                </button>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('listings')}
                                    className={`py-1 px-4 rounded text-[12px] ${
                                        activeTab === 'listings'
                                            ? 'text-white bg-primary border'
                                            : 'text-black bg-gray-100 hover:bg-primary hover:text-white border hover:border-primary'
                                    }`}
                                >
                                    Listings
                                </button>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('stores')}
                                    className={`py-1 px-4 rounded text-[12px] ${
                                        activeTab === 'stores'
                                            ? 'text-white bg-primary border'
                                            : 'text-black bg-gray-100 hover:bg-primary hover:text-white border hover:border-primary'
                                    }`}
                                >
                                    Stores
                                </button>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('users')}
                                    className={`py-1 px-4 rounded text-[12px] ${
                                        activeTab === 'users'
                                            ? 'text-white bg-primary border'
                                            : 'text-black bg-gray-100 hover:bg-primary hover:text-white border hover:border-primary'
                                    }`}
                                >
                                    Users
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-6">
                    <div className="grid grid-cols-1">
                        {/* Body Content */}
                        <div className="col">
                            <div
                                className={`all_content mx-auto w-full lg:w-[750px] ${activeTab === 'all' ? 'block' : 'hidden'}`}>
                                {/* Listing */}
                                <div className="box py-4 px-6 bg-white rounded">
                                    <div className="header_wrap text-center font-[500] text-[16px] pb-2">
                                        <h1>Listings</h1>
                                    </div>
                                    <hr/>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pb-4">
                                        <div className="col border rounded p-4 cursor-pointer">
                                            <Image src={ProductImg} alt="ProductImg"/>
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
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            <Image src={ProductImg} alt="ProductImg"/>
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
                                        </div>
                                        <div className="col border rounded p-4 cursor-pointer">
                                            <Image src={ProductImg} alt="ProductImg"/>
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
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="button_wrap text-center pt-2">
                                        <button type='button'
                                                className="text-[14px] text-primary py-2 hover:bg-primary hover:text-white transition border rounded w-full">
                                            View all
                                        </button>
                                    </div>
                                </div>

                                {/* Stores */}
                                <div className="mt-6 box py-4 px-6 bg-white rounded">
                                    <div className="header_wrap text-center font-[500] text-[16px] pb-2">
                                        <h1>Stores</h1>
                                    </div>
                                    <hr/>
                                    <div className="grid grid-cols-1 mt-4 pb-4">
                                        <div className="col border rounded py-4 px-6">
                                            <div className="block lg:flex items-center justify-between">
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                    <Image src={StoreImg} className="w-[80px] h-[80px] rounded-full"
                                                           alt="StoreImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Store name
                                                        </h4>
                                                        <div className="mt-1 flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#828D9E" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                                    <circle cx="12" cy="10" r="3"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-graycolor text-[14px]">
                                                                Texas, USA
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-3 lg:mt-0">
                                                    <button type='button'
                                                            className="py-2 px-10 flex items-center gap-1 bg-primary text-white border hover:bg-transparent hover:border-primary hover:text-primary rounded text-[14px]">
                                                        <FaPlus size={10}/>
                                                        Follow
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col border rounded py-4 px-6 mt-4">
                                            <div className="block lg:flex items-center justify-between">
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                    <Image src={StoreImg} className="w-[80px] h-[80px] rounded-full"
                                                           alt="StoreImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Store name
                                                        </h4>
                                                        <div className="mt-1 flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#828D9E" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                                    <circle cx="12" cy="10" r="3"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-graycolor text-[14px]">
                                                                Texas, USA
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-3 lg:mt-0">
                                                    <button type='button'
                                                            className="py-2 px-10 flex items-center gap-1 bg-primary text-white border hover:bg-transparent hover:border-primary hover:text-primary rounded text-[14px]">
                                                        <FaPlus size={10}/>
                                                        Follow
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col border rounded py-4 px-6 mt-4">
                                            <div className="block lg:flex items-center justify-between">
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                    <Image src={StoreImg} className="w-[80px] h-[80px] rounded-full"
                                                           alt="StoreImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Store name
                                                        </h4>
                                                        <div className="mt-1 flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#828D9E" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                                    <circle cx="12" cy="10" r="3"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-graycolor text-[14px]">
                                                                Texas, USA
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-3 lg:mt-0">
                                                    <button type='button'
                                                            className="py-2 px-10 flex items-center gap-1 bg-primary text-white border hover:bg-transparent hover:border-primary hover:text-primary rounded text-[14px]">
                                                        <FaPlus size={10}/>
                                                        Follow
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="button_wrap text-center pt-2">
                                        <button type='button'
                                                className="text-[14px] text-primary py-2 hover:bg-primary hover:text-white transition border rounded w-full">
                                            View all
                                        </button>
                                    </div>
                                </div>

                                {/* Users */}
                                <div className="mt-6 box py-4 px-6 bg-white rounded">
                                    <div className="header_wrap text-center font-[500] text-[16px] pb-2">
                                        <h1>Users</h1>
                                    </div>
                                    <hr/>
                                    <div className="grid grid-cols-1 mt-4 pb-4">
                                        <div className="col border rounded py-4 px-6">
                                            <div className="block lg:flex items-center justify-between">
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                    <Image src={UserImg} className="w-[80px] h-[80px] rounded-full"
                                                           alt="UserImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Roshan Nafiz
                                                        </h4>
                                                        <div className="mt-2 flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#828D9E" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                                    <circle cx="12" cy="10" r="3"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-graycolor text-[14px]">
                                                                Bangladesh, Raj
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-3 lg:mt-0">
                                                    <button type='button'
                                                            className="py-2 px-10 flex items-center gap-1 bg-primary text-white border hover:bg-transparent hover:border-primary hover:text-primary rounded text-[14px]">
                                                        <FaPlus size={10}/>
                                                        Follow
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col border rounded py-4 px-6 mt-4">
                                            <div className="block lg:flex items-center justify-between">
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                    <Image src={UserImg} className="w-[80px] h-[80px] rounded-full"
                                                           alt="UserImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Roshan Nafiz
                                                        </h4>
                                                        <div className="mt-2 flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#828D9E" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                                    <circle cx="12" cy="10" r="3"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-graycolor text-[14px]">
                                                                Bangladesh, Raj
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-3 lg:mt-0">
                                                    <button type='button'
                                                            className="py-2 px-10 flex items-center gap-1 bg-primary text-white border hover:bg-transparent hover:border-primary hover:text-primary rounded text-[14px]">
                                                        <FaPlus size={10}/>
                                                        Follow
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col border rounded py-4 px-6 mt-4">
                                            <div className="block lg:flex items-center justify-between">
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                    <Image src={UserImg} className="w-[80px] h-[80px] rounded-full"
                                                           alt="UserImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Roshan Nafiz
                                                        </h4>
                                                        <div className="mt-2 flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#828D9E" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round">
                                                                    <path
                                                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                                    <circle cx="12" cy="10" r="3"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-graycolor text-[14px]">
                                                                Bangladesh, Raj
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-3 lg:mt-0">
                                                    <button type='button'
                                                            className="py-2 px-10 flex items-center gap-1 bg-primary text-white border hover:bg-transparent hover:border-primary hover:text-primary rounded text-[14px]">
                                                        <FaPlus size={10}/>
                                                        Follow
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="button_wrap text-center pt-2">
                                        <button type='button'
                                                className="text-[14px] text-primary py-2 hover:bg-primary hover:text-white transition border rounded w-full">
                                            View all
                                        </button>
                                    </div>
                                </div>

                                {/* Posts */}
                                <div className="mt-6 box py-4 px-6 bg-white rounded">
                                    <div className="header_wrap text-center font-[500] text-[16px] pb-2">
                                        <h1>Posts</h1>
                                    </div>
                                    <hr/>
                                    <div className="grid grid-cols-1 mt-4 pb-4">
                                        <div className="col border rounded py-4 px-6">

                                            {/* Post Box */}
                                            <div className="post_box_wrap">
                                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                                    <div className="flex items-center justify-between">
                                                        {loading ? (
                                                            <>
                                                                <div
                                                                    className="flex items-center justify-start gap-2 w-full">
                                                                    <Skeleton width={50} height={50} borderRadius="100%"
                                                                              count={1}/>
                                                                    <Skeleton containerClassName="flex-1" height={50}
                                                                              count={1}/>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Link href='#' className="flex items-center gap-1">
                                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                                    <div className="leading-[17px]">
                                                                        <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                            John Doe
                                                                        </h4>

                                                                        <div
                                                                            className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            2h ago
                                                        </span>
                                                                            <LuDot size={12}/>
                                                                            <IoMdGlobe size={13}/>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </>
                                                        )}
                                                    </div>

                                                    {loading ? (
                                                        <>
                                                            <Skeleton height={30} count={1}/>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h4 className="mt-3 text-[14px] text-prgcolor">
                                                                The SRS-XB100 speaker provides powerful, clear,
                                                                expansive sound in a small, portable and durable
                                                                body. Despite its size...
                                                            </h4>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Post Icons */}
                                                <div className="post_icons mt-0">
                                                    {loading ? (
                                                        <div className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                            <Skeleton height={40} count={1}/>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div
                                                                className="flex items-center justify-between bg-white border-t px-4 py-3 mt-0">
                                                                <div className="flex items-center gap-1">
                                                                    <div className="cursor-pointer"
                                                                         onClick={() => setIsClickedLikePostTwo(!isClickedLikePostTwo)}>
                                                                        {isClickedLikePostTwo ? (
                                                                            <GoHeartFill
                                                                                className="w-4 h-4 text-primary hover:text-primary"/>
                                                                        ) : (
                                                                            <GoHeart
                                                                                className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                        )}
                                                                    </div>
                                                                    <div className="count">
                                                                        <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">112</h4>
                                                                    </div>
                                                                </div>

                                                                <div className="flex items-center gap-1">
                                                                    <div className="cursor-pointer">
                                                                        <GoComment
                                                                            className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                    </div>
                                                                    <div className="count">
                                                                        <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">852</h4>
                                                                    </div>
                                                                </div>

                                                                <div className="flex items-center gap-1">
                                                                    <div className="cursor-pointer">
                                                                        <GoSync
                                                                            className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                                    </div>
                                                                    <div className="count">
                                                                        <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">2k</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Post Write Comment */}
                                                <div className="post_write_comment mt-0">
                                                    {loading ? (
                                                        <div className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                            <Skeleton height={40} count={1}/>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div
                                                                className="flex items-center justify-between box bg-white px-4 py-2 rounded rounded-b-none">
                                                                <div
                                                                    className="relative w-full flex items-center gap-1">
                                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                                    <input
                                                                        className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                        type="text"
                                                                        placeholder="Write a comment..."
                                                                    />

                                                                    <div
                                                                        className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                                        <div className="cursor-pointer">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 24 24"
                                                                                 fill="#4D7FB8"
                                                                                 className="w-5 h-5">
                                                                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                                      clipRule="evenodd"/>
                                                                            </svg>
                                                                        </div>
                                                                        <GoSmiley
                                                                            size={20}
                                                                            className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col border rounded py-4 px-6 mt-4">
                                            {/* Post Box */}
                                            <div className="post_box_wrap">
                                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                                    <div className="flex items-center justify-between">
                                                        {loading ? (
                                                            <div
                                                                className="flex items-center justify-start gap-2 w-full">
                                                                <Skeleton width={50} height={50} borderRadius="100%"
                                                                          count={1}/>
                                                                <Skeleton containerClassName="flex-1" height={50}
                                                                          count={1}/>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Link href='#' className="flex items-center gap-1">
                                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                                    <div className="leading-[17px]">
                                                                        <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                            Inna K.
                                                                        </h4>
                                                                        <div
                                                                            className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            6d ago
                                                        </span>
                                                                            <LuDot size={12}/>
                                                                            <IoMdGlobe size={13}/>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </>
                                                        )}
                                                    </div>
                                                    {loading ? (
                                                        <>
                                                            <Skeleton height={30} count={1}/>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h4 className="mt-3 text-[14px] text-prgcolor">
                                                                Could anyone please tell me where to find a good deal on
                                                                the iPhone 15?
                                                            </h4>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="post_image w-full mt-0">
                                                    {loading ? (
                                                        <>
                                                            <div className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                                <Skeleton height={200} count={1}/>
                                                                <Skeleton height={30} count={1}/>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div onClick={() => setOpenStartPostImageModal(true)}
                                                                 className="flex items-center gap-0 w-full cursor-pointer">
                                                                <div className="w-full">
                                                                    <Image src={SliderOneImg}
                                                                           className="w-full h-[180px]"
                                                                           alt="SliderImg"/>
                                                                </div>
                                                                <div className="w-full">
                                                                    <Image src={SliderTwoImg}
                                                                           className="w-full h-[180px]"
                                                                           alt="SliderImg"/>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                {/* Post Icons */}
                                                <div className="post_icons mt-0">
                                                    {loading ? (
                                                        <div className="box mt-0 bg-white px-4 pt-0 pb-4 rounded">
                                                            <Skeleton height={40} count={1}/>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div
                                                                className="flex items-center justify-between rounded rounded-t-none bg-white px-4 py-3 mt-0">
                                                                <div className="flex items-center gap-1">
                                                                    <div className="cursor-pointer"
                                                                         onClick={() => setIsClickedLikePostThree(!isClickedLikePostThree)}>
                                                                        {isClickedLikePostThree ? (
                                                                            <GoHeartFill
                                                                                className="w-4 h-4 text-primary hover:text-primary"/>
                                                                        ) : (
                                                                            <GoHeart
                                                                                className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                        )}
                                                                    </div>
                                                                    <div className="count">
                                                                        <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">112</h4>
                                                                    </div>
                                                                </div>

                                                                <div className="flex items-center gap-1">
                                                                    <div className="cursor-pointer">
                                                                        <GoComment
                                                                            className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                    </div>
                                                                    <div className="count">
                                                                        <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">852</h4>
                                                                    </div>
                                                                </div>

                                                                <div className="flex items-center gap-1">
                                                                    <div className="cursor-pointer">
                                                                        <GoSync
                                                                            className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                                    </div>
                                                                    <div className="count">
                                                                        <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">2k</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                {/* Post Write Comment */}
                                                <div className="post_write_comment mt-0">
                                                    {loading ? (
                                                        <div className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                            <Skeleton height={40} count={1}/>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div
                                                                className="flex items-center justify-between box bg-white px-4 py-2 rounded rounded-b-none">
                                                                <div
                                                                    className="relative w-full flex items-center gap-1">
                                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                                    <input
                                                                        className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                        type="text"
                                                                        placeholder="Write a comment..."
                                                                    />

                                                                    <div
                                                                        className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                                        <div className="cursor-pointer">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 24 24"
                                                                                 fill="#4D7FB8"
                                                                                 className="w-5 h-5">
                                                                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                                      clipRule="evenodd"/>
                                                                            </svg>
                                                                        </div>
                                                                        <GoSmiley
                                                                            size={20}
                                                                            className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="button_wrap text-center pt-2">
                                        <button type='button'
                                                className="text-[14px] text-primary py-2 hover:bg-primary hover:text-white transition border rounded w-full">
                                            View all
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`posts_content ${activeTab === 'posts' ? 'block' : 'hidden'}`}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                    <div className="col lg:col-span-4">
                                        <div className="pb-4">
                                            <h4 className="text-[14px] text-prgcolor">Filters</h4>
                                        </div>
                                        <div className="box py-3 px-6 bg-white rounded">
                                            <details open={true} className="group">
                                                <summary
                                                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                    Post from
                                                    <RxPlus
                                                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                </summary>
                                                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                    <div id="checkbox" className="mt-3">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox defaultChecked>
                                                                Anyone
                                                            </Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>People</Checkbox>
                                                        </div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Checkbox>Stores</Checkbox>
                                                        </div>
                                                    </div>
                                                </ul>
                                                <hr/>
                                                <div className="mt-3">
                                                    <button type='button'
                                                            className="py-2 px-4 bg-gray-50 hover:bg-primary hover:text-white hover:border-primary rounded text-[14px] border">
                                                        Clear Setting
                                                    </button>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                    <div className="col lg:col-span-8">
                                        <div className="flex text-[14px] items-center justify-end">
                                            {/* Filter dropdown */}
                                            <div ref={dropdownFilterRef} onClick={toggleDropdownFilter}
                                                 className="filter_dropdown cursor-pointer relative">
                                                <div
                                                    className="h-8 bg-white flex border border-gray-200 rounded items-center">
                                                    <input value={selectedOptionFilter} name="select"
                                                           id="select"
                                                           className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full bg-white"
                                                           readOnly/>
                                                    <button type='button'
                                                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                        <RiArrowDropDownLine size={25}/>
                                                    </button>
                                                </div>

                                                {isOpenDropdownFilter && (
                                                    <div
                                                        className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                        <div className="cursor-pointer group"
                                                             onClick={() => handleOptionSelectFilter("Sort by")}>
                                                            <div
                                                                className="block p-2 border-transparent border-l-4 group-hover:border-primary group-hover:bg-gray-100">
                                                                Sort by
                                                            </div>
                                                        </div>
                                                        <div className="cursor-pointer group"
                                                             onClick={() => handleOptionSelectFilter("Relevance")}>
                                                            <div
                                                                className="block p-2 border-transparent border-l-4 group-hover:border-primary group-hover:bg-gray-100">
                                                                Relevance
                                                            </div>
                                                        </div>
                                                        <div className="cursor-pointer group"
                                                             onClick={() => handleOptionSelectFilter("Popular")}>
                                                            <div
                                                                className="block p-2 border-transparent border-l-4 group-hover:border-primary group-hover:bg-gray-100">
                                                                Popular
                                                            </div>
                                                        </div>
                                                        <div className="cursor-pointer group border-t"
                                                             onClick={() => handleOptionSelectFilter("Newest")}>
                                                            <div
                                                                className="block p-2 border-transparent border-l-4 group-hover:border-primary border-blue-600 group-hover:bg-gray-100">
                                                                Newest
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="box">
                                            <div className="grid grid-cols-1 mt-1">
                                                <div className="col bg-white border border-b-0 rounded py-4 px-6">
                                                    {/* Post Box */}
                                                    <div className="post_box_wrap">
                                                        <div
                                                            className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                                            <div className="flex items-center justify-between">
                                                                {loading ? (
                                                                    <>
                                                                        <div
                                                                            className="flex items-center justify-start gap-2 w-full">
                                                                            <Skeleton width={50} height={50}
                                                                                      borderRadius="100%"
                                                                                      count={1}/>
                                                                            <Skeleton containerClassName="flex-1"
                                                                                      height={50}
                                                                                      count={1}/>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Link href='#'
                                                                              className="flex items-center gap-1">
                                                                            <HiUserCircle size={35}
                                                                                          className="text-[#6B7280]"/>
                                                                            <div className="leading-[17px]">
                                                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                                    John Doe
                                                                                </h4>

                                                                                <div
                                                                                    className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            2h ago
                                                        </span>
                                                                                    <LuDot size={12}/>
                                                                                    <IoMdGlobe size={13}/>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </>
                                                                )}
                                                            </div>

                                                            {loading ? (
                                                                <>
                                                                    <Skeleton height={30} count={1}/>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <h4 className="mt-3 text-[14px] text-prgcolor">
                                                                        The SRS-XB100 speaker provides powerful, clear,
                                                                        expansive sound in a small, portable and durable
                                                                        body. Despite its size...
                                                                    </h4>
                                                                </>
                                                            )}
                                                        </div>

                                                        {/* Post Icons */}
                                                        <div className="post_icons mt-0">
                                                            {loading ? (
                                                                <div
                                                                    className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                                    <Skeleton height={40} count={1}/>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <div
                                                                        className="flex items-center justify-between bg-white border-t px-4 py-3 mt-0">
                                                                        <div className="flex items-center gap-1">
                                                                            <div className="cursor-pointer"
                                                                                 onClick={() => setIsClickedLikePostTwo(!isClickedLikePostTwo)}>
                                                                                {isClickedLikePostTwo ? (
                                                                                    <GoHeartFill
                                                                                        className="w-4 h-4 text-primary hover:text-primary"/>
                                                                                ) : (
                                                                                    <GoHeart
                                                                                        className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                                )}
                                                                            </div>
                                                                            <div className="count">
                                                                                <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">112</h4>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex items-center gap-1">
                                                                            <div className="cursor-pointer">
                                                                                <GoComment
                                                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                            </div>
                                                                            <div className="count">
                                                                                <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">852</h4>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex items-center gap-1">
                                                                            <div className="cursor-pointer">
                                                                                <GoSync
                                                                                    className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                                            </div>
                                                                            <div className="count">
                                                                                <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">2k</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>

                                                        {/* Post Write Comment */}
                                                        <div className="post_write_comment mt-0">
                                                            {loading ? (
                                                                <div
                                                                    className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                                    <Skeleton height={40} count={1}/>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <div
                                                                        className="flex items-center justify-between box bg-white px-4 py-2 rounded rounded-b-none">
                                                                        <div
                                                                            className="relative w-full flex items-center gap-1">
                                                                            <HiUserCircle size={40}
                                                                                          className="text-[#6B7280]"/>
                                                                            <input
                                                                                className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                                type="text"
                                                                                placeholder="Write a comment..."
                                                                            />

                                                                            <div
                                                                                className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                                                <div className="cursor-pointer">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="#4D7FB8"
                                                                                        className="w-5 h-5">
                                                                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                                              clipRule="evenodd"/>
                                                                                    </svg>
                                                                                </div>
                                                                                <GoSmiley
                                                                                    size={20}
                                                                                    className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr/>

                                                <div className="col mt-4 bg-white border border-b-0 rounded rounded-b-none py-4 px-6">
                                                    {/* Post Box */}
                                                    <div className="post_box_wrap">
                                                        <div
                                                            className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                                            <div className="flex items-center justify-between">
                                                                {loading ? (
                                                                    <div
                                                                        className="flex items-center justify-start gap-2 w-full">
                                                                        <Skeleton width={50} height={50}
                                                                                  borderRadius="100%"
                                                                                  count={1}/>
                                                                        <Skeleton containerClassName="flex-1"
                                                                                  height={50}
                                                                                  count={1}/>
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <Link href='#'
                                                                              className="flex items-center gap-1">
                                                                            <HiUserCircle size={35}
                                                                                          className="text-[#6B7280]"/>
                                                                            <div className="leading-[17px]">
                                                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                                    Inna K.
                                                                                </h4>
                                                                                <div
                                                                                    className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            6d ago
                                                        </span>
                                                                                    <LuDot size={12}/>
                                                                                    <IoMdGlobe size={13}/>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </>
                                                                )}
                                                            </div>
                                                            {loading ? (
                                                                <>
                                                                    <Skeleton height={30} count={1}/>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <h4 className="mt-3 text-[14px] text-prgcolor">
                                                                        Could anyone please tell me where to find a good
                                                                        deal on
                                                                        the iPhone 15?
                                                                    </h4>
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className="post_image w-full mt-0">
                                                            {loading ? (
                                                                <>
                                                                    <div
                                                                        className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                                        <Skeleton height={200} count={1}/>
                                                                        <Skeleton height={30} count={1}/>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div
                                                                        onClick={() => setOpenStartPostImageModal(true)}
                                                                        className="flex items-center gap-0 w-full cursor-pointer">
                                                                        <div className="w-full">
                                                                            <Image src={SliderOneImg}
                                                                                   className="w-full h-[180px]"
                                                                                   alt="SliderImg"/>
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <Image src={SliderTwoImg}
                                                                                   className="w-full h-[180px]"
                                                                                   alt="SliderImg"/>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                        {/* Post Icons */}
                                                        <div className="post_icons mt-0">
                                                            {loading ? (
                                                                <div
                                                                    className="box mt-0 bg-white px-4 pt-0 pb-4 rounded">
                                                                    <Skeleton height={40} count={1}/>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <div
                                                                        className="flex items-center justify-between rounded rounded-t-none bg-white px-4 py-3 mt-0">
                                                                        <div className="flex items-center gap-1">
                                                                            <div className="cursor-pointer"
                                                                                 onClick={() => setIsClickedLikePostThree(!isClickedLikePostThree)}>
                                                                                {isClickedLikePostThree ? (
                                                                                    <GoHeartFill
                                                                                        className="w-4 h-4 text-primary hover:text-primary"/>
                                                                                ) : (
                                                                                    <GoHeart
                                                                                        className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                                )}
                                                                            </div>
                                                                            <div className="count">
                                                                                <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">112</h4>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex items-center gap-1">
                                                                            <div className="cursor-pointer">
                                                                                <GoComment
                                                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                            </div>
                                                                            <div className="count">
                                                                                <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">852</h4>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex items-center gap-1">
                                                                            <div className="cursor-pointer">
                                                                                <GoSync
                                                                                    className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                                            </div>
                                                                            <div className="count">
                                                                                <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">2k</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                        {/* Post Write Comment */}
                                                        <div className="post_write_comment mt-0">
                                                            {loading ? (
                                                                <div
                                                                    className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                                    <Skeleton height={40} count={1}/>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <div
                                                                        className="flex items-center justify-between box bg-white px-4 py-2 rounded rounded-b-none">
                                                                        <div
                                                                            className="relative w-full flex items-center gap-1">
                                                                            <HiUserCircle size={40}
                                                                                          className="text-[#6B7280]"/>
                                                                            <input
                                                                                className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                                type="text"
                                                                                placeholder="Write a comment..."
                                                                            />

                                                                            <div
                                                                                className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                                                <div className="cursor-pointer">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="#4D7FB8"
                                                                                        className="w-5 h-5">
                                                                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                                              clipRule="evenodd"/>
                                                                                    </svg>
                                                                                </div>
                                                                                <GoSmiley
                                                                                    size={20}
                                                                                    className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button_wrap text-center bg-white">
                                                <button type='button'
                                                        className="text-[14px] text-primary py-2 hover:bg-primary hover:text-white transition border rounded rounded-t-none w-full">
                                                    View all
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`listings_content ${activeTab === 'listings' ? 'block' : 'hidden'}`}>
                                {/*<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">*/}
                                {/*    /!* Filter *!/*/}
                                {/*    <div className="col lg:col-span-4">*/}
                                {/*        <div className="pb-4">*/}
                                {/*            <h4 className="text-[14px] text-prgcolor">Filters</h4>*/}
                                {/*        </div>*/}
                                {/*        <div className="box py-3 px-6 bg-white rounded">*/}
                                {/*            <details open={true} className="group pb-3">*/}
                                {/*                <summary*/}
                                {/*                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">*/}
                                {/*                    Sub-category*/}
                                {/*                    <RxPlus*/}
                                {/*                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>*/}
                                {/*                </summary>*/}
                                {/*                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">*/}
                                {/*                    <div id="checkbox" className="mt-3">*/}
                                {/*                        <div className="flex items-center gap-2">*/}
                                {/*                            <Checkbox>*/}
                                {/*                                Cameras*/}
                                {/*                            </Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Computers</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Speakers</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Smartphones</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </ul>*/}
                                {/*            </details>*/}
                                {/*            <hr/>*/}
                                {/*            <details className="group py-3">*/}
                                {/*                <summary*/}
                                {/*                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">*/}
                                {/*                    Brand*/}
                                {/*                    <RxPlus*/}
                                {/*                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>*/}
                                {/*                </summary>*/}
                                {/*                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">*/}
                                {/*                    <div id="checkbox" className="mt-3">*/}
                                {/*                        <div className="flex items-center gap-2">*/}
                                {/*                            <Checkbox>*/}
                                {/*                                Apple*/}
                                {/*                            </Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Samsung</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Xiaomi</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Honor</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </ul>*/}
                                {/*            </details>*/}
                                {/*            <hr/>*/}
                                {/*            <details className="group py-3">*/}
                                {/*                <summary*/}
                                {/*                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">*/}
                                {/*                    Condition*/}
                                {/*                    <RxPlus*/}
                                {/*                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>*/}
                                {/*                </summary>*/}
                                {/*                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">*/}
                                {/*                    <div id="checkbox" className="mt-3">*/}
                                {/*                        <div className="flex items-center gap-2">*/}
                                {/*                            <Checkbox>*/}
                                {/*                                New*/}
                                {/*                            </Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Used</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </ul>*/}
                                {/*            </details>*/}
                                {/*            <hr/>*/}
                                {/*            <details className="group py-3">*/}
                                {/*                <summary*/}
                                {/*                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">*/}
                                {/*                    Range*/}
                                {/*                    <RxPlus*/}
                                {/*                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>*/}
                                {/*                </summary>*/}
                                {/*                <div className="py-2 overflow-hidden">*/}
                                {/*                    <div className="value_box flex items-center gap-4 mb-4">*/}
                                {/*                        <input*/}
                                {/*                            className="m-0 rounded w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"*/}
                                {/*                            type="text"*/}
                                {/*                            placeholder="$"*/}
                                {/*                            value={`$${minVal}`}*/}
                                {/*                            onChange={(e) => {*/}
                                {/*                                let value = e.target.value;*/}
                                {/*                                // Allow only numbers and the "$" sign*/}
                                {/*                                const newValue = value.replace(/[^0-9$]/g, '');*/}
                                {/*                                // Remove "$" sign and handle empty value*/}
                                {/*                                let newValueWithoutDollar = newValue.replace('$', '');*/}
                                {/*                                // Limit max value to 5000*/}
                                {/*                                if (newValueWithoutDollar !== '' && parseFloat(newValueWithoutDollar) > 4999) {*/}
                                {/*                                    newValueWithoutDollar = '4999';*/}
                                {/*                                }*/}
                                {/*                                setMinVal(newValueWithoutDollar === '' ? 0 : parseFloat(newValueWithoutDollar));*/}
                                {/*                            }}*/}
                                {/*                        />*/}
                                {/*                        <input*/}
                                {/*                            className="m-0 rounded w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"*/}
                                {/*                            type="text"*/}
                                {/*                            placeholder="$"*/}
                                {/*                            value={`$${maxVal}`}*/}
                                {/*                            onChange={(e) => {*/}
                                {/*                                let value = e.target.value;*/}
                                {/*                                // Allow only numbers and the "$" sign*/}
                                {/*                                const newValue = value.replace(/[^0-9$]/g, '');*/}
                                {/*                                // Remove "$" sign and handle empty value*/}
                                {/*                                let newValueWithoutDollar = newValue.replace('$', '');*/}
                                {/*                                // Limit max value to 5000*/}
                                {/*                                if (newValueWithoutDollar !== '' && parseFloat(newValueWithoutDollar) > 5000) {*/}
                                {/*                                    newValueWithoutDollar = '5000';*/}
                                {/*                                }*/}
                                {/*                                setMaxVal(newValueWithoutDollar === '' ? 0 : parseFloat(newValueWithoutDollar));*/}
                                {/*                            }}*/}
                                {/*                        />*/}
                                {/*                    </div>*/}
                                {/*                    <div className="slider_range_wrap w-full">*/}
                                {/*                        <input*/}
                                {/*                            type="range"*/}
                                {/*                            min={min}*/}
                                {/*                            max={max}*/}
                                {/*                            value={minVal}*/}
                                {/*                            ref={minValRef}*/}
                                {/*                            onChange={handleMinChange}*/}
                                {/*                            className={classnames("thumb thumb--zindex-3", {*/}
                                {/*                                "thumb--zindex-5": minVal > max - 100*/}
                                {/*                            })}*/}
                                {/*                        />*/}
                                {/*                        <input*/}
                                {/*                            type="range"*/}
                                {/*                            min={min}*/}
                                {/*                            max={max}*/}
                                {/*                            value={maxVal}*/}
                                {/*                            ref={maxValRef}*/}
                                {/*                            onChange={handleMaxChange}*/}
                                {/*                            className="thumb thumb--zindex-4"*/}
                                {/*                        />*/}
                                {/*                        <div className="slider">*/}
                                {/*                            <div className="slider__track"/>*/}
                                {/*                            <div ref={rangeRef} className="slider__range"/>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </details>*/}
                                {/*            <hr/>*/}
                                {/*            <details className="group py-3">*/}
                                {/*                <summary*/}
                                {/*                    className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">*/}
                                {/*                    Shipping method*/}
                                {/*                    <RxPlus*/}
                                {/*                        className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>*/}
                                {/*                </summary>*/}
                                {/*                <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">*/}
                                {/*                    <div id="checkbox" className="mt-3">*/}
                                {/*                        <div className="flex items-center gap-2">*/}
                                {/*                            <Checkbox>*/}
                                {/*                                Ship Only*/}
                                {/*                            </Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="mt-2 flex items-center gap-2">*/}
                                {/*                            <Checkbox>Click & Collect</Checkbox>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </ul>*/}
                                {/*            </details>*/}
                                {/*            <div className="group">*/}
                                {/*                <hr/>*/}
                                {/*                <div className="mt-3">*/}
                                {/*                    <button type='button'*/}
                                {/*                            className="py-2 px-4 bg-gray-50 hover:bg-primary hover:text-white hover:border-primary rounded text-[14px] border">*/}
                                {/*                        Clear Setting*/}
                                {/*                    </button>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="col lg:col-span-8">*/}
                                {/*        <div className="flex text-[14px] items-center justify-end gap-3">*/}
                                {/*            <div className="max-w-lg">*/}
                                {/*                <Select id="post_filter">*/}
                                {/*                    <option>Sort by</option>*/}
                                {/*                    <option>Newest</option>*/}
                                {/*                    <option>Popular</option>*/}
                                {/*                </Select>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="box py-4 px-6 bg-white rounded mt-2">*/}
                                {/*            <div*/}
                                {/*                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pb-4">*/}
                                {/*                <div className="col border rounded p-4 cursor-pointer">*/}
                                {/*                    <Image src={ProductImg} alt="ProductImg"/>*/}
                                {/*                    <div className="product_content mt-3">*/}
                                {/*                        <h4 className='text-[12px] text-graycolor'>*/}
                                {/*                            Electronics*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='text-[14px] text-prgcolor font-[500]'>*/}
                                {/*                            Playstation X*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='mt-1 text-[14px] text-black font-[500]'>*/}
                                {/*                            $1200.00*/}
                                {/*                        </h4>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="col border rounded p-4 cursor-pointer">*/}
                                {/*                    <Image src={ProductImg} alt="ProductImg"/>*/}
                                {/*                    <div className="product_content mt-3">*/}
                                {/*                        <h4 className='text-[12px] text-graycolor'>*/}
                                {/*                            Electronics*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='text-[14px] text-prgcolor font-[500]'>*/}
                                {/*                            Playstation X*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='mt-1 text-[14px] text-black font-[500]'>*/}
                                {/*                            $1200.00*/}
                                {/*                        </h4>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="col border rounded p-4 cursor-pointer">*/}
                                {/*                    <Image src={ProductImg} alt="ProductImg"/>*/}
                                {/*                    <div className="product_content mt-3">*/}
                                {/*                        <h4 className='text-[12px] text-graycolor'>*/}
                                {/*                            Electronics*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='text-[14px] text-prgcolor font-[500]'>*/}
                                {/*                            Playstation X*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='mt-1 text-[14px] text-black font-[500]'>*/}
                                {/*                            $1200.00*/}
                                {/*                        </h4>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="col border rounded p-4 cursor-pointer">*/}
                                {/*                    <Image src={ProductImg} alt="ProductImg"/>*/}
                                {/*                    <div className="product_content mt-3">*/}
                                {/*                        <h4 className='text-[12px] text-graycolor'>*/}
                                {/*                            Electronics*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='text-[14px] text-prgcolor font-[500]'>*/}
                                {/*                            Playstation X*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='mt-1 text-[14px] text-black font-[500]'>*/}
                                {/*                            $1200.00*/}
                                {/*                        </h4>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="col border rounded p-4 cursor-pointer">*/}
                                {/*                    <Image src={ProductImg} alt="ProductImg"/>*/}
                                {/*                    <div className="product_content mt-3">*/}
                                {/*                        <h4 className='text-[12px] text-graycolor'>*/}
                                {/*                            Electronics*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='text-[14px] text-prgcolor font-[500]'>*/}
                                {/*                            Playstation X*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='mt-1 text-[14px] text-black font-[500]'>*/}
                                {/*                            $1200.00*/}
                                {/*                        </h4>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="col border rounded p-4 cursor-pointer">*/}
                                {/*                    <Image src={ProductImg} alt="ProductImg"/>*/}
                                {/*                    <div className="product_content mt-3">*/}
                                {/*                        <h4 className='text-[12px] text-graycolor'>*/}
                                {/*                            Electronics*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='text-[14px] text-prgcolor font-[500]'>*/}
                                {/*                            Playstation X*/}
                                {/*                        </h4>*/}
                                {/*                        <h4 className='mt-1 text-[14px] text-black font-[500]'>*/}
                                {/*                            $1200.00*/}
                                {/*                        </h4>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            /!* Pagination *!/*/}
                                {/*            <div className="pagination mt-4 flex items-center justify-center">*/}
                                {/*                <nav aria-label="Page navigation example">*/}
                                {/*                    <ul className="inline-flex -space-x-px text-[14px] gap-1">*/}
                                {/*                        <li>*/}
                                {/*                            <Link href='#' aria-current="page"*/}
                                {/*                                  className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">*/}
                                {/*                                <HiArrowLongLeft/>*/}
                                {/*                            </Link>*/}
                                {/*                        </li>*/}
                                {/*                        <li>*/}
                                {/*                            <Link href='#' aria-current="page"*/}
                                {/*                                  className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">*/}
                                {/*                                1*/}
                                {/*                            </Link>*/}
                                {/*                        </li>*/}
                                {/*                        <li>*/}
                                {/*                            <Link href='#'*/}
                                {/*                                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">*/}
                                {/*                                2*/}
                                {/*                            </Link>*/}
                                {/*                        </li>*/}
                                {/*                        <li>*/}
                                {/*                            <Link href='#' aria-current="page"*/}
                                {/*                                  className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">*/}
                                {/*                                <HiArrowLongRight/>*/}
                                {/*                            </Link>*/}
                                {/*                        </li>*/}
                                {/*                    </ul>*/}
                                {/*                </nav>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <div className={`stores_content ${activeTab === 'stores' ? 'block' : 'hidden'}`}>
                                <h1>Stores</h1>
                            </div>
                            <div className={`users_content ${activeTab === 'users' ? 'block' : 'hidden'}`}>
                                <h1>Users</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start PosImage Pop-Up Start */}
                <Modal size="5xl"
                       dismissible
                       show={openStartPostImageModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartPostImageModal(false)}>
                    <Modal.Header
                        className="flex lg:hidden"
                        style={{
                            height: '50px',
                            alignItems: 'center'
                        }}
                    >
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <div className="col md:col-span-7">
                                    <div
                                        className="slider_wrapper sticky top-0 h-56 sm:h-64 md:h-[450px] bg-black">
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
                                <div className="col md:col-span-5">
                                    <div className="h-[450px] overflow-y-scroll overflow-x-hidden">
                                        <div
                                            className="bg-white px-4 pb-4 pt-2 rounded rounded-b-none sticky top-[0px] z-[999]">
                                            <div className="flex items-center justify-between">
                                                <Link href='#' className="flex items-center gap-1">
                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    <div className="leading-[17px]">
                                                        <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                            John Doe
                                                        </h4>

                                                        <div
                                                            className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            2h ago
                                                        </span>
                                                            <LuDot size={12}/>
                                                            <IoMdGlobe size={13}/>
                                                        </div>
                                                    </div>
                                                </Link>

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
                                                                className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
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
                                                                                Edit post
                                                                            </h4>
                                                                        </Link>

                                                                        <div
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
                                                                                Delete post
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Post Box */}
                                        <div className="post_box_wrap h-full">
                                            <div className="box bg-white px-4 pb-4 rounded rounded-b-none">
                                                <h4 className="mt-0 text-[14px] text-prgcolor">
                                                    The SRS-XB100 speaker provides powerful, clear,
                                                    expansive sound in a small, portable and durable
                                                    body. Despite its size...
                                                </h4>
                                            </div>

                                            {/* Post Icons */}
                                            <div className="post_icons mt-0">
                                                <div
                                                    className="flex items-center justify-between bg-white border-t px-4 py-3 mt-0">
                                                    <div className="flex items-center gap-1">
                                                        <div className="cursor-pointer"
                                                             onClick={() => setIsClickedLikePostTwo(!isClickedLikePostTwo)}>
                                                            {isClickedLikePostTwo ? (
                                                                <GoHeartFill
                                                                    className="w-4 h-4 text-primary hover:text-primary"/>
                                                            ) : (
                                                                <GoHeart
                                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                            )}
                                                        </div>
                                                        <div className="count">
                                                            <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">112</h4>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <div className="cursor-pointer">
                                                            <GoComment
                                                                className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                        </div>
                                                        <div className="count">
                                                            <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">852</h4>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <div className="cursor-pointer">
                                                            <GoSync
                                                                className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                        </div>
                                                        <div className="count">
                                                            <h4 className="text-[12px] text-prgcolor cursor-pointer hover:underline">2k</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Post Write Comment */}
                                            <div className="post_write_comment mt-0">
                                                <div
                                                    className="flex items-center justify-between box bg-white px-4 py-2 rounded rounded-b-none">
                                                    <div className="relative w-full flex items-center gap-1">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <input
                                                            className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Write a comment..."
                                                        />

                                                        <div
                                                            className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                            <div className="cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="#4D7FB8"
                                                                     className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                          clipRule="evenodd"/>
                                                                </svg>
                                                            </div>
                                                            <GoSmiley
                                                                size={20}
                                                                className="cursor-pointer text-graycolor hover:text-primary"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* PosImage Pop-Up End */}
            </section>
        </>
    )
        ;
}

