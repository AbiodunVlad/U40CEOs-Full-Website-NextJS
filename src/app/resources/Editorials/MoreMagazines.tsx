import Image from "next/image";
import React, { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 28;

type Course = {
  title: string;
  videoUrl: string;
};

export default function MoreMagazines() {
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
    <div className="flex justify-end">
      <div className="flex flex-col justify-end">
        <div className="flex flex-col shadow-2xl px-20 py-10 mb-10">
          <h4 className="text-black text-sm font-light mb-10">Recommended</h4>
          <div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start justify-start w-1/5">
                <Image
                  src="/images/magazines/mag1.svg"
                  alt=""
                  width={200}
                  height={250}
                  className="mb-2 bg-red-500"
                />

                <p className="text-black text-xs font-bold mb-2">
                  Adebola Williams
                </p>

                <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

                <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
                  Read
                </button>
              </div>

              <div className="flex flex-col items-start justify-start w-1/5">
                <Image
                  src="/images/magazines/mag2.svg"
                  alt=""
                  width={200}
                  height={250}
                  className="mb-2 bg-red-500"
                />

                <p className="text-black text-xs font-bold mb-2">
                  Adebola Williams
                </p>

                <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

                <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
                  Read
                </button>
              </div>

              <div className="flex flex-col items-start justify-start w-1/5">
                <Image
                  src="/images/magazines/mag3.svg"
                  alt=""
                  width={200}
                  height={250}
                  className="mb-2 bg-red-500"
                />

                <p className="text-black text-xs font-bold mb-2">
                  Adebola Williams
                </p>

                <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

                <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
                  Read
                </button>
              </div>

              <div className="flex flex-col items-start justify-start w-1/5">
                <Image
                  src="/images/magazines/mag4.svg"
                  alt=""
                  width={200}
                  height={250}
                  className="mb-2 bg-red-500"
                />

                <p className="text-black text-xs font-bold mb-2">
                  Adebola Williams
                </p>

                <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

                <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-2xl px-20 py-10 mb-10">
          <h4 className="text-black text-sm font-light mb-10">Popular</h4>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between gap-5 w-full mb-7">
              {currentItems.map((course, index) => (
                <div key={index} className="flex flex-col items-center w-1/4">
                  <iframe src={course.videoUrl} className="w-full h-48 mb-5" />

                  <p className="text-black text-sm font-bold mb-5">
                    {course.title}
                  </p>
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
    </div>
  );
}
