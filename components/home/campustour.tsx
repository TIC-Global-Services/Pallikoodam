'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ScrollReveal from '../reuseable/effects/Scrollreveal'
import ContainerLayout from '@/layout/ContainerLayout'
import gsap from 'gsap'

import icon1 from '@/assets/iconnew-1.png'
import icon2 from '@/assets/iconnew-2.png'
import icon3 from '@/assets/iconnew-3.png'
import icon4 from '@/assets/iconnew-4.png'
import icon5 from '@/assets/iconnew-5.png'
import icon7 from '@/assets/iconnew-7.png'
import icon8 from '@/assets/iconnew-8.png'
import icon9 from '@/assets/iconnew-9.png'
import icon10 from '@/assets/iconnew-10.png'
import icon11 from '@/assets/iconnew-11.png'
import icon6 from '@/assets/iconnew-6.png'
import icon12 from '@/assets/iconnew-12.png'
// import icon13 from '@/assets/iconnew-13.png'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'

interface IconData {
    src: StaticImageData
    top: string
    left?: string
    right?: string
    size: number
    rotate: number
    md?: string
}

const iconsData: IconData[] = [
    { src: icon1, top: '-40%', left: '-5%', size: 1000, rotate: 5 }, // Globe (Top left)
    { src: icon7, top: '-30%', left: '-20%', size: 1000, rotate: -5 }, // Chat Bubbles (Top mid-left)
    { src: icon2, top: '0%', left: '-25%', size: 1000, rotate: 5 }, // Mouse (Top mid)
    { src: icon3, top: '20%', left: '-15%', size: 1000, rotate: -10 }, // Music (Top mid-right)
    { src: icon4, top: '30%', left: '20%', size: 1000, rotate: 5 }, // Pencil (Top right)
    { src: icon6, top: '25%', left: '40%', size: 1000, rotate: 5 }, // Chevron/Shuttlecock (Mid right)
    { src: icon12, top: '-40%', right: '20%', size: 1000, rotate: 5 }, // Ruler (Bottom right)
    { src: icon5, top: '-40%', right: '-5%', size: 1000, rotate: 5 }, // Bulb (Bottom mid-right)
    { src: icon10, top: '-30%', right: '-25%', size: 1000, rotate: 5 }, // Paint Brush (Bottom mid)
    { src: icon8, top: '-5%', right: '-20%', size: 1000, rotate: -5 }, // Book (Bottom mid-left)
    { src: icon11, top: '20%', right: '-20%', size: 1000, rotate: -5 }, // DNA/Leaves (Bottom left)
    { src: icon9, top: '25%', right: '30%', size: 1000, rotate: -5 }, // Soccer/Cursor (Mid left)
]
const mobileiconsData: IconData[] = [
 { src: icon1, top: '-20%', left: '-30%', size: 600, rotate: 5 }, // Globe (Top left)
    { src: icon7, top: '-10%', left: '10%', size: 600, rotate: -5 }, // Chat Bubbles (Top mid-left)
    { src: icon2, top: '10%', left: '10%', size: 600, rotate: 5 }, // Mouse (Top mid)
    { src: icon3, top: '30%', left: '10%', size: 600, rotate: -10 }, // Music (Top mid-right)
    { src: icon4, top: '45%', left: '10%', size: 600, rotate: 5 }, // Pencil (Top right)
    { src: icon6, top: '60%', left: '-40%', size: 600, rotate: 5 }, // Chevron/Shuttlecock (Mid right)
    { src: icon12, top: '10%', left: '-50%', size: 600, rotate: 5 }, // Ruler (Bottom right)
    { src: icon5, top: '-10%', left: '-50%', size: 600, rotate: 5 }, // Bulb (Bottom mid-right)
    { src: icon10, top: '30%', left: '-60%', size: 600, rotate: 5 }, // Paint Brush (Bottom mid)
    { src: icon8, top: '40%', left: '-50%', size: 600, rotate: -5 }, // Book (Bottom mid-left)
    { src: icon11, top: '60%', left: '0%', size: 600, rotate: -5 }, // DNA/Leaves (Bottom left)
    // { src: icon9, top: '80%', left: '-50%', size: 600, rotate: -5 }, 

]

