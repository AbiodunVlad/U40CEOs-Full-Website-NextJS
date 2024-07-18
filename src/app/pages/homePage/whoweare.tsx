"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="relative">
      {/* Image positioned behind text */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/entres.svg"
          alt=""
          // width={100}
          // height={100}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 bg-white shadow-lg pt-12 pb-0 px-6 md:flex md:flex-row md:justify-end md:top-72 md:-left-16 md:transform md:-translate-y-1/2 md:w-1/2 md:mx-auto">
        <div className="w-full">
          <p className="text-pink-400 text-center text-xs font-semibold mb-5 md:mb-10">
            WHO WE ARE
          </p>

          <h6 className="font-extrabold text-black text-center text-lg mb-5">
            UNDER 40 CEOs
          </h6>

          <p className="text-sm text-black md:text-base mb-5 md:mb-10  md:text-left">
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
            sint voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint voluptatum deleniti atqueDuis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}
