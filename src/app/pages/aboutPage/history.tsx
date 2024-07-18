import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <div className="py-20 px-20 flex flex-col justify-center items-center">
      <p className="text-xs text-purple-600 mb-5">OUR HISTORY</p>

      <h2 className="text-black text-xl text-center font-extrabold mb-5 uppercase">
        The Journey To Bigger And Better
      </h2>

      <Image
        src="/icons/journeySign.svg"
        alt=""
        width={50}
        height={20}
        className="mb-5"
      />

      <p className="text-xs text-black leading-5 mb-20">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio
        dignissimos ducimus quos dolores et quas{" "}
      </p>

      <div className="flex flex-row gap-60 items-center mb-10">
        <div className="relative">
          <div className="bg-purple-600 w-80 h-80 rounded-full"></div>
          <div className="bg-blue-500 w-80 h-80 rounded-full right-5 top-5 absolute"></div>
        </div>

        <div className="flex flex-col">
          <p className="text-black text-2xl font-extrabold uppercase">
            &quot;We Provide All The <br /> Necessary Tools For Young <br />{" "}
            Business Leaders To Do
            <br />
            Business And Thrive In <br /> Africa.&quot;
          </p>
        </div>
      </div>

      <p className="text-xs text-black leading-5">
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
