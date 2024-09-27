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

          <p className="text-base sm:text-2xl text-black  mb-5 md:text-left">
            We are a game-changing platform designed to empower and inspire the
            next generation of business leaders across Africa. Our journey began
            with a simple yet profound conversation between two young CEOs in
            the heart of Lagos. Amidst the challenges and triumphs of their own
            ventures, they discovered that sharing their experiences could
            provide priceless insights for aspiring entrepreneurs facing similar
            hurdles.
          </p>

          <p className="text-base sm:text-2xl text-black  mb-5 md:text-left">
            From this crucial moment, Under 40 CEOs was born with a vision to
            create a space where young business minds could find guidance,
            support, and inspiration. Our mission is clear: to demystify the
            path to success and foster a thriving community of youth-owned and
            youth-founded businesses in Africa.
          </p>

          <p className="text-base sm:text-2xl text-black  mb-5 md:text-left">
            In simple words, we believe in the power of young entrepreneurs to
            drive change and create a prosperous future. Whether you&apos;re
            just starting or looking to scale, we have the right resources to
            support your journey. {" "}
          </p>

          <p className="text-base sm:text-2xl text-black  mb-5 md:text-left">
            Through our television series, mentorship programs with experienced
            industry leaders, workshops, exclusive events, and networking
            opportunities, we offer real stories, actionable insights, and a
            plethora of support to help you attain greatness.
          </p>
        </div>
      </div>
    </div>
  );
}
