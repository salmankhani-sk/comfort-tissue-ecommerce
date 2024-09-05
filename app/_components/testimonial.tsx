// pages/testimonials.js
"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
          What Our Customers Are Saying
        </h2>
        {/* Swiper component with autoplay */}
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
          loop={true} // Infinite loop
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="bg-gray-200 rounded-lg p-8 text-center hover:scale-105 transition-all">
              <Image
                src="/faizi.png"
                alt="Faizan Faizi"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full"
              />
              <p className="font-bold uppercase">Faizan Faizi</p>
              <p className="text-xl font-light italic text-gray-700">
                Comfort Tissue Paper is incredibly soft and durable. It’s the only brand I trust for my family!
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-gray-200 rounded-lg p-8 text-center hover:scale-105 transition-all">
              <Image
                src="/jj.png"
                alt="Junaid Jamshaid"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full"
              />
              <p className="font-bold uppercase">Junaid Jamshaid</p>
              <p className="text-xl font-light italic text-gray-700">
                I love how strong and absorbent Comfort Tissue Paper is. It’s perfect for all my needs at home.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="bg-gray-200 rounded-lg p-8 text-center hover:scale-105 transition-all">
              <Image
                src="/zaid.png"
                alt="Zaid Khan"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full"
              />
              <p className="font-bold uppercase">Zaid Khan</p>
              <p className="text-xl font-light italic text-gray-700">
                Comfort Tissue Paper has a luxurious feel to it. It’s gentle on the skin and doesn’t tear easily. Highly recommended!
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
