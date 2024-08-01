"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-center text-black text-xl">Loading...</div>
    </div>
  );
}
