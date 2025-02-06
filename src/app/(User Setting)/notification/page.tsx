"use client";
import React, {useEffect, useRef, useState} from 'react';
import useTitle from "@/app/useTitle";
import Link from "next/link";
import {HiOutlineMenuAlt3, HiUserCircle} from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import {FiEdit} from "react-icons/fi";
import {Modal} from "flowbite-react";
import {Radio, RadioChangeEvent} from "antd";
import {Checkbox} from 'antd';

function Page() {
    useTitle("Notifications")
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

    //----------------------- Modal Area ------------------------//
    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };

    // popup
    const [openStartOneModal, setOpenStartOneModal] = useState<boolean>(false);
    const [openStartTwoModal, setOpenStartTwoModal] = useState<boolean>(false);
    const [openStartThreeModal, setOpenStartThreeModal] = useState<boolean>(false);
    const [openStartFourModal, setOpenStartFourModal] = useState<boolean>(false);

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
                                    <span className="ms-2">Notifications</span>
                                </div>

                                <div className="dropdown inline-block relative">
                                    <div className="dropdown inline-block relative">
                                        <div onClick={handleMobileMenuClick}
                                             ref={dropdownMobileMenuRef}
                                             className="drop_icon relative cursor-pointer flex items-center gap-1 group">
                                            <HiOutlineMenuAlt3
                                                size={22}
                                                className={`group-hover:text-primary ${isMobileMenuVisible ? 'text-primary' : 'text-graycolor'}`}/>
                                            <h4 className="text-[14px] text-primary">More</h4>
                                        </div>
                                        {isMobileMenuVisible &&
                                            <div
                                                id="mobile_dropdown_menu_user_dashboard"
                                                className="business-dropdown-menu z-50 cursor-auto absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
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
                                        <span className="ms-1">Notifications</span>
                                    </div>
                                </>
                            )}
                            <div className="py-1 lg:py-4">
                                <hr/>
                            </div>

                            <div className="content_wrapper mt-2 lg:mt-0">
                                {/* Main Box */}
                                <div className="box px-6 py-4 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="box_header pb-2">
                                                <h4 className="text-[16px] text-prgcolor">Messages and Mentions</h4>
                                            </div>
                                        </>
                                    )}
                                    <hr/>

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Direct Messages
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive when someone sends you a direct
                                                        message.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle1"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle1" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Mantions
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive when someone mentions or tags you in a
                                                        post or
                                                        comment.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle2"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                        <span className="relative">
                                        <input id="Toggle2" type="checkbox" className="hidden peer"/>
                                        <div
                                            className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                        <div
                                            className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="box_header pb-2">
                                                <h4 className="text-[16px] text-prgcolor">Engagement on Your Posts</h4>
                                            </div>
                                        </>
                                    )}
                                    <hr/>

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Likes
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive when someone likes my posts.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle3"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle3" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Comments and Replies
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive when someone comments on your content
                                                        and
                                                        replies to your comments.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle4"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle4" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Shares
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive when someone shares any of your posts.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle5"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle5" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="box_header pb-2">
                                                <h4 className="text-[16px] text-prgcolor">Your Network</h4>
                                            </div>
                                        </>
                                    )}
                                    <hr/>

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        New Followers
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive when someone starts following me.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle6"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle6" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Updates from Your Network
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive about updates in your network.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle7"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle7" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Recommendations
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Notifications you receive about accounts you might like based on
                                                        what
                                                        you follow.
                                                    </h4>
                                                </div>

                                                <div className="toggle_wrap">
                                                    <label htmlFor="Toggle8"
                                                           className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle8" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    {loading ? (
                                        <>
                                            <Skeleton height={30} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div className="box_header pb-2">
                                                <h4 className="text-[16px] text-prgcolor">More Options</h4>
                                            </div>
                                        </>
                                    )}
                                    <hr/>

                                    {/*One*/}
                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Notification Frequency
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Choose how often you’d like to be updated about your activities
                                                        and interests.
                                                    </h4>
                                                </div>

                                                <div onClick={() => setOpenStartOneModal(true)}
                                                     className="icon_wrap cursor-pointer flex items-center gap-1">
                                                    <FiEdit size={15}
                                                            className="text-graycolor group-hover:text-primary"/>
                                                    <h4 className="text-[14px] text-primary">Edit</h4>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {/*Two*/}
                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Notification Channels
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Select how you’d like to receive notifications.
                                                    </h4>
                                                </div>

                                                <div onClick={() => setOpenStartTwoModal(true)}
                                                     className="icon_wrap cursor-pointer flex items-center gap-1">
                                                    <FiEdit size={15}
                                                            className="text-graycolor group-hover:text-primary"/>
                                                    <h4 className="text-[14px] text-primary">Edit</h4>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {/*Three*/}
                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Notification Priority
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Control the importance of notifications and ensure you don’t
                                                        miss what <br/>matters most.
                                                    </h4>
                                                </div>

                                                <div onClick={() => setOpenStartThreeModal(true)}
                                                     className="icon_wrap cursor-pointer flex items-center gap-1">
                                                    <FiEdit size={15}
                                                            className="text-graycolor group-hover:text-primary"/>
                                                    <h4 className="text-[14px] text-primary">Edit</h4>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {/*Four*/}
                                    {loading ? (
                                        <>
                                            <Skeleton height={60} count={1}/>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                                <div className="content_wrap">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Notification Sound
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        Control the importance of notifications and ensure you don’t
                                                        miss what <br/>matters most.
                                                    </h4>
                                                </div>

                                                <div onClick={() => setOpenStartFourModal(true)}
                                                     className="icon_wrap cursor-pointer flex items-center gap-1">
                                                    <FiEdit size={15}
                                                            className="text-graycolor group-hover:text-primary"/>
                                                    <h4 className="text-[14px] text-primary">Edit</h4>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-3 hidden lg:block ml-7 mr-[22px]">
                        </div>
                    </div>
                </div>
            </section>

            {/* One */}
            <Modal size="lg"
                   dismissible
                   show={openStartOneModal}
                   className="modal_cntrl"
                   onClose={() => setOpenStartOneModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <h4 className="text-[16px]">Notification Frequency</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            Please select one option.
                        </h4>

                        <div className="mt-4">
                            <div onClick={() => onChange(1)}
                                 className="box cursor-pointer py-2 px-4 border rounded">
                                <Radio.Group
                                    onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                    value={value}
                                    className="flex gap-1 items-center justify-start">
                                    <div className="radio_box">
                                        <Radio value={1}></Radio>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Instant
                                            </h4>
                                            <h4 className="-mt-1 text-[12px] text-graycolor">
                                                Get notified immediately when something happens
                                            </h4>
                                        </div>
                                    </div>
                                </Radio.Group>
                            </div>

                            <div onClick={() => onChange(2)}
                                 className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                <Radio.Group
                                    onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                    value={value}
                                    className="flex items-center gap-1 justify-start">
                                    <div className="radio_box">
                                        <Radio value={2}></Radio>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Daily Digest
                                            </h4>
                                            <h4 className="-mt-1 text-[12px] text-graycolor">
                                                Receive a summary of notifications daily
                                            </h4>
                                        </div>
                                    </div>
                                </Radio.Group>
                            </div>

                            <div onClick={() => onChange(3)}
                                 className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                <Radio.Group
                                    onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                    value={value}
                                    className="flex items-center gap-1 justify-start">
                                    <div className="radio_box">
                                        <Radio value={3}></Radio>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Weekly Summary
                                            </h4>
                                            <h4 className="-mt-1 text-[12px] text-graycolor">
                                                Get a consolidated weekly report
                                            </h4>
                                        </div>
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenStartOneModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenStartOneModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Two*/}
            <Modal size="lg" dismissible show={openStartTwoModal}
                   onClose={() => setOpenStartTwoModal(false)}>
                <Modal.Header>
                    <div className="head text-[16px] flex items-start gap-2">
                        <h6>Notification Channels</h6>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <h4 className="text-graycolor text-[14px]">
                            You can choose more than one option.
                        </h4>
                        <div id="checkbox" className="-space-y-2">
                            <Checkbox defaultChecked className="flex items-start gap-1">
                                <h4 className="text-[14px] mt-4">Push</h4>
                                <h4 className="text-gray-500 font-normal text-[14px]">
                                    Receive instant updates on your device.
                                </h4>
                            </Checkbox>
                            <Checkbox className="flex items-start gap-1">
                                <h4 className="text-[14px] mt-4">Email</h4>
                                <h4 className="text-gray-500 font-normal text-[14px]">
                                    Get notifications sent to your email inbox.
                                </h4>
                            </Checkbox>
                            <Checkbox defaultChecked className="flex items-start gap-1">
                                <h4 className="text-[14px] mt-4">SMS</h4>
                                <h4 className="text-gray-500 font-normal text-[14px]">
                                    Receive updates via text messages.
                                </h4>
                            </Checkbox>
                            <Checkbox className="flex items-start gap-1">
                                <h4 className="text-[14px] mt-4">In-app</h4>
                                <h4 className="text-gray-500 font-normal text-[14px]">
                                    Stay informed with alerts directly in the app.
                                </h4>
                            </Checkbox>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenStartTwoModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenStartTwoModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/* Three */}
            <Modal size="lg"
                   dismissible
                   show={openStartThreeModal}
                   className="modal_cntrl"
                   onClose={() => setOpenStartThreeModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <h4 className="text-[16px]">Notification Priority</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            Please select one option.
                        </h4>

                        <div className="mt-4">
                            <div onClick={() => onChange(1)}
                                 className="box cursor-pointer py-2 px-4 border rounded">
                                <Radio.Group
                                    onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                    value={value}
                                    className="flex gap-1 items-center justify-start">
                                    <div className="radio_box">
                                        <Radio value={1}></Radio>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                High Priority
                                            </h4>
                                            <h4 className="-mt-1 text-[12px] text-graycolor">
                                                Immediate action is needed for critical updates like messages,
                                                inquiries,
                                                or purchases.
                                            </h4>
                                        </div>
                                    </div>
                                </Radio.Group>
                            </div>

                            <div onClick={() => onChange(2)}
                                 className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                <Radio.Group
                                    onChange={(e: RadioChangeEvent) => {
                                        // Handle radio button change here
                                        // onChange(newValue);
                                    }}
                                    value={value}
                                    className="flex items-center gap-1 justify-start">
                                    <div className="radio_box">
                                        <Radio value={2}></Radio>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Low Priority
                                            </h4>
                                            <h4 className="-mt-1 text-[12px] text-graycolor">
                                                General updates like price drops, new listings, or recommendations.
                                            </h4>
                                        </div>
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenStartThreeModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenStartThreeModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Four*/}
            <Modal size="lg" dismissible show={openStartFourModal}
                   onClose={() => setOpenStartFourModal(false)}>
                <Modal.Header>
                    <div className="head text-[16px] flex items-start gap-2">
                        <h6>Notification Sound</h6>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body box">
                        <h4 className="text-graycolor text-[14px]">
                            You can choose more than one option.
                        </h4>
                        <div id="checkbox" className="-space-y-2">
                            <Checkbox defaultChecked className="flex items-start gap-1">
                                <h4 className="text-[14px] mt-4">New Notification</h4>
                                <h4 className="text-gray-500 font-normal text-[14px]">
                                    Play a sound whenever a new notification is received.
                                </h4>
                            </Checkbox>
                            <Checkbox className="flex items-start gap-1">
                                <h4 className="text-[14px] mt-4">New Message</h4>
                                <h4 className="text-gray-500 font-normal text-[14px]">
                                    Play a sound whenever a new message is received.
                                </h4>
                            </Checkbox>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => setOpenStartFourModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                            Cancel
                        </button>
                        <button onClick={() => setOpenStartFourModal(false)}
                                className="px-10 text-[14px] py-2 bg-[#4D7FB8] hover:bg-[#3A5F8A] text-white rounded">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Page;