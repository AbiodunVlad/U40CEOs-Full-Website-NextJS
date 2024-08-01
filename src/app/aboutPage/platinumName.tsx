import Image from "next/image";
import React from "react";

export default function PlatinumName() {
  return (
    <div className="px-20 pt-20 pb-10 bg-white flex md:flex-row flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center md:w-1/3">
        <Image
          src="/images/omobolaBlue.svg"
          alt=""
          width={150}
          height={150}
          className="mb-10"
        />

        <p className="text-xs text-black leading-4 mb-5 w-60">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>

        <p className="text-black text-sm font-extrabold">PLATINUM NAME</p>
        <p className="text-black text-sm">DESIGNATION</p>
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/3">
        <Image
          src="/images/omobolaBlue.svg"
          alt=""
          width={150}
          height={150}
          className="mb-10"
        />

        <p className="text-xs text-black leading-4 mb-5 w-60">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>

        <p className="text-black text-sm font-extrabold ">PLATINUM NAME</p>
        <p className="text-black text-sm">DESIGNATION</p>
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/3">
        <Image
          src="/images/omobolaBlue.svg"
          alt=""
          width={150}
          height={150}
          className="mb-10"
        />

        <p className="text-xs text-black leading-4 mb-5 w-60">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>

        <p className="text-black text-sm font-extrabold ">PLATINUM NAME</p>
        <p className="text-black text-sm">DESIGNATION</p>
      </div>
    </div>
  );
}
