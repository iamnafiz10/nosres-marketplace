"use client";
import React from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import { Tabs } from "flowbite-react";

export default function Home() {
    const loading = useLoading();
    useTitle("Search-All")
    return (
        <>
            <section id="home-page-section">
                <div className="topbar_tab_wrap">
                    <Tabs aria-label="Pills" style="pills">
                        <Tabs.Item active title="Tab 1">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
                        </Tabs.Item>
                        <Tabs.Item title="Tab 2">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
                        </Tabs.Item>
                        <Tabs.Item title="Tab 3">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                        </Tabs.Item>
                        <Tabs.Item title="Tab 4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
                        </Tabs.Item>
                        <Tabs.Item disabled title="Tab 5">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
                        </Tabs.Item>
                    </Tabs>
                </div>
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-2"></div>

                        {/* Body Content */}
                        <div className="col ml-0 lg:ml-10 lg:col-span-7">
                            <h1>Hi</h1>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-3 right_sidebar hidden lg:block ml-7 mt-2 mr-[0px]">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

