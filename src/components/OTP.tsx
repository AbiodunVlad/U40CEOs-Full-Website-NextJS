"use client";
import React, { useState } from "react";

interface OTPPopupProps {
  onVerify: (otp: string) => void;
  onClose: () => void;
}

export default function OTP({ onVerify, onClose }: OTPPopupProps) {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    onVerify(otp);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Kindly input the OTP we sent to your email for verification.
        </h2>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter OTP"
        />

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Close
          </button>

          <button
            onClick={handleVerify}
            className="bg-purple-700 text-white px-4 py-2 rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
