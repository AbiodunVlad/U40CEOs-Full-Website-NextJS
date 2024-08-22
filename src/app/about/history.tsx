import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 flex flex-col justify-center items-center">
      <p className="text-xs text-purple-600 mb-3 sm:mb-4 md:mb-5">
        OUR HISTORY
      </p>

      <h2 className="text-black text-lg sm:text-xl md:text-2xl text-center font-extrabold mb-3 sm:mb-4 md:mb-5 uppercase">
        The Journey To Bigger And Better
      </h2>

      <Image
        src="/icons/journeySign.svg"
        alt=""
        width={50}
        height={20}
        className="mb-5"
      />

      <p className="text-xs text-black leading-5 mb-10 sm:mb-16 md:mb-20 text-center sm:text-left">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus quos dolores et quas{" "}
      </p>

      <div className="flex flex-col md:flex-row gap-10 sm:gap-20 md:gap-60 items-center mb-10">
        <div className="relative w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80">
          <div className="bg-purple-600 w-full h-full rounded-full"></div>
          <div className="bg-blue-500 w-full h-full rounded-full right-2 sm:right-4 md:right-5 top-2 sm:top-3 md:top-5 absolute"></div>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <p className="text-black text-lg sm:text-xl md:text-2xl font-extrabold uppercase">
            &quot;We Provide All The <br /> Necessary Tools For Young <br />{" "}
            Business Leaders To Do
            <br />
            Business And Thrive In <br /> Africa.&quot;
          </p>
        </div>
      </div>

      <p className="text-xs text-black leading-5 text-center sm:text-left">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus quos dolores et quas Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
        quos dolores et quas{" "}
      </p>
    </div>
  );
}
