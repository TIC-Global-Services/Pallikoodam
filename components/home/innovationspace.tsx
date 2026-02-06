'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import innovation1 from '@/assets/home/innovation-1.jpg'
import innovation2 from '@/assets/home/innovation-2.jpg'
import innovation3 from '@/assets/home/innovation-3.jpg'
import ContainerLayout from '@/layout/ContainerLayout'

const cards = [
    {
        id: 1,
        title: "The Learning Wall",
        italic: "SPACE",
        italicPosition: "after",
        description: "A dynamic storytelling corridor where learning grows... literally on the walls.\n\nDesign, documentation, and dialogue come together to make thinking visible reminding learners that their process is as powerful as their product.",
        image: innovation1,
        colSpan: "md:col-span-3"
    },
    {
        id: 2,
        title: "Design & Technology",
        italic: "Labs",
        italicPosition: "after",
        description: "Here we don't imagine the future, we prototype it.\n\nLearners explore tools, materials, mechanisms, and real-world challenges transforming concepts through guided curiosity and fearless problem-solving.",
        image: innovation2,
        colSpan: "md:col-span-3"
    },
    {
        id: 3,
        title: "Studios",
        italic: "Art",
        italicPosition: "before",
        description: "A sanctuary where colours, textures, and emotions breathe where learners experiment, express, and evolve understanding that art is not just a subject, but a language of identity, joy, and discovery.",
        image: innovation3,
        colSpan: "md:col-span-2"
    },
    {
        id: 4,
        title: "Maker's",
        italic: "Space",
        italicPosition: "after",
        description: "A playground of innovation where hands lead the mind.\n\nFrom tinkering to building, this is where ideas are tested, stretched, rebuilt, and celebrated turning creativity into capability.",
        image: innovation3,
        colSpan: "md:col-span-2"
    },
    {
        id: 5,
        title: "Labs",
        italic: "",
        italicPosition: "none",
        description: "From the composite lab, the ICT lab, chemistry to biology to physics, our labs are designed to nurture precision, curiosity, and the thrill of uncovering how the world works.",
        image: innovation3,
        colSpan: "md:col-span-2"
    }
]

const Innovationspace = () => {
    const highlightRef = useRef(null)
    const containerRef = useRef(null)
    const wrapperRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.fromTo(highlightRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1.3,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (

        <div ref={containerRef} className='w-full bg-black py-20 px-5 md:px-10 lg:px-20 text-white font-sans'>
            {/* Header */}
            <ContainerLayout>
                <div className='flex justify-center items-center mb-16'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-medium text-center leading-tight'>
                        Innovative Spaces for <span className='font-serif italic font-light'>Curious</span> <br className='hidden md:block' />
                        <span ref={wrapperRef} className='relative inline-block px-2 ml-2'>
                            <span
                                ref={highlightRef}
                                className='absolute top-3 -left-10 bg-[#0045FF] -rotate-6 transform h-full w-full z-10 block origin-left scale-x-90'
                            ></span>
                            <span className='relative z-20'>Minds</span>
                        </span>
                    </h2>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`${card.colSpan} bg-white text-black rounded-[30px] overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[500px] group hover:scale-105 transition-all duration-300`}
                        >
                            <div className='p-8 md:p-10 h-[50%]'>
                                <h3 className='text-3xl md:text-4xl font-medium  leading-[15px] tracking-tight'>
                                    {card.italicPosition === 'before' && (
                                        <>
                                            <span className='font-ppe italic font-light'>{card.italic}</span>{' '}
                                        </>
                                    )}
                                    {card.title}
                                    {card.italicPosition === 'after' && (
                                        <>
                                            {' '}<span className='font-serif italic font-light'>{card.italic}</span>
                                        </>
                                    )}
                                </h3>

                                <div className='space-y-0 mt-5'>

                                    {card.description.split('\n\n').map((paragraph, idx) => (
                                        <div key={idx} className='relative pl-4'>
                                            <div className="w-0.5 h-full bg-[#0045FF] absolute left-0 top-0"></div>
                                            <p className='text-sm md:text-base leading-relaxed text-gray-800 font-medium'>
                                                {paragraph}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full h-[50%] relative mt-auto'>
                                <Image
                                    src={card.image}
                                    alt={`${card.title} ${card.italic}`}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </ContainerLayout>
        </div>

    )
}

export default Innovationspace