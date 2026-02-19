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
        <section className='relative bg-black mt-24' ref={containerRef}>
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
            <div ref={containerRef} className="bg-white text-black py-20 lg:py-0 min-h-screen relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">

                    {/* Header / Logo Section */}
                    <div
                        ref={logoSectionRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative flex flex-col items-center justify-center mb-24 md:mb-32"
                    >

                        {/* Floating Icons */}

                        {/* RAKS Logo & Text */}
                        <div className="relative z-0 text-center w-full max-w-4xl mx-auto">
                            <div className="relative w-full h-[90px] md:h-full min-h-[300px] mb-8 flex items-center justify-center">
                                <video
                                    src="/Animation_2_Logo.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* <h2 className="text-xl md:text-3xl tracking-[0.4em] md:tracking-[0.6em] uppercase font-light text-white mb-6 md:mb-10">
                            INSTITUTIONS
                        </h2> */}
                            <h3 className="text-2xl md:text-[30px] font-bold leading-[52px]">
                                <span className="font-bold text-black">10+</span> Years Of Shaping The Future
                            </h3>
                        </div>
                    </div>

                    {/* Vision & Mission Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-[1400px] mx-auto">

                        {/* Vision Card */}
                        <div className="bg-[#E9E9E9] text-black rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-[600px] md:h-[700px] flex flex-col items-start transition-transform hover:scale-[1.01] duration-500">
                            <h4 className="text-4xl md:text-6xl mb-8 font-medium">
                                Our <span style={{ fontFamily: 'var(--font-ppe)' }} className="text-[#000086] font-normal italic">Vision</span>
                            </h4>
                            <div className="w-1 h-20 bg-blue-600/30 absolute left-8 top-8 hidden"></div> {/* Decorative line if needed */}
                            <p className="text-gray-800 text-sm md:text-base leading-[20px] mb-auto max-w-lg z-10 font-normal">
                                <span className="border-l-3 border-[#23519D]  pl-4 block">
                                    Enabling learners to thrive With purpose and build a sustainable, equitable, and compassionate world.
                                </span>
                            </p>
                            <div className="absolute -bottom-[12%] left-[0%] w-full h-full scale-120">
                                <Image src={vision} alt="School Building" fill className="object-contain object-bottom w-[500px] h-[500px]" />
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-[#E9E9E9] text-black rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden  flex flex-col items-start  transition-transform hover:scale-[1.01] duration-500">
                            <div>
                                <h4 className="text-4xl md:text-6xl mb-4 font-medium">
                                    Our <span style={{ fontFamily: 'var(--font-ppe)' }} className="text-[#000086] font-normal italic">Mission</span>
                                </h4>
                                <ol className="text-gray-800 text-sm md:text-base border-l-3 border-[#23519D]  pl-4 leading-[22px] mb-auto max-w-lg z-10 font-normal list-decimal list-inside space-y-2">
                                    <li>Promote inquiry-based, experiential learning and critical thinking through rigorous academic standards.</li>
                                    <li>Nurturing lifelong learners for human flourishing.</li>
                                    <li>Develop leadership skills with a global outlook and nurture cross-cultural collaboration.</li>
                                    <li>Foster inclusivity, respect, and appreciation for India, its cultures, and its central place in the world.</li>
                                    <li>Ensure physical well being, health, and character building through sports and holistic development.</li>
                                </ol>
                            </div>
                            <div className="absolute -bottom-[20%] left-[0%] w-full h-full scale-100">
                                <Image src={image3} alt="School Building" fill className="object-contain object-bottom w-[100px] h-[100px]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shapingthefuture