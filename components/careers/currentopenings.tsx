'use client'
import React, { useState } from 'react'
import ContainerLayout from '@/layout/ContainerLayout'

const openings = [
    {
        position: "Early Years Facilitator",
        location: "Coimbatore",
        type: "Full-time",
        description: "We are seeking a passionate and experienced Early Years Facilitator to deliver engaging, inquiry-driven lessons aligned with our curriculum. The role involves fostering strong foundational skills while nurturing creativity, critical thinking, and confident communication among young learners."
    },
    {
        position: "Cambridge Primary English Teacher",
        location: "Coimbatore",
        type: "Full-time",
        description: "We are seeking a passionate and experienced Cambridge Primary English Teacher to deliver engaging, inquiry-driven lessons aligned with the Cambridge curriculum. The role involves fostering strong language foundations in reading, writing, speaking, and listening while nurturing creativity, critical thinking, and confident communication among young learners."
    },
    {
        position: "ICT / Computer Science Teacher",
        location: "Coimbatore",
        type: "Full-time",
        description: "We are seeking an innovative ICT / Computer Science Teacher to guide primary and middle school students through computing basics, coding, and digital citizenship. The ideal candidate will inspire a love for technology and computational thinking."
    },
    {
        position: "Activity & Co-curricular Coach",
        location: "Coimbatore",
        type: "Full-time",
        description: "We are looking for an energetic Activity & Co-curricular Coach to lead extracurricular programs, sports, and well-being activities. Your role will be essential in promoting teamwork, resilience, and personal growth outside the standard academic classroom."
    }
]

const currentopenings = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className='w-full min-h-[50vh] bg-white py-16 md:py-24 text-black'>
            <ContainerLayout>

                {/* Header Section */}
                <div className='mb-12'>
                    <h2 className='text-2xl md:text-5xl lg:text-[48px] font-regular tracking-tight mb-2 md:mb-6'>
                        <span className='font-ppe italic font-light'>Current</span> Open Positions
                    </h2>
                    <p className='text-base md:text-[32px] leading-[1.1] font-[500] tracking-tight'>
                        Explore roles that match your<br />skills and passion.
                    </p>
                </div>

                {/* Accordion Table Component */}
                <div className='w-full border-t-2 border-black/20'>

                    {/* Table Header */}
                    <div className='grid grid-cols-12 gap-4 py-6 text-sm md:text-[34px] font-medium text-black uppercase tracking-wide border-b border-black/20'>
                        <div className='col-span-6 lg:col-span-7'>POSITION</div>
                        <div className='col-span-3 lg:col-span-3'>LOCATION</div>
                        <div className='col-span-3 lg:col-span-2'>TYPE</div>
                    </div>

                    {/* Accordion List */}
                    {openings.map((job, idx) => {
                        const isOpen = activeIndex === idx

                        return (
                            <div
                                key={idx}
                                className='border-b-2 hover:border-b-3 hover:pr-3 hover:border-black border-black/20 overflow-hidden transition-colors duration-300'
                            >
                                {/* Visible Clickable Row */}
                                <div
                                    onClick={() => toggleAccordion(idx)}
                                    className='w-full cursor-pointer py-4 md:py-6 grid grid-cols-12 md:grid-cols-12 gap-x-2 md:gap-x-4 items-center group'
                                >
                                    <div className='col-span-6 md:col-span-6 lg:col-span-7 leading-[1.2] md:leading-[30px] text-[13px] md:text-2xl lg:text-[30px] font-normal pr-2 md:pr-0'>
                                        {job.position}
                                    </div>

                                    {/* Location & Type Container for Mobile Flow */}
                                    <div className='col-span-6 md:col-span-6 lg:col-span-5 grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 items-center'>
                                        <div className='lg:col-span-3 leading-[1.2] md:leading-[30px] text-[13px] md:text-[1.9rem] font-normal text-black/80'>
                                            {job.location}
                                        </div>
                                        <div className='lg:col-span-2 flex justify-between items-center text-[13px] md:text-[1.9rem] font-normal text-black/80'>
                                            <span>{job.type}</span>
                                            <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-1 md:ml-0 ${isOpen ? 'bg-black text-white' : 'bg-black/50 md:bg-black/10 text-white md:text-black group-hover:bg-black group-hover:text-white'}`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                                >
                                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* hidden/expanding content via CSS Grid Animation */}
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className='overflow-hidden'>
                                        <div className='pt-2 pb-10 pr-4 md:pr-12 lg:pr-24'>
                                            <p className='text-base md:text-lg lg:text-2xl leading-[1.1] tracking-tight font-light mb-8'>
                                                {job.description}
                                            </p>

                                            <button className='bg-[#000086] hover:bg-[#000086]/90 text-white transition-colors text-sm md:text-base px-8 py-3 rounded-[8px] font-medium'>
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </ContainerLayout>
        </div>
    )
}

export default currentopenings