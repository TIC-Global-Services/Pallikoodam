import React from 'react'
import Image from 'next/image'
import environments1 from '@/assets/learningatraks/learner_outcomes.jpg'
import environments2 from '@/assets/learningatraks/resource_for_parents.jpg'
import environments3 from '@/assets/learningatraks/assessment.jpg'
import environments4 from '@/assets/learningatraks/resource_for_learner.png'
import icon1 from '@/assets/admission/books.png'
import icon2 from '@/assets/admission/react.png'
import icon3 from '@/assets/admission/lab.png'
import Developement from './developement'

const Environments = () => {


    const outcomesCards = [
        {
            id: 1,
            title: <><span className='font-ppe italic pr-1 font-light'>Learner</span> Outcomes</>,
            description: "Learning outcomes reflect growth, understanding, and agency, showcased through visible thinking, portfolios, and curated project documentation rather than grades alone.",
            image: environments1,
            imagePosition: "left"
        },
        {
            id: 2,
            title: <>Resources for <span className='font-ppe italic pl-1 font-light'>Parents</span></>,
            description: "We engage families through curriculum orientations, learning reflections, and guidance to support growth at home.",
            image: environments2,
            imagePosition: "left"
        },
        {
            id: 3,
            title: <><span className='font-ppe italic pr-1 font-light'>Assessment</span></>,
            description: "Assessment @ RAKS is continuous, reflective, and growth-focused, using observations, projects, and feedback to guide meaningful learning progress.",
            image: environments3,
            imagePosition: "right"
        },
        {
            id: 4,
            title: <>Resources for <span className='font-ppe italic pl-1 font-light'>Learners</span></>,
            description: "A robust wellbeing and guidance framework supports learners through academic support, counselling, mentorship, and safe, inclusive spaces for growth and dialogue.",
            image: environments4,
            imagePosition: "right"
        }
    ];

    return (
        <>
            {/* The outer container holds everything and extends the blue background */}
            <div className='relative z-20 bg-[#000086] pt-16 pb-0 px-4 md:px-8 lg:px-[5%] rounded-t-[3rem]'>
                <div className='mb-10'>
                    <h1 className='text-white text-2xl md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-medium'>
                        Learning <span className='font-ppe italic font-normal'>Environment & Methods</span>
                    </h1>
                </div>

                {/* Grid Layout Container */}
                {/* <div className='grid grid-cols-1 lg:grid-cols-6  gap-4 lg:gap-6 pb-6 relative'>

                     {/* Card 1: Left column, large vertical card spanning 4 rows */}
                {/*  */}


                {/* Outcomes and Resources Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-12 relative'>
                    {outcomesCards.map((card) => (
                        <div key={card.id} className='bg-[#F3F4F6] h-auto md:h-[40vh] rounded-[24px] lg:rounded-[20px] overflow-hidden flex flex-col md:flex-row w-full shadow-lg p-2 md:p-3'>
                            <div className={`w-full md:w-[45%] h-[180px] md:h-full relative shrink-0 rounded-xl md:rounded-[20px] overflow-hidden ${card.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                                <Image
                                    src={card.image}
                                    alt=""
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className={`w-full md:w-[55%] flex flex-col justify-center px-3 py-6 md:px-5 lg:px-5 ${card.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                                <h2 className='text-[22px] lg:text-[26px] xl:text-[30px] font-medium tracking-tight text-[#2C313E] leading-[1.2] mb-3 lg:mb-4'>
                                    {card.title}
                                </h2>
                                <div className='border-l-3 border-[#2C313E] pl-4 py-1'>
                                    <p className='text-[#4B5563] text-sm xl:text-lg leading-[1.4]'>
                                        {card.description}
                                    </p>
                                </div>
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