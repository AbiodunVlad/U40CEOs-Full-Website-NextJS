import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SomethingWentWrong() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-10 px-20">
        <Image
          src="/icons/500.svg"
          alt=""
          width={500}
          height={500}
          className="mb-10"
        />

        <h1 className="text-black text-center text-5xl font-extrabold mb-7">
          Something Went Wrong{" "}
        </h1>

        <p className="text-sm font-light text-black mb-20">
          We’re experiencing some technical issues. Please try again later.{" "}
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
