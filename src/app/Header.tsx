'use client';
import React, {useEffect, useRef, useState} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {HiOutlineChatBubbleLeft, HiOutlineSquaresPlus} from "react-icons/hi2";
import {IoCartOutline, IoSearchOutline} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import {GoBell, GoHomeFill} from "react-icons/go";
import {CiClock2} from "react-icons/ci";
import LogoImg from '@/../public/assets/images/logo.svg';
import ProductOneImg from '@/../public/assets/images/product-1.png';
import {RxCross1} from "react-icons/rx";

function Header() {
    // 👇️ Toggle class on click Show And Hide Account Dropdown (Icon)
    const [isAccountVisible, setAccountVisible] = useState(false);
    const dropdownAccountRef = useRef(null);
    const handleAccountClick = () => {
        setAccountVisible(!isAccountVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (dropdownAccountRef.current && !dropdownAccountRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setAccountVisible(false);
            }
        };

        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    // 👇️ Toggle class on click Show And Hide Business Dropdown (Icon)
    const [isBusinessVisible, setBusinessVisible] = useState(false);
    const dropdownBusinessRef = useRef(null);
    const handleBusinessClick = () => {
        setBusinessVisible(!isBusinessVisible);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (dropdownBusinessRef.current && !dropdownBusinessRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setBusinessVisible(false);
            }
        };

        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Search Text
    const [searchText, setSearchText] = useState('');

    // For make searchbar width bigger when click
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                inputRef.current &&
                !inputRef.current.contains(target) &&
                !(target && target.classList && target.classList.contains('set_input_under_right'))
            ) {
                setIsSearchExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSearchExpandedClick = () => {
        setIsSearchExpanded(true);
    };

    const handleClearText = () => {
        setSearchText('');
    };

    const handleInputBlur = () => {
        setIsSearchExpanded(false);
    };

    // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         const query = encodeURIComponent(searchText);
    //         window.location.href = `/search-result?query=${query}`;
    //     }
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        localStorage.setItem('searchText', e.target.value);
    };


    // 👇️ Toggle class on click Show And Hide Account Dropdown (Icon / MOBILE)
    const [isAccountMobileVisible, setAccountMobileVisible] = useState(false);
    const dropdownAccountRefMobile = useRef(null);
    const handleAccountMobileClick = () => {
        setAccountMobileVisible(!isAccountMobileVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (dropdownAccountRefMobile.current && !dropdownAccountRefMobile.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setAccountMobileVisible(false);
            }
        };

        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    // 👇️ Toggle class on click Show And Hide Search Dropdown (MOBILE)
    // Search Text
    const [searchTextMobile, setSearchTextMobile] = useState('');

    // For making the search bar width bigger when clicked
    const [isSearchExpandedMobile, setIsSearchExpandedMobile] = useState(false);
    const inputRefMobile = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutsideMobile = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                inputRefMobile.current &&
                !inputRefMobile.current.contains(target) &&
                !(target && target.classList && target.classList.contains('set_input_under_right_mobile'))
            ) {
                setIsSearchExpandedMobile(false);
            }
        };

        document.addEventListener('click', handleClickOutsideMobile);

        return () => {
            document.removeEventListener('click', handleClickOutsideMobile);
        };
    }, []);

    const handleSearchExpandedClickMobile = () => {
        setIsSearchExpandedMobile(true);
    };

    const handleClearTextMobile = () => {
        setSearchTextMobile('');
    };

    const handleInputBlurMobile = () => {
        setIsSearchExpandedMobile(false);
    };

    const handleChangeMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextMobile(e.target.value);
        localStorage.setItem('searchTextMobile', e.target.value);
    };
    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container block lg:grid grid-cols-12 items-center">
                        {/* Logo */}
                        <div className="col-span-2 hidden lg:flex logo">
                            <Link href='/' className="flex items-center gap-2  ml-[8px]">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[16px]">Marketplace</span>
                            </Link>
                        </div>

                        {/* Search */}
                        <div
                            className={`col-span-4 ml-0 lg:ml-10 hidden lg:flex search-bar relative ${isSearchExpanded ? 'w-60 xl:w-80' : 'w-52'}`}>
                            <input
                                ref={inputRef}
                                type="text"
                                className={`border text-[14px] text-prgcolor border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 ${isSearchExpanded ? 'w-60 xl:w-80' : 'w-52'}`}
                                placeholder="Search Marketplace"
                                value={searchText}
                                onChange={handleChange}
                                onFocus={handleSearchExpandedClick}
                                // onKeyPress={handleKeyPress} // Handle Enter key press
                                style={{
                                    position: 'absolute',
                                    zIndex: 999, // Ensure it's above other content
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: 0,
                                }}
                            />

                            <div id="search_dropdown_menu"
                                 className={`search-dropdown-menu ${isSearchExpanded ? 'h-[180px] pt-2 opacity-100' : 'opacity-0 h-0'} overflow-hidden top-6 z-50 absolute text-gray-700 bg-white rounded shadow border`}>
                                <div className="container p-0">
                                    <div className="col px-3 pl-[14px] flex items-center pb-2 w-60 xl:w-80">
                                        <div className="flex items-center gap-3 justify-between w-full">
                                            <div className="left flex items-center gap-1">
                                                <CiClock2 size={20} className="text-primary"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                        Recent Searches
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <button type='button' className="text-[14px] text-primary">Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="pt-2 px-3 pl-[14px] space-y-2 text-[14px] text-[#828D9E]">
                                        <li className="flex items-center justify-between gap-2 hover:text-primary">
                                            <div className="left_wrap flex items-center gap-2">
                                                <Image src={ProductOneImg} className="w-5 h-5 border rounded-full"
                                                       alt="ProductImg"/>
                                                <Link href='/search-result'>polo shirts</Link>
                                            </div>
                                            <div className="remove_icon">
                                                <RxCross1 size={20}
                                                          className="p-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-600"/>
                                            </div>
                                        </li>

                                        <li className="flex items-center justify-between gap-2 hover:text-primary">
                                            <div className="left_wrap flex items-center gap-2">
                                                <Image src={ProductOneImg} className="w-5 h-5 border rounded-full"
                                                       alt="ProductImg"/>
                                                <Link href='/search-result'>hats</Link>
                                            </div>
                                            <div className="remove_icon">
                                                <RxCross1 size={20}
                                                          className="p-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-600"/>
                                            </div>
                                        </li>

                                        <li className="flex items-center justify-between gap-2 hover:text-primary">
                                            <div className="left_wrap flex items-center gap-2">
                                                <Image src={ProductOneImg} className="w-5 h-5 border rounded-full"
                                                       alt="ProductImg"/>
                                                <Link href='/search-result'>new shirts</Link>
                                            </div>
                                            <div className="remove_icon">
                                                <RxCross1 size={20}
                                                          className="p-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-600"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                <IoSearchOutline
                                    className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                            </div>

                            <div
                                className={`set_input_under_right absolute right-0 inset-y-0 flex items-center cursor-pointer ${searchText.length > 0 ? 'opacity-100' : 'opacity-0'}`}
                                onClick={handleClearText}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-ml-1 mr-3 h-4 w-4 z-[9999] text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            {isSearchExpanded && <div className="overlay-blur" onClick={handleInputBlur}></div>}
                        </div>

                        {/* Menu */}
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
                                <IoCartOutline className="w-full h-[24px] text-prgcolor group-hover:text-primary"/>
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
                                        className="flex absolute top-[-1px] -right-[10px] bg-[#E5080A] rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
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
                                        className="flex absolute top-[-1px] -right-[10px] bg-[#E5080A] rounded-full text-white text-[10px] w-4 h-4 items-center justify-center">
                                        12
                                    </div>
                                </div>
                                <div
                                    className="text-prgcolor group-hover:text-primary transition">
                                    Notifications
                                </div>
                            </Link>

                            {/* Business Icon */}
                            <div onClick={handleBusinessClick}
                                 ref={dropdownBusinessRef}
                                 className="last_business_icon cursor-pointer px-[10px] flex flex-col items-center">
                                <div className="dropdown inline-block relative">
                                    {/* Main SVG */}
                                    <div className="relative">
                                        <HiOutlineSquaresPlus
                                            className={`w-full h-[24px] profile_icon ${isBusinessVisible ? 'text-primary' : 'text-prgcolor'}`}/>
                                    </div>
                                    {isBusinessVisible &&
                                        <div
                                            id="business_dropdown_menu"
                                            className="business-dropdown-menu cursor-auto absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                            <div className="container">
                                                <div className="mt-3 space-y-0 text-[14px]">
                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-[19px] h-[19px] transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path
                                                                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                                                            <path d="m3.3 7 8.7 5 8.7-5"/>
                                                            <path d="M12 22V12"/>
                                                        </svg>
                                                        <h4 className="relative">
                                                            Sell on Nosres
                                                            <span
                                                                className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                        </h4>
                                                    </Link>

                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24
                                                        24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M22 8.35V20a2 2
                                                        0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2
                                                        0 0 1 22 8.35Z"/>
                                                            <path d="M6 18h12"/>
                                                            <path d="M6 14h12"/>
                                                            <rect width="12"
                                                                  height="12" x="6" y="10"/>
                                                        </svg>
                                                        <h4 className="relative">
                                                            Fulfill with Nosres
                                                            <span
                                                                className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                        </h4>
                                                    </Link>

                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-[18px] h-[18px] transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="m3 11 18-5v12L3 14v-3z"/>
                                                            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                                                        </svg>
                                                        <h4 className="relative">
                                                            Advertise with Nosres
                                                            <span
                                                                className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                        </h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div
                                    className={`profile_text transition ${isBusinessVisible ? 'text-primary' : 'text-prgcolor'}`}>
                                    For Business
                                </div>
                            </div>

                            {/* User Icon */}
                            <div onClick={handleAccountClick}
                                 ref={dropdownAccountRef}
                                 className="last_user_icon cursor-pointer px-[10px] flex flex-col items-center">
                                <div className="dropdown inline-block relative">
                                    <div
                                        className="text-center cursor-pointer text-prgcolor transition relative">
                                        <HiUserCircle
                                            className={`w-full h-[26px] profile_icon ${isAccountVisible ? 'text-primary' : 'text-gray-500'}`}/>
                                    </div>
                                    {isAccountVisible &&
                                        <div
                                            id="account_dropdown_menu"
                                            className="account-dropdown-menu cursor-auto absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                            <div className="container">
                                                <div className="col flex items-center px-0 pt-[15px] pb-2">
                                                    <div className="flex cursor-pointer items-center gap-3">
                                                        <HiUserCircle size={50} className="text-primary"/>
                                                        <div className="text">
                                                            <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                                John Doe
                                                            </h2>
                                                            <h4 className="text-graycolor text-[12px]">
                                                                johndoe
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="mx-0">
                                                    <button type="button"
                                                            className="mt-2 w-full rounded text-[14px] text-primary hover:text-white hover:bg-primary py-2 bg-[#F9FAFB] transition">
                                                        My Nosres Account
                                                    </button>
                                                </div>

                                                <div className="mt-3 space-y-0 text-[14px]">
                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24
                                                        24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M6 2 3 6v14a2
                                                        2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                                                            <path d="M3 6h18"/>
                                                            <path d="M16 10a4 4 0
                                                        0 1-8 0"/>
                                                        </svg>
                                                        <h4 className="relative">
                                                            My Orders
                                                            <span
                                                                className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                        </h4>
                                                    </Link>

                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
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
                                                        <h4 className="relative">
                                                            Store Manager
                                                            <span
                                                                className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                        </h4>
                                                    </Link>

                                                    <div className="py-2">
                                                        <hr/>
                                                    </div>

                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
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
                                                        <h4>Settings</h4>
                                                    </Link>

                                                    <Link href='#'
                                                          className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
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
                                                        <h4>Help & Support</h4>
                                                    </Link>

                                                    <Link href='#'
                                                          className="flex gap-2 cursor-pointer items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                        <svg
                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                                            <polyline points="16 17 21 12 16 7"/>
                                                            <line x1="21" x2="9" y1="12" y2="12"/>
                                                        </svg>
                                                        <h4>Sign Out</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div
                                    className={`profile_text transition ${isAccountVisible ? 'text-primary' : 'text-prgcolor'}`}>
                                    Profile
                                </div>
                            </div>
                        </div>

                        {/* Mobile/Tab Icons */}
                        <div className="mobile_tab_menu w-full">
                            <div className="flex lg:hidden items-center gap-8 justify-between">
                                {/* Mobile Logo */}
                                <Link href='/' className="mobile_logo ml-2 flex items-cente">
                                    <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                </Link>

                                {/* Mobile Search */}
                                <div
                                    className={`flex lg:hidden search-bar relative ${isSearchExpandedMobile ? 'w-52 xl:w-80' : 'w-52'}`}>
                                    <input
                                        ref={inputRefMobile}
                                        type="text"
                                        className={`border text-[14px] text-prgcolor border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 ${isSearchExpandedMobile ? 'w-52 xl:w-80' : 'w-52'}`}
                                        placeholder="Search Marketplace"
                                        value={searchTextMobile}
                                        onChange={handleChangeMobile}
                                        onFocus={handleSearchExpandedClickMobile}
                                        style={{
                                            position: 'absolute',
                                            zIndex: 999, // Ensure it's above other content
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            left: 0,
                                        }}
                                    />

                                    <div id="search_dropdown_menu_mobile"
                                         className={`search-dropdown-menu ${isSearchExpandedMobile ? 'h-[180px] pt-2 opacity-100' : 'opacity-0 h-0'} overflow-hidden top-6 z-50 absolute text-gray-700 bg-white rounded shadow border`}>
                                        <div className="container p-0">
                                            <div className="col px-3 pl-[14px] flex items-center pb-2 w-52 xl:w-80">
                                                <div className="flex items-center gap-3 justify-between w-full">
                                                    <div className="left flex items-center gap-1">
                                                        <CiClock2 size={20} className="text-primary"/>
                                                        <div className="text">
                                                            <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                                Recent Searches
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <button type='button' className="text-[14px] text-primary">Clear
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <ul className="pt-2 px-3 pl-[14px] space-y-2 text-[14px] text-[#828D9E]">
                                                <li className="flex items-center justify-between gap-2 hover:text-primary">
                                                    <div className="left_wrap flex items-center gap-2">
                                                        <Image src={ProductOneImg}
                                                               className="w-5 h-5 border rounded-full"
                                                               alt="ProductImg"/>
                                                        <Link href='/search-result'>polo shirts</Link>
                                                    </div>
                                                    <div className="remove_icon">
                                                        <RxCross1 size={20}
                                                                  className="p-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-600"/>
                                                    </div>
                                                </li>

                                                <li className="flex items-center justify-between gap-2 hover:text-primary">
                                                    <div className="left_wrap flex items-center gap-2">
                                                        <Image src={ProductOneImg}
                                                               className="w-5 h-5 border rounded-full"
                                                               alt="ProductImg"/>
                                                        <Link href='/search-result'>hats</Link>
                                                    </div>
                                                    <div className="remove_icon">
                                                        <RxCross1 size={20}
                                                                  className="p-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-600"/>
                                                    </div>
                                                </li>

                                                <li className="flex items-center justify-between gap-2 hover:text-primary">
                                                    <div className="left_wrap flex items-center gap-2">
                                                        <Image src={ProductOneImg}
                                                               className="w-5 h-5 border rounded-full"
                                                               alt="ProductImg"/>
                                                        <Link href='/search-result'>new shirts</Link>
                                                    </div>
                                                    <div className="remove_icon">
                                                        <RxCross1 size={20}
                                                                  className="p-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-600"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                        <IoSearchOutline
                                            className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"
                                        />
                                    </div>

                                    <div
                                        className={`set_input_under_right_mobile absolute right-0 inset-y-0 flex items-center cursor-pointer ${searchTextMobile.length > 0 ? 'opacity-100' : 'opacity-0'}`}
                                        onClick={handleClearTextMobile}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="-ml-1 mr-3 h-4 w-4 z-[9999] text-gray-400 hover:text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>

                                    {isSearchExpandedMobile &&
                                        <div className="overlay-blur" onClick={handleInputBlurMobile}></div>}
                                </div>

                                {/* Mobile Profile */}
                                <div onClick={handleAccountMobileClick}
                                     ref={dropdownAccountRefMobile}
                                     className="last_user_mobile_icon cursor-pointer px-[10px] flex flex-col items-center">
                                    <div className="dropdown inline-block relative">
                                        <div
                                            className="text-center cursor-pointer text-prgcolor transition relative">
                                            <HiUserCircle
                                                className={`w-full h-[24px] profile_icon ${isAccountMobileVisible ? 'text-primary' : 'text-gray-500'}`}/>
                                        </div>
                                        {isAccountMobileVisible &&
                                            <div id="account_mobile_dropdown_menu"
                                                 className="account-mobile-dropdown-menu cursor-auto absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                                <div className="container">
                                                    <div className="col flex items-center px-0 pt-[15px] pb-2">
                                                        <div className="flex cursor-pointer items-center gap-3">
                                                            <HiUserCircle size={50} className="text-primary"/>
                                                            <div className="text">
                                                                <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                                    John Doe
                                                                </h2>
                                                                <h4 className="text-graycolor text-[12px]">
                                                                    johndoe
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="mx-0">
                                                        <button type="button"
                                                                className="mt-2 w-full rounded text-[14px] text-primary hover:text-white hover:bg-primary py-2 bg-[#F9FAFB] transition">
                                                            My Nosres Account
                                                        </button>
                                                    </div>

                                                    <div className="mt-3 space-y-0 text-[14px]">
                                                        <Link href='#'
                                                              className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                            <svg
                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24
                                                        24" fill="none" stroke="#6B7280" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                                <path d="M6 2 3 6v14a2
                                                        2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                                                                <path d="M3 6h18"/>
                                                                <path d="M16 10a4 4 0
                                                        0 1-8 0"/>
                                                            </svg>
                                                            <h4 className="relative">
                                                                My Orders
                                                                <span
                                                                    className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                            </h4>
                                                        </Link>

                                                        <Link href='#'
                                                              className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                            <svg
                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
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
                                                            <h4 className="relative">
                                                                Store Manager
                                                                <span
                                                                    className="absolute -right-8 -top-1 text-[12px] text-primary">BETA</span>
                                                            </h4>
                                                        </Link>

                                                        <div className="py-2">
                                                            <hr/>
                                                        </div>

                                                        <Link href='#'
                                                              className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                            <svg
                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
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
                                                            <h4>Settings</h4>
                                                        </Link>

                                                        <Link href='#'
                                                              className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                            <svg
                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
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
                                                            <h4>Help & Support</h4>
                                                        </Link>

                                                        <Link href='#'
                                                              className="flex gap-2 cursor-pointer items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                            <svg
                                                                className="w-4 h-4 transition duration-75 group-hover:fill-primary"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                                fill="#6B7280"
                                                            >
                                                                <path d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0
                                                        1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0
                                                        1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5-1.97-1.97a.749.749 0 0 1
                                                        .326-1.275.749.749 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25
                                                        3.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0
                                                        1 0-1.5Z"></path>
                                                            </svg>
                                                            <h4>Sign Out</h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div
                                        className={`profile_text text-[12px] transition ${isAccountMobileVisible ? 'text-primary' : 'text-prgcolor'}`}>
                                        Profile
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
            </section>
        </>
    )
        ;
}

export default Header;