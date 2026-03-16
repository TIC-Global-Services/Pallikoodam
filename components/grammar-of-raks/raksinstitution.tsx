'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import ContainerLayout from '@/layout/ContainerLayout';

import earlyyears from '@/assets/grammar-of-raks/early-years.jpg';

const institutionData = [
    {
        number: "01",
        title: "RAKS Early Years",
        description: "Rooted In The Reggio Emilia Philosophy And Affiliated With The Cambridge Early Years Programme, Offering Inquiry-Led, Child-Centred Early Learning.",
        image: earlyyears,
    },
    {
        number: "02",
        title: "RAKS Pallikkoodam",
        description: "A CBSE-Affiliated School Following The National Curriculum, Focused On Conceptual Understanding, Learner Agency, And Holistic Development.",
        image: earlyyears, // Replace with actual image
    },
    {
        number: "03",
        title: "RAKS Pallikkoodam – \n School of Excellence",
        description: "Cambridge International school offering globally aligned academic pathways",
        image: earlyyears, // Replace with actual image
    },
    {
        number: "04",
        title: "RAKS Academy",
        description: "A vibrant sports ecosystem building skill, discipline, and character.",
        image: earlyyears, // Replace with actual image
    },
    {
        number: "05",
        title: "RAKS Visionary Hub",
        description: "A centre for innovation, mentor development, and future-focused education.",
        image: earlyyears, // Replace with actual image
    },
];

const RaksInstitution = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = institutionData.length;

    // Mobile state
    const [isMobile, setIsMobile] = useState(false);
    const [mobileIndex, setMobileIndex] = useState(0);
    const touchStartX = useRef(0);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) setMobileIndex(prev => Math.min(prev + 1, total - 1));
            else setMobileIndex(prev => Math.max(prev - 1, 0));
        }
    };

    useEffect(() => {
        if (isMobile) return; // only for desktop

        const observers: IntersectionObserver[] = [];

        itemRefs.current.forEach((el, idx) => {
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(idx);
                    }
                },
                {
                    root: null,
                    rootMargin: '-40% 0px -40% 0px',
                    threshold: 0,
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [isMobile]);

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <ContainerLayout>
                {/* Section heading */}
                <div className="mb-10 md:mb-24 max-w-6xl mx-auto">
                    <p className="text-lg md:text-2xl lg:text-[2rem] font-regular text-center text-black leading-[1.4]">
                        <span className="font-ppe font-light italic">RAKS Institutions</span>{' '}
                        brings together multiple learning pathways under a<br className='hidden md:block'/> shared commitment to purposeful education and human flourishing.
                    </p>
                </div>

                {/* ============ MOBILE CAROUSEL ============ */}
                <div
                    className="md:hidden relative"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {institutionData.map((item, idx) => (
                        <div
                            key={idx}
                            className="transition-opacity duration-500"
                            style={{ display: idx === mobileIndex ? 'block' : 'none' }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-[56vw] rounded-2xl overflow-hidden mb-6">
                                <Image src={item.image} alt={item.title} fill className="object-cover" placeholder="blur" />
                            </div>

                            {/* Number */}
                            <p className="text-center text-4xl font-ppe font-light tracking-tight mb-2">
                                {item.number}<span className="text-3xl">/{total}</span>
                            </p>

                            {/* Title */}
                            <h3 className="text-center text-2xl font-ppe font-light italic text-black mb-4 whitespace-pre-line">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-center text-xl font-medium leading-[1.2] text-gray-700 max-w-xs mx-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {institutionData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMobileIndex(idx)}
                                style={{
                                    width: idx === mobileIndex ? '20px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    backgroundColor: idx === mobileIndex ? '#000086' : '#d1d5db',
                                    transition: 'all 0.3s',
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div ref={containerRef} className="hidden md:flex gap-12 lg:gap-20 relative">

                    {/* Left column — scrollable text items */}
                    <div className="w-full lg:w-1/2">
                        {institutionData.map((item, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    ref={(el) => { itemRefs.current[idx] = el; }}
                                    className={`py-12 md:py-16 transition-opacity duration-500 ${
                                        isActive ? 'opacity-100' : 'opacity-30'
                                    } ${idx < total - 1 ? 'border-b border-gray-200' : ''}`}
                                >
                                    <div className="flex gap-6 md:gap-10">
                                        {/* Number */}
                                        <div className="shrink-0">
                                            <span className="text-3xl md:text-4xl lg:text-5xl whitespace-pre-line font-ppe font-light tracking-tight">
                                                {item.number}
                                                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]">/{total}</span>
                                            </span>
                                        </div>

                                        {/* Text content */}
                                        <div>
                                            <h3 className="text-xl md:text-2xl lg:text-[2rem] whitespace-pre-line font-ppe font-light italic text-black mb-3 md:mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm md:text-base lg:text-[1.5rem] font-[500] leading-[1.3] max-w-lg">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right column — sticky image */}
                    <div className="hidden lg:block w-[40%]">
                        <div className="sticky top-[20vh] h-[50vh]">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                {institutionData.map((item, idx) => (
                                    <Image
                                        key={idx}
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={`object-cover transition-opacity duration-700 ease-in-out ${
                                            activeIndex === idx ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        placeholder="blur"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    );
};

export default RaksInstitution;