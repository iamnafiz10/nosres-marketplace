"use client";
import React, {useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import ProductImg from '@/../public/assets/images/product.png';
import StoreImg from '@/../public/assets/images/store.jpg';
import UserImg from '@/../public/assets/images/profile/user.jpg';
import Image from "next/image";
import {FaPlus} from "react-icons/fa";

export default function Home() {
    const loading = useLoading();
    useTitle("Search-All")

    // Top Tab
    const [activeTab, setActiveTab] = useState('all');
    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };
    return (
        <>
            <section id="home-page-section">
                <div className="pt-[49px]">
                    <div className="topbar_tab_wrap bg-white py-3 border">
                        <div className="container">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleTabClick('all')}
                                    type='button'
                                    className={`py-2 px-4 rounded-full text-[14px] ${
                                        activeTab === 'all'
                                            ? 'text-white bg-primary border'
                                            : 'text-black bg-gray-100 hover:bg-primary hover:text-white border hover:border-primary'
                                    }`}>
                                    All
                                </button>
                                <button
                                    type='button'
                                    onClick={() => handleTabClick('posts')}
                                    className={`py-2 px-4 rounded-full text-[14px] ${
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
                                    className={`py-2 px-4 rounded-full text-[14px] ${
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
                                    className={`py-2 px-4 rounded-full text-[14px] ${
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
                                    className={`py-2 px-4 rounded-full text-[14px] ${
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
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-2"></div>

                        {/* Body Content */}
                        <div className="col ml-0 lg:ml-10 lg:col-span-10">
                            <div className={`all_content ${activeTab === 'all' ? 'block' : 'hidden'}`}>
                                {/* Listing */}
                                <div className="box py-4 px-6 bg-white rounded">
                                    <div className="header_wrap text-center font-[500] text-[16px] pb-2">
                                        <h1>Listing</h1>
                                    </div>
                                    <hr/>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pb-4">
                                        <div className="col border rounded p-4">
                                            <Image src={ProductImg} alt="ProductImg"/>
                                            <div className="product_content mt-3">
                                                <h4 className='text-[12px] text-graycolor'>
                                                    Electronics
                                                </h4>
                                                <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                    Playstation X
                                                </h4>
                                                <h4 className='mt-1 text-[14px] text-prgcolor font-[500]'>
                                                    $1200.00
                                                </h4>
                                                <button type='button'
                                                        className="mt-4 py-2 px-4 bg-white border hover:bg-primary hover:border-primary hover:text-white rounded text-[14px] text-prgcolor">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col border rounded p-4">
                                            <Image src={ProductImg} alt="ProductImg"/>
                                            <div className="product_content mt-3">
                                                <h4 className='text-[12px] text-graycolor'>
                                                    Electronics
                                                </h4>
                                                <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                    Playstation X
                                                </h4>
                                                <h4 className='mt-1 text-[14px] text-prgcolor font-[500]'>
                                                    $1200.00
                                                </h4>
                                                <button type='button'
                                                        className="mt-4 py-2 px-4 bg-white border hover:bg-primary hover:border-primary hover:text-white rounded text-[14px] text-prgcolor">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col border rounded p-4">
                                            <Image src={ProductImg} alt="ProductImg"/>
                                            <div className="product_content mt-3">
                                                <h4 className='text-[12px] text-graycolor'>
                                                    Electronics
                                                </h4>
                                                <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                    Playstation X
                                                </h4>
                                                <h4 className='mt-1 text-[14px] text-prgcolor font-[500]'>
                                                    $1200.00
                                                </h4>
                                                <button type='button'
                                                        className="mt-4 py-2 px-4 bg-white border hover:bg-primary hover:border-primary hover:text-white rounded text-[14px] text-prgcolor">
                                                    Add to Cart
                                                </button>
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
                                                    <Image src={StoreImg} className="w-[100px] h-[100px]"
                                                           alt="StoreImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Store name
                                                        </h4>
                                                        <div className="mt-3 flex items-center gap-1">
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
                                                            <h4 className="text-prgcolor text-[14px]">
                                                                Electronics
                                                            </h4>
                                                        </div>

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
                                                            <h4 className="text-prgcolor text-[14px]">
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
                                                    <Image src={StoreImg} className="w-[100px] h-[100px]"
                                                           alt="StoreImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Store name
                                                        </h4>
                                                        <div className="mt-3 flex items-center gap-1">
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
                                                            <h4 className="text-prgcolor text-[14px]">
                                                                Electronics
                                                            </h4>
                                                        </div>

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
                                                            <h4 className="text-prgcolor text-[14px]">
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
                                                    <Image src={StoreImg} className="w-[100px] h-[100px]"
                                                           alt="StoreImg"/>
                                                    <div className="content_wrap">
                                                        <h4 className="text-[16px] font-[500]">
                                                            Store name
                                                        </h4>
                                                        <div className="mt-3 flex items-center gap-1">
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
                                                            <h4 className="text-prgcolor text-[14px]">
                                                                Electronics
                                                            </h4>
                                                        </div>

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
                                                            <h4 className="text-prgcolor text-[14px]">
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
                                                    <Image src={UserImg} className="w-[100px] h-[100px] rounded-full"
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
                                                            <h4 className="text-prgcolor text-[14px]">
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
                                                    <Image src={UserImg} className="w-[100px] h-[100px] rounded-full"
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
                                                            <h4 className="text-prgcolor text-[14px]">
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
                                                    <Image src={UserImg} className="w-[100px] h-[100px] rounded-full"
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
                                                            <h4 className="text-prgcolor text-[14px]">
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
                            </div>
                            <div className={`posts_content ${activeTab === 'posts' ? 'block' : 'hidden'}`}>
                                <h1>Posts</h1>
                            </div>
                            <div className={`listings_content ${activeTab === 'listings' ? 'block' : 'hidden'}`}>
                                <h1>Listings</h1>
                            </div>
                            <div className={`stores_content ${activeTab === 'stores' ? 'block' : 'hidden'}`}>
                                <h1>Stores</h1>
                            </div>
                            <div className={`users_content ${activeTab === 'users' ? 'block' : 'hidden'}`}>
                                <h1>Users</h1>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-0 right_sidebar hidden lg:block ml-7 mt-2 mr-[0px]">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

