import Image from "next/image";
import React from "react";

export default function Gold() {
  return (
    <div className="flex sm:flex-row flex-col gap-16 mb-20">
      <div className="bg-yellow-300 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-black">
        <div className="flex flex-row items-center mb-5 gap-2">
          <Image
            src="/icons/platnum.svg"
            className="w-1/6"
            alt=""
            width={30}
            height={10}
          />
          <p className="w-5/6 text-lg sm:text-3xl font-bold">Gold</p>
        </div>

        <p className="text-lg sm:text-3xl font-semibold mb-3">₦412,500/annum</p>

        <div className="border border-gray-700 w-full mb-5"></div>

        <p className="text-base sm:text-2xl mb-5 w-2/3">
          Elevate your entrepreneurial journey with our Gold Membership elit.{" "}
        </p>

        <div className="border border-gray-700 w-full mb-3"></div>

        <p className="text-base sm:text-2xl mb-7 font-bold">What’s included</p>

        <ul className="text-base sm:text-2xl mb-7">
          <li className="mb-5">☑️ Exclusive Networking Opportunities</li>
          <li className="mb-5">☑️ Free Access to Events</li>
          <li className="mb-5">☑️ Free Copy of annual Under 40 CEOs Book</li>
          <li className="mb-5">
            ☑️ Free Access to all Under 40 CEOs Institute Courses
          </li>
          <li className="mb-5">
            ☑️ Industry Specific Mentoring with a Platinum member
          </li>
          <li className="mb-5">☑️ Tier specific trainings</li>
          <li className="mb-5">☑️ Periodic Business Review</li>
          <li className="mb-5">
            ☑️ Access to Investment Readiness Programme, Funding/Investors
          </li>
          <li className="mb-5">☑️ Access to Platinum mentors</li>
          <li className="mb-5">☑️ Gold membership lapel pin</li>
        </ul>

        <div className="border border-white w-full mb-7"></div>

        <button className="py-4 px-10 bg-white text-black text-sm rounded-full self-start">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
