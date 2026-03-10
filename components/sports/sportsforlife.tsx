"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ball1 from '@/assets/sports/ball-1.png';
import ball2 from '@/assets/sports/ball-2.png';

const SportsForLife = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate left ball from left edge
      gsap.fromTo('.ball-left',
        { x: "-100%", opacity: 0, rotation: -45 },
        {
          x: "0%",
          opacity: 1,
          rotation: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );

      // Animate right ball from right edge
      gsap.fromTo('.ball-right',
        { x: "100%", opacity: 0, rotation: 45 },
        {
          x: "0%",
          opacity: 1,
          rotation: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );

      // Optional text reveal animation
      gsap.from('.animate-text', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative z-30 -mt-10 md:mt-24 ">
      {/* Main Rounded Dark Container */}
      <div className="w-full bg-[#000086] rounded-t-[50px] md:rounded-t-[100px] relative overflow-hidden flex flex-col items-center pt-16 pb-64 md:justify-center md:pt-32 md:pb-32 px-4 shadow-2xl md:shadow-3xl">

        {/* Visuals - Left Ball */}
        <div className="ball-left hidden md:block absolute left-0 md:-left-1/2 bottom-0 md:bottom-auto top-auto md:top-1/2 translate-y-[45%] md:-translate-y-1/2 w-[110%] md:w-full md:max-w-[1000vh] aspect-square pointer-events-none">
          <Image src={ball1} alt="Left Ball Elements" fill className="object-contain object-center md:object-center" />
        </div>

        {/* Visuals - Right Ball */}
        <div className="ball-right absolute -right-[25%] md:-right-1/2 -bottom-[10%]  md:bottom-auto top-auto md:top-1/2 translate-y-[40%] md:-translate-y-1/2 w-[150%] md:w-full md:max-w-[1000vh] aspect-square pointer-events-none">
          <Image src={ball2} alt="Right Ball Elements" fill className="object-contain rotate-45 object-center md:object-center" />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-0 text-white">
          <h2 className="animate-text text-[2.5rem] md:text-[3.5rem] lg:text-[3.4rem] font-normal mb-2 md:mb-4 leading-tight">
            <span className="font-ppe font-light italic">Sports</span> for life
          </h2>

          <h3 className="animate-text text-[1.4rem] md:text-[2.5rem] font-medium mb-6 md:mb-8 leading-snug">
            Beyond <span className="font-ppe font-light italic">School</span>, Beyond the <span className="font-ppe font-light italic">Game</span>
          </h3>

          <p className="animate-text text-[1.1rem] md:text-[1.3rem] lg:text-[1.8rem] leading-relaxed max-w-5xl md:leading-[1.8] text-white/90 font-light px-2 md:px-10">
            Sports at RAKS prepare learners not just for competition, but for life. Through consistent practice, they internalise commitment and self-discipline, respect for themselves and others, the value of effort over instant success, and a growth mindset that prioritises progress. Sport becomes a lifelong companion, nurturing wellbeing, balance, and resilience well into adulthood.
          </p>
        </div>

      </div>
    </section>
  );
}

export default SportsForLife;