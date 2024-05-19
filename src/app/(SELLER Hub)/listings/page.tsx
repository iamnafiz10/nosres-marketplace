import React from 'react';
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Image from "next/image";
import ProductImg from "../../../../public/assets/images/product-1.png";

function Page() {
    return (
        <>
            <section id="listingss-section">
                <div className="w-full pt-[50px] pb-20">
                    {/* Dashboard Body */}
                    <div className="ml-0 lg:ml-[295px]">
                        <h1>Listings</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;