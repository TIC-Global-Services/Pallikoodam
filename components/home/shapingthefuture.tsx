"use client"
import React, { useEffect, useRef, useState } from 'react'
import vision from "@/assets/home/visionimg.jpg"
import image3 from '@/assets/home/campus-3.jpg'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Shapingthefuture = () => {
    const containerRef = useRef(null)
    const logoSectionRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
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

            gsap.to(bubblesRef.current, {
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
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for icons
            gsap.to(".floating-icon", {
                y: "random(-15, 15)",
                x: "random(-15, 15)",
                rotation: "random(-40, 40)",
                duration: "random(2.5, 4.5)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 1,
                    from: "random"
                }
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!logoSectionRef.current) return

        const rect = logoSectionRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 5

        setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    return (
        <section className='relative bg-white md:mt-24' ref={containerRef}>
            {/* <div className="absolute top-0 left-0 w-full -translate-y-[99%] flex overflow-hidden pointer-events-none z-20 leading-0">
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
            </div> */}
            <div className="bg-white text-black py-0 lg:py-0 h-full relative overflow-hidden">
                <div className="container  bg-white mx-auto px-4 md:px-8">

                    {/* Header / Logo Section */}
                    <div
                        ref={logoSectionRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative flex flex-col items-center justify-center mb-10 md:mb-32"
                    >

                        {/* Floating Icons */}

                        {/* RAKS Logo & Text */}
                        <div className="relative z-0 text-center w-full max-w-4xl mx-auto translate-z-0">
                            <div className="relative w-full bg-white h-auto md:h-full md:mb-8 z-10 flex items-center justify-center leading-0 text-[0]">
                                <video
                                    src="/Animation_2_Logo.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        transform: "translate3d(0, 0, 0) scale(1.01)", // Force GPU & cover sub-pixel gaps
                                        willChange: "transform",
                                        backfaceVisibility: "hidden",
                                        clipPath: "inset(1px)", // Crop 1px to remove edge lines
                                    }}
                                    className="w-full h-full object-cover block outline-none border-none"
                                />
                                {/* Overlay Patch to cover any remaining bottom line artifact */}
                                <div className="absolute -bottom-1 left-0 w-full h-[1vh] bg-white z-20 pointer-events-none" />
                            </div>
                            {/* <h2 className="text-xl md:text-3xl tracking-[0.4em] md:tracking-[0.6em] uppercase font-light text-white mb-6 md:mb-10">
                            INSTITUTIONS
                        </h2> */}
                            <h3 className="text-xl md:text-[30px] bg-white font-bold leading-[52px]">
                                <span className="font-bold text-black">10+</span> Years Of Shaping The Future
                            </h3>
                        </div>
                    </div>

                    {/* Vision & Mission Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-6 md:gap-10 max-w-[1400px] mx-auto">

                        {/* Vision Card */}
                        <div className="bg-[#E9E9E9] text-black rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-start transition-transform hover:scale-[1.01] duration-500 min-h-[500px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[750px]">
                            <h4 className="text-xl md:text-5xl lg:text-6xl mb-6 md:mb-8 font-medium">
                                Our <span style={{ fontFamily: 'var(--font-ppe)' }} className="text-[#000086] font-normal italic">Vision</span>
                            </h4>
                            <div className="w-1 h-20 bg-blue-600/30 absolute left-8 top-8 hidden"></div>
                            <p className="text-gray-800 text-sm lg:text-base xl:text-lg leading-[22px] mb-auto max-w-lg z-10 font-normal">
                                <span className="border-l-3 border-[#23519D] pl-4 block">
                                    Enabling learners to <span className="font-ppe italic">&quot;Thrive With Purpose&quot;</span> and build a sustainable, equitable, and compassionate world.
                                </span>
                            </p>
                            <div className="absolute bottom-0 left-0 w-full h-[55%]">
                                <Image src={vision} alt="School Building" fill className="object-contain object-bottom" />
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-[#E9E9E9] text-black rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-start transition-transform hover:scale-[1.01] duration-500 min-h-[500px] md:min-h-[600px] lg:min-h-[500px] xl:min-h-[500px]">
                            <div className="z-10 relative">
                                <h4 className="text-xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-medium">
                                    Our <span style={{ fontFamily: 'var(--font-ppe)' }} className="text-[#000086] font-normal italic">Mission</span>
                                </h4>
                                <ol className="text-gray-800 text-sm lg:text-base xl:text-lg border-l-3 border-[#23519D] pl-4 leading-[26px] mb-auto max-w-lg z-10 font-normal list-decimal list-inside space-y-3">
                                    <li>To nurture curious, compassionate, and courageous learners who <span className='font-ppe italic'>&quot;Thrive With Purpose.&quot;</span></li>
                                    <li>To cultivate character, creativity, and critical thinking through meaningful, enquiry-driven experiences.</li>
                                    <li>To empower every learner to act responsibly, lead ethically, and contribute positively to the world.</li>
                                </ol>
                            </div>
                            <div className="absolute -bottom-12 scale-110 left-0 w-full h-[55%]">
                                <Image src={image3} alt="School Building" fill className="object-contain object-bottom" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shapingthefuture