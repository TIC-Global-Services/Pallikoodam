import React from 'react'

const Hero = () => {
    return (
        <section className="-z-10 w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    src="/sports_banner.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col gap-3 justify-center text-center px-4">
                <h1 className="text-white text-[clamp(2rem,5vw,3.4rem)] leading-[1.1]  tracking-tight font-medium">
                    Sports as the<span className="font-ppe italic font-normal">Hidden Curriculum @ RAKS</span>
                </h1>
                <p className="text-white text-[clamp(1rem,2vw,2rem)] max-w-4xl mx-auto leading-[1.1]  tracking-tight font-medium">
                    At RAKS, sports are not an add-on, they are a way of learning life itself. Through structured play, competition, and reflection, learners develop character, discipline, and lifelong skills that extend far beyond the field.
                </p>
            </div>
        </section>
    )
}

export default Hero