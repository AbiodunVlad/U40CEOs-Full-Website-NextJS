"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import React, { useEffect, useState } from "react";
import EventsHeaders from "./EventsHeaders";

export default function Events() {
  return (
    <div className="bg-gray-200">
      <Navbar />

      <div className="sm:py-20 py-10">
        <p className="text-black text-4xl lg:text-5xl font-bold text-center mb-3 uppercase">
          <span className="text-purple-600 font-light">Our Next Big</span>{" "}
          Events
        </p>

        <p className="text-black text-sm sm:text-lg text-center mb-5">
          Seize the opportunity to attend our upcoming events for a rewarding
          experience, where you
          <br className="sm:flex hidden" /> can engage, learn, and network with
          fellow entrepreneurs.
        </p>

        <div className="mb-5">
          <Search />
        </div>

        <EventsHeaders />
      </div>

      <Footer />
    </div>
  );
}
