"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import TVseries from "../homePage/tvSeries";

const ITEMS_PER_PAGE = 28;

type Course = {
  title: string;
  videoUrl: string;
};

export default function SuccessStories() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex flex-col py-20 px-20">
        <h1 className="text-black text-center text-3xl font-extrabold mb-2 leading-10">
          TANGIBLE RESULTS,
          <br />
          TRANSFORMED BUSINESS
        </h1>
        <p className="text-gray-500 text-center text-xs">
          Draw inspiration from our community, from proven Founders to budding
          <br />
          entreprenuers making waves.
        </p>
      </div>

      <div className="px-20 w-full h-dvh flex flex-row justify-between gap-28 mb-10">
        <div className="flex flex-col w-1/3">
          <p className="text-sm text-purple-600 font-bold mb-5">Filter</p>

          <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 text-sm cursor-pointer">
            <option value="" selected disabled>
              Product
            </option>
            <option value="p1">Product1</option>
            <option value="p2">Product2</option>
            <option value="p3">Product3</option>
            <option value="p4">Product4</option>
            <option value="p5">Product5</option>
          </select>

          <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 text-sm">
            <option value="" selected disabled>
              Topic
            </option>
            <option value="t1">Topic1</option>
            <option value="t2">Topic2</option>
            <option value="t3">Topic3</option>
            <option value="t4">Topic4</option>
            <option value="t5">Topic5</option>
          </select>

          <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 text-sm">
            <option value="" selected disabled>
              Industry
            </option>
            <option value="">Industry1</option>
            <option value="">Industry2</option>
            <option value="">Industry3</option>
            <option value="">Industry4</option>
            <option value="">Industry5</option>
          </select>

          <select className="bg-purple-300 py-4 px-5 w-full rounded-2xl mb-4 text-sm">
            <option value="" selected disabled>
              Location
            </option>
            <option value="">Location1</option>
            <option value="">Location2</option>
            <option value="">Location3</option>
            <option value="">Location4</option>
            <option value="">Location5</option>
          </select>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="px-20 w-full h-dvh flex flex-row justify-between gap-28 mb-10">
        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="px-20 w-full h-dvh flex flex-row justify-between gap-28 mb-20">
        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-400 flex flex-row justify-between mb-20 px-40 py-10">
        <div className="w-1/2 flex relative">
          <div className="bg-black w-2/3 h-52"></div>
          <div className="absolute top-2 -left-2 bg-gradient-to-br from-purple-700 to-blue-700 w-2/3 h-52"></div>
        </div>

        <div className="w-1/2">
          <h1 className="text-pink-600 text-5xl font-extrabold mb-5">
            LANRE JOHN
          </h1>

          <p className="text-black text-lg uppercase">
            We Provide All The Necessary Tools
            <br /> For Young Business Leaders To Do
            <br />
            Business And Thrive In Africa.
          </p>
        </div>
      </div>

      <div className="px-20 w-full h-dvh flex flex-row justify-between gap-28 mb-20">
        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="px-20 w-full h-dvh flex flex-row justify-between gap-28 mb-20">
        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 border border-black">
          <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="w-full px-10 py-5">
            <p className="text-black text-sm font-bold mb-2">Danny Postma</p>
            <p className="text-pink-600 text-xxs mb-3">
              Marketing Consultant @ Landingfolio
            </p>
            <p className="text-blue-500 text-xxs mb-1">Touchpoint: Webinar</p>
            <p className="text-blue-500 text-xxs mb-5">
              Topic: Sales & Marketing for Business Growth
            </p>

            <p className="text-black text-xxs mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
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

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row mb-20">
        <div className="w-full md:w-1/5 flex flex-col text-start  mb-8 md:mb-0">
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

        <div className="w-full md:w-1/5 flex flex-col mb-8 md:mb-0">
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

        <div className="w-full md:w-1/5 flex flex-col mb-8 md:mb-0">
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

      <div className="flex flex-col items-center bg-gradient-to-r from-pink-600 to-purple-700 px-20 py-10">
        <h5 className="text-white text-lg text-center font-bold mb-5 uppercase">
          WANT TO SHARE YOUR SUCCESS STORY?
        </h5>

        <p className="text-white text-xs text-center uppercase mb-5">
          are you a memebr? want to tell us how founder has helped you?
          <br /> impact others with your story? we’d love to hear from you
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
