"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { createUser } from "../../../pages/api/auth";
import Paystack from "@paystack/inline-js";
import {
  verifyOnboardingTransaction,
  verifyTransaction,
} from "../../../pages/api/pay";

export default function LandingRegisterNaira() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const paymentLink = false;
  const [transactionRef, setTransactionRef] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const popup = new Paystack();

  const verifyPayment = async () => {
    const verifyResult = await verifyOnboardingTransaction(transactionRef);
    console.log("transactionResult", verifyResult);

    // Add logic to navigate to next screen here...
  };

  const makePayment = async () => {
    setLoading(true);
    setError("");

    try {
      popup.newTransaction({
        key: "pk_test_f54e9851e556013c11a4f3b69d21e50d6730ef93",
        email: email,
        amount: 150000,
        onSuccess: (transaction) => {
          console.log("transaction success", transaction);
          console.log(transaction);
          setTransactionRef(transaction.reference);
          verifyPayment();
        },
        onLoad: (response) => {
          console.log("transaction loading");

          console.log("onLoad: ", response);
        },
        onCancel: () => {
          console.log("transaction cancelled");

          console.log("onCancel");
        },
        onError: (error) => {
          console.log("transaction error");

          console.log("Error: ", error.message);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await createUser({
        firstName,
        lastName,
        email,
        country,
        phoneNumber,
        paymentLink,
      });
      console.log("This is the response:", response);

      if (response.status === true) {
        console.log("create user is successful");
      } else {
        console.log("create user was not successful");

        // const errorData = await response.json();
        setError("Create User failed. Please try again.");
        console.log("This is the errorData");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong!!!");
      }
    } finally {
      setLoading(false);
    }
  };

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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label
              htmlFor="phone"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                phoneNumber ? "-translate-y-9 scale-75" : ""
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

        {/* <Link href="/" className="w-full"> */}
        <button
          className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full text-white font-bold uppercase"
          style={{ backgroundColor: "#C54ED8" }}
          onClick={makePayment}
        >
          JOIN UNDER 40 CEOs NOW
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
