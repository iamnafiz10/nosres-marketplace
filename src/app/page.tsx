'use client';
import React from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import {HiUserCircle} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import ProductImg from '@/../public/assets/images/product-1.png';
import PostImg from '@/../public/assets/images/post-image.jpg';
import {GoComment, GoHeart, GoSync} from "react-icons/go";

export default function Home() {
    const loading = useLoading();
    useTitle("Home")
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="home-page-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-3"></div>
                        <div className="col lg:col-span-5">
                            {loading ? (
                                <Skeleton height={60} count={1}/>
                            ) : (
                                <>
                                    <div className="write_post box py-2 px-4 bg-white rounded">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-2 border-transparent focus:border-transparent focus:ring focus:ring-transparent text-[#ABABAB] text-[14px] focus:outline-none"
                                                    type="text"
                                                    placeholder="What’s new, John?"
                                                />
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="icon cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
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
                                                <div className="icon cursor-pointer">
                                                    <svg
                                                        className="w-5 h-5 hover:fill-primary transition"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         fill="#828D9E">
                                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0
                                                        1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0
                                                        18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Post Box */}
                            <div className="post_box_wrap">
                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    Sony Inc.
                                                </h4>
                                                <span
                                                    className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="icon cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>

                                            <div
                                                className="icon cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mt-3 text-[12px] text-graycolor">
                                        The SRS-XB100 speaker provides powerful, clear,
                                        expansive sound in a small, portable and durable
                                        body. Despite its size...
                                    </h4>
                                </div>
                                <div className="post_image mt-0">
                                    <Image src={PostImg} className="w-full h-56" alt="PostImg"/>

                                    <div
                                        className="flex items-center justify-between bg-gray-200 bg-opacity-50 px-4 py-2 mt-0">
                                        <h4 className="text-[14px] text-prgcolor font-[500]">Sony SRS-XB13B</h4>
                                        <button type="button"
                                                className="py-2 px-4 rounded border text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                                {/* Post Icons */}
                                <div className="post_icons mt-0">
                                    <div
                                        className="flex items-center justify-between bg-white border-t-2 px-4 py-3 mt-0">
                                        <div className="flex items-center gap-1">
                                            <div className="icon cursor-pointer">
                                                <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-red-600"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">112</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="icon cursor-pointer">
                                                <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">852</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="icon cursor-pointer">
                                                <GoSync className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">2k</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col lg:col-span-4 right_sidebar hidden lg:block ml-7 mr-[10px]">
                            <div className="box bg-white px-4 py-4 rounded">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75
                                        0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896
                                        6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1
                                        .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7
                                        8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                                        </svg>
                                        <h4 className="text-[14px] font-semibold text-prgcolor">
                                            Recently Viewed Items
                                        </h4>
                                    </div>

                                    <div className="icon cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                        <svg
                                            className="w-3 h-3"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* Product Area */}
                                <div className="product_wrap space-y-3">
                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                iPhone XS</h4>
                                            <h4 className="text-[14px] text-graycolor">$860.00</h4>
                                        </div>
                                    </Link>

                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">T-Shirt</h4>
                                            <h4 className="text-[14px] text-graycolor">$450.00</h4>
                                        </div>
                                    </Link>

                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">Polo
                                                Shirt</h4>
                                            <h4 className="text-[14px] text-graycolor">$320.00</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="box mt-4 bg-white px-4 py-4 rounded">
                                <div className="flex gap-2 items-center">
                                    <svg
                                        className="w-[19px] h-[19px] transition duration-75 group-hover:fill-primary"
                                        fill="#6B7280"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="m8.878.392 5.25 3.045c.54.314.872.89.872
                                                        1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756
                                                        0l-5.25-3.045A1.75 1.75 0 0 1 1
                                                        11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756
                                                        0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25
                                                        0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271
                                                        4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                                    </svg>
                                    <h4 className="relative text-[14px] font-semibold">
                                        Sell on Nosres
                                        <span
                                            className="absolute -right-8 -top-1 text-[12px] font-normal text-primary">BETA</span>
                                    </h4>
                                </div>
                                <h4 className="text-graycolor mt-3 text-[12px]">
                                    Promote your products by sharing them on
                                    your page, receive orders, receive notification, discuss with customers.
                                </h4>
                                <button type="button"
                                        className="mt-3 py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                    Learn More
                                </button>
                            </div>

                            {/* Post Box */}
                            <div className="box mt-4 bg-white px-4 py-4 rounded">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={25} className="text-[#6B7280]"/>
                                        <div className="leading-[17px]">
                                            <h4 className="text-[14px] font-semibold text-prgcolor">
                                                Sony Inc.
                                            </h4>
                                            <span className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                        </div>
                                    </div>


                                    <div className="icon cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                        <svg
                                            className="w-3 h-3"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="mt-3 text-[12px] text-graycolor">
                                    The SRS-XB100 speaker provides powerful, clear,
                                    expansive sound in a small, portable and durable
                                    body. Despite its size...
                                </h4>
                                <div className="post-image mt-3">
                                    <Image src={PostImg} className="w-full h-36" alt="PostImg"/>

                                    <div className="flex items-center justify-between mt-3">
                                        <h4 className="text-[14px] text-prgcolor font-[500]">Sony SRS-XB13B</h4>
                                        <button type="button"
                                                className="py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sticky top-16">
                                <footer>
                                    <ul className="flex items-center gap-2 text-gray-500 text-[12px]">
                                        <li className="hover:text-primary">
                                            <Link href='#'>About Nosres</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Privacy</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Terms</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Careers</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Support</Link>
                                        </li>
                                    </ul>
                                    <h4 className="mt-[8px] text-graycolor text-[12px]">© {currentYear} Nosres
                                        Inc. All
                                        rights
                                        reserved.</h4>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
