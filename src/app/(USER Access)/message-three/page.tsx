"use client";
import React, {useEffect, useRef, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import {HiUserCircle} from "react-icons/hi";
import Image from "next/image";
import PostImg from "../../../../public/assets/images/post-image.jpg";
import Link from "next/link";
import {LuDot} from "react-icons/lu";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import {Modal} from "flowbite-react";
import {Radio, RadioChangeEvent} from "antd";
import {HiArrowLongLeft} from "react-icons/hi2";
import {IoSearchOutline} from "react-icons/io5";
import {FiEdit} from "react-icons/fi";

function Page() {
    const loading = useLoading();
    useTitle("Message")
    const currentYear = new Date().getFullYear();

    // 👇️ Add 3 dots (Right Side)
    const [addDotRightSideClick, setAddDotRightSideClick] = useState(false);
    const AddDotRightSideDropdownRef = useRef(null);
    const handleAddDotRightSideClick = () => {
        setAddDotRightSideClick(!addDotRightSideClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (AddDotRightSideDropdownRef.current && !AddDotRightSideDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setAddDotRightSideClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Right side Ad hide/show
    const [currentAdBoxRightSide, setCurrentAdBoxRightSide] = useState('post_box_right_side');
    const toggleAdBoxRightSideVisibility = () => {
        setCurrentAdBoxRightSide(currentAdBoxRightSide === 'post_box_right_side' ? 'add_hidden_box_right_side' : 'post_box_right_side');
    };

    // Feedback Ad / Report Ad popup (Right Side)
    const [openFeedbackAdModalRightSide, setOpenFeedbackAdModalRightSide] = useState<boolean>(false);
    const [openReportAdModalRightSide, setOpenReportAdModalRightSide] = useState<boolean>(false);
    const [openReportAdSubmitModalRightSide, setOpenReportAdSubmitModalRightSide] = useState<boolean>(false);
    const handleAdSubmitButtonClickRightSide = () => {
        setOpenReportAdSubmitModalRightSide(false);
        setOpenReportAdModalRightSide(false);
        // Hide the add_hidden_box div and show the remove_success div
        setCurrentAdBoxRightSide('remove_success_right_side');
    }

    const handleAdFeedbackSubmitButtonClickRightSide = () => {
        setOpenFeedbackAdModalRightSide(false);
        // Hide the add_hidden_box div and show the remove_success div
        setCurrentAdBoxRightSide('remove_success_right_side');
    }

    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };
    //------------------------- Right Side Work End ------------------------------//

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
    return (
        <>
            <section id="message-section" className="overflow-y-hidden">
                <div className="container_full sm:container h-screen">
                    <div className="pt-[75px] pb-[50px] lg:pb-0 h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                            <div className="col lg:col-span-8 message_box_wrap rounded bg-white py-4">
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
                                    <div className="col lg:col-span-5 hidden lg:block border-r">
                                        <div className="user_box space-y-0 w-full h-[76vh] overflow-y-auto">
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                                                May 18
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        Brothers, It is Excellent idea for got...
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
                                                <div className="icon">
                                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                </div>
                                                <div className="wrap w-full mr-4">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-[14px] font-normal text-prgcolor cursor-pointer">
                                                            Muhamd Sojib Saiham
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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
                                            <div className="user pl-4 py-4 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100">
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

                                        </div>
                                    </div>

                                    <div className="col lg:col-span-7">
                                        <div className="box w-full h-full flex items-center justify-center">
                                            <div
                                                className="under_box w-[80%] text-center border rounded p-4">
                                                {loading ? (
                                                    <div>
                                                        <Skeleton height={10} count={2}/>
                                                        <Skeleton height={20} count={1}/>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <h4 className="text-[14px] font-[500] text-prgcolor">
                                                            Select a Message
                                                        </h4>
                                                        <h4 className="text-[12px] text-graycolor mt-1">
                                                            Select one from your existing messages,<br/>
                                                            or start a new chat.
                                                        </h4>
                                                        <button onClick={() => setOpenStartPostMessageModal(true)}
                                                                type='button'
                                                                className="mt-3 py-2 px-4 border rounded hover:bg-primary hover:text-white text-primary text-[14px] transition">
                                                            New Chat
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col lg:col-span-4 hidden lg:block">
                                <div className="wrap">
                                    <div className="box bg-white h-full px-4 py-4 rounded">
                                        {loading ? (
                                            <div>
                                                <Skeleton height={20} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex gap-2 items-center">
                                                    <svg
                                                        className="text-gray-500 w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path
                                                            d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
                                                        <path d="M2 7h20"/>
                                                        <path
                                                            d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
                                                    </svg>
                                                    <h4 className="text-[14px] font-semibold cursor-pointer hover:underline">
                                                        Store Inbox
                                                    </h4>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Post Box */}
                                    {currentAdBoxRightSide === 'post_box_right_side' && (
                                        <div className="post_box-right_side box mt-4 bg-white px-4 py-4 rounded">
                                            {loading ? (
                                                <div className="flex items-center justify-start gap-2 w-full">
                                                    <Skeleton width={50} height={50} borderRadius="100%" count={1}/>
                                                    <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                            <div className="leading-[17px]">
                                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline cursor-pointer">
                                                                    Sony Inc.
                                                                </h4>
                                                                <span
                                                                    className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                                            </div>
                                                        </div>

                                                        <div onClick={handleAddDotRightSideClick}
                                                             ref={AddDotRightSideDropdownRef}
                                                             className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${addDotRightSideClick ? 'bg-gray-100' : ''}`}>
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="#6B7280"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 16 16">
                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                            </svg>

                                                            {addDotRightSideClick &&
                                                                <div
                                                                    className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                    <div className="container py-2">
                                                                        <div className="space-y-1 text-[14px]">
                                                                            <div
                                                                                onClick={toggleAdBoxRightSideVisibility}
                                                                                className="flex cursos-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                <svg
                                                                                    className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 24 24" fill="none"
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
                                                                                    <line x1="2" x2="22" y1="2"
                                                                                          y2="22"/>
                                                                                </svg>
                                                                                <h4>
                                                                                    Hide ad
                                                                                </h4>
                                                                            </div>

                                                                            <div
                                                                                onClick={() => setOpenReportAdModalRightSide(true)}
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
                                                                                    <line x1="4" x2="4" y1="22"
                                                                                          y2="15"/>
                                                                                </svg>
                                                                                <h4>
                                                                                    Report ad
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
                                            {loading ? (
                                                <div>
                                                    <Skeleton height={20} count={1}/>
                                                </div>
                                            ) : (
                                                <>
                                                    <h4 className="mt-3 text-[12px] text-prgcolor">
                                                        The SRS-XB100 speaker provides powerful, clear,
                                                        expansive sound in a small, portable and durable
                                                        body. Despite its size...
                                                    </h4>
                                                </>
                                            )}
                                            <div className="post-image mt-3">
                                                {loading ? (
                                                    <>
                                                        <div className="box mt-0 bg-white px-0 pt-0 pb-0 rounded">
                                                            <Skeleton height={183} count={1}/>
                                                            <Skeleton height={30} count={1}/>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Image src={PostImg} className="w-full h-36" alt="PostImg"/>

                                                        <div className="flex items-center justify-between mt-3">
                                                            <h4 className="text-[14px] text-prgcolor font-[500] cursor-pointer hover:underline">Sony
                                                                SRS-XB13B</h4>
                                                            <button type="button"
                                                                    className="py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                                                Learn More
                                                            </button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Come Ad Hidden Box */}
                                    {currentAdBoxRightSide === 'add_hidden_box_right_side' && (
                                        <div className="add_hidden_box">
                                            <div className="box mt-4 bg-white px-4 py-4 rounded">
                                                <div className="flex items-start justify-between pb-3">
                                                    <div className="content">
                                                        <h4 className="text-[14px] text-prgcolor font-[500]">
                                                            Ad hidden from your feed
                                                        </h4>
                                                        <h4 className="text-[12px] text-graycolor">
                                                            Share more details so we can personalize your feed.
                                                        </h4>
                                                    </div>
                                                    <div className="button_right">
                                                        <button onClick={toggleAdBoxRightSideVisibility}
                                                                type="button"
                                                                className="py-2 px-6 rounded text-primary text-[14px] bg-gray-100 hover:bg-primary hover:text-white">
                                                            Undo
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr/>

                                                <div onClick={() => setOpenFeedbackAdModalRightSide(true)}
                                                     className="box cursor-pointer flex items-start gap-2 border mt-4 bg-white px-4 py-4 rounded">
                                                    <div className="icon mt-1">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round">
                                                            <path
                                                                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                                            <path d="M13 8H7"/>
                                                            <path d="M17 12H7"/>
                                                        </svg>
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="text-[14px] text-prgcolor">
                                                            Provide feedback
                                                        </h4>
                                                        <h4 className="text-[12px] text-graycolor">
                                                            Please provide more information to help us customize
                                                            your
                                                            feed.
                                                        </h4>
                                                    </div>
                                                </div>

                                                <div onClick={() => setOpenReportAdModalRightSide(true)}
                                                     className="box cursor-pointer flex items-start gap-2 border mt-4 bg-white px-4 py-4 rounded">
                                                    <div className="icon mt-1">
                                                        <svg
                                                            className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
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
                                                    <div className="content">
                                                        <h4 className="text-[14px] text-prgcolor">
                                                            Report ad
                                                        </h4>
                                                        <h4 className="text-[12px] text-graycolor">
                                                            Please flag if it violates our community guidelines.
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* remove_success div */}
                                    {currentAdBoxRightSide === 'remove_success_right_side' && (
                                        <div className="mt-4 remove_success rounded box bg-white px-6 py-4">
                                            <div className="flex items-start gap-2">
                                                <div className="icon mt-1">
                                                    <svg
                                                        className="w-5 h-5 transition duration-75 group-hover:stroke-primary"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" fill="none" stroke="#6B7280"
                                                        strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path
                                                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                                        <path d="M13 8H7"/>
                                                        <path d="M17 12H7"/>
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Thank you for your feedback.
                                                    </h4>
                                                    <h4 className="text-[12px] text-graycolor">
                                                        You won{`'`}t come across this ad again.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    )}

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
                                    <div className="mt-3 user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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
                                    <div className="user cursor-pointer hover:bg-gray-100 pt-2 pb-4 flex items-center justify-between">
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


                {/*---------------- Right Side Popups Start -------------- */}
                {/* Start FeedbackAd Pop-Up Start (Right Side) */}
                <Modal size="lg"
                       show={openFeedbackAdModalRightSide}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenFeedbackAdModalRightSide(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Share Feedback</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please share why you prefer not to see this ad. Your feedback is
                                valuable
                                for improving your overall experience.
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
                                        className="flex items-center justify-start">
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                It’s offensive and inappropriate.
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
                                        className="flex items-center justify-start">
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                It looks suspicious.
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
                                        className="flex items-center justify-start">
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                It’s annoying or not interesting.
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
                                        className="flex items-center justify-start">
                                        <div className="radio_box">
                                            <Radio value={4}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                I keep seeing the same thing.
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
                                        className="flex items-center justify-start">
                                        <div className="radio_box">
                                            <Radio value={5}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] text-prgcolor">
                                                It’s not relevant to me.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenFeedbackAdModalRightSide(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={handleAdFeedbackSubmitButtonClickRightSide}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Submit
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start FeedbackAd Pop-Up End (Right Side) */}


                {/* Start ReportAdd Pop-Up Start (Right Side) */}
                <Modal size="lg"
                       show={openReportAdModalRightSide}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdModalRightSide(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report Ad</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please share your reasons for reporting this ad. Your feedback is
                                crucial
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
                                                particular group.
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
                                                that incite fear.
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
                                                harm to others.
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
                                                Adult content
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Displaying nudity or sexual content.
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
                                                Intellectual property infringement
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Using someone else’s creative work without
                                                authorization.
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
                                                Damaging the good reputation of someone.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdModalRightSide(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenReportAdSubmitModalRightSide(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Next
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Pop-Up End (Right Side) */}

                {/* Start ReportAdd Submit Pop-Up Start (Right Side) */}
                <Modal size="lg"
                       show={openReportAdSubmitModalRightSide}
                       style={{
                           padding: '0px',
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdSubmitModalRightSide(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report Ad</h4>
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
                                placeholder="Please provide further details about your report. Your feedback plays a
                                    crucial role in creating a safer and more trustworthy community for
                                    everyone."
                            >
                            </textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdSubmitModalRightSide(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={handleAdSubmitButtonClickRightSide}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Submit
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Submit Pop-Up End (Right Side) */}
                {/*---------------- Right Side Popups End -------------- */}

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
                                            <h4 className="text-[12px] text-graycolor">Follow Each Other</h4>
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
            </section>
        </>
    )
        ;
}

export default Page;