import Image from "next/image";
import React from "react";

export default function WhatOthersSay() {
  return (
    <div className="bg-white sm:px-20 px-5 pt-10 pb-20">
      <p className="md:text-3xl text-lg text-black text-center font-bold mb-5">
        WHAT OTHERS <span className="text-blue-600">ARE SAYING</span>
      </p>

      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col items-center justify-center gap-10 mb-10">
          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              The &lsquo;Starting a Business in Africa&lsquo; course empowered
              me with practical insights and tools to navigate the African
              market successfully.
            </p>

            <p className="text-sm text-purple-600 font-bold">Ngozi Amadi</p>
          </div>

          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              I enrolled in the SABIA course and gained invaluable knowledge on
              launching and scaling businesses in Africa. Highly recommended for
              aspiring entrepreneurs!
            </p>

            <p className="text-sm text-purple-600 font-bold">Kwame Mensah </p>
          </div>

          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              The &lsquo;Starting a Business in Africa&lsquo; course offered a
              comprehensive guide to starting a business in Africa. I now feel
              confident in executing my entrepreneurial ideas effectively.
            </p>

            <p className="text-sm text-purple-600 font-bold">Amina Sow</p>
          </div>
        </div>

        {/* <div className="flex md:flex-row flex-col items-center justify-center gap-10 mb-10">
          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xxs text-purple-600 font-bold">
              Jennifer Fuller
            </p>
          </div>

          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xxs text-purple-600 font-bold">
              Jennifer Fuller
            </p>
          </div>
        </div> */}

        {/* <div className="flex md:flex-row flex-col items-center justify-center gap-10">
          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xxs text-purple-600 font-bold">
              Jennifer Fuller
            </p>
          </div>

          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xxs text-purple-600 font-bold">
              Jennifer Fuller
            </p>
          </div>

          <div className="border border-black border-solid rounded-md flex flex-col p-2">
            <div className="flex flex-row mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-base sm:text-2xl text-black mb-2">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xxs text-purple-600 font-bold">
              Jennifer Fuller
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
