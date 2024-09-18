import Image from "next/image";
import React from "react";

export default function CourseOverview() {
  return (
    <div className="bg-blue-200 py-10 sm:px-20 px-5">
      <p className="text-black md:text-3xl text-lg font-bold text-center uppercase mb-7">
        Course <span className="text-purple-500">Overview</span>
      </p>

      <p className="text-black text-sm sm:text-lg mb-7">
        Intoduction: Are you ready to turn your business idea into a reality?
        Our &apos;Starting a Business in Africa&apos; course is designed to
        equip you with the knowledge and tools you need to succeed in the
        dynamic African market.Are you ready to turn your business idea into a
        reality? Our &apos;Starting a Business in Africa&apos; course is
        designed to equip you with the knowledge and tools you need to succeed
        in the dynamic African market.
      </p>

      <div className="flex flex-col xl:px-20 px-5">
        <div className="flex lg:flex-row flex-col xl:gap-28 gap-20 justify-between w-full md:mb-20 mb-10">
          <div className="lg:w-1/2 w-full -mb-16">
            <Image
              src="/images/SABIA1.svg"
              className="w-full"
              alt=""
              width={50}
              height={50}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-black text-xl font-bold mb-3">Key Benefits</p>

            <p className="text-black text-sm sm:text-lg mb-10">
              Are you ready to take control of your health and well-being? Our
              comprehensive nutrition program is designed to help you achieve
              optimal vitality through personalized meal planning, expert
              guidance, and evidence-based resources.
            </p>

            <ul className="text-black text-sm mb-10">
              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Learn from successful African entrepreneurs.
              </li>

              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Gain insights into local markets and business practices.
              </li>

              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Develop a solid business plan tailored to the African context.
              </li>

              <li className="flex mb-2 text-sm sm:text-lg gap-3">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access exclusive resources and mentorship opportunities.
              </li>
            </ul>

            <p className="text-black text-sm sm:text-lg">
              Whether you&apos;re a busy professional, an athlete, or simply
              looking to improve your overall health, our program offers a
              tailored solution to fit your unique needs and lifestyle.
            </p>
          </div>
        </div>

        <button className="lg:self-center self-stretch py-2 px-20 bg-purple-600 text-white text-xl font-bold rounded-full">
          ENROL NOW
        </button>
      </div>
    </div>
  );
}
