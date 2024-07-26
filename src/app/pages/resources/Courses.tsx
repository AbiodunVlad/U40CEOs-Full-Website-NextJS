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
    <div className="flex flex-col pt-20">
      <div className="bg-purple-500 px-40 py-5 flex flex-row justify-between">
        <div className="flex flex-col justify-between h-48">
          <div>
            <h5 className="text-white text-3xl font-bold mb-3">Learning Hub</h5>
            <p className="text-white text-sm mb-4">About Learning Hub</p>
          </div>

          <button className="self-start inline-flex bg-black text-white py-2 px-4 rounded-full">
            LEARN MORE
          </button>
        </div>

        <div>
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-96 h-48"
          />
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-lg font-bold mb-10">EXPLORE COURSES</h5>

        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            {currentItems.map((course, index) => (
              <div key={index} className="flex flex-col items-center w-1/4">
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

        {/* <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
