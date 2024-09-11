"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideImage from "@/components/SideImage";
import { loginUser } from "../../../pages/api/auth";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LazyHomePage = dynamic(() => import("../home/page"), {
  loading: () => <Loading />,
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [user, setUser] = useState({
    keepSignedIn: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async () => {
    setLoading(true);
    setError("");

    try {
      const loginResponse = await loginUser({
        fullName,
        email,
        password,
      });

      localStorage.setItem("isAuthenticated", "true");

      setRedirecting(true);

      setTimeout(() => {
        router.push("/home");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    // window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-around min-h-screen">
      {redirecting && <Loading />}

      <div className="bg-slate-100 w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-2 px-5 lg:px-20">
        <Image
          className="mb-5"
          src="/images/logo.svg"
          alt="logo"
          width={200}
          height={100}
        />

        <h2 className="font-bold text-black text-3xl sm:text-5xl mb-3">
          Sign in
        </h2>

        <p className="text-gray-500 text-md text-center sm:text-xl mb-7">
          Please login to continue to your account.
        </p>

        {error && <p className="text-red-500 mb-5">{error}</p>}

        <div className="relative mb-5 w-full">
          <input
            className="text-black w-full p-2 border border-red-300 rounded-lg focus:outline-none"
            placeholder=" "
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="email"
            className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left ${
              email ? "-translate-y-7 scale-75" : ""
            }`}
          >
            Email
          </label>
        </div>

        <div className="relative mb-5 w-full">
          <input
            className="text-black w-full p-2 border border-red-300 rounded-lg focus:outline-none"
            placeholder=" "
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left
      ${password ? "-translate-y-7 scale-75" : ""}`}
          >
            Password
          </label>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-3 right-5"
            onClick={togglePasswordVisibility}
          />
        </div>

        <button
          onClick={login}
          className="w-full  p-2 border bg-purple-700 rounded-full mb-5 text-white font-bold uppercase"
        >
          {loading ? "Signing you in..." : "Sign in"}
        </button>

        <div className="flex lg:flex-row flex-col md:justify-center justify-between items-center w-full mb-7">
          <div className="flex lg:justify-start justify-center items-center lg:mb-0 lg:w-1/2 w-full mb-5">
            <input
              id="keep-signed-in"
              type="checkbox"
              className="mr-2 "
              checked={user.keepSignedIn}
              onChange={(e) =>
                setUser({ ...user, keepSignedIn: e.target.checked })
              }
            />
            <label
              htmlFor="keep-signed-in"
              className="text-black text-md sm:text-xl"
            >
              Keep me signed in
            </label>
          </div>

          <div className="w-full lg:w-1/2 relative flex flex-row justify-center bg-white border rounded-xl">
            <button
              onClick={loginWithGoogle}
              className="text-black text-md sm:text-xl w-full p-2  mb-0"
            >
              Login with Google
            </button>

            <FontAwesomeIcon
              icon={faGoogle}
              className="text-red-400 absolute top-3.5 right-5"
              size="sm"
            />
          </div>
        </div>

        <div className="flex flex-row items-start">
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
          <p className="mb-5 text-gray-500 text-xs">Or</p>
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
        </div>

        <p className="text-gray-500 text-md sm:text-xl">
          Need an account? {""}
          <Link href="/signup" className="text-blue-600 font-bold">
            Create one
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
