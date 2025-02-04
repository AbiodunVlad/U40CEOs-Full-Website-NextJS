import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyJoin() {
  return (
    <div className="flex flex-col items-center py-10 xl:py-20 relative max-w-screen-2xl mx-auto w-full">
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold uppercase p-5">
        Why Join the <span className="text-purple-500">Under 40 CEOs</span>
        <br className="xl:flex hidden" /> Community?
      </h1>

      <p className="mb-10 text-center bg-purple-200 p-5 w-4/5">
        Running a business shouldn’t be unpredictable, stressful, and isolating.
        Here’s how the Under 40 CEOs Community helps you overcome challenges and
        achieve success:
      </p>

      <div className="flex flex-col justify-between w-4/5">
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="border border-solid border-pink-400 mb-0 w-full xl:w-1/2 flex flex-col items-start rounded-lg xl:py-16 py-5 xl:px-16 px-5">
            <Image
              src="/icons/dollarBag.svg"
              className="w-1/12 mb-4"
              alt=""
              width={10}
              height={10}
            />
            <p className="font-bold mb-4">Overcome Cash Flow Challenges</p>
            <p className="text-sm">
              Tired of navigating cash flow challenges, unmet targets, or poor
              execution? Gain access to proven strategies that help you avoid
              costly mistakes.
            </p>
          </div>

          <div className="border border-solid border-pink-400 mb-0 w-full xl:w-1/2 flex flex-col items-start rounded-lg xl:py-16 py-5 xl:px-16 px-5">
            <Image
              src="/icons/unionStar.svg"
              className="w-1/12 mb-4"
              alt=""
              width={10}
              height={10}
            />
            <p className="font-bold mb-4">
              Break Free from Business Uncertainty
            </p>
            <p className="text-sm">
              Do you feel stuck, overwhelmed, or uncertain about the future of
              your business? Be a part of an elite network of ambitious African
              CEOs who share insights and solutions.
            </p>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="border border-solid border-pink-400 mb-0 w-full xl:w-1/2 flex flex-col items-start rounded-lg xl:py-16 py-5 xl:px-16 px-5">
            <Image
              src="/icons/unionFile.svg"
              className="w-1/12 mb-4"
              alt=""
              width={10}
              height={10}
            />
            <p className="font-bold mb-4">Ditch Trial-and-Error Strategies</p>
            <p className="text-sm">
              Want to stop trial-and-error strategies? Access expert mentorship
              and proven strategies tailored to African businesses.
            </p>
          </div>

          <div className="border border-solid border-pink-400 mb-0 w-full xl:w-1/2 flex flex-col items-start rounded-lg xl:py-16 py-5 xl:px-16 px-5">
            <Image
              src="/icons/network.svg"
              className="w-1/12 mb-4"
              alt=""
              width={10}
              height={10}
            />
            <p className="font-bold mb-4">Network with Top CEOs</p>
            <p className="text-sm">
              Want to network with top CEOs within and outside your industry?
              Attend our networking  where you have the opportunity to meet some
              of our members in person.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-10 text-center bg-purple-200 p-5 w-4/5">
        You don’t have to do this alone. The Under 40 CEOs Community is here to
        support you to grow sustainably and get recognised
      </p>

      <Link href="#register-section" className="w-4/5">
        <button
          className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase"
          // style={{ backgroundColor: "#C54ED8" }}
        >
          Secure your business success with us
        </button>
      </Link>
    </div>
  );
}
