"use client";
import React, {useEffect, useRef, useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import {HiUserCircle} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import ProductImg from '@/../public/assets/images/product-1.png';
import PostImg from '@/../public/assets/images/post-image.jpg';
import {GoComment, GoHeart, GoHeartFill, GoHistory, GoPackage, GoReply, GoSmiley, GoSync} from "react-icons/go";
import {IoMdGlobe} from "react-icons/io";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {LuDot} from "react-icons/lu";
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import SliderOneImg from '@/../public/assets/images/slider1.jpg';
import SliderTwoImg from '@/../public/assets/images/slider2.jpg';
import {Modal} from "flowbite-react";
import {FaAngleDown} from "react-icons/fa6";

export default function Home() {
    const loading = useLoading();
    useTitle("Home")
    const currentYear = new Date().getFullYear();

    // Main comment Emoji With Display In The Input
    const [showCommentEmoji, setShowCommentEmoji] = useState(false);
    const [commentText, setCommentText] = useState("");
    const addCommentEmoji = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentText(commentText + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutside = () => {
        setShowCommentEmoji(false);
    };


    // Comment Emoji With Display In The Input (One)
    const [showCommentEmojiOne, setShowCommentEmojiOne] = useState(false);
    const [commentTextOne, setCommentTextOne] = useState("");
    const addCommentEmojiOne = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextOne(commentTextOne + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideOne = () => {
        setShowCommentEmojiOne(false);
    };

    // Comment Emoji With Display In The Input (Two)
    const [showCommentEmojiTwo, setShowCommentEmojiTwo] = useState(false);
    const [commentTextTwo, setCommentTextTwo] = useState("");
    const addCommentEmojiTwo = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextTwo(commentTextTwo + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideTwo = () => {
        setShowCommentEmojiTwo(false);
    };

    // Comment Emoji With Display In The Input (Three)
    const [showCommentEmojiThree, setShowCommentEmojiThree] = useState(false);
    const [commentTextThree, setCommentTextThree] = useState("");
    const addCommentEmojiThree = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextThree(commentTextThree + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideThree = () => {
        setShowCommentEmojiThree(false);
    };

    // Comment Reply One
    const [showCommentReplyOne, setShowCommentReplyOne] = useState(false);
    const toggleCommentReplyOne = () => {
        setShowCommentReplyOne(prevState => !prevState);
    };

    // Comment Reply Two
    const [showCommentReplyTwo, setShowCommentReplyTwo] = useState(false);
    const toggleCommentReplyTwo = () => {
        setShowCommentReplyTwo(prevState => !prevState);
    };

    // Comment Reply Three
    const [showCommentReplyThree, setShowCommentReplyThree] = useState(false);
    const toggleCommentReplyThree = () => {
        setShowCommentReplyThree(prevState => !prevState);
    };

    // Comment Reply LoadMore
    const [showCommentReplyLoadMore, setShowCommentReplyLoadMore] = useState(false);
    const toggleCommentReplyLoadMore = () => {
        setShowCommentReplyLoadMore(prevState => !prevState);
    };

    // Comment Emoji With Display In The Input (LoadMore)
    const [showCommentEmojiLoadMore, setShowCommentEmojiLoadMore] = useState(false);
    const [commentTextLoadMore, setCommentTextLoadMore] = useState("");
    const addCommentEmojiLoadMore = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextLoadMore(commentTextLoadMore + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideLoadMore = () => {
        setShowCommentEmojiLoadMore(false);
    };


    // Lightbox Images
    const images = [
        {
            src: SliderOneImg,
            alt: 'Mechanical keyboard with white keycaps.',
        },
        {
            src: SliderTwoImg,
            alt: 'Mechanical keyboard with white keycaps.',
        },
    ]

    // Like button
    const [isClickedLikePostOne, setIsClickedLikePostOne] = useState(false);
    const [isClickedLikePostTwo, setIsClickedLikePostTwo] = useState(false);
    const [isClickedLikePostThree, setIsClickedLikePostThree] = useState(false);
    const [isClickedLikePostFour, setIsClickedLikePostFour] = useState(false);

    // Load comment
    const [showLoadComments, setShowLoadComments] = useState(false);

    const toggleComments = () => {
        setShowLoadComments(true); // Always show comments when the button is clicked
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

    //-------------------------- Popup Area ------------------//
    // Name change popup
    const [openStartPostModal, setOpenStartPostModal] = useState<boolean>(false);
    const handleWritePostPopUpClickCancel = () => {
        setOpenStartPostModal(false)
        setStartPostText("")
    }
    return (
        <>
            <section id="home-page-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-2"></div>
                        <div className="col ml-0 lg:ml-10 lg:col-span-6">
                            {loading ? (
                                <Skeleton height={60} count={1}/>
                            ) : (
                                <>
                                    <div className="write_post box py-2 px-4 bg-white rounded">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="w-full flex items-center whats_new">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <input
                                                    onClick={() => setOpenStartPostModal(true)}
                                                    readOnly
                                                    className="mt-1 rounded w-full py-1 px-1 border-transparent focus:border-transparent focus:ring focus:ring-transparent text-[#ABABAB] text-[14px] focus:outline-none"
                                                    type="text"
                                                    placeholder="What’s new, John?"
                                                />
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
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
                                                <div className="cursor-pointer">
                                                    <svg
                                                        className="w-5 h-5 hover:fill-primary transition"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="#828D9E">
                                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0
                                                        1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0
                                                        18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Post Box */}
                            {loading ? (
                                <>
                                    <Skeleton height={300} count={1}/>
                                </>
                            ) : (
                                <div className="post_box_wrap">
                                    <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                        <div className="flex items-center justify-between">
                                            <Link href='#' className="flex items-center gap-1">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                <div className="leading-[17px]">
                                                    <h4 className="text-[14px] font-semibold text-prgcolor">
                                                        Sony Inc.
                                                    </h4>
                                                    <span
                                                        className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                                </div>
                                            </Link>

                                            <div className="flex items-center justify-end text-end">
                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>

                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="mt-3 text-[14px] text-prgcolor">
                                            The SRS-XB100 speaker provides powerful, clear,
                                            expansive sound in a small, portable and durable
                                            body. Despite its size... <button type='button' className="text-primary">See
                                            more</button>
                                        </h4>
                                    </div>
                                    <div className="post_image mt-0">
                                        <Image src={PostImg} className="w-full h-56" alt="PostImg"/>

                                        <div
                                            className="flex items-center justify-between bg-gray-200 bg-opacity-50 px-4 py-2 mt-0">
                                            <h4 className="text-[14px] text-prgcolor font-[500]">Sony SRS-XB13B</h4>
                                            <button type="button"
                                                    className="py-2 px-4 rounded border text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                    {/* Post Icons */}
                                    <div className="post_icons mt-0">
                                        <div
                                            className="flex items-center justify-between bg-white rounded rounded-t-none border-t-2 px-4 py-3 mt-0">
                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer"
                                                     onClick={() => setIsClickedLikePostOne(!isClickedLikePostOne)}>
                                                    {isClickedLikePostOne ? (
                                                        <GoHeartFill
                                                            className="w-4 h-4 text-primary hover:text-primary"/>
                                                    ) : (
                                                        <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                    )}
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">112</h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer">
                                                    <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">852</h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer">
                                                    <GoSync
                                                        className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">2k</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Post Box */}
                            <div className="post_box_wrap">
                                {loading ? (
                                    <>
                                        <Skeleton height={60} count={1}/>
                                    </>
                                ) : (
                                    <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">

                                        <div className="flex items-center justify-between">
                                            <Link href='#' className="flex items-center gap-1">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                <div className="leading-[17px]">
                                                    <h4 className="text-[14px] font-semibold text-prgcolor">
                                                        John Doe
                                                    </h4>

                                                    <div className="flex items-center text-graycolor font-normal">
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
                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>

                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="mt-3 text-[14px] text-prgcolor">
                                            The SRS-XB100 speaker provides powerful, clear,
                                            expansive sound in a small, portable and durable
                                            body. Despite its size...
                                        </h4>
                                    </div>
                                )}
                                {loading ? (
                                    <>
                                        <Skeleton height={300} count={1}/>
                                    </>
                                ) : (
                                    <>
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
                                                        <h4 className="text-[12px] text-prgcolor">112</h4>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1">
                                                    <div className="cursor-pointer">
                                                        <GoComment
                                                            className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                    </div>
                                                    <div className="count">
                                                        <h4 className="text-[12px] text-prgcolor">852</h4>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1">
                                                    <div className="cursor-pointer">
                                                        <GoSync
                                                            className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                    </div>
                                                    <div className="count">
                                                        <h4 className="text-[12px] text-prgcolor">2k</h4>
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
                                                        value={commentText}
                                                        onChange={(e) => setCommentText(e.target.value)}
                                                        type="text"
                                                        placeholder="Write a comment..."
                                                    />

                                                    <div className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                        <div className="cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
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
                                                        <GoSmiley onClick={() => setShowCommentEmoji(!showCommentEmoji)}
                                                                  size={20}
                                                                  className="cursor-pointer text-graycolor hover:text-primary"/>
                                                    </div>

                                                    {/* Post Reactions */}
                                                    {showCommentEmoji &&
                                                        <div className="comment_emoji absolute top-[100%] right-0">
                                                            <Picker
                                                                data={data}
                                                                theme="light"
                                                                perLine={8}
                                                                onClickOutside={handleCommentEmojiClickOutside}
                                                                emojiSize={22}
                                                                onEmojiSelect={addCommentEmoji}
                                                                maxFrequentRows={0}
                                                                maxEmojiRows={2}
                                                            />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Post User Comments (One) */}
                                        <div className="post_user_comments">
                                            <div className="box bg-white px-4 py-3 rounded rounded-b-none">
                                                <div className="flex items-start justify-start gap-1 w-full">
                                                    <Link href='#' className="flex items-center gap-2">
                                                        <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    </Link>

                                                    <div
                                                        className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                        <div className="wrap">
                                                            <h4 className="text-[12px] font-semibold text-prgcolor">
                                                                Kathy Erickson
                                                            </h4>
                                                            <h4 className="mt-1 text-[14px] text-prgcolor font-normal">
                                                                Congratulations on your new smartphone! eSquare indeed
                                                                offers a
                                                                seamless and convenient way to make purchases. Enjoy
                                                                exploring
                                                                all
                                                                the
                                                                stunning features of your new device!
                                                            </h4>
                                                        </div>

                                                        <div
                                                            className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="#828D9E"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Comment Icons */}
                                                <div className="ml-10 box bg-white pt-2 rounded rounded-b-none">
                                                    <div
                                                        className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                        <div className="c_icons flex items-center gap-6">
                                                            <Link href='#'
                                                                  className="left flex items-center gap-0 group">
                                                                <h4 className="group-hover:text-primary">Like</h4>
                                                                <LuDot size={12}/>
                                                                <GoHeart size={13}
                                                                         className='cursor-pointer hover:text-primary'/>
                                                                <span className="ml-1">3</span>
                                                            </Link>
                                                            <div
                                                                className="right cursor-pointer flex items-center gap-0 group">
                                                                <h4 onClick={toggleCommentReplyOne}
                                                                    className="group-hover:text-primary">Reply</h4>
                                                                <LuDot size={12}/>
                                                                <GoReply size={13}
                                                                         className='cursor-pointer group-hover:text-primary'/>
                                                                <span className="ml-1">6</span>
                                                            </div>
                                                        </div>
                                                        <div className="c_time">2d</div>
                                                    </div>
                                                    {/* Comment Replay */}
                                                    {showCommentReplyOne && (
                                                        <div className="box bg-white pt-5 pb-2 rounded rounded-b-none">
                                                            <div className="flex items-start justify-start gap-1">
                                                                <Link href='#' className="flex items-center gap-">
                                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                                </Link>

                                                                <div
                                                                    className="write_comment_text rounded flex items-start justify-between w-full">
                                                                    <div
                                                                        className="relative w-full flex items-center gap-1">
                                                                        <input
                                                                            className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                            value={commentTextOne}
                                                                            onChange={(e) => setCommentTextOne(e.target.value)}
                                                                            type="text"
                                                                            placeholder="Write a reply..."
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
                                                                            <div className="cursor-pointer">
                                                                                <GoSmiley
                                                                                    onClick={() => setShowCommentEmojiOne(!showCommentEmojiOne)}
                                                                                    size={20}
                                                                                    className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                            </div>
                                                                        </div>

                                                                        {/* Post Reactions */}
                                                                        {showCommentEmojiOne &&
                                                                            <div
                                                                                className="comment_emoji absolute top-[100%] right-0">
                                                                                <Picker
                                                                                    data={data}
                                                                                    theme="light"
                                                                                    perLine={8}
                                                                                    onClickOutside={handleCommentEmojiClickOutsideOne}
                                                                                    emojiSize={22}
                                                                                    onEmojiSelect={addCommentEmojiOne}
                                                                                    maxFrequentRows={0}
                                                                                    maxEmojiRows={2}
                                                                                />
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Comment Replay */}
                                            <div className="box bg-white px-4 pt-2 pb-3 rounded rounded-b-none">
                                                <div className="ml-9 flex items-start justify-start gap-1">
                                                    <Link href='#' className="flex items-center gap-">
                                                        <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    </Link>

                                                    <div
                                                        className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                        <div className="wrap">
                                                            <h4 className="text-[12px] font-semibold text-prgcolor">
                                                                John Doe
                                                            </h4>
                                                            <h4 className="mt-1 text-[14px] text-prgcolor font-normal">
                                                                Thank you, <Link href='#' className="text-primary">Kathy
                                                                Erickson</Link>!
                                                            </h4>
                                                        </div>

                                                        <div
                                                            className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="#828D9E"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Comment Icons */}
                                                <div className="ml-[76px] box bg-white pt-2 rounded rounded-b-none">
                                                    <div
                                                        className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                        <div className="c_icons flex items-center gap-6">
                                                            <Link href='#'
                                                                  className="left flex items-center gap-0 group">
                                                                <h4 className="group-hover:text-primary">Like</h4>
                                                                <LuDot size={12}/>
                                                                <GoHeart size={13}
                                                                         className='cursor-pointer hover:text-primary'/>
                                                                <span className="ml-1">3</span>
                                                            </Link>
                                                            <div
                                                                className="right cursor-pointer flex items-center gap-0 group">
                                                                <h4 onClick={toggleCommentReplyTwo}
                                                                    className="group-hover:text-primary">Reply</h4>
                                                                <LuDot size={12}/>
                                                                <GoReply size={13}
                                                                         className='cursor-pointer group-hover:text-primary'/>
                                                                <span className="ml-1">6</span>
                                                            </div>
                                                        </div>
                                                        <div className="c_time">1d</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Comment Replay */}
                                            {showCommentReplyTwo && (
                                                <div className="box bg-white px-4 pt-2 pb-5 rounded rounded-b-none">
                                                    <div className="ml-[70px] flex items-start justify-start gap-1">
                                                        <Link href='#' className="flex items-center gap-">
                                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                        </Link>

                                                        <div
                                                            className="write_comment_text rounded flex items-start justify-between w-full">
                                                            <div className="relative w-full flex items-center gap-1">
                                                                <input
                                                                    className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                    value={commentTextTwo}
                                                                    onChange={(e) => setCommentTextTwo(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Write a reply..."
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
                                                                    <div className="cursor-pointer">
                                                                        <GoSmiley
                                                                            onClick={() => setShowCommentEmojiTwo(!showCommentEmojiTwo)}
                                                                            size={20}
                                                                            className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                    </div>
                                                                </div>

                                                                {/* Post Reactions */}
                                                                {showCommentEmojiTwo &&
                                                                    <div
                                                                        className="comment_emoji absolute top-[100%] right-0">
                                                                        <Picker
                                                                            data={data}
                                                                            theme="light"
                                                                            perLine={8}
                                                                            onClickOutside={handleCommentEmojiClickOutsideTwo}
                                                                            emojiSize={22}
                                                                            onEmojiSelect={addCommentEmojiTwo}
                                                                            maxFrequentRows={0}
                                                                            maxEmojiRows={2}
                                                                        />
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Sub Comment Replay */}
                                            <div className="box bg-white px-4 pt-2 pb-3 rounded rounded-b-none">
                                                <div className="ml-[70px] flex items-start justify-start gap-1">
                                                    <Link href='#' className="flex items-center gap-">
                                                        <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    </Link>

                                                    <div
                                                        className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                        <div className="wrap">
                                                            <h4 className="text-[12px] font-semibold text-prgcolor">
                                                                Kathy Erickson
                                                            </h4>
                                                            <h4 className="mt-1 text-[14px] text-prgcolor font-normal">
                                                                Thank you, <Link href='#' className="text-primary">John
                                                                Doe</Link>!
                                                            </h4>
                                                        </div>

                                                        <div
                                                            className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="#828D9E"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                                0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Comment Icons */}
                                                <div className="ml-[110px] box bg-white pt-2 rounded rounded-b-none">
                                                    <div
                                                        className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                        <div className="c_icons flex items-center gap-6">
                                                            <Link href='#'
                                                                  className="left flex items-center gap-0 group">
                                                                <h4 className="group-hover:text-primary">Like</h4>
                                                                <LuDot size={12}/>
                                                                <GoHeart size={13}
                                                                         className='cursor-pointer hover:text-primary'/>
                                                                <span className="ml-1">3</span>
                                                            </Link>
                                                            <div
                                                                className="right cursor-pointer flex items-center gap-0 group">
                                                                <h4
                                                                    className="group-hover:text-primary">Reply</h4>
                                                                <LuDot size={12}/>
                                                                <GoReply size={13}
                                                                         className='cursor-pointer group-hover:text-primary'/>
                                                                <span className="ml-1">6</span>
                                                            </div>
                                                        </div>
                                                        <div className="c_time">1d</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Post User Comments (Two) */}
                                        <div className="post_user_comments">
                                            <div className="box bg-white px-4 pt-2 pb-3 rounded rounded-b-none">
                                                <div className="flex items-start justify-start gap-1 w-full">
                                                    <Link href='#' className="flex items-center gap-2">
                                                        <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    </Link>

                                                    <div
                                                        className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                        <div className="wrap">
                                                            <h4 className="text-[12px] font-semibold text-prgcolor">
                                                                Bonnie Lindsey
                                                            </h4>
                                                            <h4 className="mt-1 text-[14px] text-prgcolor font-normal">
                                                                Enjoy exploring all the stunning features of your new
                                                                device!
                                                            </h4>
                                                        </div>

                                                        <div
                                                            className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="#828D9E"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Comment Icons */}
                                                <div className="ml-10 box bg-white pt-2 rounded rounded-b-none">
                                                    <div
                                                        className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                        <div className="c_icons flex items-center gap-6">
                                                            <Link href='#'
                                                                  className="left flex items-center gap-0 group">
                                                                <h4 className="group-hover:text-primary">Like</h4>
                                                                <LuDot size={12}/>
                                                                <GoHeart size={13}
                                                                         className='cursor-pointer hover:text-primary'/>
                                                                <span className="ml-1">3</span>
                                                            </Link>
                                                            <div
                                                                className="right cursor-pointer flex items-center gap-0 group">
                                                                <h4 onClick={toggleCommentReplyThree}
                                                                    className="group-hover:text-primary">Reply</h4>
                                                                <LuDot size={12}/>
                                                                <GoReply size={13}
                                                                         className='cursor-pointer group-hover:text-primary'/>
                                                                <span className="ml-1">6</span>
                                                            </div>
                                                        </div>
                                                        <div className="c_time">1d</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Comment Replay */}
                                            {showCommentReplyThree && (
                                                <div className="box bg-white px-4 pt-2 pb-5 rounded rounded-b-none">
                                                    <div className="ml-9 flex items-start justify-start gap-1">
                                                        <Link href='#' className="flex items-center gap-">
                                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                        </Link>

                                                        <div
                                                            className="write_comment_text rounded flex items-start justify-between w-full">
                                                            <div className="relative w-full flex items-center gap-1">
                                                                <input
                                                                    className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                    value={commentTextThree}
                                                                    onChange={(e) => setCommentTextThree(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Write a reply..."
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
                                                                    <div className="cursor-pointer">
                                                                        <GoSmiley
                                                                            onClick={() => setShowCommentEmojiThree(!showCommentEmojiThree)}
                                                                            size={20}
                                                                            className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                    </div>
                                                                </div>

                                                                {/* Post Reactions */}
                                                                {showCommentEmojiThree &&
                                                                    <div
                                                                        className="comment_emoji absolute top-[100%] right-0">
                                                                        <Picker
                                                                            data={data}
                                                                            theme="light"
                                                                            perLine={8}
                                                                            onClickOutside={handleCommentEmojiClickOutsideThree}
                                                                            emojiSize={22}
                                                                            onEmojiSelect={addCommentEmojiThree}
                                                                            maxFrequentRows={0}
                                                                            maxEmojiRows={2}
                                                                        />
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Post User Comments (Load more) */}
                                        <div className="post_user_comments"
                                             style={{display: showLoadComments ? 'block' : 'none'}}>
                                            <div className="box bg-white px-4 pt-2 pb-3 rounded rounded-b-none">
                                                <div className="flex items-start justify-start gap-1 w-full">
                                                    <Link href='#' className="flex items-center gap-2">
                                                        <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                    </Link>

                                                    <div
                                                        className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                        <div className="wrap">
                                                            <h4 className="text-[12px] font-semibold text-prgcolor">
                                                                Roshan Nafiz
                                                            </h4>
                                                            <h4 className="mt-1 text-[14px] text-prgcolor font-normal">
                                                                Thanks for your visiting nosres Marketplace
                                                            </h4>
                                                        </div>

                                                        <div
                                                            className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="#828D9E"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Comment Icons */}
                                                <div className="ml-10 box bg-white pt-2 rounded rounded-b-none">
                                                    <div
                                                        className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                        <div className="c_icons flex items-center gap-6">
                                                            <Link href='#'
                                                                  className="left flex items-center gap-0 group">
                                                                <h4 className="group-hover:text-primary">Like</h4>
                                                                <LuDot size={12}/>
                                                                <GoHeart size={13}
                                                                         className='cursor-pointer hover:text-primary'/>
                                                                <span className="ml-1">3</span>
                                                            </Link>
                                                            <div
                                                                className="right cursor-pointer flex items-center gap-0 group">
                                                                <h4 onClick={toggleCommentReplyLoadMore}
                                                                    className="group-hover:text-primary">Reply</h4>
                                                                <LuDot size={12}/>
                                                                <GoReply size={13}
                                                                         className='cursor-pointer group-hover:text-primary'/>
                                                                <span className="ml-1">6</span>
                                                            </div>
                                                        </div>
                                                        <div className="c_time">1d</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Comment Replay */}
                                            {showCommentReplyLoadMore && (
                                                <div className="box bg-white px-4 pt-2 pb-5 rounded rounded-b-none">
                                                    <div className="ml-9 flex items-start justify-start gap-1">
                                                        <Link href='#' className="flex items-center gap-">
                                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                        </Link>

                                                        <div
                                                            className="write_comment_text rounded flex items-start justify-between w-full">
                                                            <div className="relative w-full flex items-center gap-1">
                                                                <input
                                                                    className="m-0 rounded-full w-full py-1 px-3 border-bordercolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                    value={commentTextLoadMore}
                                                                    onChange={(e) => setCommentTextLoadMore(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Write a reply..."
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
                                                                    <div className="cursor-pointer">
                                                                        <GoSmiley
                                                                            onClick={() => setShowCommentEmojiLoadMore(!showCommentEmojiLoadMore)}
                                                                            size={20}
                                                                            className="cursor-pointer text-graycolor hover:text-primary"/>
                                                                    </div>
                                                                </div>

                                                                {/* Post Reactions */}
                                                                {showCommentEmojiLoadMore &&
                                                                    <div
                                                                        className="comment_emoji absolute top-[100%] right-0">
                                                                        <Picker
                                                                            data={data}
                                                                            theme="light"
                                                                            perLine={8}
                                                                            onClickOutside={handleCommentEmojiClickOutsideLoadMore}
                                                                            emojiSize={22}
                                                                            onEmojiSelect={addCommentEmojiLoadMore}
                                                                            maxFrequentRows={0}
                                                                            maxEmojiRows={2}
                                                                        />
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="box bg-white px-4 pt-2 pb-4 rounded">
                                            <button onClick={toggleComments} type="button"
                                                    className="text-[14px] text-primary hover:underline cursor-pointer">
                                                View more comments
                                            </button>
                                        </div>

                                    </>
                                )}
                            </div>

                            {/* Post Box */}
                            {loading ? (
                                <>
                                    <Skeleton height={300} count={1}/>
                                </>
                            ) : (
                                <div className="post_box_wrap">
                                    <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                        <div className="flex items-center justify-between">
                                            <Link href='#' className="flex items-center gap-1">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                <div className="leading-[17px]">
                                                    <h4 className="text-[14px] font-semibold text-prgcolor">
                                                        Inna K.
                                                    </h4>
                                                    <div className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            6d ago
                                                        </span>
                                                        <LuDot size={12}/>
                                                        <IoMdGlobe size={13}/>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="flex items-center justify-end text-end">
                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>

                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="mt-3 text-[14px] text-prgcolor">
                                            Could anyone please tell me where to find a good deal on the iPhone 15?
                                        </h4>
                                    </div>
                                    <div className="post_image mt-0">
                                        <SlideshowLightbox className="flex w-full" lightboxIdentifier="l2"
                                                           framework="next"
                                                           images={images}>
                                            {images.slice(0, 2).map((image, index) => (
                                                <Image
                                                    key={index}
                                                    src={image.src}
                                                    alt={image.alt}
                                                    height={100}
                                                    width={100}
                                                    className="w-1/2"
                                                    data-lightboxjs="l2"
                                                    quality={80}
                                                />
                                            ))}
                                        </SlideshowLightbox>
                                    </div>
                                    {/* Post Icons */}
                                    <div className="post_icons mt-0">
                                        <div
                                            className="flex items-center justify-between rounded rounded-t-none bg-white px-4 py-3 mt-0">
                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer"
                                                     onClick={() => setIsClickedLikePostThree(!isClickedLikePostThree)}>
                                                    {isClickedLikePostThree ? (
                                                        <GoHeartFill
                                                            className="w-4 h-4 text-primary hover:text-primary"/>
                                                    ) : (
                                                        <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                    )}
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">112</h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer">
                                                    <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">852</h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer">
                                                    <GoSync
                                                        className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">2k</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* Post Box */}
                            {loading ? (
                                <>
                                    <Skeleton height={300} count={1}/>
                                </>
                            ) : (
                                <div className="post_box_wrap">
                                    <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                        <div className="flex items-center justify-between">
                                            <Link href='#' className="flex items-center gap-1">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                <div className="leading-[17px]">
                                                    <h4 className="text-[14px] font-semibold text-prgcolor">
                                                        Robert Fox
                                                    </h4>
                                                    <div className="flex items-center text-graycolor font-normal">
                                                          <span
                                                              className="text-[12px]">
                                                            1m ago
                                                        </span>
                                                        <LuDot size={12}/>
                                                        <IoMdGlobe size={13}/>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="flex items-center justify-end text-end">
                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>

                                                <div
                                                    className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="mt-3 text-[14px] text-prgcolor">
                                            The HTCU23 Pro 5G stands as the pinnacle of smartphone innovation, offering
                                            unparalleled performance, connectivity, and functionality. Its sleek design
                                            houses a
                                            powerhouse of cutting-edge technology, delivering lightning-fast 5G
                                            connectivity
                                            and an immersive multimedia experience. With its advanced features and
                                            premium
                                            build quality, the HTCU23 Pro 5G redefines what a flagship smartphone can
                                            achieve
                                        </h4>
                                    </div>
                                    <div className="post_image mt-0">
                                        <Image src={SliderOneImg} className="w-full h-56" alt="PostImg"/>
                                    </div>
                                    {/* Post Icons */}
                                    <div className="post_icons mt-0">
                                        <div
                                            className="flex items-center justify-between bg-white rounded rounded-t-none px-4 py-3 mt-0">
                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer"
                                                     onClick={() => setIsClickedLikePostFour(!isClickedLikePostFour)}>
                                                    {isClickedLikePostFour ? (
                                                        <GoHeartFill
                                                            className="w-4 h-4 text-primary hover:text-primary"/>
                                                    ) : (
                                                        <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                    )}
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">112</h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer">
                                                    <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">852</h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="cursor-pointer">
                                                    <GoSync
                                                        className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                                </div>
                                                <div className="count">
                                                    <h4 className="text-[12px] text-prgcolor">2k</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-4 right_sidebar hidden lg:block ml-7 mr-[10px]">
                            <div className="box bg-white px-4 py-4 rounded">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <GoHistory className="w-[18px] h-[18px] text-[#6B7280]"/>
                                        <h4 className="text-[14px] font-semibold text-prgcolor">
                                            Recently Viewed Items
                                        </h4>
                                    </div>

                                    <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                        <svg
                                            className="w-3 h-3"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* Product Area */}
                                <div className="product_wrap space-y-3">
                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                iPhone XS</h4>
                                            <h4 className="text-[12px] text-graycolor">$860.00</h4>
                                        </div>
                                    </Link>

                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">T-Shirt</h4>
                                            <h4 className="text-[12px] text-graycolor">$450.00</h4>
                                        </div>
                                    </Link>

                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">Polo
                                                Shirt</h4>
                                            <h4 className="text-[12px] text-graycolor">$320.00</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="box mt-4 bg-white px-4 py-4 rounded">
                                <div className="flex gap-2 items-center">
                                    <GoPackage className="w-5 h-5 text-[#6B7280]"/>
                                    <h4 className="relative text-[14px] font-semibold">
                                        Sell on Nosres
                                        <span
                                            className="absolute -right-8 -top-1 text-[12px] font-normal text-primary">BETA</span>
                                    </h4>
                                </div>
                                <h4 className="text-graycolor mt-3 text-[12px]">
                                    Promote your products by sharing them on
                                    your page, receive orders, receive notification, discuss with customers.
                                </h4>
                                <button type="button"
                                        className="mt-3 py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                    Learn More
                                </button>
                            </div>

                            <div className="mt-6 sticky top-16">
                                {/* Post Box */}
                                <div className="box mt-4 bg-white px-4 py-4 rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    Sony Inc.
                                                </h4>
                                                <span
                                                    className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                            </div>
                                        </div>


                                        <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                            <svg
                                                className="w-3 h-3"
                                                fill="#6B7280"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="mt-3 text-[12px] text-prgcolor">
                                        The SRS-XB100 speaker provides powerful, clear,
                                        expansive sound in a small, portable and durable
                                        body. Despite its size...
                                    </h4>
                                    <div className="post-image mt-3">
                                        <Image src={PostImg} className="w-full h-36" alt="PostImg"/>

                                        <div className="flex items-center justify-between mt-3">
                                            <h4 className="text-[14px] text-prgcolor font-[500]">Sony SRS-XB13B</h4>
                                            <button type="button"
                                                    className="py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <footer className="mt-4">
                                    <ul className="flex items-center gap-2 text-gray-500 text-[12px]">
                                        <li className="hover:text-primary">
                                            <Link href='#'>About Nosres</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Privacy</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Terms</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Careers</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Support</Link>
                                        </li>
                                    </ul>
                                    <h4 className="mt-[8px] text-graycolor text-[12px]">© {currentYear} Nosres
                                        Inc. All
                                        rights
                                        reserved.</h4>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>

                {/*----------------------- Modal Show Area  ---------------*/}
                {/* Start Post Pop-Up Start */}
                <Modal size="lg" dismissible show={openStartPostModal}
                       onClose={() => setOpenStartPostModal(false)}>
                    <Modal.Header>
                        <h4 className="text-[16px]">Start a Post</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div ref={modalRef} className="modal_body">
                            <div className="flex items-center gap-1">
                                <HiUserCircle size={50} className="text-graycolor"/>
                                <h4 className="text-[14px] text-prgcolor font-[500]">John Doe</h4>

                                <div className="dropdown_menu ml-2">
                                    <button type='button' className="py-1 px-6 relative text-[14px] bg-gray-100">
                                        <IoMdGlobe size={15}
                                                   className="text-primary absolute left-1 top-1/2 transform -translate-y-1/2"/>
                                        Anyone
                                        <FaAngleDown size={13}
                                                     className="text-prgcolor absolute right-1 top-1/2 transform -translate-y-1/2"/>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 px-0">
                                <div className="whats_new">
                                    <textarea
                                        rows={2}
                                        value={startPostText}
                                        onChange={(e) => setStartPostText(e.target.value)}
                                        className="rounded w-full py-1 px-0 border-transparent focus:border-transparent focus:ring focus:ring-transparent text-[#ABABAB] text-[14px] focus:outline-none"
                                        placeholder="What’s new, John?">
                                    </textarea>
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    <div className="cursor-pointer">
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
                                            size={20} className="text-graycolor hover:text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={handleWritePostPopUpClickCancel}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartPostModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
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
                {/* Start Post Pop-Up End */}
            </section>
        </>
    );
}
