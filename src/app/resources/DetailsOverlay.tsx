import Image from "next/image";
import React from "react";

export default function DetailsOverlay() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start bg-white px-20 py-20 w-3/4">
        <Image
          src="/images/detailsOverlay.svg"
          alt=""
          width={900}
          height={300}
          className="mb-5"
        />

        <h1 className="text-black text-3xl font-bold leading-10 mb-5">
          FILL IN YOUR DETAILS
          <br /> TO GET YOUR FREE
          <br /> RESOURCES ACCESS
        </h1>

        <form className="w-full">
          <input
            type="text"
            placeholder="Full name"
            className="w-full py-2 px-2 border border-soild border-red-500 rounded-md mb-5"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-2 border border-soild border-red-500 rounded-md mb-5"
          />

          <button className="bg-purple-500 text-white text-center py-2 w-full rounded-full mb-5">
            SUBSCRIBE
          </button>
        </form>

        <p className="text-sm text-red-600 mb-4">What is in it for you:</p>

        <div className="flex flex-row items-center gap-3 mb-3">
          <input type="checkbox" />
          <p className="text-black text-sm">Access to free training sessions</p>
        </div>

        <div className="flex flex-row items-center gap-3 mb-3">
          <input type="checkbox" />
          <p className="text-black text-sm">Access to U4C Media Features</p>
        </div>

        <div className="flex flex-row items-center gap-3 mb-3">
          <input type="checkbox" />
          <p className="text-black text-sm">
            Access to free Books and Magazines
          </p>
        </div>

        <div className="flex flex-row items-center gap-3 mb-3">
          <input type="checkbox" />
          <p className="text-black text-sm">Access to our Events schedules</p>
        </div>
      </div>
    </div>
  );
}
