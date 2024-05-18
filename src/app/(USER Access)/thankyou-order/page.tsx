import React from 'react';
import {PiHandsPrayingLight} from "react-icons/pi";

function Page() {
    return (
        <>
            <section id="thank-you-order-section" className="flex justify-center items-center h-screen">
                <div className="thank_you_box bg-white rounded-lg text-center py-[35px] px-[55px]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="icon">
                            <PiHandsPrayingLight className="w-[50px] h-[50px] text-primary"/>
                        </div>
                        <h4 className="text-prgcolor text-[18px] mt-3">
                            Thank You for Your Order!
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-3">
                            We are delighted that you have found something you like!
                        </h4>
                        <h4 className="text-[14px] mt-2 text-graycolor">
                            Order No: 124465
                        </h4>
                    </div>
                    <div className="block lg:flex items-center justify-center gap-4 mt-6">
                        <button type='button'
                                className="text-[14px] py-2 px-6 bg-primary border border-primary text-white rounded hover:bg-transparent hover:text-primary">
                            View Order
                        </button>
                        <button type='button'
                                className="mt-4 lg:mt-0 text-[14px] py-2 px-6 bg-transparent border text-primary rounded hover:bg-primary hover:text-white">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;