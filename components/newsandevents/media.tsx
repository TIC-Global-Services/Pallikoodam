import React from 'react'
import Image from 'next/image'
import media1 from '@/assets/news-and-events/media-highlights-1.jpg'
import media2 from '@/assets/news-and-events/media_highlights-2.png'
import media3 from '@/assets/news-and-events/media_highlights-3.jpg'
import ContainerLayout from '@/layout/ContainerLayout'

const Media = () => {

    const mediaImages = [
        {
            id: 1,
            image: media1,
            alt: "RAKS stage performance"
        },
        {
            id: 2,
            image: media2,
            alt: "Classical dance performance"
        },
        {
            id: 3,
            image: media3,
            alt: "Choir performance"
        }
    ];

    return (
        <section className="w-full py-10 pl-4">
            {/* <ContainerLayout> */}
                <div className="w-full">
                    {/* Header Section */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-4">
                            <span className="font-ppe italic font-normal">Media</span> & Highlights
                        </h2>
                        <p className="text-[#000000] text-sm md:text-base lg:text-2xl leading-[1.4] max-w-5xl font-medium">
                            A living gallery of moments that matter, showcasing achievements, learning journeys, events, and stories that reflect the RAKS spirit.
                        </p>
                    </div>

                    {/* Image Grid / Slider */}
                    {/* On mobile: horizontal scrolling flex container with snap-x. On md+: grid container */}
                    <div
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        className="w-full overflow-x-auto snap-x snap-mandatory flex md:grid md:grid-cols-3 gap-4 md:gap-6 hide-scrollbar scrollbar-hide [&::-webkit-scrollbar]:hidden">
                        {mediaImages.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-[85%] sm:w-[50%] md:w-full shrink-0 aspect-[4/4] rounded-[16px] overflow-hidden snap-start md:snap-align-none"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            {/* </ContainerLayout> */}
        </section>
    )
}

export default Media