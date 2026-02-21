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
    { src: icon1, top: '2%', left: '-34%', size: 1000, rotate: 5 }, // Globe
    { src: icon2, top: '18%', left: '1%', size: 1000, rotate: 5 }, // mouse
    { src: icon3, top: '30%', right: '-8%', size: 800, rotate: 5 }, // Music
    { src: icon3, top: '2%', left: '-20%', size: 900, rotate: 5 }, // Music
    { src: icon4, top: '2%', left: '-10%', size: 900, rotate: 5 }, // pencil
    { src: icon5, top: '54%', right: '-10%', size: 800, rotate: 5 }, // bulb
    { src: icon5, top: '37%', left: '-10%', size: 900, rotate: 5 }, // bulb
    { src: icon6, top: '2%', right: '40%', size: 800, rotate: 5 }, // Shuttlecock
    { src: icon7, top: '35%', right: '8%', size: 1000, rotate: 5 }, // Chess Knight
    { src: icon8, top: '18%', left: '20%', size: 800, rotate: 5 }, // Book
    { src: icon9, top: '54%', right: '1%', size: 800, rotate: 5 }, // Soccer Ball
    { src: icon10, top: '0%', right: '5%', size: 1000, rotate: 5 }, // Paint Brush
    { src: icon11, top: '15%', right: '1%', size: 800, rotate: 5 }, // DNA
    { src: icon12, top: '10%', right: '-25%', size: 900, rotate: 5 }, // Pink Cloud
    // { src: icon13, top: '22%', left: '96%', size: 100, rotate: 20 }, // Pink Cloud
]
const mobileiconsData: IconData[] = [
    { src: icon1, top: '-10%', left: '25%', size: 600, rotate: 2 }, // Globe
    { src: icon2, top: '10%', left: '4%', size: 600, rotate: 3 }, // mouse
    { src: icon3, top: '20%', left: '25%', size: 600, rotate: 2 }, // Music
    { src: icon4, top: '35%', left: '3%', size: 600, rotate: 5 }, // pencil
    { src: icon5, top: '50%', left: '25%', size: 600, rotate: 3 }, // bulb
    { src: icon6, top: '60%', right: '-40%', size: 600, rotate: 5 }, // Shuttlecock
    { src: icon7, top: '85%', right: '-70%', size: 600, rotate: 3 }, // Chess Knight
    { src: icon8, top: '99%', left: '2%', size: 600, rotate: 3 }, // Book
    { src: icon9, top: '85%', right: '-25%', size: 600, rotate: 2 }, // Soccer Ball
    { src: icon10, top: '110%', right: '-10%', size: 600, rotate: 3 }, // Paint Brush
    { src: icon11, top: '125%', right: '10%', size: 600, rotate: 5 }, // DNA
    { src: icon12, top: '115%', left: '-10%', size: 600, rotate: 4 }, // Pink Cloud

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
        <div className='bg-[#000086] rounded-t-[40px] min-h-screen overflow-hidden relative'>
            <div className='absolute xl:top-30 lg:-top-10 md:top-20 -left-10 top-10 w-full xl:-rotate-10 rotate-10'>
                <div className='relative h-[50vh]'>
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
                <div className='py-[5%] relative z-20'>

                    <div ref={titleRef} className="flex flex-col gap-[10%]">
                        <h1 className={`text-sm md:text-2xl lg:text-3xl  xl:text-4xl tracking-tight  text-white font-medium`} >Step into a school where learning is intentional, relationships are meaningful,<br className='hidden xl:block' /> and every experience is designed to help children grow with confidence,<br /> curiosity and purpose.</h1>
                        <h1 className={`text-sm md:text-2xl lg:text-3xl  xl:text-4xl   tracking-tight  text-white font-medium mt-8`}>Discover the values that guide us, the research that shapes us, and the vision<br className='hidden xl:block' /> that inspires us to create joyful, future-ready learning every single day.</h1>
                    </div>

                    <div className="mt-[5%]">
                        <button suppressHydrationWarning={true} className='bg-white text-[#000086] text-sm md:text-base lg:text-xl xl:text-2xl hover:scale-105 transition-all duration-300 font-medium px-4 py-3 capitalize rounded-md'>schedule a campus tour</button>
                    </div>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default campustour
