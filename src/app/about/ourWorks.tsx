import Image from "next/image";
import React from "react";

export default function OurWorks() {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 py-10 sm:py-16 md:py-20">
      <p className="text-purple-600 text-sm text-center mb-5">OUR WORKS</p>
      <h6 className="text-black text-lg text-center font-extrabold mb-10 sm:mb-16 md:mb-20">
        COLLABORATIONS
      </h6>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-10 sm:mb-16 md:mb-20 h-96">
        <div className="w-full md:w-2/5">
          <h6 className="text-base text-black font-bold mb-3">
            Drive Your Ambition
          </h6>
          <div className="flex flex-row gap-3 mb-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/tinyMitsu.svg" alt="" width={20} height={20} />
            <Image src="/icons/tinySam.svg" alt="" width={40} height={20} />
          </div>
          <p className="text-sm sm:text-lg text-black leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="w-full h-full md:w-3/5">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-full"
            style={{ minHeight: "100%" }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mb-10 sm:mb-16 md:mb-20 h-96">
        <div className="w-full md:w-3/5 h-full">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-full"
          />
        </div>

        <div className="w-full md:w-2/5">
          <h6 className="text-base text-black font-bold mb-3">
            They Said I Couldn’t
          </h6>
          <div className="flex flex-row gap-3 mb-3">
            <p className="text-xs text-black">with</p>
            <Image
              src="/icons/tinySunlight.svg"
              alt=""
              width={40}
              height={20}
            />
          </div>

          <p className="text-sm sm:text-lg text-black leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center h-96">
        <div className="w-full md:w-2/5">
          <h6 className="text-base text-black font-bold mb-3">
            UNDER 40 CEOs Care
          </h6>
          <div className="flex flex-row gap-3 mb-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/tinyARM.svg" alt="" width={30} height={20} />
          </div>

          <p className="text-sm sm:text-lg text-black leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="w-full md:w-3/5 h-full">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
