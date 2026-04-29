'use client'
import React, { useRef, useEffect } from 'react'
import image1 from "@/assets/home/bg-image-1.png"
import image2 from "@/assets/home/bg-image-2.png"
import image3 from "@/assets/home/bg-image-3.png"
import image4 from "@/assets/home/bg-image-4.png"
import Card from '../reuseable/home/card'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ContainerLayout from '@/layout/ContainerLayout'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useLineReveal } from '../reuseable/texteffect/useLineReveal'
import { useLetterReveal } from '../reuseable/texteffect/useLetterReveal'
import BlurText from '../reuseable/texteffect/BlurText'

const DifferenceWeCreate = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const data = [
    {
      title: "Two Paths, One Future",
      description: "A curriculum built to honour choice, nurture strengths, and celebrate growth",
      image: image1
    }, {
      title: "Innovation Labs",
      description: "Thoughtfully designed environments that inspire exploration and belonging",
      image: image2
    }, {
      title: "Expert Mentorship",
      description: "Mentors who listen, guide, and help learners build authentic understanding.",
      image: image3
    }, {
      title: "Purpose-Built Spaces",
      description: "Thoughtfully designed environments that inspire exploration and belonging.",
      image: image4
    }
  ];

  useEffect(() => {
    // Update swiper after component mounts and images load
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.update();
      }, 100);
    }
  }, []);

  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();

  return (
    <div className='bg-[#000086]'>
      {/* <ContainerLayout> */}
      <div className="flex flex-col gap-10 rounded-t-[40px] overflow-hidden bg-white py-8 md:py-14">
        <div ref={titleRef} className='flex flex-col md:gap-3 px-[3%]'>
          <h1 className='md:text-[44px] text-[32px] font-medium tracking-tighter leading-[64px]'>The <span className='text-[#000086] font-ppe italic font-light'>Difference</span> We Create</h1>
          <p className='text-sm md:text-[clamp(16px,5vw,1.125rem)] font-medium  md:leading-[24px] md:max-w-[50%]'>Discover what sets <span className='font-ppe font-light'>RAKS Pallikkoodam</span>-apart a future focused learning community where every space, every mentor, and every experience is thoughtfully designed with purpose and care.</p>
        </div>

        {/* Desktop layout */}
        <div className="w-full relative hidden md:flex gap-4 px-[3%] pb-20">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                variant={index % 2 === 0 ? 'text-top' : 'text-bottom'}
                className="w-[18vw] hover:scale-105 transition-all duration-300"
                style={{ height: 'clamp(400px, 60vh, 800px)' }}
              />
            )
          })}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden px-[3%] pb-10">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={2}
            spaceBetween={12}
            className="w-full"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  variant={index % 2 === 0 ? 'text-top' : 'text-bottom'}
                  className="w-full"
                  style={{ height: 'clamp(263px, 45vh, 600px)' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-end justify-end gap-4 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
      {/* </ContainerLayout> */}
    </div>
  )
}

export default DifferenceWeCreate