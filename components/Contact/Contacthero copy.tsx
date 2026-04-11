import React from 'react'
import Image from 'next/image'
import herobanner from '@/assets/contact/contactimg.jpg'

const ContactHero = () => {
  return (
    <section className="-z-10 w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 w-full flex flex-col justify-center text-center px-4">
        <h1 className="text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.1]  tracking-tight font-medium">
          Reach Out to <br/><span className="font-ppe italic font-light">RAKS Pallikkoodam</span>
        </h1>
        <p className='md:text-[2rem] text-lg text-white text-center mt-3'> We’re here to guide and support you <br/>through your child’s enrollment journey.</p>
      </div>
    </section>
  )
}

export default ContactHero