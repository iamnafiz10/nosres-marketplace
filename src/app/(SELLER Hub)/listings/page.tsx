"use client";
import React, {useState} from 'react';
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import useLoading from "@/app/useLoading";
import {GoPlus} from "react-icons/go";

function Page() {
    useTitle("Listings")
    const loading = useLoading();

    // Top Tab
    const [activeTab, setActiveTab] = useState('published');
    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };
    return (
        <>
            <section id="listingss-section">
                <div className="w-full pt-[50px] pb-20">
                    {/* Dashboard Body */}
                    <div className="ml-0 lg:ml-[295px] mr-5">
                        <div className="header_wrap mt-4">
                            {loading ? (
                                <div className='pb-0'>
                                    <Skeleton height={20} count={2}/>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center justify-between">
                                        <div className="wrap">
                                            <h4 className="text-[20px]">
                                                Listings
                                            </h4>
                                            <h4 className="text-[14px] text-graycolor">
                                                View and manage all your listings. You can easily find listing using
                                                search.
                                            </h4>
                                        </div>
                                        <button type='button'
                                                className="py-2 px-4 text-white flex items-center gap-2 bg-primary hover:bg-transparent hover:border-primary hover:text-primary hover:bg-primary border text-[14px] rounded">
                                            <GoPlus size={15}/>
                                            New Listing
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Tabs */}
                        <div className="flex items-center gap-4 mt-6 border-b">
                            <button
                                onClick={() => handleTabClick('published')}
                                type='button'
                                className={`py-1 px-1 text-[14px] ${
                                    activeTab === 'published'
                                        ? 'text-prgcolor border-b-2 border-primary'
                                        : ''
                                }`}>
                                Published
                            </button>
                            <button
                                type='button'
                                onClick={() => handleTabClick('draft')}
                                className={`py-1 px-1 text-[14px] ${
                                    activeTab === 'draft'
                                        ? 'text-prgcolor border-b-2 border-primary'
                                        : ''
                                }`}
                            >
                                Draft
                            </button>
                            <button
                                type='button'
                                onClick={() => handleTabClick('sold')}
                                className={`py-1 px-1 text-[14px] ${
                                    activeTab === 'sold'
                                        ? 'text-prgcolor border-b-2 border-primary'
                                        : ''
                                }`}
                            >
                                Sold
                            </button>
                        </div>
                        <hr/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;