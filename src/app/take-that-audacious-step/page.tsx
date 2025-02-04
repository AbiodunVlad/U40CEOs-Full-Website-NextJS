"use client";
import React from "react";
import LandingNav from "../become-a-member/LandingNav";
import RegistrationHeader from "./RegistrationHeader";
import Image from "next/image";
import Testimonials from "../home/testimonials";
import Footer from "@/components/Footer";

export default function TakeStep() {
  return (
    <div>
      <LandingNav />
      <div className=" flex flex-col px-5 xl:px-20 py-20 xl:py-28 items-center justify-between w-full max-w-screen-2xl mx-auto">
        <h1 className="text-center text-black font-extrabold text-2xl lg:text-3xl mb-5 uppercase">
          TAKE THAT AUDACIOUS STEP{" "}
        </h1>

        <p className="mb-10 w-11/12 text-center">
          The form below helps us to know more about your business and to
          suggest the best membership category that will suite you.
        </p>

        <RegistrationHeader />

        <div className="px-10 sm:px-20 pt-20 pb-10 flex lg:flex-row flex-col justify-center items-center gap-10">
          <div className="flex-1 flex flex-col justify-center items-start md:w-1/3">
            <Image
              src="/images/adaoraPurple.svg"
              alt=""
              width={200}
              height={200}
              className="mb-0 self-center"
            />

            <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
              Being a platinum member of Under 40 CEOs has opened doors to
              unparalleled opportunities for me. The high-level insights and
              connections have been key to my professional growth.
            </p>

            <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
              ADAORA MBELU{" "}
            </h6>

            <p className="text-black text-xs md:text-sm font-semibold mb-2">
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

            <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
              As a CEO, Under 40 CEOs has been a game-changer. Its platinum
              membership&apos;s remarkable resources have greatly enhanced my
              leadership and business strategies.
            </p>

            <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
              Debola Wiiliams
            </h6>

            <p className="text-black text-xs md:text-sm font-semibold mb-2">
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

            <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
              Under 40 CEOs provided me with invaluable connections and
              insights. As a platinum member, I’ve leveraged these resources to
              expand my influence and achieve new milestones.
            </p>

            <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
              Aisha Pandor
            </h6>

            <p className="text-black text-xs md:text-sm font-semibold mb-2">
              Co-founder of SweepSouth{" "}
            </p>
          </div>
        </div>

        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
