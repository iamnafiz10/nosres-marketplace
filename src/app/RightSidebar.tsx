import React from 'react';
import Link from "next/link";

function RightSidebar() {
    return (
        <>
            <section id="right-sidebar-section">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                        </div>
                        <div className="col-span-5"></div>
                        <div className="col-span-4">
                            {/* Here I want a sticky dev section */}
                            <div className="">
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, consequuntur
                                    inventore labore laborum nulla repudiandae sint sunt veniam veritatis.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RightSidebar;