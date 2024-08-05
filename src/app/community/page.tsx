import Navbar from "@/components/Navbar";
import React from "react";

export default function Community() {
  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex flex-col py-20 px-20">
        <h1 className="text-black text-center text-3xl font-extrabold mb-2 leading-10">
          WELCOME TO OUR VIBRANT AND <br /> ENGAGING COMMUNITY FORUM!
        </h1>
        <p className="text-gray-500 text-center text-xs">
          Create a dynamic space where people from all walks of life can come{" "}
          <br /> together to share knowledge, seek advice, engage in lively
          discussions,
          <br /> and build meaningful connections.
        </p>
      </div>
    </div>
  );
}
