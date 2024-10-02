import Link from "next/link";
import React from "react";

export default function BecomeAMember() {
  return (
    <div className="flex flex-col items-center bg-blue-200 px-20 py-10">
      <h5 className="text-black text-3xl lg:text-4xl text-center font-extrabold mb-5 uppercase">
        Looking To Join The League Of Successful <br /> Businesses In Africa?{" "}
      </h5>

      <p className="text-black text-base sm:text-2xl text-center uppercase mb-5">
        Speak to one of our experts.{" "}
      </p>

      <Link href="/ScheduleACall">
        <button className="text-white text-base font-bold bg-pink-600 rounded-full py-4 px-10 uppercase">
          Book a free consultation{" "}
        </button>
      </Link>
    </div>
  );
}
