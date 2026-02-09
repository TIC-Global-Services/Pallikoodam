'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import innovation1 from '@/assets/home/innovation-1.jpg'
import innovation2 from '@/assets/home/innovation-2.jpg'
import innovation3 from '@/assets/home/innovation-3.jpg'
import effectsvg from '@/assets/home/scroll_effect.png'
import ContainerLayout from '@/layout/ContainerLayout'
import ScrollReveal from '../reuseable/effects/Scrollreveal'
import { span } from 'motion/react-client'
import LetterRevealWrapper from '../reuseable/texteffect/LetterRevealWrapper'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'

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
    const bubblesRef = useRef<HTMLDivElement[]>([]);
    const [bubbleCount, setBubbleCount] = React.useState(0);

    useEffect(() => {
        const calculateBubbles = () => {
            const width = window.innerWidth;
            const bubbleSize = width < 768 ? 60 : 120;
            const count = Math.ceil(width / bubbleSize);
            setBubbleCount(count);
        };

        calculateBubbles();
        window.addEventListener('resize', calculateBubbles);
        return () => window.removeEventListener('resize', calculateBubbles);
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            gsap.set(highlightRef.current, {
                scaleX: 0,
                transformOrigin: "left center"
            })

            gsap.to(highlightRef.current, {
                scaleX: 1.2,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 55%",
                    toggleActions: "play none none reverse"
                }
            })
            if (bubblesRef.current.length > 0) {
                gsap.set(bubblesRef.current, {
                    scaleY: 0,
                    transformOrigin: "bottom center"
                });

                gsap.to(bubblesRef.current, {
                    scaleY: 1,
                    stagger: {
                        each: 0.1,
                        from: "edges",
                        amount: 1.5
                    },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 100%",
                        end: "top 60%",
                        scrub: 1,
                        toggleActions: "play reverse play reverse"
                    }
                });
            }

        }, containerRef)

        return () => ctx.revert()
    }, [bubbleCount])



    return (
        <section className='relative bg-black mt-24' ref={containerRef}>
            {/* Scalloped Edge Container */}
            <div className="absolute top-0 left-0 w-full -translate-y-[97%] flex overflow-hidden pointer-events-none z-20 leading-0">
                {Array.from({ length: bubbleCount }).map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) bubblesRef.current[index] = el;
                        }}
                        className="bg-black rounded-t-full shrink-0"
                        style={{
                            width: `${100 / bubbleCount}%`,
                            height: 'auto',
                            aspectRatio: '2/1',
                        }}
                    ></div>
                ))}
            </div>

            <div className='w-full py-20 px-5 md:px-10 lg:px-20 text-white font-sans relative z-10'>
                {/* Header */}
                <ContainerLayout>
                    <div className='flex justify-center items-center mb-16'>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl font-medium text-center leading-tight'>
                            <LetterRevealWrapper>Innovative Spaces for </LetterRevealWrapper> <LetterRevealWrapper className='font-ppe italic font-light'>Curious</LetterRevealWrapper> <br className='hidden md:block' />
                            <span ref={wrapperRef} className='relative inline-block px-2 ml-2'>
                                <span
                                    ref={highlightRef}
                                    className='absolute top-3 -left-10 bg-[#0045FF] -rotate-6 h-full w-full z-10 block origin-left'
                                ></span>
                                <span className='relative z-20'>
                                    <LetterRevealWrapper>Minds</LetterRevealWrapper>
                                </span>
                            </span>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`${card.colSpan} bg-white text-black rounded-[30px] overflow-hidden flex flex-col justify-between ${card.id > 2 ? 'min-h-[400px] md:min-h-[400px]' : 'min-h-[400px] md:min-h-[500px]'} group hover:scale-105 transition-all duration-300`}
                            >
                                <div className='p-8 md:p-10 h-[50%]'>
                                    <h3 className='text-3xl md:text-4xl font-medium  leading-[15px] tracking-tight'>
                                        {card.italicPosition === 'before' && (
                                            <>
                                                <span className='font-ppe italic tracking-tighter font-light'>{card.italic}</span>{' '}
                                            </>
                                        )}
                                        {card.title}
                                        {card.italicPosition === 'after' && (
                                            <>
                                                {' '}<span className='font-ppe italic tracking-tighter font-light'>{card.italic}</span>
                                            </>
                                        )}
                                    </h3>

                                    <div className='space-y-0 mt-10'>

                                        {card.description.split('\n\n').map((paragraph, idx) => (
                                            <div key={idx} className='relative pl-4'>
                                                <div className="w-0.5 h-full bg-[#0045FF] absolute left-0 top-0"></div>
                                                <p className='text-sm md:text-base leading-[20px] text-gray-800 font-medium'>
                                                    {paragraph}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={`w-full ${card.id > 2 ? 'h-[30%]' : 'h-[50%]'} relative mt-auto`}>
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
        </section>


    )
}

export default Innovationspace