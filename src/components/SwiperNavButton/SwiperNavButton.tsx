import React from 'react';
import { useSwiper } from 'swiper/react';
import './SwiperNavButton.scss';

const SwiperNavButtons = ({ fraction }) => {
  const swiper = useSwiper();

  return (
    <>
      <div className="navigation">
        <p className="navigation__info">{fraction}</p>
        <button className="navigation__btn navigation__btn_type_left review-swiper-button-prev"></button>
        <button className="navigation__btn navigation__btn_type_right review-swiper-button-next"></button>
      </div>
    </>
  );
};

export default SwiperNavButtons;
