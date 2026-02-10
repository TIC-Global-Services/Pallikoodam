'use client'
import React from 'react'
import image1 from '@/assets/home/campus-1.jpg'
import image2 from '@/assets/home/campus-2.jpg'
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
        <ContainerLayout>
            <section className="bg-white text-black py-20">
                {/* Header Section */}
                <div ref={titleRef} className="mb-16">
                    <h2 className="text-4xl md:text-[54px] font-medium mb-6">
                        Stories from our <span className="font-ppe italic font-normal">Campus</span>
                    </h2>
                    <p className="text-2xl text-gray-800">A vibrant community where milestones, discoveries,<br /> and celebrations shine through every day.</p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

    )
}

export default Campus