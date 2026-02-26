'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import globe from '@/assets/grammar-of-raks/globe.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Introducing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftGroupRef = useRef<HTMLDivElement>(null)
  const rightGroupRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Pin the container when it reaches the top
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
    })

    // Animate as it enters the viewport and while pinned
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom', // Start animation when it enters the viewport
        end: '+=200%',       // 100vh to scroll into view + 100vh pinning duration
        scrub: 1,
      }
    })

    // Start with pendulums swung outwards ("opposite" of crossing each other)
    gsap.set(leftGroupRef.current, { rotation: 25 })
    gsap.set(rightGroupRef.current, { rotation: -25 })

    // Set 'Introducing' text floating slightly off
    gsap.set(introRef.current, { rotation: 10, x: -30, y: -20 })

    // Animate to their perfectly aligned natural CSS positions
    tl.to([leftGroupRef.current, rightGroupRef.current, introRef.current], {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className='w-full h-screen relative overflow-hidden bg-[#000086] flex flex-col items-center justify-center'>

      {/* Swinging Pendulums Container */}
      <div className='relative w-full max-w-7xl h-[60vh] md:h-[70vh] flex items-center justify-center pointer-events-none'>

        {/* Everything centers on perfectly aligned content container */}
        <div className='flex items-center justify-center relative w-full h-full'>

          {/* LEFT HALF PENDULUM */}
          <div
            ref={leftGroupRef}
            className='flex items-center gap-1 md:gap-4 pr-[2px] md:pr-2'
            style={{ transformOrigin: 'right -40vh' }}
          >
            {/* "Introducing SCH" Container */}
            <div className='flex flex-col items-start relative'>
              <span
                ref={introRef}
                className='absolute bottom-[90%] mb-1 md:mb-4 pr-1 md:pr-4 font-ppe italic text-base md:text-3xl lg:text-5xl text-white whitespace-nowrap'
              >
                Introducing
              </span>
              <h2
                className='text-[2.5rem] md:text-[7rem] lg:text-[10rem] xl:text-[11.5rem] leading-none font-bold tracking-tight text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:4px_white] lg:[-webkit-text-stroke:6px_white]'
              >
                SCH
              </h2>
            </div>

            {/* Left Globe */}
            <div className='relative w-[10vh] md:w-[22vh] h-[80vh] md:h-[190vh] shrink-0'>
              <div className='absolute bottom-[57%] left-1/2 w-px h-[60vh] md:h-[80vh] bg-white -translate-x-1/2 -z-10' />
              <div className='relative w-full h-full rounded-full overflow-hidden'>
                <Image src={globe} alt="Left Globe" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* RIGHT HALF PENDULUM */}
          <div
            ref={rightGroupRef}
            className='flex items-center gap-1 md:gap-2 pl-[2px] md:pl-1'
            style={{ transformOrigin: 'left -40vh' }}
          >
            {/* Right Globe */}
            <div className='relative w-[10vh] md:w-[22vh] h-[80vh] md:h-[190vh] shrink-0'>
              <div className='absolute bottom-[57%] left-1/2 w-px h-[50vh] bg-white -translate-x-1/2 -z-10' />
              <div className='relative w-full h-full rounded-full overflow-hidden'>
                <Image src={globe} alt="Right Globe" fill className="object-cover" />
              </div>
            </div>

            {/* L 2.0 Text */}
            <h2
              className='text-[2.5rem] md:text-[7rem] lg:text-[10rem] xl:text-[11.5rem] leading-none font-bold tracking-tight text-transparent  [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:4px_white] lg:[-webkit-text-stroke:6px_white]'
            >
              L 2.0
            </h2>
          </div>

        </div>
      </div>

      {/* Bottom Paragraph */}
      <div className='absolute bottom-[10%] max-w-[90%] md:max-w-4xl px-4 md:px-6 text-center z-10'>
        <p className='text-white/90 text-md md:text-base lg:text-2xl leading-relaxed font-normal'>
          RAKS Pallikkoodam reimagines learning with a bold, modern approach
          where curiosity leads, and creativity thrives. Classrooms become studios
          of action &mdash; learners think, design, build, and collaborate. With purposeful
          technology and real-world experiences, they sharpen the skills that shape
          confident, future-ready individuals.
        </p>
      </div>

    </div>
  )
}

export default Introducing