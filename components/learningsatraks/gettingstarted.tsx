'use client'
import Image from 'next/image'
import gettingstart from '@/assets/learningatraks/gettingstarted.jpg'
import ContainerLayout from '@/layout/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'

const gettingstarted = () => {
    return (
        <section className='w-full  bg-gray-50 py-[8vh] md:py-[12vh]'>
            <ContainerLayout>
                <div className='relative bg-[#E9E9E9] rounded-[24px] overflow-hidden flex flex-col lg:flex-row shadow-sm'>
                    {/* Background Gradient Layer for the entire container */}
                    <h2 className='md:text-[36px] text-2xl  md:hidden md:px-10 py-5 flex justify-center items-center  font-medium lg:hidden leading-[1.1] mb-6 tracking-normal'>
                        Getting <span className='font-ppe font-normal italic'>Started</span> & Next Steps
                    </h2>
                    <div className='absolute bottom-[-30%] right-[-40%] w-[60%] h-[60%] 
      bg-[#000086] opacity-50 rounded-full blur-[130px]' />

                    {/* Text Content - Left Side on Desktop, Bottom on Mobile */}
                    <div className='relative z-10 order-2 lg:order-2 flex-1 p-2 md:p-1  lg:pl-[3%] lg:pr-1 lg:py-16'>

                        {/* Mobile Title */}
                        <h2 className='md:text-[36px] hidden md:block font-medium lg:hidden leading-[1.1] mb-6 tracking-tight'>
                            Getting <span className='font-ppe font-normal italic'>Started</span> & Next Steps
                        </h2>
                        {/* Desktop Title */}
                        <h2 className='text-[44px] lg:text-[56px] hidden lg:block font-medium mb-6 md:mb-8 leading-[1.1] tracking-tight'>
                            Getting <span className='font-ppe font-light italic'>Started</span> & Next<br />
                            <span className='font-ppe font-light italic'>Steps</span>
                        </h2>

                        <div className='pl-1 md:pl-0 mb-8'>
                            <p className='text-base md:text-lg lg:text-lg text-black font-medium tracking-tight max-w-2xl leading-[1.2] mb-8'>
                                If you're exploring the right academic pathway for your child at RAKS, we invite you to:
                            </p>

                            <ol className='list-decimal list-outside pl-4 md:pl-6 space-y-3 md:space-y-2 max-w-2xl text-black text-[14px] md:text-[16px] lg:text-[18px] font-medium'>
                                <li className='pl-2 leading-snug'>Explore future-ready curriculum options</li>
                                <li className='pl-2 leading-snug'>Visit our campus and witness inspired learning</li>
                                <li className='pl-2 leading-snug'>Talk to our admissions team for clear, guided next steps</li>
                            </ol>
                        </div>

                        <p className='text-black text-sm md:text-lg lg:text-lg leading-[1.3] mb-5 md:mb-10 tracking-tight font-medium max-w-3xl'>
                           More than a school, RAKS is where your child finds <br className='hidden md:block' /> <span className='font-ppe italic font-light'>direction, confidence, and a true sense of belonging.</span>
                        </p>

                        <div className='mb-10 md:mb-0'>
                            <a href="#" className='inline-flex items-center justify-center bg-[#000086] text-white md:px-8 px-4 py-2 md:py-3 rounded-[8px] hover:bg-[#0000aa] transition-colors duration-300 font-medium text-[16px] xl:text-[18px] w-auto shadow-lg'>
                                Apply Now
                            </a>
                        </div>
                    </div>

                    {/* Image - Right Side on Desktop, Top on Mobile */}
                    <div className='relative z-10 order-1 lg:order-1 w-full lg:w-[45%] h-[350px] md:h-[500px] lg:h-auto overflow-hidden'>
                        <SimpleParallax>
                            <Image
                                src={gettingstart}
                                alt="RAKS Pallikkoodam students getting started"
                                fill
                                className='object-cover object-center'
                                placeholder='blur'
                            />
                        </SimpleParallax>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default gettingstarted