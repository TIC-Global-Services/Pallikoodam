'use client'
import React from 'react'
import image1 from '@/assets/home/campusnew-1.png'
import image2 from '@/assets/home/campusnew-2.jpg'
import image3 from '@/assets/home/campus-3.jpg'
import Image from 'next/image'
import ContainerLayout from '@/layout/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'
import BlurText from '../reuseable/texteffect/BlurText'

const Campus = () => {

    const data = [
        {
            title: "Newsletter & Blogs",
            image: image1
        },
        {
            title: "Events & Celebrations",
            image: image2
        },
        {
            title: "School Announcements",
            image: image3
        },
    ]
    const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
    return (
        <div className="bg-white relative z-10">
            <ContainerLayout>
                <section className="text-black py-0 pb-10">
                    {/* Header Section */}
                    <div ref={titleRef} className="mb-10 md:mb-16">
                        <h2 className="text-2xl md:text-[54px] font-medium mb-2 md:mb-6">
                            Stories from our <span className="font-ppe italic font-normal">Campus</span>
                        </h2>
                        <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-gray-800">A vibrant community where milestones, discoveries,<br /> and celebrations shine through every day.</p>
                    </div>

                    {/* Mobile: horizontal swipe slider */}
                    <div className="md:hidden flex overflow-x-auto gap-4 snap-start snap-mandatory pb-4 -mx-11 pl-11 scrollbar-none">
                        {data.map((item, index) => (
                            <div key={index} className="snap-start shrink-0 w-[80vw] flex flex-col group">
                                <div className="relative w-full aspect-4/5 overflow-hidden rounded-[2rem] mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-medium">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: original 3-col grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {data.map((item, index) => (
                            <div key={index} className="flex flex-col group">
                                <div className="relative w-full aspect-4/5 overflow-hidden rounded-[2rem] mb-6">
                                    <SimpleParallax>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className={`object-cover transition-transform duration-700  ${index === 0 ? 'object-cover scale-95 group-hover:scale-90' : 'object-cover group-hover:scale-105'}`}
                                        />
                                    </SimpleParallax>
                                </div>
                                <h3 className="text-2xl font-medium">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                </section>
            </ContainerLayout>
        </div>

    )
}

export default Campus