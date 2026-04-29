'use client';
import React from 'react';
import Image from 'next/image';
import ContainerLayout from '@/layout/ContainerLayout';

// Importing images from assets
import img1 from '@/assets/grammar-of-raks/sports-movements.jpg';
import img2 from '@/assets/grammar-of-raks/educator-growth.jpg';
import img3 from '@/assets/grammar-of-raks/internation_growth.png';

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
  const [isMobile, setIsMobile] = React.useState(false);
  const [mobileIndex, setMobileIndex] = React.useState(0);
  const touchStartX = React.useRef(0);
  const total = classroomData.length;
  const autoPlayRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const restartAutoPlay = React.useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % total);
    }, 3000);
  }, [total]);

  React.useEffect(() => {
    if (!isMobile) return;
    restartAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isMobile, restartAutoPlay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setMobileIndex((prev) => (prev + 1) % total);
      } else {
        setMobileIndex((prev) => (prev - 1 + total) % total);
      }
      restartAutoPlay();
    }
  };

  return (
    <section className="w-full bg-white pb-20 overflow-hidden">
      <ContainerLayout>
        <div className="text-center mb-10 md:mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            <span className="font-ppe font-light italic mr-2 md:mr-0">Beyond </span>The Classroom
          </h2>
        </div>

        <div className="md:hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${mobileIndex * 85}vw)`,
              width: `${total * 85}vw` 
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {classroomData.map((item, index) => (
              <div key={index} className="w-[80vw] ml-[5vw] mr-[5vw] flex flex-col">
                {/* Image Card */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-8 text-center px-4">
                    <h3 className="text-2xl text-white font-ppe font-light italic tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-800 leading-[1.3] font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {classroomData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setMobileIndex(idx); restartAutoPlay(); }}
                className="transition-all duration-300"
                style={{
                  width: idx === mobileIndex ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: idx === mobileIndex ? '#000086' : '#d1d5db',
                }}
              />
            ))}
          </div>
        </div>

        {/* ============ DESKTOP GRID ============ */}
        <div className="hidden md:grid grid-cols-3 gap-8 md:gap-10">
          {classroomData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-8 text-center px-4">
                  <p className="text-2xl md:text-3xl lg:text-2xl text-white font-ppe font-light italic tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-800 leading-[1.25] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default BeyondTheClassroom;