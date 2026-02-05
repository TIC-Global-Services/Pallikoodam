"use client"
import React, { useEffect, useRef, useState } from 'react'
import vision from "@/assets/home/vision.png"
import mission from "@/assets/home/mission.png"
import float1 from '@/assets/home/float-1.png'
import float2 from '@/assets/home/float-2.png'
import float3 from '@/assets/home/float-3.png'
import float4 from '@/assets/home/float-4.png'
import Image from 'next/image'
import gsap from 'gsap'
import ImageTrail from '../reuseable/imagetrail'

const ShapingthefutureCP = () => {
    const containerRef = useRef(null)
    const logoSectionRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

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

        const rotateX = ((y - centerY) / centerY) * -10 // Tilt up/down (reversed)
        const rotateY = ((x - centerX) / centerX) * 5 // Tilt left/right

        setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    return (
        <section ref={containerRef} className="bg-black text-white py-20 lg:py-32 min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header / Logo Section */}
                <div
                    className="relative flex flex-col items-center justify-center mb-24 md:mb-32"
                >

                    {/* Floating Icons */}
                    <div
                        className="absolute inset-0 pointer-events-auto"
                    >
                        <ImageTrail
                            items={[
                                float1.src,
                                float2.src,
                                float3.src,
                                float4.src,
                            ]}
                            variant={1}
                        />
                    </div>

                    {/* RAKS Logo & Text */}
                    <div className="relative z-0 text-center w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-[120px] md:h-full min-h-[412px] mb-8">
                            <Image src="/raks_logo_og.png" alt="RAKS INSTITUTIONS" fill className="object-contain" priority />
                        </div>
                        {/* <h2 className="text-xl md:text-3xl tracking-[0.4em] md:tracking-[0.6em] uppercase font-light text-white mb-6 md:mb-10">
                            INSTITUTIONS
                        </h2> */}
                        <h3 className="text-2xl md:text-[50px] font-bold leading-[52px]">
                            <span className="font-bold">15+</span> Years Of Shaping The Future
                        </h3>
                    </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-[1400px] mx-auto">

                    {/* Vision Card */}
                    <div className="bg-[#F4F4F4] text-black rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-[600px] md:h-[700px] flex flex-col items-start transition-transform hover:scale-[1.01] duration-500">
                        <h4 className="text-4xl md:text-6xl mb-8 font-medium">
                            Our <span style={{ fontFamily: 'var(--font-ppe)' }} className="text-[#000086] font-normal italic">Vision</span>
                        </h4>
                        <div className="w-1 h-20 bg-blue-600/30 absolute left-8 top-8 hidden"></div> {/* Decorative line if needed */}
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-auto max-w-lg z-10 font-normal">
                            <span className="border-l-4 border-blue-300 pl-4 block">
                                Enabling learners to thrive With purpose and build a sustainable, equitable, and compassionate world. From a vision guided by passion to a thriving community of joyful, purposeful learners discover how 11+ years of innovation, care, and courageous ideas have shaped the RaK's story.
                            </span>
                        </p>
                        <div className="absolute -bottom-[70%] left-[0%] w-full h-full scale-160">
                            <Image src={vision} alt="School Building" fill className="object-contain object-bottom w-[500px] h-[500px]" />
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-[#F4F4F4] text-black rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden  flex flex-col items-start  transition-transform hover:scale-[1.01] duration-500">
                        <div>
                            <h4 className="text-4xl md:text-6xl mb-8 font-medium">
                                Our <span style={{ fontFamily: 'var(--font-ppe)' }} className="text-[#000086] font-normal italic">Mission</span>
                            </h4>
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-auto max-w-lg z-10 font-normal">
                                <span className="border-l-4 border-blue-800/40 pl-4 block">
                                    At RaK's <span className="italic font-serif">Pallikkoodam</span> we Promote inquiry-based, experiential learning
                                    and critical thinking through rigorous academic standards. Build a culture of lifelong learning to
                                    prepare students for the future. Develop leadership skills with a global outlook and nurture cross-cultural collaboration.
                                </span>
                            </p>
                        </div>
                        <div className="absolute bottom-10 left-[20%] w-full h-full scale-180">
                            <Image src={mission} alt="School Building" fill className="object-contain object-bottom w-[500px] h-[500px]" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShapingthefutureCP