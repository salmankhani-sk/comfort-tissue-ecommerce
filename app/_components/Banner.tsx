"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <div className="container mx-auto max-w-7xl p-6 lg:px-8 bg-gray-200">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center text-center bg-gray-100 shadow-xl rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-5">
                <h1 className="text-4xl font-bold text-gray-800">PremiumSoft Tissue</h1>
                <Image src="/logo3.png" alt="PremiumSoft Tissue Logo" width={70} height={70} className="rounded-full" />
              </div>
              <p className="text-gray-600 mb-6">Experience unmatched softness and strength with PremiumSoft Tissue. Ideal for everyday use, our tissue offers superior quality for a touch of luxury in every sheet.</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-150">
                Shop Now
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image src="/img8.png" alt="PremiumSoft Tissue" width={400} height={300} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center text-center bg-white shadow-xl rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-5">
                <h1 className="text-5xl font-bold text-gray-800">AngelSoft Tissue</h1>
                <Image src="/logo3.png" alt="PremiumSoft Tissue Logo" width={67} height={70} className="rounded-full" />
              </div>
              <p className="text-gray-600 mb-6">Experience unmatched softness and strength with PremiumSoft Tissue. Ideal for everyday use, our tissue offers superior quality for a touch of luxury in every sheet.</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-150">
                Shop Now
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image src="/img7.jpg" alt="PremiumSoft Tissue" width={500} height={500} className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center text-center bg-white shadow-xl rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-5">
                <h1 className="text-5xl font-bold text-gray-800">Veluxe Tissue</h1>
                <Image src="/logo3.png" alt="PremiumSoft Tissue Logo" width={80} height={80} className="rounded-full" />
              </div>
              <p className="text-gray-600 mb-6">Experience unmatched softness and strength with PremiumSoft Tissue. Ideal for everyday use, our tissue offers superior quality for a touch of luxury in every sheet.</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-150">
                Shop Now
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image src="/img10.jpeg" alt="PremiumSoft Tissue" width={400} height={300} className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
