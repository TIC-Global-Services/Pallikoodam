"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import tennis from '@/assets/sports/Tennis.jpg';
import basketball from '@/assets/sports/Basketball.jpg';
import football from '@/assets/sports/Football.png';
import Equestrian from '@/assets/sports/Equestrian.jpg';
import karata from '@/assets/sports/Karate.jpg';
import silambam from '@/assets/sports/Silambam.jpg';
import pickleball from '@/assets/sports/Pickleball.jpg';
import yoga from '@/assets/sports/Yoga.jpg';
import batmitton from '@/assets/sports/Badminton.jpg';

const SportsArena = () => {
    const data = [
        { image: tennis, title: "Tennis" },
        { image: batmitton, title: "Batmitton" },
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

        let ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>('.arena-item');

            items.forEach((item) => {
                const imgContainer = item.querySelector('.img-container');
                const img = item.querySelector('img');

                if (imgContainer && img) {
                    // Inner image parallax
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

                // Fade Up Reveal for the whole item
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
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const renderItem = (item: any, index: number) => {
        // Even indices: text on right (image on left)
        // Odd indices: text on left (image on right)
        const isTextRight = index % 2 === 0;

        return (
            <div key={index} className="arena-item w-full flex justify-center cursor-pointer">
                <div className="relative flex items-center flex-row w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px]">

                    {!isTextRight && (
                        <h3 className="font-ppe italic font-normal text-xl md:text-2xl text-black mr-4 md:mr-6 whitespace-nowrap">
                            {item.title}
                        </h3>
                    )}

                    <div className="img-container relative flex-1 aspect-[4/5] overflow-hidden z-10 w-full rounded shadow-sm">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover pointer-events-none"
                        />
                    </div>

                    {isTextRight && (
                        <h3 className="font-ppe italic font-normal text-xl md:text-2xl text-black ml-4 md:ml-6 whitespace-nowrap">
                            {item.title}
                        </h3>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section ref={containerRef} className="w-full py-24 bg-white text-black overflow-hidden relative">
            <div className="max-w-360 mx-auto px-4 md:px-8 text-center mb-16 md:mb-32">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium mb-3">
                    International-Standard <span className="font-ppe italic font-normal">Sports Arenas</span>
                </h2>
                <p className="text-black text-sm md:text-base font-medium">
                    World-Class Facilities for Holistic Growth
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row gap-12 md:gap-8 pb-32">
                {/* Left Column (Even indices) */}
                <div className="flex-1 flex flex-col gap-24 md:gap-48 mt-0">
                    {data.map((item, index) => (index % 2 === 0 ? renderItem(item, index) : null))}
                </div>

                {/* Right Column (Odd indices) */}
                <div className="flex-1 flex flex-col gap-24 md:gap-48 mt-12 md:mt-48">
                    {data.map((item, index) => (index % 2 !== 0 ? renderItem(item, index) : null))}
                </div>
            </div>
        </section>
    );
};

export default SportsArena;