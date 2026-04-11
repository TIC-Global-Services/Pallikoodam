import React from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'
import HeroBanner from '@/assets/learningatraks/academicsBanner.jpg'

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
                     RAKS way of <span className="font-ppe italic font-normal">Teaching & Learning</span>
                </h1>
                <p className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-white max-w-5xl mx-auto mt-5'>
                    Learning @ RAKS is designed to make thinking visible and<br/> knowledge transferable. Through experiential and inquiry-based <br/>practices, learners grow as critical thinkers, collaborators, and <br/> reflective individuals.
                </p>
            </div>
        </section>
    )
}

export default hero