"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import {HiUserCircle} from "react-icons/hi";
import Image from "next/image";
import MessageImg from "../../../../public/assets/images/message-photo.jpg";
import Link from "next/link";
import {LuMessageSquareLock} from "react-icons/lu";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import {Carousel, Modal} from "flowbite-react";
import {Radio, RadioChangeEvent} from "antd";
import {HiArrowLongLeft} from "react-icons/hi2";
import {IoSearchOutline} from "react-icons/io5";
import {GoSmiley} from "react-icons/go";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {PiHandsPrayingLight} from "react-icons/pi";
import {FiEdit} from "react-icons/fi";
import SliderOneImg from "../../../../public/assets/images/slider1.jpg";
import {GrAttachment} from "react-icons/gr";
import {
    AiOutlineFilePdf,
    AiOutlineFilePpt,
    AiOutlineFileExcel,
    AiOutlineFileZip,
    AiOutlineFile, AiOutlineFileWord,
} from "react-icons/ai";
import {PiFileVideo, PiFileAudio} from "react-icons/pi";
import {MdOutlineFileDownload} from "react-icons/md";
import SliderThreeImg from "../../../../public/assets/images/slider3.jpg";
import {FcAbout, FcPrivacy} from "react-icons/fc";

function Page() {
    const loading = useLoading();
    useTitle("Message")

    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };

    // Message Users Toggle
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Post Message Popup
    const [openStartPostMessageModal, setOpenStartPostMessageModal] = useState<boolean>(false);
    const [selectedBox, setSelectedBox] = useState(null);
    const handleBoxClick = (index: any) => {
        setSelectedBox(index);
    };

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

