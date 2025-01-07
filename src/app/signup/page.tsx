"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideImage from "@/components/SideImage";
import { signupUser, verifySignUpOtp } from "../../../pages/api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEyeLowVision, faEye } from "@fortawesome/free-solid-svg-icons";
import OTP from "@/components/OTP";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOTPPopup, setShowOTPPopup] = useState(false);

  const router = useRouter();

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signup = async () => {
    setLoading(true);
    setError("");

    if (!validatePassword(password)) {
      setError("Password should be at least 6 characters long.");
      setLoading(false);
      return;
    }

    if (password != confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await signupUser({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      console.log("This is the response:", response);

      if (response.status === true) {
        console.log("Popup on the way.");
        setShowOTPPopup(true);
      } else {
        console.log("Response not okay");

        // const errorData = await response.json();
        setError("Signup failed. Please try again.");
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

  const handleOTPVerify = async (otp: string) => {
    console.log("OTP Verified:", otp);

    try {
      const response = await verifySignUpOtp(otp, email);
      console.log("This is the response:", response);

      if (response.status === true) {
        setShowOTPPopup(false);
        router.push("/login");

        // Toast message required here

        console.log("Popup on the way.");
        setShowOTPPopup(true);
      } else {
        console.log("Response not okay");

        // const errorData = await response.json();
        setError("Signup failed. Please try again.");
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

  const signupWithGoogle = async () => {
    // window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around min-h-screen">
      <div className="bg-slate-100 w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-2 px-10 lg:px-28">
        <Link href="/home">
          <Image
            className="mb-3"
            src="/images/logo.svg"
            alt="logo"
            width={200}
            height={100}
          />
        </Link>

        <Link href="/home">
          <h2 className="font-bold text-black text-3xl sm:text-5xl mb-3">
            Sign up
          </h2>
        </Link>

        <p className="text-gray-500 text-md sm:text-xl text-center mb-5">
          Sign up to enjoy full access to Under 40 CEOs resources
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="relative mb-5 w-full">
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

        <div className="relative mb-5 w-full">
          <input
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
            placeholder=""
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label
            htmlFor="lastName"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
              lastName ? "-translate-y-9 scale-75" : ""
            }`}
          >
            Last Name
          </label>
        </div>

        <div className="relative mb-5 w-full">
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

        <div className="w-full mb-5 relative">
          <input
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg  focus:outline-none"
            placeholder=""
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-5 right-5"
            onClick={togglePasswordVisibility}
          />

          <label
            htmlFor="password"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
              password ? "-translate-y-9 scale-75" : ""
            }`}
          >
            Password
          </label>
        </div>

        <div className="w-full mb-5 relative">
          <input
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
            placeholder=""
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-5 right-5"
            onClick={togglePasswordVisibility}
          />

          <label
            htmlFor="confirmPassword"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
              confirmPassword ? "-translate-y-9 scale-75" : ""
            }`}
          >
            Confirm Password
          </label>
        </div>

        <button
          onClick={signup}
          className="w-full py-4 px-2 border bg-purple-700 rounded-full mb-7 text-white font-bold uppercase shadow-lg"
          disabled={loading}
        >
          {loading ? "Signing you up..." : "Sign up"}
        </button>

        <div className="flex flex-row items-start mb-5">
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
          <p className="text-gray-500 text-xs">or</p>
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
        </div>

        <div className="w-full lg:w-1/2 relative flex flex-row justify-center bg-white border rounded-xl mb-5">
          <button
            onClick={signupWithGoogle}
            className="text-black w-full md:w-3/4 p-2"
          >
            {" "}
            Signup with Google
          </button>

          <FontAwesomeIcon
            icon={faGoogle}
            className="text-red-400 absolute top-3.5 right-5"
            size="sm"
          />
        </div>

        <p className="text-gray-500 text-md sm:text-xl">
          Do you have an account already? {""}
          <Link href="/login" className="text-blue-600 font-bold">
            Log in
          </Link>
        </p>
      </div>

      <div
        className="w-full md:w-1/2 hidden md:flex flex-col items-center justify-center min-h-screen py-1"
        // style={{
        //   background:
        //     "linear-gradient(to left, #7F7FFF 0%, #E6E6FA 50%, #CDB1DB 50%, #E6E6FA 100%)",
        //   backgroundSize: "100% 100%",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <SideImage />
      </div>

      {showOTPPopup && (
        <OTP
          onVerify={handleOTPVerify}
          onClose={() => setShowOTPPopup(false)}
        />
      )}
    </div>
  );
}
