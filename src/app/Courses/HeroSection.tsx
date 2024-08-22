import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-pink-100 flex flex-col pt-10 pb-7 md:px-20 px-5">
      <h1 className="text-orange-500 text-4xl font-extrabold text-center mb-2">
        STARTING A BUSINESS IN
        <br /> AFRICA{" "}
      </h1>

      <p className="text-black text-sm text-center mb-20">
        Your practical guide to launching an African success story
      </p>

      <div className="flex flex-col sm:px-20 px-5">
        <div className="flex md:flex-row flex-col gap-28 justify-between w-full md:mb-0 mb-10">
          <div className="md:w-1/3 w-full -mb-16">
            <Image
              src="/images/SABIA1.svg"
              className="w-full"
              alt=""
              width={50}
              height={50}
            />
          </div>

          <div className="md:w-2/3 w-full">
            <p className="text-black text-lg font-bold mb-3">
              Course Objectives
            </p>

            <p className="text-black text-sm mb-10">
              Are you ready to take control of your health and well-being? Our
              comprehensive nutrition program is designed to help you achieve
              optimal
            </p>

            <p className="text-black text-base font-bold mb-3">
              Unique Selling Points:
            </p>

            <ul className="text-black text-sm mb-10">
              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Expert instruction from successful African entrepreneurs.
              </li>

              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Practical, hands-on approach with real-world examples.
              </li>

              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access to a supportive community of fellow entrepreneurs.
              </li>

              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Comprehensive resources, templates, and guides.
              </li>
            </ul>

            <p className="text-black text-sm">
              Whether you&apos;re a busy professional, an athlete, or simply
              looking to improve your overall health, our program offers a
              tailored solution to fit your unique needs and lifestyle.
            </p>
          </div>
        </div>

        <button className="md:self-start self-center py-2 px-20 bg-pink-500 text-white text-sm font-bold rounded-full">
          ENROL NOW
        </button>
      </div>
    </div>
  );
}
