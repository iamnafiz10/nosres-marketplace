'use client';
import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import LogoImg from '@/../public/assets/images/logo.svg';
import useLoading from "@/app/useLoading";
import {usePathname} from "next/navigation";

function HeaderRe() {
    const loading = useLoading();
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
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container block lg:grid grid-cols-12 items-center justify-between">
                        {/* Logo */}
                        <div className="ml-[0px] col-span-6 hidden lg:flex logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[16px]">Support</span>
                            </Link>
                        </div>

                        {/* Buttons */}
                        <div
                            className={`col-span-6 hidden lg:flex gap-4 relative justify-end`}>
                            <button
                                className="text-white bg-primary hover:bg-transparent hover:text-primary rounded px-6 py-2 border text-[14px]">
                                Report an Issue
                            </button>
                            <button
                                className="text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                                Sign In
                            </button>
                        </div>

                        {/* Mobile/Tab Icons */}
                        <div className="mobile_tab_menu w-full">
                            <div className="flex lg:hidden items-center gap-0 justify-between">
                                {/* Mobile Logo */}
                                <Link href='/' className="mobile_logo ml-0 flex items-cente">
                                    <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                </Link>

                                {/* Buttons */}
                                <div
                                    className={`col-span-6 flex lg:hidden gap-4 relative justify-end`}>
                                    <button
                                        className="text-white bg-primary hover:bg-transparent hover:text-primary rounded px-6 py-2 border text-[14px]">
                                        Report an Issue
                                    </button>
                                    <button
                                        className="text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                                        Sign In
                                    </button>
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

export default HeaderRe;