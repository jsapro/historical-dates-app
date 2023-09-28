import React from 'react';
import { useSwiper } from 'swiper/react';
import './SwiperNavButton.scss';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button className="review-swiper-button-prev">Prev</button>
      <button className="review-swiper-button-next">Next</button>
    </div>
  );
};
