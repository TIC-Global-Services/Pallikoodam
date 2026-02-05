import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    variant?: 'text-top' | 'text-bottom';
    className?: string;
    imageClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    imageContainerClassName?: string;
}

export default function Card({
    title,
    description,
    image,
    variant = 'text-top',
    className = '',
    imageClassName = '',
    titleClassName = '',
    descriptionClassName = '',
    imageContainerClassName = ''
}: CardProps) {
    const isTextTop = variant === 'text-top';

    return (
        <div className={`bg-[#E6E6E6] rounded-[40px] p-8 md:p-10 flex flex-col justify-between aspect-3/4 max-h-[700px] min-h-[700px] relative overflow-hidden ${className}`}>
            {/* Content Wrapper - Order changes based on variant */}
            {/* Text Content */}
            <div className={`z-10 relative h-full flex flex-col ${isTextTop ? 'justify-start' : 'justify-end'} pointer-events-none`}>
                <div className={`${isTextTop ? 'mb-8' : 'mt-8'} pointer-events-auto`}>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-black mb-4 ${titleClassName}`}>
                        {title}
                    </h2>
                    <p className={`text-lg md:text-2xl leading-relaxed text-gray-800 max-w-prose ${descriptionClassName}`}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Content */}
             <div
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none 
        ${isTextTop ? "top-[40%] left-[10%]" : "-top-[40%] left-[25%]"} 
        ${imageContainerClassName}`}
      >
        <Image
          src={image}   
          alt={title}
          fill
          priority
          className={`object-cover scale-350 transition-transform duration-700 ease-out
            ${isTextTop ? "object-bottom" : "object-top"} 
            ${imageClassName}`}
        />
      </div>
        </div>
    );
}