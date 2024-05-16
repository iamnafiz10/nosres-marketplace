"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import {Checkbox} from "antd";
import Link from "next/link";
import ProductImg from '../../../../public/assets/images/product-1.png';
import Image from "next/image";
import {CiLock} from "react-icons/ci";
import {RiArrowDropDownLine} from "react-icons/ri";
import {GoAlertFill} from "react-icons/go";

function Page() {
    useTitle("Checkout")
    const loading = useLoading();
    // Phone dropdown
    const [phone, setPhone] = useState('');

    //----------- FilterStoreTab Dropdown Start --------------//
    const [isOpenDropdownFilterStoreTab, setIsOpenDropdownFilterStoreTab] = useState(false);
    const [selectedOptionFilterStoreTab, setSelectedOptionFilterStoreTab] = useState("UPS Ground 11.30"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterStoreTab = () => {
        setIsOpenDropdownFilterStoreTab(!isOpenDropdownFilterStoreTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterStoreTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterStoreTab(option);
        setIsOpenDropdownFilterStoreTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterStoreTabRef = useRef(null);
    const handleClickOutsideFilterStoreTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterStoreTabRef.current && !dropdownFilterStoreTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterStoreTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterStoreTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterStoreTab);
        };
    }, []);
    //----------- FilterStoreTab Dropdown End --------------//
    return (
        <>
            <section id="checkout-section">
                <div className="container pt-[50px] pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="col lg:col-span-7">
                            <div className="header_wrap mt-4">
                                {loading ? (
                                    <div className='pb-1'>
                                        <Skeleton height={20} count={1}/>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-[20px]">
                                            Checkout (<span className="text-primary">3 items</span>)
                                        </h4>
                                    </>
                                )}
                            </div>
                            <div className="mt-2 box py-4 px-6 bg-white rounded">
                                {loading ? (
                                    <div>
                                        <Skeleton height={20} count={20}/>
                                    </div>
                                ) : (
                                    <>
                                        <div className="block lg:flex items-center justify-start gap-2">
                                            <h4 className="text-[16px] w-[200px] text-prgcolor">
                                                General Information
                                            </h4>
                                            <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>
                                        </div>

                                        {/* Form Area */}
                                        <form action="#" className="mt-4">
                                            <div className="input_box">
                                                <label htmlFor="full_name" className="text-[14px]">
                                                    Full Name
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="Full name"
                                                />
                                                <div className="warning mt-1 flex items-center gap-1">
                                                    <div className="icon">
                                                        <GoAlertFill size={12} className="text-red-600"/>
                                                    </div>
                                                    <h4 className="text-[12px] text-red-600 mt-1">
                                                        Please complete this field.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="phone_sumber" className="text-[14px] font-normal">
                                                    Phone Number
                                                </label><br/>
                                                <PhoneInput
                                                    className="mt-1 w-full"
                                                    defaultCountry="ua"
                                                    value={phone}
                                                    onChange={(phone) => setPhone(phone)}
                                                />
                                                <div className="warning mt-1 flex items-center gap-1">
                                                    <div className="icon">
                                                        <GoAlertFill size={12} className="text-red-600"/>
                                                    </div>
                                                    <h4 className="text-[12px] text-red-600 mt-1">
                                                        Please complete this field.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="location" className="text-[14px] font-normal">
                                                    Enter Shipping Location
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="United States of America, BDK as-6506"
                                                />
                                                <div className="warning mt-1 flex items-center gap-1">
                                                    <div className="icon">
                                                        <GoAlertFill size={12} className="text-red-600"/>
                                                    </div>
                                                    <h4 className="text-[12px] text-red-600 mt-1">
                                                        Please complete this field.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="location" className="text-[14px] font-normal">
                                                    Address
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="United States"
                                                />
                                                <div className="warning mt-1 flex items-center gap-1">
                                                    <div className="icon">
                                                        <GoAlertFill size={12} className="text-red-600"/>
                                                    </div>
                                                    <h4 className="text-[12px] text-red-600 mt-1">
                                                        Please complete this field.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="input_box mt-4">
                                                <div
                                                    className="block w-full lg:flex gap-2 items-center justify-between">
                                                    <div className="one w-full">
                                                        <label htmlFor="city" className="text-[14px] font-normal">
                                                            City
                                                        </label><br/>
                                                        <input
                                                            type="text"
                                                            className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                            placeholder="Fresno"
                                                        />
                                                        <div className="warning mt-1 flex items-center gap-1">
                                                            <div className="icon">
                                                                <GoAlertFill size={12} className="text-red-600"/>
                                                            </div>
                                                            <h4 className="text-[12px] text-red-600 mt-1">
                                                                Please complete this field.
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="two w-full mt-4 lg:mt-0">
                                                        <label htmlFor="zip" className="text-[14px] font-normal">
                                                            Zip
                                                        </label><br/>
                                                        <input
                                                            type="text"
                                                            className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                            placeholder="93722"
                                                        />
                                                        <div className="warning mt-1 flex items-center gap-1">
                                                            <div className="icon">
                                                                <GoAlertFill size={12} className="text-red-600"/>
                                                            </div>
                                                            <h4 className="text-[12px] text-red-600 mt-1">
                                                                Please complete this field.
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="state" className="text-[14px] font-normal">
                                                    State
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="California"
                                                />
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="carrier" className="text-[14px] font-normal">
                                                    Shipping Carrier & Rate
                                                </label><br/>
                                                <div className="flex text-[12px] items-center justify-start mt-1">
                                                    {/* FilterStoreTab dropdown */}
                                                    <div ref={dropdownFilterStoreTabRef}
                                                         onClick={toggleDropdownFilterStoreTab}
                                                         className="filter_dropdown_checkout z-20 cursor-pointer relative w-full ">
                                                        <div
                                                            className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                                            <input value={selectedOptionFilterStoreTab} name="select"
                                                                   id="select"
                                                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                                   readOnly/>
                                                            <button type='button'
                                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                                <RiArrowDropDownLine size={25}/>
                                                            </button>
                                                        </div>

                                                        {isOpenDropdownFilterStoreTab && (
                                                            <div
                                                                className="absolute rounded shadow bg-white overflow-hidden w-full  mt-1 border border-gray-200">
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("UPS Ground 11.30")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        UPS Ground 11.30
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("UPS Ground 50.12")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        UPS Ground 50.12
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("UPS Ground 20.50")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        UPS Ground 20.50
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="warning mt-1 flex items-center gap-1">
                                                    <div className="icon">
                                                        <GoAlertFill size={12} className="text-red-600"/>
                                                    </div>
                                                    <h4 className="text-[12px] text-red-600 mt-1">
                                                        Please complete this field.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="carrier" className="text-[14px] font-normal">
                                                    Payment
                                                </label><br/>
                                                <Checkbox className="mt-1">
                                                    Save information to pay faster next time
                                                </Checkbox>
                                            </div>
                                            <div className="button_box w-full mt-4">
                                                <button type='button'
                                                        className="w-full  py-2 px-8 text-[14px] bg-primary text-white rounded border border-primary hover:border-primary hover:bg-transparent hover:text-primary transition">
                                                    Pay Now
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col lg:col-span-5">
                            <div className="sticky top-[58px]">
                                <div className="mt-0 lg:mt-[54px] box py-4 px-6 bg-white rounded">
                                    {/* Product Area */}
                                    <div className="product_wrap space-y-3">
                                        {loading ? (
                                            <Skeleton height={20} count={1}/>
                                        ) : (
                                            <>
                                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                                    Order Summary
                                                </h4>
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
                                                        <h4 className="text-[14px] group-hover:text-primary text-prgcolor">T-Shirt</h4>
                                                        <h4 className="text-[12px] text-graycolor">$450.00</h4>
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
                                                        <h4 className="text-[14px] group-hover:text-primary text-prgcolor">Polo
                                                            Shirt</h4>
                                                        <h4 className="text-[12px] text-graycolor">$320.00</h4>
                                                    </div>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                    <div className="mt-6 space-y-2">
                                        <hr/>
                                        {loading ? (
                                            <div className="pt-2">
                                                <Skeleton height={20} count={3}/>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="pt-2 flex items-center justify-between">
                                                    <h4 className="text-graycolor text-[14px]">Items price:</h4>
                                                    <h4 className="text-prgcolor font-[500] text-[14px]">$1189.00</h4>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-graycolor text-[14px]">Shipping:</h4>
                                                    <h4 className="text-prgcolor font-[500] text-[14px]">$11.31</h4>
                                                </div>
                                                <div className="flex items-center justify-between text-[14px]">
                                                    <h4 className="text-primary font-semibold">Total:</h4>
                                                    <h4 className="text-primary font-semibold">$1200.31</h4>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                {loading ? (
                                    <div className="py-3">
                                        <Skeleton height={20} count={1}/>
                                    </div>
                                ) : (
                                    <>
                                        <div className="py-3 flex it gap-1">
                                            <CiLock size={18} className="text-graycolor"/>
                                            <h4 className="text-[14px] text-graycolor">
                                                Your transaction is secured with SSL encryption.
                                            </h4>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;