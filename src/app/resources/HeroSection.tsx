import Image from "next/image";
import React from "react";
import Course from "@/components/cards/Course";
import Event from "@/components/cards/Event";
import Carousel from "@/components/Carousel";
import MediaFeature from "@/components/cards/MediaFeature";
import Editorials from "@/components/cards/Editorials";

const slides = [
  <Course key="course1" />,
  <Event key="event1" />,
  <MediaFeature key="mediaFeature1" />,
  <Editorials key="editorials1" />,
];

export default function HeroSection() {
  return (
    <div className="p-5 md:p-10 lg:p-20 flex flex-col">
      <p className="text-black text-xs md:text-sm lg:text-base font-extrabold mb-3 md:mb-5">
        RESOURCES
      </p>

      <div className="flex flex-col md:flex-row gap-2 mb-3 md:mb-5">
        <p className="text-black text-sm md:text-lg font-normal">
          LEVERAGE THESE TOOLS TO{" "}
          <span className="text-purple-500">BOOST YOUR BUSINESS</span>
        </p>
        <Image src="/icons/flash.svg" alt="" width={30} height={60} />
      </div>

      <div className="w-full h-full">
        <Carousel autoSlide={true}>
          {/* {slides.map((slide, index) => (
            <div key={index}>{slide}</div>
          ))} */}
          {/* {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              {slide}
            </div>
          ))} */}
          {slides}
        </Carousel>
      </div>
    </div>
  );
}
