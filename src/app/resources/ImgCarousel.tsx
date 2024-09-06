"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function ImgCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = useCallback(
    () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1)),
    [slides.length]
  );

  const next = useCallback(
    () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
    [slides.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden w-full md:w-2/3 flex flex-col mb-5">
      <div
        className="flex transition-transform ease-out duration-800 mb-5"
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

      <div className=" bottom-4 right-0 left-0 px-20">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
