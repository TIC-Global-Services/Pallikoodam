'use client';

import React from 'react';
import Lanyard from '../reuseable/lanyard';

const ContactDetails = () => {
    return (
        <section className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row items-start justify-between overflow-hidden sm:py-16 lg:py-0">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6   z-10 px-6 sm:px-12 lg:pl-20 py-12 lg:py-20">
                <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-medium text-black leading-tight tracking-tight">
                    Experience Our <span className="italic font-ppe font-normal">School</span><br />
                    Environment Firsthand
                </h2>
                <p className="text-lg md:text-2xl  max-w-lg leading-relaxed font-normal">
                    There is something special about seeing learning come alive. We invite you to
                    visit our campus and experience the warmth, spaces, and spirit that define
                    life at RaK&apos;s.
                </p>
            </div>

            {/* Middle - Lanyard */}
            <div className="w-full lg:absolute lg:inset-0 lg:z-20 flex justify-center items-center pointer-events-none h-[60vh] lg:h-auto -my-10 lg:my-0">
                <div className="scale-[0.65] sm:scale-75 md:scale-90 lg:scale-[1.1] w-full flex justify-center items-center pointer-events-auto">
                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-8 z-10 px-6 sm:px-12 lg:pr-5 py-12 lg:py-20 lg:pl-[15%]">

                <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-800 text-lg lg:text-xl">
                        <span className="font-semibold text-black tracking-wide">For Admissions:</span> admissions@rakspallikkoodam.com
                    </p>
                    <p className="text-gray-800 text-lg lg:text-xl">
                        <span className="font-semibold text-black tracking-wide">For Enquiries:</span> info@rakspallikkoodam.com
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-black">Phone:</h3>
                    <p className="text-gray-800 text-lg lg:text-xl mt-1 tracking-wide">9XXXX XXXXX</p>
                </div>

                <div className="flex gap-2 items-start">
                    
                    <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mt-1">
                      <strong className="text-2xl lg:text-3xl font-semibold text-black">Address:</strong>  RAKS Pallikkoodam,<br />
                        774 Avinashi Road, V.O.C. Park Gate,<br />
                        Coimbatore - 641 018
                    </p>
                </div>

            </div>

        </section>
    );
};

export default ContactDetails;