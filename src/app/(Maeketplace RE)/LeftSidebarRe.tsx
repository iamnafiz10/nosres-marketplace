"use client";
import 'flowbite';
import Link from "next/link";
import {GoBell, GoHomeFill} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";
import {HiOutlineChatBubbleLeft} from "react-icons/hi2";
import React, {useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import {usePathname} from "next/navigation";

function LeftSidebar() {
    const loading = useLoading();
// Define a state to manage the visibility of the drawer navigation
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

// Create a function to toggle the visibility of the drawer navigation
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Menu active className
    const pathname = usePathname();
    return (
        <>
            <section id="left-sidebar-section">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2 bg-red-600">
                            <div id="drawer-navigation"
                                 className={`fixed bg-white lg:bg-transparent top-[47px] lg:w-52 lg:visible z-40 h-screen pl-0 pt-0 p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'w-64 left-0 sm:left-auto' : 'w-0 left-auto invisible'}`}
                                 tabIndex={-1} aria-labelledby="drawer-navigation-label">
                                <div className="py-4 pl-4 sm:pl-0 overflow-y-auto">
                                    <ul className="space-y-0 font-medium text-[14px]">
                                        {loading ? (
                                            <div>
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link href="#"
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-transparent hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path
                                                                d="m2 7 4.41-4.41A2 2 0 01 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 00 2-2v-8"/>
                                                            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
                                                            <path d="M27h20"/>
                                                            <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82
                                                        0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7
                                                        2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0
                                                        0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
                                                        </svg>
                                                        <h4 className="ms-3">
                                                            Store Manager
                                                        </h4>
                                                    </Link>

                                                </li>
                                            </>
                                        )}

                                        {loading ? (
                                            <div>
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link href="#"
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-transparent hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24
                                                         24" fill="none" stroke="#6B7280" strokeWidth="1.5"
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
                                                    </Link>
                                                </li>
                                            </>
                                        )}

                                        {loading ? (
                                            <div>
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link href="#"
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-transparent hover:text-primary hover:bg-opacity-50 group">
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
                                                            <path d="M12 17h.01"/>
                                                        </svg>
                                                        <span className="ms-3">Help & Support</span>
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 ml-0 lg:ml-10"></div>
                        <div className="col-span-4"></div>
                    </div>
                </div>
            </section>

            {/* Mobile/Tap Bottom Menu */}
            <div
                className="fixed z-[999] flex lg:hidden py-1 bottom-0 w-full bg-white border-t border-gray-200 nav items-center justify-center text-[12px] gap-3">
                {/* Home */}
                <Link href='/public' className="group px-[5px] flex flex-col items-center border-b-2 border-primary">
                    <GoHomeFill className="w-full h-[20px] text-primary"/>
                    <div className="text-primary group-hover:text-primary transition">
                        Home
                    </div>
                </Link>

                {/* Category */}
                <Link onClick={toggleDrawer} href='#'
                      className="group px-[5px] sm:px-[10px] flex flex-col items-center">
                    {/* Main SVG */}
                    <svg
                        className={`w-5 h-5 transition duration-75 group-hover:stroke-primary ${isDrawerOpen ? 'stroke-primary' : 'stroke-prgcolor'}`}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect width="7" height="7"
                              x="3" y="3" rx="1"/>
                        <rect width="7" height="7" x="14" y="3" rx="1"/>
                        <rect width="7"
                              height="7" x="14" y="14" rx="1"/>
                        <rect width="7" height="7" x="3" y="14"
                              rx="1"/>
                    </svg>

                    <div
                        className={`group-hover:text-primary transition ${isDrawerOpen ? 'text-primary' : 'text-prgcolor'}`}>
                        Categories
                    </div>
                </Link>

                {/* Cart */}
                <Link href='#' className="group px-[5px] sm:px-[10px] flex flex-col items-center">
                    {/* Main SVG */}
                    <div className="relative">
                        <IoCartOutline className="w-full h-[23px] text-prgcolor group-hover:text-primary"/>
                        <div
                            className="flex absolute top-[-1px] -right-[10px] bg-primary rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                            2
                        </div>
                    </div>
                    <div className="text-prgcolor group-hover:text-primary transition">
                        Cart
                    </div>
                </Link>

                {/* Message */}
                <Link href='#' className="group px-[5px] sm:px-[10px] flex flex-col items-center">
                    {/* Main SVG */}
                    <div className="relative">
                        <HiOutlineChatBubbleLeft className="w-full h-[20px] text-prgcolor group-hover:text-primary"/>
                        <div
                            className="flex absolute top-[-1px] -right-[10px] bg-primary rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                            3
                        </div>
                    </div>
                    <div className="text-prgcolor group-hover:text-primary transition">
                        Messages
                    </div>
                </Link>

                {/* Notification */}
                <Link href='#' className="group px-[5px] sm:px-[10px] flex flex-col items-center">
                    {/* Main SVG */}
                    <div className="relative">
                        <GoBell className="w-full h-[20px] text-prgcolor group-hover:text-primary"/>
                        <div
                            className="flex absolute top-[-1px] -right-[10px] bg-primary rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                            12
                        </div>
                    </div>
                    <div className="text-prgcolor group-hover:text-primary transition">
                        Notifications
                    </div>
                </Link>
            </div>
        </>
    );
}

export default LeftSidebar;