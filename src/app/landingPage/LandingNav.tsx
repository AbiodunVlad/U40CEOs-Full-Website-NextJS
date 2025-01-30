"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(!!authStatus);

    const storedProfileImage = localStorage.getItem("profileImage");
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path: any) => (pathname === path ? "text-purple-500" : "");

  const logout = async () => {
    try {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("profileImage");
      setIsAuthenticated(false);
      setDropdownOpen(false);
      // sessionStorage.removeItem("authToken");
      // router.push("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const profile = () => {
    router.push("/userProfile");
  };

  return (
    <div className="bg-white shadow-lg fixed w-full z-50">
      <div className=" flex flex-col xl:flex-row items-center  px-4 py-2 xl:px-20 lg:py-4  max-w-screen-2xl mx-auto">
        <div className="flex justify-between w-full xl:w-1/5">
          <Link href="/home">
            {" "}
            <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
          </Link>

          <div className="xl:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon
              className="text-black"
              icon={menuOpen ? faTimes : faBars}
              size="lg"
            />
          </div>
        </div>

        <ul
          className={`text-black flex flex-col xl:flex-row items-center justify-between w-full xl:w-4/5 transition-all duration-300 ${
            menuOpen ? "block" : "hidden xl:flex"
          }`}
        >
          <Link href="/home">
            {" "}
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/home"
              )}`}
            >
              Home
            </li>
          </Link>

          <Link href="/home">
            {" "}
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/"
              )}`}
            >
              Why Join Us
            </li>
          </Link>

          <Link href="/home">
            {" "}
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/"
              )}`}
            >
              Who Is This For
            </li>
          </Link>

          <Link href="/successStories">
            {" "}
            <li
              className={`font-bold text-xs text-center mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/successStories"
              )}`}
            >
              Success Stories
            </li>
          </Link>

          <Link href="/membership">
            <button className="font-bold w-full text-xxs text-center px-5 py-3 mb-4 xl:mb-0 xl:mr-5 bg-purple-600 rounded-full text-white">
              JOIN OUR COMMUNITY
            </button>
          </Link>

          {/* {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 font-medium text-xxs text-center px-6 py-3 border border-pink-400 rounded-full text-pink-400"
              >
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="User Profile"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    // width={30}
                    // height={30}
                    className="rounded-full"
                  />
                ) : (
                  <FontAwesomeIcon icon={faUser} size="lg" />
                )}
              </button>

              {dropdownOpen && (
                <div
                  className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
                  style={{ top: "100%" }}
                >
                  <Link href="/userProfile">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </div>
                  </Link>
                  <div
                    onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Signout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="font-medium text-xxs text-center px-6 py-3 border border-pink-400 rounded-full text-pink-400">
                Login
              </button>
            </Link>
          )} */}
        </ul>
      </div>
    </div>
  );
}
