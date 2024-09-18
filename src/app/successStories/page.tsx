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

  useEffect(() => {
    async function fetchStories() {
      try {
        // const res = await fetch("/api/successStories");
        const res = await getSuccessStories();

        // if (!res.ok) {
        //   throw new Error("Network response was bad!");
        // }

        // const data: Stories[] = await res.json();
        // const data = await res.json();
        // console.log("1. Here are your stories:", res);
        // console.log("2. Here are your stories:", res.data);
        console.log("3. Here are your stories:", res.data.content);

        if (Array.isArray(res.data.content)) {
          console.log("Data is an array, setting stories state.");
          setStories(res.data.content);
          console.log("Setting stories state:", res);
        } else {
          console.log("Data is not an array, setting empty stories.");
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
    // console.log("First Half Items:", firstHalfItems);
    // console.log("Second Half Items:", secondHalfItems);
  }, [currentItems]);

  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex flex-col py-10 md:py-20 px-5 md:px-20">
        <h1 className="text-black text-center text-4xl lg:text-5xl font-extrabold mb-2 leading-7 md:leading-10">
          TANGIBLE RESULTS,
          <br />
          TRANSFORMED BUSINESS
        </h1>

        <p className="text-gray-500 text-center text-sm sm:text-lg leading-2">
          Draw inspiration from our community, from proven Founders to budding
          <span className="hidden md:flex">
            <br />
          </span>
          entreprenuers making waves.
        </p>
      </div>

      <div className="px-4 md:px-20 w-full  flex flex-col md:flex-row justify-between gap-4 md:gap-28 mb-5">
        <div className="flex flex-col w-full md:w-1/3">
          <p className="text-sm text-purple-600 font-bold mb-5">Filter</p>

          <div className="relative mb-4">
            <select className="bg-purple-300 py-4 px-5  w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none">
              <option value="" selected disabled hidden>
                Product
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
            <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none">
              <option value="" selected disabled hidden>
                Topic
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
            <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none">
              <option value="" selected disabled hidden>
                Industry
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
            <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 md:text-lg text-sm cursor-pointer appearance-none">
              <option value="" selected disabled hidden>
                Location
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

      <div className="grid md:grid-cols-3 pl-5 md:px-20 px-5 md:w-full justify-between gap-3 md:gap-28 md:mb-20 overflow-x-auto">
        {firstHalfItems.map((story, index) => (
          <div
            key={index}
            className="flex flex-col  h-auto md:w-full border  mb-20"
          >
            <Link href={`/successStories/${story.id}`}>
              <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full px-4 md:px-10 py-5">
                <p className="text-black text-sm font-bold mb-2">
                  {story.firstName} {story.lastName}
                </p>
                <p className="text-pink-600 text-xxs mb-3">
                  {story.role} @ LandingFolio {/*{story.company*/}
                </p>
                <p className="text-blue-500 text-xxs mb-1">
                  Touchpoint: Some touchpoint {/*  {story.touchPoint} */}
                </p>

                <p className="text-blue-500 text-xxs mb-5">
                  Topic: Some topic {/*{story.topic}*/}
                </p>

                <p className="text-black text-xxs md:mb-6">{story.body}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {currentPage === 1 && (
        <div className="bg-gray-400 flex flex-col md:flex-row justify-between mb-20 px-5 md:px-40 py-10">
          <div className="w-full md:w-1/2 flex relative mb-10">
            <div className="bg-black w-full md:w-2/3 h-44 md:h-52"></div>
            <div className="absolute  bg-gradient-to-br from-purple-700 to-blue-700 w-full md:w-2/3 h-44 md:h-52 transform translate-y-5 -translate-x-5"></div>
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-pink-600 text-lg md:text-5xl font-extrabold mb-2 md:mb-5">
              LANRE JOHN
            </h1>

            <p className="text-black text-sm md:text-lg uppercase">
              We Provide All The Necessary Tools
              <br /> For Young Business Leaders To Do
              <br />
              Business And Thrive In Africa.
            </p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 pl-5 md:px-20 px-5 md:w-full justify-between gap-3 md:gap-28 md:mb-20 overflow-x-auto">
        {secondHalfItems.map((story, index) => (
          <div
            key={index}
            className="flex flex-col h-auto md:w-full border  mb-20"
          >
            <Link href={`/successStories/${story.id}`}>
              <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full px-4 md:px-10 py-5">
                <p className="text-black text-sm font-bold mb-2">
                  {story.firstName} {story.lastName}
                </p>
                <p className="text-pink-600 text-xxs mb-3">
                  {story.role} @ LandingFolio {/*{story.company*/}
                </p>
                <p className="text-blue-500 text-xxs mb-1">
                  Touchpoint: Some touchpoint {/*  {story.touchPoint} */}
                </p>

                <p className="text-blue-500 text-xxs mb-5">
                  Topic: Some topic {/*{story.topic}*/}
                </p>

                <p className="text-black text-xxs md:mb-6">{story.body}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-center mb-10">
        {" "}
        <p className="text-gray-500 text-xxs text-center font-bold">
          Swipe to see more
        </p>
      </div>

      <div className="flex justify-center mt-10">
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

      <div className="flex flex-col items-center justify-center gap-10 px-5 md:flex-row mb-20">
        <div className="w-full md:w-1/4 flex flex-col text-start items-center mb-8 md:mb-0">
          <Image
            src="/images/omobola.svg"
            alt=""
            width={120}
            height={150}
            className="self-center"
          />

          <p className="text-xs text-black md:text-sm text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-black text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-start items-center mb-8 md:mb-0">
          <Image
            src="/images/omobola.svg"
            alt=""
            width={120}
            height={150}
            className="self-center"
          />

          <p className="text-xs text-black md:text-sm text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-black text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-start items-center mb-8 md:mb-0">
          <Image
            src="/images/omobola.svg"
            alt=""
            width={120}
            height={150}
            className="self-center"
          />

          <p className="text-xs text-black md:text-sm text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-black text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gradient-to-r from-pink-600 to-purple-700 px-5 md:px-20 py-10">
        <h5 className="text-white md:text-xl text-base text-center font-bold mb-2 md:mb-5 uppercase">
          WANT TO SHARE YOUR SUCCESS STORY?
        </h5>

        <p className="text-white md:text-base text-sm text-center uppercase mb-5">
          are you a memebr? want to tell us how founder has helped you?
          <span className="md:flex hidden">
            <br />
          </span>{" "}
          impact others with your story? we’d love to hear from you
        </p>

        <button className="text-white text-sm font-bold bg-blue-600 rounded-full py-3 px-5">
          TELL US NOW
        </button>
      </div>
      <TVseries />
      <Footer />
    </div>
  );
}
