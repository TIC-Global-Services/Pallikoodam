import React from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'
import HeroBanner from '@/assets/admission/Admission_hero.jpg'

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
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[90%] mx-auto text-center px-4">
                <h1 className="text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.2] tracking-tight font-medium">
                    Begin your<span className="font-ppe italic font-light"> child’s learning</span>
                    <br />
                    journey with us
                </h1>
                <p className='xl:text-3xl lg:text-2xl leading-[1.1] md:text-xl text-lg text-white max-w-5xl mx-auto mt-5'>
                    At RAKS Pallikkoodam, every child’s journey is guided by curiosity, confidence, and care. Learning here is not just taught, it is lived, experienced, and cherished, building strong foundations for joyful discovery and lifelong growth from day one.
                </p>
            </div>
        </section>
    )
}

export default hero