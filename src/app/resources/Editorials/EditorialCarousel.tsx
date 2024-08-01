"use client";
import React, { ReactNode, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function EditorialCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden justify-center w-full relative">
      <div
        className="flex transition-transform ease-out duration-800 mb-2"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      <div className="top-3/4 right-0 left-0 px-20 absolute">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-4 px-4 md:px-20 flex justify-center bg-red-700">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`cursor-pointer transition-all w-2 h-2 md:w-3 md:h-3 bg-white rounded-full ${
                curr === i ? "p-2 bg-opacity-100" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
