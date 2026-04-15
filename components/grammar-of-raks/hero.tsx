import React from 'react'
import Image from 'next/image'
import herobanner from '@/assets/grammar-of-raks/grammer_of_raks_banner.jpg'

const Hero = () => {
  return (
    <section className="sticky top-0 -z-10 w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={herobanner}
          alt="Students in circular seating"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[90%] mx-auto text-center px-4">
        <h1 className="text-white tracking-tighter text-[clamp(2rem,5vw,4.5rem)] leading-[1] font-medium">
          A School With <span className="font-ppe italic font-normal">Purpose,</span>
          <br />
          Driven by <span className="font-ppe italic font-normal">Vision,</span>
          <br />
          Designed for the <span className="font-ppe italic font-normal">Future</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero