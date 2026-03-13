"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterRevealWrapper from "@/components/reuseable/texteffect/LetterRevealWrapper";
import { useLetterReveal } from "../reuseable/texteffect/useLetterReveal";
import { useLoading } from "@/context/LoadingContext";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const spacerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
  const { setHeroVideoLoaded } = useLoading();

  useEffect(() => {
    if (!spacerRef.current || !containerRef.current || !videoRef.current || !textRef.current) return;

    const video = videoRef.current;
    const text = textRef.current;

    // Set initial state
    gsap.set(text, { opacity: 0 });

    // Create scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: spacerRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * 1.5,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top top",
      end: "bottom top",
      onLeave: () => {
        if (containerRef.current) gsap.set(containerRef.current, { autoAlpha: 0 });
      },
      onEnterBack: () => {
        if (containerRef.current) gsap.set(containerRef.current, { autoAlpha: 1 });
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
    <div ref={spacerRef} className="relative h-[250vh]">
      <section className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0" ref={containerRef}>
        <div className="flex items-center justify-center h-full w-full">
          <video
            ref={videoRef}
            src="/hero_section.mp4"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setHeroVideoLoaded(true)}
            className="w-full h-full object-cover"
          />

          <div
            ref={textRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center text-white px-4">
              <h1 className="text-[clamp(14px,4.2vw,3.4rem)] md:leading-[64px] tracking-tight">A <span className="font-ppe font-normal italic">Progressive</span> Teaching  And <br /> Learning Environment  Fousing <br /> On Human <span className="font-ppe italic font-normal">Generation</span></h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
