import React from "react";

export default function BecomeAMember() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-blue-400 px-20 py-10">
      <h5 className="text-white text-3xl lg:text-4xl text-center font-extrabold mb-5 uppercase">
        Looking To Join The League Of Successful <br /> Businesses In Africa?{" "}
      </h5>

      <p className="text-black text-sm sm:text-lg text-center uppercase mb-5">
        Speak to one of our experts.{" "}
      </p>

      <button className="text-white text-base font-bold bg-pink-600 rounded-full py-4 px-10 uppercase">
        Book a free consultation{" "}
      </button>
    </div>
  );
}
