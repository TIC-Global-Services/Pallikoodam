'use client'
import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ContainerLayout from '@/layout/ContainerLayout'

import image1 from '@/assets/carrer/who_we_lookingfor-1.jpg'
import image2 from '@/assets/carrer/who_we_lookingfor-2.jpg'
import image3 from '@/assets/carrer/who_we_lookingfor-3.jpg'
import image4 from '@/assets/carrer/who_we_lookingfor-4.jpg'

gsap.registerPlugin(ScrollTrigger)

interface Role {
    title: string;
    description: string;
    img: StaticImageData;
}

const ROLES: Role[] = [
    {
        title: "Early Years & Primary Educators",
        description: "They create joyful, inquiry-rich learning environments where curiosity is celebrated, questions are encouraged, and every learner feels safe, valued, and inspired to explore new ideas with confidence.",
        img: image1
    },
    {
        title: "Subject Specialists",
        description: "With depth of knowledge and a learner-centred approach, they design experiences that move beyond surface understanding, guiding students to connect concepts, think critically, and apply learning with clarity and purpose.",
        img: image2
    },
    {
        title: "Cambridge Curriculum Educators",
        description: "They balance rigour with relevance by maintaining high academic standards while ensuring learning remains meaningful and connected to real-world contexts.",
        img: image3
    },
    {
        title: "Co-curricular & Activity Teachers",
        description: "They inspire expression, teamwork, and wellbeing by creating spaces where every voice is heard, collaboration is valued, and individuality is respected.",
        img: image4
    }
]

const WhoWeLookingFor: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current) return;

        // Use GSAP's scoped selector to avoid excessive React refs
        const q = gsap.utils.selector(containerRef);
        const sliderElement = q('.roles-slider')[0] as HTMLDivElement;
        
        if (!sliderElement) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: () => `+=${window.innerWidth * 3}`, // Dynamic end for responsiveness
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true, // Recalculates on resize
            }
        });

        // 1. Initial Image scaling and intro text fade out
        tl.to(q('.image-wrapper'), {
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            marginTop: '0px',
            duration: 1,
            ease: 'power2.inOut'
        }, 0);

        tl.to(q('.intro-text'), {
            opacity: 0,
            y: -50,
            duration: 0.5,
            ease: 'power2.in'
        }, 0);

        // 2. Fade in the overlay
        tl.to(q('.overlay-content'), {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }, 0.8);

        // 3. Horizontal Pan for the titles
        tl.to(sliderElement, {
            x: () => -(sliderElement.scrollWidth - window.innerWidth), // Functional value for dynamic resizing
            duration: ROLES.length,
            ease: 'none'
        }, 1.2);

        const titles = q('.role-title');
        const images = q('.role-image');
        const descriptions = q('.role-desc');

        // Highlight active items and crossfade elements
        titles.forEach((title, i) => {
            // Highlight the current title
            tl.to(title, {
                color: 'white',
                opacity: 1,
                duration: 0.2,
            }, 1.2 + i - 0.2);

            // Fade in the image for this role
            tl.to(images[i], {
                opacity: 1,
                duration: 0.4,
            }, 1.2 + i - 0.2);

            // Fade in the description for this role
            tl.to(descriptions[i], {
                opacity: 1,
                duration: 0.3,
            }, 1.2 + i - 0.1);

            // Dim the current title and description when moving to the next
            if (i < titles.length - 1) {
                tl.to(title, {
                    color: 'rgba(255, 255, 255, 0.4)',
                    duration: 0.2,
                }, 1.2 + i + 0.8);

                tl.to(descriptions[i], {
                    opacity: 0,
                    duration: 0.3,
                }, 1.2 + i + 0.7);
                
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-center">

            {/* Intro Text */}
            <div className="intro-text absolute top-[8%] left-0 w-full text-center z-10 px-4 md:mb-5">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-regular tracking-tighter mb-2 md:mb-4">
                    Who We&apos;re <span className="font-ppe font-light italic">Looking For</span>
                </h2>
                <p className="text-base md:text-xl lg:text-lg leading-[1.3] font-normal">
                    Motivated educators ready <br className="hidden md:block" /> to inspire.
                </p>
            </div>

            {/* Image Layer */}
            <div className="image-wrapper relative z-0 w-[300px] h-[400px] md:w-[400px] md:h-[450px] rounded-[20px] overflow-hidden mt-[30vh]">
                {/* Default Background Image (First Role) */}
                <Image
                    src={image1}
                    alt="Who We Are Looking For"
                    fill
                    className="object-cover"
                    priority
                />
                
                {/* Crossfading Role Images */}
                {ROLES.map((role, idx) => (
                    <Image
                        key={`image-${idx}`}
                        src={role.img}
                        alt={role.title}
                        fill
                        className="role-image object-cover opacity-0"
                        priority={idx === 0}
                    />
                ))}
            </div>

            {/* Overlay Content Layer */}
            <div className="overlay-content absolute inset-0 bg-black/60 z-20 flex flex-col justify-center opacity-0 pointer-events-none">
                {/* Horizontal Slider (Titles) */}
                <div className="w-full relative py-10 mt-[-10vh]">
                    <div className="roles-slider flex flex-nowrap items-center gap-12 md:gap-24 px-[50vw] w-max whitespace-nowrap">
                        {ROLES.map((role, idx) => (
                            <p
                                key={`title-${idx}`}
                                className="role-title text-xl md:text-5xl lg:text-[64px] font-ppe italic font-light text-white/40 transition-colors"
                            >
                                {role.title}
                            </p>
                        ))}
                    </div>
                    {/* Divider Line */}
                    <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-white/30" />
                </div>

                {/* Description Container */}
                <ContainerLayout disablePaddingY className="mt-8 md:mt-16 text-white min-h-[150px]">
                    <div className="w-full md:w-3/4 lg:w-1/2 ml-auto relative h-[150px]">
                        {ROLES.map((role, idx) => (
                            <p
                                key={`desc-${idx}`}
                                className="role-desc absolute top-0 left-0 w-full text-lg md:text-lg leading-[1.3] font-light opacity-0"
                            >
                                {role.description}
                            </p>
                        ))}
                    </div>
                </ContainerLayout>

            </div>
        </div>
    )
}

export default WhoWeLookingFor