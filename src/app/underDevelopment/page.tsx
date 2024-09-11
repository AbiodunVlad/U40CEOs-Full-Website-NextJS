import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function UnderDevelopment() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-10 px-20">
        <h1 className="text-center text-9xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-5 h-36">
          Hey!
        </h1>

        <p className="text-center text-black text-lg font-semibold mb-20">
          This page is under development. Check back soon.
        </p>

        <Link href="/home" className="bg-purple-600 text-white rounded-lg p-5">
          Back to Homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
}
