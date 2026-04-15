"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "@/assets/home/cambridgeimg.jpg";
import image2 from "@/assets/home/national-curriculamimg.jpg";
import { useLetterReveal } from "../reuseable/texteffect/useLetterReveal";

gsap.registerPlugin(ScrollTrigger);

const curricullam = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
  const { elementRef: titleRef2, triggerAnimation: triggerAnimation2 } = useLetterReveal<HTMLHeadingElement>(0.1, false);

  useEffect(() => {
    let ctx: gsap.Context;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (self.progress > 0.15) {
                triggerAnimation2();
              }
            },
          },
        });

        gsap.set(card1Ref.current, { zIndex: 2 });
        gsap.set(card2Ref.current, { zIndex: 1, opacity: 1 });

        tl.to(text1Ref.current, {
          yPercent: 100,
          ease: "none",
        }).to(
          img1Ref.current,
          {
            yPercent: -100,
            ease: "none",
          },
          "<"
        );
        ScrollTrigger.refresh();
      }, sectionRef);
    };

    const timer = setTimeout(initAnimation, 100);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("load", handleResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white mt-20 min-h-screen"
    >
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          {/* First Card - Cambridge */}
          <div
            ref={card1Ref}
            className="absolute bg-transparent top-0 left-0 w-full h-full overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left side - Text */}
              <div
                ref={text1Ref}
                className="bg-[#000086] p-8 md:p-12 flex flex-col justify-center text-white overflow-y-auto"
              >
                <div ref={titleRef}>
                  <h2 className="text-2xl md:text-[clamp(2.5rem,5dvh,3.375rem)] leading-[1.2] mb-2">
                    Cambridge
                  </h2>
                  <h3 className="text-xl md:text-[clamp(2rem,4.5dvh,3.375rem)] font-ppe leading-[1.2] italic mb-6">
                    International
                  </h3>

                  <div className="mb-5 md:hidden">
                    <Image
                      src={image1}
                      alt="CBSE curriculum students"
                      width={800}
                      height={500}
                      className="object-cover  w-full h-auto"
                    />
                  </div>

                  <div className="">
                    <p className="font-light italic font-ppe text-sm md:text-xl">
                      Cambridge @ RAKS
                    </p>
                    <p className="md:leading-[26px] tracking-tight text-base md:text-[clamp(16px,10vw,1.125rem)]">
                      A pathway that nurtures inquiry, reflection, and
                      independent thinking.
                      <br /><br/> Its global framework pairs seamlessly with our
                      active, project-based learning, research-led approach
                      encouraging learners to question, explore, create, and
                      connect ideas with real-world meaning.
                    </p>
                    <p className="leading-[26px] mt-10 text-base tracking-tight md:text-[clamp(16px,10vw,1.125rem)]">
                      At <span className="font-ppe font-light">RAKS </span>
                      Cambridge becomes more than a curriculum. It becomes a
                      journey of agency, voice, and courageous curiosity.
                    </p>
                  </div>
                </div>

                <button
                  suppressHydrationWarning
                  className="bg-white text-sm md:text-xl mt-3 md:mt-15 text-[#0033A0] md:px-10 px-5 py-2 md:py-3 rounded-lg hover:scale-105 transition-all duration-300 font-semibold hover:bg-gray-100 w-fit"
                >
                  Explore Cambridge
                </button>
              </div>

              {/* Right side - Image (desktop only) */}
              <div ref={img1Ref} className="relative bg-[#000086] h-full hidden md:block">
                <Image
                  src={image1}
                  alt="Cambridge curriculum students"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>

          {/* Second Card - National Curriculum */}
          <div
            ref={card2Ref}
            className="absolute bg-black  top-0 left-0 w-full h-full overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left side - Text */}
              <div
                ref={text2Ref}
                className="bg-[#000086] p-8 md:p-12 flex flex-col text-white justify-center overflow-y-auto"
              >
                <div ref={titleRef2}>
                  <h2 className="text-2xl md:text-[clamp(2.5rem,5dvh,3.375rem)] leading-[1.2] mb-2">
                    National Curriculum
                  </h2>
                  <h3 className="text-xl md:text-[clamp(2rem,4.5dvh,3.375rem)] font-ppe leading-[1.2] italic mb-6">
                    (CBSE)
                  </h3>

                  <div className="mb-5 md:hidden">
                    <Image
                      src={image2}
                      alt="CBSE curriculum students"
                      width={800}
                      height={500}
                      className="object-cover w-full h-auto"
                    />
                  </div>

                  <div className="">
                    <p className="font-light italic font-ppe text-sm md:text-xl">
                      CBSE @ RAKS
                    </p>
                    <p className="leading-[26px] tracking-tight text-sm md:text-lg">
                      A strong, structured academic pathway that builds clarity,
                      discipline, and conceptual depth.<br/>
                      <br /> When blended with our experiential, hands-on
                      methodology, CBSE becomes dynamic helping learners
                      understand, apply, question, and express learning with
                      confidence.
                    </p>
                    <p className="leading-[26px] mt-10 text-sm tracking-tight md:text-lg">
                      At <span className="font-ppe font-light">RAKS</span> CBSE evolves into a pathway of rigour, purpose, and meaningful mastery.
                    </p>
                  </div>
                </div>

                <button
                  suppressHydrationWarning
                  className="bg-white text-sm md:text-xl mt-3 md:mt-15 text-[#0033A0] md:px-10 px-5 py-2 md:py-3 rounded-lg hover:scale-105 transition-all duration-300 font-semibold hover:bg-gray-100 w-fit"
                >
                  Explore CBSE
                </button>
              </div>

              {/* Right side - Image (desktop only) */}
              <div className="relative bg-[#000086] hidden md:block h-full">
                <Image
                  src={image2}
                  alt="CBSE curriculum students"
                  fill
                  className="object-cover "
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
