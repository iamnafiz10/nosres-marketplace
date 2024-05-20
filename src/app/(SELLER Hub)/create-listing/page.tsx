"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import {RiArrowDropDownLine} from "react-icons/ri";
import {HiOutlineCloudArrowUp} from "react-icons/hi2";
import {FaArrowRight} from "react-icons/fa6";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import {IoLogoUsd} from "react-icons/io";
import {Checkbox} from "antd";
import Image from "next/image";
import {RxCross1} from "react-icons/rx";

function Page() {
    useTitle("Create listing")
    const loading = useLoading();
    // Phone dropdown
    const [phone, setPhone] = useState('');

    //----------- FilterStoreTab Dropdown Start --------------//
    const [isOpenDropdownFilterStoreTab, setIsOpenDropdownFilterStoreTab] = useState(false);
    const [selectedOptionFilterStoreTab, setSelectedOptionFilterStoreTab] = useState("Select"); // State to store the selected option
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

    //----------- FilterSubcatTab Dropdown Start --------------//
    const [isOpenDropdownFilterSubcatTab, setIsOpenDropdownFilterSubcatTab] = useState(false);
    const [selectedOptionFilterSubcatTab, setSelectedOptionFilterSubcatTab] = useState("Select"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterSubcatTab = () => {
        setIsOpenDropdownFilterSubcatTab(!isOpenDropdownFilterSubcatTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterSubcatTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterSubcatTab(option);
        setIsOpenDropdownFilterSubcatTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterSubcatTabRef = useRef(null);
    const handleClickOutsideFilterSubcatTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterSubcatTabRef.current && !dropdownFilterSubcatTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterSubcatTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterSubcatTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterSubcatTab);
        };
    }, []);
    //----------- FilterSubcatTab Dropdown End --------------//


    //----------- FilterConditionTab Dropdown Start --------------//
    const [isOpenDropdownFilterConditionTab, setIsOpenDropdownFilterConditionTab] = useState(false);
    const [selectedOptionFilterConditionTab, setSelectedOptionFilterConditionTab] = useState("Select"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterConditionTab = () => {
        setIsOpenDropdownFilterConditionTab(!isOpenDropdownFilterConditionTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterConditionTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterConditionTab(option);
        setIsOpenDropdownFilterConditionTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterConditionTabRef = useRef(null);
    const handleClickOutsideFilterConditionTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterConditionTabRef.current && !dropdownFilterConditionTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterConditionTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterConditionTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterConditionTab);
        };
    }, []);
    //----------- FilterConditionTab Dropdown End --------------//


    // Images Upload Function
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = event.target.files;
        if (files) {
            const fileList = Array.from(files);
            setSelectedFiles([...selectedFiles, ...fileList]);
        }
    };

    const handleRemoveClick = (index: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    };

    const handleCancelClick = () => {
        setSelectedFiles([]);
    };

    const handleSaveClick = () => {
        setSelectedFiles([]);
    };
    return (
        <>
            <section id="create-listing-section">
                <div className="w-full pt-[50px] pb-20 lg:pb-8">
                    <div className="ml-0 lg:ml-[295px]">
                        <div className="mx-5">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="col lg:col-span-7">
                                    <div className="header_wrap mt-4">
                                        {loading ? (
                                            <div className='pb-0'>
                                                <Skeleton height={20} count={2}/>
                                            </div>
                                        ) : (
                                            <>
                                                <h4 className="text-[20px]">
                                                    Create Listing
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">
                                                    View and manage all your listings effortlessly. Easily find listings
                                                    using
                                                    the search feature.
                                                </h4>
                                            </>
                                        )}
                                    </div>
                                    <div className="mt-2 box py-4 px-6 bg-white rounded">
                                        {loading ? (
                                            <div>
                                                <Skeleton height={20} count={3}/>
                                                <Skeleton height={5} count={1}/>
                                                <Skeleton height={40} count={4}/>
                                                <Skeleton height={30} count={5}/>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="block lg:flex pt-1 items-center justify-start gap-2">
                                                    <h4 className="text-[16px] w-[200px] text-prgcolor">
                                                        General Information
                                                    </h4>
                                                    <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>
                                                </div>

                                                {/* Form Area */}
                                                <form action="#" className="mt-4 pb-4">
                                                    <div className="input_box">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Product Title
                                                        </label><br/>
                                                        <input
                                                            type="text"
                                                            className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                            placeholder="Product Title"
                                                        />
                                                        <h4 className="text-[12px] text-graycolor mt-1">
                                                            You have 150 characters left.
                                                        </h4>
                                                    </div>
                                                    <div className="input_box mt-4">
                                                        <label htmlFor="location" className="text-[14px]">
                                                            Description
                                                        </label><br/>
                                                        <textarea cols={30} rows={3} placeholder="Description"
                                                                  className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"></textarea>
                                                        <h4 className="text-[12px] text-graycolor mt-1">
                                                            You have 150 characters left.
                                                        </h4>
                                                    </div>
                                                    <div className="input_box mt-4">
                                                        <label htmlFor="carrier" className="text-[14px]">
                                                            Category
                                                        </label><br/>
                                                        <div
                                                            className="flex text-[12px] items-center justify-start mt-1">
                                                            {/* FilterStoreTab dropdown */}
                                                            <div ref={dropdownFilterStoreTabRef}
                                                                 onClick={toggleDropdownFilterStoreTab}
                                                                 className="filter_dropdown_checkout z-30 cursor-pointer relative w-full">
                                                                <div
                                                                    className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                                                    <input value={selectedOptionFilterStoreTab}
                                                                           name="select"
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
                                                                        className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterStoreTab("Select")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Select
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterStoreTab("Electronics")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Electronics
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterStoreTab("T-Shirt")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                T-Shirt
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="input_box mt-4">
                                                        <label htmlFor="carrier" className="text-[14px]">
                                                            Sub Category
                                                        </label><br/>
                                                        <div
                                                            className="flex text-[12px] items-center justify-start mt-1">
                                                            {/* FilterStoreTab dropdown */}
                                                            <div ref={dropdownFilterSubcatTabRef}
                                                                 onClick={toggleDropdownFilterSubcatTab}
                                                                 className="filter_dropdown_checkout z-20 cursor-pointer relative w-full">
                                                                <div
                                                                    className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                                                    <input value={selectedOptionFilterSubcatTab}
                                                                           name="select"
                                                                           id="select"
                                                                           className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                                           readOnly/>
                                                                    <button type='button'
                                                                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                                        <RiArrowDropDownLine size={25}/>
                                                                    </button>
                                                                </div>

                                                                {isOpenDropdownFilterSubcatTab && (
                                                                    <div
                                                                        className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterSubcatTab("Select")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Select
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterSubcatTab("Sub Category One")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Sub Category One
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterSubcatTab("Sub Category Two")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Sub Category Two
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="mt-6 block lg:flex pt-1 items-center justify-start gap-2">
                                                        <h4 className="text-[16px] w-[200px] text-prgcolor">
                                                            Product Details
                                                        </h4>
                                                        <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>
                                                    </div>
                                                    <div className="input_box mt-4">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Price
                                                        </label><br/>

                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                                placeholder="Price"
                                                            />
                                                            <IoLogoUsd size={14}
                                                                       className="text-[#D1D5DB] absolute right-1 top-[14.5px]"/>
                                                        </div>
                                                    </div>
                                                    <div className="input_box mt-4">
                                                        <label htmlFor="carrier" className="text-[14px]">
                                                            Condition
                                                        </label><br/>
                                                        <div
                                                            className="flex text-[12px] items-center justify-start mt-1">
                                                            {/* FilterStoreTab dropdown */}
                                                            <div ref={dropdownFilterConditionTabRef}
                                                                 onClick={toggleDropdownFilterConditionTab}
                                                                 className="filter_dropdown_checkout z-20 cursor-pointer relative w-full">
                                                                <div
                                                                    className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                                                    <input value={selectedOptionFilterConditionTab}
                                                                           name="select"
                                                                           id="select"
                                                                           className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                                           readOnly/>
                                                                    <button type='button'
                                                                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                                        <RiArrowDropDownLine size={25}/>
                                                                    </button>
                                                                </div>

                                                                {isOpenDropdownFilterConditionTab && (
                                                                    <div
                                                                        className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterConditionTab("Select")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Select
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterConditionTab("Brand New")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Brand New
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterConditionTab("New")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                New
                                                                            </div>
                                                                        </div>
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => handleOptionSelectFilterConditionTab("Refurbished")}>
                                                                            <div
                                                                                className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                                Refurbished
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input_box mt-4">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Brand
                                                        </label><br/>
                                                        <input
                                                            type="text"
                                                            className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                            placeholder="Brand"
                                                        />
                                                    </div>


                                                    <div
                                                        className="mt-6 block lg:flex pt-1 items-center justify-start gap-2">
                                                        <h4 className="text-[16px] w-[200px] text-prgcolor">
                                                            Shipping
                                                        </h4>
                                                        <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>
                                                    </div>
                                                    <div className="input_box mt-4">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Your Location
                                                        </label><br/>
                                                        <input
                                                            type="text"
                                                            className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                            placeholder="Location"
                                                        />
                                                    </div>

                                                    <div className="input_box mt-4">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Shipping method
                                                        </label><br/>
                                                        <Checkbox className="mt-1">
                                                            Ship Only
                                                        </Checkbox><br/>
                                                        <Checkbox className="mt-1">
                                                            Click & Collect
                                                        </Checkbox>
                                                    </div>

                                                    <div className="input_box mt-4">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Dimensions <span
                                                            className="text-graycolor">(optional)</span>
                                                        </label><br/>
                                                        <div className="flex items-center gap-1">
                                                            <input
                                                                type="text"
                                                                className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                                placeholder="cm"
                                                            />
                                                            <h4 className="text-graycolor text-[16px]">X</h4>
                                                            <input
                                                                type="text"
                                                                className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                                placeholder="cm"
                                                            />
                                                            <h4 className="text-graycolor text-[16px]">X</h4>
                                                            <input
                                                                type="text"
                                                                className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                                placeholder="cm"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="input_box mt-4 pb-2">
                                                        <label htmlFor="full_name" className="text-[14px]">
                                                            Width <span className="text-graycolor">(optional)</span>
                                                        </label><br/>
                                                        <input
                                                            type="text"
                                                            className="mt-1 py-1 pl-4 w-full lg:w-[175px] border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                            placeholder="kg"
                                                        />
                                                    </div>
                                                    <hr/>
                                                    <div className="input_box mt-4 pb-2">
                                                        <button type='button'
                                                                className="py-2 px-4 group flex items-center gap-2 border rounded text-[14px] hover:bg-primary hover:text-white transition">
                                                            <svg
                                                                className="w-5 h-5 text-[#828D9E] group-hover:text-white"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round">
                                                                <path
                                                                    d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
                                                                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/>
                                                                <path d="M7 3v4a1 1 0 0 0 1 1h7"/>
                                                            </svg>
                                                            Save Draft
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col lg:col-span-5">
                                    <div className="sticky">
                                        {loading ? (
                                            <div className="mt-[70px]">
                                                <Skeleton height={20} count={1}/>
                                                <Skeleton height={130} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="mt-0 lg:mt-[95px] box pt-4 px-6 bg-white rounded">
                                                    {/* Images */}
                                                    <div className="images_wrap mt-0">
                                                        <h4 className="text-[14px] font-500 mb-2">
                                                            Images
                                                        </h4>
                                                        <div className="image-upload">
                                                            <div className="flex items-center justify-center w-full">
                                                                <label
                                                                    htmlFor="dropzone-file"
                                                                    className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100"
                                                                >
                                                                    <div
                                                                        className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                        <HiOutlineCloudArrowUp
                                                                            className="w-8 h-8 mb-4 text-gray-500"/>
                                                                        <p className="mb-2 text-sm text-gray-500">
                                                                    <span
                                                                        className="font-semibold">Click to upload</span> or
                                                                            drag and drop
                                                                        </p>
                                                                        <h4 className="text-[14px] text-gray-500">
                                                                            .svg, .png, .jpg, or .gif (max. 800 x 400
                                                                            px)
                                                                        </h4>
                                                                    </div>
                                                                    <input
                                                                        id="dropzone-file"
                                                                        type="file"
                                                                        className="hidden"
                                                                        onChange={(event) => handleFileChange(event)}
                                                                        ref={fileInputRef}
                                                                        multiple // Allow multiple file selection
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/* Image View */}
                                                        <div className="flex mt-4 items-center justify-between">
                                                            <div className="left grid grid-cols-3 gap-2">
                                                                {selectedFiles.length > 0 ? (
                                                                    selectedFiles.map((file, index) => (
                                                                        <div key={index}
                                                                             className="mb-4 relative inline-block">
                                                                            <Image
                                                                                src={URL.createObjectURL(file)}
                                                                                width={100}
                                                                                height={100}
                                                                                alt={`Uploaded Preview ${index}`}
                                                                                className="w-[110px] h-[110px] object-cover rounded"
                                                                            />
                                                                            <button
                                                                                className="absolute top-0 right-0 -mt-2 -mr-2 p-1 bg-gray-100 hover:bg-red-600 group rounded-full"
                                                                                onClick={() => handleRemoveClick(index)}
                                                                            >
                                                                                <RxCross1 size={15}
                                                                                          className="text-primary group-hover:text-white"/>
                                                                            </button>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div>

                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Buttons */}
                            {loading ? (
                                <div className="mt-5">
                                    <Skeleton height={50} count={1}/>
                                </div>
                            ) : (
                                <>
                                    <div
                                        className="block lg:flex items-center justify-between bg-white rounded py-4 px-6 mt-5">
                                        <button type='button'
                                                className="py-2 px-6 bg-gray-100 hover:bg-primary hover:text-white border text-[14px] rounded">
                                            Cancel
                                        </button>
                                        <div className="wrap flex items-center gap-2 mt-2 lg:mt-0">
                                            <button type='button'
                                                    className="py-2 px-6 flex group items-center gap-2 hover:bg-primary hover:text-white border text-[14px] rounded">
                                                <svg
                                                    className="w-4 h-4 text-[#828D9E] group-hover:text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                                    <circle cx="12" cy="12" r="3"/>
                                                </svg>
                                                Preview
                                            </button>
                                            <button type='button'
                                                    className="py-2 px-6 text-white flex items-center gap-2 bg-primary hover:bg-transparent hover:text-primary hover:bg-primary border text-[14px] rounded">
                                                Publish
                                                <FaArrowRight size={15}/>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;