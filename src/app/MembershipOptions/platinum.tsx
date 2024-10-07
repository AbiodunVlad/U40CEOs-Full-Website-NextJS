import Image from "next/image";
import React from "react";

export default function Platinum() {
  return (
    <div className="flex sm:flex-row flex-col gap-16 mb-20">
      <div className="bg-gray-300 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-black gap-2">
        <div className="flex flex-row items-center mb-5 gap-2">
          <Image
            src="/icons/platnum.svg"
            className="w-1/6"
            alt=""
            width={30}
            height={10}
          />
          <p className="w-5/6 text-lg sm:text-3xl font-bold">Platinum</p>
        </div>

        <p className="text-lg sm:text-3xl font-semibold mb-3">
          ₦1,650,000/annum
        </p>

        <div className="border border-gray-700 w-full mb-5"></div>

        <p className="text-base sm:text-2xl mb-5 w-2/3">
          Unlock unparalleled opportunities for growth with our Platinum
          Membership
        </p>

        <div className="border border-gray-700 w-full mb-3"></div>

        <p className="text-base sm:text-2xl mb-7 font-bold">What’s included</p>

        <ul className="text-base sm:text-2xl mb-7">
          <li className="mb-5">
            ☑️ Pan-African Television feature OR Produce Corporate Video
          </li>
          <li className="mb-5">☑️ Free Access to Events</li>
          <li className="mb-5">
            ☑️ Membership and business listing on website
          </li>
          <li className="mb-5">☑️ Explanatory trips to African countries</li>
          <li className="mb-5">
            ☑️ Exclusive networking event with an African billionaire
          </li>
          <li className="mb-5">☑️ Free copy of annual Under 40 CEOs book</li>
          <li className="mb-5">☑️ Minimum of 2 Employee Trainings per cycle</li>
          <li className="mb-5">☑️ Platinum membership lapel pin</li>
          <li className="mb-5">☑️ Exclusive Platinum-Members Only Events</li>
        </ul>

        <div className="border border-gray-600 w-full mb-7"></div>

        <div className="flex flex-row items-center gap-2">
          <Image src="/icons/important.svg" alt="" width={30} height={30} />
          <p className="text-base sm:text-2xl">
            You will need to be referred to access this room
          </p>
        </div>
      </div>
    </div>
  );
}
