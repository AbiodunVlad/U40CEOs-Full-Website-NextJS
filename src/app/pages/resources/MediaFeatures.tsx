"use client";
import Search from "@/app/components/Search";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col pt-20">
      <div className="bg-blue-200 px-40 py-20 flex flex-row justify-between">
        <div className="w-1/2 flex relative">
          <div className="bg-pink-600 w-2/3"></div>
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-2/3 h-52 absolute top-36 left-10"
          />
        </div>

        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h5 className="text-black text-3xl font-bold mb-3">
              Want to Feature in
              <br /> our TV Series
            </h5>
            <p className="text-black text-xs mb-5 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
              quam malesuada scelerisque ultrices gravida lobortis ac. Et vitae,
              et aliquam sed.{" "}
            </p>

            <div className="flex flex-row justify-between mb-10">
              <div className="flex flex-col items-center justify-center bg-blue-600 w-1/5 py-4">
                <p className="text-white text-sm font-bold">100+</p>
                <p className="text-white text-xxs">CEOs</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-blue-600 w-1/5 py-4">
                <p className="text-white text-sm font-bold">300+</p>
                <p className="text-white text-xxs">Episodes</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-blue-600 w-1/5 py-4">
                <p className="text-white text-sm font-bold">24</p>
                <p className="text-white text-xxs">
                  Countries Aired <br /> <span>(including US, UK)</span>
                </p>
              </div>
            </div>

            <button className=" bg-transparent font-bold text-black py-2 px-5 rounded-full border-blue-600 border-solid border-2">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-5" />
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-lg font-bold mb-10">WATCH EPISODES</h5>

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
      </div>

      <div className="flex flex-col items-center bg-gradient-to-br from-purple-600 to-blue-400 px-20 py-10">
        <h5 className="text-white text-lg text-center font-bold mb-5 uppercase">
          Looking To Join The League Of Successful <br /> Businesses In Africa?
        </h5>

        <p className="text-white text-xs uppercase mb-5">
          Book a free consultation with us today
        </p>

        <button className="text-white text-sm font-bold bg-purple-600 rounded-full py-3 px-5">
          BECOME A MEMBER
        </button>
      </div>
    </div>
  );
}
