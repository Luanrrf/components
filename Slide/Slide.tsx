"use client"; // Caso o projeto seja só em react não é necessário essa linha
import React, { useState } from "react";
import { getSlideValue } from "./utils/getSlideValue";
import ArrowGroup from "./ArrowGroup";
import DotGroup from "./DotGroup";

interface ISlide {
  children: React.ReactNode[];
  autoplay?: number;
  arrows?: boolean;
  dots?: boolean;
}

const Slide = ({ children, autoplay, arrows, dots }: ISlide) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  if (autoplay) {
    setTimeout(() => {
      setCurrentSlide((currentSlide) => currentSlide + 1);
    }, autoplay);
  }

  return (
    <div className="flex flex-col relative w-full items-center justify-center">

      <div className="flex justify-between w-full">
        {children[getSlideValue(currentSlide, children.length)]}
      </div>
      
      {arrows && (
        <ArrowGroup
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      )}

      {dots && (
        <DotGroup
          getSlideValue={getSlideValue}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        >
          {children}
        </DotGroup>
      )}
    </div>
  );
};

export default Slide;
