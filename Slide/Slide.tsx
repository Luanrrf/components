"use client"; // Caso o projeto seja só em react não é necessário essa linha
import React, { useState } from "react";
import ActiveDot from "./assets/ActiveDot";
import Dot from "./assets/Dot";
import { getSlideValue } from "./utils/getSlideValue";

interface ISlide {
  SlideItems: React.JSX.Element[];
  autoplay?: number;
  arrows?: boolean;
  dots?: boolean;
}

const Slide = ({ SlideItems, autoplay, arrows, dots }: ISlide) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  if (autoplay) {
    setTimeout(() => {
      setCurrentSlide((currentSlide) => currentSlide + 1);
    }, autoplay);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full">
        {arrows && (
          <p
            onClick={() => {
              setCurrentSlide((currentSlide) => currentSlide - 1);
            }}
          >
            ArrowLeft
          </p>
        )}
        {SlideItems[getSlideValue(currentSlide, SlideItems.length)]}
        {arrows && (
          <p
            onClick={() => {
              setCurrentSlide((currentSlide) => currentSlide + 1);
            }}
          >
            ArrowRight
          </p>
        )}
      </div>
      {dots && (
        <div className="flex flex-row items-center justify-center">
          {SlideItems.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="m-1"
            >
              {index === getSlideValue(currentSlide, SlideItems.length) ? (
                <ActiveDot />
              ) : (
                <Dot />
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slide;
