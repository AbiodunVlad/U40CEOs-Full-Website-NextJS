import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Event() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-200 pt-5 md:pt-10 pb-5 px-5 lg:px-10 flex flex-col md:flex-row gap-5 lg:gap-20 w-full md:w-5/6 h-auto">
      <div className="flex justify-start">
        <Image src="/images/courseImg.svg" alt="" width={200} height={200} />
      </div>

      <div className="w-full md:w-2/3 flex flex-col justify-between mt-auto">
        <div className="flex flex-col flex-grow">
          <p className="text-white text-xl lg:text-3xl font-extrabold mb-2">
            FIRESIDE CHAT
          </p>
          <p className="text-base lg:text-xl text-white leading-1 mb-auto md:w-1/3 w-1/5">
            Discover powerful sales techniques to drive your startup forward at
            the Under 40 CEOs Fireside Chat.
          </p>
        </div>

        <Link
          href="/Events"
          className="text-white text-lg py-3 px-10 rounded-full bg-pink-500 mt-3 md:mt-auto inline-flex items-center"
          style={{ width: "fit-content" }}
        >
          BOOK YOUR SEAT
        </Link>
      </div>
    </div>
  );
}
