"use client";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ImgCarousel from "./ImgCarousel";
import Search from "@/components/Search";
import BecomeAMember from "@/components/BecomeAMember";
import Link from "next/link";

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
          <div className="mb-10 w-2/3">
            <h5 className="text-black leading-0 md:text-5xl text-3xl text-start font-extrabold">
              STARTING A <br className="hidden" /> BUSINESS WITH A{" "}
              <br className="hidden" /> FOCUS ON SALES.
            </h5>
          </div>

          <div className="flex-grow"></div>

          <div className="w-full flex flex-col items-center justify-end">
            <Link
              href="/Events"
              className="md:self-start bg-pink-600 text-lg text-white text-center py-2 w-3/4 rounded-full mb-5"
            >
              <button>BOOK YOUR SEAT</button>
            </Link>

            <Link
              href="/Events"
              className="md:self-start bg-transparent text-purple-600 text-lg text-center border border-purple-600 border-solid py-2 w-3/4 rounded-full"
            >
              <button>SEE UPCOMING EVENTS</button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2">
          <ImgCarousel autoSlide={true}>{slideImg}</ImgCarousel>
          {/* <Carousel autoSlide={true}>{slideImg}</Carousel> */}
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-5 pt-10 pb-20 md:px-20 w-full">
        <h5 className="text-black md:text-3xl text-lg font-bold mb-10">
          EVENT RECORDINGS
        </h5>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-7">
            {currentItems.map((course, index) => (
              <div key={index} className="flex flex-col items-center">
                <iframe src={course.videoUrl} className="w-full h-48 mb-5" />
                <p className="text-black text-sm font-bold mb-5">
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
                      ? "bg-pink-600 text-white"
                      : "bg-white-200 text-black border border-black"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <BecomeAMember />
    </div>
  );
}
