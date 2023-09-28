import React from 'react';
import { useSwiper } from 'swiper/react';
import './SwiperNavButton.scss'

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button className='btnPrev' onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};