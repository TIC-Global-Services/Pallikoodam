'use client'
import React from 'react'
import Image from 'next/image'
import philosophyimg from '@/assets/carrer/philosophy.jpg'
import ContainerLayout from '@/layout/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'

const teachingphilosophy = () => {
      const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
      const { elementRef: titleRef1 } = useLetterReveal<HTMLHeadingElement>();
    return (
        <div className="relative w-full min-h-screen mb-[10%] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
                <SimpleParallax>
                    <Image
                    src={philosophyimg}
                    alt="Our Teaching Philosophy"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                </SimpleParallax>
                {/* Subtle gradient overlay to enhance text readability over the image */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-black/60" />
            </div>

            <ContainerLayout className="relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-30 items-end min-h-[50vh] md:min-h-[80vh]">

                    {/* Left Side (Top Aligned on desktop manually via self-start) */}
                    <div ref={titleRef1} className="text-white flex flex-col justify-start h-full pt-8 md:pt-16">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal leading-tight mb-4 tracking-tight shadow-sm">
                            Our Teaching <span className="font-ppe italic">Philosophy</span>
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-[28px] font-light leading-snug lg:w-4/5 text-white/95">
                            Guided by <span className="font-ppe italic font-normal">inquiry, creativity, and respect</span> for every learner&apos;s journey.
                        </p>
                    </div>

                    {/* Right Side (Bottom Aligned) */}
                    <div ref={titleRef} className="text-white flex flex-col justify-end w-full lg:w-11/13 ml-auto">
                        <p className="text-xl md:text-2xl lg:text-[32px] font-light leading-snug md:leading-[30px] lg:leading-[36px] mb-8 text-white/95">
                            At RAKS, education is not rushed.<br />
                            It is <span className="font-ppe italic font-normal">thoughtful. Intentional. Human.</span>
                        </p>

                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-[32px] font-ppe italic mb-3 font-light">
                                We believe:
                            </p>

                            <div className="w-full h-[2px] bg-linear-to-r from-[#000086] to-white mb-5"></div>

                            <div className="flex flex-col gap-5">
                                <div className="pb-5 relative ">
                                    <p className="text-lg md:text-xl lg:text-2xl font-normal leading-snug tracking-tight">
                                        Learning thrives in real-world contexts
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r  from-[#000086] to-white"></div>
                                </div>

                                <div className="pb-5 relative">
                                    <p className="text-lg md:text-xl lg:text-2xl font-normal leading-snug tracking-tight">
                                        Educators are facilitators, not mere<br/> instructors
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r  from-[#000086] to-white"></div>
                                </div>

                                <div className="relative">
                                    <p className="text-lg md:text-xl lg:text-2xl font-normal max-w-sm leading-snug tracking-tight">
                                        Children learn best when they feel seen, heard, and valued
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default teachingphilosophy