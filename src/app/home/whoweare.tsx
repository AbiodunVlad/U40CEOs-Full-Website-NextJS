"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="">
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/entres.svg"
          alt=""
          width={100}
          height={100}
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <div className=" z-10 bg-white h-auto shadow-lg py-14 px-6 md:flex md:flex-row md:justify-end    md:w-1/2 md:mx-auto">
        <div className="w-full">
          <p className="text-pink-400 text-center text-sm font-semibold mb-5 md:mb-12">
            WHO WE ARE
          </p>

          <h6 className="font-extrabold text-black text-center text-2xl mb-5">
            UNDER 40 CEOs
          </h6>

          <p className="text-sm sm:text-lg text-black  mb-5 md:mb-10  md:text-left">
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
