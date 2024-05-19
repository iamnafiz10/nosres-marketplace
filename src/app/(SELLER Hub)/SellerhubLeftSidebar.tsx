"use client";
import 'flowbite';
import Link from "next/link";
import {GoBell, GoHomeFill} from "react-icons/go";
import {
    HiOutlineChatBubbleLeft,
} from "react-icons/hi2";
import React, {useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import {usePathname} from "next/navigation";
import {HiUserCircle} from "react-icons/hi";

function SellerhubLeftSidebar() {
    const loading = useLoading();
    // Define a state to manage the visibility of the drawer navigation
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Create a function to toggle the visibility of the drawer navigation
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Show current date
    const currentYear: number = new Date().getFullYear();

    // Menu active className
    const pathname = usePathname();
    return (
        <>
            <section id="left-sidebar-section">
                {/* Sidebar */}
                <aside id="logo-sidebar"
                       className={`fixed top-0 ${isDrawerOpen ? 'left-0' : '-left-[1000px]'} lg:left-0 z-40 w-64 h-[92%] lg:h-[100%] pt-0 transition-all duration-300 ease-in-out border-r border-gray-200 sm:translate-x-0`}
                       aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 pt-20 overflow-y-auto bg-white">
                        <ul className="space-y-1 font-medium">
                            <li>
                                {loading ? (
                                    <>
                                        <div className="flex items-center justify-start gap-2 w-full">
                                            <Skeleton width={30} height={30} borderRadius="100%" count={1}/>
                                            <Skeleton containerClassName="flex-1" height={30} count={1}/>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            className="flex items-center text-[14px] p-2 rounded-lg hover:bg-gray-100 group">
                                            <HiUserCircle
                                                          className="text-primary w-6 h-6 transition duration-75 group-hover:text-primary"/>
                                            <span className="ms-2 font-semibold">UpTown Store</span>
                                        </div>
                                    </>
                                )}
                            </li>

                            <hr/>
                            {loading ? (
                                <Skeleton height={20} count={1}/>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/dashboard"
                                              className={`${pathname === '/dashboard' ? 'font-semibold' : 'font-normal'} flex items-center p-2 text-[14px] rounded-lg hover:bg-gray-100 group`}>
                                            <svg
                                                className={`${pathname === '/dashboard' ? 'stroke-primary' : 'text-gray-500'} w-[17px] ml-[2px] h-5 transition duration-75 group-hover:stroke-primary`}
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <rect width="7" height="9" x="3" y="3" rx="1"/>
                                                <rect width="7" height="5" x="14" y="3" rx="1"/>
                                                <rect width="7" height="9" x="14" y="12" rx="1"/>
                                                <rect width="7" height="5" x="3" y="16" rx="1"/>
                                            </svg>
                                            <span className="ms-[14px]">Dashboard</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            {loading ? (
                                <Skeleton height={20} count={1}/>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/listings"
                                              className={`${pathname === '/listings' ? 'font-semibold' : 'font-normal'} flex items-center p-2 text-[14px] rounded-lg hover:bg-gray-100 group`}>
                                            <svg
                                                className={`${pathname === '/listings' ? 'stroke-primary' : 'text-gray-500'} w-[17px] ml-[2px] h-5 transition duration-75 group-hover:stroke-primary`}
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path
                                                    d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                                                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                                                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                                            </svg>
                                            <span className="ms-[14px]">Listings</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            {loading ? (
                                <Skeleton height={20} count={1}/>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/sorders"
                                              className={`${pathname === '/sorders' ? 'font-semibold' : 'font-normal'} ${pathname === '/sorder-details' ? 'font-semibold' : 'font-normal'} flex items-center p-2 text-[14px] font-normal rounded-lg hover:bg-gray-100 group`}>
                                            <svg
                                                className={`text-gray-500 ${pathname === '/sorders' ? 'stroke-primary' : 'text-gray-500'} ${pathname === '/sorder-details' ? 'stroke-primary' : 'text-gray-500'} w-5 h-5 transition duration-75 group-hover:stroke-primary`}
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <circle cx="8" cy="21" r="1"/>
                                                <circle cx="19" cy="21" r="1"/>
                                                <path
                                                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                                            </svg>
                                            <span className="ms-3">Orders</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            {loading ? (
                                <Skeleton height={20} count={1}/>
                            ) : (
                                <>
                                    <li>
                                        <Link href="#"
                                              className="flex items-center p-2 text-[14px] font-normal rounded-lg hover:bg-gray-100 group">
                                            <svg
                                                className="text-gray-500 w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m3 11 18-5v12L3 14v-3z"/>
                                                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                                            </svg>
                                            <span className="ms-3">Ads</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        {loading ? (
                            <div className="w-[210px] absolute left-6 bottom-10">
                                <Skeleton height={20} count={2}/>
                            </div>
                        ) : (
                            <>
                                <div className="bottom-div absolute left-6 bottom-10">
                                    <div className="flex space-x-2">
                                        <Link href='#' className="text-[12px] hover:text-primary">Terms</Link>
                                        <Link href='#' className="text-[12px] hover:text-primary">Privacy</Link>
                                        <Link href='#' className="text-[12px] hover:text-primary">Support</Link>
                                    </div>
                                    <h6 className="mt-1 text-gray-500 text-[12px]">
                                        © {currentYear} Nosres Inc. All rights reserved.
                                    </h6>
                                </div>
                            </>
                        )}
                    </div>
                </aside>
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

export default SellerhubLeftSidebar;