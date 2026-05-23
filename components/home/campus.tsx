'use client'
import React from 'react'
import image1 from '@/assets/home/campus-new-memoirs.png'
import image2 from '@/assets/home/campusnewimg-2.jpg'
import image3 from '@/assets/home/school_announcement.jpg'
import Image from 'next/image'
import ContainerLayout from '@/layout/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'
import BlurText from '../reuseable/texteffect/BlurText'
import Link from 'next/link'

const Campus = () => {

    const data = [
        {
            title: "Newsletter & Blogs",
            image: image1,
            href: "/news-and-events#newsletters"
        },
        {
            title: "Events & Celebrations",
            image: image2,
            href: "https://www.youtube.com/c/LilandRaksPallikkoodam"
        },
        {
            title: "School Announcements",
            image: image3,
            href: "/news-and-events"
        },
    ]
    const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
    return (
        <div className="bg-white relative z-10">
            <ContainerLayout>
                <section className="text-black py-0 pb-10">
                    {/* Header Section */}
                    <div ref={titleRef} className="mb-10 md:mb-16 -mt-8 md:mt-0">
                        <h2 className="text-2xl md:text-5xl font-medium mb-2 tracking-tight md:mb-6">
                            Stories from our <span className="font-ppe italic font-normal">Campus</span>
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-800">A vibrant community where milestones, discoveries,<br className='hidden md:block'/> and celebrations shine through every day.</p>
                    </div>

                    {/* Mobile: horizontal swipe slider */}
                    <div className="md:hidden flex overflow-x-auto gap-4 snap-start snap-mandatory pb-4 -mx-11 pl-11 scrollbar-none">
                        {data.map((item, index) => {
                            const isExternal = item.href?.startsWith('http');
                            const CardContent = (
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
                            );
                            return item.href ? (
                                isExternal ? (
                                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                                        {CardContent}
                                    </a>
                                ) : (
                                    <Link key={index} href={item.href} className="block">
                                        {CardContent}
                                    </Link>
                                )
                            ) : CardContent;
                        })}
                    </div>

                    {/* Desktop: original 3-col grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {data.map((item, index) => {
                            const isExternal = item.href?.startsWith('http');
                            const CardContent = (
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
                            );
                            return item.href ? (
                                isExternal ? (
                                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                                        {CardContent}
                                    </a>
                                ) : (
                                    <Link key={index} href={item.href} className="block">
                                        {CardContent}
                                    </Link>
                                )
                            ) : CardContent;
                        })}
                    </div>

                </section>
            </ContainerLayout>
        </div>

    )
}

export default Campus