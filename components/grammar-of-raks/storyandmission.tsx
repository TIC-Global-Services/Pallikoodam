'use client'
import Image from 'next/image'
import founder from '@/assets/grammar-of-raks/Swetha_Krishnamurthy.png'
import founder2 from '@/assets/grammar-of-raks/Mr_MichaelJoseph.png'
import ContainerLayout from '@/layout/ContainerLayout'

const StoryAndMission = () => {
  return (
    <section className='w-full bg-white py-10 md:py-20'>
      <ContainerLayout>
        {/* Founder Section */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-[10vh] md:mb-[15vh]'>

          {/* Mobile Title */}
          <h2 className='block lg:hidden text-4xl  font-medium tracking-tight mb-4'>
            <span className='font-ppe font-light italic text-[#000086]'>Founder&apos;s</span> Note
          </h2>

          {/* Founder Image */}
          <div className='relative w-full aspect-square lg:aspect-auto lg:h-[80vh] rounded-2xl overflow-hidden order-1 lg:order-none'>
            <Image
              src={founder}
              alt="Swetha Krishnamurthy - Founder Director"
              fill
              style={{ objectPosition: 'center 20%' }}
              className='object-cover'
              placeholder='blur'
            />
          </div>

          {/* Founder Message */}
          <div className='flex flex-col  justify-center order-2 lg:order-none'>
            <h2 className='hidden lg:block text-4xl md:text-5xl lg:text-5xl font-medium mb-6 md:mb-8 tracking-tight'>
              <span className='font-ppe font-light italic text-[#000086]'>Founder&apos;s</span> Note
            </h2>

            <div className='space-y-2 md:space-y-6'>
              <div>
                <p className='text-base md:text-[1.1rem] lg:text-lg text-black mb-1 leading-[1.2] text-left'>
                  At RAKS Institutions, we began with a simple yet powerful question:
                </p>
                <p className='text-base md:text-[1.1rem] lg:text-lg text-gray-500 leading-[1.2] text-left'>
                  What kind of learning environment allows children and educators to <span className='italic font-light font-ppe text-gray-800'>truly thrive?</span>
                </p>
              </div>

              <p className='text-base md:text-[1.1rem] lg:text-lg text-black leading-[1.1] text-left'>
                Our journey has been one of listening to children, teachers, families, and the spaces we inhabit. We believe that when learners are trusted, when educators are empowered, and when environments are thoughtfully designed, learning becomes meaningful and lasting.
              </p>

              <p className='text-base md:text-[1.1rem] lg:text-lg text-black leading-[1.1] text-left'>
                RAKS Institutions is not built on speed or scale alone, but on intentional growth, integrity, and purpose. Every decision we make is guided by what serves the learner best, today and in the years to come.
              </p>
            </div>

            <div className='mt-8 md:mt-10'>
              <p className='font-ppe italic font-light text-2xl md:text-3xl tracking-tight text-black mb-1'>
                Ms.Swetha Krishnamurthy
              </p>
              <p className='text-md md:text-xl  font-medium text-gray-700'>
                Founder Director
              </p>
            </div>
          </div>
        </div>

        {/* Head of School Section */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>

          {/* Mobile Title */}
          <h2 className='block lg:hidden text-4xl font-medium tracking-tight mb-4 leading-none'>
            <span className='font-ppe font-light italic text-[#000086]'>Head of School,</span> RAKS Pallikkoodam School of Excellence
          </h2>

          {/* Image - Order 1 on mobile */}
          <div className='order-1 lg:order-2 relative w-full aspect-square lg:aspect-auto h-full md:h-[80vh] rounded-2xl overflow-hidden'>
            <Image
              src={founder2}
              alt="Mr. Michael Joseph Purcell - Head of School"
              fill
              style={{ objectPosition: 'center 10%' }}
              className='object-cover'
              placeholder='blur'
            />
          </div>

          {/* Text Content - Order 2 on mobile */}
          <div className='order-2 lg:order-1 flex flex-col justify-center'>
            <h2 className='hidden lg:block text-4xl md:text-5xl lg:text-5xl font-medium mb-6 md:mb-8 tracking-tight leading-[1.1]'>
              <span className='font-ppe font-light italic text-[#000086]'>Head of School,</span> RAKS Pallikkoodam School of Excellence
            </h2>

            <div className='space-y-4 md:space-y-6'>
              <p className='text-base md:text-[1.1rem] lg:text-lg text-black leading-[1.1] text-left'>
                Mr. Michael Joseph Purcell brings 25+ years of experience in teaching and international school leadership. Trained in engineering and physics in the United States, he has taught mathematics, science, and interdisciplinary subjects while also coaching school sports.
              </p>

              <p className='text-base md:text-[1.1rem] lg:text-lg text-black leading-[1.1] text-left'>
                A contributor to the International Baccalaureate Organization, he has led initiatives in digital citizenship, web literacy, academic integrity, and open-source learning.
              </p>

              <p className='text-base md:text-[1.1rem] lg:text-lg  text-black leading-[1.3] text-left'>
                His global experience includes leadership roles at Mahindra United World College of India, NIST International School, and KC High International School, and he serves on the Governing Board of Edubridge International School, Mumbai.
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  )
}

export default StoryAndMission