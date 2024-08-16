import Image from "next/image";
import React from "react";

export default function WhatYouLearn() {
  return (
    <div className="bg-white pt-20 pb-10 md:px-20 px-5 flex flex-col">
      <p className="text-black text-2xl text-center font-bold mb-3">
        What You&apos;ll <span className="text-pink-600">Learn</span>
      </p>

      <div className="flex flex-col md:px-20 px-0">
        <p className="text-black text-base font-bold mb-5">Module Breakdown:</p>

        <div className="flex sm:flex-row flex-col justify-center md:gap-60 gap-28">
          <div className="flex flex-col text-black">
            <div className="mb-4">
              <p className="text-sm font-bold mb-3">
                Module 1: Understanding the African Business Landscape
              </p>

              <ul className="text-black text-sm mb-10">
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Overview of key markets and industries.
                </li>
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Analysis of economic trends and opportunities.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm font-bold mb-3">
                Module 2: Developing Your Business Idea
              </p>

              <ul className="text-black text-sm mb-10">
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Identifying viable business opportunities.
                </li>
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Conducting market research.
                </li>
              </ul>
            </div>

            <div className="mb-0">
              <p className="text-sm font-bold mb-3">
                Module 3: Creating a Business Plan
              </p>

              <ul className="text-black text-sm mb-0">
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Crafting a compelling business plan.
                </li>
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Financial planning and forecasting.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-black">
            <div className="mb-4">
              <p className="text-sm font-bold mb-3">
                Module 1: Understanding the African Business Landscape
              </p>

              <ul className="text-black text-sm mb-10">
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Overview of key markets and industries.
                </li>
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Analysis of economic trends and opportunities.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm font-bold mb-3">
                Module 2: Developing Your Business Idea
              </p>

              <ul className="text-black text-sm mb-10">
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Identifying viable business opportunities.
                </li>
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Conducting market research.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm font-bold mb-3">
                Module 3: Creating a Business Plan
              </p>

              <ul className="text-black text-sm mb-10">
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Crafting a compelling business plan.
                </li>
                <li className="flex text-sm mb-2">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                  Financial planning and forecasting.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
