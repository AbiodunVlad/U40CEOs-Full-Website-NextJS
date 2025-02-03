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
      <div className=" flex  items-center justify-between px-4 py-2 xl:px-20 lg:py-4  max-w-screen-2xl mx-auto">
        <div className="flex items-center w-full xl:w-1/5">
          <Link href="/home">
            {" "}
            <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
          </Link>
        </div>

        <ul
          className={`text-black flex items-center justify-between w-full xl:w-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden xl:flex"
          }`}
        >
          <Link href="/membership">
            <button className="font-bold text-xxs text-center px-5 py-3 mb-4 xl:mb-0 xl:mr-5 bg-purple-600 rounded-full text-white">
              JOIN OUR COMMUNITY
            </button>
          </Link>
        </ul>

        <div className="xl:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            className="text-black"
            icon={menuOpen ? faTimes : faBars}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
