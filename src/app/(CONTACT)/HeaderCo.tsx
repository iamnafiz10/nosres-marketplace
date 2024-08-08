'use client';
import React, {useState, useRef, useEffect} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {HiUserCircle} from "react-icons/hi";
import {IoIosArrowDown} from "react-icons/io";
import {HiOutlineBars3} from "react-icons/hi2";
import {IoSearchOutline} from "react-icons/io5";
import {CiClock2} from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import WhoImg1 from '@/../public/assets/images/m1.svg';
import WhoImg2 from '../../assets/images/m2.svg';
import WhoImg3 from '../../assets/images/m3.svg';
import WhoImg4 from '../../assets/images/m4.svg';
import WhoImg5 from '../../assets/images/m5.svg';
import WhoImg6 from '../../assets/images/m6.svg';

import UbImg1 from '../../assets/images/ub1.svg';
import UbImg2 from '../../assets/images/ub2.svg';
import UbImg3 from '../../assets/images/ub3.svg';
import UbImg4 from '../../assets/images/ub4.svg';

import RsImg1 from '../../assets/images/rs1.svg';
import RsImg2 from '../../assets/images/rs2.svg';
import RsImg3 from '../../assets/images/rs3.svg';
import RsImg4 from '../../assets/images/rs4.svg';
import RsImg5 from '../../assets/images/rs5.svg';
import RsImg6 from '../../assets/images/rs6.svg';

