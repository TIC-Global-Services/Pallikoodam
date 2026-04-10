import React from 'react'
import Image from 'next/image'
import ContainerLayout from '@/layout/ContainerLayout'
import tickicon from '@/assets/home/icons/tickicon.png'
import Link from 'next/link'

const Map = () => {
    return (
        <section className="bg-white w-full flex flex-col">
            {/* Full Width Map Embed */}
            <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] max-h-[600px] bg-gray-100 relative">
                {/* Optional overlay to allow scrolling over the map when not interacting */}
                <div className="absolute inset-0 z-10 select-none hover:pointer-events-none pointer-events-auto" />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.269414343806!2d77.02534575!3d11.03358055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857a224a10df1%3A0xe5495db6a04bfbea!2sRak&#39;s%20Pallikkoodam!5e0!3m2!1sen!2sus!4v1700681283624!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RAKS Pallikkoodam Location Map"
                ></iframe>
            </div>

            {/* Content Section Below Map */}
            <ContainerLayout>
                <div className="flex flex-col items-center justify-center  text-center max-w-6xl mx-auto gap-8 md:gap-10 pb-20">

                    {/* Tick Icon & Text Row */}
                    <div className="flex flex-col md:flex-row items-center overflow-hidden justify-center gap-4 md:gap-6 w-full">
                        <div className="shrink-0 scale-150">
                            <Image
                                src={tickicon}
                                alt="Checkmark icon"
                                width={90}
                                height={90}
                                className="object-contain md:w-[90px] md:h-[90px]"
                            />
                        </div>
                        <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-gray-500 font-medium leading-[1.4] text-center md:text-left">
                            We encourage parents to visit our campus to better understand our environment, teachers, and classrooms.
                        </p>
                    </div>
                    <div>
                        <Link href={'/contact-us'}>
                            <button className="bg-[#000086] text-white px-8 py-3 rounded-[6px] hover:bg-[#0000aa] transition-colors duration-300 font-medium text-[16px] xl:text-[18px] w-auto shadow-lg">
                                Schedule a Campus Tour
                            </button>
                        </Link>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default Map