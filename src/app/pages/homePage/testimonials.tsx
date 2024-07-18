"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="bg-black px-5 md:px-20 py-10 flex flex-col items-center">
      <h1 className="text-white font-bold text-lg mb-10">TESTIMONIALS</h1>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-col mb-10 w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>

          <div className="flex flex-col mb-10 w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>

          <div className="flex flex-col w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-10 w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>

          <div className="flex flex-col mb-10 w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>

          <div className="flex flex-col w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-10 w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>

          <div className="flex flex-col mb-10 w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>

          <div className="flex flex-col w-auto md:w-3/4">
            <div className="flex flex-row gap-1 mb-2">
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
              <Image src="/icons/star.svg" alt="" width={10} height={10} />
            </div>

            <p className="text-white text-xs mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>

            <p className="text-xs text-purple-600">Jennifer Fuller</p>
          </div>
        </div>
      </div>
    </div>
  );
}
