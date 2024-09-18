import Image from "next/image";
import React from "react";

export default function Magazine() {
  return (
    <div className="shadow-2xl px-2 md:px-20 py-5 md:py-10">
      <div className="flex flex-row justify-between mb-5">
        <p className="text-black md:text-xl text-sm font-light">Magazines</p>

        <button className="bg-transparent border border-solid border-purple-600 text-purple-600 text-xs md:text-sm rounded-full px-3 py-1">
          Click to see more
        </button>
      </div>

      <div className="flex flex-col mb-10 md:mb-20">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag1.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag2.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag3.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag4.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-0">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag5.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag6.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag7.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/magazines/mag8.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xxs md:text-xs font-bold mb-2">
              Adebola Williams
            </p>

            <p className="text-gray-500 text-xxs mb-3">Issue 89</p>

            <button className="w-full text-white py-1 md:text-lg text-xxxs text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
