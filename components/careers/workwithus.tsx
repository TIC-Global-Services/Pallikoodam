import Image from 'next/image'
import workwithusimg from '@/assets/carrer/workwithus.jpg'
import React from 'react'

const workwithus = () => {
    return (
        <div className='w-full bg-[#000086] rounded-t-[50px] md:rounded-t-[100px] overflow-hidden relative z-20 pt-10 lg:pt-0'>
            {/* Mobile Title */}
            <h2 className='text-3xl md:text-5xl font-normal mb-8 leading-tight text-white text-center block lg:hidden px-6'>
                Why <span className='font-ppe italic font-light'>Work</span> with us
            </h2>

            <div className='w-full flex flex-col-reverse lg:flex-row min-h-[50vh]'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-14 lg:pl-20 xl:pl-10 pb-16 pt-4 lg:py-24 xl:py-32 text-white'>
                    {/* Desktop Title */}
                    <h2 className='text-[44px] font-normal mb-6 tracking-tight hidden lg:block'>
                        Why<span className='font-ppe italic font-light'>Work</span> with us
                    </h2>

                    <h3 className='text-xl md:text-2xl px-2 lg:text-3xl font-medium mb-8 leading-snug'>
                        A supportive, interactive workplace that helps you <span className='font-ppe italic font-light'>thrive</span>
                    </h3>

                    <p className='text-base md:text-lg lg:text-lg text-white/95 mb-10 leading-[1.1] font-light'>
                        Collaborate, experiment, and learn in an environment designed for professional and personal growth.
                    </p>

                    <div className=''>
                        <p className='text-lg md:text-xl font-medium mb-6'>Motivated educators ready to <span className='font-ppe italic font-light'>inspire</span></p>
                        {/* <ul className='space-y-4 text-base md:text-lg font-normal'>
                            <li className='flex items-start gap-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0'></span>
                                <span>A culture rooted in <span className='font-ppe italic'>trust, respect, and shared ownership</span></span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0'></span>
                                <span>Freedom to design meaningful <span className='font-ppe font-light italic'>learning experiences</span></span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0'></span>
                                <span>Continuous professional <span className='font-ppe font-light italic'>growth and mentorship</span></span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0'></span>
                                <span>A workplace where your <span className='font-ppe font-light italic'>voice truly matters</span></span>
                            </li>
                        </ul> */}
                        <p className='text-base md:text-xl lg:text-lg text-white max-w-xl leading-[1.1] font-light'>We seek passionate educators who spark curiosity, nurture creativity, and make every learner’s journey meaningful.</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex flex-col px-6 md:px-14 lg:px-0 mb-6 lg:mb-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-auto'>
                    <div className='relative w-full h-full rounded-2xl lg:rounded-none overflow-hidden'>
                        <Image
                            src={workwithusimg}
                            alt="Work with us at RAKS"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default workwithus