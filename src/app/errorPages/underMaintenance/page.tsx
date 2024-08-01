import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UnderMaintenance() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-10 px-20">
        <Image
          src="/icons/maintenance.svg"
          alt=""
          width={500}
          height={500}
          className="mb-10"
        />

        <h1 className="text-black text-center text-5xl font-extrabold mb-7">
          We’re Under Maintenance{" "}
        </h1>

        <p className="text-sm font-light text-black mb-20">
          You need to log in to view this page.{" "}
        </p>

        <Link
          href="/pages/login"
          className="bg-purple-600 text-white rounded-lg p-5"
        >
          Click Here to Login{" "}
        </Link>
      </div>
      <Footer />
    </div>
  );
}