import LogoImg from '../../assets/images/logo.svg';
import {Modal} from 'flowbite-react';
import {useLocation} from 'react-router-dom';

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

    // 👇️ Toggle class on click Show And Hide Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState(false);
    const handleAccountClick = () => {
        const account = document.getElementById('account_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-dropdown-menu');
            } else {
                account.classList.add('show-account-dropdown-menu');
            }
            setAccountVisible(!isAccountVisible);
        }
    };

    const [openModal, setOpenModal] = useState(false);

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

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/search-result') {
            // Preserve search text only on search details page
            const storedSearchText = localStorage.getItem('searchText');
            if (storedSearchText) {
                setSearchText(storedSearchText);
            }
        } else {
            // Clear search text on other pages
            setSearchText('');
            localStorage.removeItem('searchText');
        }
    }, [location.pathname]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const query = encodeURIComponent(searchText);
            window.location.href = `/search-result?query=${query}`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        localStorage.setItem('searchText', e.target.value);
    };


    // For Mobile-search-bar ---------------------------------------------
    const [mobileSearchText, setMobileSearchText] = useState('');
    const [isMobileSearchExpanded, setIsMobileSearchExpanded] = useState(false);
    const mobileInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (location.pathname === '/search-result') {
            // Preserve search text only on search details page
            const storedSearchText = localStorage.getItem('mobileSearchText');
            if (storedSearchText) {
                setMobileSearchText(storedSearchText);
            }
        } else {
            // Clear search text on other pages
            setMobileSearchText('');
            localStorage.removeItem('mobileSearchText');
        }
    }, [location.pathname]);


    const handleMobileSearchExpandedClick = () => {
        setIsMobileSearchExpanded(true);
    };

    const handleMobileClearText = () => {
        setMobileSearchText('');
    };

    const handleMobileInputBlur = () => {
        setIsMobileSearchExpanded(false);
    };

    const handleMobileKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const query = encodeURIComponent(mobileSearchText);
            window.location.href = `/search-result?query=${query}`;
        }
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobileSearchText(e.target.value);
        localStorage.setItem('mobileSearchText', e.target.value);
    };

    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-xl">nosres</span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex invest">
                            <button
                                className="text-primary hover:bg-primary hover:text-white rounded px-6 py-1 border text-[14px]">Invest
                            </button>
                        </div>

                        <div className={`hidden lg:flex search-bar relative ${isSearchExpanded ? 'w-80' : 'w-52'}`}>
                            <input
                                ref={inputRef}
                                type="text"
                                className={`border text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 ${isSearchExpanded ? 'w-80' : 'w-52'}`}
                                placeholder=" Search nosres.com"
                                value={searchText}
                                onChange={handleChange}
                                onFocus={handleSearchExpandedClick}
                                onKeyPress={handleKeyPress} // Handle Enter key press
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
                                    <div className="col px-3 pl-[14px] flex items-center pb-2 w-80">
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
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres for business</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres for business</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres for business</Link>
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

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Who We Are
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[200px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="container">
                                        <div className="grid grid-cols-3 gap-2 h-[200px] pt-2 pb-0">
                                            <Link href='/about'
                                                  className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            About Nosres
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">Everything you need
                                                            to
                                                            know about Nosres.</p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Newsroom
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Information about Nosres, including press releases, images,
                                                            etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg3} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Careers
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Discover all career opportunities at Nosres.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg4} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Investors
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Know why you need to invest in Nosres.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg5} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Brand Resources
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Learn about the Nosres brand guidelines.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg6} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Contact Us
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Get in touch with the Nosres Team.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="two group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Our Business Portfolio
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[200px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="container">
                                        <div className="grid grid-cols-3 gap-2 h-[200px] pt-2">
                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={UbImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Marketplace
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Buy and sell products on a secure and trusted
                                                            marketplace.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={UbImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Pay
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Nosres Pay offers a secure, easy and fast way to pay,
                                                            receive
                                                            and send money.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={UbImg3} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Logistics
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            We store your items, we pack and ship
                                                            them when customers order them.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={UbImg4} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Telecom
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            We provide one of the most flexible wireless Internet
                                                            service
                                                            plans in the country.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="three group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Resources
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="px-10 for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[200px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="container">
                                        <div className="grid grid-cols-3 gap-2 h-[200px] pt-2">
                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={RsImg1} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Support Center
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            We are here to help you with all your inquiries.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={RsImg2} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres for Business
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            We provide you with the tools and techniques to promote and
                                                            market your business.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={RsImg3} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres for Career Seekers
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Discover all career opportunities at
                                                            Nosres.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={RsImg4} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres for Investors
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Know why you need to invest in Nosres.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={RsImg5} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres for Media
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Get Nosres assets, trademarks, and learn about our brand
                                                            guidelines.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={RsImg6} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Nosres for Partners
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Learn how to become a Nosres company.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="five">
                                <div className="dropdown inline-block relative">
                                    <div onClick={handleAccountClick}
                                         className="mt-2 text-center cursor-pointer text-primary transition relative">
                                        <HiUserCircle size={35}/>
                                    </div>

                                    <div id="account_dropdown_menu"
                                         className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                        <div className="container">
                                            <div
                                                className="col flex items-center px-2 h-[85px]">
                                                <div className="flex items-center gap-3">
                                                    <HiUserCircle size={70} className="text-primary"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                            Nosres Account
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <p className="mt-2">
                                                <Link href='#' className="text-primary">
                                                    Sign in
                                                </Link> to your Nosres Account or <Link href='#'
                                                                                        className="text-primary">
                                                create
                                            </Link> one. A Nosres account gives you access to
                                                all Nosres services.
                                            </p>
                                            <div className="flex justify-start text-center">
                                                <Link href='/'
                                                      className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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
                            className={`block lg:hidden search-bar-mobile relative ${isMobileSearchExpanded ? 'w-full' : 'w-full'}`}>
                            <input
                                ref={mobileInputRef}
                                type="text"
                                className={`border text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 ${isMobileSearchExpanded ? 'w-full' : 'w-full'}`}
                                placeholder="Search nosres.com"
                                value={mobileSearchText}
                                onChange={handleMobileChange}
                                onFocus={handleMobileSearchExpandedClick}
                                onBlur={handleMobileInputBlur}
                                onKeyPress={handleMobileKeyPress}
                                style={{
                                    position: 'absolute',
                                    zIndex: 999,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: 0,
                                }}
                            />


                            <div id="search_dropdown_menu"
                                 className={`search-dropdown-menu ${isMobileSearchExpanded ? 'h-[180px] w-full pt-2 opacity-100' : 'opacity-0 h-0'} overflow-hidden top-6 z-50 absolute text-gray-700 bg-white rounded shadow border`}>
                                <div className="container-full pb-0">
                                    <div className="col px-3 flex items-center pb-2 w-full">
                                        <div className="flex items-center gap-3 justify-between w-full">
                                            <div className="left flex items-center gap-1">
                                                <CiClock2 size={20} className="text-primary"/>
                                                <div className="text">
                                                    <h4 className="text-[#252C32] font-semibold text-[16px]">
                                                        Recent Searches
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <button type='button' className="text-[14px] text-primary">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <ul className="pt-2 px-3 pl-[14px] space-y-2 text-[14px] text-[#828D9E]">
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres for business</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres for business</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres for business</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                <IoSearchOutline className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                            </div>

                            <div
                                className={`set_input_under_right absolute right-0 inset-y-0 flex items-center cursor-pointer ${mobileSearchText.length > 0 ? 'opacity-100' : 'opacity-0'}`}
                                onClick={handleMobileClearText}
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

                            {isMobileSearchExpanded &&
                                <div className="overlay-blur" onClick={handleMobileInputBlur}></div>}
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

                        <Link href='#' onClick={() => setOpenModal(true)}
                              className="w-full text-center text-gray-700 hover:text-primary transition relative">
                            <div
                                className="border-b border-gray-300 pl-4 pb-3 text-[14px] font-normal flex gap-2 items-center">
                                <span>Account</span>
                                <HiUserCircle size={22}/>
                            </div>
                        </Link>

                        {/* Mobile Account Modal */}
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header></Modal.Header>
                            <Modal.Body>
                                <div className="container">
                                    <div
                                        className="col flex items-center px-2 h-[85px]">
                                        <div className="flex items-center gap-3">
                                            <HiUserCircle size={70}/>
                                            <div className="text">
                                                <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                    Nosres Account
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p className="mt-2">
                                        <Link href='#' className="text-primary">
                                            Sign in
                                        </Link> to your Nosres Account or <Link href='#' className="text-primary">
                                        create
                                    </Link> one. A Nosres account gives you access to
                                        all Nosres services.
                                    </p>
                                    <div className="flex justify-start text-center">
                                        <Link href='/'
                                              className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default Header;