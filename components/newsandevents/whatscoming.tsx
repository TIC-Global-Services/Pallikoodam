import React from 'react'
import Image from 'next/image'
import whatshappeing from '@/assets/news-and-events/whatshappeing-1.jpg'
import ContainerLayout from '@/layout/ContainerLayout';

const whatscoming = () => {
    const highlights = [
        {
            id: 1,
            image: whatshappeing,
            text: "Santa's Social, A joyful celebration filled with warmth, sharing, and festive cheer across age groups.",
            imageTop: true
        },
        {
            id: 2,
            image: whatshappeing,
            text: "Young Speaker Series, RAKS Resonance, Learners finding their voice, sharing ideas, stories, and perspectives with confidence and purpose.",
            imageTop: false
        },
        {
            id: 3,
            image: whatshappeing,
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
                        <div className="w-full overflow-x-auto snap-x snap-mandatory flex md:grid md:grid-cols-3 gap-6 md:gap-8 hide-scrollbar scrollbar-hide pb-4 md:pb-0">
                            {highlights.map((item) => (
                                <div key={item.id} className="flex flex-col gap-2 md:gap-4 shrink-0 w-[85vw] md:w-full snap-center md:snap-align-none">
                                    {item.imageTop ? (
                                        <>
                                            {/* Image Top */}
                                            <div className="relative w-full aspect-[4/3] md:aspect-square rounded-[16px] md:rounded-[20px] overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt="Event highlight"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Text Bottom */}
                                            <p className="text-[#000000] text-sm md:text-base lg:text-lg leading-[1.2] max-w-sm font-medium mt-1 md:mt-2">
                                                {item.text}
                                            </p>
                                        </>
                                    ) : (
                                        <div className="flex flex-col-reverse md:flex-col gap-2 md:gap-4">
                                            {/* Text Top */}
                                            <p className="hidden md:block text-[#000000] text-sm md:text-base lg:text-lg leading-[1.2] max-w-sm font-medium mb-1 md:mb-2 mt-4 md:mt-0">
                                                {item.text}
                                            </p>
                                            {/* Image Bottom */}
                                            <div className="relative w-full aspect-[4/3] md:aspect-square rounded-[16px] md:rounded-[20px] overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt="Event highlight"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Text Top (Mobile fallback) */}
                                            <p className="md:hidden text-[#000000] text-sm md:text-base lg:text-lg leading-[1.2] max-w-sm font-medium mb-1 md:mb-2 mt-4 md:mt-0">
                                                {item.text}
                                            </p>
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