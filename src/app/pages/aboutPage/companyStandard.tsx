import Stats from "@/app/components/stats";
import React from "react";

export default function CompanyStandard() {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-20 pb-16 sm:pb-24 md:pb-32 justify-center">
      <div className="border-purple-600 border-2 border-solid bg-white p-6 sm:p-12 md:p-20 mb-10 sm:mb-16 md:mb-20">
        <p className="text-xs text-purple-600 mb-3 sm:mb-4 md:mb-5">
          FOUNDER’S MESSAGE
        </p>
        <h6 className="text-black text-lg font-extrabold mb-5 sm:mb-7 md:mb-10">
          LOREM IPSUM DOLOR
        </h6>

        <div className="flex flex-col md:flex-row gap-5">
          <p className="w-full md:w-2/5 text-black text-xs leading-5 mb-5 md:mb-0">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus quos dolores et quas
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos duxv
          </p>
          <div className="w-full md:w-3/5 md:mb-0 mb-5">
            {/* <NextVideo src={u40ceos} /> */}
            <iframe
              src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
              className="w-full h-48"
            ></iframe>
          </div>
        </div>
        <p className="text-black text-xs leading-5 mb-10">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto
          odio dignissimos ducimus qui blanditiis Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis Duis aute irure dolor in reprehenderit in voluptate
        </p>

        <Stats />

        {/* <div className="flex flex-row px-1  md:px-20 items-center justify-around overflow-hidden z-30">
          <div className="flex flex-col justify-center">
            <h1 className="text-black text-lg md:text-4xl font-extrabold text-center">
              1,246+
            </h1>
            <p className="text-pink-500 text-xs md:text-xs text-center">
              Members
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-black text-lg md:text-4xl font-extrabold text-center">
              414+
            </h1>
            <p className="text-pink-500 text-xs md:text-xs text-center">
              Success Stories
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-black text-lg md:text-4xl font-extrabold text-center">
              514+
            </h1>
            <p className="text-pink-500 text-xs md:text-xs text-center">
              Membership Programs
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-black text-lg md:text-4xl font-extrabold text-center">
              7B+
            </h1>
            <p className="text-pink-500 text-xs md:text-xs text-center">
              Educational Resources
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-black text-lg md:text-4xl font-extrabold text-center">
              189
            </h1>
            <p className="text-pink-500 text-xs md:text-xs text-center">
              Partnerships
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-black text-lg md:text-4xl font-extrabold text-center">
              189
            </h1>
            <p className="text-pink-500 text-xs md:text-xs text-center">
              Events Hosted
            </p>
          </div>
        </div> */}
      </div>

      <h2 className="text-black text-xl text-center font-extrabold mb-10 sm:mb-16 md:mb-20 uppercase">
        Our Company Standards
      </h2>

      <div className="flex flex-col md:flex-row gap-10 sm:gap-20 md:gap-60 items-center">
        <div className="relative">
          <div className="bg-gray-500 w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full"></div>
          <div className="bg-transparent border-purple-600 border-2 w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full -right-5 sm:-right-8 md:-right-10 top-2 sm:top-3 md:top-5 absolute"></div>
        </div>

        <div className="flex flex-col">
          <div className="mb-5 sm:mb-7 md:mb-10">
            <p className="text-lg text-purple-600 font-bold">Vision</p>
            <p className="text-sm text-black leading-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum.
            </p>
          </div>

          <div>
            <p className="text-lg text-purple-600 font-bold">Mission</p>
            <p className="text-sm text-black leading-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
