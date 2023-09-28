import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import InnerSwiper from './InnerSwiper/InnerSwiper';
// import Swiper core and required modules
import { SwiperNavButtons } from './SwiperNavButton/SwiperNavButton';
import { historicalDates } from '../utils/constants.js';
import { useSwiperSlide } from 'swiper/react';
import './App.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  const swiperContainerRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [fraction, setFraction] = useState(`1/${historicalDates.length}`);

  const swiperSlide = useSwiperSlide();

  const swiperRef = useRef<SwiperRef>(null);

  // console.log(swiperRef.current);

  const swiper = useSwiper();

  console.log(fraction);
  console.log('slideNumber', slideNumber + 1);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      console.log('Active Slide Index in App:', activeIndex);
      setSlideNumber(() => activeIndex);
      console.log(historicalDates[activeIndex].name);
      // You can perform any further actions with the active slide index
      setFraction(`${activeIndex + 1}/${historicalDates.length}`);
    }
  };

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div ref={swiperContainerRef} className="container">
      <button className="icon-arrow-long-left review-swiper-button-prev">Prev</button>
      <button className="icon-arrow-long-right review-swiper-button-next">Next</button>
     
      <Swiper
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev',
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <h1>{message}</h1> */}
        {historicalDates.map((date, index) => (
          <>
            <SwiperSlide key={date.id} className="SwiperSlide">
              <InnerSwiper events={date.events}></InnerSwiper>
            </SwiperSlide>
          </>
        ))}
        <SwiperNavButtons></SwiperNavButtons>
      </Swiper>
      <p>{historicalDates[slideNumber].name}</p>
      <p>{fraction}</p>
    </div>
  );
};

export default App;
