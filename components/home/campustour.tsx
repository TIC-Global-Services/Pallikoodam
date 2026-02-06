'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from '../reuseable/effects/Scrollreveal'
import ContainerLayout from '@/layout/ContainerLayout'
import gsap from 'gsap'

import icon1 from '@/assets/icon-1.png'
import icon2 from '@/assets/icon-2.png'
import icon3 from '@/assets/icon-3.png'
import icon4 from '@/assets/icon-4.png'
import icon5 from '@/assets/icon-5.png'
import icon7 from '@/assets/icon-7.png'
import icon8 from '@/assets/icon-8.png'
import icon9 from '@/assets/icon-9.png'
import icon10 from '@/assets/icon-10.png'
import icon11 from '@/assets/icon-11.png'
import icon6 from '@/assets/icon-6.png'
import icon12 from '@/assets/icon-12.png'
import icon13 from '@/assets/icon-13.png'

const iconsData = [
    { src: icon11, top: '45%', right: '5%', size: 200, rotate: 40 }, // DNA
    { src: icon10, top: '78%', right: '25%', size: 200, rotate: -15 }, // Paint Brush
    { src: icon9, top: '60%', right: '12%', size: 300, rotate: 10 }, // Soccer Ball
    { src: icon7, top: '55%', right: '40%', size: 300, rotate: 4 }, // Shuttlecock
    { src: icon6, top: '55%', right: '28%', size: 200, rotate: -10 }, // Chess Knight
    { src: icon5, top: '68%', left: '30%', size: 200, rotate: 0 }, // pensil
    { src: icon8, top: '75%', left: '50%', size: 200, rotate: 15 }, // Book
    { src: icon4, top: '80%', left: '35%', size: 300, rotate: -30 }, // Grad Cap
    { src: icon3, top: '72%', left: '10%', size: 200, rotate: 20 }, // Mouse
    { src: icon1, top: '85%', left: '0%', size: 200, rotate: -5 }, // Globe
    { src: icon2, top: '89%', left: '22%', size: 100, rotate: 10 }, // Pink Cloud
    { src: icon12, top: '32%', left: '92%', size: 200, rotate: 10 }, // Pink Cloud
    { src: icon13, top: '22%', left: '96%', size: 100, rotate: 20 }, // Pink Cloud
]

const campustour = () => {
    const iconsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        iconsRef.current.forEach((icon, i) => {
            if (!icon) return

            gsap.to(icon, {
                y: 'random(-20, 20)',
                x: 'random(-10, 10)',
                rotation: `random(${(iconsData[i].rotate || 0) - 10}, ${(iconsData[i].rotate || 0) + 10})`,
                duration: 'random(3, 5)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            })
        })
    }, [])

    return (
        <div className='bg-[#000086] min-h-screen overflow-hidden relative'>
            {iconsData.map((icon, i) => (
                <div
                    key={i}
                    ref={(el) => { iconsRef.current[i] = el }}
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: icon.top,
                        left: icon.left,
                        right: icon.right,
                        width: icon.size,
                    }}
                >
                    {i < 10 ?
                        <div className='w-1 h-1 absolute top-20 bg-white m-3'></div>
                        : null
                    }
                    {i < 10 ?
                        <div className='w-1 h-1 absolute top-40 left-0 bg-white m-3'></div>
                        : null
                    }
                    {i < 10 ?
                        <div className='w-1 h-1 absolute top-40 left-40 bg-white m-3'></div>
                        : null
                    }
                    {i < 10 ?
                        <div className='w-1 h-1 absolute top-40 left-30 bg-white m-3'></div>
                        : null
                    }


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

            <ContainerLayout>
                <div className='flex flex-col py-[7%] gap-5 justify-start items-start h-full relative z-20'>
                    <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur
                        baseRotation={3}
                        textClassName="text-white"
                        blurStrength={4}
                    >
                        <span>Step into a school where learning is intentional, relationships are meaningful, and every experience is designed to help children grow with confidence, curiosity and purpose.</span>
                        <div className="mt-8">
                            <span>Discover the values that guide us, the research that shapes us, and the vision that inspires us to create joyful, future-ready learning every single day.</span>
                        </div>
                    </ScrollReveal>
                    <button suppressHydrationWarning={true} className='bg-white text-[#000086] text-xl md:text-2xl font-medium px-4 py-3 capitalize rounded-md'>schedule a campus tour</button>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default campustour
