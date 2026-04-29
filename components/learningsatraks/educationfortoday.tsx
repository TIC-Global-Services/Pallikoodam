'use client'
import React from 'react'
import Image from 'next/image'
import education from '@/assets/learningatraks/board_we_offer.jpg'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'

const EducationForToday = () => {
    const { elementRef: titleRef1 } = useLetterReveal<HTMLHeadingElement>();
    const { elementRef: titleRef2 } = useLetterReveal<HTMLHeadingElement>();
    return (
        <section className="w-full overflow-hidden py-16 md:py-10 bg-white">
            <div className="w-full mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-col">

                    {/* Title Area */}
                    <div ref={titleRef1} className="w-full flex-shrink-0 translate-y-10 md:translate-x-10">
                        <h2 className="text-[#2C313E] text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-[1.1] font-medium tracking-tight">
                            Boards We <br /><span className='font-ppe font-normal italic'>Offer</span>
                        </h2>
                    </div>

                    {/* Right Area (Image + Text) */}
                    <div className="flex gap-5 justify-end items-end">

                        {/* Image<div></    div> */}
                        <div></div>
                        <div className="w-[50vw] max-h-[50vh] aspect-[4/3] relative">
                            <Image
                                src={education}
                                alt="Students working on a project"
                                width={800}
                                height={600}
                                style={{ objectPosition: '30% 50%' }}
                                className="w-full h-full rounded-[12px] object-cover object-center"
                            />
                        </div>
                        <div ref={titleRef2} className='max-w-md relative'>
                            <p className="text-[#4A4F5E] text-sm mb-5  md:text-base lg:text-lg leading-[1.2]">
                                RAKS follows two carefully chosen curricula that align with our vision for holistic, future-ready education:
                            </p>
                            <p className="text-[#4A4F5E] text-sm mb-5 font-ppe font-light md:text-base lg:text-lg leading-[1.2]">
                                Cambridge International <br /> Curriculum National Curriculum (India)
                            </p>
                            <p className="text-[#4A4F5E] text-sm  md:text-base lg:text-lg leading-[1.2]">
                                This dual-curriculum approach allows us to nurture global perspectives while remaining rooted in national educational values and contexts.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EducationForToday