import React from "react";
import '@/app/globals.css';
import "react-loading-skeleton/dist/skeleton.css";
import {ToastContainer} from "react-toastify";
import Header from "@/app/(Report)/HeaderRe";
import Footer from "@/app/(Report)/FooterRe";

export const metadata = {
    title: 'Nosres',
    description: 'Report',
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
        <Footer/>
        </body>
        </html>
    )
}