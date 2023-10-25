"use client"
import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
    slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
         <Image
  src={"/img/daniela-kokina-hOhlYhAiizc-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
<SwiperSlide><Image
  src={"/img/denys-nevozhai-cPV4Eqs895w-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
<SwiperSlide><Image
  src={"/img/eberhard-grossgasteiger-YV_gbygzlWk-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
<SwiperSlide><Image
  src={"/img/leio-mclaren-nGwhwpzLGnU-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
<SwiperSlide><Image
  src={"/img/matteo-catanese-4KrQq8Z6Y5c-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
  <SwiperSlide><Image
  src={"/img/neil-rosenstech-OxnhDqLcjU4-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
<SwiperSlide><Image
  src={"/img/samsommer-T0XLKgpyT_c-unsplash.jpg"}
  width={1000}
  height={1000}
  /></SwiperSlide>
      </Swiper>
    </>
  );
}
