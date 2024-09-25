import Image from "next/image";
import React from "react";

export default function PlatinumName() {
  return (
    <div className="px-10 sm:px-20 pt-20 pb-10 bg-white flex md:flex-row flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-start md:w-1/3">
        <Image
          src="/images/adaoraBlue.svg"
          alt=""
          width={150}
          height={150}
          className="mb-10 self-center"
        />

        <p className="text-sm sm:text-lg text-black leading-4 mb-5 w-full">
          Being a platinum member of Under 40 CEOs has opened doors to
          unparalleled opportunities for me. The high-level insights and
          connections have been key to my professional growth.
        </p>

        <p className="text-black text-base md:text-lg uppercase font-extrabold">
          Adaora Mbelu
        </p>
        <p className="text-black text-xs md:text-sm">
          Founder of Lumination Global Network
        </p>
      </div>

      <div className="flex flex-col justify-center items-start md:w-1/3">
        <Image
          src="/images/omobolaBlue.svg"
          alt=""
          width={150}
          height={150}
          className="mb-10 self-center"
        />

        <p className="text-sm sm:text-lg text-black leading-4 mb-5 w-full">
          As a CEO, Under 40 CEOs has been a game-changer. Its platinum
          membership&apos;s remarkable resources have greatly enhanced my
          leadership and business strategies.
        </p>

        <p className="text-black text-base md:text-lg uppercase font-extrabold ">
          Debola Wiiliams
        </p>
        <p className="text-black text-xs md:text-sm">
          Group CEO of RED | For Africa
        </p>
      </div>

      <div className="flex flex-col justify-center items-start md:w-1/3">
        <Image
          src="/images/aishaBlue.svg"
          alt=""
          width={150}
          height={150}
          className="mb-10 self-center"
        />

        <p className="text-sm sm:text-lg text-black leading-4 mb-5 w-full">
          Under 40 CEOs provided me with invaluable connections and insights. As
          a platinum member, I’ve leveraged these resources to expand my
          influence and achieve new milestones.
        </p>

        <p className="text-black text-base md:text-lg uppercase font-extrabold ">
          Aisha Pandor
        </p>
        <p className="text-black text-xs md:text-sm">
          Co-founder of SweepSouth
        </p>
      </div>
    </div>
  );
}
