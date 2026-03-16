import React from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import admissonimage from '@/assets/admission/AdmissionsAt.jpg'
import Image from 'next/image'

const AdmissionAt = () => {
    return (
        // <ContainerLayout>
            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16 px-[3%] py-[10%] md:py-[10%] md:mt-20">
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-between order-1 md:order-1 md:min-h-[450px]">
                    {/* Mobile & Desktop Header */}
                    <div className="mb-6 md:mb-10 md:-translate-y-15">
                        <h2 className="text-[2.25rem] md:text-5xl lg:text-[4rem] leading-[1.1] md:leading-[60px] font-medium">
                            <span className="relative inline-block md:pb-1">
                                Admissions at <span className="font-ppe italic font-light">RAKS</span>
                            </span>
                            <br />
                            <span className="relative inline-block md:pb-1 md:mt-2">
                                <span className="font-ppe italic font-light">Pallikkoodam</span>
                            </span>
                        </h2>
                    </div>

                    {/* Mobile Image */}
                    <div className="md:hidden mb-6 w-full order-2">
                        <Image
                            src={admissonimage}
                            alt="Admissions at RAKS Pallikkoodam"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>

                    {/* Paragraph */}
                    <div className="order-3 mb-8 md:mb-8 md:pl-10 max-w-sm md:max-w-md lg:max-w-lg">
                        <p className="text-[#555] text-[1.05rem] md:text-lg lg:text-[1.2rem] leading-tight">
                            Choosing the right school is a big step — and we're here to guide you at every stage. At RAKS Pallikkoodam, we help families understand our philosophy, programmes, and learning environment so they can make an informed, confident choice.
                        </p>
                    </div>

                    {/* Start Your Journey */}
                    <div className="order-4 mt-auto flex justify-end -translate-y-10 md:justify-start md:translate-y-20">
                        <h3 className="text-[1.5rem] md:text-[3rem] lg:text-[4rem] font-medium text-right tracking-[-0.01em] md:text-left leading-[1.1] text-[#111]">
                            Start<br />
                            Your <span className="font-ppe italic font-light">Journey</span>
                        </h3>
                    </div>
                </div>

                {/* Right Image Desktop */}
                <div className="hidden md:flex h-full w-full md:w-1/2 order-2 md:order-2">
                    <Image
                        src={admissonimage}
                        alt="Admissions at RAKS Pallikkoodam"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        // </ContainerLayout>
    )
}

export default AdmissionAt