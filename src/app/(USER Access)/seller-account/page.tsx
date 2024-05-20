"use client";
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import {RiArrowDropDownLine} from "react-icons/ri";
import {HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";
import {FaArrowRight} from "react-icons/fa6";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import {ImAttachment} from "react-icons/im";

function Page() {
    useTitle("Seller account")
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


    //----------- FilterBusinessTab Dropdown Start --------------//
    const [isOpenDropdownFilterBusinessTab, setIsOpenDropdownFilterBusinessTab] = useState(false);
    const [selectedOptionFilterBusinessTab, setSelectedOptionFilterBusinessTab] = useState("Select"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterBusinessTab = () => {
        setIsOpenDropdownFilterBusinessTab(!isOpenDropdownFilterBusinessTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterBusinessTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterBusinessTab(option);
        setIsOpenDropdownFilterBusinessTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterBusinessTabRef = useRef(null);
    const handleClickOutsideFilterBusinessTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterBusinessTabRef.current && !dropdownFilterBusinessTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterBusinessTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterBusinessTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterBusinessTab);
        };
    }, []);
    //----------- FilterBusinessTab Dropdown End --------------//

    // Cover Image Upload Function
    const fileInputRefCover = useRef<HTMLInputElement | null>(null);
    const [selectedFileCover, setSelectedFileCover] = useState<File | null>(null);
    const handleFileChangeCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        setSelectedFileCover(file);
    };
    const handleRemoveClickCover = () => {
        setSelectedFileCover(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRefCover.current) {
            fileInputRefCover.current.value = '';
        }
    };

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

    // File Upload Function
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
    };
    const handleRemoveClick = () => {
        setSelectedFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    return (
        <>
            <section id="seller-account-section">
                <div className="container pt-[50px] pb-[50px] lg:pb-8">
                    <div className="header_wrap my-4">
                        {loading ? (
                            <div className='pb-0'>
                                <Skeleton height={20} count={2}/>
                            </div>
                        ) : (
                            <>
                                <h4 className="text-[20px]">
                                    Create a Nosres Seller Account
                                </h4>
                                <h4 className="text-[14px] text-graycolor">
                                    Please submit your application using the secure online form below. If your
                                    application fits our criteria, we will contact you within 5 business days.
                                </h4>
                            </>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="col lg:col-span-7">
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
                                            <h4 className="text-[16px] w-[250px] text-prgcolor">
                                                Business Information
                                            </h4>
                                            <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>
                                        </div>

                                        {/* Form Area */}
                                        <form action="#" className="mt-4 pb-4">
                                            <div className="input_box">
                                                <label htmlFor="full_name" className="text-[14px]">
                                                    Business Name
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="Enter the business name as it appears on the business registration document."
                                                />
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="full_name" className="text-[14px]">
                                                    Registered Business Address
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="e.g., 1220 5th Ave, New York, NY"
                                                />
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="location" className="text-[14px]">
                                                    Company Registration Number
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="Company registration number"
                                                />
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="carrier" className="text-[14px]">
                                                    Industry
                                                </label><br/>
                                                <div className="flex text-[12px] items-center justify-start mt-1">
                                                    {/* FilterStoreTab dropdown */}
                                                    <div ref={dropdownFilterStoreTabRef}
                                                         onClick={toggleDropdownFilterStoreTab}
                                                         className="filter_dropdown_checkout z-30 cursor-pointer relative w-full">
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
                                                                className="absolute w-full h-[100px] overflow-y-auto rounded shadow bg-white overflow-hidden mt-1 border border-gray-200">
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Select")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Select
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Fashion and Apparel")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Fashion and Apparel
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Electronics and Gadgets")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Electronics and Gadgets
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Health and Beauty")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Health and Beauty
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Home Goods and Furniture")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Home Goods and Furniture
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Books and Media")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Books and Media
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Toys and Games")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Toys and Games
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Food and Beverage")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Food and Beverage
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Fitness and Sports Equipment")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Fitness and Sports Equipment
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Pet Supplies")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Pet Supplies
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Automotive Parts and Accessories")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Automotive Parts and Accessories
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Crafts and Handmade Goods")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Crafts and Handmade Goods
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Office Supplies and Equipment")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Office Supplies and Equipment
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Jewelry and Accessories")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Jewelry and Accessories
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Education and E-Learning")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Education and E-Learning
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Art and Collectibles")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Art and Collectibles
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Baby and Kids Products")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Baby and Kids Products
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Gardening and Outdoor Supplies")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Gardening and Outdoor Supplies
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Home Improvement and DIY")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Home Improvement and DIY
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Health and Medical Supplies")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Health and Medical Supplies
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Automotive Services")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Automotive Services
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Gifts and Flowers")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Gifts and Flowers
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Music Instruments and Equipment")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Music Instruments and Equipment
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterStoreTab("Green and Eco-Friendly Products")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Green and Eco-Friendly Products
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="input_box mt-4">
                                                <label htmlFor="carrier" className="text-[14px]">
                                                    Business Type
                                                </label><br/>
                                                <div className="flex text-[12px] items-center justify-start mt-1">
                                                    {/* FilterStoreTab dropdown */}
                                                    <div ref={dropdownFilterBusinessTabRef}
                                                         onClick={toggleDropdownFilterBusinessTab}
                                                         className="filter_dropdown_checkout z-20 cursor-pointer relative w-full">
                                                        <div
                                                            className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                                            <input value={selectedOptionFilterBusinessTab} name="select"
                                                                   id="select"
                                                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                                   readOnly/>
                                                            <button type='button'
                                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                                <RiArrowDropDownLine size={25}/>
                                                            </button>
                                                        </div>

                                                        {isOpenDropdownFilterBusinessTab && (
                                                            <div
                                                                className="absolute w-full h-[100px] overflow-y-auto rounded shadow bg-white overflow-hidden mt-1 border border-gray-200">
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Select")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Select
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Sole Proprietorship")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Sole Proprietorship
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Partnership")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Partnership
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Partnership")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Partnership
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Limited Liability Company (LLC)")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Limited Liability Company (LLC)
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Cooperative (Co-op)")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Cooperative (Co-op)
                                                                    </div>
                                                                </div>
                                                                <div className="cursor-pointer"
                                                                     onClick={() => handleOptionSelectFilterBusinessTab("Nonprofit Organization")}>
                                                                    <div
                                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                        Nonprofit Organization
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col lg:col-span-5">
                            <div className="sticky">
                                <div className="mt-0 lg:mt-[9px] box py-4 px-6 bg-white rounded">
                                    {loading ? (
                                        <div className="mt-0">
                                            <Skeleton height={10} count={1}/>
                                            <Skeleton height={20} count={1}/>
                                            <Skeleton height={200} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="document_box">
                                                <div className="flex mt-2 items-center justify-between">
                                                    <div className="left mt-0">
                                                        {selectedFile ? (
                                                            <p className="text-primary">{selectedFile.name}</p>
                                                        ) : (
                                                            <div className="flex items-center gap-1">
                                                                <ImAttachment size={15} className="text-gray-400"/>
                                                                <h6 className="text-[14px]">
                                                                    Jane Doe_Resume
                                                                </h6>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div onClick={handleRemoveClick}
                                                         className="right mt-0 cursor-pointer flex gap-1 items-center">
                                                        <HiOutlineMinusCircle className="text-primary"/>
                                                        <button className="text-primary text-[14px]">Remove</button>
                                                    </div>
                                                </div>

                                                <div className="image-upload mt-4">
                                                    <h4 className="text-[14px]">Document</h4>
                                                    <h4 className="text-[14px] text-graycolor">
                                                        Upload your business registration documents.
                                                    </h4>
                                                    <div className="flex items-center justify-center mt-3 w-full">
                                                        <label htmlFor="dropzone-file"
                                                               className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                            <div
                                                                className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <HiOutlineCloudArrowUp
                                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                                    className="font-semibold">Click to upload</span> or
                                                                    drag and
                                                                    drop</p>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                    Supported file formats: .pdf, .doc, .docx, .txt
                                                                </p>
                                                            </div>
                                                            <input
                                                                id="dropzone-file"
                                                                type="file"
                                                                accept=".pdf,.doc,.docx,.txt"
                                                                className="hidden"
                                                                onChange={handleFileChange}
                                                                ref={fileInputRef}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
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
                            <div
                                className="block lg:flex items-center justify-between bg-white rounded py-4 px-6 mt-5">
                                <button type='button'
                                        className="py-2 px-6 bg-gray-100 hover:bg-primary hover:text-white border text-[14px] rounded">
                                    Cancel
                                </button>
                                <button type='button'
                                        className="py-2 mt-2 lg:mt-0 px-6 text-white flex items-center gap-2 bg-primary hover:bg-transparent hover:text-primary hover:bg-primary border text-[14px] rounded">
                                    Submit
                                    <FaArrowRight size={15}/>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default Page;