"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function LandingRegisterNaira() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="flex flex-col bg-slate-100 items-center py-5 mt-10 xl:mt-20 relative max-w-screen-2xl mx-auto w-4/5 border border-solid border-pink-500 rounded-md">
      {/* <div className="flex sm:flex-row flex-col  items-center justify-center sm:gap-20 gap-5 mb-14 sm:mb-20">
        <div className="flex flex-row justify-center sm:justify-normal items-center gap-1 sm:gap-5">
          {" "}
          <Image
            src="/icons/flatMembership.svg"
            className="w-1/10"
            alt=""
            width={30}
            height={10}
          />
          <p className="text-black text-2xl lg:text-2xl font-extrabold">
            Membership Fee
          </p>
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center sm:justify-normal ">
          <p className="text-pink-500 text-base lg:text-lg">A flat rate of</p>
          <p className="text-black text-2xl lg:text-3xl font-extrabold">
            ₦150,000/annum
          </p>
        </div>
      </div> */}

      <h1 className="text-center text-black font-extrabold text-2xl lg:text-3xl mb-5 uppercase">
        Register Here
      </h1>
      <p className="mb-10 w-11/12 text-center">
        Kindly double check email and phone number.
      </p>

      <form className="flex flex-col justify-between w-11/12">
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full xl:w-1/2">
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
  );
}
