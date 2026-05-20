"use client"
import React, { useEffect, useRef } from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cambridge from '@/assets/admission/early_years.jpg'
import cambridgeprimary from '@/assets/admission/primary.jpg'
import igcse from '@/assets/admission/middle_school.jpg'
import alevels from '@/assets/admission/upper_secondary.jpg'

const data = [
    {
        title: "Early Years",
        image: cambridge,
        desc: "A warm, Reggio-Emilia-inspired, play-based beginning that nurtures curiosity, emotional security, and joyful exploration, laying strong foundations for lifelong learning."
    },
    {
        title: "Primary",
        image: cambridgeprimary,
        desc: "A concept-driven programme that builds strong literacy and numeracy, encourages inquiry, and develops confident, curious learners with a lasting love for learning."
    },
    {
        title: "Middle School",
        image: igcse,
        desc: "A globally respected programme that deepens conceptual understanding, critical thinking, collaboration, and real-world connections across disciplines."
    },
    {
        title: "Upper Secondary",
        image: alevels,
        desc: "<strong>IGCSE:</strong> An internationally recognised qualification that develops independent thinking, clear communication, and academic rigour.\n\n<strong>AS & A Levels:</strong> Advanced pathways that empower learners to specialise, excel, and gain entry to leading universities worldwide preparing them, to lead with confidence and purpose."
    }
]

const Programs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current) return;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const items = itemRefs.current;

            items.forEach((item, index) => {
                if (!item) return;

                const leftBracket = item.querySelector('.bracket-left');
                const rightBracket = item.querySelector('.bracket-right');
                const imgWrapper = item.querySelector('.program-img-wrapper');
                const img = item.querySelector('.program-img');

                gsap.set(imgWrapper, { width: "35%", scale: 0.85, transformOrigin: "center center" });
                gsap.set(img, { scale: 1.2 });
                gsap.set([leftBracket, rightBracket], { x: 0 });

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",   // Start as soon as item enters the viewport
                        end: "bottom top",     // Finish as soon as item leaves the viewport
                        scrub: 1,              // Smoothly map to scroll progress
                    }
                });

                // First half: Expand as item reaches the center
                tl.to(leftBracket, { x: -250, duration: 1, ease: "power1.inOut" }, 0)
                    .to(rightBracket, { x: 250, duration: 1, ease: "power1.inOut" }, 0)
                    .to(imgWrapper, { width: "70%", scale: 1, duration: 1, ease: "power1.inOut" }, 0)
                    .to(img, { scale: 1, duration: 1, ease: "power1.inOut" }, 0)

                    // Second half: Shrink back down as item leaves
                    .to(leftBracket, { x: 0, duration: 1, ease: "power1.inOut" }, 1)
                    .to(rightBracket, { x: 0, duration: 1, ease: "power1.inOut" }, 1)
                    .to(imgWrapper, { width: "45%", scale: 0.85, duration: 1, ease: "power1.inOut" }, 1)
                    .to(img, { scale: 1.4, duration: 1, ease: "power1.inOut" }, 1);
            });
        }, containerRef);

        return () => mm.revert();
    }, []);

    return (
        <section className="bg-white relative z-20 w-full mt-[8%]">
            <div
                ref={containerRef}
                className="w-full rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] bg-[#000080] text-white pt-16 md:pt-24 lg:pt-22 pb-24 md:pb-42  overflow-hidden"
            >
                <ContainerLayout>

                    {/* Header text */}
                    <div className="max-w-7xl mx-auto mb-10 md:mb-32">
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-medium leading-[1] mb-6 tracking-tight">
                            <span className="font-ppe italic font-light">Learning</span> Pathways at RAKS Pallikkoodam
                        </h2>
                        <p className="text-[1.05rem] md:text-[2rem] text-left md:text-center leading-[1.2] tracking-[-0.02em] opacity-90">
                            At RAKS Pallikkoodam, learning pathways are purposeful, future-ready, and globally recognised, nurturing confidence, creativity, and character at <br className="hidden md:block" /> every stage.
                        </p>
                    </div>

                    {/* Programs List */}
                    <div className="flex flex-col gap-10 md:gap-24 lg:gap-24">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => { itemRefs.current[i] = el; }}
                                className="flex flex-col items-center justify-center w-full"
                            >
                                {/* Brackets & Title Container */}
                                <div className="flex justify-center items-center h-auto mb-8 md:mb-12 w-full text-center relative z-10">
                                    <span className="bracket-left text-[2rem] md:text-[3rem] lg:text-[4rem] font-medium inline-block relative -top-1">
                                        [
                                    </span>

                                    <h3 className="text-[1.2rem] md:text-[2.5rem] lg:text-[3rem] font-medium leading-tight px-0 whitespace-nowrap">
                                        {item.title}
                                    </h3>

                                    <span className="bracket-right text-[2rem] md:text-[3rem] lg:text-[4rem] font-medium inline-block relative -top-1">
                                        ]
                                    </span>
                                </div>

                                {/* Image Wrapper */}
                                <div className="program-img-wrapper relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-5 shadow-2xl bg-[#000050] mx-auto z-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        objectPosition='center top'
                                        sizes="(max-width: 668px) 80vw, (max-width: 1100px) 40vw, 23vw"
                                        className="program-img object-cover object-center will-change-transform"
                                    />
                                </div>

                                {/* Description */}
                                <div 
                                    className="text-center text-[0.95rem] md:text-[1.4rem] leading-tight max-w-2xl whitespace-pre-line opacity-90 px-4 relative z-10"
                                    dangerouslySetInnerHTML={{ __html: item.desc }}
                                />
                            </div>
                        ))}
                    </div>

                </ContainerLayout>
            </div>
        </section>
    )
}

export default Programs