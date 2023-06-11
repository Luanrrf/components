import React from "react";
import Arrow from "./assets/Arrow";

interface IArrowGroup {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

const ArrowGroup = ({ currentSlide, setCurrentSlide }: IArrowGroup) => {
  return (
    <div className="flex absolute w-full justify-between h-full flex items-center pr-4 pl-4">
      <p
        onClick={() => {
          setCurrentSlide((currentSlide) => currentSlide - 1);
        }}
      >
        <span>
            <Arrow invert />
        </span>
      </p>
      <p
        onClick={() => {
          setCurrentSlide((currentSlide) => currentSlide + 1);
        }}
      >
        <span>
            <Arrow />
        </span>
      </p>
    </div>
  );
};

export default ArrowGroup;
