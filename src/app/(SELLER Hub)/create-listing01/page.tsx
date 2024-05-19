"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import {RiArrowDropDownLine} from "react-icons/ri";
import {HiUserCircle} from "react-icons/hi";
import {HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";
import {FaArrowRight} from "react-icons/fa6";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import {IoLogoUsd} from "react-icons/io";
import {Checkbox} from "antd";

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


    // Logo Image Upload Function
    const fileInputRefLogo = useRef<HTMLInputElement | null>(null);
    const [selectedFileLogo, setSelectedFileLogo] = useState<File | null>(null);
    const handleFileChangeLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        setSelectedFileLogo(file);
    };
    const handleRemoveClickLogo = () => {
        setSelectedFileLogo(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRefLogo.current) {
            fileInputRefLogo.current.value = '';
        }
    };
    return (
        <>
            <section id="create-listing-section">
                <div className="w-full pt-[50px] pb-20">
                    <div className="ml-0 lg:ml-[295px]">
                        <div className="mx-5">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                <div className="col lg:col-span-8">
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
                                                </form>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col lg:col-span-4">
                                    <div className="sticky">
                                        <div className="mt-0 lg:mt-[75px] box py-4 px-6 bg-white rounded">
                                            {/* Logo Image */}
                                            <div className="logo_image_wrap mt-0">
                                                {loading ? (
                                                    <Skeleton height={20} count={1}/>
                                                ) : (
                                                    <>
                                                        <h4 className="text-[14px] font-500 mb-2">
                                                            Logo
                                                        </h4>
                                                    </>
                                                )}
                                                <div className="flex mt-2 items-center justify-between">
                                                    {loading ? (
                                                        <div className="flex items-center justify-start gap-2 w-full">
                                                            <Skeleton width={50} height={50} borderRadius="100%"
                                                                      count={1}/>
                                                            <Skeleton containerClassName="flex-1" height={50}
                                                                      count={1}/>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="left">
                                                                {selectedFileLogo ? (
                                                                    <img
                                                                        src={URL.createObjectURL(selectedFileLogo)}
                                                                        alt="Uploaded Preview"
                                                                        className="w-20 h-20 object-cover rounded-full"
                                                                    />
                                                                ) : (
                                                                    <HiUserCircle className="w-20 h-20 text-primary"/>
                                                                )}
                                                            </div>
                                                            <div onClick={handleRemoveClickLogo}
                                                                 className="right cursor-pointer flex gap-1 items-center">
                                                                <HiOutlineMinusCircle className="text-primary"/>
                                                                <button className="text-primary text-[14px]">Remove
                                                                </button>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="image-upload mt-4">
                                                    {loading ? (
                                                        <Skeleton height={200} count={1}/>
                                                    ) : (
                                                        <>
                                                            <div
                                                                className="flex items-center justify-center mt-3 w-full">
                                                                <label htmlFor="dropzone-files"
                                                                       className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                                    <div
                                                                        className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                        <HiOutlineCloudArrowUp
                                                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span
                                                                            className="font-semibold">Click to upload</span> or
                                                                            drag and
                                                                            drop</p>
                                                                        <h4 className="text-[12px] text-gray-500 dark:text-gray-400">
                                                                            .svg, .png, .jpg, or .gif (max. 800 x 400
                                                                            px)
                                                                        </h4>
                                                                    </div>
                                                                    <input id="dropzone-files" type="file"
                                                                           className="hidden"
                                                                           onChange={(event) => handleFileChangeLogo(event)}
                                                                           ref={fileInputRefLogo}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
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
                                    <div className="flex items-center justify-between bg-white rounded py-4 px-6 mt-5">
                                        <button type='button'
                                                className="py-2 px-6 bg-gray-100 hover:bg-primary hover:text-white border text-[14px] rounded">
                                            Cancel
                                        </button>
                                        <button type='button'
                                                className="py-2 px-6 text-white flex items-center gap-2 bg-primary hover:bg-transparent hover:text-primary hover:bg-primary border text-[14px] rounded">
                                            Create
                                            <FaArrowRight size={15}/>
                                        </button>
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