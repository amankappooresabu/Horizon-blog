'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Section1Slider() {
  // Dummy data - replace with your actual data
  const slides = [
    {
      id: 1,
      title: 'Blog Post Title 1',
      excerpt: 'This is a short description of the blog post...',
      image: 'https://picsum.photos/1200/600?random=1',
    },
    {
      id: 2,
      title: 'Blog Post Title 2',
      excerpt: 'This is a short description of the blog post...',
      image: 'https://picsum.photos/1200/600?random=2',
    },
    {
      id: 3,
      title: 'Blog Post Title 3',
      excerpt: 'This is a short description of the blog post...',
      image: 'https://picsum.photos/1200/600?random=3',
    },
  ];

  return (
    <section className="w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl">{slide.excerpt}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}