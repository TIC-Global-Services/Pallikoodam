import React from 'react'

const Marquee = () => {
  return (
    <div className='relative z-20 w-full overflow-hidden bg-white py-10 md:py-20 border-y border-gray-200'>
        <style>
            {`
            @keyframes marquee-scroll {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-100%, 0, 0); }
            }
            .scrolling-text-container {
                display: flex;
                white-space: nowrap;
                width: max-content;
            }
            .scrolling-text {
                animation: marquee-scroll 60s linear infinite;
                display: flex;
                flex-shrink: 0;
            }
            .scrolling-text-container:hover .scrolling-text {
                animation-play-state: paused;
            }
            `}
        </style>
        
        <div className='scrolling-text-container'>
            <div className='scrolling-text'>
                {[...Array(4)].map((_, i) => (
                    <h2 key={i} className='text-5xl md:text-7xl font-medium text-black px-8 shrink-0 m-0'>
                        At RAKS, every match, every practice, and every movement builds character <span className="font-ppe font-normal text-[#000086] italic">quietly, consistently, and for life.</span>
                    </h2>
                ))}
            </div>
            
            <div className='scrolling-text' aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                    <h2 key={i} className='text-3xl md:text-7xl font-medium text-black px-8 shrink-0 m-0'>
                        At RAKS, every match, every practice, and every movement builds character <span className="font-ppe font-normal text-[#000086] italic">quietly, consistently, and for life.</span>
                    </h2>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Marquee