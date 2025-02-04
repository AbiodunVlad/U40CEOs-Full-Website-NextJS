import Image from "next/image";
import React from "react";

export default function LandingSuccessStories() {
  return (
    <div className="flex flex-col items-center py-10 xl:py-20 relative max-w-screen-2xl mx-auto w-full  bg-gradient-to-br from-slate-950 via-slate-800 to-purple-800">
      <h1 className="text-white text-3xl lg:text-4xl text-center font-extrabold uppercase p-5">
        SUCCESS STORIES FROM OUR <br />
        <span className="text-purple-500">PLATINUM MEMBERS</span>
      </h1>

      <div className="px-10 sm:px-20 pt-20 pb-10 flex lg:flex-row flex-col justify-center items-center gap-10">
        <div className="flex-1 flex flex-col justify-center items-start md:w-1/3">
          <Image
            src="/images/adaoraPurple.svg"
            alt=""
            width={200}
            height={200}
            className="mb-0 self-center"
          />

          <p className="text-sm sm:text-lg text-white leading-4 mb-16 w-full">
            Being a platinum member of Under 40 CEOs has opened doors to
            unparalleled opportunities for me. The high-level insights and
            connections have been key to my professional growth.
          </p>

          <h6 className="font-extrabold text-white text-base md:text-lg mb-1 uppercase">
            ADAORA MBELU{" "}
          </h6>

          <p className="text-white text-xs md:text-sm font-semibold mb-2">
            Founder of Lumination Global Network
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start md:w-1/3">
          <Image
            src="/images/debolaPurple.svg"
            alt=""
            width={200}
            height={200}
            className="mb-0 self-center"
          />

          <p className="text-sm sm:text-lg text-white leading-4 mb-16 w-full">
            As a CEO, Under 40 CEOs has been a game-changer. Its platinum
            membership&apos;s remarkable resources have greatly enhanced my
            leadership and business strategies.
          </p>

          <h6 className="font-extrabold text-white text-base md:text-lg mb-1 uppercase">
            Debola Wiiliams
          </h6>

          <p className="text-white text-xs md:text-sm font-semibold mb-2">
            Group CEO of RED | For Africa
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start md:w-1/3">
          <Image
            src="/images/aishaPurple.svg"
            alt=""
            width={200}
            height={200}
            className="mb-0 self-center"
          />

          <p className="text-sm sm:text-lg text-white leading-4 mb-16 w-full">
            Under 40 CEOs provided me with invaluable connections and insights.
            As a platinum member, I’ve leveraged these resources to expand my
            influence and achieve new milestones.
          </p>

          <h6 className="font-extrabold text-white text-base md:text-lg mb-1 uppercase">
            Aisha Pandor
          </h6>

          <p className="text-white text-xs md:text-sm font-semibold mb-2">
            Co-founder of SweepSouth{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
