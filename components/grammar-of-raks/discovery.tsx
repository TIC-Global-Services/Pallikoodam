'use client'
import React from 'react'
import Image from 'next/image'
import discover from '@/assets/grammar-of-raks/discovery.jpg'
import SimpleParallax from 'simple-parallax-js'

const Discovery = () => {
  return (
    <section className='w-full bg-white py-[8vh] md:py-[12vh]'>
      <div className='max-w-8xl mx-auto px-4 md:px-8'>
        <div className='relative w-full min-h-[400px] md:min-h-[500px] lg:h-[600px] rounded-2xl md:rounded-4xl overflow-hidden flex items-center'>
          {/* Background Image */}
          <div className='absolute inset-0 w-full h-full'>
            <SimpleParallax>
              <Image
              src={discover}
              alt="Child taking an assessment"
              fill
              className='object-cover'
              placeholder='blur'
            />
            </SimpleParallax>
            {/* Dark gradient overlay for text readability on the left */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent' />
          </div>

          {/* Content Overlay */}
          <div className='relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-6xl py-12 md:py-0'>
            <h2 className='text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight font-medium'>
              Discovery <span className='font-ppe italic font-normal'>Assessment</span>
            </h2>

            <p className='text-white/90 text-sm md:text-base  lg:text-xl max-w-3xl xl:text-2xl leading-snug mb-8 md:mb-12'>
              Discover where your child's true interests and strengths lie.<br className='hidden md:block'/>
              Identify learning gaps with clarity and understand how a
              modern, 21st-century learning approach can accelerate
              growth.
            </p>

            <a href="#" className='inline-flex items-center text-white text-base md:text-xl lg:text-2xl group w-fit'>
              <span className='border-b border-white pb-0.5 group-hover:border-white/60 transition-colors'>
                Take Our Free Assessment Today
              </span>
              <span className='ml-2 md:ml-3 text-xl group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discovery