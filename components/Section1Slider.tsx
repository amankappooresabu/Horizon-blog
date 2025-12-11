'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { slides } from '@/constants/Sliderdata';


export default function Section1Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full h-full min-h-screen relative overflow-hidden rounded-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            loading='eager'
          />
        </div>
      ))}

      <div className="absolute bottom-5 left-0 p-8 z-1 flex flex-col gap-1 2xl:gap-2 w-[80%] lg:w-[50%]">
      <span className='bg-white/20 backdrop-blur-lg text-white/80 text-lg 2xl:text-2xl  py-2.5 rounded-full w-35 2xl:w-45 text-center'>
      {slides[currentSlide].Tag}
</span>
        <h2 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-normal 2xl:mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="text-white/80  text-[18px] xl:text-[20px] 2xl:text-[22px] mb-6 leading-6 xl:leading-none">
          {slides[currentSlide].excerpt}
        </p>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full border-2 border-white/50 transition-all duration-300 ${index === currentSlide
                  ? 'bg-white'
                  : 'bg-transparent hover:bg-white/30'
                }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-25 hidden lg:flex right-1 p-8 z-1 flex flex-col items-end  lg:gap-1 xl:gap-2  w-[33%]">
       <div className='flex gap-4 items-center'>
        <div className='w-7 h-7 xl:w-10 xl:h-10  relative overflow-hidden'>
           <Image
            src='/person1.jpg'
            alt='Human'
            fill
            className="object-cover rounded-full"
            />
          </div>
          <h1 className='text-white/80 lg:text-[24px] xl:text-[26px] 2xl:text-[26px]'>Theodore Reginald</h1>
       </div>
       <div className='flex  items-center gap-4'>
        <p className='text-white/80 lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'>24 Jan 2024</p>
        <div className='bg-white rounded-full w-2 h-2'/>
        <p className='text-white/80 lg:text-[18px]  xl:text-[20px] 2xl:text-[24px]'>10 mins read</p>
       </div>
        
      </div>
    </section>
  );
}