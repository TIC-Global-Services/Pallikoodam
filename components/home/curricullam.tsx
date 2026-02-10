"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "@/assets/cambridge.jpg";
import image2 from "@/assets/national-curriculam.jpg";
import { useLetterReveal } from "../reuseable/texteffect/useLetterReveal";

gsap.registerPlugin(ScrollTrigger);

const curricullam = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
  const { elementRef: titleRef2 } = useLetterReveal<HTMLHeadingElement>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      // Initial state
      gsap.set(card2Ref.current, { yPercent: 100 });

      // Animate second card overlapping first
      tl.to(card2Ref.current, {
        yPercent: 0,
        duration: 1,
        ease: "power2.inOut",
      })
        // Blur first card text as second card overlaps
        .to(
          text1Ref.current,
          {
            filter: "blur(8px)",
            opacity: 0.3,
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        )
        // Keep second card text sharp
        .to(
          text2Ref.current,
          {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-background"
    >
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          {/* First Card - Cambridge */}
          <div
            ref={card1Ref}
            className="absolute top-0 left-0 w-full h-full overflow-hidden shadow-2xl"
            style={{ zIndex: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left side - Text */}
              <div
                ref={text1Ref}
                className="bg-[#000086] p-8 md:p-12 flex flex-col text-white"
              >
                <div ref={titleRef2}>
                  <h2 className="text-4xl md:text-[54px] leading-[60px] mb-2">
                    Cambridge
                  </h2>
                  <h3 className="text-2xl md:text-[54px] font-ppe leading-[60px] italic mb-6">
                    International
                  </h3>

                  <div ref={titleRef2} className="">
                    <p className="font-light italic font-ppe text-sm md:text-xl">
                      Cambridge @ RaK's
                    </p>
                    <p className="leading-[26px] tracking-tight text-sm md:text-2xl">
                      A pathway that nurtures inquiry, reflection, and
                      independent thinking.
                      <br /> Its global framework pairs seamlessly with our
                      active, project-based learning, research-led approach
                      encouraging learners to question, explore, create, and
                      connect ideas with real-world meaning.
                    </p>
                    <p className="leading-[26px] mt-10 text-sm tracking-tight md:text-2xl">
                      At <span className="font-ppe font-light">RaK's </span>
                      Cambridge becomes more than a curriculum. It becomes a
                      journey of agency, voice, and courageous curiosity.
                    </p>
                  </div>
                </div>

                <button className="bg-white text-xl mt-15 text-[#0033A0] px-10 py-3 rounded-lg hover:scale-105 transition-all duration-300 font-semibold hover:bg-gray-100  w-fit">
                  Explore Cambridge
                </button>
              </div>

              {/* Right side - Image */}
              <div className="relative h-full">
                <Image
                  src={image1}
                  alt="Cambridge curriculum students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Card - National Curriculum */}
          <div
            ref={card2Ref}
            className="absolute top-0 left-0 w-full h-full  overflow-hidden shadow-2xl"
            style={{ zIndex: 2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left side - Text */}
              <div
                ref={text2Ref}
                className="bg-[#000086] p-8 md:p-12 flex flex-col text-white"
              >
                <div ref={titleRef}>
                  <h2 className="text-4xl md:text-[54px] leading-[60px] mb-2">
                    National Curriculum
                  </h2>
                  <h3 className="font-light italic font-ppe text-sm md:text-[54px]">
                    (CBSE)
                  </h3>

                  <div ref={titleRef} className="space-y-4 text-sm md:text-base">
                    <p className="font-semibold">CBSE @ RaK's</p>
                    <p className="leading-[26px] tracking-tight text-sm md:text-2xl">
                      A strong, structured academic pathway that builds clarity,
                      discipline, and conceptual depth.
                    </p>
                    <p className="leading-[26px] tracking-tight text-sm md:text-2xl">
                      When blended with our experiential, hands-on methodology,
                      CBSE becomes dynamic helping learners understand, apply,
                      question, and express learning with confidence.
                    </p>
                    <p className="leading-[26px] mt-6 text-sm tracking-tight md:text-2xl">
                      At RaK's CBSE evolves into a pathway of rigour, purpose,
                      and meaningful mastery.
                    </p>
                  </div>
                </div>

                <button className="bg-white text-xl mt-15 text-[#0033A0] px-10 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:bg-gray-100 w-fit">
                  Explore CBSE
                </button>
              </div>

              {/* Right side - Image */}
              <div className="relative h-full">
                <Image
                  src={image2}
                  alt="CBSE curriculum students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default curricullam;
