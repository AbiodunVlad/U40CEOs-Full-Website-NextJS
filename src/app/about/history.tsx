import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 flex flex-col justify-center items-center">
      <p className="text-sm text-purple-600 mb-3 sm:mb-4 md:mb-5">
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

      <p className="text-sm sm:text-lg text-black leading-5 mb-40 lg:mb-40 md:mb-20 text-center sm:text-left">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus quos dolores et quas{" "}
      </p>

      <div className="flex flex-col md:flex-row gap-10 sm:gap-20 md:gap-60 items-center justify-between mb-20 md:mb-20 lg:mb-40 w-full">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center mb-40 md:mb-10 lg:mb-0">
          <div className="bg-purple-600 w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full absolute"></div>
          <div className="bg-blue-500 flex items-center justify-center w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full absolute translate-y-5">
            <Image src="/images/logo.svg" alt="" width={200} height={200} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col text-center md:text-left">
          <p className="w-full text-black text-lg sm:text-xl md:text-2xl font-extrabold uppercase">
            &quot;We Provide All The <br className="hidden" /> Necessary Tools
            For Young <br className="hidden" /> Business Leaders To Do
            <br className="hidden" />
            Business And Thrive In <br className="hidden" /> Africa.&quot;
          </p>
        </div>
      </div>

      <p className="text-sm sm:text-lg text-black leading-5 text-center sm:text-left">
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
