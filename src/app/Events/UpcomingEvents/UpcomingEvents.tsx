import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 5;

type UpcomingEvents = {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  time: string;
  date: string;
  mode: string;
  location: string;
  body: string;
};

export default function UpcomingEvents() {
  const [events, setEvents] = useState<UpcomingEvents[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/upcomingEvents");

        if (!res.ok) {
          throw new Error("Band network response");
        }

        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch Events:", error);
      }
    }
    fetchEvents();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  const pageNumbersToShow = 3;
  const startPage = Math.max(
    2,
    currentPage - Math.floor(pageNumbersToShow / 2)
  );
  const endPage = Math.min(
    totalPages - 1,
    currentPage + Math.floor(pageNumbersToShow / 2)
  );

  return (
    <div className="flex flex-col w-full justify-center md:px-40 px-5 overflow-hidden">
      <div className="flex flex-col">
        {currentItems.map((event, index) => (
          <Link href={`/Events/UpcomingEvents/${event.id}`} key={index}>
            <div
              key={index}
              className="flex sm:flex-row flex-col justify-center md:gap-40 gap-5 w-full mb-16"
            >
              <div className="sm:w-1/4 w-full">
                <Image
                  src={event.imageUrl}
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-"
                />
              </div>

              <div className="sm:w-3/4 w-full flex flex-col text-black">
                <div className="text-white text-sm bg-gradient-to-r from-pink-600 to-purple-600 py-1 px-5 rounded-sm self-start mb-7">
                  Upcoming
                </div>

                <div className="flex flex-row justify-between mb-3">
                  <p className="text-lg font-bold">{event.title}</p>
                  <p className="text-lg font-bold">${event.price}</p>
                </div>

                <div className="flex flex-row justify-start gap-2 mb-3">
                  <p className="text-xs text-gray-600">{event.time}</p>
                  <p className="text-xs text-gray-600">{event.date}</p>
                  <p className="text-xs text-gray-600">{event.mode}</p>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-600">{event.location}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 mb-10">{event.body}</p>
                </div>
                <button className="bg-purple-500 text-white font-bold py-2 px-5 rounded-full sm:self-start self-stretch flex justify-center mt-auto">
                  SAVE YOUR SEAT
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => paginate(1)}
          className={`px-4 py2 mx-1 rounded ${
            currentPage === 1
              ? "bg-purple-600 text-white"
              : "text-black border border-black"
          }`}
        >
          1
        </button>

        {currentPage > pageNumbersToShow && (
          <span className="mx-2 text-black flex items-end">...</span>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <button
            key={startPage + i}
            onClick={() => paginate(startPage + i)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === startPage + i
                ? "bg-purple-600 text-white"
                : "text-black border border-black"
            }`}
          >
            {startPage + i}
          </button>
        ))}

        {endPage < totalPages - 1 && (
          <span className="mx-2 text-black flex items-end">...</span>
        )}

        <button
          onClick={() => paginate(totalPages)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-purple-600 text-white"
              : "text-black border border-black"
          }`}
        >
          {totalPages}
        </button>
      </div>
    </div>
  );
}
