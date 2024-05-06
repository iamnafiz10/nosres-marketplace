"use client";
import React, {useEffect, useRef, useState} from 'react';
import UserImg from '@/../public/assets/images/profile/user.jpg';
import ProfileImg from '@/../public/assets/images/profile/profile-photo.jpg';
import CoverImg from '@/../public/assets/images/profile/cover-photo.jpg';
import Image from "next/image";
import {LuDot} from "react-icons/lu";
import Link from "next/link";
import {GoHeart, GoSync} from "react-icons/go";

function Page() {
    // 👇️ Add 3 dots
    const [profileDotClick, setProfileDotClick] = useState(false);
    const ProfileDotDropdownRef = useRef(null);
    const handleProfileDotClick = () => {
        setProfileDotClick(!profileDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (ProfileDotDropdownRef.current && !ProfileDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setProfileDotClick(false);
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
            <section id="profile-section">
                <div className="container_full pt-[50px]">
                    <div className="topbar bg-white py-2">
                        <div className="container">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src={UserImg} className="w-10 h-10 rounded-full" alt="UserImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] text-prgcolor font-[500]">John Doe</h4>
                                        <h4 className="text-[12px] text-graycolor">Taipei, Taiwan</h4>
                                    </div>
                                </div>
                                <button type='button'
                                        className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                  <span className="icon">
                                        <svg
                                            className="w-4 h-4 group-hover:stroke-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round">
                                        <path d="M17 3a2.85 2.83 0 1 1
                                        4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                        <path d="m15 5 4 4"/>
                                    </svg>
                                  </span>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user_top_details h-[400px]">
                    <div className="container">
                        <div className="relative">
                            <div className="cover_photo cursor-pointer">
                                <Image src={CoverImg} className="w-full h-[180px] rounded rounded-t-none"
                                       alt="CoverImg"/>
                            </div>

                            <div className="absolute w-full top-[110px] left-[30px]">
                                <div className="profile_photo cursor-pointer">
                                    <Image src={ProfileImg} className="w-[120px] h-[120px] ring ring-white rounded-full"
                                           alt="ProfileImg"/>
                                </div>

                                <div className="user_details text-start pt-0 text-white">
                                    <div className="ml-[3px]">
                                        <h4 className='mt-3 text-[24px] font-semibold'>
                                            Jebon Ahmed Sakib
                                        </h4>
                                        <h4 className="text-[14px] mt-0">
                                            Logic will get you from A to B. Imagination will take you everywhere.”
                                            –Albert
                                            Einstein
                                        </h4>
                                    </div>

                                    <div className="flex w-full items-end justify-between">
                                        <div className="wrap">
                                            <div className="flex items-center gap-0 mt-4 text-[14px]">
                                                <div className="flex items-center gap-1">
                                                    <div className="icon">
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                    24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M20 10c0 6-8 12-8
                                        12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                            <circle cx="12" cy="10" r="3"/>
                                                        </svg>
                                                    </div>
                                                    <h4>
                                                        Taipei, Taiwan
                                                    </h4>
                                                </div>
                                                <div>
                                                    <LuDot size={17}/>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="icon">
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                            24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M8
                                            2v4"/>
                                                            <path d="M16 2v4"/>
                                                            <rect width="18" height="18" x="3" y="4" rx="2"/>
                                                            <path
                                                                d="M3 10h18"/>
                                                            <path d="M8 14h.01"/>
                                                            <path d="M12 14h.01"/>
                                                            <path d="M16
                                            14h.01"/>
                                                            <path d="M8 18h.01"/>
                                                            <path d="M12 18h.01"/>
                                                            <path d="M16
                                            18h.01"/>
                                                        </svg>
                                                    </div>
                                                    <h4>
                                                        Joined May 2024
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="ml-[3px] mt-2 flex items-center gap-0 text-[14px]">
                                                <h4 className="cursor-pointer">
                                                    26K followees
                                                </h4>
                                                <LuDot size={17}/>
                                                <h4 className="cursor-pointer">
                                                    26K followees
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="buttons flex items-center gap-3">
                                            <button type='button'
                                                    className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                                <svg
                                                    className="w-4 h-4 group-hover:stroke-white"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M17 3a2.85 2.83 0 1 1
                                        4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                    <path d="m15 5 4 4"/>
                                                </svg>
                                                Edit Profile
                                            </button>

                                            <button type='button'
                                                    className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                                <svg
                                                    className="w-4 h-4 group-hover:stroke-white"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                            24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M5 12s2.545-5
                                                7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/>
                                                    <path d="M12 13a1 1 0 1 0
                                                0-2 1 1 0 0 0 0 2z"/>
                                                    <path
                                                        d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/>
                                                    <path
                                                        d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
                                                </svg>
                                                View as
                                            </button>

                                            <div className="flex items-center justify-end text-end">
                                                <div onClick={handleProfileDotClick}
                                                     ref={ProfileDotDropdownRef}
                                                     className="relative cursor-pointer">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#ffffff"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>

                                                    {profileDotClick &&
                                                        <div
                                                            className="dots-dropdown-menu w-[300px] absolute bottom-[50px] right-0 bg-white rounded shadow border">
                                                            <div className="container py-2">
                                                                <div className="space-y-1 text-[14px]">
                                                                    <div
                                                                        className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                        <GoSync
                                                                            className="h-[14px] text-[#6B7280] group-hover:text-primary"/>
                                                                        <h4 className="text-black">
                                                                            Share profile
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                        <svg
                                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                                    24" fill="none" stroke="#6B7280"
                                                                            strokeWidth="1.5" strokeLinecap="round"
                                                                            strokeLinejoin="round">
                                                                            <path d="M17 3a2.85 2.83 0 1 1
                                                                    4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                                            <path d="m15 5 4 4"/>
                                                                        </svg>
                                                                        <h4 className="text-black">
                                                                            Edit privacy
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;