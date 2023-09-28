import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import InnerSwiper from './InnerSwiper/InnerSwiper';
// import Swiper core and required modules
import { SwiperNavButtons } from './SwiperNavButton';
import './App.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  const [rendered, setRendered] = useState(false);
  const swiperContainerRef = useRef(null);


  return (
    <div ref={swiperContainerRef} className="container">
  
      <h1>{message}</h1>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <InnerSwiper></InnerSwiper>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 1
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 2
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 3
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 4
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 5
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 6
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 7
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 8
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 9
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <p>777</p>Slide 10
        </SwiperSlide>
        <SwiperNavButtons></SwiperNavButtons>
      </Swiper>
      <p>------------------------</p>

    </div>
  );
};

export default App;
