"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import 'react-international-phone/style.css';
import Image from "next/image";
import {RiArrowDropDownLine} from "react-icons/ri";
import {RxCross1} from "react-icons/rx";
import {HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";
import {HiUserCircle} from "react-icons/hi";
import {FaArrowRight} from "react-icons/fa6";

function Page() {
    useTitle("Create store")
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
    return (
        <>
            <section id="checkout-section">
                <div className="container pt-[50px] pb-[50px] lg:pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="col lg:col-span-7">
                            <div className="header_wrap mt-4">
                                {loading ? (
                                    <div className='pb-0'>
                                        <Skeleton height={20} count={2}/>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-[20px]">
                                            Create a Store
                                        </h4>
                                        <h4 className="text-[14px] text-graycolor">
                                            View and manage all your listings effortlessly. Easily find listings using
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
                                                    Store Name
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="Store name"
                                                />
                                                <h4 className="text-[12px] text-graycolor mt-1">
                                                    You have 150 characters left.
                                                </h4>
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="location" className="text-[14px]">
                                                    Location
                                                </label><br/>
                                                <input
                                                    type="text"
                                                    className="mt-1 py-1 pl-4 w-full border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                                    placeholder="Location"
                                                />
                                            </div>
                                            <div className="input_box mt-4">
                                                <label htmlFor="carrier" className="text-[14px]">
                                                    Category
                                                </label><br/>
                                                <div className="flex text-[12px] items-center justify-start mt-1">
                                                    {/* FilterStoreTab dropdown */}
                                                    <div ref={dropdownFilterStoreTabRef}
                                                         onClick={toggleDropdownFilterStoreTab}
                                                         className="filter_dropdown_checkout z-20 cursor-pointer relative w-full">
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
                                        </form>
                                    </>
                                )}
                            </div>

                            <div className="mt-4 box py-4 px-6 bg-white rounded">
                                {loading ? (
                                    <div>
                                        <Skeleton height={20} count={1}/>
                                        <Skeleton height={80} count={1}/>
                                        <Skeleton height={30} count={1}/>
                                    </div>
                                ) : (
                                    <>
                                        <div className="block lg:flex pt-1 items-center justify-start gap-2">
                                            <h4 className="text-[16px] w-[250px] text-prgcolor">
                                                Payment Information
                                            </h4>
                                            <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>
                                        </div>

                                        <div className="mt-4 pb-2">
                                            <h4 className="text-[14px] font-[500]">
                                                Stripe Connection
                                            </h4>
                                            <h4 className="text-[14px] mt-2 text-graycolor">
                                                Before you can sell on Nosres Marketplace, you need to have a Stripe
                                                account. You can link an existing account or create a new one. It’s fast
                                                and easy!
                                            </h4>
                                            <button type='button'
                                                    className="text-[14px] py-2 px-6 bg-primary text-white border border-primary rounded mt-4 hover:text-primary hover:bg-transparent transition">
                                                Connect Account
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col lg:col-span-5">
                            <div className="sticky">
                                <div className="mt-0 lg:mt-[75px] box py-4 px-6 bg-white rounded">
                                    {/* Cover Image */}
                                    {/*<div className="cover_image_wrap">*/}
                                    {/*    {loading ? (*/}
                                    {/*        <Skeleton height={20} count={1}/>*/}
                                    {/*    ) : (*/}
                                    {/*        <>*/}
                                    {/*            <h4 className="text-[14px] font-500 mb-2">*/}
                                    {/*                Cover*/}
                                    {/*            </h4>*/}
                                    {/*        </>*/}
                                    {/*    )}*/}
                                    {/*    {loading ? (*/}
                                    {/*        <Skeleton height={200} count={1}/>*/}
                                    {/*    ) : (*/}
                                    {/*        <>*/}
                                    {/*            <div className="flex mt-2 items-center justify-between">*/}
                                    {/*                <div className="left">*/}
                                    {/*                    {selectedFileCover ? (*/}
                                    {/*                        <div className="mb-4 relative inline-block">*/}
                                    {/*                            <Image*/}
                                    {/*                                src={URL.createObjectURL(selectedFileCover)}*/}
                                    {/*                                width={100}*/}
                                    {/*                                height={100}*/}
                                    {/*                                alt="Uploaded Preview"*/}
                                    {/*                                className="w-full h-full object-cover rounded"*/}
                                    {/*                            />*/}
                                    {/*                            <button*/}
                                    {/*                                className="absolute top-0 right-0 -mt-2 -mr-2 p-1 bg-gray-100 hover:bg-red-600 group rounded-full"*/}
                                    {/*                                onClick={handleRemoveClickCover}*/}
                                    {/*                            >*/}
                                    {/*                                <RxCross1 size={15}*/}
                                    {/*                                          className="text-primary group-hover:text-white"/>*/}
                                    {/*                            </button>*/}
                                    {/*                        </div>*/}
                                    {/*                    ) : (*/}
                                    {/*                        <div>*/}

                                    {/*                        </div>*/}
                                    {/*                    )}*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="image-upload mt-4">*/}
                                    {/*                <div className="flex items-center justify-center mt-3 w-full">*/}
                                    {/*                    <label htmlFor="dropzone-file"*/}
                                    {/*                           className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">*/}
                                    {/*                        <div*/}
                                    {/*                            className="flex flex-col items-center justify-center pt-5 pb-6">*/}
                                    {/*                            <HiOutlineCloudArrowUp*/}
                                    {/*                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>*/}
                                    {/*                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span*/}
                                    {/*                                className="font-semibold">Click to upload</span> or*/}
                                    {/*                                drag and*/}
                                    {/*                                drop</p>*/}
                                    {/*                            <h4 className="text-[12px] text-gray-500 dark:text-gray-400">*/}
                                    {/*                                .svg, .png, .jpg, or .gif (max. 800 x 400 px)*/}
                                    {/*                            </h4>*/}
                                    {/*                        </div>*/}
                                    {/*                        <input id="dropzone-file" type="file" className="hidden"*/}
                                    {/*                               onChange={(event) => handleFileChangeCover(event)}*/}
                                    {/*                               ref={fileInputRefCover}*/}
                                    {/*                        />*/}
                                    {/*                    </label>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </>*/}
                                    {/*    )}*/}
                                    {/*</div>*/}

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
                                                    <Skeleton width={50} height={50} borderRadius="100%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
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
                                                        <button className="text-primary text-[14px]">Remove</button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="image-upload mt-4">
                                            {loading ? (
                                                <Skeleton height={200} count={1}/>
                                            ) : (
                                                <>
                                                    <div className="flex items-center justify-center mt-3 w-full">
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
                                                                    .svg, .png, .jpg, or .gif (max. 800 x 400 px)
                                                                </h4>
                                                            </div>
                                                            <input id="dropzone-files" type="file" className="hidden"
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
            </section>
        </>
    )
        ;
}

export default Page;