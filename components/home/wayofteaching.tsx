'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import image1 from '@/assets/home/stack-1.jpg'
import image2 from '@/assets/home/stack-2.jpg'
import image3 from '@/assets/home/stack-3.jpg'
import ContainerLayout from '@/layout/ContainerLayout'

const data = [
    {
        title: <span>Learning by <span className='font-ppe italic font-light'>Design</span>, Not Delivery</span>,
        description: "Every experience is planned with intention and centred on the learner.",
        image: image1
    },
    {
        title: <span>Hands-On & Real-World <span className='font-ppe italic font-light'>Learning</span></span>,
        description: "Thinking through doing, questioning, building, making.",
        image: image2
    },
    {
        title: <span><span className='font-ppe italic font-light'>Learning</span> Begins With the Learner at the Center of Everything We Do! </span>,
        description: "Every experience is planned with intention and centred on the learner.",
        image: image3
    },
]
const Wayofteaching = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        // Ensure GSAP is loaded
        const initGsap = async () => {
            const gsap = (await import('gsap')).default
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
            gsap.registerPlugin(ScrollTrigger)

            const ctx = gsap.context(() => {
                const isMobile = window.innerWidth < 768;
                const isSmallHeightDesktop = window.innerWidth >= 768 && window.innerHeight < 768;
                const offset = isSmallHeightDesktop ? 2 : 5;
                const scrollMultiplier = isMobile ? 20 : isSmallHeightDesktop ? 75 : 100;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: `+=${data.length * scrollMultiplier}%`,
                        pin: true,
                        scrub: isMobile ? 0.2 : 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        // markers: true
                    },
                });

                data.forEach((_, index) => {
                    if (index === 0) {
                        tl.set(`.card-${index}`, { opacity: 1, yPercent: 0 });
                        return;
                    }

                    tl.fromTo(
                        `.card-${index}`,
                        { opacity: 0, yPercent: 100 },
                        { opacity: 1, yPercent: index * offset, duration: 0.5 }
                    );
                });

                // Refresh ScrollTrigger after setup to account for images loading
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 100);
            }, sectionRef);

            return () => ctx.revert();
        };

        initGsap();
    }, []);

    return (
        <section ref={sectionRef} className='w-full bg-white py-10 font-sans min-h-screen flex flex-col justify-start items-center'>
            <ContainerLayout>
                <div className='text-center mb-6 md:mb-16'>
                    <h1 className='text-3xl md:text-[54px] font-medium leading-tight tracking-tight text-black'>
                        RaK’s way of <span className='font-ppe italic font-light'>Teaching & Learning</span>
                    </h1>
                </div>

                <div className='relative w-full flex justify-center items-start' style={{ minHeight: 'clamp(400px, 55vh, 700px)' }}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`card-${index} absolute top-0 w-full max-w-5xl rounded-[10px] overflow-hidden shadow-2xl origin-top bg-white`}
                            style={{
                                height: 'clamp(400px, 55vh, 700px)',
                                zIndex: index + 1,
                            }}
                        >
                            <div className='relative w-full h-full'>
                                <Image
                                    src={item.image}
                                    alt="Way of teaching"
                                    fill
                                    className='object-cover'
                                    placeholder='blur'
                                    priority={index === 0}
                                />
                                {/* Gradient Overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                                {/* Content */}
                                <div className='absolute bottom-0 left-0 w-full p-6 md:p-14 text-white'>
                                    <h2 className='text-2xl md:text-5xl font-medium mb-2 md:mb-4 max-w-4xl leading-tight'>
                                        {item.title}
                                    </h2>
                                    <p className='text-base md:text-xl text-gray-200 max-w-md font-light'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ContainerLayout>
        </section>
    )
}

export default Wayofteaching