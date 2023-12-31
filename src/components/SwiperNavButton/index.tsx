import './SwiperNavButton.scss';

interface SwiperNavButtonsProps {
  fraction: string;
}

const SwiperNavButtons = ({ fraction }: SwiperNavButtonsProps) => {
  return (
    <div className="navigation">
      <p className="navigation__info">{fraction}</p>
      <button className="navigation__btn navigation__btn_type_left review-swiper-button-prev" />
      <button className="navigation__btn navigation__btn_type_right review-swiper-button-next" />
    </div>
  );
};

export default SwiperNavButtons;
