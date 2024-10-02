"use client";
import CoursesNavbar from "@/components/CoursesNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import CourseVideos from "@/components/CourseVideos";
import WhatOthersSay from "../Courses/WhatOthersSay";
import FAQ from "../Courses/FAQ";
import BecomeAMember from "@/components/BecomeAMember";
import EnrolNow from "@/components/EnrolNow";

export default function LearningHub() {
  return (
    <div className="bg-gray-200">
      <CoursesNavbar />

      <div className=" sm:px-20 px-5 sm:py-20 py-10">
        <p className="text-black text-4xl lg:text-5xl font-bold text-center mb-10">
          ABOUT <span className="text-purple-600">LEARNING HUB</span>
        </p>

        <div className="flex flex-col  gap-5 h-auto p-6 sm:p-12 md:p-10">
          <div className="flex flex-col sm:flex-row w-full gap-10">
            <div className="flex flex-col w-full sm:w-1/3">
              <Image
                src="/images/learningHubb.svg"
                alt=""
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col w-full sm:w-2/3 sm:mb-2 mb-0">
              <p className="w-full text-black text-base sm:text-2xl leading-5 mb-3">
                Welcome to the Under 40 CEOs Learning Hub, the intellectual
                powerhouse of African entrepreneurship. As the educational arm
                of Under 40 CEOs, the Institute is dedicated to equipping
                ambitious business leaders like you with the essential tools and
                knowledge needed to thrive in Africa&apos;s dynamic business
                landscape.
              </p>

              <p className="w-full text-black text-base sm:text-2xl leading-5 mb-3">
                Imagine navigating the business world without the right
                resources—it&apos;s like wandering through a dark room
                blindfolded. We understand this challenge, which is why
                we&apos;ve curated a comprehensive array of premium resources
                tailored to propel your business forward.
              </p>

              <p className="w-full text-black text-base sm:text-2xl leading-5 mb-0">
                At the Institute, gain exclusive access to our flagship course,
                &quot;Starting A Business in Africa.&quot; Taught by seasoned
                entrepreneurs who have triumphed in the African market, this
                course offers practical insights and tools crucial for launching
                and scaling successful ventures.
              </p>
            </div>
          </div>

          <div>
            <p className="w-full text-black text-base sm:text-2xl leading-5 mb-3">
              Delve into a treasure trove of resources including business
              templates, e-books, research reports, and case
              studies—meticulously crafted by industry experts and proven
              business leaders. These resources are designed to be immediately
              applicable, empowering you to implement strategies that drive
              tangible results. Members of Under 40 CEOs enjoy unrestricted
              access to all Institute resources, providing unparalleled support
              on your entrepreneurial journey. Non-members can also access our
              Institute resources for a nominal fee, ensuring everyone has the
              opportunity to benefit from our wealth of knowledge.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-black text-3xl lg:text-4xl font-bold uppercase mb-10 sm:px-20 px-5">
        Course <span className="text-purple-500">listings</span>
      </p>

      {/* <Courses /> */}
      <div className="sm:px-20 px-5 mb-20">
        <CourseVideos />
      </div>

      <p className="text-center text-black text-3xl lg:text-4xl font-bold uppercase mb-10 sm:px-20 px-5">
        industry certified <span className="text-purple-500">INSTRUCTORS</span>
      </p>

      <div className="flex sm:flex-row flex-col justify-center gap-10 mb-10">
        <div className="flex flex-row items-center justify-center gap-10">
          <Image src="/images/instructor.svg" alt="" width={70} height={70} />
          <Image src="/images/instructor.svg" alt="" width={70} height={70} />
          <Image src="/images/instructor.svg" alt="" width={70} height={70} />
        </div>

        <div className="flex flex-row items-center justify-center gap-10">
          <Image src="/images/instructor.svg" alt="" width={70} height={70} />
          <Image src="/images/instructor.svg" alt="" width={70} height={70} />
          <Image src="/images/instructor.svg" alt="" width={70} height={70} />
        </div>
      </div>

      <div className="bg-blue-200 sm:px-20 px-5 py-10">
        <p className="text-black text-3xl lg:text-4xl font-bold text-center mb-16">
          HEAR WHAT <span className="text-pink-500">TOP CEOs</span> SAY
        </p>

        <div className="flex flex-col items-center justify-center gap-10 px-5 md:flex-row mb-20">
          <div className="w-full md:w-1/4 flex flex-col text-start  mb-8 md:mb-0">
            <Image
              src="/images/adaora.svg"
              alt=""
              width={120}
              height={150}
              className="w-3/4 self-center"
            />

            <p className="text-base sm:text-2xl text-black text-start mb-4 md:mb-8">
              Being a platinum member of Under 40 CEOs has opened doors to
              unparalleled opportunities for me. The high-level insights and
              connections have been key to my professional growth.
            </p>

            <h6 className="font-extrabold text-black text-base sm:text-2xl mb-1">
              Adaora Mbelu
            </h6>

            <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
              Founder of Lumination Global Network
            </p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col text-start mb-8 md:mb-0">
            <Image
              src="/images/omobola.svg"
              alt=""
              width={120}
              height={150}
              className="w-3/4 self-center"
            />

            <p className="text-base sm:text-2xl text-black text-start mb-4 md:mb-8">
              As a CEO, Under 40 CEOs has been a game-changer. Its platinum
              membership&apos;s remarkable resources have greatly enhanced my
              leadership and business strategies.
            </p>

            <h6 className="font-extrabold text-black text-base sm:text-2xl mb-1">
              Debola Wiiliams
            </h6>

            <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
              Group CEO of RED | For Africa
            </p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col text-start mb-8 md:mb-0">
            <Image
              src="/images/aisha.svg"
              alt=""
              width={120}
              height={150}
              className="w-3/4 self-center"
            />

            <p className="text-base sm:text-2xl text-black text-start mb-4 md:mb-8">
              Under 40 CEOs provided me with invaluable connections and
              insights. As a platinum member, I’ve leveraged these resources to
              expand my influence and achieve new milestones.
            </p>

            <h6 className="font-extrabold text-black text-base sm:text-2xl mb-1">
              Aisha Pandor
            </h6>

            <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
              Co-founder of SweepSouth
            </p>
          </div>
        </div>
      </div>

      <WhatOthersSay />

      <EnrolNow />

      {/* <FAQ /> */}

      <BecomeAMember />

      <Footer />
    </div>
  );
}
