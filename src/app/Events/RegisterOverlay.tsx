import Image from "next/image";
import React from "react";

type RegisterOverlayProps = {
  onClose: () => void;
};

// const RegisterOverlay: React.FC<RegisterOverlayProps> = ({ onClose }) => {
//   return <div className="overlay">{/* Overlay content */}</div>;
// };

export default function RegisterOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center p-5  bg-black bg-opacity-50">
      <button
        onClick={onClose}
        className="close-button text-white font-bold self-end"
      >
        Close
      </button>

      <div className="bg-white p-5 md:w-1/3 w-4/5 h-auto flex flex-col">
        <Image
          src="/images/registerOverlay.svg"
          alt=""
          width={300}
          height={100}
          className="w-full h-1/3 mb-5 bg-red-500"
        />

        <p className="text-black text-lg text-center font-bold w-full mb-10">
          FILL IN YOUR DETAILS TO GET YOUR FREE RESOURCES ACCESS
        </p>

        <form className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="text-gray-500 p-2 border border-red-500 mb-3 w-full"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-500 p-2 border border-red-500 mb-3 w-full"
          />
          <button className="bg-purple-500 text-white font-bold py-2 px-5 rounded-full mt-3">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}
