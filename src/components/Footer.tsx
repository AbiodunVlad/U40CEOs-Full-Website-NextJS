"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col px-3 md:px-20 py-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between lg:items-start pb-28 gap-20 w-full">
        <div className="flex md:flex-col flex-col-reverse lg:w-1/3 w-full items-center">
          <div className="flex md:flex-col flex-row items-center md:gap-0 gap-5">
            <Link href="/home">
              <Image src="/images/logo1.svg" alt="" width={200} height={150} />
            </Link>

            <p className="text-md sm:text-xl text-white md:text-center text-start md:mb-20">
              We are building the future of African Business
            </p>
          </div>

          <div className="md:mb-0 mb-20">
            <p className="text-pink-600 text-md sm:text-xl text-start mb-5">
              Stay updated with the latest news, resources, and events from
              under40ceos.com.
            </p>

            <form className="flex flex-col pr-20">
              <input
                type="email"
                placeholder="Email"
                className="py-4 px-7 mb-5 rounded-lg text-black focus:outline-none"
              />
              <button
                className="py-4 px-7 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: "#9B05E2" }}
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:w-2/3 w-full">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-around gap-5 pb-10">
              <div className="flex flex-row justify-around sm:justify-between md:w-1/2 w-full">
                <div className="flex flex-col">
                  <p className="text-md sm:text-xl font-bold text-purple-700 mb-5">
                    Quicklinks
                  </p>

                  <Link
                    href="/home"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Resources
                  </Link>

                  <Link
                    href="/successStories"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Success Stories
                  </Link>

                  <Link
                    href="/home"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Join Us
                  </Link>

                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Events
                  </Link>

                  <Link
                    href="/blog"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Blogs
                  </Link>

                  <Link
                    href="/ScheduleACall"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="flex flex-col">
                  <p className="text-md sm:text-xl font-bold text-purple-700 mb-5">
                    Resources
                  </p>

                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Courses
                  </Link>

                  <Link
                    href="/about"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    CEO Interviews
                  </Link>

                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Webinars
                  </Link>

                  <Link
                    href="/Events"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Events
                  </Link>

                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Books
                  </Link>

                  <Link
                    href="/ScheduleACall"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Media Feature
                  </Link>

                  <Link
                    href="/blog"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Become a Member
                  </Link>
                </div>
              </div>

              <div className="flex flex-row justify-around sm:justify-between  md:w-1/2 w-full">
                <div className="flex flex-col">
                  <p className="text-md sm:text-xl font-bold text-purple-700 mb-5">
                    Community
                  </p>

                  <Link
                    href="/home"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Our Members
                  </Link>

                  <Link
                    href="/about"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Partner Organizations
                  </Link>
                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Collaborations
                  </Link>
                  <Link
                    href="/resources"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Events
                  </Link>

                  <Link
                    href="/ScheduleACall"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Calendar
                  </Link>

                  <Link
                    href="/community"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Join Our Community
                  </Link>
                </div>

                <div className="flex flex-col">
                  <p className="text-md sm:text-xl font-bold text-purple-700 mb-5">
                    Legal
                  </p>

                  <Link
                    href="/underDevelopment"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Terms of Use
                  </Link>

                  <Link
                    href="/underDevelopment"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/home"
                    className="text-sm sm:text-lg text-white mb-2"
                  >
                    Disclaimer
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-300 w-full h-0.5"></div>

            <div className="flex sm:flex-row flex-col sm:justify-between items-start sm:items-center gap-5 px-10 sm:px-0 pt-10">
              <div className="flex flex-col">
                <p className="text-sm sm:text-lg font-bold text-purple-700 mb-5">
                  West Africa Office
                </p>

                <Link
                  href="/home"
                  className="text-sm sm:text-lg text-white mb-2"
                >
                  +234 1 453 1963
                </Link>
                <Link
                  href="/home"
                  className="text-sm sm:text-lg text-white mb-2"
                >
                  wumi@under40ceos.com
                </Link>
                <p className="text-sm sm:text-lg text-white mb-2">
                  25 Oduduwa Way, Ikeja
                  <br /> G.R.A, Lagos, Nigeria.
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-sm sm:text-lg font-bold text-purple-700 mb-5">
                  South Africa Office{" "}
                </p>

                <Link
                  href="/home"
                  className="text-sm sm:text-lg text-white mb-2"
                >
                  +27 11 053 7674{" "}
                </Link>

                <Link
                  href="/home"
                  className="text-sm sm:text-lg text-white mb-2"
                >
                  phyllis@under40ceos.com
                </Link>

                <p className="text-sm sm:text-lg text-white mb-2">
                  33 Ballyclare drive, Bryanston,
                  <br /> Johannesburg, South Africa.
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-sm sm:text-lg font-bold text-purple-700 mb-5">
                  East Africa Office{" "}
                </p>

                <Link
                  href="/home"
                  className="text-sm sm:text-lg text-white mb-2"
                >
                  +250 788 305 352{" "}
                </Link>

                <Link
                  href="/home"
                  className="text-sm sm:text-lg text-white mb-2"
                >
                  grace@under40ceos.com
                </Link>

                <p className="text-sm sm:text-lg text-white mb-2">
                  14th floor, Kigali City Tower,
                  <br /> Plot No. 6418, Avenue Du Commerce,
                  <br /> Kigali, Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center pb-5 gap-10">
        <Image src="/icons/facebook.svg" alt="" width={20} height={50} />
        <Image src="/icons/linkedin.svg" alt="" width={30} height={50} />
        <Image src="/icons/redit.svg" alt="" width={40} height={50} />
        <Image src="/icons/twitter.svg" alt="" width={30} height={40} />
        <Image src="/icons/pinterest.svg" alt="" width={30} height={50} />
      </div>

      <div className="text-center text-xs">
        <p className="text-white text-sm sm:text-lg">
          Copyright ©️ 2024 Under 40 CEOs
        </p>
      </div>
    </div>
  );
}
