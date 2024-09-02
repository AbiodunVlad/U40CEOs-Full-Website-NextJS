"use client";
import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 28;

type Course = {
  title: string;
  videoUrl: string;
};

export default function CourseVideos() {
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
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-7">
        {currentItems.map((course, index) => (
          <div key={index} className="flex flex-col items-center mb-10">
            <iframe src={course.videoUrl} className="w-full h-48 mb-5" />
            <p className="text-black text-sm font-bold mb-5">{course.title}</p>
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
  );
}
