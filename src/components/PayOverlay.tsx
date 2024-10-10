import Image from "next/image";
import React from "react";

type PayOverlayProps = {
  onClose: () => void;
};

export default function PayOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-5  bg-black bg-opacity-50">
      <button
        onClick={onClose}
        className="close-button text-white font-bold self-end"
      >
        Close
      </button>

      <div className="bg-white sm:p-5 p-3 sm:w-1/2 w-full h-auto flex flex-col">
        <div className="bg-slate-200 flex flex-row w-full mb-5 py-3 sm:px-5 px-2">
          <div className="flex flex-col w-2/3">
            <p className="text-black sm:text-2xl text-base font-bold sm:mb-3 mb-1">
              Event Title
            </p>

            <div className="flex flex-row gap-2">
              <p className="text-black sm:text-2xl text-base">Olaoluwa Ajayi</p>
              <p className="text-black sm:text-2xl text-base">09 . 08. 2022</p>
            </div>
            <p className="text-black sm:text-2xl text-base">
              olaoluwaajayi@example.com
            </p>
          </div>

          <div className="flex flex-col w-1/3 items-center">
            <p className="bg-purple-300 text-black sm:text-2xl text-base py-1 px-3">
              FREE
            </p>
          </div>
        </div>

        <div className=" bg-zinc-300 flex flex-row justify-between w-full py-1 px-2 mb-5">
          <p className="text-black sm:text-2xl text-base font-bold">TOTAL:</p>
          <p className="text-black sm:text-2xl text-base font-bold">$0.00</p>
        </div>

        <div>
          <p className="text-black font-bold sm:text-2xl text-base mb-1">
            Select Payment Method
          </p>

          <div className="bg-purple-100 sm:py-7 py-5 sm:px-5 px-2 mb-5">
            <div></div>

            <p className="text-black sm:text-2xl text-base font-bold mb-3">
              Payment Details
            </p>

            <form>
              <input
                type="text"
                placeholder="Enter Card Name"
                className="text-gray-500 sm:text-2xl text-base border border-b-stone-300 mb-5 w-full bg-transparent"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="text-gray-500 sm:text-2xl text-base border border-b-stone-300 mb-5 w-full bg-transparent"
              />

              <div className="flex flex-row gap-3 mb-2">
                <input
                  type="text"
                  placeholder="Expriration"
                  className="text-gray-500 sm:text-2xl text-base border border-b-stone-300 mb-2 w-2/3 bg-transparent"
                />
                <input
                  type="text"
                  placeholder="CVV Code"
                  className="text-gray-500 sm:text-2xl text-base border border-b-stone-300 mb-2 w-1/3 bg-transparent"
                />
              </div>

              <p className="text-black sm:text-2xl text-base">
                By Clicking *Pay* I agree to company terms of services
              </p>
            </form>
          </div>

          <button className="flex justify-center items-center w-full bg-purple-500 text-white sm:text-2xl text-base font-bold py-2 ">
            Pay $0.00
          </button>
        </div>
      </div>
    </div>
  );
}
