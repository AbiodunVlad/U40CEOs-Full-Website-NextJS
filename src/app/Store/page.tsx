import Footer from "@/components/Footer";
import StoreNavbar from "@/components/StoreNavbar";
import React from "react";
import StoreHeaders from "./StoreHeaders";

export default function Store() {
  return (
    <div>
      <StoreNavbar />
      <StoreHeaders />

      <Footer />
    </div>
  );
}
