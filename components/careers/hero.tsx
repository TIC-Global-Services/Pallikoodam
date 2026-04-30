'use client'
import React from 'react'
import Image from 'next/image'
import herobanner from '@/assets/carrer/carrer_banner.jpg'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="sticky top-0  w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
                <p className='xl:text-3xl lg:text-2xl leading-[1.2] md:leading-[1.3] md:text-xl text-lg text-white max-w-6xl mx-auto mt-5'>
                    Be part of a community where curiosity, creativity, and joy in learning come first. Your ideas are valued, and your growth is supported.
                </p>
                <button
                    onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-block bg-[#000086] z-100 text-white px-6 py-3 rounded-lg mt-[5%] cursor-pointer"
                >
                    View open positions
                </button>
            </div>
        </section>
    )
}

export default Hero