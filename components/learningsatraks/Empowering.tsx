"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Plus } from 'lucide-react'

import empowering1 from '@/assets/learningatraks/empowering-1.jpg'
import empowering2 from '@/assets/learningatraks/empowering-2.jpg'
import empowering3 from '@/assets/learningatraks/empowering-3.jpg'
import empowering4 from '@/assets/learningatraks/empowering-4.png'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const Empowering = () => {
    const containerRef = useRef<HTMLElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    const data = [
        {
            title: <>Cambridge <span className='font-ppe italic font-normal'>Early years</span></>,
            description: "Strong fundamentals in literacy, numeracy, and inquiry-based learning that nurture independent and curious thinkers.",
            image: empowering1
        }, {
            title: <><span className='font-ppe italic font-normal'>Primary</span> School</>,
            description: "Strong fundamentals in literacy, numeracy, and inquiry-based learning that nurture independent and curious thinkers.",
            image: empowering2
        }, {
            title: <><span className='font-ppe italic font-normal'>Middle</span> School</>,
            description: "Strong fundamentals in literacy, numeracy, and inquiry-based learning that nurture independent and curious thinkers.",
            image: empowering3
        }, {
            title: <><span className='font-ppe italic font-normal'>Senior Secondary</span> School</>,
            description: "Strong fundamentals in literacy, numeracy, and inquiry-based learning that nurture independent and curious thinkers.",
            image: empowering4
        }
    ]

    useGSAP(() => {
        // The ScrollTrigger timeline ties entirely to the scroll distance of the spacer
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top bottom", // Starts when the spacer enters the bottom of the screen (i.e. section is fully at top)
                end: "bottom bottom", // Ends when spacer is fully scrolled
                scrub: true,
            }
        });

        const duration = 2; // duration for one card to move all the way right-to-left
        const staggerDelay = 0.4; // stagger between cards, reduced for smaller gaps

        cardsRef.current.forEach((card, index) => {
            const startTimeline = index * staggerDelay;

            // 1. Horizontal Motion: Linear from start to end perfectly over its duration
            tl.fromTo(card,
                {
                    x: "100vw",        // Start offscreen right
                    y: 400,            // Start down at the bottom of the curve
                    rotation: 15,      // Pre-arched angle
                    opacity: 0,        // Starts invisible
                    scale: 0.2         // Starts very small
                },
                {
                    x: "-100vw",       // End offscreen left
                    ease: "none",      // Constant speed literal horizontal movement 
                    duration: duration
                },
                startTimeline
            );

            // 2. The Arc UP ("to top"): Played over the first 50% of its horizontal scroll
            tl.to(card, {
                y: 0,
                rotation: 0,
                opacity: 1,            // Fade in to fully visible
                scale: 1,              // Grow to full size at the top
                ease: "sine.out",      // sine.out gives a perfect rounded top to the curve
                duration: duration / 2
            }, startTimeline);

            // 3. The Arc DOWN ("to left"): Played over the final 50% of its horizontal scroll
            tl.to(card, {
                y: 400,                // Symmetrical end: back down
                rotation: -15,         // Opposite arched angle
                opacity: 0,            // Fade out to invisible
                scale: 0.2,            // Shrink back down to very small
                ease: "sine.in",       // rounded roll-off from the peak
                duration: duration / 2
            }, startTimeline + duration / 2);
        });

    }, { scope: containerRef });

    return (
        <div className="relative w-full z-10 bg-white">
            <section
                ref={containerRef}
                className="sticky top-0 w-full h-screen min-h-[600px] overflow-hidden py-16 flex flex-col items-center justify-center p-0 m-0"
            >
                {/* Title */}
                <div className="text-center z-10 w-full px-4 mb-8 md:mb-16">
                    <h2 className="text-[36px] md:text-[44px] lg:text-[40px] text-[#2C313E] leading-[1.1] font-medium tracking-tight">
                        Empowering Learners Through <span className="font-ppe italic font-normal">Choice</span><br className="hidden md:block" />
                        <span className="font-ppe italic font-normal">and Clarity</span>
                    </h2>
                </div>

                {/* Cards Container */}
                <div className="w-full px-4 relative flex justify-center items-start h-screen">
                    {/* Center anchor constraint so all cards start from exact same origin point */}
                    <div className="relative w-[250px] md:w-[280px] lg:w-[433px] h-[360px] md:h-[420px] lg:h-[560px]">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => { cardsRef.current[index] = el }}
                                className="empowering-card absolute inset-0 shrink-0 rounded-[12px] md:rounded-[16px] overflow-visible group cursor-pointer  transition-colors duration-300"
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-cover rounded-[10px] md:rounded-[13px]"
                                />

                                {/* Dark gradient for title visibility */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-b-[10px] md:rounded-b-[13px]" />

                                {/* Title */}
                                <div className="absolute bottom-6 md:bottom-8 left-0 right-0 px-2 text-center pointer-events-none">
                                    <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Plus Icon and Hover Tooltip */}
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group-hover:z-30 border rounded-full border-dashed p-1 border-white">
                                    {/* The Plus Button */}
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#001D6E] text-white flex items-center justify-center shadow-lg border-[1.5px] border-white/30 group-hover:bg-[#2563EB] transition-colors duration-300">
                                        <Plus size={20} className="text-white" />
                                    </div>

                                    {/* Description Box (Appears on hover) */}
                                    <div className="absolute left-10 -translate-y-1/2 ml-4 w-[220px] md:w-[260px] bg-white   p-4 md:p-5 shadow-2xl opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto rounded-[8px]">
                                        <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#2C313E] font-medium font-sans">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Scroll Spacer to trigger animation before the next section overlaps */}
            <div ref={triggerRef} className="w-full h-[300vh]" />
        </div>
    )
}

export default Empowering