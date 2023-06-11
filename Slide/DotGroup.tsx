import React from "react";
import ActiveDot from "./assets/ActiveDot";
import Dot from "./assets/Dot";

interface IDotGroup {
  children: React.ReactNode[];
  getSlideValue: (currentSlide: number, length: number) => number;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

const DotGroup = ({
  children,
  getSlideValue,
  currentSlide,
  setCurrentSlide,
}: IDotGroup) => {
  return (
    <div className="flex flex-row items-center justify-center absolute b-0 left-auto right-auto -bottom-6">
      {children.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrentSlide(index)}
          className="m-1"
        >
          {index === getSlideValue(currentSlide, children.length) ? (
            <ActiveDot />
          ) : (
            <Dot />
          )}
        </span>
      ))}
    </div>
  );
};

export default DotGroup;
