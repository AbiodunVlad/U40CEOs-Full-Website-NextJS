"use client";
import Search from "@/components/Search";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import BecomeAMember from "@/components/BecomeAMember";
import Link from "next/link";
import { WATCH_EPISODE_VIDEOS } from "../../../pages/api/courses";

const ITEMS_PER_PAGE = 28;

type Course = {
  title: string;
  videoUrl: string;
};

export default function MediaFeatures() {
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
  const currentItems = WATCH_EPISODE_VIDEOS.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col pt-10 md:pt-20 overflow-hidden">
      <div className="w-full bg-blue-200 px-5 py-10 md:px-40 md:py-20 flex flex-col md:flex-row justify-between">
        <div className="w-full h-full md:w-1/2 flex items-center justify-center  mb-16 md:mb-0 relative">
          <div className="bg-pink-600 border border-pink-600 w-96 md:w-96 h-80 md:h-80 "></div>
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className=" w-96 md:w-96 h-52 translate-y-32 translate-x-10 absolute"
          />
        </div>

        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div className="flex flex-col">
            <h5 className="text-black text-4xl lg:text-5xl leading-7 font-extrabold mb-3">
              Step Into The
              <br /> Spotlight With Our
              <br /> TV Series
            </h5>

            <p className="text-black text-sm sm:text-lg mb-5 w-full md:w-2/3">
              Get featured; showcase your journey and achievements as an
              <span className="font-bold">“Entrepreneur to Watch”</span> with
              Under 40 CEOs, reaching a vast weekly audience.
            </p>

            <div className="flex flex-row justify-between mb-5 md:mb-10 gap-3">
              <div className="flex flex-col items-center justify-center bg-blue-600 w-1/3 md:w-1/5 py-2 mb-5 md:mb-0">
                <p className="text-white text-sm font-bold">100+</p>
                <p className="text-white text-xxs">CEOs</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-blue-600 w-1/3 md:w-1/5 py-4 mb-5 md:mb-0">
                <p className="text-white text-sm font-bold">300+</p>
                <p className="text-white text-xxs">Episodes</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-blue-600 w-1/3 md:w-1/5 py-2 mb-5 md:mb-0">
                <p className="text-white text-sm font-bold">24</p>
                <p className="text-white text-xxs text-center">
                  Countries Aired <br /> <span>(including US, UK)</span>
                </p>
              </div>
            </div>

            <Link href="/ScheduleACall">
              <button className="md:self-start bg-transparent font-bold text-black py-2 px-5 rounded-full border-blue-600 border-solid border-2 uppercase">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-blue-600 text-lg mr-5"
                />
                Share your story{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-10 md:px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-3xl lg:text-4xl font-bold mb-10">
          WATCH EPISODES
        </h5>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-7">
            {currentItems.map((course, index) => (
              <div key={index} className="flex flex-col items-center">
                <iframe src={course.url} className="w-full h-48 mb-5" />
                <p className="text-black text-sm font-bold mb-5">
                  {course.title}
                </p>
                <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                  WATCH FOR FREE
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
