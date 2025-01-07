"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideImage from "@/components/SideImage";
import { getUserProfile, loginUser } from "../../../pages/api/auth";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { setAccessToken } from "@/store/authSlice";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    keepSignedIn: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async () => {
    setLoading(true);
    setError("");

    // mitevo9094@myweblaw.com
    // qwertyui

    try {
      const loginResponse = await loginUser({
        email,
        password,
      });

      console.log("login response", loginResponse);
      dispatch(setAccessToken(loginResponse?.data?.accessToken));

      if (loginResponse?.status === true) {
        const getProfileResponse = await getUserProfile();
        console.log("get profile response", getProfileResponse?.data);
      }

      localStorage.setItem("isAuthenticated", "true");

      const previousPage = localStorage.getItem("previousPage") || "/home";

      setRedirecting(true);

      setTimeout(() => {
        router.push(previousPage);
        localStorage.removeItem("previousPage");
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

      <div className="bg-slate-100 w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-2 px-10 lg:px-28">
        <Link href="/home">
          <Image
            className="mb-5"
            src="/images/logo.svg"
            alt="logo"
            width={200}
            height={100}
          />
        </Link>

        <Link href="/home">
          <h2 className="font-bold text-black text-3xl sm:text-5xl mb-3">
            Sign in
          </h2>
        </Link>

        <p className="text-gray-500 text-md text-center sm:text-xl mb-7">
          Please login to continue to your account.
        </p>

        {error && <p className="text-red-500 mb-5">{error}</p>}

        <div className="relative mb-5 w-full">
          <input
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
            placeholder=" "
            id="email"
            type="email"
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

        <div className="relative mb-5 w-full">
          <input
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
            placeholder=" "
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left
      ${password ? "-translate-y-9 scale-75" : ""}`}
          >
            Password
          </label>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-6 right-5"
            onClick={togglePasswordVisibility}
          />
        </div>

        <button
          onClick={login}
          className="w-full py-4 px-2 border bg-purple-700 rounded-full mb-5 text-white font-bold uppercase"
        >
          {loading ? "Signing you in..." : "Sign in"}
        </button>

        <div className="flex lg:flex-row flex-col justify-between items-center w-full mb-7">
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

          <div className="w-1/2 lg:w-1/3 relative flex flex-row items-center justify-center bg-white border rounded-xl p-1">
            <button
              onClick={loginWithGoogle}
              className="text-black text-start text-xs lg:text-xs w-full sm:w-full p-2  mb-0"
            >
              Login with Google
            </button>

            <FontAwesomeIcon
              icon={faGoogle}
              className="text-red-400 absolute top-3 lg:top-3 right-2 sm:right-3"
              size="sm"
            />
          </div>
        </div>

        <div className="flex flex-row items-center mb-10">
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
          <p className="text-gray-500 text-xs">or</p>
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
        </div>

        <p className="text-gray-500 text-xl sm:text-2xl">
          Need an account? {""}
          <Link href="/signup" className="text-blue-600 font-bold">
            Create one
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
    </div>
  );
}
