"use client";
import React from "react";
import Image from "next/image";

export default function CompellingProducts() {
  return (
    <div className="flex flex-col justify-center px-2 pt-10 pb-10 md:pt-20 md:pb-20 bg-slate-100 relative">
      <h1 className="text-center text-black font-extrabold text-xl md:text-2xl mb-10 md:mb-20">
        SHOWCASING OUR COMPELLING <br /> PRODUCTS
      </h1>

      <div className="flex flex-col items-center gap-5 mb-10 md:mb-20">
        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3 md:w-1/4">
            <Image
              src="/images/mediaFeature.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className="w-2/3 md:w-3/4 py-3">
            <p className="font-bold text-black mb-2 md:mb-3">Media Feature</p>

            <p className="text-xs text-black md:text-sm mb-4 md:mb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3 md:w-1/4">
            <Image src="/images/magazine.svg" alt="" width={500} height={500} />
          </div>

          <div className="w-2/3 md:w-3/4 py-3">
            <p className="font-bold text-black mb-2 md:mb-3">Magazine</p>

            <p className="text-xs text-black md:text-sm mb-4 md:mb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3 md:w-1/4">
            <Image src="/images/events.svg" alt="" width={500} height={500} />
          </div>

          <div className="w-2/3 md:w-3/4 py-3">
            <p className="font-bold text-black mb-2 md:mb-3">Events</p>

            <p className="text-xs text-black md:text-sm mb-4 md:mb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              BOOK YOUR SEAT
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3 md:w-1/4">
            <Image
              src="/images/learningHub.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className="w-2/3 md:w-3/4 py-3">
            <p className="font-bold text-black mb-2 md:mb-3">Learning Hub</p>

            <p className="text-xs text-black md:text-sm mb-4 md:mb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-center text-black font-extrabold text-xl md:text-2xl mb-10 md:mb-20">
        PLATINUM REVIEW
      </h1>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="w-full md:w-1/5 flex flex-col items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>

          <p className="text-xs text-black md:text-sm text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>

        <div className="w-full md:w-1/5 flex flex-col items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>

          <p className="text-xs text-black md:text-sm text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>

        <div className="w-full md:w-1/5 flex flex-col items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>

          <p className="text-xs text-black md:text-sm text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>
      </div>
    </div>
  );
}
