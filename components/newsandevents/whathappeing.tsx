import React from 'react'
import Image from 'next/image'
import ContainerLayout from '@/layout/ContainerLayout'
import comingup1 from '@/assets/news-and-events/whats_comingup_1.png'
import comingup2 from '@/assets/news-and-events/whats_comingup_2.png'
import comingup3 from '@/assets/news-and-events/whats_comingup_3.png'

const WhatHappeing = () => {
    const highlights = [
        {
            id: 1,
            image: comingup1,
            title: "School Reopening – January 2026",
            text: "Welcoming learners back for the new term with renewed energy and curiosity.",
            marginTop: "mt-0"
        },
        {
            id: 2,
            image: comingup2,
            title: "Pongal Celebrations",
            text: "Honouring tradition, gratitude, and cultural roots through hands-on experiences and shared festivities.",
            marginTop: "md:mt-32 mt-0"
        },
        {
            id: 3,
            image: comingup3,
            title: "Sports Day",
            text: "Celebrating teamwork, resilience, and the spirit of play, on and off the field.",
            marginTop: "md:mt-64 mt-0"
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-10 overflow-visible">
            <ContainerLayout>
                <div className="w-full">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-8 md:mb-12">
                        What's <span className="font-ppe italic font-normal">coming up</span>
                    </h2>

                    <div
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        className="flex md:grid md:grid-cols-3 gap-4 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mr-12 pr-12 md:mr-0 md:pr-0">
                        {highlights.map((item) => (
                            <div key={item.id} className={`flex flex-col gap-3 md:gap-4 flex-none w-[85%] sm:w-[50%] md:w-auto snap-start ${item.marginTop}`}>
                                <div className="relative w-full aspect-square md:aspect-square rounded-[16px] md:rounded-[24px] overflow-hidden shadow-sm">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-[15px] md:text-base lg:text-lg leading-[1.3] md:leading-[1.2] font-medium">
                                        {item.title}
                                    </p>
                                    <p className="text-[#000000] text-[15px] md:text-base lg:text-lg leading-[1.4] md:leading-[1.2] font-normal md:font-medium max-w-[95%] md:max-w-sm">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default WhatHappeing