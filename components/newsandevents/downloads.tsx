import ContainerLayout from '@/layout/ContainerLayout'
import whatshappeing from '@/assets/news-and-events/whatshappeing-1.jpg'
import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const downloads = () => {
    const mediaImages = [
        {
            id: 1,
            image: whatshappeing,
            alt: "RAKS stage performance"
        },
        {
            id: 2,
            image: whatshappeing,
            alt: "Classical dance performance"
        },
        {
            id: 3,
            image: whatshappeing,
            alt: "Choir performance"
        }
    ];
    return (
        <section className="w-full bg-white mb-20">
            <ContainerLayout>
                <div className="w-full">
                    {/* Header Section */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-4">
                            <span className="font-ppe italic font-normal">Downloads</span> & Forms
                        </h2>
                        <p className="text-[#000000] text-sm md:text-base lg:text-2xl leading-[1.4]  font-medium">
                            Easy access to essential documents, circulars, and forms, all in one place for your convenience.
                        </p>
                    </div>

                    {/* Image Grid / Slider */}
                    {/* On mobile: horizontal scrolling flex container with snap-x. On md+: grid container */}
                    <div className="w-full overflow-x-auto snap-x snap-mandatory flex md:grid md:grid-cols-3 gap-4 md:gap-6 hide-scrollbar pb-4 md:pb-0">
                        {mediaImages.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-[85vw] md:w-full shrink-0 aspect-[4/4] rounded-[16px] overflow-hidden snap-center md:snap-align-none"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                />

                                {/* Download Button Overlay */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                                    <button className="flex items-center gap-2 bg-[#000086] hover:bg-[#000066] text-white px-6 py-2 rounded-lg transition-colors font-medium text-sm md:text-base shadow-lg cursor-pointer">
                                        {/* <Download size={18} /> */}
                                        <span>Download</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default downloads