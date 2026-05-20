'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContainerLayout from '@/layout/ContainerLayout';

import img1 from '@/assets/grammar-of-raks/People.png';
import img2 from '@/assets/grammar-of-raks/Places.png';
import img3 from '@/assets/grammar-of-raks/Purpose.png';
import img4 from '@/assets/grammar-of-raks/Routines.png';
import img5 from '@/assets/grammar-of-raks/Rituals.png';
import img6 from '@/assets/grammar-of-raks/Rhythm.png';
import img7 from '@/assets/grammar-of-raks/Empathy.png';
import img8 from '@/assets/grammar-of-raks/Ethics.png';
import img9 from '@/assets/grammar-of-raks/Excellence.png';
import img10 from '@/assets/grammar-of-raks/Evolution.png';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const sectionsData = [
    {
        title: "The 3 P's: People, Places, Practices",
        cards: [
            { id: "people", title: "People", desc: "Children, educators, and families together shape the RAKS community.", bg: img1 },
            { id: "places", title: "Places", desc: "Purpose-built spaces that invite exploration, creativity, and collaboration.", bg: img2 },
            { id: "practices", title: "Practices", desc: "Project-based and experiential learning empowers learners to solve real-world challenges.", bg: img3 },
        ],
    },
    {
        title: "The 3 R's: Rituals, Routines, Rhythms",
        cards: [
            { id: "rituals", title: "Rituals", desc: "Circle time, story assemblies, and community gatherings to celebrate values, belonging and identity.", bg: img4 },
            { id: "routines", title: "Routines", desc: "Clear, predictable habits like self-care and rest-cycles that cultivate calm and focus.", bg: img5 },
            { id: "rhythms", title: "Rhythms", desc: "The annual rhythmic beat of our calendar bringing the RAKS community together.", bg: img6 },
        ],
    },
    {
        title: "The 4 E's: Empathy, Ethics, Excellence, Evolution",
        cards: [
            { id: "empathy", title: "Empathy", desc: "Learning is built on care, connection, and emotional literacy.", bg: img7 },
            { id: "ethics", title: "Ethics", desc: "Integrity, fairness, and responsibility guide every choice.", bg: img8 },
            { id: "excellence", title: "Excellence", desc: "Striving for the highest standards while valuing people and purpose.", bg: img9 },
            { id: "evolution", title: "Evolution", desc: "Learning is dynamic, reflective, and continuously growing.", bg: img10 },
        ],
    },
];

const RaksValue = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState<(number | null)[]>(sectionsData.map(() => 0));
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

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
            <section className="w-full bg-white py-10 md:py-10 px-[5%]">
                {/* <ContainerLayout> */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 tracking-tight">
                        <span className="font-ppe font-light italic text-[#000086]">RAKS</span> Values
                    </h2>
                    <p className="text-base md:text-xl lg:text-lg text-black max-w-5xl leading-[1.2]">
                        We organise our philosophy around the 3 P's, 3 R's, and 4 E's framework that keeps
                        learning future-ready, meaningful, and active.
                    </p>
                {/* </ContainerLayout> */}
            </section>

            {/* Full-screen scroll panels */}
            <div
                ref={outerRef}
                style={{ height: `${(sectionsData.length + 1) * 100}vh` }}
                className="relative w-full"
            >
                <div className="sticky top-0  w-full h-screen  overflow-hidden bg-white">
                {sectionsData.map((section, sIdx) => (
                    <div key={sIdx} className="raks-panel absolute inset-0 bg-white">

                        {/* Background images */}
                        {section.cards.map((card, cIdx) => {
                            const active = hovered[sIdx] === cIdx || (hovered[sIdx] === null && cIdx === 0);
                            return (
                                <Image
                                    key={card.id}
                                    src={card.bg}
                                    alt={card.title}
                                    
                                    className={`object-contain bg-white absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[400px] transition-opacity duration-300 ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ zIndex: active ? 1 : 0 }}
                                    placeholder="blur"
                                />
                            );
                        })}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" style={{ zIndex: 2 }} />

                        {/* Section title */}
                        <div className="absolute top-8 left-4 md:top-10 md:left-[2vw] px-4" style={{ zIndex: 3 }}>
                            <h3 className="text-3xl md:text-5xl lg:text-[2.8rem] text-white font-normal tracking-tight">
                                <span className="font-ppe font-light italic">{section.title.split(':')[0]}:</span>
                                {section.title.split(':')[1]}
                            </h3>
                        </div>

                        {/* Cards strip — pinned to bottom */}
                        <div
                            className="absolute bottom-0 left-0 w-full"
                            style={{
                                zIndex: 3,
                                display: isMobile && section.cards.length === 4 ? 'grid' : 'flex',
                                gridTemplateColumns: isMobile && section.cards.length === 4 ? '1fr 1fr' : undefined,
                                alignItems: 'flex-end',
                            }}
                        >
                            {section.cards.map((card, cIdx) => {
                                const isHovered = hovered[sIdx] === cIdx;
                                return (
                                    <div
                                        key={card.id}
                                        onMouseEnter={() => !isMobile && onCardHover(sIdx, cIdx)}
                                        onMouseLeave={() => !isMobile && onCardHover(sIdx, 0)}
                                        onClick={() => isMobile && onCardHover(sIdx, cIdx)}
                                        className="flex flex-col justify-end p-4 md:p-8 border-r border-t border-[#ffffff40] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden"
                                        style={{
                                            flex: (!isMobile || section.cards.length === 4) ? '1' : (isHovered ? '2.5' : '1'),
                                            height: isMobile
                                                ? (section.cards.length === 4 ? '28vw' : '40vw')
                                                : (isHovered ? '36vh' : '35vh'),
                                            backgroundColor: isHovered ? 'rgba(40,40,40,0.6)' : 'rgba(0,0,0,0.2)',
                                            backdropFilter: isHovered ? 'blur(12px)' : 'blur(0px)',
                                            WebkitBackdropFilter: isHovered ? 'blur(12px)' : 'blur(0px)',
                                        }}
                                    >
                                        <h4 className="text-lg md:text-3xl lg:text-[2.5rem] text-white font-ppe font-light italic mb-1 md:mb-4">
                                            {card.title}
                                        </h4>
                                        <p className={`text-white text-xs md:text-base lg:text-lg leading-[1.2] transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : isMobile ? 'opacity-0 hidden' : 'opacity-80 translate-y-2'}`}>
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