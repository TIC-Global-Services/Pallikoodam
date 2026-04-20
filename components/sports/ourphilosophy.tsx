import React from 'react'
import Image from 'next/image'
import ourPhilosophyImg from '@/assets/sports/philosophy-img.jpg'

const OurPhilosophy = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 max-w-360 mx-auto flex items-center justify-center">
            <div className="bg-[#f4f4f4] rounded-4xl w-full overflow-hidden flex flex-col lg:flex-row shadow-sm">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
                    <Image
                        src={ourPhilosophyImg}
                        alt="Sports field at RAKS"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-8 flex flex-col justify-center">
                    <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-tight tracking-tighter font-regular mb-5 text-black">
                        Our <span className="font-ppe italic font-light tracking-wide">Philosophy</span>
                    </h2>

                    <div className="flex flex-col gap-8 relative border-l-2 border-[#1a2b7b] pl-6 md:pl-4 py-2">
                        {/* Section 1 */}
                        <div>
                            <h3 className="text-xl md:text-[2rem] font-medium mb-3 text-black">
                                Why Sports Matter at <span className="font-ppe italic font-light  text-[#000086] tracking-wide">RAKS</span>
                            </h3>
                            <p className="text-gray-800 text-base md:text-lg leading-[1.3] font-medium max-w-lg">
                                Sports shape discipline, resilience, teamwork, leadership, and confidence. Every learner trains under expert coaches, where effort, character, and growth matter as much as results.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h3 className="text-xl md:text-[2rem] font-medium mb-3 text-black">
                                Morning <span className="font-ppe italic font-light text-[#000086] tracking-wide">Sports</span> & After-School <span className="font-ppe italic font-light text-[#000086] tracking-wide">Sports</span>
                            </h3>
                            <p className="text-gray-800 text-base md:text-lg leading-[1.3] font-medium max-w-lg">
                                Sports shape discipline, resilience, teamwork, leadership, and confidence. Every learner trains under expert coaches, where effort, character, and growth matter as much as results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPhilosophy