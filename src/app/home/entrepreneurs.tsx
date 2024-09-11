"use client";
import Image from "next/image";

export default function Entrepreneurs() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-5/6 justify-center items-center px-5 lg:px-20 mb-20 gap-5">
      <div className="p-5 bg-white shadow-md flex flex-col items-center justify-center w-full lg-w:1/3">
        <Image
          src="/images/olaBrown.svg"
          alt=""
          className="mb-5"
          width={70}
          height={70}
        />

        <h6 className="font-bold text-lg text-center mb-2 text-black">
          Duis aute irure dolor in
        </h6>

        <p className="text-sm sm:text-lg text-black mb-10 text-center md:text-left">
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum.
        </p>

        <button
          className="py-2 px-5 rounded-full mb-10 text-white text-xs font-bold"
          style={{ backgroundColor: "#C54ED8" }}
        >
          WATCH FOR FREE
        </button>
      </div>

      <div className="p-5 bg-white shadow-md flex flex-col items-center justify-center w-full lg-w:1/3">
        <Image
          src="/images/tayo.svg"
          alt=""
          className="mb-5"
          width={70}
          height={70}
        />

        <h6 className="font-bold text-black text-lg text-center mb-2">
          Duis aute irure dolor in
        </h6>

        <p className="text-sm sm:text-lg text-black mb-10 text-center md:text-left">
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum.
        </p>

        <button
          className="py-2 px-5 rounded-full mb-10 text-white text-xs font-bold"
          style={{ backgroundColor: "#C54ED8" }}
        >
          WATCH FOR FREE
        </button>
      </div>

      <div className="p-5 bg-white shadow-md flex flex-col items-center justify-center w-full lg-w:1/3">
        <Image
          src="/images/onye.svg"
          alt=""
          className="mb-5"
          width={70}
          height={70}
        />

        <h6 className="font-bold text-black text-lg text-center mb-2">
          Duis aute irure dolor in
        </h6>

        <p className="text-sm sm:text-lg text-black mb-10 text-center md:text-left">
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum.
        </p>

        <button
          className="py-2 px-5 rounded-full mb-10 text-white text-xs font-bold"
          style={{ backgroundColor: "#C54ED8" }}
        >
          WATCH FOR FREE
        </button>
      </div>
    </div>
  );
}
