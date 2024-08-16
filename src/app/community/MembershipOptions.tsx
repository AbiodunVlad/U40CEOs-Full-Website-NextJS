import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function MembershipOptions() {
  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex flex-col py-5 md:py-10 px-5 md:px-20">
        <h1 className="text-black text-center text-lg md:text-3xl font-extrabold mb-2 md:leading-10">
          CHOOSE A MEMBERSHIP TIER TAILORED{" "}
          <span className="lg:flex hidden">
            <br />
          </span>{" "}
          TO YOUR NEEDS
        </h1>

        <p className="text-gray-500 text-center text-xs">
          No matter your membership tier, you can be sure to get the support you
          <span className="md:flex hidden">
            <br />
          </span>
          need to succeed.
        </p>
      </div>

      <div className="px-5 md:px-20 flex flex-col items-center justify-between w-full">
        <div className="flex sm:flex-row flex-col gap-16 mb-20">
          <div className="bg-gray-400 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-black">
            <div className="flex flex-row items-center mb-2 gap-2">
              <Image src="/icons/silver.svg" alt="" width={30} height={10} />
              <p className=" text-sm font-bold">Silver</p>
            </div>

            <p className=" text-sm font-semibold mb-3">₦15,000/annum</p>

            <div className="border border-gray-700 w-full mb-2"></div>

            <p className="text-xxs mb-2 w-2/3">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <div className="border border-gray-700 w-full mb-3"></div>

            <p className="text-xs mb-7 font-bold">What’s included</p>

            <ul className="text-xs mb-7">
              <li className="mb-5">☑️ Access to mentors</li>
              <li className="mb-5">☑️ Access to funding/investors</li>
              <li className="mb-5">☑️ Ambassadors in Universities</li>
              <li className="mb-5">☑️ Master class student access</li>
              <li className="mb-5">☑️ Sponsored books will be given to </li>
              <li className="mb-5">
                ☑️ Please note that you must posses a valid student ID to
                register
              </li>
            </ul>

            <div className="border border-white w-full mb-7"></div>

            <button className="py-1 px-7 bg-black text-white text-sm rounded-full self-start">
              Choose Plan
            </button>
          </div>

          <div className="bg-yellow-800 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-white gap-2">
            <div className="flex flex-row items-center mb-2 gap-2">
              <Image src="/icons/bronze.svg" alt="" width={30} height={10} />
              <p className=" text-sm font-bold">Bronze</p>
            </div>

            <p className=" text-sm font-semibold mb-3">₦75,000/annum</p>

            <div className="border border-gray-700 w-full mb-2"></div>

            <p className="text-xxs mb-2 w-2/3">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <div className="border border-gray-700 w-full mb-3"></div>

            <p className="text-xs mb-7 font-bold">What’s included</p>

            <ul className="text-xs mb-7">
              <li className="mb-5">☑️ Access to mentorship</li>
              <li className="mb-5">☑️ Discounted access to all events</li>
              <li className="mb-5">
                ☑️ Access to specially curated trainings and courses
              </li>
              <li className="mb-5">
                ☑️ Access to Investment Readiness Programme, Funding/ Investors
              </li>
              <li className="mb-5">
                ☑️ A chance to win a Business pitch competition
              </li>
              <li className="mb-5">
                ☑️ Discounted copy of annual Under 40 CEOs book
              </li>
              <li className="mb-5">
                ☑️ Access to pitch for annual Under 40 CEOs Business Grant
              </li>
              <li className="mb-5">☑️ Bronze membership lapel pin</li>
            </ul>

            <div className="border border-white w-full mb-7"></div>

            <button className="py-1 px-7 bg-white text-black text-sm rounded-full self-start">
              Choose Plan
            </button>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-16 mb-20">
          <div className="bg-yellow-300 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-black">
            <div className="flex flex-row items-center mb-2 gap-2">
              <Image src="/icons/platnum.svg" alt="" width={30} height={10} />
              <p className=" text-sm font-bold">Gold</p>
            </div>

            <p className=" text-sm font-semibold mb-3">₦412,500/annum</p>

            <div className="border border-gray-700 w-full mb-2"></div>

            <p className="text-xxs mb-2 w-2/3">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <div className="border border-gray-700 w-full mb-3"></div>

            <p className="text-xs mb-7 font-bold">What’s included</p>

            <ul className="text-xs mb-7">
              <li className="mb-5">☑️ Exclusive Networking Opportunities</li>
              <li className="mb-5">☑️ Free Access to Events</li>
              <li className="mb-5">
                ☑️ Free Copy of annual Under 40 CEOs Book
              </li>
              <li className="mb-5">
                ☑️ Free Access to all Under 40 CEOs Institute Courses
              </li>
              <li className="mb-5">
                ☑️ Industry Specific Mentoring with a Platinum member
              </li>
              <li className="mb-5">☑️ Tier specific trainings</li>
              <li className="mb-5">☑️ Periodic Business Review</li>
              <li className="mb-5">
                ☑️ Access to Investment Readiness Programme, Funding/Investors
              </li>
              <li className="mb-5">☑️ Access to Platinum mentors</li>
              <li className="mb-5">☑️ Gold membership lapel pin</li>
            </ul>

            <div className="border border-white w-full mb-7"></div>

            <button className="py-1 px-7 bg-white text-black text-sm rounded-full self-start">
              Choose Plan
            </button>
          </div>

          <div className="bg-gray-300 pt-10 pb-32 sm:px-10 px-5 rounded-3xl text-black gap-2">
            <div className="flex flex-row items-center mb-2 gap-2">
              <Image src="/icons/platnum.svg" alt="" width={30} height={10} />
              <p className=" text-sm font-bold">Platinum</p>
            </div>

            <p className=" text-sm font-semibold mb-3">₦1,650,000/annum</p>

            <div className="border border-gray-700 w-full mb-2"></div>

            <p className="text-xxs mb-2 w-2/3">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <div className="border border-gray-700 w-full mb-3"></div>

            <p className="text-xs mb-7 font-bold">What’s included</p>

            <ul className="text-xs mb-7">
              <li className="mb-5">
                ☑️ Pan-African Television feature OR Produce Corporate Video
              </li>
              <li className="mb-5">☑️ Free Access to Events</li>
              <li className="mb-5">
                ☑️ Membership and business listing on website
              </li>
              <li className="mb-5">
                ☑️ Explanatory trips to African countries
              </li>
              <li className="mb-5">
                ☑️ Exclusive networking event with an African billionaire
              </li>
              <li className="mb-5">
                ☑️ Free copy of annual Under 40 CEOs book
              </li>
              <li className="mb-5">
                ☑️ Minimum of 2 Employee Trainings per cycle
              </li>
              <li className="mb-5">☑️ Platinum membership lapel pin</li>
              <li className="mb-5">
                ☑️ Exclusive Platinum-Members Only Events
              </li>
            </ul>

            <div className="border border-gray-600 w-full mb-7"></div>

            <div className="flex flex-row items-center gap-2">
              <Image src="/icons/important.svg" alt="" width={20} height={10} />
              <p className="text-xs">
                You will need to be referred to access this room
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
