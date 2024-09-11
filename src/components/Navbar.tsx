"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  const isActive = (path: any) => (pathname === path ? "text-purple-500" : "");

  const logout = async () => {
    try {
      localStorage.removeItem("isAuthenticated");
      // sessionStorage.removeItem("authToken");
      router.push("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row items-center justify-between px-4 py-2 lg:px-20 lg:py-4 shadow-lg overflow-hidden">
      <div className="flex justify-between w-full lg:w-auto">
        <Link href="/home">
          {" "}
          <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
        </Link>

        <div className="lg:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            className="text-black"
            icon={menuOpen ? faTimes : faBars}
            size="lg"
          />
        </div>
      </div>

      <ul
        className={`text-black flex flex-col lg:flex-row items-center w-full lg:w-auto transition-all duration-300 ${
          menuOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <Link href="/home">
          {" "}
          <li
            className={`text-xs font-bold mb-4 lg:mb-0 lg:mr-10 ${isActive(
              "/home"
            )}`}
          >
            Home
          </li>
        </Link>

        <Link href="/about">
          {" "}
          <li
            className={`font-bold text-xs text-center mb-4 lg:mb-0 lg:mr-10 ${isActive(
              "/about"
            )}`}
          >
            About
          </li>
        </Link>

        <Link href="/resources">
          <li
            className={`font-bold text-xs mb-4 lg:mb-0 lg:mr-10 ${isActive(
              "/resources"
            )}`}
          >
            Resources
          </li>
        </Link>

        <Link href="/successStories">
          {" "}
          <li
            className={`font-bold text-xs text-center mb-4 lg:mb-0 lg:mr-10 ${isActive(
              "/successStories"
            )}`}
          >
            Success Stories
          </li>
        </Link>

        <Link href="/blog">
          <li
            className={`font-bold text-xs mb-4 lg:mb-0 lg:mr-10 ${isActive(
              "/blog"
            )}`}
          >
            Blog
          </li>
        </Link>

        <Link href="/community">
          <button className="font-medium text-xxs text-center px-5 py-1 mb-4 lg:mb-0 lg:mr-5 bg-black rounded-full text-white">
            JOIN OUR <br /> COMMUNITY
          </button>
        </Link>

        <Link href="/Courses">
          <button
            className="font-medium text-xxs text-center px-6 py-3 mb-4 lg:mb-0 lg:mr-5 rounded-full text-white"
            style={{ backgroundColor: "#C54ED8" }}
          >
            COURSES
          </button>
        </Link>

        <Link href="/Store">
          <button className="flex gap-1 font-medium text-xxs text-center px-6 py-3 border border-pink-400 mb-4 lg:mb-0 lg:mr-5 rounded-full text-pink-400">
            <FontAwesomeIcon icon={faBagShopping} size="lg" /> Shop
          </button>
        </Link>

        <button
          onClick={logout}
          className="font-medium text-xxs text-center px-6 py-3 border border-pink-400 rounded-full text-pink-400"
        >
          Signout
        </button>
      </ul>
    </div>
  );
}
