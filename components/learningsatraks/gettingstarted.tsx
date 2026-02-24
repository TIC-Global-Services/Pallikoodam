'use client'
import Image from 'next/image'
import gettingstart from '@/assets/learningatraks/gettingstarted.jpg'
import ContainerLayout from '@/layout/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'

const gettingstarted = () => {
    return (
        <section className='w-full bg-gray-50 py-[8vh] md:py-[12vh]'>
            <ContainerLayout>
                <div className='relative bg-[#F5F5F5] rounded-[24px] overflow-hidden flex flex-col lg:flex-row shadow-sm'>
                    {/* Background Gradient Layer for the entire container */}
                    <div className='absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-[#ffffff] to-[#000086]  hidden md:block z-0 opacity-70' />

                    {/* Text Content - Left Side on Desktop, Bottom on Mobile */}
                    <div className='relative z-10 order-2 lg:order-2 flex-1 p-6 md:p-10 lg:pl-[3%] lg:pr-1 lg:py-16'>

                        {/* Mobile Title */}
                        <h2 className='text-[36px] font-medium lg:hidden leading-[1.1] mb-6 tracking-tight'>
                            Getting <span className='font-ppe font-normal italic'>Started</span> & Next Steps
                        </h2>

                        {/* Desktop Title */}
                        <h2 className='text-[44px] lg:text-[56px] hidden lg:block font-medium mb-6 md:mb-8 leading-[1.1] tracking-tight'>
                            Getting <span className='font-ppe font-normal italic'>Started</span> & Next<br />
                            <span className='font-ppe font-normal italic'>Steps</span>
                        </h2>

                        <div className='border-l-2 border-[#000086] pl-4 md:pl-6 mb-8'>
                            <p className='text-base md:text-lg lg:text-xl text-black max-w-lg leading-normal mb-8'>
                                If you're exploring the right academic pathway for your child at RaK's, we invite you to:
                            </p>

                            <ol className='list-decimal list-outside pl-4 space-y-3 md:space-y-4 text-black text-[14px] md:text-[16px] lg:text-[18px] font-medium'>
                                <li className='pl-2 leading-snug'>Discover our curriculum options</li>
                                <li className='pl-2 leading-snug'>Visit our campus and experience learning in action</li>
                                <li className='pl-2 leading-snug'>Connect with our admissions team for guidance on enrolment, grade placement, and programme choices</li>
                            </ol>
                        </div>

                        <p className='text-black text-[18px] md:text-[22px] lg:text-[24px] leading-snug mb-10 font-medium max-w-lg'>
                            Because choosing a school is not just about academics, it's about <span className='font-ppe italic font-normal'>"Belonging, Purpose, and Possibility."</span>
                        </p>

                        <div>
                            <a href="#" className='inline-flex items-center justify-center bg-[#000086] text-white px-8 py-3 rounded-[8px] hover:bg-[#0000aa] transition-colors duration-300 font-medium text-[16px] xl:text-[18px] w-auto shadow-lg'>
                                Apply Now
                            </a>
                        </div>
                    </div>

                    {/* Image - Right Side on Desktop, Top on Mobile */}
                    <div className='relative z-10 order-1 lg:order-1 w-full lg:w-[45%] h-[350px] md:h-[500px] lg:h-auto overflow-hidden'>
                        <SimpleParallax>
                            <Image
                                src={gettingstart}
                                alt="RaK's Pallikkoodam students getting started"
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