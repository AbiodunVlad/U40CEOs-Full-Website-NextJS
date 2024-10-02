import Image from "next/image";
import React from "react";

export default function CourseOverview() {
  return (
    <div className="bg-blue-200 py-10 sm:px-20 px-5">
      <p className="text-black text-3xl lg:text-4xl font-bold text-center uppercase mb-7">
        Course <span className="text-purple-500">Overview</span>
      </p>

      <p className="text-black text-base sm:text-2xl mb-7">
        Discover powerful sales and marketing strategies tailored for African
        markets in our course. Learn from experts who understand the challenges
        you face. Gain insights to attract more customers, build stronger
        brands, and expand your market presence effectively. Take control of
        your business growth with practical skills that address your biggest
        challenges head-on.
      </p>

      <div className="flex flex-col xl:px-20 px-5">
        <div className="flex lg:flex-row flex-col xl:gap-28 gap-20 justify-between w-full md:mb-20 mb-10">
          <div className="lg:w-1/2 w-full -mb-16">
            <Image
              src="/images/SABIA1.svg"
              className="w-full"
              alt=""
              width={50}
              height={50}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-black text-xl sm:text-4xl font-bold mb-3">
              Key Benefits
            </p>

            <p className="text-black text-base sm:text-2xl mb-10">
              Are you ready to take control of your health and well-being? Our
              comprehensive nutrition program is designed to help you achieve
              optimal vitality through personalized meal planning, expert
              guidance, and evidence-based resources.
            </p>

            <ul className="text-black text-base sm:text-2xl mb-10">
              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Learn from seasoned industry experts with proven success in
                African markets.{" "}
              </li>

              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access a comprehensive suite of tools and resources tailored for
                effective sales and marketing campaigns.{" "}
              </li>

              <li className="flex mb-2 text-base sm:text-2xl gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Gain practical insights and case studies that demonstrate
                successful market penetration strategies.{" "}
              </li>
            </ul>

            <p className="text-black text-base sm:text-2xl">
              Enrol today to access expert-led courses and exclusive resources
              that will elevate your sales and marketing efforts, propelling
              your business towards sustainable growth in African markets.
            </p>
          </div>
        </div>

        <button className="lg:self-center self-stretch py-4 px-10 bg-purple-600 text-white text-xl font-bold rounded-full">
          START COURSE{" "}
        </button>
      </div>
    </div>
  );
}
