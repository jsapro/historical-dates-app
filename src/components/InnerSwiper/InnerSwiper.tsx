import React, { useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import './InnerSwiper.scss';

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
        slidesPerView={3}
        spaceBetween={40}
        grabCursor={true}
        ref={swiperRef}
        navigation={true}
        pagination
        modules={[Navigation]}
      >
        {events.map((event, index) => (
          <SwiperSlide className="swiper-slide" key={event.id ? event.id : index}>
            <p className="swiper-slide__year">{event.year}</p>
            <p className="swiper-slide__description">{event.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InnerSwiper;
