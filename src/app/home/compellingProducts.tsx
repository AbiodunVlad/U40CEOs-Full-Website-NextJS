"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompellingProducts() {
  return (
    <div className="flex flex-col justify-center px-2 pt-10 pb-10 md:pt-20 md:pb-20 bg-slate-100 relative">
      <h1 className="text-center text-black font-extrabold text-3xl lg:text-4xl mb-10 md:mb-20">
        UNLOCK YOUR ADVANTAGE WITH
        <br /> OUR EXCLUSIVE RESOURCES
      </h1>

      <div className="flex flex-col items-center gap-5 mb-10 md:mb-20">
        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-4/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/mediaFeature.svg"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="w-2/3 py-3">
            <p className="font-bold text-black text-xl mb-2 md:mb-3">
              Media Feature
            </p>

            <p className="text-base sm:text-2xl text-black mb-4 md:mb-8">
              Get featured in our TV series, the annual book publication
              &quot;Under 40 CEOs - How We Made It In Africa&quot;, the
              “Entrepreneur-To-Watch” and our bespoke social media series. Share
              your success story and boost your brand visibility.
            </p>

            <Link href="/ScheduleACall">
              <button
                className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
                style={{ backgroundColor: "#9B05E2" }}
              >
                SCHEDULE A CALL
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-4/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/magazine.svg"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="w-2/3 py-3">
            <p className="font-bold text-black text-xl mb-2 md:mb-3">
              Magazine
            </p>

            <p className="text-base sm:text-2xl text-black  mb-4 md:mb-8">
              Get all the scoop from our magazines. Catch up on the latest news,
              exclusive interviews, and in-depth insights from Africa’s most
              successful CEOs and Under 40 CEOs initiatives.
            </p>

            <Link href="/resources">
              <button
                className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
                style={{ backgroundColor: "#9B05E2" }}
              >
                SUBSCRIBE NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-4/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/events.svg"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="w-2/3 py-3">
            <p className="font-bold text-black text-xl mb-2 md:mb-3">Events</p>

            <p className="text-base sm:text-2xl text-black  mb-4 md:mb-8">
              Experience our exclusive events, from the Under 40 CEOs Networking
              event and Under 40 CEOs Live, to the Under 40 CEOs Forum, Under 40
              CEOs Summit, U4C Fireside Chat, and more.
            </p>

            <Link href="/Events">
              <button
                className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
                style={{ backgroundColor: "#9B05E2" }}
              >
                BOOK YOUR SEAT
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-4/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/learningHub.svg"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="w-2/3 py-3">
            <p className="font-bold text-black text-xl mb-2 md:mb-3">
              Learning Hub
            </p>

            <p className="text-base sm:text-2xl text-black mb-4 md:mb-8">
              Bolster your entrepreneurial skills with the Under 40 CEOs
              Learning Hub. Explore our plethora of courses, training, and
              webinars designed to foster your growth and professional
              excellence.
            </p>

            <Link href="/LearningHub">
              <button
                className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold"
                style={{ backgroundColor: "#9B05E2" }}
              >
                ENROLL NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-full md:w-4/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/membership.svg"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="w-2/3 py-3">
            <p className="font-bold text-black text-xl mb-2 md:mb-3">
              Membership
            </p>

            <p className="text-base sm:text-2xl text-black mb-4 md:mb-8">
              We offer different membership tiers tailored to your business’
              growth phase. Whether you’re a student, just starting out, or a
              seasoned entrepreneur, we’ve got you covered.
            </p>

            <Link href="/LearningHub">
              <button
                className="py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-xs md:text-sm font-bold uppercase"
                style={{ backgroundColor: "#9B05E2" }}
              >
                Become a Member
              </button>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-center text-black font-extrabold text-3xl lg:text-4xl mb-10 md:mb-20">
        SUCCESS STORIES FROM OUR
        <br /> PLATINUM MEMBERS{" "}
      </h1>

      <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
        <div className="w-full md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
          <Image src="/images/adaora.svg" alt="" width={200} height={150} />

          <h6 className="font-extrabold text-black text-lg md:text-xl mb-1 uppercase">
            Adaora Mbelu{" "}
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            Founder of Lumination Global Network{" "}
          </p>

          <p className="text-base sm:text-2xl text-black text-start mb-4 md:mb-8 w-full">
            Being a platinum member of Under 40 CEOs has opened doors to
            unparalleled opportunities for me. The high-level insights and
            connections have been key to my professional growth.
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
          <Image src="/images/omobola.svg" alt="" width={200} height={150} />

          <h6 className="font-extrabold text-black text-lg md:text-xl mb-1 uppercase">
            Debola Wiiliams{" "}
          </h6>

          <p className="text-pink-400 text-xs md:text-sm font-semibold mb-2">
            Group CEO of RED | For Africa{" "}
          </p>

          <p className="text-base sm:text-2xl text-black text-start mb-4 md:mb-8 w-full">
            As a CEO, Under 40 CEOs has been a game-changer. Its platinum
            membership&apos;s remarkable resources have greatly enhanced my
            leadership and business strategies.
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
          <Image src="/images/aisha.svg" alt="" width={200} height={150} />

          <h6 className="font-extrabold text-black text-lg md:text-xl mb-1">
            Aisha Pandor{" "}
          </h6>

          <p className="text-pink-400 text-sm md:text-sm font-semibold mb-2">
            Co-founder of SweepSouth{" "}
          </p>

          <p className="text-base sm:text-2xl text-black text-start mb-4 md:mb-8 w-full">
            Under 40 CEOs provided me with invaluable connections and insights.
            As a platinum member, I’ve leveraged these resources to expand my
            influence and achieve new milestones.
          </p>
        </div>
      </div>
    </div>
  );
}
