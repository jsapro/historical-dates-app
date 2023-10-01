import { useRef } from 'react';
import './Circle.scss';

interface CircleProps {
  slideNumber: number;
  handleCircleClick: (number: number) => void;
  wrapperRef: React.MutableRefObject<null> | null;
}

const Circle = ({ slideNumber, handleCircleClick, wrapperRef }: CircleProps) => {
  return (
    <div className="circle">
      <div ref={wrapperRef} className="wrapper">
        <div
          onClick={() => handleCircleClick(0)}
          className={`${slideNumber === 0 ? `point_active` : ''} point point_1`}
        ></div>
        <div
          onClick={() => handleCircleClick(1)}
          className={`${slideNumber === 1 ? `point_active` : ''} point point_2`}
        ></div>
        <div
          onClick={() => handleCircleClick(2)}
          className={`${slideNumber === 2 ? `point_active` : ''} point point_3`}
        ></div>
        <div
          onClick={() => handleCircleClick(3)}
          className={`${slideNumber === 3 ? `point_active` : ''} point point_4`}
        ></div>
        <div
          onClick={() => handleCircleClick(4)}
          className={`${slideNumber === 4 ? `point_active` : ''} point point_5`}
        ></div>
        <div
          onClick={() => handleCircleClick(5)}
          className={`${slideNumber === 5 ? `point_active` : ''} point point_6`}
        ></div>
      </div>
    </div>
  );
};

export default Circle;
