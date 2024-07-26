"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import Search from "@/app/components/Search";

const ITEMS_PER_PAGE = 28;

type Course = {
  title: string;
  videoUrl: string;
};

export default function Courses() {
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
      <div className="bg-purple-500 px-10 lg:px-40 py-10 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-between lg:h-80 mb-5 lg:mb-0">
          <div className="flex-grow">
            <h5 className="text-white text-3xl font-bold mb-3">Learning Hub</h5>
            <p className="text-white text-sm">About Learning Hub</p>
          </div>
          <div className="flex-grow mb-10"></div>
          <button className="mt-auto inline-flex self-start bg-black text-white py-2 px-4 rounded-full">
            LEARN MORE
          </button>
        </div>

        <div>
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full lg:w-96 h-80"
          />
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-5 lg:px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-lg font-bold mb-10">EXPLORE COURSES</h5>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mb-7">
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
    </div>
  );
}
