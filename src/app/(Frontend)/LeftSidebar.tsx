"use client";
import 'flowbite';
import Link from "next/link";
import {GoBell, GoHomeFill} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";
import {HiOutlineChatBubbleLeft} from "react-icons/hi2";
import React, {useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";

function LeftSidebar() {
    const loading = useLoading();
// Define a state to manage the visibility of the drawer navigation
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

// Create a function to toggle the visibility of the drawer navigation
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#6B7280" strokeWidth="1.8"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <line x1="21" x2="3" y1="6"
                                                                  y2="6"/>
                                                            <line x1="15" x2="3" y1="12" y2="12"/>
                                                            <line x1="17" x2="3" y1="18"
                                                                  y2="18"/>
                                                        </svg>
                                                        <span className="ms-3">Categories</span>
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M3.85 8.62a4
                                                    4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77
                                                    4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                                                            <path d="m15 9-6 6"/>
                                                            <path d="M9 9h.01"/>
                                                            <path d="M15 15h.01"/>
                                                        </svg>
                                                        <span className="ms-3">Special Offers</span>
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                24" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <rect width="10"
                                                                  height="14" x="3" y="8" rx="2"/>
                                                            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2
                                                    2 0 0 1-2 2h-2.4"/>
                                                            <path d="M8 18h.01"/>
                                                        </svg>
                                                        <span className="ms-3">Electronics</span>
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:fill-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="#6B7280" viewBox="0 0 256 256">
                                                            <path
                                                                d="M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18a1.74,1.74,0,0,0,.11-.18,16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46,1.74,1.74,0,0,0,.11.18l20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z"></path>
                                                        </svg>
                                                        <span className="ms-3">Women’s Fashion</span>
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:fill-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="#6B7280" viewBox="0 0 256 256">
                                                            <path
                                                                d="M200,40H179.31L165.66,26.34h0A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34h0L76.69,40H56A16,16,0,0,0,40,56V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM128,65.58,111,40h34.1Zm33.24-21L168,51.31V104L138.57,78.56ZM88,51.31l6.76-6.75,22.67,34L88,104ZM56,56H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,120a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,97.48V208H56ZM200,208H136V97.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,120a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,104V56h16Z"></path>
                                                        </svg>

                                                        <span className="ms-3">Men’s Fashion</span>
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M36h3"/>
                                                            <path d="M17 6h.01"/>
                                                            <rect width="18" height="20" x="3" y="2"
                                                                  rx="2"/>
                                                            <circle cx="12" cy="13" r="5"/>
                                                            <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 05"/>
                                                        </svg>
                                                        <span className="ms-3">Home Appliances</span>
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
                                                          className="flex items-center p-2 pl-0 text-prgcolor font-normal rounded-lg hover:bg-gray-200 hover:text-primary hover:bg-opacity-50 group">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
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
                                                        <span className="ms-3">All Categories</span>
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