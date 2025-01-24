"use client";
import Image from "next/image";

export default function Entrepreneurs() {
  return (
    <div className="flex flex-col md:flex-row w-full h-fit md:w-full justify-center items-stretch px-5 xl:px-10 mb-20 gap-5">
      <div className="p-5 bg-white shadow-md flex flex-col flex-grow items-start justify-between w-full lg-w:1/3 h-full">
        <Image
          src="/images/olaBrown.svg"
          alt=""
          className="mb-5 flex self-center"
          width={150}
          height={70}
        />

        <div className="flex flex-col self-center mb-10">
          <h6 className="flex font-bold text-xl lg:text-2xl text-center mb-2 text-black">
            NAME OF COURSE{" "}
          </h6>

          <p className="text-black text-base text-center font-bold">
            <span className="font-thin text-sm">taught by</span> Dr. Ola Brown
          </p>
          <p className="text-base text-pink-500 text-center">
            Founder of Flying Doctors
          </p>
        </div>

        <p className="text-base sm:text-2xl text-black mb-10 text-start md:text-left flex-grow">
          Discover the roadmap to entrepreneurial success in Africa, with
          comprehensive insights into market analysis, legal tips, funding
          strategies, and practical skills for navigating the African business
          landscape.
        </p>

        <button
          className="py-4 px-7 rounded-full mb-10 text-white text-xs font-bold sm:self-center self-stretch"
          style={{ backgroundColor: "#C54ED8" }}
        >
          WATCH FOR FREE
        </button>
      </div>

      <div className="p-5 bg-white shadow-md flex flex-col flex-grow items-start justify-between w-full lg-w:1/3 h-full">
        <Image
          src="/images/tayo.svg"
          alt=""
          className="mb-5 self-center"
          width={150}
          height={70}
        />

        <div className="flex flex-col self-center  mb-10">
          <h6 className="font-bold text-xl lg:text-2xl text-start mb-2 text-black">
            NAME OF COURSE{" "}
          </h6>

          <p className="text-black text-base text-center font-bold">
            <span className="font-thin text-sm">taught by</span> Dr. Tayo
            Oyedeji
          </p>
          <p className="text-base text-pink-500 text-center">
            CEO of Publicis Groupe
          </p>
        </div>

        <p className="text-base sm:text-2xl text-black mb-10 text-start md:text-left flex-grow">
          Equip yourself with the knowledge and skills needed for business
          success in Africa. Learn  how to overcome challenges, seize
          opportunities, and drive your entrepreneurial vision forward.
        </p>

        <button
          className="py-4 px-7 rounded-full mb-10 text-white text-xs font-bold sm:self-center self-stretch"
          style={{ backgroundColor: "#C54ED8" }}
        >
          WATCH FOR FREE
        </button>
      </div>

      <div className="p-5 bg-white shadow-md flex flex-col flex-grow items-start justify-between w-full lg-w:1/3 h-full">
        <Image
          src="/images/onye.svg"
          alt=""
          className="mb-5 self-center"
          width={150}
          height={70}
        />

        <div className="flex flex-col self-center mb-10">
          <h6 className="font-bold text-xl lg:text-2xl text-start mb-2 text-black">
            NAME OF COURSE{" "}
          </h6>

          <p className="text-black text-base text-center font-bold">
            <span className="font-thin text-sm">taught by</span> Sam Oyemelukwe
          </p>
          <p className="text-base text-pink-500 text-center">
            Senior VP at Trace
          </p>
        </div>

        <p className="text-base sm:text-2xl text-black mb-10 text-start md:text-left flex-grow">
          Sales and marketing are the bedrock of success. Learn how to harness
          these essential skills to transform challenges into growth
          opportunities and make a lasting impact in your industry.
        </p>

        <button
          className="py-4 px-7 rounded-full mb-10 text-white text-xs font-bold sm:self-center self-stretch"
          style={{ backgroundColor: "#C54ED8" }}
        >
          WATCH FOR FREE
        </button>
      </div>
    </div>
  );
}
