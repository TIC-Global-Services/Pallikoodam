'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import Philosophy from '@/assets/home/Philosophy.png'
import framework from '@/assets/home/Framework.png'
import howwelearn from '@/assets/home/How_Learning_Happens.jpg'
import learning from '@/assets/home/Learning_Spaces.jpg'
import programmes from '@/assets/home/Programmes.png'
import dayinclass from '@/assets/home/A_Day_in_Early_Years.jpg'
import assessment from '@/assets/home/cambridge_Assessment.jpg'
import educators from '@/assets/home/Educators.jpg'
import parentpartnership from '@/assets/home/Parent_Partnership.png'
import transition from '@/assets/home/Transition.jpg'
import campuses from '@/assets/home/Campuses.png'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CambridgeEarly = () => {
    const swiperRef = useRef<SwiperType | null>(null)

    const data = [
        {
            title: "Philosophy",
            description: "Every child is capable, curious, and full of potential. At RAKS, children think, explore, question, express, and connect with the world around them.",
            img: Philosophy
        },
        {
            title: "Framework",
            description: "Rooted in the Cambridge Early Years framework, we focus on communication, physical development, personal and social growth, emotional wellbeing, and early thinking, building strong foundations for lifelong learning.",
            img: framework
        },
        {
            title: "How Learning Happens",
            description: "Learning is inquiry-led and responsive. Through play and project-based experiences, children explore their ideas. Documentation makes learning visible, and the environment acts as a third teacher.",
            img: howwelearn
        },
        {
            title: "Learning Spaces",
            description: "Thoughtfully designed spaces inspire exploration, atelier for expression, loose parts for imagination, sensory and water play for discovery, and outdoor environments that connect children with nature.",
            img: learning
        },
        {
            title: "Programmes",
            description: "Art explorations, storytelling, and child-led projects nurture creativity and communication. Strong parent engagement deepens the home–school connection.",
            img: programmes
        },
        {
            title: "A Day in Early Years",
            description: "A balanced rhythm of exploration, interaction, outdoor play, and reflection, honouring each child’s pace.",
            img: dayinclass
        },
        {
            title: "Assessment",
            description: "Ongoing, observation-based assessment through portfolios and documentation. No formal testing.",
            img: assessment
        },
        {
            title: "Educators",
            description: "Facilitators and co-learners who guide, observe, and nurture each child in a safe, inspiring environment.",
            img: educators
        },
        {
            title: "Parent Partnership",
            description: "A strong, collaborative partnership with parents supports every child's journey.",
            img: parentpartnership
        },
        {
            title: "Transition",
            description: "A seamless bridge into Primary Years, building confidence, independence, and readiness for what lies ahead.",
            img: transition
        },
        {
            title: "Campuses",
            description: "Available across two campuses, RAKS Codissia Campus and City Campus VOC Campus.",
            img: campuses
        }
    ];

    useEffect(() => {
        if (swiperRef.current) {
            setTimeout(() => {
                swiperRef.current?.update();
            }, 100);
        }
    }, []);

    const [startAnimation, setStartAnimation] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={sectionRef} className='bg-white py-12 md:py-10 min-h-screen overflow-hidden relative'>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused !important;
        }
      `}} />

            <div className='flex flex-col gap-6 px-[3%] md:px-[3%] mb-12 relative z-10'>
                <h1 className='text-[36px] md:text-[56px] font-medium tracking-tighter leading-tight'>
                    Cambridge <span className='font-ppe italic font-light'>Early years</span>
                </h1>
                <p className='text-[16px] md:text-[20px] font-medium leading-relaxed max-w-3xl text-gray-800'>
                    Inquiry-led, child-centred learning aligned with the Cambridge Early Years framework, inspired by the Reggio Emilia approach.
                </p>
                <div>
                    <button className='bg-[#000086] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-900 transition-colors'>
                        Enquire Now
                    </button>
                </div>
            </div>

            <div className="relative z-10">
                {/* Desktop Marquee Layout */}
                <div className="hidden md:flex w-full overflow-hidden relative marquee-container">
                    <div className="flex w-max animate-marquee gap-4 px-4">

                        {[...data, ...data].map((item, index) => (
                            <div
                                key={index}
                                className="w-[300px] lg:w-[20vw] min-h-[50dvh] bg-[#EAEAEA] rounded-2xl p-6 md:p-8 flex flex-col flex-shrink-0 relative overflow-hidden group"
                            >
                                <Image
                                    width={300}
                                    height={200}
                                    src={item.img.src || item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 z-0" />
                                <div className="relative z-10 flex flex-col justify-end h-full">
                                    <h3 className="font-ppe italic font-light text-[28px] mb-4 text-white drop-shadow-md">{item.title}</h3>
                                    <p className="text-sm md:text-base leading-snug text-white font-medium drop-shadow-md">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Slider Layout */}
                <div className="md:hidden px-[3%] pb-10">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                        slidesPerView={1.2}
                        spaceBetween={16}
                        className="w-full"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full min-h-[55dvh] bg-[#EAEAEA] rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group">
                                    <div
                                        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${item.img?.src || item.img})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 z-0" />
                                    <div className="relative z-10 flex flex-col h-full">
                                        <h3 className="font-ppe italic font-light text-[24px] mb-4 text-white drop-shadow-md">{item.title}</h3>
                                        <p className="text-base leading-relaxed text-white font-medium drop-shadow-md">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center justify-end gap-4 mt-6">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors z-20 relative"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors z-20 relative"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Logo */}
            <div className="absolute bottom-[13%] md:bottom-[0%] left-0 w-full overflow-hidden pointer-events-none z-0 flex justify-center opacity-80">
                <img
                    src="/raks_lil_pallikoodam_log.png"
                    alt="Lil Pallikkoodam"
                    className="w-[95%] md:w-[60%] object-contain opacity-90"
                />
            </div>
        </div>
    )
}

export default CambridgeEarly