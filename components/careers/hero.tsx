import React from 'react'
import Image from 'next/image'
import herobanner from '@/assets/admission/enquiry.jpg'

const Hero = () => {
    return (
        <section className="sticky top-0 -z-10 w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={herobanner}
                    alt="Students in circular seating"
                    fill
                    priority
                    className="object-cover object-bottom"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[90%] mx-auto text-center px-4">
                <h1 className="text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.2] tracking-tight font-medium">
                    Join Our Team<br />
                    of <span className="font-ppe italic font-light">Inspiring Educators</span>
                </h1>
                <p className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-white max-w-5xl mx-auto mt-5'>
                    At RAKS Pallikkoodam, education is not a role, it is a shared responsibility and a lived purpose. We are a community of educators who believe learning happens everywhere, curiosity deserves space, and every child’s journey matters.
                </p>
                <button className='bg-[#000086] text-white  px-6 py-3 rounded-lg mt-[3%]'>View open positions</button>
            </div>
        </section>
    )
}

export default Hero