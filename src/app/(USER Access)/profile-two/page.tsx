"use client";
import React, {useEffect, useRef, useState} from 'react';
import UserImg from '@/../public/assets/images/profile/user.jpg';
import ProfileImg from '@/../public/assets/images/profile/profile-photo.jpg';
import CoverImg from '@/../public/assets/images/profile/cover-photo.jpg';
import LogoImg from '@/../public/assets/images/logo.svg';
import Image from "next/image";
import {LuDot} from "react-icons/lu";
import {GoComment, GoHeart, GoHeartFill, GoSmiley, GoSync} from "react-icons/go";
import {Carousel, Modal, Tabs} from "flowbite-react";
import {HiUserCircle} from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import {IoMdGlobe} from "react-icons/io";
import useLoading from "@/app/useLoading";
import SliderOneImg from "../../../../public/assets/images/slider1.jpg";
import SliderTwoImg from "../../../../public/assets/images/slider2.jpg";
import SliderThreeImg from "../../../../public/assets/images/slider3.jpg";
import {IoCameraOutline, IoSearchOutline} from "react-icons/io5";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {HiOutlineChatBubbleLeft, HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";
import {Radio, RadioChangeEvent} from "antd";
import {PiHandsPrayingLight} from "react-icons/pi";

function Page() {
    const loading = useLoading();
    const currentYear = new Date().getFullYear();
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

    // Like post
    const [isClickedLikePostFour, setIsClickedLikePostFour] = useState(false);
    const [isClickedLikePostTwo, setIsClickedLikePostTwo] = useState(false);
    // 👇️ Post 4 dots (Other)
    const [postFourOtherDotClick, setPostFourOtherDotClick] = useState(false);
    const PostFourOtherDotDropdownRef = useRef(null);
    const handlePostFourOtherDotClick = () => {
        setPostFourOtherDotClick(!postFourOtherDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostFourOtherDotDropdownRef.current && !PostFourOtherDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostFourOtherDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // 👇️ Post 3 dots (Me)
    const [postMeDotClick, setPostMeDotClick] = useState(false);
    const PostMeDotDropdownRef = useRef(null);
    const handlePostMeDotClick = () => {
        setPostMeDotClick(!postMeDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostMeDotDropdownRef.current && !PostMeDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostMeDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Post Image Modal
    const [openStartPostImageModal, setOpenStartPostImageModal] = useState<boolean>(false);

    // For follow - following (One)
    const [isFollowingOne, setIsFollowingOne] = useState(false);
    const handleToggleFollowingOne = () => {
        setIsFollowingOne(!isFollowingOne);
    };

    // For follow - following (Banner)
    const [isFollowingBanner, setIsFollowingBanner] = useState(false);
    const handleToggleFollowingBanner = () => {
        setIsFollowingBanner(!isFollowingBanner);
    };

    // For follow - following (Top-Bar)
    const [isFollowingTopbar, setIsFollowingTopbar] = useState(false);
    const handleToggleFollowingTopbar = () => {
        setIsFollowingTopbar(!isFollowingTopbar);
    };

    // For follow - following (Back-Popup)
    const [isFollowingBack, setIsFollowingBack] = useState(false);
    const handleToggleFollowingBack = () => {
        setIsFollowingBack(!isFollowingBack);
    };

    // For follow - followees (popup)
    const [isFollowingFollowees, setIsFollowingFollowees] = useState(false);
    const handleToggleFollowingFollowees = () => {
        setIsFollowingFollowees(!isFollowingFollowees);
    };

    // Followers Popup
    const [openStartFollowersModal, setOpenStartFollowersModal] = useState<boolean>(false);
    // Followees Popup
    const [openStartFolloweesModal, setOpenStartFolloweesModal] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // PeopleMore Popup
    const [openStartPeopleMoreModal, setOpenStartPeopleMoreModal] = useState<boolean>(false);
    // For follow - following (People)
    const [isFollowingPeople, setIsFollowingPeople] = useState(false);
    const handleToggleFollowingPeople = () => {
        setIsFollowingPeople(!isFollowingPeople);
    };
    // StoresMore Popup
    const [openStartStoresMoreModal, setOpenStartStoresMoreModal] = useState<boolean>(false);
    // For follow - following (People)
    const [isFollowingStores, setIsFollowingStores] = useState(false);
    const handleToggleFollowingStores = () => {
        setIsFollowingStores(!isFollowingStores);
    };

    // Cover picture Image Modal
    const [openStartCoverViewModal, setOpenStartCoverViewModal] = useState<boolean>(false);

    // Profile picture Image Modal
    const [openStartProfileViewModal, setOpenStartProfileViewModal] = useState<boolean>(false);

    // EditProfile Modal
    const [openStartEditProfileModal, setOpenStartEditProfileModal] = useState<boolean>(false);


    // Profile image change popup
    const [openProfileImageModal, setOpenProfileImageModal] = useState<boolean>(false);
    // Image Upload Function
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleRemoveClick = () => {
        setSelectedFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleCanceltClick = () => {
        handleRemoveClick();
        setOpenProfileImageModal(false);
    };

    const handleSaveClick = () => {
        handleRemoveClick();
        setOpenProfileImageModal(false);
    };

    // Cover image change popup
    const [openCoverImageModal, setOpenCoverImageModal] = useState<boolean>(false);
    // Image Upload Function
    const [selectedFileCover, setSelectedFileCover] = useState<File | null>(null);
    const fileInputRefCover = useRef<HTMLInputElement | null>(null);

    const handleFileChangeCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        setSelectedFileCover(file);
    };

    const handleRemoveClickCover = () => {
        setSelectedFileCover(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRefCover.current) {
            fileInputRefCover.current.value = '';
        }
    };

    const handleCanceltClickCover = () => {
        handleRemoveClickCover();
        setOpenCoverImageModal(false);
    };

    const handleSaveClickCover = () => {
        handleRemoveClickCover();
        setOpenCoverImageModal(false);
    };

    // Topbar Show
    const [showTopbar, setShowTopbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopbar(true);
            } else {
                setShowTopbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Block Message Modal
    const [openBlockMesModal, setOpenBlockMesModal] = useState<boolean>(false);

    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };
    
    // Feedback Ad / Report Ad popup
    const [openReportAdModal, setOpenReportAdModal] = useState<boolean>(false);
    const [openReportAdSubmitModal, setOpenReportAdSubmitModal] = useState<boolean>(false);
    const [openReportAdSubmitConfirmModal, setOpenReportAdSubmitConfirmModal] = useState<boolean>(false);
    const handleAdSubmitButtonClick = () => {
        setOpenReportAdSubmitModal(false);
        setOpenReportAdModal(false);
        setOpenReportAdSubmitConfirmModal(false);
    }
    return (
        <>
            <section id="profile-section">
                <div className="container_full pt-[50px]">
                    <div
                        className={`topbar fixed border-t top-[50px] z-20 w-full bg-white py-2 ${showTopbar ? 'block' : 'hidden'}`}>
                        <div className="container">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src={UserImg} className="w-10 h-10 rounded-full" alt="UserImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] text-prgcolor font-[500]">Chelsea Woodler</h4>
                                        <h4 className="text-[12px] text-graycolor">London, UK</h4>
                                    </div>
                                </div>
                                <div className="first">
                                    {isFollowingTopbar ? (
                                        <button type='button' onClick={handleToggleFollowingTopbar}
                                                className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4 group-hover:stroke-white"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary group-hover:text-white">
                                                Following
                                            </h4>
                                        </button>
                                    ) : (
                                        <button type='button' onClick={handleToggleFollowingTopbar}
                                                className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4 group-hover:stroke-white"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary group-hover:text-white">
                                                Follow Back
                                            </h4>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user_top_details mt-[0px] h-[480px] md:h-[400px]">
                    <div className="container">
                        <div className="relative">
                            {/* Cover photo */}
                            <div onClick={() => setOpenStartCoverViewModal(true)}
                                 className="cover_photo cursor-pointer">
                                <Image src={CoverImg} className="w-full h-[180px] rounded rounded-t-none"
                                       alt="CoverImg"/>
                            </div>

                            <div className="user_details mt-[50px] text-start pt-0 text-white">
                                <div className="ml-[28px]">
                                    <h4 className='mt-3 text-[24px] font-semibold'>
                                        Chelsea Woodler
                                    </h4>
                                    <h4 className="text-[14px] mt-0 mr-[20px]">
                                        Dura lex, sed lex.
                                    </h4>
                                </div>

                                <div className="block md:flex w-full items-end justify-between">
                                    <div className="ml-[26px] wrap">
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
                                                <LuDot size={15}/>
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
                                            <h4 onClick={() => setOpenStartFollowersModal(true)}
                                                className="cursor-pointer hover:underline">
                                                26K followers
                                            </h4>
                                            <LuDot size={15}/>
                                            <h4 onClick={() => setOpenStartFolloweesModal(true)}
                                                className="cursor-pointer hover:underline">
                                                26K following
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="mt-6 md:mt-0 ml-[40px] md:ml-0 buttons flex items-center gap-3">
                                        <div className="first">
                                            {isFollowingBanner ? (
                                                <button type='button' onClick={handleToggleFollowingBanner}
                                                        className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                                    <div className="icon">
                                                        <svg
                                                            className="w-4 h-4 group-hover:stroke-white"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                            <circle cx="9" cy="7" r="4"/>
                                                            <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                        </svg>
                                                    </div>
                                                    <h4 className="text-[14px] text-primary group-hover:text-white">
                                                        Following
                                                    </h4>
                                                </button>
                                            ) : (
                                                <button type='button' onClick={handleToggleFollowingBanner}
                                                        className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                                    <div className="icon">
                                                        <svg
                                                            className="w-4 h-4 group-hover:stroke-white"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                            <circle cx="9" cy="7" r="4"/>
                                                            <line x1="19" x2="19" y1="8"
                                                                  y2="14"/>
                                                            <line x1="22" x2="16" y1="11" y2="11"/>
                                                        </svg>
                                                    </div>
                                                    <h4 className="text-[14px] text-primary group-hover:text-white">
                                                        Follow Back
                                                    </h4>
                                                </button>
                                            )}
                                        </div>
                                        <button type='button'
                                                className="py-2 px-4 group rounded bg-gray-100 flex items-center gap-2 text-[14px] text-primary hover:text-white hover:bg-primary">
                                            <HiOutlineChatBubbleLeft
                                                className="w-4 h-4 group-hover:text-white"/>
                                            Direct Message
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
                                                        className="dots-dropdown-menu w-[300px] absolute top-[15px] right-0 bg-white rounded shadow border">
                                                        <div className="container py-2">
                                                            <div className="space-y-1 text-[14px]">
                                                                <div onClick={() => setOpenReportAdModal(true)}
                                                                     className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                    <div className="icon">
                                                                        <svg
                                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round">
                                                                            <path d="M4 15s1-1 4-1 5 2 8 2
                                                                            4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                                                                            <line x1="4" x2="4" y1="22"
                                                                                  y2="15"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4 className="text-black">
                                                                        Report profile
                                                                    </h4>
                                                                </div>
                                                                <div onClick={() => setOpenBlockMesModal(true)}
                                                                     className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                    <div className="icon">
                                                                        <svg
                                                                            className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none" stroke="#6B7280"
                                                                            strokeWidth="1.5" strokeLinecap="round"
                                                                            strokeLinejoin="round">
                                                                            <circle cx="12" cy="12" r="10"/>
                                                                            <path d="m4.9 4.9 14.2 14.2"/>
                                                                        </svg>
                                                                    </div>
                                                                    <h4 className="text-black">
                                                                        Block
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

                            {/* Profile photo */}
                            <div onClick={() => setOpenStartProfileViewModal(true)}
                                 className="absolute top-[105px] ml-[32px] w-[120px] profile_photo cursor-pointer">
                                <Image src={ProfileImg}
                                       className="w-[120px] h-[120px] ring ring-white rounded-full"
                                       alt="ProfileImg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body Content */}
                <div className="container pt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col lg:col-span-8">
                            <div className="left_side_profile_tab">
                                <Tabs aria-label="Tabs with underline" style="underline">
                                    <Tabs.Item active title="Posts">
                                        <div className="block lg:flex items-start justify-between gap-0">
                                            <div className="box py-4 px-4 w-full lg:w-[185px] bg-white rounded">
                                                {loading ? (
                                                    <Skeleton width={50} height={50} borderRadius="100%"
                                                              count={1}/>
                                                ) : (
                                                    <>
                                                        <Image src={ProfileImg} className="w-12 h-12 rounded-full"
                                                               alt="ProfileImg"/>
                                                    </>
                                                )}

                                                {loading ? (
                                                    <Skeleton height={10} count={2}/>
                                                ) : (
                                                    <>
                                                        <h4 className="mt-1 text-[14px] font-[500]">
                                                            Jebon Ahmed Sakib
                                                        </h4>
                                                        <h4 className="text-[12px] text-graycolor">
                                                            26K followers
                                                        </h4>
                                                    </>
                                                )}

                                                <ul className="mt-2 space-y-2 text-[12px]">
                                                    {loading ? (
                                                        <Skeleton height={10} count={5}/>
                                                    ) : (
                                                        <>
                                                            <li className="flex items-center gap-2">
                                                        <span className="icon">
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#828D9E"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                                                            <rect width="20" height="14" x="2" y="6" rx="2"/>
                                                        </svg>
                                                    </span>
                                                                <h4>Web Developer</h4>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                        <span className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#828D9E" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"><path
                                                                d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path
                                                                d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                                                        </span>
                                                                <h4>BSc in Computer Science</h4>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                        <span className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#828D9E" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"><circle
                                                                cx="12"
                                                                cy="10"
                                                                r="1"/><path
                                                                d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"/><path
                                                                d="M6 17v.01"/><path d="M6 13v.01"/><path
                                                                d="M18 17v.01"/><path d="M18 13v.01"/><path
                                                                d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"/></svg>
                                                    </span>
                                                                <h4 className="mt-[1px]">MIT</h4>
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                        <span className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#828D9E" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"><path
                                                                d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path
                                                                d="M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"/></svg>
                                                        </span>
                                                                <h4>Video games</h4>
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                        <span className="icon">
                                                        <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#828D9E"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round"><path
                                                            d="M9 17H7A5 5 0 0 1 7 7h2"/><path
                                                            d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12"
                                                                                                 y2="12"/></svg>

                                                        </span>
                                                                <Link href='#'
                                                                      className="text-blue-500 hover:underline">jebonasakib.com</Link>
                                                            </li>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="post_wrap mt-6 lg:mt-0 w-full lg:w-[495px]">
                                                {/* Post Box Profile One */}
                                                <div className="post_box_wrap">
                                                    <div className="box bg-white px-4 py-4 rounded rounded-b-none">
                                                        <div className="flex items-center justify-between">
                                                            {loading ? (
                                                                <div
                                                                    className="flex items-center justify-start gap-2 w-full">
                                                                    <Skeleton width={50} height={50}
                                                                              borderRadius="100%"
                                                                              count={1}/>
                                                                    <Skeleton containerClassName="flex-1"
                                                                              height={50}
                                                                              count={1}/>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <Link href='#'
                                                                          className="flex items-center gap-1">
                                                                        <HiUserCircle size={35}
                                                                                      className="text-[#6B7280]"/>
                                                                        <div className="leading-[17px]">
                                                                            <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                                Robert Fox
                                                                            </h4>
                                                                            <div
                                                                                className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            1m ago
                                                        </span>
                                                                                <LuDot size={12}/>
                                                                                <IoMdGlobe size={13}/>
                                                                            </div>
                                                                        </div>
                                                                    </Link>

                                                                    <div
                                                                        className="flex items-center justify-end text-end">
                                                                        <div
                                                                            onClick={handlePostFourOtherDotClick}
                                                                            ref={PostFourOtherDotDropdownRef}
                                                                            className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postFourOtherDotClick ? 'bg-gray-100' : ''}`}>
                                                                            <svg
                                                                                className="w-3 h-3"
                                                                                fill="#828D9E"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 16 16">
                                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                            </svg>

                                                                            {postFourOtherDotClick &&
                                                                                <div
                                                                                    className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                                    <div className="container py-2">
                                                                                        <div
                                                                                            className="space-y-1 text-[14px]">
                                                                                            <div
                                                                                                className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                                <svg
                                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    fill="none"
                                                                                                    stroke="#6B7280"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round">
                                                                                                    <path
                                                                                                        d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                                                                                                    <path
                                                                                                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                                                                                                    <path
                                                                                                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                                                                                                    <line x1="2"
                                                                                                          x2="22"
                                                                                                          y1="2"
                                                                                                          y2="22"/>
                                                                                                </svg>
                                                                                                <h4>
                                                                                                    Hide post
                                                                                                </h4>
                                                                                            </div>

                                                                                            <div
                                                                                                className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                                <svg
                                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24
                                                                                 24" fill="none" stroke="#6B7280"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round">
                                                                                                    <path d="M4 15s1-1 4-1 5 2 8 2
                                                                                4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                                                                                                    <line x1="4"
                                                                                                          x2="4"
                                                                                                          y1="22"
                                                                                                          y2="15"/>
                                                                                                </svg>
                                                                                                <h4>
                                                                                                    Report post
                                                                                                </h4>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>

                                                        {loading ? (
                                                            <>
                                                                <Skeleton height={30} count={1}/>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <h4 className="mt-3 text-[14px] text-prgcolor">
                                                                    The HTCU23 Pro 5G stands as the pinnacle of
                                                                    smartphone
                                                                    innovation,
                                                                    offering
                                                                    unparalleled performance, connectivity, and
                                                                    functionality.
                                                                    Its sleek
                                                                    design
                                                                    houses a
                                                                    powerhouse of cutting-edge technology,
                                                                    delivering
                                                                    lightning-fast 5G
                                                                    connectivity
                                                                    and an immersive multimedia experience. With its
                                                                    advanced
                                                                    features
                                                                    and
                                                                    premium
                                                                    build quality, the HTCU23 Pro 5G redefines what
                                                                    a
                                                                    flagship
                                                                    smartphone can
                                                                    achieve
                                                                </h4>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="post_image mt-0">
                                                        {loading ? (
                                                            <>
                                                                <div
                                                                    className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                                    <Skeleton height={200} count={1}/>
                                                                    <Skeleton height={30} count={1}/>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Image src={SliderOneImg} className="w-full h-56"
                                                                       alt="PostImg"/>
                                                            </>
                                                        )}
                                                    </div>
                                                    {/* Post Icons */}
                                                    <div className="post_icons mt-0">
                                                        {loading ? (
                                                            <div
                                                                className="box mt-0 bg-white px-4 pt-0 pb-4 rounded">
                                                                <Skeleton height={40} count={1}/>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div
                                                                    className="flex items-center justify-between bg-white rounded rounded-t-none px-4 py-3 mt-0">
                                                                    <div className="flex items-center gap-1">
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => setIsClickedLikePostFour(!isClickedLikePostFour)}>
                                                                            {isClickedLikePostFour ? (
                                                                                <GoHeartFill
                                                                                    className="w-4 h-4 text-primary hover:text-primary"/>
                                                                            ) : (
                                                                                <GoHeart
                                                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                            )}
                                                                        </div>
                                                                        <div className="count">
                                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">112</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center gap-1">
                                                                        <div className="cursor-pointer">
                                                                            <GoComment
                                                                                className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                        </div>
                                                                        <div className="count">
                                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">852</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center gap-1">
                                                                        <div
                                                                            className="relative cursor-pointer">
                                                                            <GoSync
                                                                                className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                                        </div>
                                                                        <div className="count">
                                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">2k</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Post Box Profile two */}
                                                <div className="post_box_wrap">
                                                    <div
                                                        className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                                        <div className="flex items-center justify-between">
                                                            {loading ? (
                                                                <>
                                                                    <div
                                                                        className="flex items-center justify-start gap-2 w-full">
                                                                        <Skeleton width={50} height={50}
                                                                                  borderRadius="100%"
                                                                                  count={1}/>
                                                                        <Skeleton containerClassName="flex-1"
                                                                                  height={50}
                                                                                  count={1}/>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Link href='#'
                                                                          className="flex items-center gap-1">
                                                                        <HiUserCircle size={35}
                                                                                      className="text-[#6B7280]"/>
                                                                        <div className="leading-[17px]">
                                                                            <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                                John Doe
                                                                            </h4>

                                                                            <div
                                                                                className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            2h ago
                                                        </span>
                                                                                <LuDot size={12}/>
                                                                                <IoMdGlobe size={13}/>
                                                                            </div>
                                                                        </div>
                                                                    </Link>

                                                                    <div
                                                                        className="flex items-center justify-end text-end">
                                                                        <div onClick={handlePostMeDotClick}
                                                                             ref={PostMeDotDropdownRef}
                                                                             className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postMeDotClick ? 'bg-gray-100' : ''}`}>
                                                                            <svg
                                                                                className="w-3 h-3"
                                                                                fill="#828D9E"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 16 16">
                                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                            </svg>
                                                                            {postMeDotClick &&
                                                                                <div
                                                                                    className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                                    <div className="container py-2">
                                                                                        <div
                                                                                            className="space-y-1 text-[14px]">
                                                                                            <Link href='#'
                                                                                                  className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                                <svg
                                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round">
                                                                                                    <path d="M17 3a2.85 2.83 0 1 1
                                                                            4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                                                                    <path
                                                                                                        d="m15 5 4 4"/>
                                                                                                </svg>
                                                                                                <h4>
                                                                                                    Edit post
                                                                                                </h4>
                                                                                            </Link>

                                                                                            <div
                                                                                                className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                                <svg
                                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round">
                                                                                                    <path
                                                                                                        d="M3 6h18"/>
                                                                                                    <path
                                                                                                        d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                                                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0
                                                                            2 1 2 2v2"/>
                                                                                                    <line x1="10"
                                                                                                          x2="10"
                                                                                                          y1="11"
                                                                                                          y2="17"/>
                                                                                                    <line x1="14"
                                                                                                          x2="14"
                                                                                                          y1="11"
                                                                                                          y2="17"/>
                                                                                                </svg>
                                                                                                <h4>
                                                                                                    Delete post
                                                                                                </h4>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>

                                                        {loading ? (
                                                            <>
                                                                <Skeleton height={30} count={1}/>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <h4 className="mt-3 text-[14px] text-prgcolor">
                                                                    The SRS-XB100 speaker provides powerful, clear,
                                                                    expansive sound in a small, portable and durable
                                                                    body. Despite its size...
                                                                </h4>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Post Icons */}
                                                    <div className="post_icons mt-0">
                                                        {loading ? (
                                                            <div
                                                                className="box mt-0 bg-white px-4 pt-0 pb-4 rounded">
                                                                <Skeleton height={40} count={1}/>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div
                                                                    className="flex items-center justify-between bg-white border-t px-4 py-3 mt-0">
                                                                    <div className="flex items-center gap-1">
                                                                        <div className="cursor-pointer"
                                                                             onClick={() => setIsClickedLikePostTwo(!isClickedLikePostTwo)}>
                                                                            {isClickedLikePostTwo ? (
                                                                                <GoHeartFill
                                                                                    className="w-4 h-4 text-primary hover:text-primary"/>
                                                                            ) : (
                                                                                <GoHeart
                                                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                            )}
                                                                        </div>
                                                                        <div className="count">
                                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">112</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center gap-1">
                                                                        <div className="cursor-pointer">
                                                                            <GoComment
                                                                                className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                                        </div>
                                                                        <div className="count">
                                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">852</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center gap-1">
                                                                        <div className="cursor-pointer">
                                                                            <GoSync
                                                                                className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                                        </div>
                                                                        <div className="count">
                                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">2k</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tabs.Item>
                                    <Tabs.Item title="Media">
                                        <div className="post_image w-full mt-0">
                                            {loading ? (
                                                <>
                                                    <div className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                        <Skeleton height={200} count={1}/>
                                                        <Skeleton height={30} count={1}/>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div onClick={() => setOpenStartPostImageModal(true)}
                                                         className="flex items-center gap-2 w-full cursor-pointer">
                                                        <div className="w-full">
                                                            <Image src={SliderOneImg}
                                                                   className="w-full rounded h-[180px]"
                                                                   alt="SliderImg"/>
                                                        </div>
                                                        <div className="w-full">
                                                            <Image src={SliderTwoImg}
                                                                   className="w-full rounded h-[180px]"
                                                                   alt="SliderImg"/>
                                                        </div>
                                                        <div className="w-full">
                                                            <Image src={SliderOneImg}
                                                                   className="w-full rounded h-[180px]"
                                                                   alt="SliderImg"/>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className="post_image w-full mt-2">
                                            {loading ? (
                                                <>
                                                    <div className="box mt-0 bg-white px-4 pt-0 pb-0 rounded">
                                                        <Skeleton height={200} count={1}/>
                                                        <Skeleton height={30} count={1}/>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div onClick={() => setOpenStartPostImageModal(true)}
                                                         className="flex items-center gap-2 w-full cursor-pointer">
                                                        <div className="w-full">
                                                            <Image src={SliderOneImg}
                                                                   className="w-full rounded h-[180px]"
                                                                   alt="SliderImg"/>
                                                        </div>
                                                        <div className="w-full">
                                                            <Image src={SliderTwoImg}
                                                                   className="w-full rounded h-[180px]"
                                                                   alt="SliderImg"/>
                                                        </div>
                                                        <div className="w-full">
                                                            <Image src={SliderOneImg}
                                                                   className="w-full rounded h-[180px]"
                                                                   alt="SliderImg"/>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </Tabs.Item>
                                </Tabs>
                            </div>
                        </div>

                        <div className="col lg:col-span-4">
                            <div className="right_side"
                                 style={{
                                     padding: '12px 0px',
                                 }}
                            >
                                {loading ? (
                                    <div className="pb-[5px]">
                                        <Skeleton height={10} count={1}/>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-[14px] font-[500] text-prgcolor pb-[9px]">
                                            You may like to follow
                                        </h4>
                                    </>
                                )}
                                <hr/>
                                <div className="mt-[19px] people_content box rounded bg-white py-4 px-6">
                                    {loading ? (
                                        <Skeleton height={10} count={1}/>
                                    ) : (
                                        <>
                                            <div className="head text-[14px] font-[500] text-prgcolor pb-4">
                                                <h4>People</h4>
                                            </div>
                                        </>
                                    )}
                                    <div className="box cursor-pointer py-2 px-2 border rounded">
                                        {loading ? (
                                            <Skeleton height={60} count={1}/>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <div className="content">
                                                            <h4 className="text-[14px] text-prgcolor">Robert
                                                                Johnson</h4>
                                                        </div>
                                                    </div>
                                                    {isFollowingOne ? (
                                                        <div onClick={handleToggleFollowingOne}
                                                             className="following_box border py-1 px-4 rounded flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                    <circle cx="9" cy="7" r="4"/>
                                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-[14px] text-primary">
                                                                Following
                                                            </h4>
                                                        </div>
                                                    ) : (
                                                        <div onClick={handleToggleFollowingOne}
                                                             className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                            <div className="icon">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                    <circle cx="9" cy="7" r="4"/>
                                                                    <line x1="19" x2="19" y1="8"
                                                                          y2="14"/>
                                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-[14px] text-primary">
                                                                Follow
                                                            </h4>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                        {loading ? (
                                            <Skeleton height={60} count={1}/>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <div className="content">
                                                            <h4 className="text-[14px] text-prgcolor">Robert
                                                                Johnson</h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                        <div className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                                <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                <circle cx="9" cy="7" r="4"/>
                                                                <line x1="19" x2="19" y1="8"
                                                                      y2="14"/>
                                                                <line x1="22" x2="16" y1="11" y2="11"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-[14px] text-primary">
                                                            Follow
                                                        </h4>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                        {loading ? (
                                            <Skeleton height={60} count={1}/>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <div className="content">
                                                            <h4 className="text-[14px] text-prgcolor">Robert
                                                                Johnson</h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                        <div className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                                <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                <circle cx="9" cy="7" r="4"/>
                                                                <line x1="19" x2="19" y1="8"
                                                                      y2="14"/>
                                                                <line x1="22" x2="16" y1="11" y2="11"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-[14px] text-primary">
                                                            Follow
                                                        </h4>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {loading ? (
                                        <Skeleton height={10} count={1}/>
                                    ) : (
                                        <>
                                            <button onClick={() => setOpenStartPeopleMoreModal(true)} type='button'
                                                    className="pt-4 text-[14px] text-primary hover:underline">
                                                See more
                                            </button>
                                        </>
                                    )}
                                </div>

                                <div className="mt-4 Stores_content box rounded bg-white py-4 px-6">
                                    {loading ? (
                                        <Skeleton height={10} count={1}/>
                                    ) : (
                                        <>
                                            <div className="head text-[14px] font-[500] text-prgcolor pb-4">
                                                <h4>Stores</h4>
                                            </div>
                                        </>
                                    )}
                                    <div className="box cursor-pointer py-2 px-2 border rounded">
                                        {loading ? (
                                            <Skeleton height={60} count={1}/>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <div className="content">
                                                            <h4 className="text-[14px] text-prgcolor">London Store</h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                        <div className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                                <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                <circle cx="9" cy="7" r="4"/>
                                                                <line x1="19" x2="19" y1="8"
                                                                      y2="14"/>
                                                                <line x1="22" x2="16" y1="11" y2="11"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-[14px] text-primary">
                                                            Follow
                                                        </h4>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                        {loading ? (
                                            <Skeleton height={60} count={1}/>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <div className="content">
                                                            <h4 className="text-[14px] text-prgcolor">Paris Store</h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                        <div className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                                <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                <circle cx="9" cy="7" r="4"/>
                                                                <line x1="19" x2="19" y1="8"
                                                                      y2="14"/>
                                                                <line x1="22" x2="16" y1="11" y2="11"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-[14px] text-primary">
                                                            Follow
                                                        </h4>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                        {loading ? (
                                            <Skeleton height={60} count={1}/>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <div className="content">
                                                            <h4 className="text-[14px] text-prgcolor">Robert
                                                                Johnson</h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                        <div className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                                <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                                <circle cx="9" cy="7" r="4"/>
                                                                <line x1="19" x2="19" y1="8"
                                                                      y2="14"/>
                                                                <line x1="22" x2="16" y1="11" y2="11"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-[14px] text-primary">
                                                            Follow
                                                        </h4>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {loading ? (
                                        <Skeleton height={10} count={1}/>
                                    ) : (
                                        <>
                                            <button onClick={() => setOpenStartStoresMoreModal(true)} type='button'
                                                    className="pt-4 text-[14px] text-primary hover:underline">
                                                See more
                                            </button>
                                        </>
                                    )}
                                </div>
                                <footer className="mt-4">
                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <ul className="flex items-center gap-0 text-gray-500 text-[12px]">
                                                <li className="hover:text-primary">
                                                    <Link href='#'>About Nosres</Link>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <LuDot size={12}/>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <Link href='#'>Privacy</Link>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <LuDot size={12}/>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <Link href='#'>Terms</Link>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <LuDot size={12}/>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <Link href='#'>Careers</Link>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <LuDot size={12}/>
                                                </li>
                                                <li className="hover:text-primary">
                                                    <Link href='#'>Support</Link>
                                                </li>
                                            </ul>
                                        </>
                                    )}

                                    {loading ? (
                                        <div>
                                            <Skeleton height={20} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="mt-[8px] text-graycolor text-[12px]">© {currentYear} Nosres
                                                Inc. All
                                                rights
                                                reserved.</h4>
                                        </>
                                    )}
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start PosImage Pop-Up Start */}
                <Modal size="5xl"
                       dismissible
                       show={openStartPostImageModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartPostImageModal(false)}>
                    <Modal.Header
                        className="flex lg:hidden"
                        style={{
                            height: '50px',
                            alignItems: 'center'
                        }}
                    >
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <div className="col md:col-span-7">
                                    <div
                                        className="slider_wrapper sticky top-0 h-56 sm:h-64 md:h-[450px] bg-black">
                                        <Carousel slide={false} indicators={false}>
                                            <Image src={SliderOneImg} className="slider_image"
                                                   alt="SliderOneImg"/>
                                            <Image src={SliderTwoImg} className="slider_image"
                                                   alt="SliderTwoImg"/>
                                            <Image src={SliderThreeImg} className="slider_image"
                                                   alt="SliderThreeImg"/>
                                        </Carousel>
                                    </div>
                                </div>
                                <div className="col md:col-span-5">
                                    <div className="h-[450px] overflow-y-scroll overflow-x-hidden">
                                        <div
                                            className="bg-white px-4 pb-4 pt-2 rounded rounded-b-none sticky top-[0px] z-[999]">
                                            <div className="flex items-center justify-between">
                                                <Link href='#' className="flex items-center gap-1">
                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    <div className="leading-[17px]">
                                                        <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                            John Doe
                                                        </h4>

                                                        <div
                                                            className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            2h ago
                                                        </span>
                                                            <LuDot size={12}/>
                                                            <IoMdGlobe size={13}/>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className="flex items-center justify-end text-end">
                                                    <div onClick={handlePostMeDotClick}
                                                         ref={PostMeDotDropdownRef}
                                                         className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postMeDotClick ? 'bg-gray-100' : ''}`}>
                                                        <svg
                                                            className="w-3 h-3"
                                                            fill="#828D9E"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16">
                                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                        </svg>
                                                        {postMeDotClick &&
                                                            <div
                                                                className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                <div className="container py-2">
                                                                    <div className="space-y-1 text-[14px]">
                                                                        <Link href='#'
                                                                              className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                            <svg
                                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round">
                                                                                <path d="M17 3a2.85 2.83 0 1 1
                                                                            4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                                                <path d="m15 5 4 4"/>
                                                                            </svg>
                                                                            <h4>
                                                                                Edit post
                                                                            </h4>
                                                                        </Link>

                                                                        <div
                                                                            className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                            <svg
                                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24
                                                                            24" fill="none" stroke="#6B7280"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round">
                                                                                <path d="M3 6h18"/>
                                                                                <path
                                                                                    d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0
                                                                            2 1 2 2v2"/>
                                                                                <line x1="10" x2="10" y1="11"
                                                                                      y2="17"/>
                                                                                <line x1="14" x2="14" y1="11"
                                                                                      y2="17"/>
                                                                            </svg>
                                                                            <h4>
                                                                                Delete post
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

                                        {/* Post Box */}
                                        <div className="post_box_wrap h-full">
                                            <div className="box bg-white px-4 pb-4 rounded rounded-b-none">
                                                <h4 className="mt-0 text-[14px] text-prgcolor">
                                                    The SRS-XB100 speaker provides powerful, clear,
                                                    expansive sound in a small, portable and durable
                                                    body. Despite its size...
                                                </h4>
                                            </div>

                                            {/* Post Icons */}
                                            <div className="post_icons mt-0">
                                                <div
                                                    className="flex items-center justify-between bg-white border-t px-4 py-3 mt-0">
                                                    <div className="flex items-center gap-1">
                                                        <div className="cursor-pointer"
                                                             onClick={() => setIsClickedLikePostTwo(!isClickedLikePostTwo)}>
                                                            {isClickedLikePostTwo ? (
                                                                <GoHeartFill
                                                                    className="w-4 h-4 text-primary hover:text-primary"/>
                                                            ) : (
                                                                <GoHeart
                                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                            )}
                                                        </div>
                                                        <div className="count">
                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">112</h4>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <div className="cursor-pointer">
                                                            <GoComment
                                                                className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                        </div>
                                                        <div className="count">
                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">852</h4>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <div className="cursor-pointer">
                                                            <GoSync
                                                                className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                        </div>
                                                        <div className="count">
                                                            <h4 className="text-[12px] text-prgcolor hover:underline cursor-pointer">2k</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Post Write Comment */}
                                            <div className="post_write_comment mt-0">
                                                <div
                                                    className="flex items-center justify-between box bg-white px-4 py-2 rounded rounded-b-none">
                                                    <div className="relative w-full flex items-center gap-1">
                                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                        <input
                                                            className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                            type="text"
                                                            placeholder="Write a comment..."
                                                        />

                                                        <div
                                                            className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                            <div className="cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="#4D7FB8"
                                                                     className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                          clipRule="evenodd"/>
                                                                </svg>
                                                            </div>
                                                            <GoSmiley
                                                                size={20}
                                                                className="cursor-pointer text-graycolor hover:text-primary"/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* PosImage Pop-Up End */}


                {/* Start Followers Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartFollowersModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartFollowersModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">33,099 followers</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="top_content sticky z-[999] -top-[24px] bg-white pt-4">
                                <div className="px-0 pb-2 bg-white">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            className="border w-full text-[14px] text-prgcolor border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                            placeholder="Search"
                                        />

                                        <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                            <IoSearchOutline
                                                className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="people_content box rounded bg-white py-4">
                                <div className="box cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        {isFollowingOne ? (
                                            <div onClick={handleToggleFollowingOne}
                                                 className="following_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Following
                                                </h4>
                                            </div>
                                        ) : (
                                            <div onClick={handleToggleFollowingOne}
                                                 className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <line x1="19" x2="19" y1="8"
                                                              y2="14"/>
                                                        <line x1="22" x2="16" y1="11" y2="11"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Follow
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        {isFollowingBack ? (
                                            <div onClick={handleToggleFollowingBack}
                                                 className="following_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Following
                                                </h4>
                                            </div>
                                        ) : (
                                            <div onClick={handleToggleFollowingBack}
                                                 className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <line x1="19" x2="19" y1="8"
                                                              y2="14"/>
                                                        <line x1="22" x2="16" y1="11" y2="11"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Follow back
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* Followers Pop-Up End */}

                {/* Start Followees Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartFolloweesModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartFolloweesModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">26,000 following</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="top_content sticky z-[999] -top-[24px] bg-white pt-4">
                                <div className="px-0 pb-2 bg-white">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            className="border w-full text-[14px] text-prgcolor border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                            placeholder="Search"
                                        />

                                        <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                            <IoSearchOutline
                                                className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="people_content box rounded bg-white py-4">
                                <div className="box cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        {isFollowingFollowees ? (
                                            <div
                                                onClick={handleToggleFollowingFollowees}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                className="following_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <line x1="19" x2="19" y1="8"
                                                              y2="14"/>
                                                        <line x1="22" x2="16" y1="11" y2="11"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Follow
                                                </h4>
                                            </div>
                                        ) : (
                                            <div
                                                onClick={handleToggleFollowingFollowees}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                className="follow_box group border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4 group-hover:stroke-red-600"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary group-hover:text-red-600">
                                                    {isHovering ? 'Unfollow' : 'Following'}
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Following
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* Followees Pop-Up End */}

                {/* Start PeopleMore Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartPeopleMoreModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartPeopleMoreModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">People You May Want to Follow</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="people_content box rounded bg-white py-4">
                                <div className="box cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        {isFollowingPeople ? (
                                            <div onClick={handleToggleFollowingPeople}
                                                 className="following_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Following
                                                </h4>
                                            </div>
                                        ) : (
                                            <div onClick={handleToggleFollowingPeople}
                                                 className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <line x1="19" x2="19" y1="8"
                                                              y2="14"/>
                                                        <line x1="22" x2="16" y1="11" y2="11"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Follow
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* PeopleMore Pop-Up End */}

                {/* Start StoresMore Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartStoresMoreModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartStoresMoreModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Stores You May Want to Follow</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="people_content box rounded bg-white">
                                <div className="box cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Roshan Nafiz</h4>
                                            </div>
                                        </div>
                                        {isFollowingStores ? (
                                            <div onClick={handleToggleFollowingStores}
                                                 className="following_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                        0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M22 21v-2a4 4 0 0
                                                        0-3-3.87"/>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Following
                                                </h4>
                                            </div>
                                        ) : (
                                            <div onClick={handleToggleFollowingStores}
                                                 className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <line x1="19" x2="19" y1="8"
                                                              y2="14"/>
                                                        <line x1="22" x2="16" y1="11" y2="11"/>
                                                    </svg>
                                                </div>
                                                <h4 className="text-[14px] text-primary">
                                                    Follow
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 cursor-pointer py-2 px-2 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                            </div>
                                        </div>
                                        <div
                                            className="follow_box border py-1 px-4 rounded flex items-center gap-1">
                                            <div className="icon">
                                                <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                    24" fill="none" stroke="#4D7FB8" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0
                                                    0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8"
                                                          y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                            </div>
                                            <h4 className="text-[14px] text-primary">
                                                Follow
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* StoresMore Pop-Up End */}

                {/* Start CoverView Pop-Up Start */}
                <Modal size="5xl"
                       dismissible
                       show={openStartCoverViewModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartCoverViewModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <Image src={CoverImg} className="w-full"
                                   alt="CoverImg"/>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* CoverView Pop-Up End */}

                {/* Start ProfileView Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartProfileViewModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartProfileViewModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="flex items-center justify-center">
                                <Image src={ProfileImg} className="w-[400px] h-[400px]"
                                       alt="ProfileImg"/>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* ProfileView Pop-Up End */}

                {/* Start EditProfile Pop-Up Start */}
                <Modal size="lg"
                       show={openStartEditProfileModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartEditProfileModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Edit Profile</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="user_pop_details">
                                <div className="relative">
                                    {/* Cover photo */}
                                    <div className="cover_photo cursor-pointer relative">
                                        <Image src={CoverImg} className="w-full h-[180px] rounded rounded-t-none"
                                               alt="CoverImg"/>
                                        <div className="absolute right-2 bottom-0">
                                            <div onClick={() => setOpenCoverImageModal(true)}
                                                 className="icon p-1 rounded-full bg-white group">
                                                <IoCameraOutline size={15}
                                                                 className="text-[#828D9E] group-hover:text-primary"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile photo */}
                                    <div
                                        className="absolute top-[105px] ml-[45px] w-[120px] profile_photo cursor-pointer">
                                        <div className="relative">
                                            <Image src={ProfileImg}
                                                   className="w-[120px] h-[120px] ring ring-white rounded-full"
                                                   alt="ProfileImg"/>
                                            <div className="absolute right-2 bottom-0">
                                                <div onClick={() => setOpenProfileImageModal(true)}
                                                     className="icon p-1 rounded-full bg-white group">
                                                    <IoCameraOutline size={15}
                                                                     className="text-[#828D9E] group-hover:text-primary"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[50px]">
                                <h4 className="text-[14px] text-prgcolor">
                                    Bio
                                </h4>
                                <textarea
                                    rows={3}
                                    className="rounded mt-2 w-full py-2 px-4 border border-gray-200 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                    placeholder="Describe yourself in a few words."
                                >
                            </textarea>
                                <h4 className="text-[12px] text-graycolor">
                                    You have 120 characters left.
                                </h4>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartEditProfileModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartEditProfileModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* EditProfile Pop-Up End */}

                {/* Profile Picture Pop-Up Start */}
                <Modal size="lg" dismissible show={openProfileImageModal}
                       onClose={() => setOpenProfileImageModal(false)}>
                    <Modal.Header
                        style={{
                            backgroundColor: 'rgb(129 188 255 / 18%)',
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <Image src={LogoImg} className="w-6" alt="LogoImg"/>
                            <h4 className="text-[16px]">Account</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <h4 className="text-[16px]">Edit Profile Picture</h4>
                            <p className="mt-2">
                                This information is part of your Nosres Account, and any updates
                                made here will be reflected in your Nosres Account.
                            </p>

                            <div className="flex mt-2 items-center justify-between">
                                <div className="left">
                                    {selectedFile ? (
                                        <img
                                            src={URL.createObjectURL(selectedFile)}
                                            alt="Uploaded Preview"
                                            className="w-20 h-20 object-cover rounded-full"
                                        />
                                    ) : (
                                        <HiUserCircle className="w-20 h-20 text-primary"/>
                                    )}
                                </div>
                                <div onClick={handleRemoveClick}
                                     className="right cursor-pointer flex gap-1 items-center">
                                    <HiOutlineMinusCircle className="text-primary"/>
                                    <button className="text-primary text-[14px]">Remove</button>
                                </div>
                            </div>

                            <div className="image-upload mt-4">
                                <h4 className="text-[14px]">Upload New Picture</h4>
                                <div className="flex items-center justify-center mt-3 w-full">
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <HiOutlineCloudArrowUp
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Click to upload</span> or drag and
                                                drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG,
                                                JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"
                                               onChange={(event) => handleFileChange(event)}
                                               ref={fileInputRef}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={handleCanceltClick}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                            </button>
                            <button onClick={handleSaveClick}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Profile Picture Pop-Up End */}


                {/* Cover Picture Pop-Up Start */}
                <Modal size="lg" dismissible show={openCoverImageModal}
                       onClose={() => setOpenCoverImageModal(false)}>
                    <Modal.Header
                        style={{
                            backgroundColor: 'rgb(129 188 255 / 18%)',
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <h4 className="text-[16px]">Background</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <div className="flex mt-2 items-center justify-between">
                                <div className="left">
                                    {selectedFileCover ? (
                                        <img
                                            src={URL.createObjectURL(selectedFileCover)}
                                            alt="Uploaded Preview"
                                            className="w-20 h-20 object-cover rounded-full"
                                        />
                                    ) : (
                                        <HiUserCircle className="w-20 h-20 text-primary"/>
                                    )}
                                </div>
                                <div onClick={handleRemoveClickCover}
                                     className="right cursor-pointer flex gap-1 items-center">
                                    <HiOutlineMinusCircle className="text-primary"/>
                                    <button className="text-primary text-[14px]">Remove</button>
                                </div>
                            </div>

                            <div className="image-upload mt-4">
                                <h4 className="text-[14px]">Upload New Picture</h4>
                                <div className="flex items-center justify-center mt-3 w-full">
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <HiOutlineCloudArrowUp
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Click to upload</span> or drag and
                                                drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG,
                                                JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"
                                               onChange={(event) => handleFileChangeCover(event)}
                                               ref={fileInputRefCover}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={handleCanceltClickCover}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                            </button>
                            <button onClick={handleSaveClickCover}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Cover Picture Pop-Up End */}

                {/* Start Block Message Pop-Up Start */}
                <Modal size="lg"
                       show={openBlockMesModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenBlockMesModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Block User</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Are you sure you want to block Robert Johnson?
                                <br/>
                                <br/>
                                Robert Johnson will no longer be able to to view your posts on your timeline,
                                tag you, initiate a conversation with you, or re-follow you.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenBlockMesModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenBlockMesModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Block
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Block Message Pop-Up End */}

                {/* Start ReportAdd Pop-Up Start */}
                <Modal size="lg"
                       show={openReportAdModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report User</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please share your reasons for reporting this user. Your feedback is crucial
                                for maintaining a safer and more trustworthy environment for all.
                            </h4>

                            <div className="mt-4 space-y-3">
                                <div onClick={() => onChange(1)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Spam, suspicion, or fake
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Selling illegal goods, engaging in monetary scams,
                                                etc.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(2)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Harassment
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Bullying, verbal abuse, threats, etc.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(3)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Hate speech
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Encouraging derogatory remarks targeting a
                                                particular group
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(4)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={4}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Harmful behavior
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Spreading false information or conspiracy theories
                                                that incite fear
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(5)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={5}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Violence
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Promoting violence, including self-harm or intending
                                                harm to others
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(6)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={6}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Inappropriate content
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Posting offensive, obscene, or rule-breaking content
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(7)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={7}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Impersonation
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Pretending to be someone else
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(8)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={8}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Defamation
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Damaging the good reputation of someone
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                                <div onClick={() => onChange(9)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={9}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Stalking
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Following, contacting, or monitoring in an intrusive or threatening way
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenReportAdSubmitModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Next
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Pop-Up End */}

                {/* Start ReportAdd Submit Pop-Up Start */}
                <Modal size="lg"
                       show={openReportAdSubmitModal}
                       style={{
                           padding: '0px',
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdSubmitModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report User</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="mt-0 space-y-3">
                                <div onClick={() => onChange(1)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Spam, suspicion, or fake
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Selling illegal goods, engaging in monetary scams,
                                                etc.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                            <h4 className="text-[14px] text-prgcolor mt-4">
                                Elaborate on your report (optional)
                            </h4>
                            <textarea
                                rows={3}
                                className="rounded mt-4 w-full py-2 px-4 border border-gray-100 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                placeholder="Please provide further details about your report. Your feedback plays a crucial role in creating a safer and more trustworthy community for everyone.">
                            </textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdSubmitModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenReportAdSubmitConfirmModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Submit
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Submit Pop-Up End */}
                {/* Start ReportAdd Submit confirm Pop-Up Start */}
                <Modal size="lg"
                       show={openReportAdSubmitConfirmModal}
                       style={{
                           padding: '0px',
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdSubmitConfirmModal(false)}>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="icon">
                                    <PiHandsPrayingLight className="w-[50px] h-[50px] text-primary"/>
                                </div>
                                <h4 className="text-prgcolor text-[18px] mt-3">
                                    Thank You for Your Feedback!
                                </h4>
                                <h4 className="text-graycolor text-[14px] mt-3">
                                    We will review it and take appropriate action.
                                </h4>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center w-full">
                            <button onClick={handleAdSubmitButtonClick}
                                    className="px-10 w-full text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Close
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* Start ReportAdd Submit confirm Pop-Up End */}
            </section>
        </>
    );
}

export default Page;