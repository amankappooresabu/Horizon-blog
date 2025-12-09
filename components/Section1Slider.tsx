'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { slides } from '@/constants/Sliderdata';


export default function Section1Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     id: 1,
  //     title: 'Exploring the Wonders of Hiking',
  //     excerpt: 'An iconic landmark, this post unveils the secrets that make this destination a traveler’s paradise.',
  //     image: '/Slider1.jpg',
  //     Tag: 'Destination',
  //   },
  //   {
  //     id: 2,
  //     title: 'Exploring the Wonders of Hiking',
  //     excerpt: 'An iconic landmark, this post unveils the secrets that make this destination a traveler’s paradise.',
  //     image: '/Slider1.jpg',
  //     Tag: 'Destination',
  //   },
  //   {
  //     id: 3,
  //     title: 'Exploring the Wonders of Hiking',
  //     excerpt: 'An iconic landmark, this post unveils the secrets that make this destination a traveler’s paradise.',
  //     image: '/Slider1.jpg',
  //     Tag: 'Destination',
  //   },
  // ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
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
          />
        </div>
      ))}

      {/* Text Content - Lower Left */}
      <div className="absolute bottom-5 left-0 p-8 z-1 flex flex-col gap-4 w-[40%]">
      <button className='bg-white/20 backdrop-blur-lg text-white/80 text-2xl  py-2.5 rounded-full w-45'>
      {slides[currentSlide].Tag}
</button>
        <h2 className="text-white text-5xl font-normal mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="text-white/80 text-[28px] mb-6 leading-none">
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
      <div className="absolute bottom-25 right-0 p-8 z-1 flex flex-col items-end  gap-4 w-[23%]">
       <div className='flex gap-4 items-center'>
        <div className='w-15 h-15  relative overflow-hidden'>
           <Image
            src='/person1.jpg'
            alt='Human'
            fill
            className="object-cover rounded-full"
            />
          </div>
          <h1 className='text-white/80 text-[30px]'>Theodore Reginald</h1>
       </div>
       <div className='flex  items-center gap-4'>
        <p className='text-white/80 text-[28px]'>24 Jan 2024</p>
        <div className='bg-white rounded-full w-2 h-2'/>
        <p className='text-white/80 text-[28px]'>10 mins read</p>
       </div>
        
      </div>
    </section>
  );
}