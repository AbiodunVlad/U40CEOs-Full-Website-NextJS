import Image from "next/image";
import React from "react";

export default function OurWorks() {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 py-10 sm:py-16 md:py-20">
      <p className="text-purple-600 text-sm text-center mb-5">OUR WORKS</p>
      <h6 className="text-black text-3xl lg:text-4xl text-center font-extrabold mb-10 sm:mb-16 md:mb-20">
        COLLABORATIONS
      </h6>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-10 sm:mb-16 md:mb-20 h-96">
        <div className="w-full md:w-2/5">
          <h6 className="text-base sm:text-2xl text-black font-bold mb-3">
            Drive Your Ambition
          </h6>
          <div className="flex flex-row gap-3 mb-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/tinyMitsu.svg" alt="" width={20} height={20} />
            <Image src="/icons/tinySam.svg" alt="" width={40} height={20} />
          </div>
          <p className="text-base sm:text-2xl text-black leading-5">
            This entertaining series showcases members of Under 40 CEOs having a
            ride with influential industry leaders, while gaining invaluable
            insights on entrepreneurship and Africa’s social, economic, and
            political landscape. Featured guests include Audi Maikori, Noble
            Igwe, Bola Ray, Shukri Toefy, Ade Adegoke, Abiola Adekoya, and other
            inspiring minds.
          </p>
        </div>

        <div className="w-full h-full md:w-3/5">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-full"
            style={{ minHeight: "100%" }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mb-10 sm:mb-16 md:mb-20 h-96">
        <div className="w-full md:w-3/5 h-full">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-full"
          />
        </div>

        <div className="w-full md:w-2/5">
          <h6 className="text-base sm:text-2xl text-black font-bold mb-3">
            They Said I Couldn’t
          </h6>
          <div className="flex flex-row gap-3 mb-3">
            <p className="text-xs text-black">with</p>
            <Image
              src="/icons/tinySunlight.svg"
              alt=""
              width={40}
              height={20}
            />
          </div>

          <p className="text-base sm:text-2xl text-black leading-5">
            In the heart of Africa, where dreams meet reality, Under 40 CEOs
            proudly presents the &quot;They Said I Couldn&apos;t&quot; series in
            collaboration with Sunlight. Here, successful individuals share
            their stories of courage, resilience, and triumph; achieving
            entrepreneurial feats against all odds.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center h-96">
        <div className="w-full md:w-2/5">
          <h6 className="text-base sm:text-2xl text-black font-bold mb-3">
            UNDER 40 CEOs Care
          </h6>
          <div className="flex flex-row gap-3 mb-3">
            <p className="text-xs text-black">with</p>
            <Image src="/icons/tinyARM.svg" alt="" width={30} height={20} />
          </div>

          <p className="text-base sm:text-2xl text-black leading-5">
            Under 40 CEOs Care highlights impactful initiatives by CEOs across
            Africa in supporting their communities and employees. Through their
            thoughtful actions and dedication, the featured CEOs exemplify
            strong leadership and compassion.
          </p>
        </div>

        <div className="w-full md:w-3/5 h-full">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
