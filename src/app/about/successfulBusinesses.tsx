import React from "react";

export default function SuccessfulBusinesses() {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-blue-400 px-20 pt-10 pb-10 flex flex-col items-center justify-center">
      <h2 className="text-black text-3xl lg:text-4xl font-extrabold uppercase mb-4 text-center">
        Looking To Join The League Of Successful{" "}
        <br className="sm:flex hidden" /> Businesses In Africa?
      </h2>
      <p className="text-sm sm:text-lg text-black text-center mb-10 uppercase">
        Speak to one of our experts.{" "}
      </p>

      <button className="bg-purple-600 px-7 py-4 rounded-full text-white font-bold uppercase">
        Book a free consultation{" "}
      </button>
    </div>
  );
}
