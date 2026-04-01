'use client'
import React, { useRef } from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Standout = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const underlineRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!underlineRef.current) return;

    gsap.set(underlineRef.current, { clipPath: 'inset(0 100% 0 0)' });

    gsap.to(underlineRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      }
    });
  }, { scope: sectionRef })

  return (
    <div ref={sectionRef} className='bg-[#000086] rounded-t-[50px] md:rounded-t-[100px] min-h-[60vh] flex items-center justify-center relative overflow-hidden z-20'>
      <ContainerLayout>
        <div className='py-20 md:py-32 lg:py-40 md:max-w-6xl mx-auto text-center'>
          <p className='text-xl md:text-3xl lg:text-[2.5rem] leading-[1.4] tracking-tight space-y-5 text-white font-normal'>
            <span className='font-ppe font-light italic'>Together, We Thrive</span><br className='hidden md:block' /> Founded in 2014, RAKS Institutions nurtures confident, curious, and capable learners. Rooted in the PSG legacym and guided by the Vision of the Vidhya Niketan Group of Schools<br className='md:hidden' />
          </p>
          <p className='text-xl md:text-3xl lg:text-[2.5rem] mt-5 leading-[1.2] tracking-tight space-y-5 text-white font-normal'>   
            .<br className='md:hidden' /><span className=''></span><br className='hidden md:block' />
          </p>
          <p className='text-xl mt-5 md:text-3xl lg:text-[2.5rem] leading-[1.4] space-y-5 text-white font-normal'>
             <span className='relative inline-block '>
              <span className='relative z-10'>Through experiential learning </span>
              <img
                ref={underlineRef}
                src="/underline.svg"
                alt="underline"
                className="absolute left-0 -bottom-1 md:-bottom-3 w-full h-3 md:h-5 z-0"
                style={{ objectFit: 'fill' }}
              />
            </span>
              and strong school–family partnerships, learners grow with confidence, curiosity, and purpose. @ RAKS</p>
          {/* <p className='text-xl mt-5 md:text-3xl lg:text-[2.5rem] leading-[1.4] space-y-5 text-white font-normal'></p> */}
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Standout
