import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type RegisterOverlayProps = {
  onClose: () => void;
};

export default function RegisterOverlay({
  onClose,
}: // onRegister,
{
  onClose: () => void;
  // onRegister: () => void;
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (fullName && email) {
      router.push("/resources");
    } else {
      alert("Please fill in your name and email.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center p-5  bg-black bg-opacity-50">
        <button
          onClick={onClose}
          className="close-button text-white font-bold self-end"
        >
          Close
        </button>

        <div className="bg-white p-10 w-3/4 h-auto flex flex-row">
          <div className="flex flex-col self-start text-left w-1/2 h-full">
            <p className="text-black text-2xl sm:text-4xl  font-extrabold w-full mb-16">
              FILL IN YOUR DETAILS TO GET YOUR FREE RESOURCES ACCESS
            </p>

            <p className="text-pink-500 text-base sm:text-2xl font-bold mb-5">
              What is in it for you:
            </p>

            <ul className="text-black text-base sm:text-2xl">
              <li className="mb-3">Access to free training sessions</li>
              <li className="mb-3">Access to U4C Media Features</li>
              <li className="mb-3">Access to free Books and Magazines</li>
              <li>Access to our Events schedules</li>
            </ul>
          </div>

          <div className="flex flex-col w-1/2 h-full">
            <Image
              src="/images/newRegisterOverlay.svg"
              alt=""
              width={300}
              height={100}
              className="w-full h-1/2 mb-7 bg-red-500"
            />

            <form
              className="flex flex-col items-center w-full h-1/2"
              onSubmit={handleSubmit}
            >
              <div className="relative mb-7 w-full">
                <input
                  type="text"
                  placeholder=""
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="text-black p-2 border border-red-500 w-full focus:outline-none"
                />
                <label
                  htmlFor="fullName"
                  className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left ${
                    fullName ? "-translate-y-7 scale-75" : ""
                  }`}
                >
                  Full Name
                </label>
              </div>

              <div className="relative mb-3 w-full">
                <input
                  type="email"
                  placeholder=""
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black p-2 border border-red-500 w-full focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left ${
                    email ? "-translate-y-7 scale-75" : ""
                  }`}
                >
                  Enter your email
                </label>
              </div>

              {/* <Link href="/resources" className="w-full mt-auto flex"> */}
              <button
                // onClick={onRegister}
                type="submit"
                className="bg-purple-500 text-white font-bold py-4 px-10 w-full rounded-full mt-3"
              >
                SUBSCRIBE
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
