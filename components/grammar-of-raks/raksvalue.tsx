'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContainerLayout from '@/layout/ContainerLayout';

import img1 from '@/assets/home/campus-1.jpg';
import img2 from '@/assets/home/campus-2.jpg';
import img3 from '@/assets/home/campus-3.jpg';
import img4 from '@/assets/home/artstudio.jpg';
import img5 from '@/assets/home/labs.jpg';
import img6 from '@/assets/home/stack-1.jpg';
import img7 from '@/assets/home/stack-2.jpg';
import img8 from '@/assets/home/stack-3.jpg';
import img9 from '@/assets/home/cambridgeimg.jpg';
import img10 from '@/assets/home/national-curriculamimg.jpg';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const sectionsData = [
    {
        title: "The 3 Ps: People, Places, Practices",
        cards: [
            { id: "people", title: "People", desc: "Children, Educators, And Families Together Shape The RAKS Community.", bg: img1 },
            { id: "places", title: "Places", desc: "Spaces That Inspire Trust, Connection, Curiosity, And Calm.", bg: img2 },
            { id: "practices", title: "Practices", desc: "Meaningful And Intentional Approaches Driven By Choice And Shared Agency.", bg: img3 },
        ],
    },
    {
        title: "The 3 Rs: Rituals, Routines, Rhythms",
        cards: [
            { id: "rituals", title: "Rituals", desc: "Circle Time, Story Assemblies, And Community Gatherings To Celebrate Values, Belonging And Identity.", bg: img4 },
            { id: "routines", title: "Routines", desc: "Clear, Predictable Habits — Like Self-Care And Rest Cycles That Cultivate Calm And Focus.", bg: img5 },
            { id: "rhythms", title: "Rhythms", desc: "The Natural Flow Of Time, Learning And Play That Align With Children's Evolving Needs.", bg: img6 },
        ],
    },
    {
        title: "The 4 Es: Empathy, Ethics, Excellence, Evolution",
        cards: [
            { id: "empathy", title: "Empathy", desc: "Learning Is Built On Care, Connection, And Emotional Literacy.", bg: img7 },
            { id: "ethics", title: "Ethics", desc: "Integrity, Fairness, And Responsibility Guide Every Choice.", bg: img8 },
            { id: "excellence", title: "Excellence", desc: "Striving For The Highest Standards While Valuing People And Purpose.", bg: img9 },
            { id: "evolution", title: "Evolution", desc: "Learning Is Dynamic, Reflective, And Continuously Growing.", bg: img10 },
        ],
    },
];

const RaksValue = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState<(number | null)[]>(sectionsData.map(() => null));

    const onCardHover = (sectionIdx: number, cardIdx: number | null) => {
        setHovered(prev => prev.map((v, i) => (i === sectionIdx ? cardIdx : v)));
    };

    useGSAP(() => {
        if (!outerRef.current) return;

        const panels = gsap.utils.toArray<HTMLElement>('.raks-panel');
        const total = panels.length;

        // Helper: only the active panel receives pointer-events
        const setActive = (idx: number) => {
            panels.forEach((p, j) => {
                p.style.pointerEvents = j === idx ? 'auto' : 'none';
            });
        };

        // Panel 0 = bottom (always visible as base), panels stack upward
        panels.forEach((panel, i) => {
            gsap.set(panel, {
                autoAlpha: i === 0 ? 1 : 0,
                zIndex: i,
            });
        });
        setActive(0);

        // Fade IN panel[i+1] on top of panel[i] + switch pointer-events
        for (let i = 0; i < total - 1; i++) {
            gsap.fromTo(panels[i + 1],
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: outerRef.current,
                        start: () => `top+=${(i + 0.9) * window.innerHeight} top`,
                        end: () => `top+=${(i + 1) * window.innerHeight} top`,
                        scrub: true,
                        onEnter: () => setActive(i + 1),
                        onLeaveBack: () => setActive(i),
                    },
                }
            );
        }

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, { scope: outerRef });

    return (
        <>
            {/* Title section — normal flow, scrolls away before panels */}
            <section className="w-full bg-white py-10 md:py-[20]">
                <ContainerLayout>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 tracking-tight">
                        <span className="font-ppe font-light italic text-[#000086]">RAKS</span> Values
                    </h2>
                    <p className="text-base md:text-xl lg:text-2xl text-black max-w-5xl leading-[1.2]">
                        We organise our philosophy around the 3 Ps, 3 Rs, and 4 Es, frameworks that keep
                        learning future-ready, meaningful, and active.
                    </p>
                </ContainerLayout>
            </section>

            {/* Full-screen scroll panels */}
            <div
                ref={outerRef}
                style={{ height: `${(sectionsData.length + 1) * 100}vh` }}
                className="relative w-full"
            >
                <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
                {sectionsData.map((section, sIdx) => (
                    <div key={sIdx} className="raks-panel absolute inset-0">

                        {/* Background images */}
                        {section.cards.map((card, cIdx) => {
                            const active = hovered[sIdx] === cIdx || (hovered[sIdx] === null && cIdx === 0);
                            return (
                                <Image
                                    key={card.id}
                                    src={card.bg}
                                    alt={card.title}
                                    fill
                                    className={`object-cover transition-opacity duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ zIndex: active ? 1 : 0 }}
                                    placeholder="blur"
                                />
                            );
                        })}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" style={{ zIndex: 2 }} />

                        {/* Section title */}
                        <div className="absolute top-8 left-4 md:top-20 md:left-[2vw] px-4" style={{ zIndex: 3 }}>
                            <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] text-white font-normal tracking-wide">
                                <span className="font-ppe font-light italic">{section.title.split(':')[0]}:</span>
                                {section.title.split(':')[1]}
                            </h3>
                        </div>

                        {/* Cards strip — pinned to bottom, grows vertically on hover */}
                        <div className="absolute bottom-0 left-0 w-full flex items-end" style={{ zIndex: 3 }}>
                            {section.cards.map((card, cIdx) => {
                                const isHovered = hovered[sIdx] === cIdx;
                                return (
                                    <div
                                        key={card.id}
                                        onMouseEnter={() => onCardHover(sIdx, cIdx)}
                                        onMouseLeave={() => onCardHover(sIdx, null)}
                                        className="flex-1 flex flex-col justify-end p-4 md:p-8 border-r border-t border-[#ffffff40] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden"
                                        style={{
                                            height: isHovered ? '50vh' : '35vh',
                                            backgroundColor: isHovered ? 'rgba(40,40,40,0.6)' : 'rgba(0,0,0,0.2)',
                                            backdropFilter: isHovered ? 'blur(12px)' : 'blur(0px)',
                                            WebkitBackdropFilter: isHovered ? 'blur(12px)' : 'blur(0px)',
                                        }}
                                    >
                                        <h4 className="text-2xl md:text-3xl lg:text-[2.5rem] text-white font-ppe font-light italic mb-2 md:mb-4">
                                            {card.title}
                                        </h4>
                                        <p className={`text-white text-xs md:text-base lg:text-lg leading-[1.2] transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}`}>
                                            {card.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
};

export default RaksValue;