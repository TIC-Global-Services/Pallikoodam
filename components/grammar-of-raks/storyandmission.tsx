'use client'
import Image from 'next/image'
import founder from '@/assets/grammar-of-raks/Swetha.jpg'
import mission from '@/assets/home/campus-1.jpg'
import ContainerLayout from '@/layout/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'

const StoryAndMission = () => {
  return (
    <section className='w-full bg-gray-50 py-[8vh] md:py-[12vh]'>
      {/* Story & Mission Section */}
     <ContainerLayout>
       <div className='bg-[#F5F5F5] rounded-2xl p-4 md:p-0 mb-[8vh] md:mb-[12vh]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-center'>
          {/* Text Content */}
           <h2 className='text-4xl md:text-5xl lg:text-5xl font-medium md:hidden'>
              Our <span className='font-ppe font-normal italic text-[#000086]'>Story & Mission</span>
            </h2>
          <div className='order-2 lg:order-1 md:pl-[10%]'>
            <h2 className='text-4xl md:text-5xl lg:text-5xl hidden md:block font-medium mb-6 md:mb-8'>
              Our <span className='font-ppe font-normal italic text-[#000086]'>Story & Mission</span>
            </h2>
            <div className='border-l-2 border-[#000086] pl-2 md:pl-3'>
              <p className='text-base md:text-lg lg:text-xl text-black max-w-md leading-normal'>
                RaK's Pallikkoodam was founded with a vision to offer holistic education rooted in 
                curiosity, creativity, academic excellence, and character. Our mission is simple yet 
                profound — to build a school where every child feels seen, heard, valued, and 
                empowered to question, explore, and thrive with purpose.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className='order-1 lg:order-2 relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] md:rounded-r-2xl overflow-hidden '>
          <SimpleParallax>
              <Image
              src={mission}
              alt="RaK's Pallikkoodam students"
              fill
              className='object-cover'
              placeholder='blur'
            />
          </SimpleParallax>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end'>
          {/* Founder Image */}
           <h2 className='text-3xl md:text-5xl lg:text-5xl  md:hidden font-medium '>
              Meet the minds behind <br /><span className='font-ppe font-normal italic text-[#000086]'>RaK's Pallikkoodam</span>
            </h2>
          <div className='relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden '>
            <SimpleParallax>
              <Image
              src={founder}
              alt="Swetha Krishnamurthy - Founder Director"
              fill
              style={{objectPosition:'50% 20%'}}
              className='object-cover'
              placeholder='blur'
            />
            </SimpleParallax>
          </div>

          {/* Founder Message */}
          
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-5xl hidden md:block font-medium mb-6 md:mb-8'>
              Meet the minds behind <br /><span className='font-ppe font-normal italic text-[#000086]'>RaK's Pallikkoodam</span>
            </h2>
            <p className='text-base md:text-lg lg:text-xl text-gray-700 leading-normal mb-8 md:mb-10'>
              Since founding Pallikkoodam in 2014, I have remained deeply committed to upholding 
              the highest standards of teaching and learning. My vision has always centered on 
              fostering student leadership, instilling strong values, and building a close-knit community 
              where every learner feels seen and supported. I believe education should be 
              meaningful and hands-on, an experience that empowers students to grow into 
              confident, responsible global citizens.
            </p>
            <div>
              <p className='font-ppe italic text-2xl md:text-3xl tracking-tight text-gray-800 mb-2'>
                Swetha Krishnamurthy
              </p>
              <p className='text-lg md:text-xl font-semibold text-gray-600'>
                Founder Director
              </p>
            </div>
          </div>
        </div>
      </div>
     </ContainerLayout>
    </section>
  )
}

export default StoryAndMission