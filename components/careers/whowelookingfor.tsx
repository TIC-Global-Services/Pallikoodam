'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import background from '@/assets/carrer/welookingfor.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ContainerLayout from '@/layout/ContainerLayout'

gsap.registerPlugin(ScrollTrigger)

const roles = [
    {
        title: "Early Years & Primary Educators",
        description: "They create joyful, inquiry-rich learning environments where curiosity is celebrated, questions are encouraged, and every learner feels safe, valued, and inspired to explore new ideas with confidence."
    },
    {
        title: "Subject Specialists",
        description: "With depth of knowledge and a learner-centred approach, they design experiences that move beyond surface understanding, guiding students to connect concepts, think critically, and apply learning with clarity and purpose."
    },
    {
        title: "Cambridge Curriculum Educators",
        description: "They balance rigour with relevance by maintaining high academic standards while ensuring learning remains meaningful and connected to real-world contexts."
    },
    {
        title: "Co-curricular & Activity Teachers",
        description: "They inspire expression, teamwork, and wellbeing by creating spaces where every voice is heard, collaboration is valued, and individuality is respected."
    }
]

const whowelookingfor = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const introTextRef = useRef<HTMLDivElement>(null)
    const imageWrapperRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        if (!containerRef.current || !imageWrapperRef.current || !introTextRef.current || !overlayRef.current || !sliderRef.current || !descriptionRef.current) return;

        // The length of one "slide" translation relative to window width
        // With px-[50vw], the last item will align nicely when shifted by (totalWidth - windowWidth)
        const totalSliderWidth = sliderRef.current.scrollWidth
        const windowWidth = window.innerWidth

        // Exact distance to move the slider leftward so the last item stops near the center
        const moveX = -(totalSliderWidth - windowWidth)

        // We determine the total timeline duration based on the number of items
        const animationLength = 1.5 + roles.length

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${windowWidth * 3}`, // Pin for about 3 viewport widths worth of scrolling
                scrub: 1,
                pin: true,
            }
        })

        // 1. Initial Image scaling and intro text fade out
        tl.to(imageWrapperRef.current, {
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            marginTop: '0px',
            duration: 1,
            ease: 'power2.inOut'
        }, 0)

        tl.to(introTextRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.5,
            ease: 'power2.in'
        }, 0)

        // 2. Fade in the overlay and horizontal slider slightly before image finishes scaling (at 80%)
        tl.to(overlayRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }, 0.8)

        // 3. Horizontal Pan for the titles
        const items = gsap.utils.toArray<HTMLParagraphElement>('.role-title')

        // We will translate the slider horizontally
        tl.to(sliderRef.current, {
            x: moveX,
            duration: roles.length,
            ease: 'none'
        }, 1.2)

        // Highlight active items and swap description text
        items.forEach((item, i) => {
            // Highlight the current item
            tl.to(item, {
                color: 'white',
                opacity: 1,
                duration: 0.2,
            }, 1.2 + i - 0.2) // Start highlighting shortly before it reaches center

            // Change the description text textContent 
            tl.call(() => {
                if (descriptionRef.current) {
                    gsap.to(descriptionRef.current, {
                        opacity: 0,
                        duration: 0.1,
                        onComplete: () => {
                            if (descriptionRef.current) {
                                descriptionRef.current.innerText = roles[i].description
                                gsap.to(descriptionRef.current, { opacity: 1, duration: 0.1 })
                            }
                        }
                    })
                }
            }, [], 1.2 + i)

            // Dim the current item when moving to the next
            if (i < items.length - 1) {
                tl.to(item, {
                    color: 'rgba(255, 255, 255, 0.4)',
                    duration: 0.2,
                }, 1.2 + i + 0.8)
            }
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-center">

            {/* Intro Text */}
            <div ref={introTextRef} className="absolute top-[8%] left-0 w-full text-center z-10 px-4 mb-5">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-regular tracking-tighter mb-4">
                    Who We&apos;re <span className="font-ppe font-light italic">Looking For</span>
                </h2>
                <p className="text-lg md:text-xl lg:text-3xl font-normal">
                    Motivated educators ready <br className="hidden md:block" /> to inspire.
                </p>
            </div>

            {/* Image Layer */}
            <div
                ref={imageWrapperRef}
                className="relative z-0 w-[300px] h-[350px] md:w-[400px] md:h-[450px] rounded-[20px] overflow-hidden mt-[30vh]"
            >
                <Image
                    ref={imageRef}
                    src={background}
                    alt="Who We Are Looking For"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay Content Layer */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/60 z-20 flex flex-col justify-center opacity-0 pointer-events-none"
            >
                {/* Horizontal Slider (Titles) */}
                <div className="w-full relative py-10 mt-[-10vh]">
                    <div ref={sliderRef} className="flex flex-nowrap items-center gap-12 md:gap-24 px-[50vw] w-max whitespace-nowrap">
                        {roles.map((role, idx) => (
                            <p
                                key={idx}
                                className="role-title text-3xl md:text-5xl lg:text-[64px] font-ppe italic font-light text-white/40 transition-colors"
                            >
                                {role.title}
                            </p>
                        ))}
                    </div>
                    {/* Divider Line */}
                    <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-white/30" />
                </div>

                {/* Description Container */}
                <ContainerLayout disablePaddingY className="mt-8 md:mt-16 text-white min-h-[150px]">
                    <div className="w-full md:w-3/4 lg:w-1/2 ml-auto">
                        <p
                            ref={descriptionRef}
                            className="text-lg md:text-2xl  leading-[30px] font-light"
                        >
                            {roles[0].description}
                        </p>
                    </div>
                </ContainerLayout>

            </div>
        </div>
    )
}

export default whowelookingfor