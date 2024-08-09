'use client';
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import LogoImg from '@/../public/assets/images/logo.svg';
import useLoading from "@/app/useLoading";
import {usePathname} from "next/navigation";
import {Modal} from "flowbite-react";
import {Checkbox} from "antd";
import {ImAttachment} from "react-icons/im";
import {HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";
import {RiArrowDropDownLine} from "react-icons/ri";
import {PiHandsPrayingLight} from "react-icons/pi";

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

    // For Popup
    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };

    // File Upload Function
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
    };
    const handleRemoveClick = () => {
        setSelectedFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Priority Button Select
    const [selectedButton, setSelectedButton] = useState<'low' | 'medium' | 'high' | 'critical' | null>(null);

    // Feedback Ad / Report Ad popup
    const [openReportAdModal, setOpenReportAdModal] = useState<boolean>(false);
    const [openReportAdSubmitModal, setOpenReportAdSubmitModal] = useState<boolean>(false);
    const [openReportAdContactModal, setOpenReportAdContactModal] = useState<boolean>(false);
    const [openReportAdSubmitConfirmModal, setOpenReportAdSubmitConfirmModal] = useState<boolean>(false);

    const handleAdSubmitButtonClick = () => {
        setOpenReportAdSubmitModal(false);
        setOpenReportAdModal(false);
        setOpenReportAdContactModal(false);
        setOpenReportAdSubmitConfirmModal(false);
    }

    const handleAdSubmitButtonClickTwo = () => {
        setOpenReportAdSubmitModal(false);
        setOpenReportAdModal(false);
        setOpenReportAdContactModal(false);
        setOpenReportAdSubmitConfirmModal(true);
    }

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


    //----------- FilterBusinessTab Dropdown Start --------------//
    const [isOpenDropdownFilterBusinessTab, setIsOpenDropdownFilterBusinessTab] = useState(false);
    const [selectedOptionFilterBusinessTab, setSelectedOptionFilterBusinessTab] = useState("Select"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterBusinessTab = () => {
        setIsOpenDropdownFilterBusinessTab(!isOpenDropdownFilterBusinessTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterBusinessTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterBusinessTab(option);
        setIsOpenDropdownFilterBusinessTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterBusinessTabRef = useRef(null);
    const handleClickOutsideFilterBusinessTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterBusinessTabRef.current && !dropdownFilterBusinessTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterBusinessTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterBusinessTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterBusinessTab);
        };
    }, []);
    //----------- FilterBusinessTab Dropdown End --------------//


    //----------- FilterBusinessTab Mobile Start --------------//
    const [isOpenDropdownFilterMobileTab, setIsOpenDropdownFilterMobileTab] = useState(false);
    const [selectedOptionFilterMobileTab, setSelectedOptionFilterMobileTab] = useState("Select"); // State to store the selected option
    // Function to toggle the dropdown visibility
    const toggleDropdownFilterMobileTab = () => {
        setIsOpenDropdownFilterMobileTab(!isOpenDropdownFilterMobileTab);
    };
    // Function to handle selection of an option
    const handleOptionSelectFilterMobileTab = (option: React.SetStateAction<string>) => {
        setSelectedOptionFilterMobileTab(option);
        setIsOpenDropdownFilterMobileTab(false); // Close the dropdown after selection
    };
    // Function to handle clicks outside the dropdown to close it
    const dropdownFilterMobileTabRef = useRef(null);
    const handleClickOutsideFilterMobileTab = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownFilterMobileTabRef.current && !dropdownFilterMobileTabRef.current.contains(event.target)) {
            setIsOpenDropdownFilterMobileTab(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideFilterMobileTab);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideFilterMobileTab);
        };
    }, []);
    //----------- FilterMobileTab Dropdown End --------------//

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
                            <button onClick={() => setOpenReportAdModal(true)}
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
                                    <button onClick={() => setOpenReportAdModal(true)}
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


                {/* Start ReportAdd Pop-Up Start (1) */}
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
                        <h4 className="text-[16px]">Report an Issue</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please let us know about any issues or suggestions for improvement.
                                Your feedback is valuable in helping us make our application better.
                            </h4>

                            <h4 className="text-[16px] font-[500] mt-3">
                                Issue Details
                            </h4>
                            <h4 className="text-graycolor text-[14px]">
                                Please describe the issue you’re experiencing, including type, priority, etc.
                                Check all that apply.
                            </h4>

                            <h4 className="text-[16px] mt-3">
                                Issue Type
                            </h4>
                            <div className="mt-2 space-y-2">
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            Bug
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Something not working as expected
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            Feature Request
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Suggestions for a new feature or improvement
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            User Interface
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Issues related to the look and feel of the application
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            User Experience
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Issues related to navigation problems and usability
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            Performance
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Slow or unresponsive application
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            Security
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Issues related to security or concerns
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            Wording
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Issues related to text, labels, or instructions
                                        </h4>
                                    </Checkbox>
                                </div>
                                <div className="input_box">
                                    <Checkbox className="mt-1 flex items-center">
                                        <h4 className="text-[14px] font-normal">
                                            Other
                                        </h4>
                                        <h4 className="text-[12px] text-graycolor">
                                            Any other type of issue not listed above
                                        </h4>
                                    </Checkbox>
                                </div>
                            </div>

                            {/* Priority Buttons */}
                            <h4 className="text-[16px] mt-3">
                                Priority
                            </h4>
                            <div className="flex items-center gap-2 mt-2">
                                <button
                                    type="button"
                                    onClick={() => setSelectedButton('low')}
                                    className={`py-1 px-8 rounded text-[12px] border ${
                                        selectedButton === 'low'
                                            ? 'bg-[#FDD555] text-[#FAB92B] border-[#FAB92B]'
                                            : 'text-[#FAB92B] bg-transparent border-[#FAB92B] hover:bg-[#FDD555]'
                                    }`}
                                >
                                    Low
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedButton('medium')}
                                    className={`py-1 px-8 rounded text-[12px] border ${
                                        selectedButton === 'medium'
                                            ? 'bg-[#FC974C] text-[#FB6D22] border-[#FB6D22]'
                                            : 'text-[#FB6D22] border-[#FB6D22] bg-transparent hover:bg-[#FC974C]'
                                    }`}
                                >
                                    Medium
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedButton('high')}
                                    className={`py-1 px-8 rounded text-[12px] border ${
                                        selectedButton === 'high'
                                            ? 'bg-[#F96E4B] text-[#F0381B] border-[#F0381B]'
                                            : 'text-[#F0381B] border-[#F0381B] bg-transparent hover:bg-[#F96E4B]'
                                    }`}
                                >
                                    High
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedButton('critical')}
                                    className={`py-1 px-8 rounded text-[12px] border ${
                                        selectedButton === 'critical'
                                            ? 'bg-[#C85553] text-[#AA060F] border-[#AA060F]'
                                            : 'text-[#AA060F] border-[#AA060F] bg-transparent hover:bg-[#C85553]'
                                    }`}
                                >
                                    Critical
                                </button>
                            </div>

                            <div className="w-full">
                                <h4 className="text-[14px] mt-4">
                                    Subject
                                </h4>
                                <input
                                    type="text"
                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                    placeholder="Please briefly describe the issue or request"
                                />
                            </div>

                            <div className="w-full">
                                <h4 className="text-[14px] mt-4">
                                    Description of the Issue
                                </h4>
                                <textarea
                                    className="mt-1 pl-4 w-full h-[80px] leading-5 border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 box-border"
                                    placeholder="Please provide a detailed description of the issue, including any steps to reproduce or error messages."
                                />
                            </div>

                            <div className="document_box mt-4">
                                <div className="flex mt-2 items-center justify-between">
                                    <div className="left mt-0">
                                        {selectedFile ? (
                                            <p className="text-primary">{selectedFile.name}</p>
                                        ) : (
                                            <div className="flex items-center gap-1">
                                                <ImAttachment size={15} className="text-gray-400"/>
                                                <h6 className="text-[14px]">
                                                    Jane Doe_Resume
                                                </h6>
                                            </div>
                                        )}
                                    </div>
                                    <div onClick={handleRemoveClick}
                                         className="right mt-0 cursor-pointer flex gap-1 items-center">
                                        <HiOutlineMinusCircle className="text-primary"/>
                                        <button className="text-primary text-[14px]">Remove</button>
                                    </div>
                                </div>

                                <div className="image-upload mt-4">
                                    <h4 className="text-[14px]">Attachments (optional)</h4>
                                    <div className="flex items-center justify-center mt-3 w-full">
                                        <label htmlFor="dropzone-file"
                                               className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                            <div
                                                className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <HiOutlineCloudArrowUp
                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    Drag and drop here or click to upload.
                                                </p>
                                                <h4 className="text-[12px] text-gray-500 dark:text-gray-400">
                                                    You can upload up to 3 images and/or videos.
                                                </h4>
                                            </div>
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                accept=".pdf,.doc,.docx,.txt"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                ref={fileInputRef}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <h4 className="text-[14px] mt-4">
                                    Issue Link (optional)
                                </h4>
                                <input
                                    type="text"
                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                    placeholder="https://www.nosres.com"
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdModal(false)}
                                    className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenReportAdSubmitModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:border-primary text-white rounded">
                                Next
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Pop-Up End */}

                {/* Start ReportAdd Submit Pop-Up Start (2) */}
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
                        <h4 className="text-[16px]">Report an Issue</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[16px] font-[500]">
                                Additional Information
                            </h4>
                            <h4 className="text-graycolor text-[14px]">
                                Please include any extra details such as your browser and operating system.
                            </h4>

                            <div className="input_box dropdown_box mt-4">
                                <label htmlFor="carrier" className="text-[14px]">
                                    Browser (optional)
                                </label><br/>
                                <div className="flex text-[12px] items-center justify-start mt-1">
                                    {/* FilterStoreTab dropdown */}
                                    <div ref={dropdownFilterStoreTabRef}
                                         onClick={toggleDropdownFilterStoreTab}
                                         className="filter_dropdown_checkout z-30 cursor-pointer relative w-full">
                                        <div
                                            className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                            <input value={selectedOptionFilterStoreTab} name="select"
                                                   id="select"
                                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                   readOnly/>
                                            <button type='button'
                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                <RiArrowDropDownLine size={25}/>
                                            </button>
                                        </div>

                                        {isOpenDropdownFilterStoreTab && (
                                            <div
                                                className="absolute w-full h-[100px] overflow-y-auto rounded shadow bg-white overflow-hidden mt-1 border border-gray-200">
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Select")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Select
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Google Chrome")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Google Chrome
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Mozilla Firefox")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Mozilla Firefox
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Microsoft Edge")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Microsoft Edge
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Safari")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Safari
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Opera")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Opera
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Internet Explorer")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Internet Explorer
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Brave")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Brave
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Vivaldi")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Vivaldi
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("Tor Browser")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Tor Browser
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterStoreTab("UC Browser")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        UC Browser
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="input_box dropdown_box mt-4">
                                <label htmlFor="carrier" className="text-[14px]">
                                    Desktop Operating System (optional)
                                </label><br/>
                                <div className="flex text-[12px] items-center justify-start mt-1">
                                    {/* FilterStoreTab dropdown */}
                                    <div ref={dropdownFilterBusinessTabRef}
                                         onClick={toggleDropdownFilterBusinessTab}
                                         className="filter_dropdown_checkout z-20 cursor-pointer relative w-full">
                                        <div
                                            className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                            <input value={selectedOptionFilterBusinessTab} name="select"
                                                   id="select"
                                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                   readOnly/>
                                            <button type='button'
                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                <RiArrowDropDownLine size={25}/>
                                            </button>
                                        </div>

                                        {isOpenDropdownFilterBusinessTab && (
                                            <div
                                                className="absolute w-full h-[100px] overflow-y-auto rounded shadow bg-white overflow-hidden mt-1 border border-gray-200">
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Select")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Select
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Windows 11")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Windows 11
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Windows 10")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Windows 10
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Windows 8/8.1")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Windows 8/8.1
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Windows 7")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Windows 7
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("macOS Monterey")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        macOS Monterey
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("macOS Big Sur")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        macOS Big Sur
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("macOS Catalina")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        macOS Catalina
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("macOS Mojave")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        macOS Mojave
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Ubuntu")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Ubuntu
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Fedora")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Fedora
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Debian")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Debian
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("CentOS")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        CentOS
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Arch Linux")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Arch Linux
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterBusinessTab("Red Hat Enterprise Linux (RHEL)")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Red Hat Enterprise Linux (RHEL)
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="input_box dropdown_box mt-4">
                                <label htmlFor="carrier" className="text-[14px]">
                                    Mobile Operating System (optional)
                                </label><br/>
                                <div className="flex text-[12px] items-center justify-start mt-1">
                                    {/* FilterStoreTab dropdown */}
                                    <div ref={dropdownFilterMobileTabRef}
                                         onClick={toggleDropdownFilterMobileTab}
                                         className="filter_dropdown_checkout z-30 cursor-pointer relative w-full">
                                        <div
                                            className="w-full bg-gray-50 h-8 flex border border-gray-300 rounded items-center">
                                            <input value={selectedOptionFilterMobileTab} name="select"
                                                   id="select"
                                                   className="px-4 cursor-pointer appearance-none outline-none text-gray-800 w-full"
                                                   readOnly/>
                                            <button type='button'
                                                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300">
                                                <RiArrowDropDownLine size={25}/>
                                            </button>
                                        </div>

                                        {isOpenDropdownFilterMobileTab && (
                                            <div
                                                className="absolute w-full h-[100px] overflow-y-auto rounded shadow bg-white overflow-hidden mt-1 border border-gray-200">
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterMobileTab("Select")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Select
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterMobileTab("Android")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Android
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterMobileTab("iOS")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        iOS
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterMobileTab("iPadOS")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        iPadOS
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterMobileTab("Windows Phone")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        Windows Phone
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                     onClick={() => handleOptionSelectFilterMobileTab("BlackBerry OS (legacy)")}>
                                                    <div
                                                        className="block p-2 border-transparent border-l-4 hover:border-primary hover:bg-gray-100">
                                                        BlackBerry OS (legacy)
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdSubmitModal(false)}
                                    className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenReportAdContactModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:border-primary text-white rounded">
                                Next
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Submit Pop-Up End */}

                {/* Start ReportAdd Pop-Up Start (3) */}
                <Modal size="lg"
                       show={openReportAdContactModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdContactModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report an Issue</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-[16px] font-[500]">
                                Contact Information
                            </h4>
                            <h4 className="text-graycolor text-[14px]">
                                Please provide your contact details so we can follow up if needed.
                            </h4>

                            <div className="w-full">
                                <h4 className="text-[14px] mt-4">
                                    Name (optional)
                                </h4>
                                <input
                                    type="text"
                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="w-full">
                                <h4 className="text-[14px] mt-4">
                                    Email Address (optional)
                                </h4>
                                <input
                                    type="text"
                                    className="mt-1 py-1 pl-4 w-full  border text-[12px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                    placeholder="johndoe@mail.com"
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdModal(false)}
                                    className="px-10 text-[14px] py-2 bg-[#E5E5E8] hover:bg-[#C6C6C6] text-black rounded">
                                Cancel
                            </button>
                            <button onClick={handleAdSubmitButtonClickTwo}
                                    className="px-10 text-[14px] py-2 border border-primary bg-[#4D7FB8] hover:bg-[#3A5F8A] hover:border-primary text-white rounded">
                                Submit
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* End ReportAdd Pop-Up End */}

                {/* Start ReportAdd Submit confirm Pop-Up Start (4) */}
                <Modal size="lg"
                       dismissible={true}
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
                                    Thank You for Reporting an Issue!
                                </h4>
                                <h4 className="text-graycolor text-[14px] mt-3">
                                    Our team will review your report and follow up<br/>
                                    if additional information is needed.
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
    )
        ;
}

export default HeaderRe;