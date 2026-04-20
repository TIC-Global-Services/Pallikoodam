"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import tennis from '@/assets/sports/tennis.png';
import basketball from '@/assets/sports/Basketball.jpg';
import football from '@/assets/sports/Football.png';
import Equestrian from '@/assets/sports/Equestrian.jpg';
import karata from '@/assets/sports/Karate.jpg';
import silambam from '@/assets/sports/silambam.png';
import pickleball from '@/assets/sports/Pickleball.jpg';
import yoga from '@/assets/sports/yoga.png';
import batmitton from '@/assets/sports/batmitton.png';

const SportsArena = () => {
    const data = [
        { image: tennis, title: "Tennis" },
        { image: batmitton, title: "Badminton" },
        { image: football, title: "Football" },
        { image: basketball, title: "Basketball" },
        { image: Equestrian, title: "Equestrian" },
        { image: karata, title: "Karate" },
        { image: silambam, title: "Silambam" },
        { image: yoga, title: "Yoga" },
        { image: pickleball, title: "Pickleball" },

    ];

    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let cleanups: (() => void)[] = [];

        let ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>('.arena-item');

            items.forEach((item) => {
                const imgContainer = item.querySelector('.img-container');
                const img = item.querySelector('img');

                if (imgContainer && img && !item.classList.contains('no-parallax')) {
                    gsap.fromTo(img,
                        { yPercent: -15, scale: 1.15 },
                        {
                            yPercent: 15,
                            scale: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: imgContainer,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true,
                            }
                        }
                    );
                }

                gsap.fromTo(item,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            const section = containerRef.current;
            if (section) {
                const getItems = () => Array.from(section.querySelectorAll('.arena-item'))
                    .filter(el => !el.classList.contains('no-parallax')) as HTMLElement[];

                const handleGlobalMouseMove = (e: MouseEvent) => {
                    const rect = section.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
                    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

                    const itemsToMove = getItems();
                    gsap.to(itemsToMove, {
                        x: x * 30,
                        y: y * 30,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                };

                const handleGlobalMouseLeave = () => {
                    const itemsToMove = getItems();
                    gsap.to(itemsToMove, { x: 0, y: 0, duration: 1.2, ease: "power3.out" });
                };

                section.addEventListener("mousemove", handleGlobalMouseMove);
                section.addEventListener("mouseleave", handleGlobalMouseLeave);

                cleanups.push(() => {
                    section.removeEventListener("mousemove", handleGlobalMouseMove);
                    section.removeEventListener("mouseleave", handleGlobalMouseLeave);
                });
            }
        }, containerRef);

        return () => {
            cleanups.forEach(cleanup => cleanup());
            ctx.revert();
        };
    }, []);

    const renderItem = (item: any, index: number, hideTitle: boolean = false, reduceOpacity: boolean = false) => {
        const isTextRight = index % 2 === 0;
        const isPickleball = item.title === 'Pickleball';

        return (
            <div key={index} className={`arena-item w-full flex justify-center cursor-pointer ${isPickleball ? 'no-parallax' : ''}`}>
                <div className={`relative flex items-center flex-row w-full ${isPickleball ? 'max-w-[350px] sm:max-w-[460px] md:max-w-[520px]' : 'max-w-[280px] sm:max-w-[340px] md:max-w-[450px]'}`}>

                    {!isTextRight && !hideTitle && (
                        <h3
                            id={isPickleball ? 'sports-pickleball-text' : undefined}
                            className={`font-ppe italic font-normal text-base md:text-2xl text-black mr-2 md:mr-6 whitespace-nowrap ${isPickleball ? 'sports-pickleball-text' : ''}`}
                        >
                            {item.title}
                        </h3>
                    )}

                    <div className={`img-container relative flex-1 aspect-[4/6] overflow-hidden z-10 w-full rounded shadow-sm ${reduceOpacity ? 'opacity-40' : ''}`}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover pointer-events-none"
                        />
                    </div>

                    {isTextRight && !hideTitle && (
                        <h3
                            id={isPickleball ? 'sports-pickleball-text' : undefined}
                            className={`font-ppe italic font-normal text-base md:text-2xl text-black ml-2 md:ml-6 whitespace-nowrap ${isPickleball ? 'sports-pickleball-text' : ''}`}
                        >
                            {item.title}
                        </h3>
                    )}
                </div>
            </div>
        );
    };

    const renderStaticItem = (item: any, index: number) => {
        // Reduced opacity and no text, no parallax class
        return (
            <div key={index} className="w-full flex justify-end items-end translate-y-43 pointer-events-none">
                <div className="relative flex items-end flex-row w-full">
                    <div className="relative flex-1 -translate-x-[30%] -translate-y-[30%] aspect-[3/4] overflow-hidden z-10 w-full rounded shadow-sm opacity-40">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section ref={containerRef} className="w-full md:py-24 bg-white text-black relative z-20">
            <div className="px-4 md:px-8 text-center mb-16 md:mb-32">
                <h2 className="text-2xl md:text-[clamp(3.4rem,3vw,4rem)] font-medium mb-2">
                    International-Standard <span className="font-ppe italic font-normal">Sports Arenas</span>
                </h2>
                <p className="text-black text-sm md:text-[2rem] font-medium">
                    World-Class Facilities for Holistic Growth
                </p>
            </div>

            {/* Grid for normal items */}
            <div className="max-w-6xl mx-auto px-2 sm:px-8 md:px-16 flex flex-row gap-4 md:gap-8 pb-16">
                {/* Left Column (Even indices, excluding Pickleball) */}
                <div className="flex-1 flex flex-col gap-12 md:gap-48 mt-0">
                    {data.filter(item => item.title !== "Pickleball").map((item, index) => (index % 2 === 0 ? renderItem(item, index) : null))}
                </div>
                {/* Right Column (Odd indices, excluding Pickleball) */}
                <div className="flex-1 flex flex-col gap-12 md:gap-48 mt-20 md:mt-48">
                    {data.filter(item => item.title !== "Pickleball").map((item, index) => (index % 2 !== 0 ? renderItem(item, index) : null))}
                </div>
            </div>

            {/* Centered Pickleball Item */}
            <div className="w-full flex justify-center pb-32 pt-16">
                {data.find(item => item.title === "Pickleball") &&
                    renderItem(data.find(item => item.title === "Pickleball"), 0)}
            </div>
        </section>
    );
};

export default SportsArena;