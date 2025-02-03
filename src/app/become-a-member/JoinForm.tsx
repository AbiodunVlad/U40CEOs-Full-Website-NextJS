"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function JoinForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="sm:py-20 py-10 sm:px-16 px-7">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto bg-gradient-to-br from-slate-950 via-slate-800 to-purple-800 rounded-3xl py-16">
        <h1 className="text-white text-3xl lg:text-4xl text-center font-extrabold uppercase mb-10">
          Join the Community Today
        </h1>

        <p className="text-white text-center">
          Achieve the status, success and prestige you desire
        </p>

        <form className="flex flex-col justify-between w-4/5">
          <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
            <div className="relative mb-0 w-full">
              <input
                className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
                placeholder=""
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label
                htmlFor="firstName"
                className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                  firstName ? "-translate-y-9 scale-75" : ""
                }`}
              >
                First Name
              </label>
            </div>

            <div className="relative mb-0 w-full xl:w-1/2">
              <input
                className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
                placeholder=""
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label
                htmlFor="email"
                className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                  email ? "-translate-y-9 scale-75" : ""
                }`}
              >
                Email
              </label>
            </div>
          </div>

          <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
            <div className="relative mb-0 w-full xl:w-1/2">
              <input
                className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
                placeholder=""
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label
                htmlFor="phone"
                className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                  phone ? "-translate-y-9 scale-75" : ""
                }`}
              >
                Phone Number
              </label>
            </div>

            <div className="relative mb-0 w-full xl:w-1/2">
              <input
                className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
                placeholder=""
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />

              <label
                htmlFor="country"
                className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                  country ? "-translate-y-9 scale-75" : ""
                }`}
              >
                Country
              </label>
            </div>
          </div>
          <Link href="/" className="w-full">
            <button
              className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full text-white font-bold uppercase"
              style={{ backgroundColor: "#C54ED8" }}
            >
              JOIN UNDER 40 CEOs NOW
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
