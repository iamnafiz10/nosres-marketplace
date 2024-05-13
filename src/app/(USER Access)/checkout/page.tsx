"use client";
import React, {useState} from 'react';
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import {Checkbox} from "antd";

function Page() {
    useTitle("Checkout")
    const loading = useLoading();
    // Phone dropdown
    const [phone, setPhone] = useState('');
    return (
        <>
            <section id="checkout-section">
                {/*<div className="container pt-[50px] pb-12">*/}
                {/*    <div className="grid grid-cols-12">*/}
                {/*        <div className="col-span-2">*/}
                {/*            HI*/}
                {/*        </div>*/}
                {/*        <div className="col-span-7">*/}
                {/*            <div className="header_wrap mt-4">*/}
                {/*                {loading ? (*/}
                {/*                    <Skeleton height={20} count={1}/>*/}
                {/*                ) : (*/}
                {/*                    <>*/}
                {/*                        <h4 className="text-[20px] font-semibold">*/}
                {/*                            Checkout*/}
                {/*                        </h4>*/}
                {/*                    </>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*            <div className="mt-2 box py-4 px-6 bg-white rounded">*/}
                {/*                <div className="block lg:flex items-center justify-start gap-2">*/}
                {/*                    <h4 className="text-[16px] w-[200px] text-prgcolor">*/}
                {/*                        General Information*/}
                {/*                    </h4>*/}
                {/*                    <div className="mt-1 lg:mt-0 w-full h-[1px] bg-gray-100"></div>*/}
                {/*                </div>*/}

                {/*                /!* Form Area *!/*/}
                {/*                <form action="#" className="mt-4">*/}
                {/*                    <div className="input_box">*/}
                {/*                        <label htmlFor="full_name" className="text-[14px] font-[500]">*/}
                {/*                            Full Name*/}
                {/*                        </label><br/>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            className="mt-1 py-1 pl-4 w-full lg:w-[70%] border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                            placeholder="Full name"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <label htmlFor="phone_sumber" className="text-[14px] font-[500]">*/}
                {/*                            Phone Number*/}
                {/*                        </label><br/>*/}
                {/*                        <PhoneInput*/}
                {/*                            className="mt-1 w-full"*/}
                {/*                            defaultCountry="ua"*/}
                {/*                            value={phone}*/}
                {/*                            onChange={(phone) => setPhone(phone)}*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <label htmlFor="location" className="text-[14px] font-[500]">*/}
                {/*                            Enter Shipping Location*/}
                {/*                        </label><br/>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            className="mt-1 py-1 pl-4 w-full lg:w-[70%] border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                            placeholder="United States of America, BDK as-6506"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <label htmlFor="location" className="text-[14px] font-[500]">*/}
                {/*                            Address*/}
                {/*                        </label><br/>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            className="mt-1 py-1 pl-4 w-full lg:w-[70%] border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                            placeholder="United States"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <div*/}
                {/*                            className="block w-full lg:w-[70%] lg:flex gap-2 items-center justify-between">*/}
                {/*                            <div className="one">*/}
                {/*                                <label htmlFor="city" className="text-[14px] font-[500]">*/}
                {/*                                    City*/}
                {/*                                </label><br/>*/}
                {/*                                <input*/}
                {/*                                    type="text"*/}
                {/*                                    className="mt-1 py-1 pl-4 w-full border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                                    placeholder="Fresno"*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                            <div className="two mt-4 lg:mt-0">*/}
                {/*                                <label htmlFor="zip" className="text-[14px] font-[500]">*/}
                {/*                                    Zip*/}
                {/*                                </label><br/>*/}
                {/*                                <input*/}
                {/*                                    type="text"*/}
                {/*                                    className="mt-1 py-1 pl-4 w-full border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                                    placeholder="93722"*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <label htmlFor="state" className="text-[14px] font-[500]">*/}
                {/*                            State*/}
                {/*                        </label><br/>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            className="mt-1 py-1 pl-4 w-full lg:w-[70%] border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                            placeholder="California"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <label htmlFor="carrier" className="text-[14px] font-[500]">*/}
                {/*                            Shipping Carrier & Rate*/}
                {/*                        </label><br/>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            className="mt-1 py-1 pl-4 w-full lg:w-[70%] border text-[14px] text-prgcolor border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"*/}
                {/*                            placeholder="UPS Ground $11.31"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="input_box mt-4">*/}
                {/*                        <label htmlFor="carrier" className="text-[14px] font-[500]">*/}
                {/*                            Payment*/}
                {/*                        </label><br/>*/}
                {/*                        <Checkbox className="mt-1">*/}
                {/*                            Save information to pay faster next time*/}
                {/*                        </Checkbox>*/}
                {/*                    </div>*/}
                {/*                    <div className="button_box w-full mt-4">*/}
                {/*                        <button type='button'*/}
                {/*                                className="w-full lg:w-[70%] py-2 px-8 text-[14px] bg-primary text-white rounded border border-primary hover:border-primary hover:bg-transparent hover:text-primary transition">*/}
                {/*                            Pay Now*/}
                {/*                        </button>*/}
                {/*                    </div>*/}
                {/*                </form>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-span-3">*/}
                {/*            HI*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>
    );
}

export default Page;