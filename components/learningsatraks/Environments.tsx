import React from 'react'
import Image from 'next/image'
import environments1 from '@/assets/learningatraks/environment-1.jpg'
import environments2 from '@/assets/learningatraks/environment-2.jpg'
import environments3 from '@/assets/home/innovationnew-5.jpg'
import icon1 from '@/assets/admission/books.png'
import icon2 from '@/assets/admission/react.png'
import icon3 from '@/assets/admission/lab.png'
import Developement from './developement'

const Environments = () => {

    const features = [
        {
            id: 1,
            title: <><span className='font-ppe italic pr-1 font-normal'>Collaborative</span> Classrooms & <br className="hidden lg:block" />Flexible Spaces</>,
            description: "Our classrooms and learning spaces are designed to support group-work, creative discussions, and flexible movement, ideal for active, social learning.",
            image: environments1,
            icon: icon1,
        },
        {
            id: 2,
            title: <>Interdisciplinary & <br />Project-Based <span className='font-ppe italic pl-1 font-normal'>Learning</span></>,
            description: "Students work on real-world projects that draw on multiple subjects, developing critical thinking, problem-solving, and practical application skills.",
            image: environments2,
            icon: icon2,
        },
        {
            id: 3,
            title: <>Innovation <span className='font-ppe italic px-1 font-normal'>Labs</span> & <br />Maker-Spaces</>,
            description: "From open studios to science and tech labs, students get hands-on exposure to arts, robotics, digital media, and more, helping them experiment, explore, and create.",
            image: environments3,
            icon: icon3,
        }
    ];

    return (
        <>
            {/* The outer container holds everything and extends the blue background */}
            <div className='relative z-20 bg-[#000086] pt-16 pb-0 px-4 md:px-8 lg:px-[5%] rounded-t-[3rem]'>
                <div className='mb-10'>
                    <h1 className='text-white md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium'>
                        Learning <span className='font-ppe italic font-normal'>Environment & Methods</span>
                    </h1>
                </div>

                {/* Grid Layout Container */}
                <div className='grid grid-cols-1 lg:grid-cols-6  gap-4 lg:gap-6 pb-6 relative'>

                    {/* Card 1: Left column, large vertical card spanning 4 rows */}
                    <div className='lg:col-span-3 lg:row-span-2 flex flex-col justify-between bg-[#F3F4F6] rounded-[24px] lg:rounded-[32px]  overflow-hidden shadow-lg'>
                        {/* Image takes top area */}
                        <div className='relative w-full aspect-2/2 lg:aspect-[1.5] rounded-[16px]  lg:rounded-[32px] overflow-hidden mb-6 lg:mb-0'>
                            <Image
                                src={features[0].image}
                                alt="Collaborative Classrooms"
                                fill
                                className="object-cover p-4 rounded-[32px] object-center"
                            />
                        </div>
                        {/* Content text at bottom */}
                        <div className='flex flex-row items-end gap-4 lg:gap-6 px-2 mb-16 lg:px-[12%] '>
                            <div className='shrink-0 w-20 h-20  relative flex items-start justify-start overflow-visible'>
                                <Image
                                    src={features[0].icon}
                                    alt=""
                                    fill
                                    className="object-contain scale-[1.5] lg:scale-[12]" // 'scale' increases visual size without breaking grid layout space
                                />
                            </div>
                            <div className='flex flex-col justify-center h-full pt-2'>
                                <h2 className='text-[24px] lg:text-[32px] tracking-tight font-medium text-[#2C313E] leading-[1.2] mb-3 lg:mb-4'>
                                    {features[0].title}
                                </h2>
                                <div className='border-l-3 pl-4 py-1'>
                                    <p className='text-[#4B5563] text-sm xl:text-base leading-[1.4]'>
                                        {features[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side Stacked Cards 2 and 3, each spanning 2 rows */}
                    {features.slice(1).map((feature) => (
                        <div key={feature.id} className='col-span-3 h-20vh flex flex-col sm:flex-row bg-[#F3F4F6] rounded-[24px] lg:rounded-[32px] p-4 lg:p-6 gap-6 lg:gap-8 shadow-lg'>
                            {/* Text content left */}
                            <div className='flex-1 flex flex-col justify-center px-2 lg:px-1 py-2 lg:py-4'>
                                <div className='shrink-0 w-10 h-10 px-10  mb-2 relative flex items-start justify-start overflow-visible'>
                                    <Image
                                        src={feature.icon}
                                        alt=""
                                        fill
                                        className="object-contain scale-[1.5] lg:scale-[15]" // 'scale' increases visual size without breaking grid layout space
                                    />
                                </div>
                                <h2 className='text-[22px] lg:text-[28px] tracking-tight font-medium text-[#2C313E] leading-[1.2] mb-3 lg:mb-4 pt-2'>
                                    {feature.title}
                                </h2>
                                <div className='border-l-3  pl-2 py-1'>
                                    <p className='text-[#4B5563] text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.4]'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                            {/* Image right */}
                            <div className='relative w-full sm:w-[50%] h-[200px] sm:h-full min-h-[200px] max-h-[300px] lg:max-h-none rounded-[16px] lg:rounded-[24px] overflow-hidden shrink-0'>
                                <Image
                                    src={feature.image}
                                    alt=""
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <Developement />
            </div>
        </>
    )
}

export default Environments