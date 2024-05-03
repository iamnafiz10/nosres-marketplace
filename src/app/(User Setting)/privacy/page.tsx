"use client";
import React, {useEffect, useRef, useState} from 'react';
import useTitle from "@/app/useTitle";
import Link from "next/link";
import {HiOutlineMenuAlt3, HiUserCircle} from "react-icons/hi";
import {IoMdGlobe} from "react-icons/io";
import {Modal} from "flowbite-react";
import {Radio, RadioChangeEvent} from "antd";
import {FaUsers} from "react-icons/fa6";
import {IoLockClosed} from "react-icons/io5";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

function Page() {
    useTitle("Privacy")

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

    //------------------------- Popup Area -------------------------//
    // Popups Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };

    const [openStartWhoMessageModal, setOpenStartWhoMessageModal] = useState<boolean>(false);
    const [openStartWhoCommentModal, setOpenStartWhoCommentModal] = useState<boolean>(false);
    const [openStartWhoTagModal, setOpenStartWhoTagModal] = useState<boolean>(false);
    const [openStartWhoFollowersModal, setOpenStartWhoFollowersModal] = useState<boolean>(false);
    const [openStartWhoFollowingModal, setOpenStartWhoFollowingModal] = useState<boolean>(false);

    return (
        <>
            <section id="privacy-page-section">
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
                                    <span className="ms-2">Privacy</span>
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
                            <div
                                className="page_header hidden lg:flex items-center text-[16px] text-prgcolor font-normal rounded-lg">
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
                                <span className="ms-1">Privacy</span>
                            </div>

                            <div className="py-1 lg:py-4">
                                <hr/>
                            </div>

                            <div className="content_wrapper mt-2 lg:mt-0">
                                {/* Main Box */}
                                <div className="box px-6 py-4 bg-white rounded">
                                    <div className="box_header pb-2">
                                        <h4 className="text-[16px] text-prgcolor">How People Find You on Nosres
                                            Marketplace</h4>
                                    </div>
                                    <hr/>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Search Engine
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Allow other search engines to link to your profile in their results.
                                            </h4>
                                        </div>

                                        <div className="toggle_wrap">
                                            <label htmlFor="Toggle1p"
                                                   className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle1p" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Username
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Allow other people to discover your profile using your username
                                            </h4>
                                        </div>

                                        <div className="toggle_wrap">
                                            <label htmlFor="Toggle2p"
                                                   className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle2p" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Email Address
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Allow other people to discover your profile using your email address.
                                            </h4>
                                        </div>

                                        <div className="toggle_wrap">
                                            <label htmlFor="Toggle3p"
                                                   className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle3p" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    <div className="box_header pb-2">
                                        <h4 className="text-[16px] text-prgcolor">Who Can Reach You</h4>
                                    </div>
                                    <hr/>
                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Followers
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Allow people to follow you.
                                            </h4>
                                        </div>

                                        <div className="toggle_wrap">
                                            <label htmlFor="Toggle4p"
                                                   className="inline-flex items-center space-x-4 cursor-pointer">
                                                <span className="relative">
                                                <input id="Toggle4p" type="checkbox" className="hidden peer"/>
                                                <div
                                                    className="w-12 h-6 rounded-full shadow-inner bg-gray-200 peer-checked:bg-primary"></div>
                                                <div
                                                    className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white peer-checked:bg-white"></div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Choose who can direct message you
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Choose who can direct message you.
                                            </h4>
                                        </div>

                                        <div onClick={() => setOpenStartWhoMessageModal(true)}
                                             className="who_wrap cursor-pointer flex items-center gap-1">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor"/>
                                            <h4 className="text-[14px] text-primary">
                                                Anyone
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    <div className="box_header pb-2">
                                        <h4 className="text-[16px] text-prgcolor">Comments and Tags</h4>
                                    </div>
                                    <hr/>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Comments
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Choose who can comment on your posts.
                                            </h4>
                                        </div>

                                        <div onClick={() => setOpenStartWhoCommentModal(true)}
                                             className="who_wrap cursor-pointer flex items-center gap-1">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor"/>
                                            <h4 className="text-[14px] text-primary">
                                                Anyone
                                            </h4>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Tags
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Choose who can mention or tag you in their posts or comments.
                                            </h4>
                                        </div>

                                        <div onClick={() => setOpenStartWhoTagModal(true)}
                                             className="who_wrap cursor-pointer flex items-center gap-1">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor"/>
                                            <h4 className="text-[14px] text-primary">
                                                Anyone
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    <div className="box_header pb-2">
                                        <h4 className="text-[16px] text-prgcolor">Your Network</h4>
                                    </div>
                                    <hr/>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Followers
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Choose who can see your followers list.
                                            </h4>
                                        </div>

                                        <div onClick={() => setOpenStartWhoFollowersModal(true)}
                                             className="who_wrap cursor-pointer flex items-center gap-1">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor"/>
                                            <h4 className="text-[14px] text-primary">
                                                Anyone
                                            </h4>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Following
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Choose who can see the list of the people and stores you follow.
                                            </h4>
                                        </div>

                                        <div onClick={() => setOpenStartWhoFollowingModal(true)}
                                             className="who_wrap cursor-pointer flex items-center gap-1">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor"/>
                                            <h4 className="text-[14px] text-primary">
                                                Anyone
                                            </h4>
                                        </div>
                                    </div>
                                </div>


                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    <div className="box_header pb-2">
                                        <h4 className="text-[16px] text-prgcolor">Blocking</h4>
                                    </div>
                                    <hr/>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Blocked Users
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Blocking someone removes that person’s ability to view your posts on
                                                your timeline, tag you,
                                                initiate a conversation with you, or follow you.
                                            </h4>
                                        </div>

                                        <div className="who_wrap cursor-pointer flex items-center gap-1">
                                            <svg
                                                className="w-[17px] h-[17px] text-graycolor"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M17 3a2.85 2.83 0 1 1
                                                4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                <path d="m15 5 4 4"/>
                                            </svg>
                                            <h4 className="text-[14px] text-primary">
                                                Edit
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Box */}
                                <div className="box mt-4 px-6 py-4 bg-white rounded">
                                    <div className="box_header pb-2">
                                        <h4 className="text-[16px] text-prgcolor">Advanced Settings</h4>
                                    </div>
                                    <hr/>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Marketplace ID
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                We use the Marketplace ID to identify the person responsible for the
                                                activities associated with this
                                                Nosres Marketplace profile.
                                            </h4>
                                            <h4 className="text-[14px] text-prgcolor mt-2">
                                                391990162298
                                            </h4>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Deactivate Marketplace Profile
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Deactivating your Marketplace profile won’t deactivate your Nosres
                                                Account.
                                            </h4>
                                        </div>

                                        <div className="who_wrap cursor-pointer flex items-center gap-1">
                                            <svg
                                                className="w-[17px] h-[17px] text-graycolor"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                            24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 0
                                                0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                <circle cx="9" cy="7" r="4"/>
                                                <line x1="17" x2="22" y1="8"
                                                      y2="13"/>
                                                <line x1="22" x2="17" y1="8" y2="13"/>
                                            </svg>
                                            <h4 className="text-[14px] text-primary">
                                                Deactivate
                                            </h4>
                                        </div>
                                    </div>

                                    <div
                                        className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">
                                        <div className="content_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Delete Marketplace Profile
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor mt-1">
                                                Deleting your Marketplace profile won’t close your Nosres Account.
                                            </h4>
                                        </div>

                                        <div className="who_wrap cursor-pointer flex items-center gap-1">
                                            <svg
                                                className="w-[17px] h-[17px] text-graycolor"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M3 6h18"/>
                                                <path
                                                    d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0
                                                2 1 2 2v2"/>
                                                <line x1="10" x2="10" y1="11" y2="17"/>
                                                <line x1="14" x2="14" y1="11"
                                                      y2="17"/>
                                            </svg>
                                            <h4 className="text-[14px] text-primary">
                                                Delete
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-3 hidden lg:block ml-7 mr-[22px]">
                        </div>
                    </div>
                </div>


                {/* Start WhoMessage Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartWhoMessageModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartWhoMessageModal(false)}>
                    <Modal.Header
                        className="modal_header"
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <h4 className="text-[16px]">
                            Who message you.
                        </h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Choose who can direct message you.
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Anyone
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Anyone on or off Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <FaUsers
                                                className="w-[16px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Followers only
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Your followers on Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoLockClosed
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    No one
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Only you
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartWhoMessageModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartWhoMessageModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* WhoMessage Pop-Up End */}

                {/* Start WhoComment Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartWhoCommentModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartWhoCommentModal(false)}>
                    <Modal.Header
                        className="modal_header"
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <h4 className="text-[16px]">
                            Comments
                        </h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Choose who can comments on your posts.
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Anyone
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Anyone on or off Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <FaUsers
                                                className="w-[16px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Followers only
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Your followers on Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoLockClosed
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    No one
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Only you
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartWhoCommentModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartWhoCommentModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* WhoComment Pop-Up End */}

                {/* Start WhoTag Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartWhoTagModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartWhoTagModal(false)}>
                    <Modal.Header
                        className="modal_header"
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <h4 className="text-[16px]">
                            Tags
                        </h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Choose who can mention or tag you in their posts or comments.
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Anyone
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Anyone on or off Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <FaUsers
                                                className="w-[16px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Followers only
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Your followers on Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoLockClosed
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    No one
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Only you
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartWhoTagModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartWhoTagModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* WhoTag Pop-Up End */}

                {/* Start WhoFollowers Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartWhoFollowersModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartWhoFollowersModal(false)}>
                    <Modal.Header
                        className="modal_header"
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <h4 className="text-[16px]">
                            Followers
                        </h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Choose who can see your followers list.
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Anyone
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Anyone on or off Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <FaUsers
                                                className="w-[16px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Followers only
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Your followers on Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoLockClosed
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    No one
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Only you
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartWhoFollowersModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartWhoFollowersModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* WhoFollowers Pop-Up End */}

                {/* Start WhoFollowing Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartWhoFollowingModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartWhoFollowingModal(false)}>
                    <Modal.Header
                        className="modal_header"
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <h4 className="text-[16px]">
                            Following
                        </h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Choose who can see the list of the people and stores you follow.
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Anyone
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Anyone on or off Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <FaUsers
                                                className="w-[16px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Followers only
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Your followers on Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
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
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoLockClosed
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    No one
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Only you
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartWhoFollowingModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartWhoFollowingModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* WhoFollowing Pop-Up End */}
            </section>
        </>
    );
}

export default Page;