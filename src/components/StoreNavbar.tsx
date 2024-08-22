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

export default function StoreNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  const isActive = (path: any) => (pathname === path ? "text-purple-500" : "");

  const logout = async () => {};

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 flex flex-col  px-4 py-2 md:px-20 md:py-4 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between mb-5">
        <div className="flex justify-between w-full md:w-auto">
          <div className="flex flex-row items-center justify-center">
            <Link href="/home">
              {" "}
              <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
            </Link>

            <p className="text-white text-xxs">
              THE OFFICIAL
              <br /> ONLINE STORE
            </p>
          </div>

          <div className="md:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon
              className="text-black"
              icon={menuOpen ? faTimes : faBars}
              size="lg"
            />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col">
          <ul
            className={`text-white flex flex-col md:flex-row items-center w-full md:w-auto transition-all duration-300 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <Link href="/">
              {" "}
              <li
                className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 ${isActive(
                  "/home"
                )}`}
              >
                My Account
              </li>
            </Link>

            <Link href="/">
              {" "}
              <li
                className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 uppercase ${isActive(
                  "/home"
                )}`}
              >
                Help
              </li>
            </Link>

            <Link href="/">
              {" "}
              <li
                className={`text-xs font-bold mb-4 md:mb-0 md:mr-10 ${isActive(
                  "/home"
                )}`}
              >
                Cart
              </li>
            </Link>
          </ul>

          <button className="font-medium text-xxs text-center px-5 py-1 mb-4 md:mb-0 md:mr-5 bg-black rounded-full text-white">
            SIGN IN
          </button>
        </div>
      </div>
      <p className="test-white text-xs text-center">
        <span className="font-bold">SUPPORT YOUNG AFRICAN ENTREPRENEURS</span> -
        BUY BRANDED KITS AND MORE!
      </p>
    </div>
  );
}
