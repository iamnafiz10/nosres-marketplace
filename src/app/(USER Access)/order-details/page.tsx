"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import {Modal} from "flowbite-react";
import {Checkbox, Radio} from "antd";
import type {RadioChangeEvent} from 'antd';
import {IoAlertCircle} from "react-icons/io5";
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

    return (
        <>
            <section id="order-details-section">
                <div className="container py-16">
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
                                        <nav className="mt-2 mb-3 flex justify-between" aria-label="Breadcrumb">
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
                                                    <h4 className='text-graycolor text-[14px]'>Order Placed:</h4>
                                                </div>
                                                <div className="col">
                                                    <h4 className="text-[12px] text-prgcolor">
                                                        02 May 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-0">
                                                <div className="col">
                                                    <h4 className='text-graycolor text-[14px]'>Order Number:</h4>
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
                                                    <button onClick={() => setOpenStartReturnModal(true)} type='button'
                                                            className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                        Return or Replace Item(s)
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button onClick={() => setOpenStartProductReviewModal(true)}
                                                            type='button'
                                                            className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                        Write a Product Review
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button onClick={() => setOpenSubmitReviewTwoModal(true)}
                                                            type='button'
                                                            className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                        Write a Store Review
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button type='button'
                                                            className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                        Contact Seller
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
                                                    <h4 className='text-graycolor text-[14px]'>Order Placed:</h4>
                                                </div>
                                                <div className="col">
                                                    <h4 className="text-[12px] text-prgcolor">
                                                        02 May 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-0">
                                                <div className="col">
                                                    <h4 className='text-graycolor text-[14px]'>Order Number:</h4>
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
                                                        Contact Seller
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
                                                    <h4 className='text-graycolor text-[14px]'>Address line 1:</h4>
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
                                                    <h4 className='text-graycolor text-[14px]'>Shipping Carrier &
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

                {/* Start Return Pop-Up Start */}
                <Modal size="lg"
                       show={openStartReturnModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Return or Replace Item(s)</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please select the item(s) you would like to return.
                            </h4>
                            <div className="mt-4 space-y-3">
                                <div onClick={handleBoxClick} className="box cursor-pointer py-2 px-4 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <Link href='#'
                                                  className="show_product group flex items-start gap-4">
                                                <div className="p-1 border rounded">
                                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                                </div>
                                                <div className="product_content">
                                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                        iPhone XS</h4>
                                                    <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="check_box">
                                            <Checkbox
                                                checked={checked}
                                                onChange={() => setChecked(!checked)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div onClick={handleBoxClickTwo}
                                     className="box cursor-pointer py-2 px-4 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <Link href='#'
                                                  className="show_product group flex items-start gap-4">
                                                <div className="p-1 border rounded">
                                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                                </div>
                                                <div className="product_content">
                                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                        iPhone XS</h4>
                                                    <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="check_box">
                                            <Checkbox
                                                checked={checkedTwo}
                                                onChange={() => setCheckedTwo(!checkedTwo)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-[14px] font-normal mt-6">
                                Please specify the reason for returning this item.
                            </h4>
                            <div className="select-box relative mt-2" ref={selectBoxRefAccDtv}>
                                <div className="select-option flex"
                                     onClick={toggleOptionsVisibilityAccDtv}>
                                    <input type="text" placeholder="Select a reason"
                                           readOnly
                                           value={selectedOptionAccDtv}
                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                </div>
                                {isOptionsVisibleAccDtv && (
                                    <div className="info-content w-full gender_content">
                                        <ul className="options">
                                            <li onClick={() => handleOptionClickAccDtv("Wrong size/color")}>
                                                Wrong size/color
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Defective item")}>
                                                Defective item
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Item damaged")}>
                                                Item damaged
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Not as described")}>
                                                Not as described
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Better price found")}>
                                                Better price found
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Poor quality")}>
                                                Poor quality
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Received late")}>
                                                Received late
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Duplicate order")}>
                                                Duplicate order
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Missing parts")}>
                                                Missing parts
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Wrong item received")}>
                                                Wrong item received
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Packaging damaged")}>
                                                Packaging damaged
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Didn’t meet expectations")}>
                                                Didn’t meet expectations
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Changed my mind")}>
                                                Changed my mind
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {selectedOptionAccDtv && (
                                <div className="others-input py-2 mt-3">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Please provide more details about your reason (required).
                                    </h4>
                                    <textarea cols={30} rows={3}
                                              className="mt-1 rounded leading-[20px] w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                              placeholder="Please explain the issue with the item. Please do not include personal information."
                                    >
                                    </textarea>
                                    <h4 className="text-[12px] text-graycolor mt-0">
                                        You have 250 characters left.
                                    </h4>
                                </div>
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartReturnModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartReturnConfirmModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Continue
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Return Pop-Up End */}

                {/* Start ReturnConfirm Pop-Up Start */}
                <Modal size="lg"
                       show={openStartReturnConfirmModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 10%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnConfirmModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Return or Replace Item (s)</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please tell us what can we do to resolve this issue.
                            </h4>

                            <div className="mt-4">
                                <div onClick={() => onChange(11)}
                                     className="box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <svg
                                                className="w-4 h-4 mt-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="#828D9E"
                                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                            >
                                                <path d="m17 2 4 4-4 4"/>
                                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"/>
                                                <path d="m7 22-4-4 4-4"/>
                                                <path d="M21 13v1a4 4 0 0 1-4 4H3"/>
                                            </svg>

                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Replace the item (s)
                                                </h4>
                                                <h4 className="mt-1 text-[12px] text-graycolor leading-[17px]">
                                                    Please send the original item (s) back within 15 days.
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={11}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(21)}
                                     className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <svg
                                                className="w-4 h-4 mt-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="#828D9E"
                                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"/>
                                                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                                                <path d="M12 18V6"/>
                                            </svg>

                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Refund to your visa ending in 1234
                                                </h4>
                                                <h4 className="mt-1 text-[12px] text-graycolor leading-[17px]">
                                                    Please send the original item(s) back within 15 days. We will<br/>
                                                    process your refund once we receive the original item(s).
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={21}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartReturnConfirmModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenStartReturnConfirmDoneModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Confirm
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/*  ReturnConfirm Pop-Up End */}

                {/* Start ReturnConfirmDone Pop-Up Start */}
                <Modal size="lg"
                       show={openStartReturnConfirmDoneModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnConfirmDoneModal(false)}>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="icon">
                                    <svg
                                        className="w-[50px] h-[50px] text-primary"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                                        <path d="M12 18V6"/>
                                    </svg>
                                </div>
                                <h4 className="text-prgcolor text-[14px] mt-1">
                                    Your Refund: <b>$199.00</b>
                                </h4>
                                <h4 className="text-graycolor text-[14px] mt-3">
                                    Your refund will be issued to your original payment
                                    method within 15 business days after we
                                    receive your return.
                                </h4>
                                <button onClick={handleReturnConfirmDoneClick}
                                        className="mt-6 px-10 w-full text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/*  ReturnConfirmDone Pop-Up End */}


                {/* Start ProductReview Pop-Up Start */}
                <Modal size="lg"
                       show={openStartProductReviewModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartProductReviewModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Writing a Product Review</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please select the product for which you would like to write a review.
                            </h4>
                            <div className="mt-4">
                                <div onClick={() => onChange(15)}
                                     className="box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <Link href='#'
                                              className="show_product group flex items-start gap-4">
                                            <div className="p-1 border rounded">
                                                <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                            </div>
                                            <div className="product_content">
                                                <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                    iPhone XS</h4>
                                                <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                            </div>
                                        </Link>
                                        <div className="radio_box">
                                            <Radio value={15}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(25)}
                                     className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <Link href='#'
                                              className="show_product group flex items-start gap-4">
                                            <div className="p-1 border rounded">
                                                <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                            </div>
                                            <div className="product_content">
                                                <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                    iPhone XS</h4>
                                                <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                            </div>
                                        </Link>
                                        <div className="radio_box">
                                            <Radio value={25}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartProductReviewModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenSubmitReviewModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Continue
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* ProductReview Pop-Up End */}

                {/* Start SubmitReview Pop-Up Start */}
                <Modal size="lg"
                       show={openSubmitReviewModal}
                       style={{
                           padding: '0px',
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenSubmitReviewModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Submit a Product Review</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="top_box py-2 px-4 rounded bg-blue-50">
                                <div className="flex items-center gap-2">
                                    <div className="icon">
                                        <IoAlertCircle size={18} className="text-primary"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="text-prgcolor text-[14px] font-[500]">
                                            Product Review
                                        </h4>
                                        <h4 className="text-primary text-[12px] font-normal">
                                            This is a product review. Please share your opinions and
                                            experiences regarding the product.
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-[14px] font-[500] mt-4 text-prgcolor">
                                Private Review
                            </h4>
                            <h4 className="text-[12px] text-graycolor pb-2">
                                This review will remain anonymous and will not be directly shared with<br/>
                                the seller.
                            </h4>
                            <hr/>
                            <h4 className="text-prgcolor text-[14px] mt-2">
                                How likely are you to recommend this product to a friend, family member,
                                or colleague?
                            </h4>
                            <div className="rate_radio_box">
                                <div className="mt-4 flex items-center justify-between">
                                    <h4 className="text-[12px] text-graycolor">Not at all likely</h4>
                                    <h4 className="text-[12px] text-graycolor">Extremely likely</h4>
                                </div>
                                <div className="mt-2 radio_button">
                                    <Radio.Group onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                                 value={value}
                                                 className="flex items-center justify-between">
                                        <div onClick={() => onChange(0)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={0} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">0</h4>
                                        </div>
                                        <div onClick={() => onChange(1)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={1} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">1</h4>
                                        </div>
                                        <div onClick={() => onChange(2)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={2} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">2</h4>
                                        </div>
                                        <div onClick={() => onChange(3)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={3} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">3</h4>
                                        </div>
                                        <div onClick={() => onChange(4)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={4} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">4</h4>
                                        </div>
                                        <div onClick={() => onChange(5)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={5} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">5</h4>
                                        </div>
                                        <div onClick={() => onChange(6)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={6} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">6</h4>
                                        </div>
                                        <div onClick={() => onChange(7)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={7} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">7</h4>
                                        </div>
                                        <div onClick={() => onChange(8)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={8} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">8</h4>
                                        </div>
                                        <div onClick={() => onChange(9)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={9} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">9</h4>
                                        </div>
                                        <div onClick={() => onChange(10)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={10} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">10</h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div className="input_box mt-6">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Please tell us more. How could things have been improved? (optional)
                                    </h4>
                                    <textarea
                                        rows={3}
                                        className="rounded leading-[20px] mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        placeholder="Please provide further details. Your review plays a crucial role in creating a safer and more trustworthy community for everyone.">
                                    </textarea>
                                    <span className="text-[12px] text-graycolor">
                                        You have 5,000 characters left.
                                    </span>
                                </div>

                                <div className="public_review mt-4">
                                    <h4 className="text-[14px] font-[500]">
                                        Public Review
                                    </h4>
                                    <h4 className="text-graycolor text-[12px] pb-2">
                                        This review will be displayed on the product listing for others to see.
                                    </h4>
                                    <hr/>
                                </div>

                                <div className="star_riview_box mt-4">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Tap a star to rate the features below.
                                    </h4>
                                    <div className="all_rating_wrap mt-1 -space-y-2">
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Quality</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Description accuracy</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Value</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Pricing</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Shipping</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Packaging quality</h4>
                                        </div>
                                    </div>
                                    <h4 className="text-[14px] font-[500] mt-2 text-prgcolor">
                                        Total Score: 5
                                    </h4>
                                </div>

                                <div className="input_box mt-4">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Write your review
                                    </h4>
                                    <textarea
                                        rows={3}
                                        className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        placeholder="Please share your product experience to the Marketplace community.">
                                    </textarea>
                                    <span className="text-[12px] text-graycolor">
                                        You have 5,000 characters left.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenSubmitReviewModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={handleClickReviewTwoCancel}
                                    className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Submit Review
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* SubmitReview Pop-Up End */}
                {/* Start SubmitReviewTwo Pop-Up Start */}
                <Modal size="lg"
                       show={openSubmitReviewTwoModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 20%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenSubmitReviewTwoModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Submit a Store Review</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="top_box py-2 px-4 rounded bg-blue-50">
                                <div className="flex items-center gap-2">
                                    <div className="icon">
                                        <IoAlertCircle size={18} className="text-primary"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="text-prgcolor text-[14px] font-[500]">
                                            Store Review
                                        </h4>
                                        <h4 className="text-primary text-[12px] font-normal">
                                            This is a store review. Please share your opinions and
                                            experiences regarding the store.
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-[14px] font-[500] mt-4 text-prgcolor">
                                Private Review
                            </h4>
                            <h4 className="text-[12px] text-graycolor pb-2">
                                This review will remain anonymous and will not be directly shared with<br/>
                                the seller.
                            </h4>
                            <hr/>
                            <h4 className="text-prgcolor text-[14px] mt-2">
                                How likely are you to recommend this product to a friend, family member,
                                or colleague?
                            </h4>
                            <div className="rate_radio_box">
                                <div className="mt-4 flex items-center justify-between">
                                    <h4 className="text-[12px] text-graycolor">Not at all likely</h4>
                                    <h4 className="text-[12px] text-graycolor">Extremely likely</h4>
                                </div>
                                <div className="mt-2 radio_button">
                                    <Radio.Group onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                                 value={value}
                                                 className="flex items-center justify-between">
                                        <div onClick={() => onChange(0)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={0} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">0</h4>
                                        </div>
                                        <div onClick={() => onChange(1)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={1} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">1</h4>
                                        </div>
                                        <div onClick={() => onChange(2)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={2} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">2</h4>
                                        </div>
                                        <div onClick={() => onChange(3)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={3} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">3</h4>
                                        </div>
                                        <div onClick={() => onChange(4)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={4} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">4</h4>
                                        </div>
                                        <div onClick={() => onChange(5)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={5} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">5</h4>
                                        </div>
                                        <div onClick={() => onChange(6)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={6} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">6</h4>
                                        </div>
                                        <div onClick={() => onChange(7)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={7} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">7</h4>
                                        </div>
                                        <div onClick={() => onChange(8)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={8} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">8</h4>
                                        </div>
                                        <div onClick={() => onChange(9)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={9} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">9</h4>
                                        </div>
                                        <div onClick={() => onChange(10)}
                                             className="flex flex-col items-center justify-center text-center">
                                            <Radio value={10} className="mr-0"></Radio>
                                            <h4 className="text-[12px] text-prgcolor">10</h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div className="input_box mt-6">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Please tell us more. How could things have been improved? (optional)
                                    </h4>
                                    <textarea
                                        rows={3}
                                        className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        placeholder="Please provide further details. Your review plays a crucial role in creating a safer and more trustworthy community for everyone.">
                                    </textarea>
                                    <span className="text-[12px] text-graycolor">
                                        You have 5,000 characters left.
                                    </span>
                                </div>

                                <div className="public_review mt-4">
                                    <h4 className="text-[14px] font-[500]">
                                        Public Review
                                    </h4>
                                    <h4 className="text-graycolor text-[12px] pb-2">
                                        This review will be displayed on the product listing for others to see.
                                    </h4>
                                    <hr/>
                                </div>

                                <div className="star_riview_box mt-4">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Tap a star to rate the features below.
                                    </h4>
                                    <div className="all_rating_wrap mt-1 -space-y-2">
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Responsiveness</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Helpfulness</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Friendliness</h4>
                                        </div>
                                        <div className="star_icon flex items-center gap-3">
                                            <ReactStars {...oneExample} />
                                            <h4 className="text-graycolor text-[12px]">Return and Refund Policy</h4>
                                        </div>
                                    </div>
                                    <h4 className="text-[14px] font-[500] mt-2 text-prgcolor">
                                        Total Score: 5
                                    </h4>
                                </div>

                                <div className="input_box mt-4">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Write your review
                                    </h4>
                                    <textarea
                                        rows={3}
                                        className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                        placeholder="Please share your product experience to the Marketplace community.">
                                    </textarea>
                                    <span className="text-[12px] text-graycolor">
                                        You have 5,000 characters left.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={handleClickReviewTwoCancel}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={handleClickReviewTwoCancel}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Summit Review
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* SubmitReviewTwo Pop-Up End */}


                {/* Start Return Pop-Up Start */}
                <Modal size="lg"
                       show={openStartCancelOrderModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartCancelOrderModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Return or Replace Item(s)</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please select the item(s) you would like to return.
                            </h4>
                            <div className="mt-4 space-y-3">
                                <div onClick={handleBoxClick} className="box cursor-pointer py-2 px-4 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <Link href='#'
                                                  className="show_product group flex items-start gap-4">
                                                <div className="p-1 border rounded">
                                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                                </div>
                                                <div className="product_content">
                                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                        iPhone XS</h4>
                                                    <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="check_box">
                                            <Checkbox
                                                checked={checked}
                                                onChange={() => setChecked(!checked)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div onClick={handleBoxClickTwo}
                                     className="box cursor-pointer py-2 px-4 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <Link href='#'
                                                  className="show_product group flex items-start gap-4">
                                                <div className="p-1 border rounded">
                                                    <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                                </div>
                                                <div className="product_content">
                                                    <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                        iPhone XS</h4>
                                                    <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="check_box">
                                            <Checkbox
                                                checked={checkedTwo}
                                                onChange={() => setCheckedTwo(!checkedTwo)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-[14px] font-normal mt-6">
                                Please specify the reason for returning this item.
                            </h4>
                            <div className="select-box mt-2 relative" ref={selectBoxRefAccDtv}>
                                <div className="select-option flex"
                                     onClick={toggleOptionsVisibilityAccDtv}>
                                    <input type="text" placeholder="Select a reason"
                                           readOnly
                                           value={selectedOptionAccDtv}
                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                    {isOptionsVisibleAccDtv && (
                                        <div className="info-content absolute z-50 w-full gender_content">
                                            <ul className="options">
                                                <li onClick={() => handleOptionClickAccDtv("Wrong size/color")}>
                                                    Wrong size/color
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Defective item")}>
                                                    Defective item
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Item damaged")}>
                                                    Item damaged
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Not as described")}>
                                                    Not as described
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Better price found")}>
                                                    Better price found
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Poor quality")}>
                                                    Poor quality
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Received late")}>
                                                    Received late
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Duplicate order")}>
                                                    Duplicate order
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Missing parts")}>
                                                    Missing parts
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Wrong item received")}>
                                                    Wrong item received
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Packaging damaged")}>
                                                    Packaging damaged
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Didn’t meet expectations")}>
                                                    Didn’t meet expectations
                                                </li>
                                                <li onClick={() => handleOptionClickAccDtv("Changed my mind")}>
                                                    Changed my mind
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {selectedOptionAccDtv && (
                                <div className="others-input py-2 mt-3">
                                    <h4 className="text-[14px] text-prgcolor">
                                        Please provide more details about your reason (required).
                                    </h4>
                                    <textarea cols={30} rows={3}
                                              className="mt-1 rounded leading-[20px] w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                              placeholder="Please explain the issue with the item. Please do not include personal information."
                                    >
                                    </textarea>
                                    <h4 className="text-[12px] text-graycolor mt-0">
                                        You have 250 characters left.
                                    </h4>
                                </div>
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartCancelOrderModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartCancelOrderConfirmDoneModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Continue
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Return Pop-Up End */}

                {/* Start ReturnConfirmDone Pop-Up Start */}
                <Modal size="lg"
                       show={openStartCancelOrderConfirmDoneModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartCancelOrderConfirmDoneModal(false)}>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="icon">
                                    <svg
                                        className="w-[50px] h-[50px] text-primary"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="m15 9-6 6"/>
                                        <path d="m9 9 6 6"/>
                                    </svg>
                                </div>
                                <h4 className="text-graycolor text-[14px] mt-3">
                                    Your order has been cancelled successfully.
                                </h4>
                                <button onClick={handleCancelOrderConfirmDoneClick}
                                        className="mt-6 px-10 w-full text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/*  ReturnConfirmDone Pop-Up End */}

            </section>
        </>
    );
}

export default Page;