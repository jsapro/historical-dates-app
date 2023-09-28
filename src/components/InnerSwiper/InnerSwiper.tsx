import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const InnerSwiper = () => {
  return (
    <Swiper navigation={true} pagination modules={[Navigation]}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default InnerSwiper;
