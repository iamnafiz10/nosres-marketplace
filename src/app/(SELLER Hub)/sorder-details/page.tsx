"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

function Page() {
    useTitle("Order-details")
    const loading = useLoading();

    // Checkbox
    const [checked, setChecked] = useState(false);
    const handleBoxClick = () => {
        setChecked(!checked);
    };
    const [checkedTwo, setCheckedTwo] = useState(false);
    const handleBoxClickTwo = () => {
        setCheckedTwo(!checkedTwo);
    };

    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };


    //  Return popup
    const [openStartReturnModal, setOpenStartReturnModal] = useState<boolean>(false);
    const [isOptionsVisibleAccDtv, setIsOptionsVisibleAccDtv] = useState<boolean>(false);
    const [selectedOptionAccDtv, setSelectedOptionAccDtv] = useState<string>('');
    const selectBoxRefAccDtv = useRef<HTMLDivElement>(null);
    const handleOptionClickAccDtv = (option: string) => {
        setSelectedOptionAccDtv(option);
        toggleOptionsVisibilityAccDtv();
    };
    const toggleOptionsVisibilityAccDtv = () => {
        setIsOptionsVisibleAccDtv(!isOptionsVisibleAccDtv);
    };
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectBoxRefAccDtv.current && !selectBoxRefAccDtv.current.contains(event.target as Node)) {
                setIsOptionsVisibleAccDtv(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    //  ReturnConfirm popup
    const [openStartReturnConfirmModal, setOpenStartReturnConfirmModal] = useState<boolean>(false);
    const [openStartReturnConfirmDoneModal, setOpenStartReturnConfirmDoneModal] = useState<boolean>(false);
    const handleReturnConfirmDoneClick = () => {
        setOpenStartReturnModal(false);
        setOpenStartReturnConfirmDoneModal(false);
        setOpenStartReturnConfirmModal(false);
    };

    //  ProductReview popup
    const [openStartProductReviewModal, setOpenStartProductReviewModal] = useState<boolean>(false);
    // SubmitReview Popup
    const [openSubmitReviewModal, setOpenSubmitReviewModal] = useState<boolean>(false);
    const [openSubmitReviewTwoModal, setOpenSubmitReviewTwoModal] = useState<boolean>(false);
    const handleClickReviewTwoCancel = () => {
        setOpenSubmitReviewModal(false);
        setOpenSubmitReviewTwoModal(false);
        setOpenStartProductReviewModal(false);
    }

    // --------------- Start Multiple Rating ----------------//
    const [ratingOne, setRatingOne] = useState(0);
    const oneExample = {
        size: 25,
        count: 5,
        value: ratingOne,
        isHalf: true,
        color: "#DCDDDE",
        activeColor: "#4D7FB8",
        // @ts-ignore
        onChange: newValue => {
            if (newValue === ratingOne && newValue === 1) {
                setRatingOne(0);
            } else {
                setRatingOne(newValue);
            }
        }
    };
    // --------------- End Multiple Rating ----------------//

    //  CancelOrder popup
    const [openStartCancelOrderModal, setOpenStartCancelOrderModal] = useState<boolean>(false);
    const [isOptionsVisibleAccDtvCancelOrder, setIsOptionsVisibleAccDtvCancelOrder] = useState<boolean>(false);
    const [selectedOptionAccDtvCancelOrder, setSelectedOptionAccDtvCancelOrder] = useState<string>('');
    const selectBoxRefAccDtvCancelOrder = useRef<HTMLDivElement>(null);
    const handleOptionClickAccDtvCancelOrder = (option: string) => {
        setSelectedOptionAccDtvCancelOrder(option);
        toggleOptionsVisibilityAccDtvCancelOrder();
    };
    const toggleOptionsVisibilityAccDtvCancelOrder = () => {
        setIsOptionsVisibleAccDtvCancelOrder(!isOptionsVisibleAccDtvCancelOrder);
    };
    useEffect(() => {
        const handleOutsideClickCancelOrder = (event: MouseEvent) => {
            if (selectBoxRefAccDtvCancelOrder.current && !selectBoxRefAccDtvCancelOrder.current.contains(event.target as Node)) {
                setIsOptionsVisibleAccDtvCancelOrder(false);
            }
        };

        document.addEventListener('click', handleOutsideClickCancelOrder);

        return () => {
            document.removeEventListener('click', handleOutsideClickCancelOrder);
        };
    }, []);

    //  CancelOrder popup
    const [openStartCancelOrderConfirmModal, setOpenStartCancelOrderConfirmModal] = useState<boolean>(false);
    const [openStartCancelOrderConfirmDoneModal, setOpenStartCancelOrderConfirmDoneModal] = useState<boolean>(false);
    const handleCancelOrderConfirmDoneClick = () => {
        setOpenStartCancelOrderModal(false);
        setOpenStartCancelOrderConfirmDoneModal(false);
        setOpenStartCancelOrderConfirmModal(false);
    };

    //  SubmitReviewCrm popup
    const [openSubmitReviewModalCrm, setOpenSubmitReviewModalCrm] = useState<boolean>(false);
    const handleClickSubmitReviewModalCrm = () => {
        setOpenSubmitReviewModalCrm(false);
        setOpenSubmitReviewModal(false);
        setOpenStartProductReviewModal(false);
        setOpenSubmitReviewTwoModal(false);
    };
    return (
        <>
            <section id="sorder-details-section">
                <div className="w-full pt-[50px] pb-20">
                    <div className="ml-0 lg:ml-[295px]">
                        <div className="mx-5">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="col lg:col-span-8">
                                    {/* Breadcrumb */}
                                    <div className="breadcrumb_wrap">
                                        {loading ? (
                                            <div className="mb-3">
                                                <Skeleton height={20} width={340} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <nav className="mt-4 mb-3 flex justify-between" aria-label="Breadcrumb">
                                                    <ol className="inline-flex items-center text-[14px] mb-3 sm:mb-0">
                                                        <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                                            Order
                                                        </li>
                                                        <span className="mx-2 text-gray-400">/</span>
                                                        <li className="text-prgcolor">
                                                            Order Details
                                                        </li>
                                                    </ol>
                                                </nav>
                                            </>
                                        )}
                                    </div>

                                    {/* Head wrap */}
                                    <div className="header_wrap">
                                        {loading ? (
                                            <Skeleton height={20} count={1}/>
                                        ) : (
                                            <>
                                                <h4 className="text-[20px] font-normal">
                                                    Order Details
                                                </h4>
                                            </>
                                        )}
                                    </div>

                                    <div className="wrapper">
                                        {loading ? (
                                            <div>
                                                <div className="mt-4 pb-2">
                                                    <Skeleton height={30} count={1}/>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div
                                                    className="mt-4 pb-2 order_details_box border-b-2 py-4 px-6 bg-white rounded rounded-b-none">
                                                    <h4 className="text-[14px] w-[200px] text-graycolor">
                                                        Order Details
                                                    </h4>
                                                </div>
                                            </>
                                        )}
                                        <div className="bg-white py-4 px-6 rounded rounded-t-none space-y-4">
                                            {loading ? (
                                                <Skeleton height={20} count={6}/>
                                            ) : (
                                                <>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Status:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <button type='button'
                                                                    className="text-[12px] cursor-auto py-1 px-4 bg-green-200 rounded text-green-500">
                                                                Completed
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Order
                                                                Placed:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                02 May 2024
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Order
                                                                Number:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                #001285
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Total:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                $1541.00
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Buyer:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                Jon doe
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 lg:flex lg:items-center">
                                                        <div className="col">
                                                            <button type='button'
                                                                    className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                                Refund
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button type='button'
                                                                    className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                                Contact Buyer
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/*Pending*/}
                                    <div className="wrapper">
                                        {loading ? (
                                            <div>
                                                <div className="mt-4 pb-2">
                                                    <Skeleton height={30} count={1}/>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div
                                                    className="mt-4 pb-2 order_details_box border-b-2 py-4 px-6 bg-white rounded rounded-b-none">
                                                    <h4 className="text-[14px] w-[200px] text-graycolor">
                                                        Order Details
                                                    </h4>
                                                </div>
                                            </>
                                        )}
                                        <div className="bg-white py-4 px-6 rounded rounded-t-none space-y-4">
                                            {loading ? (
                                                <Skeleton height={20} count={6}/>
                                            ) : (
                                                <>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Status:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <button type='button'
                                                                    className="text-[12px] cursor-auto py-1 px-4 bg-yellow-100 rounded text-yellow-400">
                                                                Pending
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Order
                                                                Placed:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                02 May 2024
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Order
                                                                Number:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                #001285
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Total:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                $1541.00
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Buyer:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                Jon doe
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 lg:flex lg:items-center">
                                                        <div className="col">
                                                            <button onClick={() => setOpenStartCancelOrderModal(true)}
                                                                    type='button'
                                                                    className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                                Cancel Order
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button type='button'
                                                                    className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                                Contact Buyer
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="wrapper mt-4">
                                        {loading ? (
                                            <div>
                                                <div className="mt-4 pb-2">
                                                    <Skeleton height={30} count={1}/>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div
                                                    className="mt-4 pb-2 order_details_box border-b-2 py-4 px-6 bg-white rounded rounded-b-none">
                                                    <h4 className="text-[14px] w-[200px] text-graycolor">
                                                        Shipping Information
                                                    </h4>
                                                </div>
                                                <hr/>
                                            </>
                                        )}
                                        <div className="bg-white py-4 px-6 rounded rounded-t-none space-y-4">
                                            {loading ? (
                                                <Skeleton height={20} count={6}/>
                                            ) : (
                                                <>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Address line
                                                                1:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                United States
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>City:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                United
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Zip:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                48541
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>State:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                United
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-0">
                                                        <div className="col">
                                                            <h4 className='text-graycolor text-[14px]'>Shipping Carrier
                                                                &
                                                                Rate:</h4>
                                                        </div>
                                                        <div className="col">
                                                            <h4 className="text-[12px] text-prgcolor">
                                                                UPS Ground $11.25
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col lg:col-span-4 right_sidebar hidden lg:block ml-7 mr-[0px]">
                                    <div className="sticky top-[58px]">
                                        {loading ? (
                                            <div className="mt-0 lg:mt-[70px] py-1">
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <div
                                                    className="mt-0 lg:mt-[85px] box border-b-2 bg-white py-1 px-4 rounded rounded-b-none">
                                                    {/* Head wrap */}
                                                    <div className="head_wrap">
                                                        <div className="bg-white py-2 px-2">
                                                            <h4 className="text-[14px] text-graycolor">
                                                                Items in This Package
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {/* Product Area */}
                                        <div className="product_wrap bg-white px-6 py-2 space-y-3">
                                            {loading ? (
                                                <div className="flex items-center justify-start gap-2 w-full">
                                                    <Skeleton width={80} height={60} borderRadius="10%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <Link href='#'
                                                          className="show_product group mt-2 flex items-start gap-4">
                                                        <div className="p-1 border rounded">
                                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
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
                                                <div className="flex items-center justify-start gap-2 w-full">
                                                    <Skeleton width={80} height={60} borderRadius="10%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <Link href='#'
                                                          className="show_product group mt-2 flex items-start gap-4">
                                                        <div className="p-1 border rounded">
                                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                                        </div>
                                                        <div className="product_content">
                                                            <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                                iPhone XS</h4>
                                                            <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                                        </div>
                                                    </Link>
                                                </>
                                            )}
                                        </div>
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