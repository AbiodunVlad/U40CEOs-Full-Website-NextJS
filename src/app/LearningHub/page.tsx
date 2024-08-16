import CoursesNavbar from "@/components/CoursesNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import Courses from "../resources/Courses";
import CourseVideos from "@/components/CourseVideos";
import CEOsSay from "../Courses/CEOsSay";
import WhatOthersSay from "../Courses/WhatOthersSay";
import FAQ from "../Courses/FAQ";
import BecomeAMember from "@/components/BecomeAMember";

export default function LearningHub() {
  return (
    <div className="bg-gray-200">
      <CoursesNavbar />
      <div className=" sm:px-20 px-5 sm:py-20 py-10">
        <p className="text-black text-2xl font-bold text-center mb-10">
          ABOUT <span className="text-purple-600">LEARNING HUB</span>
        </p>

        <div className="mb-0 w-full">
          <Image
            className="float-left py-0 md:pr-10 pr-2.5 pl-0 md:w-1/3 w-1/2"
            src="/images/learningHubb.svg"
            alt=""
            width={300}
            height={50}
          />

          <p className="text-black text-sm text-justify w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus quos dolores et quas
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus quos dolores et quas
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
            quos dolores et quas Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. At vero
            eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
            quos dolores et quas
          </p>
        </div>
      </div>

      <p className="text-center text-black text-2xl font-bold uppercase mb-10 sm:px-20 px-5">
        Course <span className="text-purple-500">listings</span>
      </p>

      {/* <Courses /> */}
      <div className="sm:px-20 px-5 mb-20">
        <CourseVideos />
      </div>

      <p className="text-center text-black text-2xl font-bold uppercase mb-10 sm:px-20 px-5">
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
        <p className="text-black text-2xl font-bold text-center mb-16">
          HEAR WHAT <span className="text-pink-500">TOP CEOs</span> SAY
        </p>

        <div className="flex flex-col items-center justify-center gap-20 sm:flex-row mb-16">
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

      <WhatOthersSay />

      <FAQ />

      <BecomeAMember />

      <Footer />
    </div>
  );
}
