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
    <div className=" px-4 md:px-20 py-20 md:py-20 flex flex-col">
      <p className="text-black text-sm md:text-base lg:text-lg font-extrabold mb-3 md:mb-5">
        RESOURCES
      </p>

      <div className="flex flex-col md:flex-row gap-2 mb-3 md:mb-5">
        <p className="text-black text-3xl lg:text-4xl font-normal uppercase">
          Utilize our Powerful Tools{" "}
          <span className="text-purple-500 font-thin">
            Drive your Business Success
          </span>
        </p>
        <Image src="/icons/flash.svg" alt="" width={60} height={80} />
      </div>

      <div className="w-full h-full">
        <Carousel autoSlide={true}>{slides}</Carousel>
      </div>
    </div>
  );
}
