"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

export default function CoursesNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  const isActive = (path: any) => (pathname === path ? "text-purple-500" : "");

  const logout = async () => {};

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between px-4 py-2 md:px-20 md:py-4 shadow-lg">
      <div className="flex justify-between w-full md:w-auto">
        <Link href="/home">
          {" "}
          <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
        </Link>

        <div className="md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            className="text-black"
            icon={menuOpen ? faTimes : faBars}
            size="lg"
          />
        </div>
      </div>

      <ul
        className={`text-black flex flex-col md:flex-row items-center w-full md:w-auto transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <Link href="/">
          {" "}
          <li
            className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 ${isActive(
              "/homePage"
            )}`}
          >
            COURSE OBJECTIVE
          </li>
        </Link>

        <Link href="/">
          {" "}
          <li
            className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 uppercase ${isActive(
              "/homePage"
            )}`}
          >
            Course Overview
          </li>
        </Link>

        <Link href="/">
          {" "}
          <li
            className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 ${isActive(
              "/homePage"
            )}`}
          >
            What you’ll learn
          </li>
        </Link>

        <Link href="/">
          {" "}
          <li
            className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 ${isActive(
              "/homePage"
            )}`}
          >
            MEET YOUR INSTRUCTORS
          </li>
        </Link>

        <Link href="/">
          {" "}
          <li
            className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 ${isActive(
              "/homePage"
            )}`}
          >
            PRICING
          </li>
        </Link>
      </ul>

      <button className="font-medium text-xxs text-center px-5 py-1 mb-4 md:mb-0 md:mr-5 bg-black rounded-full text-white">
        SIGN IN
      </button>
    </div>
  );
}
