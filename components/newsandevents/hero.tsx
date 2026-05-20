import React from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'
import HeroBanner from '@/assets/learningatraks/developement.jpg'

const hero = () => {
    return (
        <section className="top-0 -z-10 w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={HeroBanner}
                    alt="Students in circular seating"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[90%] mx-auto text-center px-4">
                <h1 className="text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] tracking-tight font-medium">
                    School life at a <span className="font-ppe italic font-normal">glance</span>
                </h1>
                <p className='xl:text-3xl lg:text-2xl md:text-xl text-lg leading-[1.3] text-white max-w-5xl mx-auto mt-5'>
                    Stay connected with the pulse of RAKS Pallikkoodam, where learning unfolds not just in classrooms, but across experiences, celebrations, conversations, and community moments.
                </p>
            </div>
        </section>
    )
}

export default hero