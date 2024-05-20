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
                            Thank You for Choosing Us!
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-3">
                            A confirmation email from us is sent to your email to confirm your account.<br/> Please allow up
                            to 3 days for your account to be opened.
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;