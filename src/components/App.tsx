import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import InnerSwiper from './InnerSwiper/InnerSwiper';
import SwiperNavButtons from './SwiperNavButton/SwiperNavButton';
import Circle from './Circle/Circle';
import { historicalDates } from '../utils/constants.js';
import './App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  const swiperContainerRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [fraction, setFraction] = useState(`1/${historicalDates.length}`);
  const [isMobileMode, setIsMobileMode] = useState(window.innerWidth <= 320);
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setIsMobileMode(window.innerWidth <= 320);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', onResize);
    }, 500);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [width]);

  const swiperRef = useRef<SwiperRef>(null);

  const swiper = useSwiper();

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      setSlideNumber(() => activeIndex);

      const slideData = swiperRef.current.swiper.slides[activeIndex].textContent;

      setFraction(`${activeIndex + 1}/${historicalDates.length}`);

      const swiperInstance = swiperRef.current.swiper;
      handleCircleClick(activeIndex);
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

  const handleCircleClick = (number) => {
    const rotate = (deg) => {
      if (wrapperRef.current) {
        (wrapperRef.current as HTMLElement).style.transition = '1s transform';
        (wrapperRef.current as HTMLElement).style.transform = `rotate(${deg}deg)`;
      }
    };

    switch (number) {
      case 0:
        rotate(0);
        break;
      case 1:
        rotate(58);
        break;
      case 2:
        rotate(-122);
        break;
      case 3:
        rotate(180);
        break;
      case 4:
        rotate(120);
        break;
      case 5:
        rotate(-62);
        break;
    }

    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.slideTo(number);
    }
  };

  const findYearInterval = () => {
    const events = historicalDates[slideNumber].events;
    const years = events.map((element) => {
      return element.year;
    });
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    return { minYear, maxYear };
  };

  return (
    <div ref={swiperContainerRef} className="container">
      <Circle
        handleCircleClick={handleCircleClick}
        slideNumber={slideNumber}
        swiperRef={swiperRef ? swiperRef : null}
        wrapperRef={wrapperRef ? wrapperRef : null}
      />

      <div className="info">
        <h1 className="info__title">Исторические даты</h1>
        <p className="info__event-type">{historicalDates[slideNumber].name}</p>
      </div>
      <span className="span span_1">{findYearInterval().minYear}</span>
      <span className="span span_2">{findYearInterval().maxYear}</span>

      {!isMobileMode ? <SwiperNavButtons fraction={fraction}></SwiperNavButtons> : null}

      <Swiper
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
        modules={[Pagination, Navigation]}
        className="outer-swiper"
      >
        {historicalDates.map((date, index) => (
          <SwiperSlide key={date.id ? date.id : index} className="swiper-slide">
            <InnerSwiper
              slidesPerView={isMobileMode ? 1 : 3}
              events={date.events}
            ></InnerSwiper>
          </SwiperSlide>
        ))}
      </Swiper>
      {isMobileMode ? <SwiperNavButtons fraction={fraction}></SwiperNavButtons> : null}
    </div>
  );
};

export default App;
