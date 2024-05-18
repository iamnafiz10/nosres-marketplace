import React from 'react';

function Page() {
    return (
        <>
            <section id="thank-you-order-section" className="flex justify-center items-center h-screen">
                <div
                    className="thank_you_box bg-white rounded text-center py-[50px] px-[50px]">
                    <h1 className="text-3xl font-bold">Thank you for order!</h1>
                    <h4 className="text-[14px] mt-2 text-graycolor">
                        We are delighted that you have found something you like!
                    </h4>
                    <h4 className="text-[14px] mt-2 text-graycolor">
                        Order No: 124465
                    </h4>
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