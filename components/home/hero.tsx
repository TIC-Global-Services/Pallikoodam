"use client"
import React, { useEffect, useRef } from 'react'
import banner from '@/assets/home/herobanner.png'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
   
  
    }, [])


    return (
        <section className='overflow-x-hidden' ref={containerRef}>
            <Image src={banner} alt="banner" className='w-full h-full object-cover' />
        </section>
    )
}

export default Hero;