import React, { useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import './InnerSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InnerSwiper = ({ events, slidesPerView }) => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={70}
      grabCursor={true}
      ref={swiperRef}
      navigation={true}
      pagination
      modules={[Navigation]}
    >
      {events.map((event, index) => (
        <SwiperSlide className="swiper-slide" key={event.id}>
          <p className="swiper-slide__year">{event.year}</p>
          <p className="swiper-slide__description">{event.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InnerSwiper;
