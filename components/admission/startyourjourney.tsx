"use client"
import React, { useEffect, useRef } from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import enquiryImg from '@/assets/admission/enquiry.jpg'
import interactImg from '@/assets/admission/intract.jpg'
import assessImg from '@/assets/admission/asses.jpg'
import welcomeImg from '@/assets/admission/welcome.jpg'

const defaultDesc1_1 = "We understand that choosing the right school is an important decision for every family. Our enquiry process is designed to be simple, transparent, and supportive, ensuring that all your questions are answered with clarity."
const defaultDesc1_2 = "From your first interaction with us, our team is here to guide you through the next steps, providing the information and assistance you need with care and responsiveness."
const defaultDesc2 = "We encourage parents to reach out to us through calls, email, or scheduled campus visits to gain a deeper understanding of our learning environment. Our team is dedicated to providing timely responses and personalized support, ensuring that every interaction reflects our commitment to your child's growth, safety, and academic excellence."

const stages = [
    {
        title: 'Enquire',
        img: enquiryImg,
        desc1_1: "Reach out to us and tell us a little about your child, we’ll understand their needs, guide you through the next steps, and help you get started with the right support.",
        // desc1_2: defaultDesc1_2,
        // desc2: defaultDesc2,
    },
    {
        title: 'Interact',
        img: interactImg,
        desc1_1: "Meet our team and experience the RAKS approach to learning, where thoughtful guidance, curiosity, and a nurturing environment come together to help every child grow with confidence.",
        // desc1_2: defaultDesc1_2,
        // desc2: defaultDesc2,
    },
    {
        title: 'Assess',
        img: assessImg,
        desc1_1: "We take the time to truly understand your child, their strengths, readiness, and unique learning needs, so every step forward feels natural and well-supported.",
        // desc1_2: defaultDesc1_2,
        // desc2: defaultDesc2,
    },
    {
        title: 'Welcome',
        img: welcomeImg,
        desc1_1: "Join our community and begin a journey where learning is meaningful, purposeful, and designed to truly make a difference in your child’s growth.",
        // desc1_2: defaultDesc1_2,
        // desc2: defaultDesc2,
    }
]

const StartYourJourney = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current) return;

        let ctx = gsap.context(() => {
            const cards = cardsRef.current;

            ScrollTrigger.matchMedia({
                // All devices
                "all": function () {

                    let headerTop = 0;
                    let gap = 0;

                    // This matchenos the global navbar height plus padding calculations
                    if (window.innerWidth >= 1280) { // xl
                        headerTop = 30;
                        gap = 110;
                    } else if (window.innerWidth >= 1024) { // lg
                        headerTop = 30;
                        gap = 100;
                    } else { // md
                        headerTop = 30;
                        gap = 85;
                    }

                    // Base offset: Pin directly under the main global navbar
                    let baseOffset = headerTop;

                    cards.forEach((card, i) => {
                        if (!card) return;

                        let topOffset = baseOffset + (i * gap);

                        ScrollTrigger.create({
                            trigger: card,
                            start: `top ${topOffset}px`,
                            endTrigger: containerRef.current,
                            // Keep the cards securely pinned until the container scrolls out of the viewport
                            end: `bottom top`,
                            pin: true,
                            pinSpacing: false,
                        });
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <ContainerLayout>
            <div ref={containerRef} className="relative z-0 w-full pb-16 md:pb-[10%]">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-10 mb-12 md:mb-16 lg:mb-20">

                    {/* Left Column (4 cols) */}
                    <div className="md:col-span-4 lg:col-span-4 flex jus items-start">
                        <h2 className="text-[2.25rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-medium text-[#111] leading-tight">
                            <span className="font-ppe italic font-light">Admission</span> Process
                        </h2>
                    </div>

                    {/* Right Column (8 cols) */}
                    <div className="md:col-span-8 lg:col-span-8 flex flex-col items-start xl:pl-[10%] gap-4 lg:gap-6">
                        <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium leading-[1.1] text-[#111] max-w-2xl">
                            A Step-by-Step 4-Stage<br />
                            Admission Process Guide
                        </h2>

                        <button className="bg-[#000080] text-white px-6 lg:px-8 py-3 rounded font-medium text-[0.9rem] hover:bg-blue-900 transition-colors mt-2">
                            Enquire Now
                        </button>
                    </div>

                </div>
                {/* Stacking Cards Section */}
                <div className="relative z-10 w-full mt-4 md:mt-0">
                    {stages.map((stage, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className={`bg-white border-t border-gray-300 pt-6 md:pt-6 xl:pt-8 pb-8 md:pb-10 shadow-[0_-5px_10px_-10px_rgba(0,0,0,0.1)]`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 w-full h-full">
                                {/* Col 1 */}
                                <div className="md:col-span-4 flex flex-col h-full">
                                    <h3 className="text-[2.5rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.5rem] font-ppe font-light italic leading-none text-[#111] mb-6 xl:mb-8">
                                        {stage.title}
                                    </h3>
                                    <p className="text-[#333] text-[1rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.5rem] leading-relaxed xl:leading-snug max-w-sm">
                                        {stage.desc1_1}
                                    </p>
                                    <div className="flex flex-col justify-center gap-4 xl:gap-6 md:mt-auto">

                                        {/* <p className="text-[#333] text-[1rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1rem] leading-relaxed xl:leading-snug max-w-sm">
                                            {stage.desc1_2}
                                        </p> */}
                                    </div>
                                </div>

                                {/* Col 2 */}
                                <div className="md:col-span-4 flex flex-col h-full">
                                    <div className="flex flex-col gap-4 mt-2 md:mt-auto">
                                        {/* <p className="text-[#333] text-[1rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1rem] leading-relaxed xl:leading-snug max-w-sm">
                                            {stage.desc2}
                                        </p> */}
                                    </div>
                                </div>

                                {/* Col 3 */}
                                <div className="md:col-span-4 w-full relative mt-8 md:mt-0 aspect-video md:aspect-[2/2] lg:aspect-[2/2] overflow-hidden">
                                    <Image
                                        src={stage.img}
                                        alt={stage.title}
                                        fill
                                        className="object-cover rounded-md lg:rounded-lg"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </ContainerLayout>
    )
}

export default StartYourJourney