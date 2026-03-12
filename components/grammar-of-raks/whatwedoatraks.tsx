'use client';
import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContainerLayout from '@/layout/ContainerLayout';
import tempbg from '@/assets/grammar-of-raks/whatwedobg.jpg';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const slidesData = [
    {
        title: "WHY We Do WHAT We Do @ RAKS",
        subtitle: "Because Thriving Is A Collective Journey.",
        bg: tempbg,
    },
    {
        title: "HOW We Do WHAT We Do @RAKS",
        subtitle: "Through Purposeful Pedagogy, Project-Based Learning, Hands On, Minds On Approach, Inquiry, And Reflective Practices.",
        bg: tempbg,
    },
    {
        title: "WHERE We Do WHAT We Do @RAKS",
        subtitle: "In Purpose-Built Spaces Designed For Exploration, Collaboration, And Creativity.",
        bg: tempbg,
    },
    {
        title: "With WHOM We Do WHAT We Do @RAKS",
        subtitle: "Together With Learners, Families, Educators, And Communities, Building A Culture Of Care, Courage, And Curiosity.",
        bg: tempbg,
    },
];

const WhatWeDoAtRaks = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [segmentProgress, setSegmentProgress] = useState(0);
    const total = slidesData.length;

    useGSAP(() => {
        if (!outerRef.current) return;

        const panels = gsap.utils.toArray<HTMLElement>('.wwda-panel');

        // Set initial states via GSAP
        panels.forEach((panel, i) => {
            gsap.set(panel, {
                autoAlpha: i === 0 ? 1 : 0,
                zIndex: i,
            });
        });

        // Each transition: fade IN next panel on top (same pattern as RaksValue)
        for (let i = 0; i < panels.length - 1; i++) {
            gsap.fromTo(panels[i + 1],
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: outerRef.current,
                        start: () => `top+=${(i + 0.5) * window.innerHeight} top`,
                        end: () => `top+=${(i + 1) * window.innerHeight} top`,
                        scrub: true,
                        onEnter: () => setActiveIndex(i + 1),
                        onLeaveBack: () => setActiveIndex(i),
                        onUpdate: (self) => setSegmentProgress(self.progress),
                    },
                }
            );
        }

        // Overall progress tracker for the progress bar
        ScrollTrigger.create({
            trigger: outerRef.current,
            start: 'top top',
            end: () => `+=${total * window.innerHeight}`,
            onUpdate: (self) => {
                const p = self.progress;
                const idx = Math.min(Math.floor(p * total), total - 1);
                setActiveIndex(idx);
                setSegmentProgress((p * total) - idx);
            },
        });

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, { scope: outerRef });

    return (
        <>
            {/* Title section */}
            <section className="w-full bg-white py-10 md:py-[20]">
                <ContainerLayout>
                    <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1]">
                        WHY, HOW, WHERE, And With WHOM We Do WHAT We Do{' '}
                        <span className="font-ppe font-light italic text-[#000086]">@RAKS</span>
                    </h2>
                </ContainerLayout>
            </section>

            {/* Full-screen scroll panels */}
            <div
                ref={outerRef}
                style={{ height: `${(total + 1) * 100}vh` }}
                className="relative w-full"
            >
                <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">

                    {/* Panels — each has its own bg image + dark overlay + text */}
                    {slidesData.map((slide, idx) => (
                        <div
                            key={idx}
                            className="wwda-panel absolute inset-0 flex items-center justify-center"
                            style={{
                                opacity: idx === 0 ? 1 : 0,
                                visibility: idx === 0 ? 'visible' : 'hidden',
                                zIndex: idx + 2,
                            }}
                        >
                            <Image
                                src={slide.bg}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-10 text-center max-w-3xl px-6">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-ppe font-light italic mb-4 md:mb-6 leading-tight">
                                    {slide.title}
                                </h3>
                                <p className="text-base md:text-xl lg:text-2xl text-white/90 leading-[1.3]">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Progress bar */}
                    <div className="absolute bottom-8 left-0 w-full z-20 px-6 md:px-12">
                        <div className="flex gap-3 md:gap-4">
                            {slidesData.map((_, idx) => (
                                <div key={idx} className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white rounded-full transition-all duration-200 ease-out"
                                        style={{
                                            width: idx < activeIndex
                                                ? '100%'
                                                : idx === activeIndex
                                                    ? `${Math.max(0, Math.min(100, segmentProgress * 100))}%`
                                                    : '0%',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatWeDoAtRaks;