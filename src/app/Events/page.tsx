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
        <p className="text-black text-3xl font-bold text-center mb-3">
          <span className="text-purple-600 font-light">Upcoming</span> Events
        </p>

        <p className="text-black sm:text-sm text-xs text-center mb-5">
          Create a dynamic space where people from all walks of life can come
          together to share
          <span className="sm:flex hidden">
            <br />
          </span>{" "}
          knowledge, seek advice, engage in lively discussions, and build
          meaningful connections.
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
