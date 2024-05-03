import React from "react";
import '@/app/globals.css';
import "react-loading-skeleton/dist/skeleton.css";
import {ToastContainer} from "react-toastify";
import Header from "@/app/Header";
import LeftSidebarUser from "@/app/(User Setting)/LeftSidebarUser";

export const metadata = {
    title: 'Nosres',
    description: 'User Setting',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <LeftSidebarUser/>
        {children}
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}