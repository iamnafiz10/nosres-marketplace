"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import {RxCross2} from "react-icons/rx";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Skeleton from "react-loading-skeleton";

function Page() {
    const loading = useLoading();
    useTitle("Shopping cart")
    return (
        <>
            <section id="shopping-cart-section">
                {/*<div className="container pt-[50px] pb-6">*/}
                {/*    <div className="cart_content mt-4 mx-auto w-full lg:w-[750px] ">*/}
                {/*        <div className="header_wrap">*/}
                {/*            {loading ? (*/}
                {/*                <Skeleton height={20} count={1}/>*/}
                {/*            ) : (*/}
                {/*                <>*/}
                {/*                    <h4 className="text-[20px] font-semibold">*/}
                {/*                        Shopping Cart*/}
                {/*                    </h4>*/}
                {/*                </>*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*        <div className="box mt-2 bg-white py-4 border rounded">*/}
                {/*            <div className="one">*/}
                {/*                <div className="box_head px-6 pb-1">*/}
                {/*                    {loading ? (*/}
                {/*                        <Skeleton height={20} count={1}/>*/}
                {/*                    ) : (*/}
                {/*                        <>*/}
                {/*                            <h4 className="text-[14px] text-prgcolor font-[500]">*/}
                {/*                                Store name <span className="text-graycolor font-normal">2 items</span>*/}
                {/*                            </h4>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*                <hr/>*/}
                {/*                <div className="product_wrap px-6 flex items-center justify-between">*/}
                {/*                    {loading ? (*/}
                {/*                        <div className="flex items-center justify-start gap-2 w-full">*/}
                {/*                            <Skeleton width={80} height={60} borderRadius="10%" count={1}/>*/}
                {/*                            <Skeleton containerClassName="flex-1" height={50} count={1}/>*/}
                {/*                        </div>*/}
                {/*                    ) : (*/}
                {/*                        <>*/}
                {/*                            <Link href='#' className="show_product group mt-2 flex items-center gap-4">*/}
                {/*                                <div className="p-1 border rounded">*/}
                {/*                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>*/}
                {/*                                </div>*/}
                {/*                                <div className="product_content">*/}
                {/*                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple*/}
                {/*                                        iPhone XS</h4>*/}
                {/*                                    <h4 className="text-[12px] text-graycolor">*/}
                {/*                                        Delivery: <span className="text-prgcolor">Ship Only</span>*/}
                {/*                                    </h4>*/}
                {/*                                    <div className="block lg:hidden show_price text-[14px] text-black">*/}
                {/*                                        <h4>$860.00</h4>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </Link>*/}
                {/*                            <div className="hidden lg:block show_price text-[14px] text-black">*/}
                {/*                                <h4>$860.00</h4>*/}
                {/*                            </div>*/}
                {/*                            <div className="action_icon cursor-pointer">*/}
                {/*                                <RxCross2 size={15} className="hover:text-red-600"/>*/}
                {/*                            </div>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="two mt-4">*/}
                {/*                <div className="product_wrap px-6 flex items-center justify-between">*/}
                {/*                    {loading ? (*/}
                {/*                        <div className="flex items-center justify-start gap-2 w-full">*/}
                {/*                            <Skeleton width={80} height={60} borderRadius="10%" count={1}/>*/}
                {/*                            <Skeleton containerClassName="flex-1" height={50} count={1}/>*/}
                {/*                        </div>*/}
                {/*                    ) : (*/}
                {/*                        <>*/}
                {/*                            <Link href='#' className="show_product group mt-2 flex items-center gap-4">*/}
                {/*                                <div className="p-1 border rounded">*/}
                {/*                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>*/}
                {/*                                </div>*/}
                {/*                                <div className="product_content">*/}
                {/*                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">*/}
                {/*                                        T-Shirt (Red)*/}
                {/*                                    </h4>*/}
                {/*                                    <h4 className="text-[12px] text-graycolor">*/}
                {/*                                        Delivery: <span className="text-prgcolor">Ship Only</span>*/}
                {/*                                    </h4>*/}
                {/*                                    <div className="block lg:hidden show_price text-[14px] text-black">*/}
                {/*                                        <h4>$240.00</h4>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </Link>*/}

                {/*                            <div className="hidden lg:block show_price text-[14px] text-black">*/}
                {/*                                <h4>$240.00</h4>*/}
                {/*                            </div>*/}
                {/*                            <div className="action_icon cursor-pointer">*/}
                {/*                                <RxCross2 size={15} className="hover:text-red-600"/>*/}
                {/*                            </div>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="mt-3 px-6 tota_details">*/}
                {/*                <hr/>*/}
                {/*                {loading ? (*/}
                {/*                    <Skeleton height={20} count={1}/>*/}
                {/*                ) : (*/}
                {/*                    <>*/}
                {/*                        <div className="mt-2 flex items-center justify-between">*/}
                {/*                            <h4 className="text-[14px] text-prgcolor">Total:</h4>*/}
                {/*                            <h4 className="text-[14px] font-[500] text-prgcolor">$1100.00</h4>*/}
                {/*                        </div>*/}
                {/*                    </>*/}
                {/*                )}*/}
                {/*                {loading ? (*/}
                {/*                    <Skeleton height={20} count={1}/>*/}
                {/*                ) : (*/}
                {/*                    <>*/}
                {/*                        <div className="mt-3 proceed_button flex items-center justify-end">*/}
                {/*                            <button type='button'*/}
                {/*                                    className="py-2 text-[14px] px-8 bg-primary border rounded hover:bg-transparent hover:border-primary hover:text-primary text-white transition">*/}
                {/*                                Proceed to Checkout*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                    </>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="box mt-4 bg-white py-4 border rounded">*/}
                {/*            <div className="one">*/}
                {/*                <div className="box_head px-6 pb-1">*/}
                {/*                    {loading ? (*/}
                {/*                        <Skeleton height={20} count={1}/>*/}
                {/*                    ) : (*/}
                {/*                        <>*/}
                {/*                            <h4 className="text-[14px] text-prgcolor font-[500]">*/}
                {/*                                Store name <span className="text-graycolor font-normal">2 items</span>*/}
                {/*                            </h4>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*                <hr/>*/}
                {/*                <div className="product_wrap px-6 flex items-center justify-between">*/}
                {/*                    {loading ? (*/}
                {/*                        <div className="flex items-center justify-start gap-2 w-full">*/}
                {/*                            <Skeleton width={80} height={60} borderRadius="10%" count={1}/>*/}
                {/*                            <Skeleton containerClassName="flex-1" height={50} count={1}/>*/}
                {/*                        </div>*/}
                {/*                    ) : (*/}
                {/*                        <>*/}
                {/*                            <Link href='#' className="show_product group mt-2 flex items-center gap-4">*/}
                {/*                                <div className="p-1 border rounded">*/}
                {/*                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>*/}
                {/*                                </div>*/}
                {/*                                <div className="product_content">*/}
                {/*                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple*/}
                {/*                                        iPhone XS</h4>*/}
                {/*                                    <h4 className="text-[12px] text-graycolor">*/}
                {/*                                        Delivery: <span className="text-prgcolor">Ship Only</span>*/}
                {/*                                    </h4>*/}
                {/*                                    <div className="block lg:hidden show_price text-[14px] text-black">*/}
                {/*                                        <h4>$160.00</h4>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </Link>*/}
                {/*                            <div className="hidden lg:block show_price text-[14px] text-black">*/}
                {/*                                <h4>$160.00</h4>*/}
                {/*                            </div>*/}
                {/*                            <div className="action_icon cursor-pointer">*/}
                {/*                                <RxCross2 size={15} className="hover:text-red-600"/>*/}
                {/*                            </div>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="mt-3 px-6 tota_details">*/}
                {/*                <hr/>*/}
                {/*                {loading ? (*/}
                {/*                    <Skeleton height={20} count={1}/>*/}
                {/*                ) : (*/}
                {/*                    <>*/}
                {/*                        <div className="mt-2 flex items-center justify-between">*/}
                {/*                            <h4 className="text-[14px] text-prgcolor">Total:</h4>*/}
                {/*                            <h4 className="text-[14px] font-[500] text-prgcolor">$160.00</h4>*/}
                {/*                        </div>*/}
                {/*                    </>*/}
                {/*                )}*/}
                {/*                {loading ? (*/}
                {/*                    <Skeleton height={20} count={1}/>*/}
                {/*                ) : (*/}
                {/*                    <>*/}
                {/*                        <div className="mt-3 proceed_button flex items-center justify-end">*/}
                {/*                            <button type='button'*/}
                {/*                                    className="py-2 text-[14px] px-8 bg-primary border rounded hover:bg-transparent hover:border-primary hover:text-primary text-white transition">*/}
                {/*                                Proceed to Checkout*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                    </>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        {loading ? (*/}
                {/*            <div className="mt-3">*/}
                {/*                <Skeleton height={20} count={1}/>*/}
                {/*            </div>*/}
                {/*        ) : (*/}
                {/*            <>*/}
                {/*                <div className="mt-3 proceed_button flex items-center justify-start">*/}
                {/*                    <button type='button'*/}
                {/*                            className="py-2 flex items-center gap-1 text-[14px] px-8 bg-transparent border border-primary rounded hover:bg-primary hover:border-primary hover:text-white text-primary transition">*/}
                {/*                        <MdOutlineKeyboardArrowLeft size={18}/>*/}
                {/*                        Continue Shopping*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>
    );
}

export default Page;