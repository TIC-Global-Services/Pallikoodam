'use client'
import React, { useRef, useEffect } from 'react'
import image1 from "@/assets/home/bg-image-1.png"
import image2 from "@/assets/home/bg-image-2.png"
import image3 from "@/assets/home/bg-image-3.png"
import image4 from "@/assets/home/bg-image-4.png"
import Card from '../reuseable/home/card'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ContainerLayout from '@/layout/ContainerLayout'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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

  return (
    <div className='bg-[#000086]'>
      {/* <ContainerLayout> */}
      <div className="flex flex-col gap-10 rounded-t-[40px] overflow-hidden bg-white p-8 md:p-14">
        <div className='flex flex-col gap-4'>
          <h1 className='text-[54px] font-medium tracking-tighter leading-[64px]'>The <span className='text-[#000086]'>Difference</span> We Create</h1>
          <p className='text-2xl max-w-[54%]'>Discover what sets <span>RaK's Pallikkoodam</span> apart—a future-focused learning community where every space, every mentor, and every experience is thoughtfully designed with purpose and care.</p>
        </div>

        <div className="w-full relative pb-20">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              }
            }}
            className="w-full py-10"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index} className="h-auto">
                  <Card
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    variant={index % 2 === 0 ? 'text-top' : 'text-bottom'}
                    className="h-full !min-h-0 !max-h-none aspect-[3/5] w-full"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="absolute bottom-0 right-0 flex gap-4 z-10 w-fit">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* </ContainerLayout> */}
    </div>
  )
}

export default DifferenceWeCreate