"use client";
import React from 'react';
import "@/app/multiRangeSlider/multiRangeSlider.css";
import Image from "next/image";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import {Carousel} from "flowbite-react";
import SliderOneImg from "../../../../public/assets/images/slider1.jpg";
import SliderTwoImg from "../../../../public/assets/images/slider2.jpg";
import SliderThreeImg from "../../../../public/assets/images/slider3.jpg";
import {IoCartOutline} from "react-icons/io5";
import {HiUserCircle} from "react-icons/hi";
import {TiStarFullOutline} from "react-icons/ti";

function Page() {
    const loading = useLoading();
    useTitle("Single product")
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
                                                        Home
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
                                {loading ? (
                                    <Skeleton height={400} count={1}/>
                                ) : (
                                    <>
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
                                    </>
                                )}
                            </div>
                            <div className="col">
                                <div className="mt-14 product_content">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={10} count={3}/>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={10} count={3}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h1 className="text-[20px] font-semibold text-prgcolor">
                                                Playstation X - Best Gaming<br/>
                                                Experience
                                                (Black)
                                            </h1>
                                            <div className="star_wrap mt-1 flex items-center gap-1">
                                                <TiStarFullOutline className="w-5 h-5 text-graycolor"/>
                                                <TiStarFullOutline className="w-5 h-5 text-graycolor"/>
                                                <TiStarFullOutline className="w-5 h-5 text-graycolor"/>
                                                <TiStarFullOutline className="w-5 h-5 text-graycolor"/>
                                                <TiStarFullOutline className="w-5 h-5 text-graycolor"/>
                                                <h4 className="text-[14px] text-prgcolor">
                                                    5
                                                </h4>
                                            </div>
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
                                                    Store Located: <span
                                                    className="text-prgcolor">California, USA</span>
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
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="description mt-6">
                            {loading ? (
                                <Skeleton height={10} count={1}/>
                            ) : (
                                <>
                                    <h4 className="text-[16px] font-[500] text-prgcolor pb-2">
                                        Description
                                    </h4>
                                    <hr/>
                                </>
                            )}
                            {loading ? (
                                <Skeleton height={20} count={2}/>
                            ) : (
                                <>
                                    <h4 className="mt-4 text-[14px] text-graycolor">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae
                                        consequatur
                                        culpa ea eius itaque maxime minus odio omnis,
                                        <br/>
                                        perferendis perspiciatis porro praesentium
                                        quo recusandae, sequi temporibus ullam! Delectus
                                        <br/>
                                        <br/>
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem
                                        Ipsum passages, and more recently with desktop<br/> publishing software like
                                        Aldus.
                                    </h4>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default Page;