import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UnauthorizedAccess() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-10 px-20">
        <Image
          src="/icons/401.svg"
          alt=""
          width={500}
          height={500}
          className="mb-10"
        />

        <h1 className="text-black text-center text-5xl font-extrabold mb-7">
          Access Denied{" "}
        </h1>

        <p className="text-sm font-light text-black mb-20">
          You need to log in to view this page.{" "}
        </p>

        <Link
          href="/pages/homePage"
          className="bg-purple-600 text-white rounded-lg p-5"
        >
          Back to Homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
}
