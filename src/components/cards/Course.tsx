import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 pt-5 md:pt-10 pb-5 px-5 md:px-10 flex flex-col md:flex-row gap-20 w-full md:w-5/6">
      <div className="flex justify-start">
        <Image src="/images/courseImg.svg" alt="" width={200} height={200} />
      </div>

      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div className="flex flex-col flex-grow">
          <p className="text-white text-xl md:text-3xl font-bold mb-2">
            STARTING A BUSINESS IN AFRICA
          </p>

          <p className="text-lg md:text-xl text-white leading-1 mb-auto md:w-1/3 w-1/5">
            Master the essentials of launching and sustaining a business in
            Africa with insights on market analysis, legalities, funding
            strategies, and cultural nuances tailored for aspiring
            entrepreneurs.
          </p>
        </div>

        <Link
          href="/resources"
          className="text-white text-lg py-3 px-10 rounded-full bg-purple-500 mt-3 md:mt-auto inline-flex items-center"
          style={{ width: "fit-content" }}
        >
          REGISTER
        </Link>
      </div>
    </div>
  );
}
