'use client';
import React from 'react';
import Image from 'next/image';
import ContainerLayout from '@/layout/ContainerLayout';

// Importing images from assets
import img1 from '@/assets/grammar-of-raks/Values-1.jpg';
import img2 from '@/assets/grammar-of-raks/Values-2.jpg';
import img3 from '@/assets/grammar-of-raks/early-years.jpg';

const classroomData = [
  {
    title: "Sports & Movement",
    image: img1,
    description: "Morning And Evening Sports Helps Build Resilience, Teamwork, Strategy, Confidence, And Courage."
  },
  {
    title: "Educator Growth",
    image: img2,
    description: "Continuous Teacher Training, Professional Development, And Certifications To Ensure High-Quality Education Is Sustained."
  },
  {
    title: "International Exposure",
    image: img3,
    description: "Internships, Sports, Academics, Conferences, Alumni Testimonials, Parent Testimonials"
  }
];

const BeyondTheClassroom = () => {
  return (
    <section className="w-full bg-white pb-20">
      <ContainerLayout>
        {/* Title */}
        <div className="text-center mb-10 md:mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            <span className="font-ppe font-light italic">Beyond </span>The Classroom
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {classroomData.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Card */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Text */}
                <div className="absolute inset-x-0 bottom-8 text-center px-4">
                  <h3 className="text-2xl md:text-3xl lg:text-2xl text-white font-ppe font-light italic tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default BeyondTheClassroom;