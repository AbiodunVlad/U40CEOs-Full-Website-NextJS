import Image from "next/image";
import React from "react";

type RegisterOverlayProps = {
  onClose: () => void;
};

// const RegisterOverlay: React.FC<RegisterOverlayProps> = ({ onClose }) => {
//   return <div className="overlay">{/* Overlay content */}</div>;
// };

export default function PayOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center p-5  bg-black bg-opacity-50">
      <button
        onClick={onClose}
        className="close-button text-white font-bold self-end"
      >
        Close
      </button>

      <div className="bg-white p-5 md:w-1/3 w-4/5 h-auto flex flex-col">
        <div>
          <p className="text-black text-sm mb-3">Event Title</p>

          <div className="flex flex-row">
            <p className="text-black text-xs">Olaoluwa Ajayi</p>
            <p className="text-black text-xs">09 . 08. 2022</p>
          </div>
          <p className="text-black text-xs">olaoluwaajayi@example.com</p>
        </div>
      </div>
    </div>
  );
}
