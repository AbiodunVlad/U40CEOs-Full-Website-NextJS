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

const LazyHomePage = dynamic(() => import("../homePage/page"), {
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

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const login = async () => {
  // if (isClient) {
  // }
  // };

  // const loginWithGoogle = async () => {
  // if (isClient) {
  // }
  // };

  // if (!isClient) {
  //   return null;
  // }

  const login = async () => {
    setLoading(true);
    setError("");

    try {
      await loginUser({
        fullName,
        email,
        password,
      });

      setRedirecting(true);

      setTimeout(() => {
        router.push("/homePage");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-around min-h-screen">
      {redirecting && <Loading />}

      <div className="bg-slate-100 w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-2 px-5 md:px-20">
        <Image
          className="mb-5"
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />

        <h2 className="font-bold text-black text-3xl mb-3">Sign in</h2>

        <p className="text-gray-500 text-xs mb-7">
          Please login to continue to your account.
        </p>

        {error && <p className="text-red-500 mb-5">{error}</p>}

        <input
          className="text-black w-full  p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Email"
          id="email"
          type="email"
          // value={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="w-full  relative">
          <input
            className="text-black w-full p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            // value={user.password}
            onChange={(e) => setPassword(e.target.value)}
          />
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

        <div className="flex self-start items-center mb-5">
          <input
            id="keep-signed-in"
            type="checkbox"
            className="mr-2 "
            checked={user.keepSignedIn}
            onChange={(e) =>
              setUser({ ...user, keepSignedIn: e.target.checked })
            }
          />
          <label htmlFor="keep-signed-in" className="text-black text-xs">
            Keep me signed in
          </label>
        </div>

        <div className="flex flex-row items-start">
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
          <p className="mb-5 text-gray-500 text-xs">Or</p>
          <div className="border border-gray-400 md:mx-10 mx-3 w-28 h-0.5 bg-gray-300"></div>
        </div>

        {/* <button
          onClick={loginWithGoogle}
          className="text-black w-full md:w-3/4 p-2 border bg-white rounded-xl mb-10"
        >
          Login with Google
        </button> */}

        <p className="text-gray-500 text-xs">
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
