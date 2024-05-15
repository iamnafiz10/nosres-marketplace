"use client";
import React, {useEffect, useRef, useState} from 'react';
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";
import Link from "next/link";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import {RiArrowDropDownLine} from "react-icons/ri";
import {Modal} from "flowbite-react";
import type {RadioChangeEvent} from 'antd';
import {Radio} from 'antd';
import {IoAlertCircle} from "react-icons/io5";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

function Page() {
    useTitle("Orders")
    const loading = useLoading();

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

    // Radio Box
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

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

    // SubmitReview Popup
    const [openSubmitReviewModal, setOpenSubmitReviewModal] = useState<boolean>(false);
    const [openSubmitReviewTwoModal, setOpenSubmitReviewTwoModal] = useState<boolean>(false);

    const handleClickReviewTwoCancel = () => {
        setOpenSubmitReviewModal(false);
        setOpenSubmitReviewTwoModal(false);
    }
    return (
        <>
            {/*<section id="order-section">*/}
            {/*    <div className="container pt-[50px] pb-14">*/}
            {/*        <div className="grid grid-cols-1 lg:grid-cols-12">*/}
            {/*            <div className="col lg:col-span-2"></div>*/}
            {/*            <div className="col ml-0 lg:ml-10 lg:col-span-10">*/}
            {/*                <div className="header_wrap mt-4">*/}
            {/*                    {loading ? (*/}
            {/*                        <div>*/}
            {/*                            <Skeleton height={20} count={1}/>*/}
            {/*                            <Skeleton height={10} count={1}/>*/}
            {/*                        </div>*/}
            {/*                    ) : (*/}
            {/*                        <>*/}
            {/*                            <h4 className="text-[20px] font-semibold">*/}
            {/*                                Orders*/}
            {/*                            </h4>*/}
            {/*                            <h4 className="text-[14px] text-graycolor">*/}
            {/*                                View and manage all your orders*/}
            {/*                            </h4>*/}
            {/*                        </>*/}
            {/*                    )}*/}
            {/*                </div>*/}

            {/*                /!* FilterUserTab dropdown *!/*/}
            {/*                <div className="flex text-[14px] items-center justify-end">*/}
            {/*                    <div ref={dropdownFilterUserTabRef} onClick={toggleDropdownFilterUserTab}*/}
            {/*                         className="filter_dropdown  z-20 cursor-pointer relative">*/}
            {/*                        <div*/}
            {/*                            className="w-[150px] h-8 bg-white flex border border-gray-200 rounded items-center">*/}
            {/*                            <input value={selectedOptionFilterUserTab} name="select"*/}
            {/*                                   id="select"*/}
            {/*                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full bg-white"*/}
            {/*                                   readOnly/>*/}
            {/*                            <button type='button'*/}
            {/*                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">*/}
            {/*                                <RiArrowDropDownLine size={25}/>*/}
            {/*                            </button>*/}
            {/*                        </div>*/}

            {/*                        {isOpenDropdownFilterUserTab && (*/}
            {/*                            <div*/}
            {/*                                className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">*/}
            {/*                                <div className="cursor-pointer"*/}
            {/*                                     onClick={() => handleOptionSelectFilterUserTab("Sort by")}>*/}
            {/*                                    <div*/}
            {/*                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">*/}
            {/*                                        Sort by*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="cursor-pointer"*/}
            {/*                                     onClick={() => handleOptionSelectFilterUserTab("Relevance")}>*/}
            {/*                                    <div*/}
            {/*                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">*/}
            {/*                                        Relevance*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="cursor-pointer"*/}
            {/*                                     onClick={() => handleOptionSelectFilterUserTab("Popular")}>*/}
            {/*                                    <div*/}
            {/*                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">*/}
            {/*                                        Popular*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="cursor-pointer"*/}
            {/*                                     onClick={() => handleOptionSelectFilterUserTab("Newest")}>*/}
            {/*                                    <div*/}
            {/*                                        className="block p-2 border-transparent border-l-4 hover:border-primary border-blue-600 hover:bg-gray-100">*/}
            {/*                                        Newest*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        )}*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                /!* Product Table *!/*/}
            {/*                <div className="block mt-2 w-full overflow-x-auto">*/}
            {/*                    <table className="items-start bg-transparent w-full border-collapse">*/}
            {/*                        <thead>*/}
            {/*                        <tr>*/}
            {/*                            <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}
            {/*                                Order ID*/}
            {/*                            </th>*/}
            {/*                            <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}
            {/*                                Order Placed*/}
            {/*                            </th>*/}
            {/*                            <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}
            {/*                                Total*/}
            {/*                            </th>*/}
            {/*                            <th className="px-6 py-3 bg-[#EFEFEF] font-normal text-graycolor text-[14px] text-left border-2 border-l-0 border-r-0 border-t-0 whitespace-nowrap">*/}

            {/*                            </th>*/}
            {/*                        </tr>*/}
            {/*                        </thead>*/}

            {/*                        <tbody>*/}
            {/*                        <tr>*/}
            {/*                            <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
            {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                    #100190*/}
            {/*                                </h4>*/}
            {/*                            </th>*/}
            {/*                            <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
            {/*                                <div className="flex items-center gap-4">*/}
            {/*                                    <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                        01 May 2024*/}
            {/*                                    </h4>*/}
            {/*                                    <div className="text-[12px] py-1 px-4 bg-green-500 rounded text-white">*/}
            {/*                                        Completed*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">*/}
            {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                    $11890.00*/}
            {/*                                </h4>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-top border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
            {/*                                <button type='button'*/}
            {/*                                        className="py-2 px-4 text-[14px] bg-primary text-white border border-primary rounded hover:bg-transparent hover:text-primary transition">*/}
            {/*                                    Order Details*/}
            {/*                                </button>*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                        <tr>*/}
            {/*                            <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">*/}
            {/*                                <div className="product_image cursor-pointer">*/}
            {/*                                    <Image src={ProductImg} className="w-20" alt="ProductImg"/>*/}
            {/*                                </div>*/}
            {/*                            </th>*/}
            {/*                            <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">*/}
            {/*                                <div className="wrap">*/}
            {/*                                    <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                        T-Shirt - Black*/}
            {/*                                    </h4>*/}
            {/*                                    <h4 className="text-[14px] font-normal text-graycolor">*/}
            {/*                                        Delivery: <span className="text-prgcolor">Ship Only</span>*/}
            {/*                                    </h4>*/}
            {/*                                    <h4 onClick={() => setOpenSubmitReviewModal(true)}*/}
            {/*                                        className="mt-2 text-[14px] font-normal cursor-pointer text-primary hover:underline">*/}
            {/*                                        Write a review*/}
            {/*                                    </h4>*/}
            {/*                                </div>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">*/}
            {/*                                <h4 className="text-[14px] font-normal text-prgcolor">*/}
            {/*                                    $120.00*/}
            {/*                                </h4>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}

            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                        <tr className="border-b-2">*/}
            {/*                            <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">*/}
            {/*                                <div className="product_image cursor-pointer">*/}
            {/*                                    <Image src={ProductImg} className="w-20" alt="ProductImg"/>*/}
            {/*                                </div>*/}
            {/*                            </th>*/}
            {/*                            <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">*/}
            {/*                                <div className="wrap">*/}
            {/*                                    <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                        T-Shirt - Red*/}
            {/*                                    </h4>*/}
            {/*                                    <h4 className="text-[14px] font-normal text-graycolor">*/}
            {/*                                        Delivery: <span className="text-prgcolor">Ship Only</span>*/}
            {/*                                    </h4>*/}
            {/*                                </div>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">*/}
            {/*                                <h4 className="text-[14px] font-normal text-prgcolor">*/}
            {/*                                    $210.00*/}
            {/*                                </h4>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}

            {/*                            </td>*/}
            {/*                        </tr>*/}

            {/*                        <tr>*/}
            {/*                            <th className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
            {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                    #100191*/}
            {/*                                </h4>*/}
            {/*                            </th>*/}
            {/*                            <td className="align-top border-0 px-6 p-4 pb-0 whitespace-nowrap text-left">*/}
            {/*                                <div className="flex items-center gap-4">*/}
            {/*                                    <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                        02 May 2024*/}
            {/*                                    </h4>*/}
            {/*                                    <div*/}
            {/*                                        className="text-[12px] py-1 px-4 bg-[#E6EDF4] rounded text-primary">*/}
            {/*                                        In progress*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-top border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-0">*/}
            {/*                                <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                    $12523.00*/}
            {/*                                </h4>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-top border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
            {/*                                <button type='button'*/}
            {/*                                        className="py-2 px-4 text-[14px] bg-primary text-white border border-primary rounded hover:bg-transparent hover:text-primary transition">*/}
            {/*                                    Order Details*/}
            {/*                                </button>*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                        <tr>*/}
            {/*                            <th className="align-top border-0 px-6 p-2 whitespace-nowrap text-left">*/}
            {/*                                <div className="product_image cursor-pointer">*/}
            {/*                                    <Image src={ProductImg} className="w-20" alt="ProductImg"/>*/}
            {/*                                </div>*/}
            {/*                            </th>*/}
            {/*                            <td className="align-center border-0 px-6 p-2 whitespace-nowrap text-left">*/}
            {/*                                <div className="wrap">*/}
            {/*                                    <h4 className="text-[14px] font-semibold text-prgcolor">*/}
            {/*                                        T-Shirt - Yellow*/}
            {/*                                    </h4>*/}
            {/*                                    <h4 className="text-[14px] font-normal text-graycolor">*/}
            {/*                                        Delivery: <span className="text-prgcolor">Ship Only</span>*/}
            {/*                                    </h4>*/}
            {/*                                </div>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">*/}
            {/*                                <h4 className="text-[14px] font-normal text-prgcolor">*/}
            {/*                                    $172.00*/}
            {/*                                </h4>*/}
            {/*                            </td>*/}
            {/*                            <td className="align-center border-t-0 px-6 text-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}

            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                        </tbody>*/}
            {/*                    </table>*/}
            {/*                    /!* Pagination *!/*/}
            {/*                    <div className="pagination mt-4 flex items-center justify-center">*/}
            {/*                        <nav aria-label="Page navigation example">*/}
            {/*                            <ul className="inline-flex -space-x-px text-[14px] gap-1">*/}
            {/*                                <li>*/}
            {/*                                    <Link href='#' aria-current="page"*/}
            {/*                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">*/}
            {/*                                        <HiArrowLongLeft/>*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                                <li>*/}
            {/*                                    <Link href='#' aria-current="page"*/}
            {/*                                          className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">*/}
            {/*                                        1*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                                <li>*/}
            {/*                                    <Link href='#'*/}
            {/*                                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">*/}
            {/*                                        2*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                                <li>*/}
            {/*                                    <Link href='#' aria-current="page"*/}
            {/*                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">*/}
            {/*                                        <HiArrowLongRight/>*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                            </ul>*/}
            {/*                        </nav>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Start SubmitReview Pop-Up Start *!/*/}
            {/*    <Modal size="lg"*/}
            {/*           dismissible={!openSubmitReviewTwoModal}*/}
            {/*           show={openSubmitReviewModal}*/}
            {/*           style={{*/}
            {/*               padding: '0px',*/}
            {/*           }}*/}
            {/*           className="modal_cntrl"*/}
            {/*           onClose={() => setOpenSubmitReviewModal(false)}>*/}
            {/*        <Modal.Header*/}
            {/*            style={{*/}
            {/*                height: '50px',*/}
            {/*                display: 'flex',*/}
            {/*                alignItems: 'center'*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <h4 className="text-[16px]">Submit a Review</h4>*/}
            {/*        </Modal.Header>*/}
            {/*        <Modal.Body>*/}
            {/*            <div className="modal_body">*/}
            {/*                <div className="top_box py-2 px-4 rounded bg-blue-50">*/}
            {/*                    <div className="flex items-center gap-2">*/}
            {/*                        <div className="icon">*/}
            {/*                            <IoAlertCircle size={18} className="text-primary"/>*/}
            {/*                        </div>*/}
            {/*                        <div className="content">*/}
            {/*                            <h4 className="text-prgcolor text-[14px] font-[500]">*/}
            {/*                                Product Review*/}
            {/*                            </h4>*/}
            {/*                            <h4 className="text-primary text-[12px] font-normal">*/}
            {/*                                This is a product review. Please share your opinions and*/}
            {/*                                experiences regarding the product.*/}
            {/*                            </h4>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <h4 className="text-[14px] font-[500] mt-4 text-prgcolor">*/}
            {/*                    Private Review*/}
            {/*                </h4>*/}
            {/*                <h4 className="text-[12px] text-graycolor pb-2">*/}
            {/*                    This review will remain anonymous and will not be directly shared with<br/>*/}
            {/*                    the seller.*/}
            {/*                </h4>*/}
            {/*                <hr/>*/}
            {/*                <h4 className="text-prgcolor text-[14px] mt-2">*/}
            {/*                    How likely are you to recommend this product to a friend, family member,*/}
            {/*                    or colleague?*/}
            {/*                </h4>*/}
            {/*                <div className="rate_radio_box">*/}
            {/*                    <div className="mt-4 flex items-center justify-between">*/}
            {/*                        <h4 className="text-[12px] text-graycolor">Not at all likely</h4>*/}
            {/*                        <h4 className="text-[12px] text-graycolor">Extremely likely</h4>*/}
            {/*                    </div>*/}
            {/*                    <div className="mt-2 radio_button">*/}
            {/*                        <Radio.Group onChange={onChange} value={value}*/}
            {/*                                     className="flex items-center justify-between">*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={0} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">0</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={1} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">1</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={2} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">2</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={3} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">3</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={4} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">4</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={5} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">5</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={6} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">6</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={7} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">7</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={8} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">8</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={9} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">9</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={10} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">10</h4>*/}
            {/*                            </div>*/}
            {/*                        </Radio.Group>*/}
            {/*                    </div>*/}

            {/*                    <div className="input_box mt-6">*/}
            {/*                        <h4 className="text-[14px] text-prgcolor">*/}
            {/*                            Please tell us more. How could things have been improved? (optional)*/}
            {/*                        </h4>*/}
            {/*                        <textarea*/}
            {/*                            rows={3}*/}
            {/*                            className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"*/}
            {/*                            placeholder="Please provide further details. Your review plays a crucial role in*/}
            {/*                            creating a safer and more trustworthy community for everyone.">*/}
            {/*                        </textarea>*/}
            {/*                        <span className="text-[12px] text-graycolor">*/}
            {/*                            You have 5,000 characters left.*/}
            {/*                        </span>*/}
            {/*                    </div>*/}

            {/*                    <div className="public_review mt-4">*/}
            {/*                        <h4 className="text-[14px] font-[500]">*/}
            {/*                            Public Review*/}
            {/*                        </h4>*/}
            {/*                        <h4 className="text-graycolor text-[12px] pb-2">*/}
            {/*                            This review will be displayed on the product listing for others to see.*/}
            {/*                        </h4>*/}
            {/*                        <hr/>*/}
            {/*                    </div>*/}

            {/*                    <div className="star_riview_box mt-4">*/}
            {/*                        <h4 className="text-[14px] text-prgcolor">*/}
            {/*                            Tap a star to rate features*/}
            {/*                        </h4>*/}
            {/*                        <div className="all_rating_wrap mt-1 -space-y-2">*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Quality</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Description accuracy</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Value</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Pricing</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Shipping</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Packaging quality</h4>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <h4 className="text-[14px] font-[500] mt-2 text-prgcolor">*/}
            {/*                            Total Score: 5*/}
            {/*                        </h4>*/}
            {/*                    </div>*/}

            {/*                    <div className="input_box mt-4">*/}
            {/*                        <h4 className="text-[14px] text-prgcolor">*/}
            {/*                            Write your review*/}
            {/*                        </h4>*/}
            {/*                        <textarea*/}
            {/*                            rows={3}*/}
            {/*                            className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"*/}
            {/*                            placeholder="Please share your product experience to the Marketplace community.">*/}
            {/*                        </textarea>*/}
            {/*                        <span className="text-[12px] text-graycolor">*/}
            {/*                            You have 5,000 characters left.*/}
            {/*                        </span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Modal.Body>*/}
            {/*        <Modal.Footer>*/}
            {/*            <div className="flex w-full items-center justify-between">*/}
            {/*                <button onClick={() => setOpenSubmitReviewModal(false)}*/}
            {/*                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">*/}
            {/*                    Cancel*/}
            {/*                </button>*/}
            {/*                <button onClick={() => setOpenSubmitReviewTwoModal(true)}*/}
            {/*                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">*/}
            {/*                    Next*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </Modal.Footer>*/}
            {/*    </Modal>*/}
            {/*    /!* SubmitReview Pop-Up End *!/*/}
            {/*    /!* Start SubmitReviewTwo Pop-Up Start *!/*/}
            {/*    <Modal size="lg"*/}
            {/*           dismissible*/}
            {/*           show={openSubmitReviewTwoModal}*/}
            {/*           style={{*/}
            {/*               backgroundColor: 'rgb(17 24 39 / 40%)',*/}
            {/*               padding: '0px',*/}
            {/*           }}*/}
            {/*           className="modal_cntrl"*/}
            {/*           onClose={() => setOpenSubmitReviewTwoModal(false)}>*/}
            {/*        <Modal.Header*/}
            {/*            style={{*/}
            {/*                height: '50px',*/}
            {/*                display: 'flex',*/}
            {/*                alignItems: 'center'*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <h4 className="text-[16px]">Submit a Review</h4>*/}
            {/*        </Modal.Header>*/}
            {/*        <Modal.Body>*/}
            {/*            <div className="modal_body">*/}
            {/*                <div className="top_box py-2 px-4 rounded bg-blue-50">*/}
            {/*                    <div className="flex items-center gap-2">*/}
            {/*                        <div className="icon">*/}
            {/*                            <IoAlertCircle size={18} className="text-primary"/>*/}
            {/*                        </div>*/}
            {/*                        <div className="content">*/}
            {/*                            <h4 className="text-prgcolor text-[14px] font-[500]">*/}
            {/*                                Store Review*/}
            {/*                            </h4>*/}
            {/*                            <h4 className="text-primary text-[12px] font-normal">*/}
            {/*                                This is a store review. Please share your opinions and*/}
            {/*                                experiences regarding the store.*/}
            {/*                            </h4>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <h4 className="text-[14px] font-[500] mt-4 text-prgcolor">*/}
            {/*                    Private Review*/}
            {/*                </h4>*/}
            {/*                <h4 className="text-[12px] text-graycolor pb-2">*/}
            {/*                    This review will remain anonymous and will not be directly shared with<br/>*/}
            {/*                    the seller.*/}
            {/*                </h4>*/}
            {/*                <hr/>*/}
            {/*                <h4 className="text-prgcolor text-[14px] mt-2">*/}
            {/*                    How likely are you to recommend this product to a friend, family member,*/}
            {/*                    or colleague?*/}
            {/*                </h4>*/}
            {/*                <div className="rate_radio_box">*/}
            {/*                    <div className="mt-4 flex items-center justify-between">*/}
            {/*                        <h4 className="text-[12px] text-graycolor">Not at all likely</h4>*/}
            {/*                        <h4 className="text-[12px] text-graycolor">Extremely likely</h4>*/}
            {/*                    </div>*/}
            {/*                    <div className="mt-2 radio_button">*/}
            {/*                        <Radio.Group onChange={onChange} value={value}*/}
            {/*                                     className="flex items-center justify-between">*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={0} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">0</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={1} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">1</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={2} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">2</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={3} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">3</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={4} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">4</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={5} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">5</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={6} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">6</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={7} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">7</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={8} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">8</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={9} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">9</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex flex-col items-center justify-center text-center">*/}
            {/*                                <Radio value={10} className="mr-0"></Radio>*/}
            {/*                                <h4 className="text-[12px] text-prgcolor">10</h4>*/}
            {/*                            </div>*/}
            {/*                        </Radio.Group>*/}
            {/*                    </div>*/}

            {/*                    <div className="input_box mt-6">*/}
            {/*                        <h4 className="text-[14px] text-prgcolor">*/}
            {/*                            Please tell us more. How could things have been improved? (optional)*/}
            {/*                        </h4>*/}
            {/*                        <textarea*/}
            {/*                            rows={3}*/}
            {/*                            className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"*/}
            {/*                            placeholder="Please provide further details. Your review plays a crucial role in*/}
            {/*                            creating a safer and more trustworthy community for everyone.">*/}
            {/*                        </textarea>*/}
            {/*                        <span className="text-[12px] text-graycolor">*/}
            {/*                            You have 5,000 characters left.*/}
            {/*                        </span>*/}
            {/*                    </div>*/}

            {/*                    <div className="public_review mt-4">*/}
            {/*                        <h4 className="text-[14px] font-[500]">*/}
            {/*                            Public Review*/}
            {/*                        </h4>*/}
            {/*                        <h4 className="text-graycolor text-[12px] pb-2">*/}
            {/*                            This review will be displayed on the product listing for others to see.*/}
            {/*                        </h4>*/}
            {/*                        <hr/>*/}
            {/*                    </div>*/}

            {/*                    <div className="star_riview_box mt-4">*/}
            {/*                        <h4 className="text-[14px] text-prgcolor">*/}
            {/*                            Tap a star to rate features*/}
            {/*                        </h4>*/}
            {/*                        <div className="all_rating_wrap mt-1 -space-y-2">*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Responsiveness</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Helpfulness</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Friendliness</h4>*/}
            {/*                            </div>*/}
            {/*                            <div className="star_icon flex items-center gap-3">*/}
            {/*                                <ReactStars {...oneExample} />*/}
            {/*                                <h4 className="text-graycolor text-[12px]">Return and Refund Policy</h4>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <h4 className="text-[14px] font-[500] mt-2 text-prgcolor">*/}
            {/*                            Total Score: 5*/}
            {/*                        </h4>*/}
            {/*                    </div>*/}

            {/*                    <div className="input_box mt-4">*/}
            {/*                        <h4 className="text-[14px] text-prgcolor">*/}
            {/*                            Write your review*/}
            {/*                        </h4>*/}
            {/*                        <textarea*/}
            {/*                            rows={3}*/}
            {/*                            className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"*/}
            {/*                            placeholder="Please share your product experience to the Marketplace community.">*/}
            {/*                        </textarea>*/}
            {/*                        <span className="text-[12px] text-graycolor">*/}
            {/*                            You have 5,000 characters left.*/}
            {/*                        </span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Modal.Body>*/}
            {/*        <Modal.Footer>*/}
            {/*            <div className="flex w-full items-center justify-between">*/}
            {/*                <button onClick={handleClickReviewTwoCancel}*/}
            {/*                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">*/}
            {/*                    Cancel*/}
            {/*                </button>*/}
            {/*                <button onClick={handleClickReviewTwoCancel}*/}
            {/*                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">*/}
            {/*                    Summit Review*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </Modal.Footer>*/}
            {/*    </Modal>*/}
            {/*    /!* SubmitReviewTwo Pop-Up End *!/*/}
            {/*</section>*/}
        </>
    );
}

export default Page;