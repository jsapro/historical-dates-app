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
  const [mainSlide, setMainSlide] = useState(0);

  const swiperSlide = useSwiperSlide();

  const swiperRef = useRef<SwiperRef>(null);

  // console.log(swiperRef.current);

  const swiper = useSwiper();

  console.log('(slideNumber + 1):', slideNumber + 1);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      console.log('Active Slide Index in App:', activeIndex);
      setSlideNumber(() => activeIndex);
      console.log('Slide Name:', historicalDates[activeIndex].name);

      const slideData = swiperRef.current.swiper.slides[activeIndex].textContent;
      // console.log('Slide Data:', slideData);

      setFraction(`${activeIndex + 1}/${historicalDates.length}`);

      const swiperInstance = swiperRef.current.swiper;
      //swiperInstance.slideTo(0, initialSlide); // change 2 to the desired initial slide index
      // swiperInstance.update();
      fn(activeIndex)
    }
  };

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  // const setSwiper = (swiper) => {
  //   console.log('Swiper Instance:', swiper);
  // };

  const wrapperRef = useRef(null);
  const [deg, setDeg] = useState(5);

  const fn = (number) => {
    // swiper.onChangeIndex(number)
    setMainSlide(number);
    console.log('number', number);
    console.log('mainSlide', mainSlide);

    setDeg(deg + 45);
    if (wrapperRef.current) {
      (wrapperRef.current as HTMLElement).style.transition = '1s transform';
      (wrapperRef.current as HTMLElement).style.transform = `rotate(${deg}deg)`;
    }

    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      //swiperInstance.slideTo(0, initialSlide); // change 2 to the desired initial slide index
      swiperInstance.slideTo(number)
    }
  };

  return (
    <div ref={swiperContainerRef} className="container">
      <div className="div">
        <span className="span span_1">1200</span>
        <span className="span span_2">1300</span>

        <div ref={wrapperRef} className="wrapper">
          <div onClick={() => fn(4)} className="point point_1"></div>
          <div onClick={() => fn(5)} className="point point_2"></div>
          <div className="point point_3"></div>
          <div className="point point_4"></div>
          <div className="point point_5"></div>
          <div className="point point_6"></div>
        </div>
      </div>
      <p>{historicalDates[slideNumber].name}</p>
      <SwiperNavButtons></SwiperNavButtons>
      <p>{fraction}</p>

      <Swiper
        // initialSlide={initialSlide}
        // onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev',
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // shouldSwiperUpdate={true}
        // observer={true}
        // shouldSwiperUpdate
      >
        {/* <h1>{message}</h1> */}
        {historicalDates.map((date, index) => (
          <>
            <SwiperSlide key={date.id ? date.id : index} className="SwiperSlide">
              <InnerSwiper events={date.events}></InnerSwiper>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default App;
