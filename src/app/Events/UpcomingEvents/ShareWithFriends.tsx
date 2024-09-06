import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type ShareOverlayProps = {
  onClose: () => void;
};

export default function ShareWithFriends({
  onClose,
  onShare,
}: {
  onClose: () => void;
  onShare: () => void;
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center p-5  bg-black bg-opacity-50">
        <button
          onClick={onClose}
          className="close-button text-white font-bold self-end"
        >
          Close
        </button>

        <div className="bg-white py-5 md:w-1/3 w-4/5 h-auto flex flex-col">
          <p className="text-black text-center text-2xl font-semibold">
            Share with friends
          </p>

          <div className="bg-gray-500 w-full h-0.5 mb-10"></div>

          <div className="flex flex-row justify-center items-center gap-7 mb-5">
            <Link href="">
              <Image
                src="/icons/facebookBlue.svg"
                alt=""
                width={30}
                height={30}
              />
            </Link>

            <Link href="">
              <Image
                src="/icons/twitterBlack.svg"
                alt=""
                width={20}
                height={30}
              />
            </Link>

            <Link href="">
              <Image src="/icons/whatsapp.svg" alt="" width={30} height={30} />
            </Link>

            <Link href="">
              <Image
                src="/icons/linkedinBlue.svg"
                alt=""
                width={30}
                height={30}
              />
            </Link>
          </div>

          <div className="border border-gray-500 p-2 flex flex-row w-4/5 self-center">
            <div className="flex flex-col w-5/6">
              <p className="text-black text-sm mb-2">Event URL</p>
              <p className="text-black sm:text-sm text-xxs font-semibold">
                {`https://www.under40ceos.com/s/sound-of-entrepreneurs`.slice(
                  0,
                  33
                )}
                ...
              </p>
            </div>

            <div className="flex items-center justify-center w-1/6">
              <Image src="/icons/copy.svg" alt="" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
