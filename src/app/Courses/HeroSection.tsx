import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" flex flex-col pt-24 pb-7 md:px-20 px-5">
      <h1 className="text-orange-500 text-4xl lg:text-5xl font-extrabold text-center mb-2">
        STARTING A BUSINESS IN
        <br /> AFRICA{" "}
      </h1>

      <p className="text-black text-base sm:text-2xl text-center mb-20">
        Your Comprehensive Guide to Launching a Flourishing Venture{" "}
      </p>

      <div className="flex flex-col xl:px-20 px-5">
        <div className="flex lg:flex-row flex-col xl:gap-28 gap-20 justify-between w-full md:mb-20 mb-10">
          <div className="lg:w-1/2 w-full -mb-16">
            <Image
              src="/images/SABIA1.svg"
              className="w-full"
              alt=""
              width={100}
              height={100}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-black text-xl sm:text-4xl font-bold mb-3">
              Course Objectives
            </p>

            <p className="text-black text-base sm:text-2xl mb-10">
              Master the essential strategies for launching and scaling
              businesses in Africa with practical insights from successful
              entrepreneurs.
            </p>

            <p className="text-black text-xl sm:text-4xl font-bold mb-3">
              Unique Selling Points:
            </p>

            <ul className="text-black text-base sm:text-2xl mb-10">
              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Learn directly from a distinguished faculty of African business
                leaders.{" "}
              </li>

              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access a comprehensive array of premium resources, including
                business templates, e-books, research reports, and case studies.{" "}
              </li>

              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access to a supportive community of fellow entrepreneurs.
              </li>

              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Gain actionable knowledge and tools specifically tailored for
                navigating the complexities of African markets.{" "}
              </li>
            </ul>

            <p className="text-black text-base sm:text-2xl">
              Enrol now to gain exclusive access to expert-led courses and
              invaluable resources designed to empower your journey in
              establishing thriving businesses on the continent.
            </p>
          </div>
        </div>

        <button className="lg:self-start self-stretch py-4 px-10 bg-pink-500 text-white text-lg font-bold rounded-full">
          START COURSE{" "}
        </button>
      </div>
    </div>
  );
}
