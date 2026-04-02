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
              <h1 className="text-[clamp(14px,4.2vw,3.4rem)] md:leading-[64px] tracking-tight">A <span className="font-ppe font-normal italic">Progressive</span> Teaching  And <br /> Learning Environment  Focusing <br /> On Human <span className="font-ppe italic font-normal">Flourishing</span></h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center items-center z-50 px-4">
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 md:py-3">
            <div className="flex items-center justify-center">
              <div className="dot-animation bg-black" />
            </div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-widest font-normal uppercase text-black whitespace-nowrap leading-none">
              Keep scrolling
            </span>
          </div>

          <style jsx>{`
            .dot-animation {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              animation: pulseCircle 1.5s infinite ease-in-out;
              flex-shrink: 0;
            }

            @media (min-width: 640px) {
              .dot-animation {
                width: 8px;
                height: 8px;
              }
            }

            @media (min-width: 768px) {
              .dot-animation {
                width: 10px;
                height: 10px;
              }
            }

            @media (min-width: 1024px) {
              .dot-animation {
                width: 12px;
                height: 12px;
              }
            }

            @keyframes pulseCircle {
              0% {
                opacity: 0.3;
                transform: scale(0.8) translateX(0);
              }
              50% {
                opacity: 1;
                transform: scale(1.2) translateX(2px);
              }
              100% {
                opacity: 0.3;
                transform: scale(0.8) translateX(0);
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default Hero;
