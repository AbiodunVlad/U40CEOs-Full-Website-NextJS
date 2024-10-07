import Image from "next/image";
import React from "react";

export default function Bronze() {
  return (
    <div className="flex sm:flex-row flex-col gap-16 mb-20">
      <div className="bg-yellow-800 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-white gap-2">
        <div className="flex flex-row items-center mb-5 gap-2">
          <Image
            src="/icons/bronze.svg"
            className="w-1/6"
            alt=""
            width={30}
            height={10}
          />
          <p className="w-5/6 text-lg sm:text-3xl font-bold">Bronze</p>
        </div>

        <p className="text-lg sm:text-3xl font-semibold mb-3">₦75,000/annum</p>

        <div className="border border-gray-700 w-full mb-5"></div>

        <p className="text-base sm:text-2xl mb-5 ">
          Build a solid foundation for your startup with our Bronze Membership
        </p>

        <div className="border border-gray-700 w-full mb-3"></div>

        <p className="text-base sm:text-2xl mb-7 font-bold">What’s included</p>

        <ul className="text-base sm:text-2xl mb-7">
          <li className="mb-5">☑️ Access to mentorship</li>
          <li className="mb-5">☑️ Discounted access to all events</li>
          <li className="mb-5">
            ☑️ Access to specially curated trainings and courses
          </li>
          <li className="mb-5">
            ☑️ Access to Investment Readiness Programme, Funding/ Investors
          </li>
          <li className="mb-5">
            ☑️ A chance to win a Business pitch competition
          </li>
          <li className="mb-5">
            ☑️ Discounted copy of annual Under 40 CEOs book
          </li>
          <li className="mb-5">
            ☑️ Access to pitch for annual Under 40 CEOs Business Grant
          </li>
          <li className="mb-5">☑️ Bronze membership lapel pin</li>
        </ul>

        <div className="border border-white w-full mb-7"></div>

        <button className="py-4 px-10 bg-white text-black rounded-full self-start">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
