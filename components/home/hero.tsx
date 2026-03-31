"use client";
import React, { useRef } from "react";
import LetterRevealWrapper from "@/components/reuseable/texteffect/LetterRevealWrapper";
import { useLetterReveal } from "../reuseable/texteffect/useLetterReveal";
import { useLoading } from "@/context/LoadingContext";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const Hero = () => {
  const spacerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>();
  const { setHeroVideoLoaded, isGlobalAudioEnabled } = useLoading();

  // Encapsulated GSAP Animations
  useHeroAnimation(spacerRef, containerRef, videoRef, textRef);

  return (
    <div ref={spacerRef} className="relative h-[250vh]">
      <section className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0" ref={containerRef}>
        <div className="flex items-center justify-center h-full w-full">
          <video
            ref={videoRef}
            src="/Admission compressed (2).mp4"
            autoPlay
            muted={!isGlobalAudioEnabled}
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
