import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" flex flex-col pt-10 pb-7 md:px-20 px-5">
      <h1 className="text-orange-500 text-4xl lg:text-5xl font-extrabold text-center mb-2">
        STARTING A BUSINESS IN
        <br /> AFRICA{" "}
      </h1>

      <p className="text-black text-sm sm:text-lg text-center mb-20">
        Your practical guide to launching an African success story
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
            <p className="text-black text-xl font-bold mb-3">
              Course Objectives
            </p>

            <p className="text-black text-sm sm:text-lg mb-10">
              Are you ready to take control of your health and well-being? Our
              comprehensive nutrition program is designed to help you achieve
              optimal
            </p>

            <p className="text-black text-xl font-bold mb-3">
              Unique Selling Points:
            </p>

            <ul className="text-black text-sm mb-10">
              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Expert instruction from successful African entrepreneurs.
              </li>

              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Practical, hands-on approach with real-world examples.
              </li>

              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access to a supportive community of fellow entrepreneurs.
              </li>

              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Comprehensive resources, templates, and guides.
              </li>
            </ul>

            <p className="text-black text-sm sm:text-lg">
              Whether you&apos;re a busy professional, an athlete, or simply
              looking to improve your overall health, our program offers a
              tailored solution to fit your unique needs and lifestyle.
            </p>
          </div>
        </div>

        <button className="lg:self-start self-stretch py-2 px-20 bg-pink-500 text-white text-lg font-bold rounded-full">
          ENROL NOW
        </button>
      </div>
    </div>
  );
}
