import React from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'

import enquiryImg from '@/assets/admission/enquiry.jpg'
import interactImg from '@/assets/admission/intract.jpg'
import assessImg from '@/assets/admission/asses.jpg'
import welcomeImg from '@/assets/admission/welcome.jpg'

const defaultDesc1_1 = "We understand that choosing the right school is an important decision for every family. Our enquiry process is designed to be simple, transparent, and supportive, ensuring that all your questions are answered with clarity."
const defaultDesc1_2 = "From your first interaction with us, our team is here to guide you through the next steps, providing the information and assistance you need with care and responsiveness."
const defaultDesc2 = "We encourage parents to reach out to us through calls, email, or scheduled campus visits to gain a deeper understanding of our learning environment. Our team is dedicated to providing timely responses and personalized support, ensuring that every interaction reflects our commitment to your child's growth, safety, and academic excellence."

const stages = [
    {
        title: 'Enquire',
        img: enquiryImg,
        desc1_1: defaultDesc1_1,
        desc1_2: defaultDesc1_2,
        desc2: defaultDesc2,
    },
    {
        title: 'Interact',
        img: interactImg,
        desc1_1: defaultDesc1_1,
        desc1_2: defaultDesc1_2,
        desc2: defaultDesc2,
    },
    {
        title: 'Assess',
        img: assessImg,
        desc1_1: defaultDesc1_1,
        desc1_2: defaultDesc1_2,
        desc2: defaultDesc2,
    },
    {
        title: 'Welcome',
        img: welcomeImg,
        desc1_1: defaultDesc1_1,
        desc1_2: defaultDesc1_2,
        desc2: defaultDesc2,
    }
]

const StartYourJourney = () => {
    return (
        <ContainerLayout>
            {/* Outer wrapper to contain the sticky scrolling area */}
            <div className="relative w-full pb-16 md:pb-[15vh]">

                {/* Header Section */}
                <div className="md:sticky md:top-[80px] lg:top-[120px] bg-white z-20 pt-16 md:pt-24 pb-12 md:pb-16 lg:pb-20 border-b border-transparent shadow-[0_10px_10px_-10px_rgba(255,255,255,1)]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                        {/* Left Title: "Admission Process" */}
                        <div className="md:col-span-4 lg:col-span-4 flex items-start">
                            <h2 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-medium text-[#111] leading-tight">
                                <span className="font-ppe italic font-normal">Admission</span> Process
                            </h2>
                        </div>

                        {/* Right Group: Title + Button */}
                        <div className="md:col-span-8 lg:col-span-8 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-6">
                            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] font-medium leading-[1.1] text-[#111] max-w-xl">
                                A Step-by-Step 4-Stage<br />
                                Admission Process Guide
                            </h2>
                            <div className="shrink-0 flex items-start">
                                <button className="bg-[#000080] text-white px-8 md:px-10 py-3 md:py-4 rounded font-medium text-sm hover:bg-blue-900 transition-colors">
                                    Enquire Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Stacking Cards Section */}
                <div className="relative z-10 w-full mt-4 md:mt-0">
                    {stages.map((stage, i) => (
                        <div
                            key={i}
                            className={`bg-white border-t border-gray-300 pt-10 md:pt-14 pb-16 md:pb-20 shadow-[0_-5px_10px_-10px_rgba(0,0,0,0.1)] md:sticky`}
                            style={{
                                // Desktop sticky logic: 120 (navbar) + 240 (header) = 360 base. 90px increments for stacking headings.
                                "--stick-base": "360px",
                                "--stick-gap": "90px",
                                top: `calc(var(--stick-base) + ${i} * var(--stick-gap))`
                            } as React.CSSProperties}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 w-full h-full">

                                {/* Col 1: Heading + First Text block */}
                                <div className="md:col-span-4 flex flex-col min-h-full">
                                    <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-ppe italic leading-none text-[#111] mb-10 md:mb-[120px] lg:mb-[150px]">
                                        {stage.title}
                                    </h3>

                                    <div className="flex flex-col gap-6 md:mt-auto">
                                        <p className="text-[#333] text-[1.05rem] md:text-[0.95rem] lg:text-base leading-relaxed max-w-sm">
                                            {stage.desc1_1}
                                        </p>
                                        <p className="text-[#333] text-[1.05rem] md:text-[0.95rem] lg:text-base leading-relaxed max-w-sm">
                                            {stage.desc1_2}
                                        </p>
                                    </div>
                                </div>

                                {/* Col 2: Second Text block */}
                                <div className="md:col-span-4 flex flex-col min-h-full">
                                    {/* Push this text box to roughly horizontally align with the text in the first column */}
                                    <div className="flex flex-col gap-6 mt-4 md:mt-auto md:mb-0">
                                        <p className="text-[#333] text-[1.05rem] md:text-[0.95rem] lg:text-base leading-relaxed max-w-sm">
                                            {stage.desc2}
                                        </p>
                                    </div>
                                </div>

                                {/* Col 3: Image block */}
                                <div className="md:col-span-4 h-auto min-h-[300px] md:min-h-[450px] lg:min-h-[550px] relative mt-10 md:mt-0">
                                    <Image
                                        src={stage.img}
                                        alt={stage.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </ContainerLayout>
    )
}

export default StartYourJourney