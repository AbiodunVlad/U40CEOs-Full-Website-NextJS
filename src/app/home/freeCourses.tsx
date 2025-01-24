"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterOverlay from "@/components/RegisterOverlay";
import { useRouter } from "next/navigation";

export default function FreeCourses() {
  const [showRegisterOverlay, setShowRegisterOverlay] = useState(false);
  const router = useRouter();

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();

    setShowRegisterOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowRegisterOverlay(false);
  };

  const handleRegister = () => {
    // router.push("/resources");
  };

  return (
    <div className="flex flex-col items-center justify-center  text-center pb-20 px-5 overflow-hidden max-w-screen-2xl mx-auto">
      <div className="flex flex-row">
        <Image src="/icons/growImg1.svg" alt="" width={100} height={100} />
        <Image src="/icons/growImg12.svg" alt="" width={200} height={200} />
        <Image src="/icons/growImg3.svg" alt="" width={150} height={150} />
        <Image src="/icons/growImg4.svg" alt="" width={100} height={100} />
        <Image src="/icons/growImg5.svg" alt="" width={150} height={150} />
      </div>
      <h1 className="text-black font-extrabold text-3xl lg:text-4xl mb-3 leading-10">
        <span className="text-pink-500">LEARN AND GROW</span> WITH
        <br /> OUR FREE COURSES DESIGNED
        <br /> FOR BUSINESS SUCCESS
      </h1>

      <p className="text-base sm:text-2xl text-blue-500 mb-10">
        Empower your entrepreneurial journey through proven
        <br /> strategies and relatable case studies from our courses
      </p>

      <Link href="/RegisterOverlay">
        <button
          className="flex sm:self-center self-stretch py-4 px-7 rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: "#9B05E2" }}
          onClick={handleEnrollment}
        >
          ENROLL NOW
        </button>
      </Link>
      <div className="flex flex-row">
        <Image src="/icons/growImg6.svg" alt="" width={100} height={100} />
        <Image src="/icons/growImg7.svg" alt="" width={200} height={200} />
        <Image src="/icons/growImg8.svg" alt="" width={150} height={150} />
        <Image src="/icons/growImg9.svg" alt="" width={100} height={100} />
        <Image src="/icons/growImg10.svg" alt="" width={150} height={150} />
        <Image src="/icons/growImg11.svg" alt="" width={150} height={150} />
      </div>

      {showRegisterOverlay && (
        <RegisterOverlay
          onClose={handleOverlayClose}
          // onRegister={handleRegister}
        />
      )}
    </div>
  );
}
