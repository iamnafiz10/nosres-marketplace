"use client";
import React, {useCallback, useEffect, useRef, useState} from "react";
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
import {IoCameraOutline, IoLockClosed, IoSearchOutline} from "react-icons/io5";
import {
    HiArrowLongLeft,
    HiArrowLongRight,
    HiOutlineChatBubbleLeft,
    HiOutlineCloudArrowUp,
    HiOutlineMinusCircle
} from "react-icons/hi2";
import {RxCross1, RxPlus} from "react-icons/rx";
import {Checkbox, Radio, RadioChangeEvent} from "antd";
import classnames from "classnames";
import {RiArrowDropDownLine} from "react-icons/ri";
import ProductImg from "../../../../public/assets/images/product.png";
import {TiStarFullOutline} from "react-icons/ti";
import {FaAngleDown, FaUsers} from "react-icons/fa6";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {PiHandsPrayingLight} from "react-icons/pi";

function Page() {
    const loading = useLoading();
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
    const currentYear = new Date().getFullYear();

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

    //----------- FilterListingTab Dropdown Start --------------//
    const [isOpenDropdownFilterListingTab, setIsOpenDropdownFilterListingTab] = useState(false);
    const [selectedOptionFilterListingTab, setSelectedOptionFilterListingTab] = useState("Sort by"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterListingTab = () => {
        setIsOpenDropdownFilterListingTab(!isOpenDropdownFilterListingTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterListingTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterListingTab(option);
        setIsOpenDropdownFilterListingTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterListingTabRef = useRef(null);
    const handleClickOutsideFilterListingTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterListingTabRef.current && !dropdownFilterListingTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterListingTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterListingTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterListingTab);
        };
    }, []);
    //----------- FilterListingTab Dropdown End --------------//

    // For price range slider
    const [minVal, setMinVal] = useState<number>(0);
    const [maxVal, setMaxVal] = useState<number>(2500); // Updated max value
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const rangeRef = useRef<HTMLDivElement>(null);

    const min = 0; // Updated min value
    const max = 5000; // Updated max value

    const getPercent = useCallback((value: number) => {
        return Math.round(((value - min) / (max - min)) * 100);
    }, [min, max]);

    useEffect(() => {
        if (maxValRef.current && rangeRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(parseInt(maxValRef.current.value));

            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    useEffect(() => {
        if (minValRef.current && rangeRef.current) {
            const minPercent = getPercent(parseInt(minValRef.current.value));
            const maxPercent = getPercent(maxVal);

            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+event.target.value, maxVal - 1);
        setMinVal(value);
        event.target.value = value.toString();
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+event.target.value, minVal + 1);
        setMaxVal(value);
        event.target.value = value.toString();
    };

    // Rating Dropdown
    const [showRating, setShowRating] = useState(false);
    const ratingRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        const handleClickOutside = (event) => {
            // @ts-ignore
            if (ratingRef.current && !ratingRef.current.contains(event.target)) {
                setShowRating(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleRatingClick = () => {
        setShowRating((prevShowRating) => !prevShowRating);
    };

    // Review Popup
    const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);

    //----------- FilterStoreTab Dropdown Start --------------//
    const [isOpenDropdownFilterStoreTab, setIsOpenDropdownFilterStoreTab] = useState(false);
    const [selectedOptionFilterStoreTab, setSelectedOptionFilterStoreTab] = useState("Select"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterStoreTab = () => {
        setIsOpenDropdownFilterStoreTab(!isOpenDropdownFilterStoreTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterStoreTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterStoreTab(option);
        setIsOpenDropdownFilterStoreTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterStoreTabRef = useRef(null);
    const handleClickOutsideFilterStoreTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterStoreTabRef.current && !dropdownFilterStoreTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterStoreTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterStoreTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterStoreTab);
        };
    }, []);
    //----------- FilterStoreTab Dropdown End --------------//

    // Popup Start post Emoji Input
    const [showStartPostEmoji, setShowStartPostEmoji] = useState(false);
    const [startPostText, setStartPostText] = useState("");
    const addStartPostEmoji = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setStartPostText(startPostText + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const modalRef = useRef(null);
    const emojiPickerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (
                modalRef.current &&
                // @ts-ignore
                !modalRef.current.contains(event.target) &&
                showStartPostEmoji &&
                emojiPickerRef.current &&
                // @ts-ignore
                !emojiPickerRef.current.contains(event.target)
            ) {
                setShowStartPostEmoji(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showStartPostEmoji]);

    //-------------------------- Popup Area ------------------//
    const [openStartPostModal, setOpenStartPostModal] = useState<boolean>(false);
    const handleWritePostPopUpClickCancel = () => {
        setOpenStartPostModal(false)
        setStartPostText("")
    }

    // Image Upload Function
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRefMe = useRef<HTMLInputElement | null>(null);
    // Profile image Popup
    const [openProfileImageMeModal, setOpenProfileImageMeModal] = useState<boolean>(false);

    const handleFileChangeMe = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = event.target.files;
        if (files) {
            const fileList = Array.from(files);
            setSelectedFiles([...selectedFiles, ...fileList]);
        }
    };

    const handleRemoveClickMe = (index: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    };

    const handleCancelClickMe = () => {
        setSelectedFiles([]);
        setOpenProfileImageMeModal(false);
    };

    const handleSaveClickMe = () => {
        setSelectedFiles([]);
        setOpenProfileImageMeModal(false);
    };

    //  Audience popup
    const [openStartAudienceModal, setOpenStartAudienceModal] = useState<boolean>(false);
    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };

    // Block Message Modal
    const [openBlockMesModal, setOpenBlockMesModal] = useState<boolean>(false);

    // Feedback Ad / Report Ad popup
    const [openReportAdModal, setOpenReportAdModal] = useState<boolean>(false);
    const [openReportAdSubmitModal, setOpenReportAdSubmitModal] = useState<boolean>(false);
    const [openReportAdSubmitConfirmModal, setOpenReportAdSubmitConfirmModal] = useState<boolean>(false);
    const handleAdSubmitButtonClick = () => {
        setOpenReportAdSubmitModal(false);
        setOpenReportAdModal(false);
        setOpenReportAdSubmitConfirmModal(false);
    }

    // For follow - following (Banner)
    const [isFollowingBanner, setIsFollowingBanner] = useState(false);
    const handleToggleFollowingBanner = () => {
        setIsFollowingBanner(!isFollowingBanner);
    };

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
                                        <h4 className="text-[14px] text-prgcolor font-[500] hover:underline">John
                                            Doe</h4>
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

                <div className="user_top_details mt-[0px] h-[580px] md:h-[400px]">
                    <div className="container">
                        <div className="relative">
                            {/* Cover photo */}
                            <div onClick={() => setOpenStartCoverViewModal(true)}
                                 className="cover_photo cursor-pointer">
                                <Image src={CoverImg} className="w-full h-[180px] rounded rounded-t-none"
                                       alt="CoverImg"/>
                            </div>

                            <div className="user_details mt-[50px] text-start pt-0 text-white">
                                <div className="ml-[30px]">
                                    <h4 className='mt-3 text-[24px] font-semibold'>
                                        UpTown Store
                                    </h4>
                                    <h4 className="text-[14px] mt-0 mr-[20px]">
                                        Logic will get you from A to B. Imagination will take you everywhere.
                                    </h4>
                                </div>

                                <div className="block md:flex w-full items-end justify-between">
                                    <div className="ml-[28px] wrap">
                                        <div className="block md:flex items-center gap-0 mt-4 text-[14px]">
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
                                            <div className="hidden md:block">
                                                <LuDot size={17}/>
                                            </div>
                                            <div className="flex items-center gap-1 mt-2 md:mt-0">
                                                <div className="icon">
                                                    <svg
                                                        className="w-4 h-4"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24
                                                        24" fill="none" stroke="#ffffff" strokeWidth="1.5"
                                                        strokeLinecap="round"
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
                                                    Opened May 2024
                                                </h4>
                                            </div>
                                            <div className="hidden md:block">
                                                <LuDot size={17}/>
                                            </div>

                                            <div className="relative block md:flex items-center gap-1">
                                                <div className="star_wrap flex items-center gap-1">
                                                    <TiStarFullOutline className="w-4 h-4 text-white"/>
                                                    <TiStarFullOutline className="w-4 h-4 text-white"/>
                                                    <TiStarFullOutline className="w-4 h-4 text-white"/>
                                                    <TiStarFullOutline className="w-4 h-4 text-white"/>
                                                    <TiStarFullOutline className="w-4 h-4 text-white"/>
                                                    <h4 className="text-[14px] text-white">
                                                        (5)
                                                    </h4>
                                                </div>
                                                <div className="icon hidden md:block">
                                                    <LuDot size={15} className='text-white'/>
                                                </div>
                                                <div ref={ratingRef}>
                                                    <h4 onClick={handleRatingClick}
                                                        className="hover:underline cursor-pointer text-[14px] text-white">
                                                        223 Ratings
                                                    </h4>
                                                    {/* Rating dropdown */}
                                                    {showRating &&
                                                        <div
                                                            className="rating_view absolute top-8 -left-[10px] bg-white border py-4 px-4 rounded w-[229px]">
                                                            <div
                                                                className="flex items-center justify-center text-center mb-2">
                                                                <p className="text-[16px] font-[500] text-black">4.5</p>
                                                                <h4 className="ms-1 text-[16px] text-graycolor">
                                                                    out of 5
                                                                </h4>
                                                            </div>
                                                            <div
                                                                className="flex items-center justify-center text-center">
                                                                <svg className="w-4 h-4 text-primary me-1"
                                                                     aria-hidden="true"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     fill="currentColor"
                                                                     viewBox="0 0 22 20">
                                                                    <path
                                                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                </svg>
                                                                <svg className="w-4 h-4 text-primary me-1"
                                                                     aria-hidden="true"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     fill="currentColor"
                                                                     viewBox="0 0 22 20">
                                                                    <path
                                                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                </svg>
                                                                <svg className="w-4 h-4 text-primary me-1"
                                                                     aria-hidden="true"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     fill="currentColor"
                                                                     viewBox="0 0 22 20">
                                                                    <path
                                                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                </svg>
                                                                <svg className="w-4 h-4 text-primary me-1"
                                                                     aria-hidden="true"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     fill="currentColor"
                                                                     viewBox="0 0 22 20">
                                                                    <path
                                                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                </svg>
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor" viewBox="0 0 22 20">
                                                                    <path
                                                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className="mt-1 text-center text-[12px] text-graycolor">
                                                                Based on 230 ratings
                                                            </h4>
                                                            <div className="rating_progress">
                                                                <div className="w-full flex items-center mt-1">
                                                                    <div
                                                                        className="flex items-center gap-0 text-[14px]">
                                                                        <h4 className="hover:underline cursor-pointer">5</h4>
                                                                        <TiStarFullOutline
                                                                            className="w-4 h-4 text-primary"/>
                                                                    </div>
                                                                    <div
                                                                        className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                        <div className="h-2 bg-primary rounded-sm"
                                                                             style={{width: '70%'}}></div>
                                                                    </div>
                                                                    <span
                                                                        className="text-[14px] font-medium text-gray-500">70%</span>
                                                                </div>
                                                                <div className="w-full flex items-center mt-1">
                                                                    <div
                                                                        className="flex items-center gap-0 text-[14px]">
                                                                        <h4 className="hover:underline cursor-pointer">4</h4>
                                                                        <TiStarFullOutline
                                                                            className="w-4 h-4 text-primary"/>
                                                                    </div>
                                                                    <div
                                                                        className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                        <div className="h-2 bg-primary rounded-sm"
                                                                             style={{width: '55%'}}></div>
                                                                    </div>
                                                                    <span
                                                                        className="text-[14px] font-medium text-gray-500">17%</span>
                                                                </div>
                                                                <div className="w-full flex items-center mt-1">
                                                                    <div
                                                                        className="flex items-center gap-0 text-[14px]">
                                                                        <h4 className="hover:underline cursor-pointer">3</h4>
                                                                        <TiStarFullOutline
                                                                            className="w-4 h-4 text-primary"/>
                                                                    </div>
                                                                    <div
                                                                        className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                        <div className="h-2 bg-primary rounded-sm"
                                                                             style={{width: '35%'}}></div>
                                                                    </div>
                                                                    <span
                                                                        className="text-[14px] font-medium text-gray-500">8%</span>
                                                                </div>
                                                                <div className="w-full flex items-center mt-1">
                                                                    <div
                                                                        className="flex items-center gap-0 text-[14px]">
                                                                        <h4 className="hover:underline cursor-pointer">2</h4>
                                                                        <TiStarFullOutline
                                                                            className="w-4 h-4 text-primary"/>
                                                                    </div>
                                                                    <div
                                                                        className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                        <div className="h-2 bg-primary rounded-sm"
                                                                             style={{width: '25%'}}></div>
                                                                    </div>
                                                                    <span
                                                                        className="text-[14px] font-medium text-gray-500">4%</span>
                                                                </div>
                                                                <div className="w-full flex items-center mt-1">
                                                                    <div
                                                                        className="flex items-center gap-0 text-[14px]">
                                                                        <h4 className="hover:underline cursor-pointer">1</h4>
                                                                        <TiStarFullOutline
                                                                            className="w-4 h-4 text-primary"/>
                                                                    </div>
                                                                    <div
                                                                        className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                        <div className="h-2 bg-primary rounded-sm"
                                                                             style={{width: '15%'}}></div>
                                                                    </div>
                                                                    <span
                                                                        className="text-[14px] font-medium text-gray-500">1%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="icon hidden md:block">
                                                    <LuDot size={15} className='text-white'/>
                                                </div>
                                                <h4 onClick={() => setOpenReviewModal(true)}
                                                    className="hover:underline cursor-pointer text-[14px] text-white">
                                                    23 Reviews
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="ml-[3px] mt-2 flex items-center gap-0 text-[14px]">
                                            <h4 onClick={() => setOpenStartFollowersModal(true)}
                                                className="cursor-pointer hover:underline">
                                                26K followers
                                            </h4>
                                            <LuDot size={17}/>
                                            <h4 onClick={() => setOpenStartFolloweesModal(true)}
                                                className="cursor-pointer hover:underline">
                                                26K followees
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
                                                                        Report store
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
                                                            UpTown Store
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
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#828D9E" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"><path
                                                                d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path
                                                                d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path
                                                                d="M7 16.5v5.17"/><path
                                                                d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path
                                                                d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path
                                                                d="M17 16.5v5.17"/><path
                                                                d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path
                                                                d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path
                                                                d="M12 13.5V8"/></svg>
                                                    </span>
                                                                <h4>Electronics</h4>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                        <span className="icon">
                                                            <svg
                                                                className="w-4 h-4"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#828D9E" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"><polygon
                                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                        </span>
                                                                <h4>4.9</h4>
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
                                                                      className="text-blue-500 hover:underline">uptownstore.com</Link>
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
                                    <Tabs.Item title="Shop">
                                        {/* Listings */}
                                        <div className="listings_content">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                                <div className="col lg:col-span-4">
                                                    <div className="pb-4">
                                                        <h4 className="text-[14px] text-prgcolor">Filters</h4>
                                                    </div>
                                                    <div className="box py-3 px-6 bg-white rounded">
                                                        <details open={true} className="group pb-3">
                                                            <summary
                                                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                                Sub-category
                                                                <RxPlus
                                                                    className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                            </summary>
                                                            <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                                <div id="checkbox" className="mt-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <Checkbox defaultChecked>
                                                                            Cameras
                                                                        </Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Computers</Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Speakers</Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Smartphones</Checkbox>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </details>
                                                        <hr/>
                                                        <details className="group py-3">
                                                            <summary
                                                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                                Brand
                                                                <RxPlus
                                                                    className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                            </summary>
                                                            <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                                <div id="checkbox" className="mt-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <Checkbox defaultChecked>
                                                                            Apple
                                                                        </Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Samsung</Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Xiaomi</Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Honor</Checkbox>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </details>
                                                        <hr/>
                                                        <details className="group py-3">
                                                            <summary
                                                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                                Condition
                                                                <RxPlus
                                                                    className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                            </summary>
                                                            <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                                <div id="checkbox" className="mt-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <Checkbox defaultChecked>
                                                                            New
                                                                        </Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Used</Checkbox>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </details>
                                                        <hr/>
                                                        <details className="group py-3">
                                                            <summary
                                                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                                Range
                                                                <RxPlus
                                                                    className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                            </summary>
                                                            <div className="py-2 overflow-hidden">
                                                                <div className="value_box flex items-center gap-4 mb-4">
                                                                    <input
                                                                        className="m-0 rounded w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                        type="text"
                                                                        placeholder="$"
                                                                        value={`$${minVal}`}
                                                                        onChange={(e) => {
                                                                            let value = e.target.value;
                                                                            // Allow only numbers and the "$" sign
                                                                            const newValue = value.replace(/[^0-9$]/g, '');
                                                                            // Remove "$" sign and handle empty value
                                                                            let newValueWithoutDollar = newValue.replace('$', '');
                                                                            // Limit max value to 5000
                                                                            if (newValueWithoutDollar !== '' && parseFloat(newValueWithoutDollar) > 4999) {
                                                                                newValueWithoutDollar = '4999';
                                                                            }
                                                                            setMinVal(newValueWithoutDollar === '' ? 0 : parseFloat(newValueWithoutDollar));
                                                                        }}
                                                                    />
                                                                    <input
                                                                        className="m-0 rounded w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                        type="text"
                                                                        placeholder="$"
                                                                        value={`$${maxVal}`}
                                                                        onChange={(e) => {
                                                                            let value = e.target.value;
                                                                            // Allow only numbers and the "$" sign
                                                                            const newValue = value.replace(/[^0-9$]/g, '');
                                                                            // Remove "$" sign and handle empty value
                                                                            let newValueWithoutDollar = newValue.replace('$', '');
                                                                            // Limit max value to 5000
                                                                            if (newValueWithoutDollar !== '' && parseFloat(newValueWithoutDollar) > 5000) {
                                                                                newValueWithoutDollar = '5000';
                                                                            }
                                                                            setMaxVal(newValueWithoutDollar === '' ? 0 : parseFloat(newValueWithoutDollar));
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="slider_range_wrap w-full">
                                                                    <input
                                                                        type="range"
                                                                        min={min}
                                                                        max={max}
                                                                        value={minVal}
                                                                        ref={minValRef}
                                                                        onChange={handleMinChange}
                                                                        className={classnames("thumb thumb--zindex-3", {
                                                                            "thumb--zindex-5": minVal > max - 100
                                                                        })}
                                                                    />
                                                                    <input
                                                                        type="range"
                                                                        min={min}
                                                                        max={max}
                                                                        value={maxVal}
                                                                        ref={maxValRef}
                                                                        onChange={handleMaxChange}
                                                                        className="thumb thumb--zindex-4"
                                                                    />
                                                                    <div className="slider">
                                                                        <div className="slider__track"/>
                                                                        <div ref={rangeRef} className="slider__range"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </details>
                                                        <hr/>
                                                        <details className="group py-3">
                                                            <summary
                                                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                                                Shipping method
                                                                <RxPlus
                                                                    className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                                            </summary>
                                                            <ul className="mt-4 pb-3 space-y-2 text-gray-500 text-[12px]">
                                                                <div id="checkbox" className="mt-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <Checkbox defaultChecked>
                                                                            Ship Only
                                                                        </Checkbox>
                                                                    </div>
                                                                    <div className="mt-2 flex items-center gap-2">
                                                                        <Checkbox>Click & Collect</Checkbox>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </details>
                                                        <div className="group">
                                                            <hr/>
                                                            <div className="mt-3">
                                                                <button type='button'
                                                                        className="py-2 px-4 bg-gray-50 hover:bg-primary hover:text-white hover:border-primary rounded text-[14px] border">
                                                                    Clear Settings
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col lg:col-span-8">
                                                    <div className="flex text-[14px] items-center justify-end">
                                                        {/* FilterListingTab dropdown */}
                                                        <div ref={dropdownFilterListingTabRef}
                                                             onClick={toggleDropdownFilterListingTab}
                                                             className="filter_dropdown  z-20 cursor-pointer relative">
                                                            <div
                                                                className="w-[150px] h-8 bg-white flex border border-gray-200 rounded items-center">
                                                                <input value={selectedOptionFilterListingTab}
                                                                       name="select"
                                                                       id="select"
                                                                       className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full bg-white"
                                                                       readOnly/>
                                                                <button type='button'
                                                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                                    <RiArrowDropDownLine size={25}/>
                                                                </button>
                                                            </div>

                                                            {isOpenDropdownFilterListingTab && (
                                                                <div
                                                                    className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                                    <div className="cursor-pointer"
                                                                         onClick={() => handleOptionSelectFilterListingTab("Sort by")}>
                                                                        <div
                                                                            className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                            Sort by
                                                                        </div>
                                                                    </div>
                                                                    <div className="cursor-pointer"
                                                                         onClick={() => handleOptionSelectFilterListingTab("Relevance")}>
                                                                        <div
                                                                            className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                            Relevance
                                                                        </div>
                                                                    </div>
                                                                    <div className="cursor-pointer"
                                                                         onClick={() => handleOptionSelectFilterListingTab("Popular")}>
                                                                        <div
                                                                            className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                                            Popular
                                                                        </div>
                                                                    </div>
                                                                    <div className="cursor-pointer"
                                                                         onClick={() => handleOptionSelectFilterListingTab("Newest")}>
                                                                        <div
                                                                            className="block p-2 border-transparent border-l-4 hover:border-primary border-blue-600 hover:bg-gray-100">
                                                                            Newest
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="box py-4 px-6 bg-white rounded mt-1">
                                                        <div
                                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 pb-4">
                                                            <div className="col border rounded p-4 cursor-pointer">
                                                                <Image src={ProductImg} alt="ProductImg"/>
                                                                <div className="product_content mt-3">
                                                                    <h4 className='text-[12px] text-graycolor'>
                                                                        Electronics
                                                                    </h4>
                                                                    <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                                        Playstation X
                                                                    </h4>
                                                                    <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                                        $1200.00
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col border rounded p-4 cursor-pointer">
                                                                <Image src={ProductImg} alt="ProductImg"/>
                                                                <div className="product_content mt-3">
                                                                    <h4 className='text-[12px] text-graycolor'>
                                                                        Electronics
                                                                    </h4>
                                                                    <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                                        Playstation X
                                                                    </h4>
                                                                    <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                                        $1200.00
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col border rounded p-4 cursor-pointer">
                                                                <Image src={ProductImg} alt="ProductImg"/>
                                                                <div className="product_content mt-3">
                                                                    <h4 className='text-[12px] text-graycolor'>
                                                                        Electronics
                                                                    </h4>
                                                                    <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                                        Playstation X
                                                                    </h4>
                                                                    <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                                        $1200.00
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="col border rounded p-4 cursor-pointer">
                                                                <Image src={ProductImg} alt="ProductImg"/>
                                                                <div className="product_content mt-3">
                                                                    <h4 className='text-[12px] text-graycolor'>
                                                                        Electronics
                                                                    </h4>
                                                                    <h4 className='text-[14px] text-prgcolor font-[500]'>
                                                                        Playstation X
                                                                    </h4>
                                                                    <h4 className='mt-1 text-[14px] text-black font-[500]'>
                                                                        $1200.00
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Pagination */}
                                                        <div
                                                            className="pagination mt-4 flex items-center justify-center">
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="inline-flex -space-x-px text-[14px] gap-1">
                                                                    <li>
                                                                        <Link href='#' aria-current="page"
                                                                              className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                                                            <HiArrowLongLeft/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#' aria-current="page"
                                                                              className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">
                                                                            1
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'
                                                                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">
                                                                            2
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#' aria-current="page"
                                                                              className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                                                            <HiArrowLongRight/>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                        <h4 className="text-[16px]">26,000 followees</h4>
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
                            <div className="people_content box rounded bg-white">
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
                                    Store Name
                                </h4>
                                <input type="text" placeholder="Store Name"
                                       className="rounded mt-1 w-full py-1 px-3 border focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"/>
                            </div>

                            <div className="mt-4">
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

                            <div className="input_box mt-4">
                                <label htmlFor="carrier" className="text-[14px]">
                                    Category
                                </label><br/>
                                <div className="flex text-[12px] items-center justify-start mt-1">
                                    {/* FilterStoreTab dropdown */}
                                    <div ref={dropdownFilterStoreTabRef}
                                         onClick={toggleDropdownFilterStoreTab}
                                         className="filter_dropdown_checkout z-20 cursor-pointer relative w-full">
                                        <div
                                            className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                            <input value={selectedOptionFilterStoreTab} name="select"
                                                   id="select"
                                                   className="px-4 cursor-pointer border-input appearance-none outline-none text-gray-800 w-full"
                                                   readOnly/>
                                            <button type='button'
                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                <RiArrowDropDownLine size={25}/>
                                            </button>
                                        </div>

                                        {isOpenDropdownFilterStoreTab && (
                                            <div
                                                className="absolute rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200">
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Select")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Select
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Electronics")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Electronics
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("T-Shirt")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        T-Shirt
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4 className="text-[14px] text-prgcolor">
                                    Website URL
                                </h4>
                                <input type="text" placeholder="www.example.com"
                                       className="rounded mt-1 w-full py-1 px-3 border focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"/>
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

                {/* Review Pop-Up Start */
                }
                <Modal
                    size="lg"
                    dismissible
                    show={openReviewModal}
                    onClose={() => setOpenReviewModal(false)}
                    style={{
                        padding: '0px',
                    }}
                    className="modal_cntrl"
                >
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Customer Reviews (23)</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <div className="sticky -top-[25px] z-10 bg-white pt-2 pb-4">
                                <div className="review_filter">
                                    <h4 className="text-[14px] text-graycolor">
                                        Here’s what customers say about this store:
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button type='button'
                                                className="py-1 px-4 bg-primary text-white rounded text-[12px]">
                                            All (95)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Responsiveness (5)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Helpfulness (5)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Friendliness
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Return and Refund Policy
                                        </button>
                                    </div>
                                </div>
                                {/* Rating Filter */}
                                <h4 className="text-[14px] text-graycolor mt-4">
                                    Here’s how customers rate this store:
                                </h4>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    5
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(23)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    4
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(2)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    3
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(0)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    2
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(0)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    1
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(0)</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* User Review */}
                            <div className="user_review">
                                <div className="box bg-white border py-4 px-2 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="ml-[3px] flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
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
                                                                        <path d="M4 15s1-1 4-1 5 2 8 2
                                                                        4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                                                                        <line x1="4" x2="4" y1="22"
                                                                              y2="15"/>
                                                                    </svg>
                                                                    <h4>
                                                                        Report review
                                                                    </h4>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
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
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">112</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 bg-white border py-4 px-2 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="ml-[3px] flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart
                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">20</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 bg-white border py-4 px-2 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="ml-[3px] flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart
                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">20</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 bg-white border py-4 px-2 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="ml-[3px] flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart
                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">20</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    {/*<Modal.Footer>*/}
                    {/*</Modal.Footer>*/}
                </Modal>
                {/* Review Pop-Up End */}

                {/*----------------------- Modal Show Area  ---------------*/}
                {/* Start Post Pop-Up Start */}
                <Modal size="lg"
                       show={openStartPostModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartPostModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Start a Post</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="flex items-center gap-1">
                                <HiUserCircle size={50} className="text-graycolor"/>
                                <h4 className="text-[14px] text-prgcolor font-[500] hover:underline">John Doe</h4>

                                <div onClick={() => setOpenStartAudienceModal(true)}
                                     className="dropdown_menu ml-2">
                                    <button type='button'
                                            className="py-1 px-6 rounded relative text-[14px] bg-gray-100">
                                        <IoMdGlobe size={15}
                                                   className="text-graycolor absolute left-1 top-1/2 transform -translate-y-1/2"/>
                                        Anyone
                                        <FaAngleDown size={13}
                                                     className="text-prgcolor absolute right-1 top-1/2 transform -translate-y-1/2"/>
                                    </button>
                                </div>
                            </div>

                            <div ref={modalRef} className="mt-4 px-0">
                                <div className="whats_new">
                                    <textarea
                                        rows={2}
                                        value={startPostText}
                                        onChange={(e) => setStartPostText(e.target.value)}
                                        className="rounded w-full py-1 px-0 border-transparent focus:border-transparent focus:ring focus:ring-transparent text-[#ABABAB] text-[14px] focus:outline-none"
                                        placeholder="What’s new, UpTown Store?">
                                    </textarea>
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    <div onClick={() => setOpenProfileImageMeModal(true)}
                                         className="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="#4D7FB8"
                                             className="w-6 h-6">
                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>

                                    <div onClick={() => setShowStartPostEmoji(!showStartPostEmoji)}
                                         className="cursor-pointer"
                                    >
                                        <GoSmiley
                                            size={20}
                                            className="text-graycolor hover:text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="relative flex w-full items-center justify-between">
                            <button onClick={handleWritePostPopUpClickCancel}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartPostModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Post
                            </button>

                            {/* Start Post Reactions */}
                            {showStartPostEmoji &&
                                <div ref={emojiPickerRef}
                                     className="comment_emoji z-[999] absolute -top-[70px] right-0">
                                    <Picker
                                        data={data}
                                        theme="light"
                                        perLine={8}
                                        emojiSize={22}
                                        onEmojiSelect={addStartPostEmoji}
                                        maxFrequentRows={0}
                                        maxEmojiRows={2}
                                    />
                                </div>
                            }
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Post Pop-Up End */}

                {/* Profile Picture Post Pop-Up Start */}
                <Modal size="lg" show={openProfileImageMeModal}
                       onClose={() => setOpenProfileImageMeModal(false)}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 10%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                >
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Upload photos</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <div className="flex items-center justify-between">
                                <div className="left">
                                    {selectedFiles.length > 0 ? (
                                        selectedFiles.map((file, index) => (
                                            <div key={index} className="mb-4 relative inline-block">
                                                <Image
                                                    src={URL.createObjectURL(file)}
                                                    width={100}
                                                    height={100}
                                                    alt={`Uploaded Preview ${index}`}
                                                    className="w-full h-full object-cover rounded"
                                                />
                                                <button
                                                    className="absolute top-0 right-0 -mt-2 -mr-2 p-1 bg-gray-100 hover:bg-red-600 group rounded-full"
                                                    onClick={() => handleRemoveClickMe(index)}
                                                >
                                                    <RxCross1 size={15}
                                                              className="text-primary group-hover:text-white"/>
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div>

                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="image-upload">
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100"
                                    >
                                        <div
                                            className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <HiOutlineCloudArrowUp
                                                className="w-8 h-8 mb-4 text-gray-500"/>
                                            <p className="mb-2 text-sm text-gray-500">
                                                                    <span
                                                                        className="font-semibold">Click to upload</span> or
                                                drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="hidden"
                                            onChange={(event) => handleFileChangeMe(event)}
                                            ref={fileInputRefMe}
                                            multiple // Allow multiple file selection
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button
                                onClick={handleCancelClickMe}
                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSaveClickMe}
                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded"
                            >
                                Save
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Profile Picture Post Pop-Up End */}

                {/* Start Audience Pop-Up Start */}
                <Modal size="lg"
                       show={openStartAudienceModal}
                       style={{
                           backgroundColor: 'rgb(17 24 39 / 10%)',
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartAudienceModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Select Your Audience</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div ref={modalRef} className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Choose who can see your post. Your posy will appear on the feed,
                                your profile,
                                and in search results.
                            </h4>

                            <div className="mt-4">
                                <div onClick={() => onChange(1)}
                                     className="box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoMdGlobe
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Anyone
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Anyone on or off Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(2)}
                                     className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <FaUsers
                                                className="w-[16px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    Followers only
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Your followers on Nosres Marketplace
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>


                                <div onClick={() => onChange(3)}
                                     className="mt-4 box cursor-pointer py-2 px-4 border rounded">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-center justify-between">
                                        <div className="flex items-start gap-2">
                                            <IoLockClosed
                                                className="w-[17px] h-[17px] text-graycolor mt-1"/>
                                            <div className="content">
                                                <h4 className="text-[14px] text-prgcolor">
                                                    No one
                                                </h4>
                                                <h4 className="-mt-1 text-[12px] text-graycolor">
                                                    Only you
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartAudienceModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenStartAudienceModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Save
                            </button>

                            {/* Start Post Reactions */}
                            {showStartPostEmoji &&
                                <div ref={emojiPickerRef}
                                     className="comment_emoji z-[999] fixed top-[60%] lg:top-1/2 right-4 lg:right-20 transform -translate-y-1/2">
                                    <Picker
                                        data={data}
                                        theme="light"
                                        perLine={8}
                                        emojiSize={22}
                                        onEmojiSelect={addStartPostEmoji}
                                        maxFrequentRows={0}
                                        maxEmojiRows={2}
                                    />
                                </div>
                            }
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Audience Pop-Up End */}

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
                        <h4 className="text-[16px]">Block Store</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Are you sure you want to block UpTown Store?
                                <br/>
                                <br/>
                                UpTown Store will no longer be able to to view your posts on your timeline,
                                tag you, initiate a conversation with you, or re-follow you
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
                        <h4 className="text-[16px]">Report Store</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please share your reasons for reporting this store. Your feedback is crucial
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
                                                Selling illegal goods, counterfeit products, or misrepresented items
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
                                                Poor customer service
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Consistently unresponsive, rude, or unhelpful customer suppor
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
                                                False advertising
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
                                                Misleading descriptions, images, or claims about products
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
                                                Delayed shipments
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Frequently shipping orders late or not at all
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
                                                Quality issues
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Selling low-quality or defective products
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
                                                Inappropriate content
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Posting offensive or obscene product descriptions or images
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
                                                Unauthorized charges
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Charging extra fees without consent
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
                                                Price gouging
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Charging excessively high prices, especially during emergencies or
                                                shortages
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                                <div onClick={() => onChange(10)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={10}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Safety concerns
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Selling unsafe or hazardous products
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
                        <h4 className="text-[16px]">Report Store</h4>
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
                                                Selling illegal goods, counterfeit products, or misrepresented items
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