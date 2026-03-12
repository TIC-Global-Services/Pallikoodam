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
        title: "RAKS International",
        description: "A Cambridge-Affiliated International Programme Designed To Foster Global Perspectives, Critical Thinking, And Academic Excellence.",
        image: earlyyears, // Replace with actual image
    },
    {
        number: "04",
        title: "RAKS After School",
        description: "Extended Learning Programmes That Blend Sports, Arts, And Life Skills To Complement The School Day.",
        image: earlyyears, // Replace with actual image
    },
    {
        number: "05",
        title: "RAKS Community",
        description: "A Network Of Families, Educators, And Partners United By A Common Vision For Meaningful Education.",
        image: earlyyears, // Replace with actual image
    },
];

const RaksInstitution = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = institutionData.length;

    useEffect(() => {
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
    }, []);

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <ContainerLayout>
                {/* Section heading */}
                <div className="mb-16 md:mb-24 max-w-5xl mx-auto">
                    <p className="text-lg md:text-2xl lg:text-[1.75rem] text-center text-black leading-[1.4]">
                        <span className="font-ppe font-light italic">RAKS Institutions</span>{' '}
                        brings together multiple learning pathways under a shared commitment to purposeful education and human flourishing.
                    </p>
                </div>

                {/* Sticky scroll layout */}
                <div ref={containerRef} className="flex gap-12 lg:gap-20  relative">

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
                                            <span className="text-3xl md:text-4xl lg:text-5xl font-ppe font-light tracking-tight">
                                                {item.number}
                                                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]">/{total}</span>
                                            </span>
                                        </div>

                                        {/* Text content */}
                                        <div>
                                            <h3 className="text-xl md:text-2xl lg:text-[2rem] font-ppe font-light italic text-black mb-3 md:mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm md:text-base lg:text-[1.5rem] text-gray-600 leading-[1.5] max-w-md">
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