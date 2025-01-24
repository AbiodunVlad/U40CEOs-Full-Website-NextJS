"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TVseries from "../home/tvSeries";
import Link from "next/link";
import { getSuccessStories } from "../../../pages/api/auth";

const ITEMS_PER_PAGE = 12;

type Stories = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  touchPoint: string;
  topic: string;
  role: string;
  body: string;

  // intro: string;
  // about: string;
  // engageHow: string;
  // results: string;
  // file: string;
};

export default function SuccessStories() {
  const [stories, setStories] = useState<Stories[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    async function fetchStories() {
      try {
        // const res = await fetch("/api/successStories");
        const res = await getSuccessStories();

        if (!res || !res.data || !Array.isArray(res.data.content)) {
          throw new Error("Unexpected response format");
        }

        // if (!res.ok) {
        //   throw new Error("Network response was bad!");
        // }

        // const data: Stories[] = await res.json();
        // const data = await res.json();
        // console.log("1. Here are your stories:", res);
        // console.log("2. Here are your stories:", res.data);
        // console.log("Here are your stories:", res.data.content);

        if (Array.isArray(res.data.content)) {
          // console.log("Data is an array, setting stories state.");
          setStories(res.data.content);
          // console.log("Setting stories state:", res);
        } else {
          // console.log("Data is not an array, setting empty stories.");
          setStories([]);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Failed to fetch stories:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    }

    // async function fetchStories() {
    //   try {
    //     const res = await getSuccessStories();

    //     if (!res || !res.data || !Array.isArray(res.data.content)) {
    //       throw new Error("Unexpected response format");
    //     }

    //     setStories(res.data.content);
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       console.error("Failed to fetch stories:", error.message);
    //     } else {
    //       console.error("An unknown error occurred");
    //     }
    //     setStories([]); // Ensure stories are reset if an error occurs
    //   }
    // }
    fetchStories();
  }, []);

  useEffect(() => {
    console.log("Stories state after update:", stories);
  }, [stories]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = stories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const midIndex = Math.ceil(currentItems.length / 2);
  const firstHalfItems = currentItems.slice(0, midIndex);
  const secondHalfItems = currentItems.slice(midIndex);

  useEffect(() => {
    console.log("Current Items:", currentItems);
  }, [currentItems]);

  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />
      <div className=" md:max-w-screen-2xl md:mx-auto">
        <div className="flex flex-col py-20 md:py-28 px-5 md:px-20">
          <h1 className="text-black text-center text-4xl lg:text-5xl font-extrabold mb-2 leading-7 md:leading-10 uppercase">
            Real Successes, Real
            <br /> Entrepreneurial Journeys
          </h1>

          <p className="text-gray-500 text-center text-sm sm:text-lg leading-2">
            See how our community members have achieved remarkable success. From
            seasoned <br className="hidden md:flex" />
            founders to emerging entrepreneurs, their stories will inspire you.
          </p>
        </div>

        <div className="px-4 md:px-20 w-full  flex flex-col md:flex-row justify-between gap-4 md:gap-28 mb-5">
          <div className="flex flex-col w-full lg:w-1/3">
            <p className="text-sm text-purple-600 font-bold mb-5">Filter</p>

            <div className="relative mb-4">
              <select className="bg-purple-300 py-4 px-5  w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none uppercase">
                <option value="" selected disabled hidden>
                  TOUCHPOINT
                </option>
                <option value="p1">Product1</option>
                <option value="p2">Product2</option>
                <option value="p3">Product3</option>
                <option value="p4">Product4</option>
                <option value="p5">Product5</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pr-5 mb-3 pointer-events-none">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <div className="relative mb-4">
              <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none uppercase">
                <option value="" selected disabled hidden>
                  TOPIC
                </option>
                <option value="t1">Topic1</option>
                <option value="t2">Topic2</option>
                <option value="t3">Topic3</option>
                <option value="t4">Topic4</option>
                <option value="t5">Topic5</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pr-5 mb-3 pointer-events-none">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <div className="relative mb-4">
              <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none uppercase">
                <option value="" selected disabled hidden>
                  INDUSTRY
                </option>
                <option value="">Industry1</option>
                <option value="">Industry2</option>
                <option value="">Industry3</option>
                <option value="">Industry4</option>
                <option value="">Industry5</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pr-5 mb-3 pointer-events-none">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <div className="relative mb-4">
              <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none uppercase">
                <option value="" selected disabled hidden>
                  LOCATION
                </option>
                <option value="">Location1</option>
                <option value="">Location2</option>
                <option value="">Location3</option>
                <option value="">Location4</option>
                <option value="">Location5</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pr-5 mb-3 pointer-events-none">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:px-20 px-5 w-full justify-center items-center gap-10 lg:gap-28 md:mb-20">
          {firstHalfItems.map((story) => (
            <Link
              href={`/successStories/${story.id}`}
              key={story.id}
              className="flex flex-col w-full border items-center h-full mb-10 shadow-2xl"
            >
              <div className="w-full h-40 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full h-auto">
                <div className="w-full h-full py-5 px-3">
                  <p className="text-black text-lg md:text-2xl font-bold mb-0">
                    {story.firstName} {story.lastName}
                  </p>

                  <p className="text-pink-600 text-xs md:text-sm mb-3">
                    {story.role} @ {story.company}
                  </p>

                  <p className="text-blue-500 text-xs md:text-sm mb-1">
                    Touchpoint: {story.touchPoint}
                  </p>

                  <p className="text-blue-500 text-xs md:text-sm mb-5">
                    Topic: {story.topic}
                  </p>

                  <p className="text-black text-xs md:text-sm md:mb-6">
                    {story.body}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {currentPage === 1 && (
          <div className="bg-gray-200 flex flex-col md:flex-row justify-between items-center mb-20 px-5 md:px-40 py-10">
            <div className="w-full md:w-1/2 flex relative mb-10">
              <div className="bg-black w-full md:w-2/3 h-44 md:h-52"></div>
              <div className="absolute  bg-gradient-to-br from-purple-700 to-blue-700 w-full md:w-2/3 h-44 md:h-52 transform translate-y-5 -translate-x-5"></div>
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-pink-500 text-xl md:text-4xl font-extrabold mb-2 md:mb-5 uppercase">
                Familusi Akin Babajide
              </h1>

              <p className="text-black text-base md:text-2xl uppercase">
                At Under 40 CEOs, we turn your
                <br className="hidden md:flex" /> challenges into triumphs and
                your
                <br className="hidden md:flex" /> dreams into thriving
                businesses
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 sm:px-20 px-5 w-full justify-center items-center gap-10 lg:gap-28 md:mb-20">
          {secondHalfItems.map((story) => (
            <Link
              href={`/successStories/${story.id}`}
              key={story.id}
              className="flex flex-col w-full border items-center h-full mb-10 shadow-2xl"
            >
              <div className="w-full h-40 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full h-auto">
                <div className="w-full h-full px-3 py-5">
                  <p className="text-black text-lg md:text-2xl font-bold mb-">
                    {story.firstName} {story.lastName}
                  </p>

                  <p className="text-pink-600 text-xs md:text-sm mb-3">
                    {story.role} @ {story.company}
                  </p>

                  <p className="text-blue-500 text-xs md:text-sm mb-1">
                    Touchpoint: {story.touchPoint}
                  </p>

                  <p className="text-blue-500 text-xs md:text-sm mb-5">
                    Topic: {story.topic}
                  </p>

                  <p className="text-black text-xs md:text-sm md:mb-6">
                    {story.body}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden flex justify-center mb-10">
          {" "}
          <p className="text-gray-500 text-xxs text-center font-bold">
            Swipe to see more
          </p>
        </div>

        <div className="flex justify-center mt-10 mb-40">
          {Array.from(
            { length: Math.ceil(stories.length / ITEMS_PER_PAGE) },
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

        <div className="px-10 sm:px-20 pt-20 pb-10 bg-white flex lg:flex-row flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-start md:w-1/3">
            <Image
              src="/images/adaora.svg"
              alt=""
              width={200}
              height={200}
              className="mb-0 self-center"
            />

            <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
              Being a platinum member of Under 40 CEOs has opened doors to
              unparalleled opportunities for me. The high-level insights and
              connections have been key to my professional growth.
            </p>

            <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
              ADAORA MBELU{" "}
            </h6>

            <p className="text-pink-500 text-xs md:text-sm font-semibold mb-2">
              Founder of Lumination Global Network
            </p>
          </div>

          <div className="flex flex-col justify-center items-start md:w-1/3">
            <Image
              src="/images/debola.svg"
              alt=""
              width={200}
              height={200}
              className="mb-0 self-center"
            />

            <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
              As a CEO, Under 40 CEOs has been a game-changer. Its platinum
              membership&apos;s remarkable resources have greatly enhanced my
              leadership and business strategies.
            </p>

            <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
              Debola Wiiliams
            </h6>

            <p className="text-pink-500 text-xs md:text-sm font-semibold mb-2">
              Group CEO of RED | For Africa
            </p>
          </div>

          <div className="flex flex-col justify-center items-start md:w-1/3">
            <Image
              src="/images/aisha.svg"
              alt=""
              width={200}
              height={200}
              className="mb-0 self-center"
            />

            <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
              Under 40 CEOs provided me with invaluable connections and
              insights. As a platinum member, I’ve leveraged these resources to
              expand my influence and achieve new milestones.
            </p>

            <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
              Aisha Pandor
            </h6>

            <p className="text-pink-500 text-xs md:text-sm font-semibold mb-2">
              Co-founder of SweepSouth{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-r from-pink-600 to-purple-700 px-5 md:px-20 py-10">
          <h5 className="text-white text-3xl lg:text-4xl text-center font-bold mb-2 md:mb-5 uppercase">
            Your Success Story Matters{" "}
          </h5>

          <p className="text-white text-sm sm:text-lg text-center uppercase mb-5">
            We’d love to hear how Under 40 CEOs has been part of your
            entrepreneurial
            <br className="md:flex hidden" /> success. Share your story of
            growth and the role our platform played in your
            <br className="md:flex hidden" /> achievements. are you a memebr?
            want to tell us how founder has helped you?
            <span className="md:flex hidden">
              <br />
            </span>{" "}
            impact others with your story? we’d love to hear from you
          </p>

          <button
            className="text-white text-sm font-bold bg-blue-600 rounded-full py-4 px-10 uppercase"
            onClick={() => setShowOverlay(true)}
          >
            Tell Your Story
          </button>

          <div>
            {showOverlay && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-8 w-96">
                  {" "}
                  <h2 className="text-2xl font-bold mb-4">
                    Share Your Success Story
                  </h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Touchpoint
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Topic
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Story
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
                      </button>

                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => setShowOverlay(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <TVseries />
      </div>
      <Footer />
    </div>
  );
}
