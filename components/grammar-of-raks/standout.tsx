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
        <div className='py-20 md:py-32 lg:py-40 md:max-w-8xl mx-auto text-center'>
          <p className='text-xl md:text-3xl lg:text-[2.5rem] leading-relaxed text-white font-normal'>
            <span className='font-ppe font-light italic'>RAKS Pallikkoodam</span> stands at the intersection of innovation and inspiration.<br className='hidden md:block' />
            With a deep belief that<br className='md:hidden' /> &quot;
            <span className='relative inline-block'>
              <span className='relative z-10'>teaching is an artform,</span>
              <img
                ref={underlineRef}
                src="/underline.svg"
                alt="underline"
                className="absolute left-0 -bottom-1 md:-bottom-3 w-full h-3 md:h-5 z-0"
                style={{ objectFit: 'fill' }}
              />
            </span>
            &quot;<br/> we bring together educators, designers, and industry professionals to reimagine education. Our school is a living ecosystem of ideas, collaboration, and creativity, where every child<br className='md:hidden' /> &quot;<span className='font-ppe font-normal italic'>Thrives with Purpose.</span>&quot;
          </p>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Standout
