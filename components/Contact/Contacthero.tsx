import React from 'react'
import Image from 'next/image'
import contactimg from '@/assets/contact/contactimg.jpg'

const ContactHero = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-24 pb-16 md:pt-32 lg:pt-40 lg:pb-32">
      <div className="w-full px-[5%] py-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:gap-24">

          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-14">
            <div className="flex flex-col gap-6 md:gap-8">
              <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] font-medium text-[#111] tracking-tight">
                Reach Out to<br />
                <span className="font-ppe font-normal italic">RAKS Pallikkoodam</span>
              </h1>

              <div className="">
                <p className="text-lg md:text-xl lg:text-[28px] text-[#111] leading-[1.4] tracking-tight font-medium font-sans">
                  Every meaningful journey begins with a conversation. Whether you're exploring admissions
                  or seeking clarity, we're here to listen and guide you with care.
                </p>
              </div>
            </div>

            {/* Map Frame */}
            <div className="w-full aspect-video md:aspect-4/3 lg:aspect-[1.15] relative rounded-[16px] md:rounded-lg overflow-hidden bg-gray-100 shrink-0 shadow-sm border border-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.140801827471!2d76.9744866750017!3d11.028042489136152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855f4633b43%3A0xcda65fecc6c3aa!2sRak&#39;s%20Pallikkoodam!5e0!3m2!1sen!2sin!4v1709140000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col pt-[42%]">
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[150px_1fr] xl:grid-cols-[150px_1fr] gap-x-4 gap-y-12 md:gap-y-16 lg:gap-y-20">

              {/* Emails - No Label on Desktop, just floats right. Mobile flexcol */}
              <div className="hidden lg:block"></div>
              <div className="flex flex-col gap-3 text-[#111] font-medium col-span-2 lg:col-span-1">
                <a href="mailto:admissions@rakspallikkoodam.com" className="hover:underline text-sm md:text-base lg:text-lg xl:text-xl">admissions@rakspallikkoodam.com</a>
                <a href="mailto:info@rakspallikkoodam.com" className="hover:underline text-sm md:text-base lg:text-lg xl:text-xl">info@rakspallikkoodam.com</a>
              </div>

              {/* Phone */}
              <div className="text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-medium text-[#111] tracking-tight">
                Phone
              </div>
              <div className="flex flex-col justify-start pt-1 text-[#111] font-medium">
                <a href="tel:9XXXXXXXXX" className="hover:underline text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] tracking-wide">9XXXXXXXXX</a>
              </div>

              {/* Address Label and Details (Left Column) */}
              <div className="flex flex-col justify-between h-full  pb-1 md:pb-2 lg:pb-4 xl:pb-6">
                <div className="text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-medium tracking-tight">
                  Address
                </div>
                <div className="text-xs md:text-sm lg:text-base text-[#111] leading-[1.6] font-medium pt-8 mt-auto hidden sm:block">
                  <strong className="block font-bold pb-1 text-sm md:text-base">RAKS Pallikkoodam</strong>
                  774 Avinashi Road,<br />
                  V.O.C. Park Gate,<br />
                  Coimbatore - 641 018
                </div>
              </div>

              {/* Address Image (Right Column) */}
              <div className="flex flex-col gap-8 w-full">
                <div className="w-full aspect-4/3 lg:aspect-[1.1] relative rounded-[12px] md:rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-black/5 shrink-0">
                  <Image
                    src={contactimg}
                    alt="RAKS Pallikkoodam Building"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Mobile version of the address text, hidden on desktop */}
                <div className="text-xs md:text-sm lg:text-base text-[#111] leading-[1.6] font-medium sm:hidden">
                  <strong className="font-bold pb-1 text-sm md:text-base lg:text-lg">RAKS Pallikkoodam</strong>
                  774 Avinashi Road,<br />
                  V.O.C. Park Gate,<br />
                  Coimbatore - 641 018
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactHero