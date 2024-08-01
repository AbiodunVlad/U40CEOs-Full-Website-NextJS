"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  const logout = async () => {};

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between px-4 py-2 md:px-20 md:py-4 shadow-lg">
      <div className="flex justify-between w-full md:w-auto">
        <Image src="/images/logo.svg" alt="logo" width={50} height={50} />

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
        <li className="font-medium text-sm mb-4 md:mb-0 md:mr-10">Home</li>
        <li className="font-medium text-sm mb-4 md:mb-0 md:mr-10">About Us</li>
        <li className="font-medium text-sm mb-4 md:mb-0 md:mr-10">Resources</li>
        <li className="font-medium text-sm mb-4 md:mb-0 md:mr-10">
          Success Stories
        </li>
        <li className="font-medium text-sm mb-4 md:mb-0 md:mr-10">Blog</li>
        <button className="font-medium text-xs text-center px-5 py-1 mb-4 md:mb-0 md:mr-5 bg-black rounded-full text-white">
          JOIN OUR <br /> COMMUNITY
        </button>
        <button
          className="font-medium text-xs text-center px-6 py-3 mb-4 md:mb-0 md:mr-5 rounded-full text-white"
          style={{ backgroundColor: "#C54ED8" }}
        >
          COURSES
        </button>
        <button className="font-medium text-xs text-center px-6 py-3 border border-pink-400 md:mr-5 rounded-full text-pink-400">
          <FontAwesomeIcon icon={faBagShopping} size="lg" /> Shop
        </button>
        <button
          onClick={logout}
          className="font-medium text-xs text-center px-6 py-3 border border-pink-400 rounded-full text-pink-400"
        >
          Signout
        </button>
      </ul>
    </div>
  );
}
