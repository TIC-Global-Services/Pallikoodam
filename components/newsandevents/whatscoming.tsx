import React from 'react'
import Image from 'next/image'
import whatshappein1 from '@/assets/news-and-events/recent_highlights-1.png'
import whatshappein2 from '@/assets/news-and-events/recent_highlights-2.png'
import whatshappein3 from '@/assets/news-and-events/recent_highlights-3.png'
import ContainerLayout from '@/layout/ContainerLayout';

const whatscoming = () => {
    const highlights = [
        {
            id: 1,
            image: whatshappein1,
            text: "Santa's Social, A joyful celebration filled with warmth, sharing, and festive cheer across age groups.",
            imageTop: true
        },
        {
            id: 2,
            image: whatshappein2,
            text: "Young Speaker Series, RAKS Resonance, Learners finding their voice, sharing ideas, stories, and perspectives with confidence and purpose.",
            imageTop: false
        },
        {
            id: 3,
            image: whatshappein3,
            text: "Year-End Programme, A celebration of learning, creativity, collaboration, and growth, marking milestones and memories as a community.",
            imageTop: true
        }
    ];

    return (
        <section className="w-full bg-white">
            <ContainerLayout>
                <div className="w-full">
                    {/* Header Section */}
                    <div className="mb-16 md:mb-10 mt-10">
                        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-6">
                            What's happening at <span className="font-ppe italic font-normal">RAKS</span>
                        </h2>
                        <p className="text-[#000000] text-[18px] md:text-[22px] lg:text-[28px] leading-[1.3] max-w-[800px] font-medium">
                            From classrooms buzzing with inquiry to stages alive with expression, our learners are constantly engaged in meaningful experiences.
                        </p>
                    </div>

                    {/* Recent Highlights Section */}
                    <div>
                        <h3 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-8 md:mb-10">
                            Recent <span className="font-ppe italic font-normal">Highlights</span>
                        </h3>

                        {/* Grid of Highlights / Mobile Slider */}
                        <div
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            className="flex md:grid md:grid-cols-3 gap-4 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mr-12 pr-12 md:mr-0 md:pr-0">
                            {highlights.map((item) => (
                                <div key={item.id} className="flex flex-col gap-3 md:gap-4 flex-none w-[85%] sm:w-[50%] md:w-auto snap-start md:snap-align-none">
                                    {item.imageTop ? (
                                        <>
                                            {/* Image Top */}
                                            <div className="relative w-full aspect-square md:aspect-square rounded-[16px] md:rounded-[24px] overflow-hidden shadow-sm">
                                                <Image
                                                    src={item.image}
                                                    alt="Event highlight"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[#000000] text-[15px] md:text-base lg:text-lg leading-[1.3] md:leading-[1.2] font-medium">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col md:flex-col gap-3 md:gap-4">
                                            {/* Text Top (Desktop ONLY) */}
                                            <div className="hidden md:flex flex-col gap-1 mt-4 md:mt-0">
                                                <p className="text-[#000000] text-[15px] md:text-base lg:text-lg leading-[1.3] md:leading-[1.2] font-medium">
                                                    {item.text}
                                                </p>
                                            </div>

                                            {/* Image Bottom (Desktop) / Image Top (Mobile) */}
                                            <div className="relative w-full aspect-square md:aspect-square rounded-[16px] md:rounded-[24px] overflow-hidden shadow-sm">
                                                <Image
                                                    src={item.image}
                                                    alt="Event highlight"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Text Bottom (Mobile ONLY fallback) */}
                                            <div className="md:hidden flex flex-col gap-1">
                                                <p className="text-[#000000] text-[15px] md:text-base lg:text-lg leading-[1.3] md:leading-[1.2] font-medium">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default whatscoming