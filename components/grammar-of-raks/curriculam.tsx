'use client'
import Image from 'next/image'
import cambridgeBuilding from '@/assets/grammar-of-raks/cambridge-curriculam.jpg'
import SimpleParallax from 'simple-parallax-js'
// import cambridgeLogo from 'cambridge-logo.png'

const Curriculam = () => {
  return (
    <section className='w-full bg-white py-[8vh] md:py-[12vh]'>
      <div className=' md:px-8'>
        {/* Title */}
        <h2 className='text-3xl md:text-5xl pl-10 lg:text-6xl font-ppe italic font-normal mb-[0vh] md:mb-[8vh]'>
          Curriculum & Programmes
        </h2>

        {/* Content Card (Left text, Right image with no gap) */}
        <div className='flex flex-col lg:flex-row w-full bg-[#f8f8f8] rounded-3xl overflow-hidden'>

          {/* Left Side - Text Content */}
          <div className='flex flex-col justify-center w-full lg:w-[50%] p-8 md:p-12 lg:p-16'>

            {/* Cambridge Logo & Title */}
            <div className='flex items-center  gap-4 mb-5 md:mb-10'>
              <div className='relative w-16 h-16 md:w-20 md:h-20 shrink-0'>
                 <Image
                  src="/cambridge-logo.png"
                  alt="Cambridge Assessment Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <h3 className='text-2xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] text-gray-900 '>
                  <span className='font-ppe italic'>Cambridge</span> Assessment<br />
                  International <span className='font-ppe italic'>Education</span>
                </h3>
              </div>
            </div>

            <div className='relative w-full overflow-hidden md:hidden lg:w-[50%] min-h-[50vh] mb-5 lg:min-h-auto'>
             <Image
              src={cambridgeBuilding}
              alt="Cambridge curriculum building"
              fill
              className='object-cover rounded-2xl'
              placeholder='blur'
            />
          </div>

            {/* Description & Programmes Container with Single Blue Line */}
            <div className='border-l-2 border-[#4b71b8] pl-5 md:pl-6 space-y-6 md:space-y-8'>

              <p className='text-sm md:text-base  leading-relaxed font-medium'>
                A globally trusted leader in international education,<br className='hidden md:block'/>
                recognized by top universities across the UK, USA, Canada,<br className='hidden md:block'/>
                India, and more than 150 countries.
              </p>

              <div>
                <h4 className='text-base md:text-lg text-gray-800 mb-3 font-medium'>
                  Programmes Offered:
                </h4>

                <div className='space-y-5'>
                  <p className='text-sm md:text-base text-gray-400 leading-normal'>
                    <span className='text-gray-500'>IGCSE (Grade 10):</span> Builds sharp analytical thinking, deep subject<br className='hidden md:block'/>
                    understanding, and a global mindset.
                  </p>

                  <p className='text-sm md:text-base text-gray-400 leading-normal'>
                    <span className='text-gray-500'>AS & A Levels (Grades 11 & 12):</span> Rigorous, future-forward<br className='hidden md:block'/>
                    qualifications that open doors to world-class higher education,<br className='hidden md:block'/>
                    often with advanced standing or credits.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Building Image */}
          <div className='relative w-full overflow-hidden hidden md:block lg:w-[50%] min-h-[50vh] lg:min-h-auto'>
           <SimpleParallax>
             <Image
              src={cambridgeBuilding}
              alt="Cambridge curriculum building"
              fill
              className='object-cover scale-90'
              placeholder='blur'
            />
           </SimpleParallax>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Curriculam