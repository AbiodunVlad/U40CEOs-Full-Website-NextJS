"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col px-3 md:px-20 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start pb-28 gap-20">
        <div className="flex flex-col w-auto items-center">
          <Image src="/images/logo1.svg" alt="" width={200} height={150} />

          <p className="text-xs text-white text-center mb-20">
            We are building the future <br /> of African Business
          </p>

          <p className="text-pink-600 text-xs text-center mb-5">
            Stay updated with the latest news, resources,
            <br /> and events from under40ceos.com.
          </p>

          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="p-4 mb-5 rounded-lg"
            />
            <button
              className="py-3 px-5 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>

        <div className="flex flex-col w-2/3">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between pb-10">
              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">
                  Quicklinks
                </p>
                <Link href="/home" className="text-xs text-white mb-2">
                  Home
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  About Us
                </Link>
                <Link href="/resources" className="text-xs text-white mb-2">
                  Resources
                </Link>
                <Link href="/success" className="text-xs text-white mb-2">
                  Success Stories
                </Link>
                <Link href="/join" className="text-xs text-white mb-2">
                  Join Us
                </Link>
                <Link href="/events" className="text-xs text-white mb-2">
                  Events
                </Link>
                <Link href="/blog" className="text-xs text-white mb-2">
                  Blogs
                </Link>
                <Link href="/contact" className="text-xs text-white mb-2">
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">
                  Resources
                </p>
                <Link href="/home" className="text-xs text-white mb-2">
                  Courses
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  CEO Interviews
                </Link>
                <Link href="/resources" className="text-xs text-white mb-2">
                  Webinars
                </Link>
                <Link href="/success" className="text-xs text-white mb-2">
                  Events
                </Link>
                <Link href="/join" className="text-xs text-white mb-2">
                  Books
                </Link>
                <Link href="/events" className="text-xs text-white mb-2">
                  Media Feature
                </Link>
                <Link href="/blog" className="text-xs text-white mb-2">
                  Become a Member
                </Link>
              </div>

              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">
                  Community
                </p>
                <Link href="/home" className="text-xs text-white mb-2">
                  Our Members
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  Partner Organizations
                </Link>
                <Link href="/resources" className="text-xs text-white mb-2">
                  Collaborations
                </Link>
                <Link href="/success" className="text-xs text-white mb-2">
                  Events
                </Link>
                <Link href="/join" className="text-xs text-white mb-2">
                  Calendar
                </Link>
                <Link href="/events" className="text-xs text-white mb-2">
                  Join Our Community
                </Link>
              </div>

              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">Legal</p>
                <Link href="/home" className="text-xs text-white mb-2">
                  Terms of Use
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  Privacy Policy
                </Link>
                <Link href="/resources" className="text-xs text-white mb-2">
                  Disclaimer
                </Link>
              </div>
            </div>

            <div className="bg-gray-300 w-full h-0.5"></div>

            <div className="flex flex-col md:flex-row justify-between pt-10">
              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">
                  West Africa Office
                </p>
                <Link href="/home" className="text-xs text-white mb-2">
                  +234 1 453 1963
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  wumi@under40ceos.com
                </Link>
                <p className="text-xs text-white mb-2">
                  25 Oduduwa Way, Ikeja
                  <br /> G.R.A, Lagos, Nigeria.
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">
                  West Africa Office
                </p>
                <Link href="/home" className="text-xs text-white mb-2">
                  +234 1 453 1963
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  wumi@under40ceos.com
                </Link>
                <p className="text-xs text-white mb-2">
                  25 Oduduwa Way, Ikeja
                  <br /> G.R.A, Lagos, Nigeria.
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-xs font-bold text-purple-700 mb-5">
                  West Africa Office
                </p>
                <Link href="/home" className="text-xs text-white mb-2">
                  +234 1 453 1963
                </Link>
                <Link href="/about" className="text-xs text-white mb-2">
                  wumi@under40ceos.com
                </Link>
                <p className="text-xs text-white mb-2">
                  25 Oduduwa Way, Ikeja
                  <br /> G.R.A, Lagos, Nigeria.
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
        <p className="text-white">Copyright ©️ 2024 LandingBox</p>
      </div>
    </div>
  );
}
