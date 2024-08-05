import React from "react";

export default function BecomeAMember() {
  return (
    <div className="flex flex-col items-center bg-blue-400 px-20 py-10">
      <h5 className="text-black text-lg text-center font-bold mb-5 uppercase">
        Looking To Join The League Of Successful <br /> Businesses In Africa?{" "}
      </h5>

      <p className="text-black text-xs text-center uppercase mb-5">
        Book a free consultation with us today
      </p>

      <button className="text-white text-sm font-bold bg-purple-600 rounded-full py-3 px-5 uppercase">
        become a member
      </button>
    </div>
  );
}

{
  /* <div className="flex flex-col items-center bg-gradient-to-br from-purple-600 to-blue-400 px-5 py-10 md:px-20">
<h5 className="text-black text-lg text-center font-bold mb-5 uppercase">
  Looking To Join The League Of Successful <br /> Businesses In Africa?
</h5>

<p className="text-black text-xs uppercase mb-5 text-center">
  Book a free consultation with us today
</p>

<button className="text-white text-sm font-bold bg-purple-600 rounded-full py-3 px-5">
  BECOME A MEMBER
</button>
</div> */
}
