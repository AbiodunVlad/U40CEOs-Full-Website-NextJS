import Image from "next/image";
import React from "react";

export default function CEOsSay() {
  return (
    <div className="bg-white lg:px-20 px-5 py-7">
      <p className="text-black md:text-3xl text-lg font-bold text-center mb-16">
        HEAR WHAT <span className="text-pink-500">TOP CEOs</span> SAY
      </p>

      <div className="flex flex-col items-center justify-center gap-10 px-5 md:flex-row mb-20">
        <div className="w-full md:w-1/4 flex flex-col text-start items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-black  text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>

          <p className="text-sm sm:text-lg text-black text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-start items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>

          <p className="text-sm sm:text-lg text-black text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-start items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1">
            PLATINUM NAME
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            DESIGNATION
          </p>

          <p className="text-sm sm:text-lg text-black text-start mb-4 md:mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>
      </div>

      <p className="text-black md:text-3xl text-lg  font-bold text-center mb-10">
        ABOUT <span className="text-purple-600">LEARNING HUB</span>
      </p>

      <div className="flex lg:flex-row flex-col xl:gap-28 gap-20 justify-between w-full md:mb-20 mb-10">
        <div className="lg:w-1/2 w-full -mb-16">
          <Image
            className="w-full"
            src="/images/learningHubb.svg"
            alt=""
            width={300}
            height={50}
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <p className="text-sm sm:text-lg text-black text-justify w-full">
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
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus quos dolores et quas
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
            quos dolores et quas Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. At vero
            eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
            quos dolores et quas
          </p>
        </div>
      </div>
    </div>
  );
}