const campustour = () => {
    const iconsRef = useRef<(HTMLDivElement | null)[]>([])
    const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
    const { elementRef: titleRef2 } = useLetterReveal<HTMLHeadingElement>();
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const activeIcons = isMobile ? mobileiconsData : iconsData

    useEffect(() => {
        iconsRef.current.forEach((icon, i) => {
            if (!icon || !activeIcons[i]) return

            gsap.to(icon, {
                y: 'random(-1, 1)   ',
                x: 'random(-2, 2)',
                rotation: `random(${(activeIcons[i].rotate || 0) - 0.5}, ${(activeIcons[i].rotate || 0) + 0.5})`,
                duration: 'random(3, 5)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            })
        })
    }, [activeIcons])

    return (
        <div className='bg-[#000086] flex items-center rounded-t-[40px] min-h-screen overflow-hidden relative'>
            <div className='absolute inset-0 w-full h-full pointer-events-none'>
                <div className='relative w-full h-full'>
                    {activeIcons.map((icon, i) => (
                        <div
                            key={i}
                            ref={(el) => { iconsRef.current[i] = el }}
                            className="absolute h-10 z-0 pointer-events-none"
                            style={{
                                top: icon.top,
                                left: icon.left,
                                right: icon.right,
                                width: icon.size,
                            }}
                        >
                            {i < 10 ?
                                <div className='w-1 h-1 absolute -bottom-60 left-0 bg-white m-3'></div>
                                : null
                            }
                            {i < 10 ?
                                <div className='w-1 h-1 absolute -bottom-90 left-10 bg-white m-3'></div>
                                : null
                            }
                            {i < 10 ?
                                <div className='w-1 h-1 absolute -bottom-90 left-90 bg-white m-3'></div>
                                : null
                            }
                            {i < 10 ?
                                <div className='w-1 h-1 absolute top-90 left-100 bg-white m-3'></div>
                                : null
                            }
                            {/* {i < 10 ?
                        <div className='w-1 h-1 absolute bottom-0 right-10 bg-white m-3'></div>
                        : null
                    }
                    {i < 10 ?
                        <div className='w-1 h-1 absolute bottom-0 right-0 bg-white m-3'></div>
                        : null
                    } */}


                            <Image
                                src={icon.src}
                                alt="icon"
                                width={icon.size}
                                height={icon.size}
                                className="w-full h-auto drop-shadow-2xl"
                                style={{ transform: `rotate(${icon.rotate}deg)` }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ContainerLayout>
                <div className='flex flex-col justify-center items-center relative z-20'>

                    <div ref={titleRef} className="flex flex-col justify-center items-center gap-[10%]">
                        <h1 className={`text-sm md:text-2xl text-center lg:text-3xl  xl:text-4xl tracking-tight  text-white font-medium`} >Step into a school where learning is intentional, relationships are meaningful,<br className='hidden xl:block' /> and every experience is designed to help children grow with confidence,<br /> curiosity and purpose.</h1>
                        <h1 className={`text-sm md:text-2xl text-center lg:text-3xl  xl:text-4xl   tracking-tight  text-white font-medium mt-8`}>Discover the values that guide us, the research that shapes us, and the vision<br className='hidden xl:block' /> that inspires us to create joyful, future-ready learning every single day.</h1>
                    </div>

                    <div className="mt-[5%] flex justify-center">
                        <button suppressHydrationWarning={true} className='bg-white text-[#000086] text-sm md:text-base lg:text-xl xl:text-2xl hover:scale-105 transition-all duration-300 font-medium px-4 py-3 capitalize rounded-md'>schedule a campus tour</button>
                    </div>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default campustour
