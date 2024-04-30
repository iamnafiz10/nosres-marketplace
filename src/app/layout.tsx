import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from "@/app/Header";
import "react-loading-skeleton/dist/skeleton.css";
import LeftSidebar from "@/app/LeftSidebar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Marketplace",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main>
            <Header/>
            <LeftSidebar/>
            {children}
        </main>
        </body>
        </html>
    );
}
