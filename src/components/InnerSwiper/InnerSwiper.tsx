import React, { useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// SwiperCore.use([Navigation, Pagination]);

const InnerSwiper = ({ events }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [slideNumber, setSlideNumber] = useState(1);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      console.log('Active Slide Index in InnerSwiper:', activeIndex);
      setSlideNumber(activeIndex);
    }
  };

  return (
    <>
      <Swiper
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        navigation={true}
        pagination
        modules={[Navigation]}
      >
        {events.map((event, index) => (
          <>
            <SwiperSlide key={index}>{event.description}</SwiperSlide>
            <p>event.year</p>
          </>
        ))}
      </Swiper>
      <p>{slideNumber}</p>
    </>
  );
};

export default InnerSwiper;
