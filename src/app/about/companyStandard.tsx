import Stats from "@/components/stats";
import Image from "next/image";
import React from "react";

export default function CompanyStandard() {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-20 pb-16 sm:pb-24 md:pb-32 justify-center">
      <div className="border-purple-600 border-4 border-solid bg-white p-6 sm:p-12 md:p-10 mb-10 sm:mb-16 md:mb-20">
        <p className="text-sm text-purple-600 mb-3 sm:mb-4 md:mb-5">
          FOUNDER’S MESSAGE
        </p>
        <h6 className="text-black text-3xl lg:text-4xl font-extrabold mb-5 sm:mb-7 md:mb-10">
          FOUNDER’S MESSAGE{" "}
        </h6>

        <div className="flex flex-col lg:flex-row gap-5 h-screen">
          <div className="w-full h-full lg:w-1/2 mb-5 md:mb-0">
            <p className="w-full text-black text-sm sm:text-lg leading-5 mb-3">
              Did you know that a staggering 80% of businesses in Africa don’t
              survive past their first five years, and 54% of startups face
              failure? These numbers are stark, but they highlight the critical
              challenges we’re here to overcome.
            </p>

            <p className="w-full text-black text-sm sm:text-lg leading-5 mb-3">
              At Under 40 CEOs, our mission is to change this narrative. We
              understand the obstacles you face as a young entrepreneur, and
              we’re here to equip you with the tools and support you need to
              succeed. Our community of experienced business leaders and
              extensive resources are designed to boost your success rate by
              42%.
            </p>

            <p className="w-full text-black text-sm sm:text-lg leading-5 mb-3">
              Whether you’re a startup founder grappling with doubts or an
              ambitious CEO eager to scale your venture, you’re not alone. We’ve
              walked this path ourselves and are committed to guiding you
              through both triumphs and setbacks.
            </p>

            <p className="w-full text-black text-sm sm:text-lg leading-5">
              I’m Familusi Akin Babajide, but you can call me “Fab”. Together,
              let’s navigate this journey and build a future where your business
              can truly succeed in Africa. Join us as we share invaluable
              insights, practical strategies, and a network of mentors to help
              you thrive.
            </p>
          </div>

          <div className="flex w-full lg:w-1/2 h-full md:mb-0 mb-5">
            {/* <NextVideo src={u40ceos} /> */}
            <iframe
              src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
              className="w-full h-fit"
              style={{ minHeight: "100%" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Stats />
      </div>

      <h2 className="text-black text-3xl lg:text-4xl text-center font-extrabold mb-40 md:mb-52 lg:mb-20 uppercase">
        OUR VISION AND MISSION
      </h2>

      <div className="w-full flex flex-col lg:flex-row gap-10 sm:gap-20 md:gap-60 items-center">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center mb-40 md:mb-10 lg:mb-0">
          <Image src="/images/salesGIF.svg" alt="" width={700} height={700} />
          {/* <div className="bg-gray-500 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full absolute"></div>
          <div className="bg-transparent border-purple-600 border-2 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full absolute flex items-center justify-center transform rotate-0 translate-y-3 translate-x-3">
            <Image src="/images/logo.svg" alt="" width={200} height={200} />
          </div> */}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-5 sm:mb-7 md:mb-10">
            <p className="text-2xl text-purple-600 font-bold">Vision</p>
            <p className="text-sm sm:text-lg text-black leading-5">
              To ignite a revolution of entrepreneurial excellence across Africa
              by championing youth entrepreneurship, and creating a dynamic
              community of visionary leaders who drive innovation, transform
              their communities, and succeed in the global business landscape.
            </p>
          </div>

          <div>
            <p className="text-2xl text-purple-600 font-bold">Mission</p>
            <p className="text-sm sm:text-lg text-black leading-5">
              To inspire success stories through our media and provide
              mentorship and resources while building a thriving community of
              young business leaders equipped to navigate challenges,
              collaborate, and achieve their entrepreneurial goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