// Input dynamic
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState(40); // Initial height
    const defaultMessageHeight = 56; // Default height percentage

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setStartPostText(e.target.value);

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reset height
            const newHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = `${newHeight}px`; // Expand

            // Only update if height is greater than 40px
            if (newHeight > 40) {
                setTextareaHeight(newHeight > 160 ? 160 : newHeight); // Limit max height to 160px
            }
        }
    };

    // 👇️ Add 3 dots
    const [addDotClick, setAddDotClick] = useState(false);
    const AddDotDropdownRef = useRef(null);
    const handleAddDotClick = () => {
        setAddDotClick(!addDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (AddDotDropdownRef.current && !AddDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setAddDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Notification Mute / Unmute
    const [isMuted, setIsMuted] = useState(false);
    const handleToggleMute = () => {
        setIsMuted(!isMuted);
    };

    // Delete Conversation Modal
    const [openDeleteConModal, setOpenDeleteConModal] = useState<boolean>(false);
    // Block Message Modal
    const [openBlockMesModal, setOpenBlockMesModal] = useState<boolean>(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const handleBlockClick = () => {
        setOpenBlockMesModal(false);
        setIsBlocked(true);
    };
    const [openBlockMesConfirmModal, setOpenBlockMesConfirmModal] = useState<boolean>(false);
    const handleUnblockClick = () => {
        setOpenBlockMesConfirmModal(false);
        setIsBlocked(false);
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


    // Message Image Modal
    const [openStartMessageImageModal, setOpenStartMessageImageModal] = useState<boolean>(false);


    //--------------------------------------------------------------------------------------------//
    // Powered Modal (Learn more button clicked)
    const [openPoweredModal, setopenPoweredModal] = useState<boolean>(false);
    const [openPoweredModalNew, setopenPoweredModalNew] = useState<boolean>(false);
    return (
        <>
            <section id="message-section" className="overflow-y-hidden">
                <div className="container_full sm:container h-screen">
                    <div className="pt-[75px] pb-[50px] lg:pb-0 h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                            <div className="col lg:col-span-12 message_box_wrap rounded bg-white py-4">
                                {/* Message Header */}
                                <div className="px-5">
                                    {loading ? (
                                        <div className="pb-3">
                                            <Skeleton height={30} count={1}/>
                                        </div>
                                    ) : (
                                        <>
                                            <div
                                                className="message_header pb-3 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    {/* Message sidebar show Icon */}
                                                    <div onClick={toggleDrawer}
                                                         className="block lg:hidden icon group cursor-pointer">
                                                        <HiArrowLongLeft
                                                            size={22}
                                                            className={`${isDrawerOpen ? 'text-primary' : 'text-prgcolor'} group-hover:text-primary`}/>
                                                    </div>
                                                    <h4 className="text-prgcolor text-[16px] font-[500]">
                                                        Messages
                                                    </h4>
                                                </div>
                                                <div onClick={() => setOpenStartPostMessageModal(true)}
                                                     className="icon cursor-pointer group">
                                                    <FiEdit size={20}
                                                            className="text-graycolor group-hover:text-primary"/>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 border-t pb-4 h-full">
                                    <div className="col lg:col-span-4 hidden lg:block border-r">
                                        <div className="user_box space-y-0 w-full h-[76vh] overflow-y-auto">
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Roshan Nafiz
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Brothers, It is Excellent idea for got to the new...
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            John Doe
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Muhamd Sojib Saiham J...
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div
                                                className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Rikto Hossen
                                                        </h4>
                                                        <div className="date">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                May 17
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Excellent idea.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col lg:col-span-8">
                                        <div className="box w-full h-full relative">
                                            <div className="px-4 flex items-center justify-between">
                                                <div className="user flex items-center gap-2">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                    <h4 className="text-[14px] font-semibold text-prgcolor hover:underline cursor-pointer">
                                                        Brad Pitt
                                                    </h4>
                                                </div>

                                                <div className="flex items-center justify-end text-end">
                                                    <div onClick={handleAddDotClick}
                                                         ref={AddDotDropdownRef}
                                                         className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${addDotClick ? 'bg-gray-100' : ''}`}>
                                                        <svg
                                                            className="w-3 h-3"
                                                            fill="#828D9E"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                        </svg>

                                                        {addDotClick &&
                                                            <div
                                                                className="dots-dropdown-menu w-[300px] z-40 absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                <div className="container py-2">
                                                                    <div className="space-y-1 text-[14px]">

                                                                        <div onClick={handleToggleMute}
                                                                             className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                            {isMuted ? (
                                                                                <svg
                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 24 24" fill="none"
                                                                                    stroke="#6B7280"
                                                                                    strokeWidth="1.5"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round">
                                                                                    <path
                                                                                        d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"/>
                                                                                    <path
                                                                                        d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"/>
                                                                                    <path
                                                                                        d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                                                                                    <path d="m2 2 20 20"/>
                                                                                </svg>
                                                                            ) : (
                                                                                <svg
                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 24 24" fill="none"
                                                                                    stroke="#6B7280"
                                                                                    strokeWidth="1.5"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round">
                                                                                    <path
                                                                                        d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                                                                                    <path
                                                                                        d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                                                                                </svg>
                                                                            )}
                                                                            {isMuted ? (
                                                                                <h4>
                                                                                    Unmute notifications
                                                                                </h4>
                                                                            ) : (
                                                                                <h4>
                                                                                    Mute notifications
                                                                                </h4>
                                                                            )}
                                                                        </div>

                                                                        <div
                                                                            onClick={() => setOpenDeleteConModal(true)}
                                                                            className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                            <svg
                                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="#6B7280"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round">
                                                                                <path d="M3 6h18"/>
                                                                                <path
                                                                                    d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                                                <path
                                                                                    d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                                                                <line x1="10" x2="10" y1="11" y2="17"/>
                                                                                <line x1="14" x2="14" y1="11" y2="17"/>
                                                                            </svg>
                                                                            <h4>
                                                                                Delete conversation
                                                                            </h4>
                                                                        </div>
                                                                        <div
                                                                            className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                            <svg
                                                                                className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="#6B7280"
                                                                                strokeWidth="1.5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round">
                                                                                <circle cx="12" cy="12" r="10"/>
                                                                                <path d="m4.9 4.9 14.2 14.2"/>
                                                                            </svg>
                                                                            {isBlocked ? (
                                                                                <h4 onClick={() => setOpenBlockMesConfirmModal(true)}
                                                                                    className="w-full text-left">
                                                                                    Unblock
                                                                                </h4>
                                                                            ) : (
                                                                                <h4 onClick={() => setOpenBlockMesModal(true)}
                                                                                    className="w-full text-left">
                                                                                    Block
                                                                                </h4>
                                                                            )}
                                                                        </div>
                                                                        <div onClick={() => setOpenReportAdModal(true)}
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
                                                                                Report
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>

                                            <div
                                                className="messages_wrap absolute top-[12%] pt-[5px] pb-[65px] bg-white z-20 w-[100%] pl-5 pr-3 overflow-y-auto"
                                                style={{
                                                    height: `calc(${defaultMessageHeight}% - ${textareaHeight > 40 ? textareaHeight - 40 : 0}px)`,
                                                }}
                                            >

                                                <div
                                                    className="profile_box flex flex-col items-center justify-center bg-white z-20 w-[100%]">
                                                    <div className="icon">
                                                        <HiUserCircle size={60} className="text-[#6B7280]"/>
                                                    </div>
                                                    <h4 className="text-[16px] text-prgcolor">Brad Pitt</h4>
                                                    <h4 className="text-[12px] text-graycolor mt-1">
                                                        You follow each other on Marketplace.
                                                    </h4>
                                                </div>

                                                <div className="message pt-[25px]">
                                                    <div
                                                        className="bg-gray-100 inline-block py-3 pl-4 pr-14 rounded-2xl rounded-bl-none">
                                                        <h4 className="text-[14px] text-prgcolor text-left">
                                                            Hello, John! How are you?
                                                        </h4>
                                                    </div>
                                                    <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                        Oct 20, 2017, 1:22 AM
                                                    </h6>
                                                </div>

                                                <div
                                                    className="message flex mt-4 space-x-3 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#3197f5] inline-block py-2 pl-4 pr-10 rounded-2xl rounded-br-none">
                                                            <h4 className="text-[14px] text-white">
                                                                https://nosres-marketplace.vercel.app <br/>message-five
                                                            </h4>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:23 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div className="message mt-4 w-[82%] sm:w-[62%]">
                                                    <div
                                                        className="flex cursor-pointer items-center gap-3 bg-[#F3F4F6] rounded pl-4 py-3">
                                                        <Image src={SliderOneImg} className="w-[18%] h-[55px] rounded"
                                                               alt="PostImg"/>
                                                        <div className="content_area">
                                                            <h4 className="text-[14px] text-black font-[500]">
                                                                Experience cutting-edge of technology Iphone...
                                                            </h4>
                                                            <h4 className="text-graycolor text-[14px]">blends.nosres.com</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="message mt-4 w-[82%] sm:w-[62%] ml-auto">
                                                    <div
                                                        className="flex cursor-pointer items-center gap-3 bg-[#F3F4F6] rounded px-4 py-3">
                                                        <div className="content_area">
                                                            <h4 className="text-[14px] text-black font-[500]">
                                                                Experience the cutting-edge technology of the iPhone
                                                                and...
                                                            </h4>
                                                            <h4 className="text-graycolor text-[14px]">blends.nosres.com</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*Preview Message One*/}
                                                <div className="message mt-4">
                                                    <div
                                                        className="bg-[#FECACA] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                        <div className="flex items-center gap-1 relative">
                                                            <div className="icon_wrap">
                                                                <AiOutlineFilePdf size={32} className="text-[#EF4444]"/>
                                                            </div>
                                                            <div className="text_wrap">
                                                                <h4 className="main_text text-[#DC2626] text-[14px]">
                                                                    Project-Brief.pdf
                                                                </h4>
                                                                <h4 className="sub_text text-[#F87171] text-[12px]">
                                                                    177 KB
                                                                </h4>
                                                            </div>
                                                            <div
                                                                className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                <MdOutlineFileDownload size={22}
                                                                                       className="text-[#DC2626]"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                        Oct 20, 2017, 1:22 AM
                                                    </h6>
                                                </div>

                                                <div className="message mt-4">
                                                    <div
                                                        className="flex text-center rounded w-full cursor-pointer">
                                                        <div
                                                            className="protected_message bg-[#F6FAFF] rounded-full p-2 border">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                This message can{`'`}t be decrypted.
                                                                <Link onClick={() => setopenPoweredModalNew(true)}
                                                                      href="#"
                                                                      className="-mt-[2px] text-primary text-[12px]">
                                                                    Learn more
                                                                </Link>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*Preview Message Two*/}
                                                <div className="message mt-4 flex ml-auto justify-end">
                                                    <div
                                                        className="text-center rounded cursor-pointer">
                                                        <div
                                                            className="protected_message bg-[#F6FAFF] rounded-full p-2 border">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                This message can{`'`}t be decrypted.
                                                                <Link onClick={() => setopenPoweredModalNew(true)}
                                                                      href="#"
                                                                      className="-mt-[2px] text-primary text-[12px]">
                                                                    Learn more
                                                                </Link>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#BFDBFE] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFileWord size={32}
                                                                                       className="text-[#1D4ED8]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#1D4ED8] text-[14px]">
                                                                        Project-Brief.docx
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#60A5FA] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#1D4ED8]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Three*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#FEF3C7] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFileZip size={32}
                                                                                      className="text-[#F59E0B]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#B45309] text-[14px]">
                                                                        Project-Brief for tomoro...
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#FBBF24] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#B45309]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Four*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#D1FAE5] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFileExcel size={32}
                                                                                        className="text-[#047857]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#064E3B] text-[14px]">
                                                                        Project-Brief.xlsx
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#6EE7B7] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#064E3B]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Five*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#FEE2B3] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFilePpt size={32}
                                                                                      className="text-[#F97316]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#C2410C] text-[14px]">
                                                                        Project-Brief.pptx
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#FDBA74] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#C2410C]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Six*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#F3F4F6] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFile size={32}
                                                                                   className="text-[#4B5563]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#374151] text-[14px]">
                                                                        Project-Brief.txt
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#9CA3AF] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#374151]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Seven*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#F3F4F6] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFile size={32}
                                                                                   className="text-[#4B5563]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#374151] text-[14px]">
                                                                        Project-Brief.rtf
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#9CA3AF] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#374151]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Eight*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div onClick={() => setOpenStartMessageImageModal(true)}
                                                             className="w-[200px] h-[191px] cursor-pointer">
                                                            <Image src={MessageImg} className="rounded"
                                                                   alt="MessageImg"/>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Nine*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#F3E8FF] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <PiFileVideo size={32}
                                                                                 className="text-[#6B21A8]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#9D4EDD] text-[14px]">
                                                                        Screen recording.mov
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#D8B4FE] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#9D4EDD]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Ten*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#D1FAE5] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <PiFileAudio size={32}
                                                                                 className="text-[#10B981]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#047857] text-[14px]">
                                                                        Audio recording.mp3
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#34D399] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#047857]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Eleven*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#E5E5E5] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFile size={32}
                                                                                   className="text-[#A3A3A3]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#4D4D4D] text-[14px]">
                                                                        Project-Brief.html
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#B3B3B3] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#4D4D4D]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Twelve*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#E5E5E5] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFile size={32}
                                                                                   className="text-[#A3A3A3]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#4D4D4D] text-[14px]">
                                                                        Project-Brief.psd
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#B3B3B3] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#4D4D4D]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                {/*Preview Message Thirteen*/}
                                                <div className="message flex mt-4 ml-auto justify-end">
                                                    <div className="wrap">
                                                        <div
                                                            className="bg-[#E5E5E5] inline-block p-3 rounded w-[220px] cursor-pointer">
                                                            <div className="flex items-center gap-1 relative">
                                                                <div className="icon_wrap">
                                                                    <AiOutlineFile size={32}
                                                                                   className="text-[#A3A3A3]"/>
                                                                </div>
                                                                <div className="text_wrap">
                                                                    <h4 className="main_text text-[#4D4D4D] text-[14px]">
                                                                        Project-Brief.ai
                                                                    </h4>
                                                                    <h4 className="sub_text text-[#B3B3B3] text-[12px]">
                                                                        177 KB
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="icon_wrap absolute right-0 bottom-0 cursor-pointer">
                                                                    <MdOutlineFileDownload size={22}
                                                                                           className="text-[#4D4D4D]"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="text-[10px] mt-2 text-graycolor leading-none">
                                                            Oct 20, 2017, 1:22 AM
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div className="relative w-full">
                                                    <div
                                                        className="protected_message w-full mx-4 absolute -right-[12px] mt-3 bg-[#F6FAFF] rounded p-2 flex items-start gap-1">
                                                        <div className="icon_wrap">
                                                            <LuMessageSquareLock className="text-gray-500" size={18}/>
                                                        </div>
                                                        <div className="text_wrap">
                                                            <h4 className="text-[12px] text-graycolor">
                                                                Your messages are fully protected with end-to-end
                                                                encryption.<br/>
                                                                <Link onClick={() => setopenPoweredModal(true)}
                                                                      href="#"
                                                                      className="-mt-[2px] text-primary text-[12px]">
                                                                    Learn more
                                                                </Link>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {isBlocked ? (
                                                <div className="w-full absolute z-30 bg-white bottom-4">
                                                    <div className="px-6 py-4">
                                                        <h4 className="text-[14px] text-prgcolor">
                                                            You blocked messages from Jeff.
                                                        </h4>
                                                        <h4 className="text-[12px] text-graycolor mt-0">
                                                            You are unable to send messages within this conversation,
                                                            and you will not receive any messages either.
                                                        </h4>
                                                        <button onClick={() => setOpenBlockMesConfirmModal(true)}
                                                                type='button'
                                                                className="mt-2 text-[14px] py-2 px-6 hover:bg-primary hover:text-white border bg-gray-100 rounded">
                                                            Unblock
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div ref={modalRef} className="w-full absolute z-30 bg-white bottom-4">
                                                    <div className="write_box px-4 w-full border-t">
                                                      <textarea
                                                          ref={textareaRef}
                                                          value={startPostText}
                                                          onChange={handleInput}
                                                          className="block mt-2 mb-2 rounded w-full pb-2 px-4 border border-none focus:border-none focus:ring focus:ring-transparent text-prgcolor text-[12px] focus:outline-none resize-none max-h-40 overflow-y-auto"
                                                          placeholder="Write a Message..."
                                                          rows={2}
                                                      />
                                                    </div>
                                                    <div className="icon_box px-4 pb-4 w-full border-t">
                                                        <div className="flex items-center justify-between mt-3">
                                                            <div className="relative flex items-center gap-2">
                                                                <div className="cursor-pointer">
                                                                    <div className="relative cursor-pointer">
                                                                        <input
                                                                            type="file"
                                                                            id="file-upload"
                                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                        />
                                                                        <label htmlFor="file-upload">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 24 24"
                                                                                 fill="#4D7FB8"
                                                                                 className="w-6 h-6">
                                                                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                                            1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                                            16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                                            0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                                            16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                                      clipRule="evenodd"/>
                                                                            </svg>
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                <div className="attac cursor-pointer">
                                                                    <GrAttachment size={18}
                                                                                  className="text-graycolor hover:text-primary"/>
                                                                </div>

                                                                <div
                                                                    onClick={() => setShowStartPostEmoji(!showStartPostEmoji)}
                                                                    className="cursor-pointer"
                                                                >
                                                                    <GoSmiley
                                                                        size={20}
                                                                        className="text-graycolor hover:text-primary"/>
                                                                </div>

                                                                {/* Start Post Reactions */}
                                                                {showStartPostEmoji &&
                                                                    <div ref={emojiPickerRef}
                                                                         className="comment_emoji z-[999] absolute bottom-[30px] left-0 lg:left-auto right-auto lg:right-0">
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
                                                            <div
                                                                className={`${startPostText ? 'cursor-pointer ' : 'cursor-not-allowed'}`}>
                                                                <svg
                                                                    className={`w-[24px] h-[24px] transition text-[#828D9E] ${startPostText ? 'text-primary' : ''}`}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.5" strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="m3 3 3 9-3 9 19-9Z"/>
                                                                    <path d="M6 12h16"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tap Left message Menu */}
                <section className="mobile_left_message_box flex lg:hidden">
                    <div className="container">
                        <div id="drawer-navigation"
                             className={`fixed bg-white lg:bg-transparent top-[128px] lg:visible z-30 h-screen pl-0 pt-0 p-0 overflow-y-auto transition-transform ${isDrawerOpen ? 'w-full left-0 sm:left-auto' : 'w-0 left-auto invisible'}`}
                             tabIndex={-1} aria-labelledby="drawer-navigation-label">

                            {/* User Comes Here */}
                            <div className="px-0 overflow-y-auto h-[84vh]">
                                <div className="user_box space-y-2 w-full h-[76vh] border-r overflow-y-auto">
                                    <div
                                        className="mt-3 user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    Did you get it?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer bg-white hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Sojib Hasan
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    Are you okay?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
                                        <div className="px-4 mt-2 flex items-center gap-2">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] text-prgcolor cursor-pointer">
                                                    Jeff Bently
                                                </h4>
                                                <h4 className="text-[12px] text-graycolor">
                                                    What are you doing?
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="date -mt-2 mr-4">
                                            <h4 className="text-[12px] text-graycolor">
                                                2:07 PM
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Start Message Pop-Up Start */}
                <Modal size="lg"
                       dismissible
                       show={openStartPostMessageModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartPostMessageModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">New Message</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="top_content sticky z-[999] -top-[24px] py-4 bg-white">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border w-full text-[14px] text-prgcolor border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                        placeholder="Type a name"
                                    />

                                    <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                        <IoSearchOutline
                                            className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                                    </div>
                                </div>
                            </div>

                            <div className="scroll_content mt-4">
                                <div onClick={() => handleBoxClick(1)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 1 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                            <h4 className="text-[12px] text-graycolor">Followee</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(2)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 2 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jebon Hasan</h4>
                                            <h4 className="text-[12px] text-graycolor">Follow each Other</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(3)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 3 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Rakib Islam</h4>
                                            <h4 className="text-[12px] text-graycolor">Follower</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(4)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 4 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(5)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 5 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(6)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 6 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(7)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 7 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(8)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 8 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(9)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 9 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleBoxClick(10)}
                                     className={`box mt-4 cursor-pointer py-2 px-2 border rounded ${selectedBox === 10 ? 'border-primary bg-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={40} className="text-[#6B7280]"/>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartPostMessageModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartPostMessageModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Next
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Message Pop-Up End */}

                {/* Start Delete Conversation Pop-Up Start */}
                <Modal size="lg"
                       show={openDeleteConModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenDeleteConModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Delete Conversation</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Deleting a conversation only removes it from your account; the other person
                                will still have access to it on their account. Once you delete this
                                conversation, the action is irreversible.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenDeleteConModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenDeleteConModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Delete
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Delete Conversation Pop-Up End */}
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
                        <h4 className="text-[16px]">Block Messages</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Once you block this person, you will no longer receive messages from them.
                                However, their account will still remain active on Marketplace.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenBlockMesModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={handleBlockClick}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Block
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Block Message Pop-Up End */}
                {/* Start Block Message Confirm Pop-Up Start */}
                <Modal size="lg"
                       show={openBlockMesConfirmModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenBlockMesConfirmModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Unblock Messages</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[14px] text-graycolor">
                                Once you unblock this person, you will start receiving messages from them
                                again. However, you won’t receive any messages that were sent while they
                                were blocked.
                            </h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenBlockMesConfirmModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={handleUnblockClick}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Unblock
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Block Message Confirm Pop-Up End */}

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

            {/* Start Message Image Pop-Up Start */}
            <Modal size="5xl"
                   dismissible
                   show={openStartMessageImageModal}
                   style={{
                       padding: '0px',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartMessageImageModal(false)}>
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
                        <div className="slide_wrapper">
                            <div className="slider_wrapper sticky top-0 h-56 sm:h-64 md:h-[450px] bg-black">
                                <Carousel slide={false} indicators={false}>
                                    <Image src={MessageImg} className="message_slider_image py-10 md:py-0"
                                           alt="MessageImg"/>
                                    <Image src={SliderThreeImg}
                                           className="message_slider_image py-10 md:py-0"
                                           alt="SliderThreeImg"/>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Start Powered Pop-Up Start (Learn more button clicked) */}
            <Modal size="lg"
                   show={openPoweredModal}
                   onClose={() => setopenPoweredModal(false)}>
                <Modal.Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '50px',
                        borderBottom: 'none'
                    }}
                >
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <div className="icon w-full -mt-[30px] flex justify-center items-center">
                            <FcPrivacy size={80}/>
                        </div>
                        <h4 className="text-[16px] font-[500] text-center mt-3">
                            Privacy, powered by end-to-end encryption
                        </h4>
                        <h4 className="text-graycolor text-center text-[14px] mt-4">
                            Your messages are encrypted from the moment they leave your
                            device until they reach your recipient — no one else, not even
                            Nosres, can read them.
                            <Link href='https://www.nosres.com/' target='_blank'
                                  className="hover:underline text-primary"> Learn
                                more</Link>
                        </h4>
                    </div>

                    <div className="flex mt-4 w-full items-center justify-between">
                        <button onClick={() => setopenPoweredModal(false)}
                                className="block px-10 w-full text-[14px] py-2 border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:border-primary text-white rounded">
                            Got It
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Start Powered Pop-Up End */}

            {/* Start Powered Pop-Up Start (Learn more new button clicked) */}
            <Modal size="lg"
                   show={openPoweredModalNew}
                   onClose={() => setopenPoweredModalNew(false)}>
                <Modal.Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '50px',
                        borderBottom: 'none'
                    }}
                >
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <div className="icon w-full -mt-[30px] flex justify-center items-center">
                            <FcAbout size={80} className="text-[#4D7FB8]"/>
                        </div>
                        <h4 className="text-[16px] font-[500] text-center mt-3">
                            Privacy, powered by end-to-end encryption
                        </h4>
                        <h4 className="text-graycolor text-center text-[14px] mt-4">
                            Your messages are encrypted from the moment they leave your
                            device until they reach your recipient — no one else, not even
                            Nosres, can read them.
                            <Link href='https://www.nosres.com/' target='_blank'
                                  className="hover:underline text-primary"> Learn
                                more</Link>
                        </h4>
                    </div>

                    <div className="flex mt-4 w-full items-center justify-between">
                        <button onClick={() => setopenPoweredModalNew(false)}
                                className="block px-10 w-full text-[14px] py-2 border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:border-primary text-white rounded">
                            Got It
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Start Powered Pop-Up End */}
        </>
    )
        ;
}

export default Page;