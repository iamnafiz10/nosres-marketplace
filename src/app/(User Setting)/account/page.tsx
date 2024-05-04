"use client";
import React, {useEffect, useRef, useState} from 'react';
import useTitle from "@/app/useTitle";
import Link from "next/link";
import {HiOutlineMenuAlt3, HiUserCircle} from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";

function Page() {
    useTitle("Account")
    const loading = useLoading();

    // 👇️ Toggle class on click Show And Hide Mobile Menu Dropdown (Icon)
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
    const dropdownMobileMenuRef = useRef(null);
    const handleMobileMenuClick = () => {
        setMobileMenuVisible(!isMobileMenuVisible);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (dropdownMobileMenuRef.current && !dropdownMobileMenuRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setMobileMenuVisible(false);
            }
        };

        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <>
            <section id="account-page-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Left Sidebar */}
                        <div className="col lg:col-span-2"></div>

                        {/* Body Content */}
                        <div className="col lg:col-span-7 ml-0 lg:ml-10 mt-1">
                            {/* Mobile Header Start*/}
                            <div
                                className="mobile_header pb-2 flex lg:hidden items-center text-[18px] font-[500] text-prgcolor rounded-lg">
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24
                                                             24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M12.22 2h-.44a2 2 0
                                                            0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0
                                                            0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1
                                                            1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2
                                                            0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1
                                                            1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0
                                                            0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0
                                                            .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0
                                                            1-1-1.73V4a2 2 0 0 0-2-2z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                                <span className="ms-3">Setting</span>
                            </div>

                            <div className="mt-4 flex lg:hidden items-center justify-between">
                                <div className="flex items-center text-[16px] text-prgcolor font-normal rounded-lg">
                                    <HiUserCircle
                                        className="w-[22px] h-[22px] text-[#6B7280] transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-2">Account</span>
                                </div>

                                <div className="dropdown inline-block relative">
                                    <div className="dropdown inline-block relative">
                                        <div onClick={handleMobileMenuClick}
                                             ref={dropdownMobileMenuRef}
                                             className="drop_icon relative cursor-pointer group">
                                            <HiOutlineMenuAlt3
                                                size={22}
                                                className={`group-hover:text-primary ${isMobileMenuVisible ? 'text-primary' : 'text-graycolor'}`}/>
                                        </div>
                                        {isMobileMenuVisible &&
                                            <div
                                                id="mobile_dropdown_menu_user_dashboard"
                                                className="business-dropdown-menu cursor-auto absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                                <div className="container">
                                                    <ul className="mt-3 space-y-0 text-[14px]">
                                                        <li>
                                                            <Link href="#"
                                                                  className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                                <HiUserCircle
                                                                    className="w-[22px] h-[22px] text-[#6B7280] transition duration-75 group-hover:text-primary"/>
                                                                <span className="ms-3">Account</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"
                                                                  className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                                <svg
                                                                    className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24
                                                             24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="M6 8a6 6 0 0 1 12 0c0 7
                                                            3 9 3 9H3s3-2 3-9"/>
                                                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                                                                </svg>
                                                                <span className="ms-3">Notifications</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"
                                                                  className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                                     viewBox="0 0 24
                                                             24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                                     strokeLinecap="round"
                                                                     strokeLinejoin="round">
                                                                    <path d="M20 13c0 5-3.5
                                                            7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2
                                                            6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                                                </svg>
                                                                <span className="ms-3">Privacy</span>
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link href="#"
                                                                  className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                                <svg
                                                                    className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24
                                                             24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <circle cx="12" cy="12"
                                                                            r="10"/>
                                                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                                                    <path d="M12
                                                            17h.01"/>
                                                                </svg>
                                                                <span className="ms-3">Marketplace Support</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Mobile Header End*/}

                            {/* Page Header */}
                            {loading ? (
                                <>
                                    <Skeleton height={30} count={1}/>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="page_header hidden lg:flex items-center text-[16px] text-prgcolor font-normal rounded-lg">
                                        <HiUserCircle
                                            className="w-[22px] h-[22px] text-[#6B7280] transition duration-75 group-hover:text-primary"/>
                                        <span className="ms-2">Account</span>
                                    </div>
                                </>
                            )}
                            <div className="py-1 lg:py-4">
                                <hr/>
                            </div>

                            <div className="content_wrapper text-center mt-2 lg:mt-0">
                                {loading ? (
                                    <>
                                        <Skeleton height={200} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            className="box px-4 py-6 bg-white rounded flex flex-col items-center justify-center">

                                            <div
                                                className="icon_box flex flex-col items-center justify-center text-center">
                                                <HiUserCircle size={70} className="text-primary"/>
                                                <h4 className="text-prgcolor font-semibold mt-1 text-[16px]">
                                                    Account
                                                </h4>
                                            </div>
                                            <p className="mt-2 text-graycolor text-[14px]">
                                                You’re logging into Nosres Marketplace with your Nosres Account. If
                                                you need to adjust certain settings, please navigate to your Nosres
                                                Account.
                                            </p>
                                            <button type="button"
                                                    className="mt-4 py-2 px-8 text-[14px] bg-gray-100 text-primary hover:bg-primary hover:text-white rounded">
                                                Nosres Account Settings
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-3 hidden lg:block ml-7 mr-[22px]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;