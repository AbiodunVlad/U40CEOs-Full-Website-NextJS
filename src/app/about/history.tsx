import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function History() {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 flex flex-col justify-center items-center">
      <p className="text-sm text-purple-600 mb-3 sm:mb-4 md:mb-5">OUR STORY</p>

      <h2 className="text-black text-3xl lg:text-4xl text-center font-extrabold mb-1 uppercase">
        FROM DREAMS TO DOERS IN AFRICA{" "}
      </h2>

      <Image
        src="/icons/journeySign.svg"
        alt=""
        width={150}
        height={150}
        className="mb-20"
      />

      <p className="text-base sm:text-2xl text-black leading-5 mb-40 lg:mb-40 md:mb-20 text-start sm:text-left">
        Our journey began with a heartfelt conversation between two young CEOs
        in Lagos, sharing their successes and struggles. Their experiences and
        valuable insights inspired them to create a platform for young African
        entrepreneurs. From a TV series to a thriving community, Under 40 CEOs
        now offers mentorship, resources, and support to help the next
        generation of business leaders achieve their dreams.
      </p>

      <div className="flex flex-col md:flex-row gap-10 sm:gap-20 md:gap-20 items-center justify-between mb-20 md:mb-20 lg:mb-48 w-full md:px-20 px-0">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center mb-40 md:mb-10 lg:mb-0">
          <div className="bg-purple-600 w-60 h-60 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-full absolute"></div>
          <div className="bg-blue-500 flex items-center justify-center w-60 h-60 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-full absolute translate-y-5">
            <Image src="/images/storyImg.svg" alt="" width={600} height={600} />
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex flex-col text-start md:text-left">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="absolute text-pink-700 text-9xl opacity-20 -translate-y-12"
          />

          <p className="relative z-10 w-full text-black text-3xl lg:text-4xl font-extrabold uppercase">
            We Provide All the Tools Young Business Leaders Need to Succeed and
            Thrive in Africa.
          </p>
        </div>
      </div>

      <p className="text-base sm:text-2xl text-black leading-5 text-start sm:text-left mb-5">
        At Under 40 CEOs, we believe that a business is like a building: it must
        be constructed on a solid foundation to stand the test of time. Just as
        poor foundations lead to collapse, businesses built without the right
        support face risks of failure. That’s why we are dedicated to
        eliminating these risks through our comprehensive suite of resources and
        mentorship programs.
      </p>

      <p className="text-base sm:text-2xl text-black leading-5 text-start sm:text-left mb-5">
        We provide young entrepreneurs with the tools, guidance, and community
        necessary to transform their ventures into successful, long-lasting
        enterprises. Our dynamic approach includes networking opportunities,
        live events, a compelling television series, insightful summits, and our
        specialized institute.
      </p>

      <p className="text-base sm:text-2xl text-black leading-5 text-start sm:text-left">
        Through these initiatives, we have supported hundreds of businesses at
        various growth stages, helping them navigate challenges and seize
        opportunities. Join us and build a strong foundation for your business’s
        future success.
      </p>
    </div>
  );
}
