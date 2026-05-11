"use client";
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Plus } from 'lucide-react'

import empowering1 from '@/assets/learningatraks/empowerimg-1.jpg'
import empowering2 from '@/assets/learningatraks/empowerimg-2.jpg'
import empowering3 from '@/assets/learningatraks/empowerimg-3.jpg'
import empowering4 from '@/assets/learningatraks/empowerimg-4.jpg'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const Empowering = () => {
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
    const containerRef = useRef<HTMLElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    const data = [
        {
            title: <>Cambridge <span className='font-ppe italic font-normal'>Early years</span></>,
            description: "Inspired by the Reggio Emilia approach, children learn through play, inquiry, and exploration in environments designed as the “third teacher”",
            image: empowering1
        }, {
            title: <><span className='font-ppe italic font-normal'>Primary</span> School</>,
            description: "Learners build strong foundations in literacy, numeracy, and thinking through active, inquiry-driven learning",
            image: empowering2
        }, {
            title: <><span className='font-ppe italic font-normal'>Middle</span> School</>,
            description: "Learners develop agency and independent thinking through problem-based learning, research, and interdisciplinary exploration",
            image: empowering3
        }, {
            title: <><span className='font-ppe italic font-normal'>Senior Secondary</span> School</>,
            description: "Personalised, future-focused learning supports informed academic choices and meaningful real-world pathways.",
            image: empowering4
        }
    ]

    useGSAP(() => {
         
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top bottom", 
                end: "bottom bottom", 
                scrub: true,
            }
        });

        const duration = 2;  
        const isMobile = window.innerWidth < 768;
        const staggerDelay = isMobile ? 0.8 : 0.4; 

        cardsRef.current.forEach((card, index) => {
            const startTimeline = index * staggerDelay;

 
            tl.fromTo(card,
                {
                    x: "100vw",       
                    y: 400,            
                    rotation: 15,     
                    opacity: 1,        
                    scale: 0.2         
                },
                {
                    x: "-100vw",      
                    ease: "none",      
                    duration: duration
                },
                startTimeline
            );

           
            tl.to(card, {
                y: 0,
                rotation: 0,
                opacity: 1,            
                scale: 1,              
                ease: "sine.out",      
                duration: duration / 2
            }, startTimeline);

           
            tl.to(card, {
                y: 400,                
                rotation: -15,         
                opacity: 1,            
                scale: 0.2,            
                ease: "sine.in",       
                duration: duration / 2
            }, startTimeline + duration / 2);
        });

    }, { scope: containerRef });

    return (
        <div className="relative w-full z-10 bg-white" style={{ marginBottom: "-100vh" }}>
            <section ref={containerRef} className="sticky top-0 w-full h-dvh lg:h-screen overflow-hidden pt-10 flex flex-col items-center justify-center pb-10">
              
                <div className="text-center  z-10 w-full px-4 shrink-0">
                    <h2 className="text-[32px] mb-3 md:text-[44px] lg:text-[44px] text-[#2C313E] leading-[1.1] font-medium tracking-tight">
                        Cambridge International  <span className="font-ppe italic font-normal">Curriculum</span>
                    </h2>
                    <p className="max-w-4xl mx-auto text-base md:text-2xl lg:text-[1.125rem] leading-[1.2]">The Cambridge International Curriculum at RAKS nurtures the whole child, fostering curiosity, confidence, and independent thinking. Learning is active and experiential, enabling learners to explore, collaborate, and grow with purpose.</p>
                </div>

                
                <div className="w-full px-4 -translate-y-30 relative flex justify-center items-center flex-1 min-h-0 z-10">
                    
                    <div className="relative w-[250px] md:w-[280px] lg:w-[433px] h-[360px] md:h-[420px] lg:h-[560px]">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => { cardsRef.current[index] = el }}
                                className={`empowering-card absolute inset-0 shrink-0 rounded-[12px] md:rounded-[16px] overflow-visible group cursor-pointer transition-colors duration-300 ${activeTooltip === index ? 'z-50' : 'hover:z-40 md:hover:z-50'}`}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 280px, 433px"
                                    className="object-cover rounded-[10px] md:rounded-[13px]"
                                />


                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-b-[10px] md:rounded-b-[13px]" />


                                <div className="absolute bottom-6 md:bottom-8 left-0 right-0 px-2 text-center pointer-events-none">
                                    <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>

                                
                                <div
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 md:group-hover:z-30 border rounded-full border-dashed p-1 border-white"
                                    onClick={(e) => {
                                        if (window.innerWidth < 768) {
                                            e.stopPropagation();
                                            setActiveTooltip(activeTooltip === index ? null : index);
                                        }
                                    }}
                                >
                                     
                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#001D6E] text-white flex items-center justify-center shadow-lg border-[1.5px] border-white/30 md:group-hover:bg-white md:group-hover:text-black transition-colors duration-300 ${activeTooltip === index ? 'bg-white text-black' : ''}`}>
                                        <Plus size={20} className={`text-white md:group-hover:text-black ${activeTooltip === index ? 'text-black!' : ''}`} />
                                    </div>

                                     
                                    <div className={`absolute left-10 -translate-y-1/2 ml-4 w-[220px] md:w-[260px] bg-white   p-4 md:p-5 shadow-2xl translate-x-4 pointer-events-none transition-all duration-300 rounded-[8px] md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:pointer-events-auto ${activeTooltip === index ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0'}`}>
                                        <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#2C313E] font-medium font-sans">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
         
            <div ref={triggerRef} className="w-full h-[300vh]" />
            
            <div className="w-full h-screen" />
        </div>
    )
}

export default Empowering