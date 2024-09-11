import Stats from "@/components/stats";
import Image from "next/image";
import React from "react";

export default function CompanyStandard() {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-20 pb-16 sm:pb-24 md:pb-32 justify-center">
      <div className="border-purple-600 border-2 border-solid bg-white p-6 sm:p-12 md:p-10 mb-10 sm:mb-16 md:mb-20">
        <p className="text-sm text-purple-600 mb-3 sm:mb-4 md:mb-5">
          FOUNDER’S MESSAGE
        </p>
        <h6 className="text-black text-lg font-extrabold mb-5 sm:mb-7 md:mb-10">
          LOREM IPSUM DOLOR
        </h6>

        <div className="flex flex-col lg:flex-row gap-5 h-screen">
          <div className="w-full h-full lg:w-1/2 mb-5 md:mb-0">
            <p className="w-full text-black text-sm sm:text-lg leading-5 mb-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              dotn cillum dolore eu fugiat nulla pariatur. At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. At vero eos et accusamus et iusto odio dignissimos
              ducimus quos dolores et quas Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. At vero eos et accusamus et iusto odio dignissimos
              duxv
            </p>

            <p className="w-full text-black text-sm sm:text-lg leading-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>

          <div className="flex w-full lg:w-1/2 h-full md:mb-0 mb-5">
            {/* <NextVideo src={u40ceos} /> */}
            <iframe
              src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
              className="w-full h-fit"
              style={{ minHeight: "100%" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Stats />
      </div>

      <h2 className="text-black text-xl text-center font-extrabold mb-40 md:mb-52 lg:mb-20 uppercase">
        Our Company Standards
      </h2>

      <div className="w-full flex flex-col lg:flex-row gap-10 sm:gap-20 md:gap-60 items-center">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center mb-40 md:mb-10 lg:mb-0">
          <div className="bg-gray-500 w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full absolute"></div>
          <div className="bg-transparent border-purple-600 border-2 w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full absolute flex items-center justify-center transform rotate-0 translate-y-3 translate-x-3">
            <Image src="/images/logo.svg" alt="" width={200} height={200} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-5 sm:mb-7 md:mb-10">
            <p className="text-lg text-purple-600 font-bold">Vision</p>
            <p className="text-sm sm:text-lg text-black leading-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum.
            </p>
          </div>

          <div>
            <p className="text-lg text-purple-600 font-bold">Mission</p>
            <p className="text-sm sm:text-lg text-black leading-5">
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
