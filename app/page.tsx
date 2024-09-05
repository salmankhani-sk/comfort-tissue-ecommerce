"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Banner from './_components/Banner';
import Header from './_components/Header';
import Explore from './_components/Explore';
import Deals from './_components/orderDeals';
import Selling from './_components/selling';
import Testimonials from './_components/testimonial';
import Footer from './_components/footer';
import Contact from './_components/contact';

export default function Home() {
  useEffect(() => {
    // Initialize AOS library on client side
    AOS.init({ duration: 1000 }); // Customize the duration if needed
  }, []); // The empty dependency array ensures it runs only once after the component mounts

  return (
    <div>
      <Header />
      <Banner />
      <div data-aos="fade-up">
      <Explore /></div>
      <div data-aos="fade-left">
      <Deals /></div>

      <Selling />
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
      <Testimonials /></div>
    
      <div data-aos="fade-up">
      <Contact /></div>
      <Footer />
    </div>
  );
}
