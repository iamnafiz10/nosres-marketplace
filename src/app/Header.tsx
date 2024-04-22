'use client';
import React, {useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {HiUserCircle} from "react-icons/hi";
import {IoIosArrowDown} from "react-icons/io";
import {HiOutlineBars3, HiOutlineChatBubbleLeft, HiOutlineSquaresPlus} from "react-icons/hi2";
import {IoCartOutline, IoSearchOutline} from "react-icons/io5";
import LogoImg from '@/../public/assets/images/logo.svg';
import Link from "next/link";
import Image from "next/image";
import {GoBell, GoHome, GoHomeFill} from "react-icons/go";

function Header() {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };
    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container grid grid-cols-12 items-center">
                        <div className="col-span-3 logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[16px]">Marketplace</span>
                            </Link>
                        </div>

                        <div className="col-span-3 hidden lg:flex search-bar relative">
                            <input
                                type="text"
                                className="border text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                placeholder="Search Marketplace"
                                style={{
                                    position: 'absolute',
                                    zIndex: 999,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: 0,
                                }}
                            />

                            <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                <IoSearchOutline
                                    className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                            </div>
                        </div>

                        <div className="col-span-6 nav hidden lg:flex items-center justify-end text-[12px] gap-3">
                            {/* Home */}
                            <Link href='/'
                                  className="group px-[10px] flex flex-col items-center border-b-2 border-primary">
                                <GoHomeFill className="w-full h-[22px] text-primary"/>
                                <div
                                    className="text-primary group-hover:text-primary transition">
                                    Home
                                </div>
                            </Link>

                            {/* Cart */}
                            <Link href='#'
                                  className="group px-[10px] flex flex-col items-center">
                                {/* Main SVG */}
                                <IoCartOutline className="w-full h-[22px] text-prgcolor group-hover:text-primary"/>
                                <div
                                    className="text-prgcolor group-hover:text-primary transition">
                                    Cart
                                </div>
                            </Link>

                            {/* Message */}
                            <Link href='#'
                                  className="group px-[10px] flex flex-col items-center">
                                {/* Main SVG */}
                                <div className="relative">
                                    <HiOutlineChatBubbleLeft
                                        className="w-full h-[22px] text-prgcolor group-hover:text-primary"/>
                                    <div
                                        className="flex absolute top-[-1px] -right-[10px] bg-red-500 rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                                        3
                                    </div>
                                </div>
                                <div
                                    className="text-prgcolor group-hover:text-primary transition">
                                    Messages
                                </div>
                            </Link>

                            {/* Notification */}
                            <Link href='#'
                                  className="group px-[10px] flex flex-col items-center">
                                {/* Main SVG */}
                                <div className="relative">
                                    <GoBell className="w-full h-[22px] text-prgcolor group-hover:text-primary"/>
                                    <div
                                        className="flex absolute top-[-1px] -right-[10px] bg-red-500 rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                                        12
                                    </div>
                                </div>
                                <div
                                    className="text-prgcolor group-hover:text-primary transition">
                                    Notification
                                </div>
                            </Link>

                            {/* For Business */}
                            <Link href='#'
                                  className="group px-[10px] flex flex-col items-center">
                                {/* Main SVG */}
                                <div className="relative">
                                    <HiOutlineSquaresPlus
                                        className="w-full h-[22px] text-prgcolor group-hover:text-primary"/>
                                    <div
                                        className="flex absolute top-[-1px] -right-[10px] bg-red-500 rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                                        12
                                    </div>
                                </div>
                                <div
                                    className="text-prgcolor group-hover:text-primary transition">
                                    For Business
                                </div>
                            </Link>

                            {/* User Icon */}
                            <div className="last_user_icon cursor-pointer group px-[10px] flex flex-col items-center">
                                <div className="dropdown inline-block relative">
                                    <div
                                        className="text-center cursor-pointer text-prgcolor transition relative">
                                        <HiUserCircle
                                            className="w-full h-[24px] text-prgcolor group-hover:text-primary"/>
                                    </div>
                                </div>
                                <div
                                    className="text-prgcolor group-hover:text-primary transition">
                                    Profile
                                </div>
                            </div>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */
                }
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full h-[100%]">
                    <div className="navbar-wrapper px-4 pt-20 space-y-5">
                        <div
                            className="block lg:hidden search-bar-mobile relative">
                            <input
                                type="text"
                                className="border text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 w-full"
                                placeholder="Search Marketplace"
                                style={{
                                    position: 'absolute',
                                    zIndex: 999,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: 0,
                                }}
                            />

                            <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                <IoSearchOutline className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                            </div>
                        </div>

                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Who We Are
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>About Nosres</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Newsroom</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Careers</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Investors</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Brand Resources</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Contact Us</Link>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Our Business Portfolio
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Marketplace</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Pay</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Logistics</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Telecom</Link>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Resources
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Support Center</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres for Business</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres for Career Seekers</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres for Investors</Link>
                                </li>
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres for Media</Link>
                                </li>
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b">
                                    <Link href='/'>Nosres for Partners</Link>
                                </li>
                            </ul>
                        </details>

                        <div className="flex p-4 pt-0 invest">
                            <button
                                className="text-primary rounded hover:bg-primary hover:text-white px-6 py-1 border text-[14px]">Invest
                            </button>
                        </div>

                        <Link href='#'
                              className="w-full text-center text-gray-700 hover:text-primary transition relative">
                            <div
                                className="border-b border-gray-300 pl-4 pb-3 text-[14px] font-normal flex gap-2 items-center">
                                <span>Account</span>
                                <HiUserCircle size={22}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default Header;