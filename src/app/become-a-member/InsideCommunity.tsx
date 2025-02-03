import Link from "next/link";
import React from "react";

export default function InsideCommunity() {
  return (
    <div className="bg-slate-100 flex flex-col items-center py-20 relative max-w-screen-2xl mx-auto w-full">
      <p className="text-pink-400 text-center text-sm font-semibold mb-5 md:mb-12">
        WHO WE ARE
      </p>

      <h6 className="font-extrabold text-black text-center text-2xl mb-5">
        UNDER 40 CEOs
      </h6>

      <div className="flex flex-col w-4/5 justify-center">
        <div className="flex md:flex-row flex-col w-full gap-5 mb-5">
          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Community
            </p>
            <p className="text-sm">
              Connect with like-minded, ambitious CEOs and business leaders.
            </p>
          </div>

          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Networking
            </p>
            <p className="text-sm">
              Exclusive opportunities to connect with business leaders across
              Africa and meet our members.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-5 mb-5">
          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Mentorship
            </p>
            <p className="text-sm">
              Guidance from seasoned CEOs and business leaders.{" "}
            </p>
          </div>

          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Training
            </p>
            <p className="text-sm">
              Access to Under 40 CEOs Learning Hub courses.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-5 mb-5">
          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Funding Opportunities
            </p>
            <p className="text-sm">
              Participate in our investment readiness program and business pitch
              competitions.{" "}
            </p>
          </div>

          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Resources
            </p>
            <p className="text-sm">
              Access Over 100 eBooks, Live Sessions and tools.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-5 mb-5">
          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Grants and Competitions
            </p>
            <p className="text-sm">
              Pitch for grants and win recognition for your business.
            </p>
          </div>

          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Discounted Resources
            </p>
            <p className="text-sm">
              Including the annual Under 40 CEOs Book and Under 40 CEOs Forum{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-5 mb-5">
          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Periodic Business Reviews
            </p>
            <p className="text-sm">
              Periodic Business Reviews to keep your growth on track.{" "}
            </p>
          </div>

          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start xl:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Award & Recognition
            </p>
            <p className="text-sm">
              Award & Recognition to outstanding members.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-5 mb-5">
          <div className="bg-white shadow-xl flex flex-col pt-4 pb-7 px-7 items-start md:w-1/2 w-full">
            <p className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full mb-2">
              Events{" "}
            </p>
            <p className="text-sm">
              Free access to all Under 40 CEOs monthly events.{" "}
            </p>
          </div>
        </div>
      </div>

      <Link href="#register-section" className="w-4/5">
        <button
          className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase"
          // style={{ backgroundColor: "#C54ED8" }}
        >
          I want to be a Member{" "}
        </button>
      </Link>
    </div>
  );
}
