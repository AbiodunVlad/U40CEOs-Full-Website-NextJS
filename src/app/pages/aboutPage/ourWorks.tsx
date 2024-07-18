import Image from "next/image";
import React from "react";

export default function OurWorks() {
  return (
    <div className="flex flex-col items-center justify-center px-20 py-20">
      <p className="text-purple-600 text-xs text-center mb-5">OUR WORKS</p>
      <h6 className="text-black text-lg text-center font-extrabold mb-20">
        COLLABORATIONS
      </h6>

      <div className="flex flex-row gap-10 items-center justify-center mb-20">
        <div className="w-2/5">
          <h6 className="text-sm text-black font-bold mb-3">
            Drive Your Ambition
          </h6>
          <div className="flex flex-row gap-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/Mitsubishi.svg" alt="" width={20} height={20} />
            <Image src="/icons/samsung.svg" alt="" width={20} height={20} />
          </div>

          <p className="text-xs text-black leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>

        <div className="3/5">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-48"
          />
        </div>
      </div>

      <div className="flex flex-row gap-10 items-center justify-center mb-20">
        <div className="3/5">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-48"
          />
        </div>

        <div className="w-2/5">
          <h6 className="text-sm text-black font-bold mb-3">
            They Said I Couldn’t
          </h6>
          <div className="flex flex-row gap-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/sunlight.svg" alt="" width={20} height={20} />
          </div>

          <p className="text-xs text-black leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-10 items-center justify-center">
        <div className="w-2/5">
          <h6 className="text-sm text-black font-bold mb-3">
            UNDER 40 CEOs Care
          </h6>
          <div className="flex flex-row gap-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/ARM.svg" alt="" width={20} height={20} />
          </div>

          <p className="text-xs text-black leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>

        <div className="3/5">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-48"
          />
        </div>
      </div>
    </div>
  );
}
