import Footer from "@/components/Footer";
import StoreNavbar from "@/components/StoreNavbar";
import React from "react";
import StoreHeaders from "./StoreHeaders";
import Navbar from "@/components/Navbar";

export default function Store() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto">
        {/* <StoreNavbar /> */}
        <StoreHeaders />
      </div>
      <Footer />
    </div>
  );
}
