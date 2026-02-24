import React from 'react'
import Image from 'next/image'
import education from '@/assets/learningatraks/educationtoday.jpg'

const EducationForToday = () => {
    return (
        <section className="w-full overflow-hidden py-16 md:py-24 bg-white">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-col">

                    {/* Title Area */}
                    <div className="w-full flex-shrink-0">
                        <h2 className="text-[#2C313E] text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-[1.1] font-medium tracking-tight">
                            Rethinking <span className='font-ppe font-normal italic'>Education</span> for<br className="hidden lg:block" />
                            Today’s <span className='font-ppe font-normal italic'>World</span>
                        </h2>
                    </div>

                    {/* Right Area (Image + Text) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center items-end gap-5 lg:-translate-x-16 lg:-translate-y-8">

                        {/* Image */}<div></div>
                        <div className="w-full h-full  aspect-6/5">
                            <Image
                                src={education}
                                alt="Students working on a project"
                                width={800}
                                height={600}
                                style={{objectPosition:'30% 50%'}}
                                className="w-full h-full rounded-[12px] object-cover object-center"
                            />
                        </div>
                        <div className='max-w-lg'>
                            <p className="text-[#4A4F5E] text-[15px]  md:text-base lg:text-xl leading-[1.2]">
                                At Rak’s Pallikkoodam, education goes beyond textbooks. We follow a 21st-century, experiential and interdisciplinary approach, connecting subjects, encouraging curiosity, critical thinking, creativity, collaboration, and real-world learning.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EducationForToday