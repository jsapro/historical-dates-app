import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import InnerSwiper from './InnerSwiper';
import SwiperNavButtons from './SwiperNavButton';
import Circle from './Circle';
import { historicalDates, maxMobileScreenSize } from '../utils/constants';
import './App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  const swiperContainerRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [fraction, setFraction] = useState(`1/${historicalDates.length}`);
  const [isMobileMode, setIsMobileMode] = useState(
    window.innerWidth <= maxMobileScreenSize
  );
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setIsMobileMode(window.innerWidth <= maxMobileScreenSize);
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

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      setSlideNumber(() => activeIndex);
      setFraction(`${activeIndex + 1}/${historicalDates.length}`);
      handleCircleClick(activeIndex);
    }
  };

  const wrapperRef = useRef(null);

  const handleCircleClick = (number: number) => {
    const rotate = (deg: number) => {
      if (wrapperRef.current) {
        (wrapperRef.current as HTMLElement).style.transition = '1s transform';
        (wrapperRef.current as HTMLElement).style.transform = `rotate(${deg}deg)`;
      }
    };

    const rotations = [0, 58, -122, 180, 120, -62];
    rotate(rotations[number]);

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
        wrapperRef={wrapperRef ? wrapperRef : null}
      />

      <div className="info">
        <h1 className="info__title">Исторические даты</h1>
        <p className="info__event-type">{historicalDates[slideNumber].name}</p>
      </div>
      <span className="span span_1">{findYearInterval().minYear}</span>
      <span className="span span_2">{findYearInterval().maxYear}</span>

      {!isMobileMode && <SwiperNavButtons fraction={fraction} />}

      <Swiper
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="outer-swiper"
      >
        {historicalDates.map((date) => (
          <SwiperSlide key={date.id} className="swiper-slide">
            <InnerSwiper slidesPerView={isMobileMode ? 1 : 3} events={date.events} />
          </SwiperSlide>
        ))}
      </Swiper>
      {isMobileMode && <SwiperNavButtons fraction={fraction} />}
    </div>
  );
};

export default App;
