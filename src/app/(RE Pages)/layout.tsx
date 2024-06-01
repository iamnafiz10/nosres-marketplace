import React from "react";
import '@/app/globals.css';
import "react-loading-skeleton/dist/skeleton.css";
import {ToastContainer} from "react-toastify";
import Header from "@/app/(Maeketplace RE)/HeaderRe";

export const metadata = {
    title: 'Nosres',
    description: 'User Profile Re',
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
        {children}
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}