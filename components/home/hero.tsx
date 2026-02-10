"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterRevealWrapper from "@/components/reuseable/texteffect/LetterRevealWrapper";
import { useLetterReveal } from "../reuseable/texteffect/useLetterReveal";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef} = useLetterReveal<HTMLHeadingElement>();

  useEffect(() => {
    if (!containerRef.current || !videoRef.current || !textRef.current) return;

    const video = videoRef.current;
    const text = textRef.current;

    // Set initial state
    gsap.set(text, { opacity: 0 });

    // Create scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate video from fullscreen to reduced size with rounded corners
    tl.to(video, {
      width: "65%",
      height: "65vh",
      borderRadius: "24px",
      ease: "power2.inOut",
    })
      // Fade in text after video reaches final size
      .to(
        text,
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.2",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" ref={containerRef}>
      <div className="flex items-center justify-center h-full w-full">
        <video
          ref={videoRef}
          src="/hero_section.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center text-white px-4">
            <h1  className="text-[clamp(16px,10vw,3.4rem)] md:leading-[64px] tracking-tight"><span className="font-ppe font-normal italic">Education</span> Reimagined For <br/> The Next <span className="font-ppe italic font-normal">Generation</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
