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
import {Modal} from "flowbite-react";
import {Checkbox, Radio, RadioChangeEvent} from "antd";

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

    //  ReturnConfirm popup
    const [openStartReturnConfirmModal, setOpenStartReturnConfirmModal] = useState<boolean>(false);
    const [openStartReturnConfirmDoneModal, setOpenStartReturnConfirmDoneModal] = useState<boolean>(false);
    const handleReturnConfirmDoneClick = () => {
        setOpenStartReturnModal(false);
        setOpenStartReturnConfirmDoneModal(false);
        setOpenStartReturnConfirmModal(false);

        setOpenStartReturnRfdModal(false);
        setOpenStartReturnConfirmRfdModal(false);
        setOpenStartReturnConfirmDoneRfdModal(false);
    };

    //  CancelOrder popup
    const [openStartCancelOrderConfirmModal, setOpenStartCancelOrderConfirmModal] = useState<boolean>(false);
    const [openStartCancelOrderConfirmDoneModalCan, setOpenStartCancelOrderConfirmDoneModalCan] = useState<boolean>(false);
    const handleCancelOrderConfirmDoneClick = () => {
        setOpenStartCancelOrderConfirmModal(false);
        setOpenStartCancelOrderConfirmDoneModalCan(false);
    };

    //  ReturnConfirm popup
    const [openStartReturnConfirmCanModal, setOpenStartReturnConfirmCanModal] = useState<boolean>(false);
    const [openStartCancelOrderConfirmDoneCanModal, setOpenStartCancelOrderConfirmDoneCanModal] = useState<boolean>(false);
    const handleReturnConfirmCanDoneClick = () => {
        setOpenStartReturnModal(false);
        setOpenStartCancelOrderConfirmDoneCanModal(false);
        setOpenStartReturnConfirmCanModal(false);

        setOpenStartReturnRfdModal(false);
        setOpenStartReturnConfirmRfdModal(false);
        setOpenStartReturnConfirmDoneRfdModal(false);
    };


    // Cancel confirm
    const [openStartCancelOrderConfirmDoneModal, setOpenStartCancelOrderConfirmDoneModal] = useState<boolean>(false);
    const handleCancelOrderConfirmDoneClickCan = () => {
        setOpenStartCancelOrderConfirmDoneModalCan(false);
        setOpenStartCancelOrderModal(false);
        setOpenStartReturnConfirmCanModal(false);
    };

    //  --------------------------------------- Return popup -----------------------------------------//
    const [openStartReturnRfdModal, setOpenStartReturnRfdModal] = useState<boolean>(false);
    const [openStartReturnConfirmRfdModal, setOpenStartReturnConfirmRfdModal] = useState<boolean>(false);
    const [openStartReturnConfirmDoneRfdModal, setOpenStartReturnConfirmDoneRfdModal] = useState<boolean>(false);
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
                                            <div className="mb-3 mt-4">
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
                                                            <button onClick={() => setOpenStartReturnRfdModal(true)}
                                                                    type='button'
                                                                    className="py-2 px-4 bg-gray-100 rounded text-[12px] border hover:bg-primary hover:text-white transition hover:border-primary">
                                                                Process Refund
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
                                            <div className="mt-0 lg:mt-[125px] py-1">
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <div
                                                    className="mt-0 lg:mt-[96px] box border-b-2 bg-white py-1 px-4 rounded rounded-b-none">
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

                {/*--------------- Cancel Button Popups----------------- */}
                {/* One */}
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
                        <h4 className="text-[16px]">Cancel Order</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please select the item(s) you would like to cancel.
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
                                Please specify the reason for cancelling this item.
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
                                            <li onClick={() => handleOptionClickAccDtv("Item out of stock")}>
                                                Item out of stock
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Pricing error")}>
                                                Pricing error
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Payment issue")}>
                                                Payment issue
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Buyer address invalid")}>
                                                Buyer address invalid
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Suspected fraud")}>
                                                Suspected fraud
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Product discontinued")}>
                                                Product discontinued
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Quality issue")}>
                                                Quality issue
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Duplicate order")}>
                                                Duplicate order
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Lost package")}>
                                                Lost package
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Product defect")}>
                                                Product defect
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Order duplication")}>
                                                Order duplication
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Supplier delay")}>
                                                Supplier delay
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Incorrect listing")}>
                                                Incorrect listing
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Policy violation")}>
                                                Policy violation
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Policy change")}>
                                                Policy change
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Customer request")}>
                                                Customer request
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Inventory mismatch")}>
                                                Inventory mismatch
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Packaging problem")}>
                                                Packaging problem
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Recall issued")}>
                                                Recall issued
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Damage during handling")}>
                                                Damage during handling
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
                            <button onClick={() => setOpenStartCancelOrderModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartReturnConfirmCanModal(true)}
                                    className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Process Refund
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>

                {/* Two */}
                <Modal size="lg"
                       show={openStartReturnConfirmCanModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 10%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnConfirmCanModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Process Refund</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please review the refund details carefully. Once confirmed, the refund
                                process will be initiated.
                            </h4>

                            <div className="mt-3 flex items-center gap-2">
                                <h4 className="text-graycolor text-[14px]">
                                    Total Refund Amount:
                                </h4>
                                <h4 className="text-prgcolor text-[16px]">$199.00</h4>
                            </div>

                            <div className="mt-4">
                                <h4 className="text-prgcolor text-[14px] mb-2">Refund Method</h4>
                                <div onClick={() => onChange(1)}
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
                                                    Please review the refund details before confirming the refund.
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div className="mt-3 flex items-start gap-2">
                                    <Checkbox>
                                    </Checkbox>
                                    <h4 className="flex items-start text-graycolor text-[12px]">
                                        I confirm that I have reviewed the refund details and wish to
                                        proceed with the refund.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartReturnConfirmCanModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenStartCancelOrderConfirmDoneModalCan(true)}
                                    className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Confirm Refund
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>


                {/* Three */}
                <Modal size="lg"
                       show={openStartCancelOrderConfirmDoneModalCan}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartCancelOrderConfirmDoneModalCan(false)}>
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
                                <button onClick={handleCancelOrderConfirmDoneClickCan}
                                        className="mt-6 px-10 w-full text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Close
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                {/*----------------------- Refund Button Popups -----------------*/}
                {/* One */}
                <Modal size="lg"
                       show={openStartReturnRfdModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnRfdModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Process Refund</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please select the item(s) you would like to refund.
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
                                Please specify the reason for refunding this item.
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
                                            <li onClick={() => handleOptionClickAccDtv("Item out of stock")}>
                                                Item out of stock
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Pricing error")}>
                                                Pricing error
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Payment issue")}>
                                                Payment issue
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Buyer address invalid")}>
                                                Buyer address invalid
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Suspected fraud")}>
                                                Suspected fraud
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Product discontinued")}>
                                                Product discontinued
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Quality issue")}>
                                                Quality issue
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Duplicate order")}>
                                                Duplicate order
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Lost package")}>
                                                Lost package
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Product defect")}>
                                                Product defect
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Order duplication")}>
                                                Order duplication
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Supplier delay")}>
                                                Supplier delay
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Incorrect listing")}>
                                                Incorrect listing
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Policy violation")}>
                                                Policy violation
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Policy change")}>
                                                Policy change
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Customer request")}>
                                                Customer request
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Inventory mismatch")}>
                                                Inventory mismatch
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Packaging problem")}>
                                                Packaging problem
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Recall issued")}>
                                                Recall issued
                                            </li>
                                            <li onClick={() => handleOptionClickAccDtv("Damage during handling")}>
                                                Damage during handling
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
                            <button onClick={() => setOpenStartReturnRfdModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartReturnConfirmRfdModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Continue
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>

                {/* Two */}
                <Modal size="lg"
                       show={openStartReturnConfirmRfdModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 10%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnConfirmRfdModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Process Refund</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please review the refund details carefully. Once confirmed, the refund
                                process will be initiated.
                            </h4>

                            <div className="mt-3 flex items-center gap-2">
                                <h4 className="text-graycolor text-[14px]">
                                    Total Refund Amount:
                                </h4>
                                <h4 className="text-prgcolor text-[16px]">$199.00</h4>
                            </div>

                            <div className="mt-4">
                                <h4 className="text-prgcolor text-[14px] mb-2">Refund Method</h4>
                                <div onClick={() => onChange(1)}
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
                                                    Please review the refund details before confirming the refund.
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div className="mt-3 flex items-start gap-2">
                                    <Checkbox>
                                    </Checkbox>
                                    <h4 className="flex items-start text-graycolor text-[12px]">
                                        I confirm that I have reviewed the refund details and wish to
                                        proceed with the refund.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartReturnConfirmRfdModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenStartReturnConfirmDoneRfdModal(true)}
                                    className="px-8 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Confirm Refund
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>

                {/* Three*/}
                <Modal size="lg"
                       show={openStartReturnConfirmDoneRfdModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartReturnConfirmDoneRfdModal(false)}>
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
                                    The refund has been successfully issued to the
                                    customer’s original payment method.
                                </h4>
                                <button onClick={handleReturnConfirmDoneClick}
                                        className="mt-6 px-10 w-full text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Close
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        </>
    );
}

export default Page;