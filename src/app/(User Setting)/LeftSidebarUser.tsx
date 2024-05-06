"use client";
import 'flowbite';
import Link from "next/link";
import {GoBell, GoHomeFill} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";
import {HiOutlineChatBubbleLeft} from "react-icons/hi2";
import React, {useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import {HiUserCircle} from "react-icons/hi";
import {usePathname} from 'next/navigation';

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
                                                    <div
                                                        className="flex items-center p-2 pl-0 text-[16px] font-[500] text-prgcolor rounded-lg">
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
                                                </li>
                                                <div className="py-1">
                                                    <hr/>
                                                </div>
                                            </>
                                        )}

                                        {loading ? (
                                            <div>
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link href="/account"
                                                          className={`flex ${pathname === '/account' ? 'font-semibold' : 'font-normal'} items-center p-2 pl-0 text-prgcolor rounded-lg hover:text-primary hover:bg-opacity-50 group`}>
                                                        <HiUserCircle
                                                            className={`w-[22px] ${pathname === '/account' ? 'text-primary' : ''} h-[22px] text-[#6B7280] transition duration-75 group-hover:text-primary`}/>
                                                        <span className="ms-3">Account</span>
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
                                                    <Link href="/notification"
                                                          className={`flex ${pathname === '/notification' ? 'font-semibold' : 'font-normal'} items-center p-2 pl-0 text-prgcolor rounded-lg hover:text-primary hover:bg-opacity-50 group`}>
                                                        <svg
                                                            className={`w-5  ${pathname === '/notification' ? 'stroke-primary' : ''} h-5 transition duration-75 group-hover:stroke-primary`}
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
                                            </>
                                        )}

                                        {loading ? (
                                            <div>
                                                <Skeleton height={30} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link href="/privacy"
                                                          className={`flex ${pathname === '/privacy' ? 'font-semibold' : 'font-normal'} items-center p-2 pl-0 text-prgcolor rounded-lg hover:text-primary hover:bg-opacity-50 group`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className={`w-5 ${pathname === '/privacy' ? 'stroke-primary' : ''} h-5 transition duration-75 group-hover:stroke-primary`}
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:text-primary hover:bg-opacity-50 group">
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
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-7 ml-0 lg:ml-10"></div>
                        <div className="col-span-3"></div>
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
                    <IoCartOutline className="w-full h-[23px] text-prgcolor group-hover:text-primary"/>
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
                            className="flex absolute top-[-1px] -right-[10px] bg-red-500 rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
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
                            className="flex absolute top-[-1px] -right-[10px] bg-red-500 rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                            12
                        </div>
                    </div>
                    <div className="text-prgcolor group-hover:text-primary transition">
                        Notification
                    </div>
                </Link>
            </div>
        </>
    );
}

export default LeftSidebar;