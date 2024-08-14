"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideImage from "@/components/SideImage";
import { signupUser } from "../../../pages/api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  // const validatePassword = (password: any) => {
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return passwordRegex.test(password);
  // };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signup = async () => {
    setLoading(true);
    setError("");

    // if (password.length === 0) {
    //   setError("Password is required");
    //   setLoading(false);

    //   return;
    // }

    // if (!validatePassword(password)) {
    //   setError(
    //     "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
    //   );
    //   setLoading(false);
    //   return;
    // }

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
      await signupUser({
        fullName,
        email,
        password,
        confirmPassword,
      });
      router.push("/login");
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

  const [user, setUser] = useState({
    keepSignedIn: false,
  });

  // const [user, setUser] = useState({
  // username: "",
  // email: "",
  // password: "",
  // keepSignedIn: false,
  // });

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const signup = async () => {
  // if (isClient) {
  // }
  // };

  // const signupWithGoogle = async () => {
  // if (isClient) {
  // }
  // };

  // if (!isClient) {
  //   return null;
  // }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around min-h-screen">
      <div className="bg-slate-100 w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-2 px-5 md:px-20">
        <Image
          className="mb-5"
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />

        <h2 className="font-bold text-black text-3xl mb-3">Sign up</h2>

        <p className="text-gray-500 text-xs mb-7">
          Sign up to enjoy full access to Under 40 CEOs resources
        </p>

        {/* <input
          className="text-black w-full md:w-3/4 p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Username"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        /> */}

        {error && <p className="text-red-500 mb-5">{error}</p>}

        <input
          className="text-black w-full   p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Full Name"
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          className="text-black w-full  p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="w-full  relative">
          <input
            className="text-black w-full p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-3 right-5"
            onClick={togglePasswordVisibility}
          />
        </div>

        <div className="w-full relative">
          <input
            className="text-black w-full p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-3 right-5"
            onClick={togglePasswordVisibility}
          />
        </div>

        <button
          onClick={signup}
          className="w-full p-2 border bg-purple-700 rounded-full mb-5 text-white font-bold uppercase shadow-lg"
          disabled={loading}
        >
          {loading ? "Signing you up..." : "Sign up"}
        </button>

        {/* <div className="self-start flex items-center mb-5">
          <input
            id="keep-signed-in"
            type="checkbox"
            className="mr-2 "
            checked={user.keepSignedIn}
            onChange={(e) =>
              setUser({ ...user, keepSignedIn: e.target.checked })
            }
          />
          <label htmlFor="keep-signed-in" className="text-xs text-black">
            Keep me signed in
          </label>
        </div> */}

        <div className="flex flex-row items-start">
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
          <p className="mb-5 text-gray-500 text-xs">Or</p>
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
        </div>

        {/* <button
          onClick={signupWithGoogle}
          className="text-black w-full md:w-3/4 p-2 border bg-white rounded-xl mb-10"
        >
          {" "}
          Signup with Google
        </button> */}

        <p className="text-gray-500 text-xs">
          Do you have an account already? {""}
          <Link href="/login" className="text-blue-600 font-bold">
            Log in
          </Link>
        </p>
      </div>

      <div
        className="w-full md:w-1/2 hidden md:flex flex-col items-center justify-center min-h-screen py-1"
        style={{
          background:
            "linear-gradient(to left, #7F7FFF 0%, #E6E6FA 50%, #CDB1DB 50%, #E6E6FA 100%)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SideImage />
      </div>
    </div>
  );
}
