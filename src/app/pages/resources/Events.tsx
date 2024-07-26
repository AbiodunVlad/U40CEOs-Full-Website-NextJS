"use client";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ImgCarousel from "./ImgCarousel";
import Search from "@/app/components/Search";

const slideImg = [
  <Image
    key="img1"
    src="/images/resourceEvents.svg"
    alt=""
    width={350}
    height={300}
  />,
  <Image
    key="img2"
    src="/images/resourceEvents.svg"
    alt=""
    width={350}
    height={300}
  />,
  <Image
    key="img3"
    src="/images/resourceEvents.svg"
    alt=""
    width={350}
    height={300}
  />,
  <Image
    key="img4"
    src="/images/resourceEvents.svg"
    alt=""
    width={350}
    height={300}
  />,
];

const ITEMS_PER_PAGE = 28;

type Course = {
  title: string;
  videoUrl: string;
};

export default function Events() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");

        if (!res.ok) {
          throw new Error("Network response was bad!");
        }

        const data = await res.json();
        console.log("Fetched courses:", data);
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchCourses();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col pt-10 md:pt-20">
      <div className="bg-pink-200 px-5 py-10 md:px-20 flex flex-col-reverse md:flex-row justify-between">
        <div className="flex flex-col justify-between h-auto w-full md:w-1/2 mb-10 md:mb-0">
          <div className="mb-10">
            <h5 className="text-black leading-10 text-2xl md:text-3xl font-bold">
              STARTING A <br /> BUSINESS WITH A <br /> FOCUS ON SALES.
            </h5>
          </div>

          <div className="flex-grow"></div>

          <div className="w-full flex flex-col items-center justify-end">
            <button className="self-start bg-pink-600 text-white text-center py-2 w-3/4 rounded-full mb-5">
              BOOK YOUR SEAT
            </button>

            <button className="self-start bg-transparent text-purple-600 text-center border border-purple-600 border-solid py-2 w-3/4 rounded-full">
              SEE UPCOMING EVENTS
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2">
          <ImgCarousel autoSlide={true}>{slideImg}</ImgCarousel>
          {/* <Carousel autoSlide={true}>{slideImg}</Carousel> */}
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-5 pt-10 pb-20 md:px-20 w-full">
        <h5 className="text-black text-lg font-bold mb-10">EVENT RECORDINGS</h5>

        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row justify-between gap-5 w-full mb-7">
            {currentItems.map((course, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full md:w-1/4"
              >
                <iframe src={course.videoUrl} className="w-full h-48 mb-5" />

                <p className="text-black text-sm font-bold mb-5 text-center md:text-left">
                  {course.title}
                </p>

                <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                  ENROL NOW
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {Array.from(
              { length: Math.ceil(courses.length / ITEMS_PER_PAGE) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === i + 1
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gradient-to-br from-purple-600 to-blue-400 px-5 py-10 md:px-20">
        <h5 className="text-black text-lg text-center font-bold mb-5 uppercase">
          Looking To Join The League Of Successful <br /> Businesses In Africa?
        </h5>

        <p className="text-black text-xs uppercase mb-5 text-center">
          Book a free consultation with us today
        </p>

        <button className="text-white text-sm font-bold bg-purple-600 rounded-full py-3 px-5">
          BECOME A MEMBER
        </button>
      </div>
    </div>
  );
}
