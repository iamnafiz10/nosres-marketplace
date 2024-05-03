"use client";
import React, {useEffect, useRef, useState} from 'react';
import useTitle from "@/app/useTitle";
import Link from "next/link";
import {HiOutlineMenuAlt3, HiUserCircle} from "react-icons/hi";

function Page() {
    useTitle("Notifications")

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
            {/*<section id="account-page-section">*/}
            {/*    <div className="container py-16">*/}
            {/*        <div className="grid grid-cols-1 lg:grid-cols-12">*/}
            {/*            /!* Left Sidebar *!/*/}
            {/*            <div className="col lg:col-span-2"></div>*/}

            {/*            /!* Body Content *!/*/}
            {/*            <div className="col lg:col-span-7 ml-0 lg:ml-10 mt-1">*/}
            {/*                /!* Mobile Header Start*!/*/}
            {/*                <div*/}
            {/*                    className="mobile_header pb-2 flex lg:hidden items-center text-[18px] font-[500] text-prgcolor rounded-lg">*/}
            {/*                    <svg*/}
            {/*                        className="w-5 h-5"*/}
            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                        viewBox="0 0 24*/}
            {/*                                                 24" fill="none" stroke="currentColor" strokeWidth="1.5"*/}
            {/*                        strokeLinecap="round"*/}
            {/*                        strokeLinejoin="round">*/}
            {/*                        <path d="M12.22 2h-.44a2 2 0*/}
            {/*                                                0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0*/}
            {/*                                                0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1*/}
            {/*                                                1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2*/}
            {/*                                                0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1*/}
            {/*                                                1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0*/}
            {/*                                                0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0*/}
            {/*                                                .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0*/}
            {/*                                                1-1-1.73V4a2 2 0 0 0-2-2z"/>*/}
            {/*                        <circle cx="12" cy="12" r="3"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="ms-3">Setting</span>*/}
            {/*                </div>*/}

            {/*                <div className="mt-4 flex lg:hidden items-center justify-between">*/}
            {/*                    <div className="flex items-center text-[16px] text-prgcolor font-normal rounded-lg">*/}
            {/*                        <svg*/}
            {/*                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"*/}
            {/*                            xmlns="http://www.w3.org/2000/svg"*/}
            {/*                            viewBox="0 0 24*/}
            {/*                                                 24" fill="none" stroke="#6B7280" strokeWidth="1.5"*/}
            {/*                            strokeLinecap="round"*/}
            {/*                            strokeLinejoin="round">*/}
            {/*                            <path d="M6 8a6 6 0 0 1 12 0c0 7*/}
            {/*                                                3 9 3 9H3s3-2 3-9"/>*/}
            {/*                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>*/}
            {/*                        </svg>*/}
            {/*                        <span className="ms-2">Notifications</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="dropdown inline-block relative">*/}
            {/*                        <div className="dropdown inline-block relative">*/}
            {/*                            <div onClick={handleMobileMenuClick}*/}
            {/*                                 ref={dropdownMobileMenuRef}*/}
            {/*                                 className="drop_icon relative cursor-pointer flex items-center gap-1 group">*/}
            {/*                                <HiOutlineMenuAlt3*/}
            {/*                                    size={22}*/}
            {/*                                    className={`group-hover:text-primary ${isMobileMenuVisible ? 'text-primary' : 'text-graycolor'}`}/>*/}
            {/*                                <h4 className="text-[14px] text-primary">More</h4>*/}
            {/*                            </div>*/}
            {/*                            {isMobileMenuVisible &&*/}
            {/*                                <div*/}
            {/*                                    id="mobile_dropdown_menu_user_dashboard"*/}
            {/*                                    className="business-dropdown-menu z-50 cursor-auto absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">*/}
            {/*                                    <div className="container">*/}
            {/*                                        <ul className="mt-3 space-y-0 text-[14px]">*/}
            {/*                                            <li>*/}
            {/*                                                <Link href="#"*/}
            {/*                                                      className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">*/}
            {/*                                                    <HiUserCircle*/}
            {/*                                                        className="w-[22px] h-[22px] text-[#6B7280] transition duration-75 group-hover:text-primary"/>*/}
            {/*                                                    <span className="ms-3">Account</span>*/}
            {/*                                                </Link>*/}
            {/*                                            </li>*/}
            {/*                                            <li>*/}
            {/*                                                <Link href="#"*/}
            {/*                                                      className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">*/}
            {/*                                                    <svg*/}
            {/*                                                        className="w-5 h-5 transition duration-75 group-hover:stroke-primary"*/}
            {/*                                                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                        viewBox="0 0 24*/}
            {/*                                                 24" fill="none" stroke="#6B7280" strokeWidth="1.5"*/}
            {/*                                                        strokeLinecap="round"*/}
            {/*                                                        strokeLinejoin="round">*/}
            {/*                                                        <path d="M6 8a6 6 0 0 1 12 0c0 7*/}
            {/*                                                3 9 3 9H3s3-2 3-9"/>*/}
            {/*                                                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>*/}
            {/*                                                    </svg>*/}
            {/*                                                    <span className="ms-3">Notifications</span>*/}
            {/*                                                </Link>*/}
            {/*                                            </li>*/}
            {/*                                            <li>*/}
            {/*                                                <Link href="#"*/}
            {/*                                                      className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">*/}
            {/*                                                    <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                         className="w-5 h-5 transition duration-75 group-hover:stroke-primary"*/}
            {/*                                                         viewBox="0 0 24*/}
            {/*                                                 24" fill="none" stroke="#6B7280" strokeWidth="1.5"*/}
            {/*                                                         strokeLinecap="round"*/}
            {/*                                                         strokeLinejoin="round">*/}
            {/*                                                        <path d="M20 13c0 5-3.5*/}
            {/*                                                7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2*/}
            {/*                                                6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>*/}
            {/*                                                    </svg>*/}
            {/*                                                    <span className="ms-3">Privacy</span>*/}
            {/*                                                </Link>*/}
            {/*                                            </li>*/}

            {/*                                            <li>*/}
            {/*                                                <Link href="#"*/}
            {/*                                                      className="flex items-center p-2 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">*/}
            {/*                                                    <svg*/}
            {/*                                                        className="w-5 h-5 transition duration-75 group-hover:stroke-primary"*/}
            {/*                                                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                        viewBox="0 0 24*/}
            {/*                                                 24" fill="none" stroke="#6B7280" strokeWidth="1.5"*/}
            {/*                                                        strokeLinecap="round"*/}
            {/*                                                        strokeLinejoin="round">*/}
            {/*                                                        <circle cx="12" cy="12"*/}
            {/*                                                                r="10"/>*/}
            {/*                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>*/}
            {/*                                                        <path d="M12*/}
            {/*                                                17h.01"/>*/}
            {/*                                                    </svg>*/}
            {/*                                                    <span className="ms-3">Marketplace Support</span>*/}
            {/*                                                </Link>*/}
            {/*                                            </li>*/}
            {/*                                        </ul>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            }*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                /!* Mobile Header End*!/*/}

            {/*                /!* Page Header *!/*/}
            {/*                <div*/}
            {/*                    className="page_header hidden lg:flex items-center text-[16px] text-prgcolor font-normal rounded-lg">*/}
            {/*                    <svg*/}
            {/*                        className="w-5 h-5 transition duration-75 group-hover:stroke-primary"*/}
            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                        viewBox="0 0 24*/}
            {/*                        24" fill="none" stroke="#6B7280" strokeWidth="1.5"*/}
            {/*                        strokeLinecap="round"*/}
            {/*                        strokeLinejoin="round">*/}
            {/*                        <path d="M6 8a6 6 0 0 1 12 0c0 7*/}
            {/*                                                3 9 3 9H3s3-2 3-9"/>*/}
            {/*                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="ms-1">Notifications</span>*/}
            {/*                </div>*/}

            {/*                <div className="py-1 lg:py-4">*/}
            {/*                    <hr/>*/}
            {/*                </div>*/}

            {/*                <div className="content_wrapper mt-2 lg:mt-0">*/}
            {/*                    /!* Main Box *!/*/}
            {/*                    <div className="box px-6 py-4 bg-white rounded">*/}
            {/*                        <div className="box_header pb-2">*/}
            {/*                            <h4 className="text-[16px] text-prgcolor">Messages and Mentions</h4>*/}
            {/*                        </div>*/}
            {/*                        <hr/>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Direct Messages*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive when someone sends you a direct message.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle1"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle1" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Mantions*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive when someone mentions or tags you in a post or*/}
            {/*                                    comment.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle2"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle2" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    /!* Main Box *!/*/}
            {/*                    <div className="box mt-4 px-6 py-4 bg-white rounded">*/}
            {/*                        <div className="box_header pb-2">*/}
            {/*                            <h4 className="text-[16px] text-prgcolor">Engagement on Your Posts</h4>*/}
            {/*                        </div>*/}
            {/*                        <hr/>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Likes*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive when someone likes my posts.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle3"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle3" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Comments and Replies*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive when someone comments on your content and*/}
            {/*                                    replies to your comments.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle4"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle4" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Shares*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive when someone shares any of your posts.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle5"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle5" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    /!* Main Box *!/*/}
            {/*                    <div className="box mt-4 px-6 py-4 bg-white rounded">*/}
            {/*                        <div className="box_header pb-2">*/}
            {/*                            <h4 className="text-[16px] text-prgcolor">Your Network</h4>*/}
            {/*                        </div>*/}
            {/*                        <hr/>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    New Followers*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive when someone starts following me.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle6"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle6" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Updates from Your Network*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive about updates in your network.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle7"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle7" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div*/}
            {/*                            className="under_box rounded mt-4 border py-2 px-4 flex items-start justify-between">*/}
            {/*                            <div className="content_wrap">*/}
            {/*                                <h4 className="text-[14px] text-prgcolor">*/}
            {/*                                    Recommendations*/}
            {/*                                </h4>*/}
            {/*                                <h4 className="text-[12px] text-graycolor mt-1">*/}
            {/*                                    Notifications you receive about accounts you might like based on what*/}
            {/*                                    you follow.*/}
            {/*                                </h4>*/}
            {/*                            </div>*/}

            {/*                            <div className="toggle_wrap">*/}
            {/*                                <label htmlFor="Toggle8"*/}
            {/*                                       className="inline-flex items-center space-x-4 cursor-pointer">*/}
            {/*                                    <span className="relative">*/}
            {/*                                    <input id="Toggle8" type="checkbox" className="hidden peer"/>*/}
            {/*                                    <div*/}
            {/*                                        className="w-12 h-6 rounded-full shadow-inner bg-black peer-checked:bg-primary"></div>*/}
            {/*                                    <div*/}
            {/*                                        className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary peer-checked:bg-white"></div>*/}
            {/*                                    </span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* Right Sidebar *!/*/}
            {/*            <div className="col lg:col-span-3 hidden lg:block ml-7 mr-[22px]">*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
}

export default Page;