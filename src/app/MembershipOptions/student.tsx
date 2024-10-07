import Image from "next/image";
import React from "react";

export default function Student() {
  return (
    <div className="flex sm:flex-row flex-col gap-16 mb-20">
      <div className="bg-gray-400 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-black">
        <div className="flex flex-row items-center mb-5 gap-2">
          <Image
            src="/icons/silver.svg"
            className="w-1/6"
            alt=""
            width={30}
            height={10}
          />
          <p className="w-5/6 text-lg sm:text-3xl font-bold">Student</p>
        </div>

        <p className=" text-lg sm:text-3xl font-semibold mb-3">₦15,000/annum</p>

        <div className="border border-gray-700 w-full mb-5"></div>

        <p className="text-base sm:text-2xl mb-5 ">
          Fuel your entrepreneurial spirit with our Student Membership
        </p>

        <div className="border border-gray-700 w-full mb-3"></div>

        <p className="text-base sm:text-2xl mb-7 font-bold">What’s included</p>

        <ul className="text-base sm:text-2xl mb-7">
          <li className="mb-5">☑️ Access to mentors</li>
          <li className="mb-5">☑️ Access to funding/investors</li>
          <li className="mb-5">☑️ Ambassadors in Universities</li>
          <li className="mb-5">☑️ Master class student access</li>
          <li className="mb-5">☑️ Sponsored books will be given to </li>
          <li className="mb-5">
            ☑️ Please note that you must posses a valid student ID to register
          </li>
        </ul>

        <div className="border border-white w-full mb-7"></div>

        <button className="py-4 px-10 bg-black text-white rounded-full self-start">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
