import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { type HistoricalEvent } from '@constants';
import './InnerSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface InnerSwiperProps {
  events: HistoricalEvent[];
  slidesPerView: number;
}

const InnerSwiper = ({ events, slidesPerView }: InnerSwiperProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={70}
      grabCursor={true}
      ref={swiperRef}
      navigation={true}
      pagination
      modules={[Navigation]}
    >
      {events.map((event) => (
        <SwiperSlide className="swiper-slide" key={event.id}>
          <p className="swiper-slide__year">{event.year}</p>
          <p className="swiper-slide__description">{event.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InnerSwiper;
