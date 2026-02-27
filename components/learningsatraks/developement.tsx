'use client'
import React from 'react'
import Image from 'next/image'
import develope from '@/assets/learningatraks/developement.jpg'
import SimpleParallax from 'simple-parallax-js'

const developement = () => {
  return (
      <section className='w-full py-0 pb-10 md:py-[12vh]'>
      <div className=''>
        <div className='relative w-full h-[90vh] rounded-2xl md:rounded-4xl overflow-hidden flex items-center'>
          {/* Background Image */}
          <div className='absolute inset-0 w-full h-full'>
            {/* <SimpleParallax> */}
              <Image
              src={develope}
              alt="Child taking an assessment"
              fill
              className='object-cover object-right transform scale-100 -scale-x-100'
              placeholder='blur'
            />
            {/* </SimpleParallax> */}
            {/* Dark gradient overlay for text readability on the left */}
            <div className='absolute inset-0 bg-gradient-to-r  from-black/80 rounded-4xl via-black/50 to-transparent' />
          </div>

          {/* Content Overlay */}
          <div className='relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-4xl py-12 md:py-0'>
            <h2 className='text-3xl md:text-5xl lg:text-5xl  text-white mb-10 leading-[1.1] tracking-tight font-medium'>
              21st-Century Skills & <br/> Holistic <span className='font-ppe italic font-normal'>Development</span>
            </h2>

            <p className='text-white/90 text-sm md:text-base  lg:text-xl max-w-xl xl:text-[1.6rem]  mb-8 md:mb-12'>
              At Rak’s Pallikkoodam, we aim to nurture more than academic excellence. Through our approach, students develop modern competencies such as creativity, collaboration, digital literacy, communication, and critical thinking, all essential for today's global world.<br/> Alongside core academics, we emphasize social, emotional, and ethical growth, preparing learners not just for exams, but for life beyond school.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default developement