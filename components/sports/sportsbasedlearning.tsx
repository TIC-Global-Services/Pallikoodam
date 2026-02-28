"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import sportimg1 from '@/assets/sports/sportsbased-1.jpg';
import sportimg2 from '@/assets/sports/sportsbased-2.jpg';
import sportimg3 from '@/assets/sports/sportsbased-3.jpg';

const SportsBasedLearning = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            // Set initial off-screen positions for wiping panels and the text panel
            gsap.set('.img-panel-2, .img-panel-3', { yPercent: 100 });
            gsap.set('.text-panel-3', { autoAlpha: 0, y: 30 }); // Start slightly lower

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%", // Longer scroll duration for silky smooth wipes
                    scrub: 1,
                    pin: true,
                }
            });

            // Wipe up Panel 2 and shift text down
            tl.to('.img-panel-2', { yPercent: 0, ease: "none" }, "wipe1")
                .to(textRef.current, { y: "20vh", ease: "none" }, "wipe1");

            // Wipe up Panel 3 (and its text block) and shift main text down further
            tl.to('.img-panel-3', { yPercent: 0, ease: "none" }, "wipe2")
                .to('.text-panel-3', { autoAlpha: 1, y: 0, ease: "none" }, "wipe2")
                .to(textRef.current, { y: "40vh", ease: "none" }, "wipe2");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full h-screen bg-white relative overflow-hidden flex items-center">
            <div className="max-w-7xl mx-auto w-full h-full flex px-4 md:px-8">

                {/* Left Column - Sticky Text */}
                <div className="w-1/2 h-full flex flex-col pt-[20vh] md:pt-[25vh]">
                    <div ref={textRef} className="animated-text">
                        <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] text-black leading-[1.05] font-normal">
                            Sports-Based <br />
                            <span className="font-ppe italic">Learning</span>
                        </h2>
                    </div>
                </div>

                {/* Right Column - Wiping Images */}
                <div className="w-1/2 h-full relative flex flex-col justify-center items-start pl-4 md:pl-8">

                    {/* The image stack container */}
                    <div className="relative w-[95%] flex flex-col">

                        {/* Wiping bounds */}
                        <div className="relative w-full aspect-[5/3] rounded shadow-sm overflow-hidden z-20">

                            {/* Panel 1 */}
                            <div className="absolute inset-0 z-10 bg-gray-50">
                                <Image src={sportimg1} alt="Sports Based Learning 1" fill className="object-cover" />
                            </div>

                            {/* Panel 2 */}
                            <div className="img-panel-2 absolute inset-0 z-20 bg-gray-50">
                                <Image src={sportimg2} alt="Sports Based Learning 2" fill className="object-cover" />
                            </div>

                            {/* Panel 3 */}
                            <div className="img-panel-3 absolute inset-0 z-30 bg-gray-50">
                                <Image src={sportimg3} alt="Sports Based Learning 3" fill className="object-cover" />
                            </div>

                        </div>

                        {/* Text under Panel 3 (in DOM flow so it never gets cut off) */}
                        <div className="text-panel-3 relative w-full z-10 pt-6 cursor-default pointer-events-auto bg-transparent">
                            <h3 className="text-2xl md:text-[2rem] font-medium text-black mb-4">
                                <span className="font-ppe italic font-normal">Learning</span> Through Movement
                            </h3>
                            <p className="text-gray-800 mb-6 text-sm lg:text-[1rem] leading-relaxed w-full">
                                At RAKS, sports are intentionally designed as learning experiences, learners engage in structured sporting experiences that cultivate goal-setting and self-reflection, deepen their understanding of rules, fairness, and respect, strengthen their ability to handle both success and failure with grace, and build meaningful collaboration across team and individual sports.
                            </p>
                            <button className="bg-[#000086] text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-900 transition-colors">
                                Sports Learning
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default SportsBasedLearning;