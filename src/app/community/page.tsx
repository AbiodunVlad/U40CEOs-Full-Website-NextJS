import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Image from "next/image";
import React from "react";

export default function Community() {
  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex flex-col py-5 md:py-10 px-5 md:px-20">
        <h1 className="text-black text-center text-lg md:text-3xl font-extrabold mb-2 md:leading-10">
          WELCOME TO OUR VIBRANT AND <br /> ENGAGING COMMUNITY FORUM!
        </h1>
        <p className="text-gray-500 text-center text-xs">
          Create a dynamic space where people from all walks of life can come{" "}
          <span className="md:flex hidden">
            <br />
          </span>{" "}
          together to share knowledge, seek advice, engage in lively
          discussions,
          <span className="md:flex hidden">
            <br />
          </span>{" "}
          and build meaningful connections.
        </p>
      </div>

      <div className="px-5 md:px-20 flex flex-row md:flex-col-reverse lg:flex-row justify-between gap-10 w-full">
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="border-solid border-gray-500 border rounded-md flex flex-col mb-5 md:mb-10">
            <div className="w-full bg-purple-600 h-1/3 rounded-t-md">kscd</div>

            <div className="w-full bg-white h-2/3 px-5 md:px-10 lg:px-16 py-5 md:py-7 rounded-b-md relative">
              <div className="bg-gray-400 rounded-md w-10 h-10 flex items-center justify-center absolute -top-5">
                <Image src="/icons/platnum.svg" alt="" width={50} height={50} />
              </div>

              <div className="flex flex-row justify-between mb-3 md:mb-5">
                <div className="flex flex-row gap-3">
                  <div className="flex flex-col">
                    <p className="text-black text-lg md:text-3xl font-bold">
                      Platinum
                    </p>
                    <p className="text-gray-500 text-xxxs md:text-xs font-bold">
                      1,000 MEMBERS
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src="/icons/elipses.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-solid border-gray-500 border rounded-md flex flex-col px-5 md:px-10 lg:px-16 py-5 md:py-7 mb-5 md:mb-10">
            <div className="flex flex-row justify-between mb-5">
              <div className="flex flex-row w-1/6">
                <Image
                  src="/images/vlad.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>

              <input
                placeholder="Write something here..."
                type="text"
                className="w-5/6 rounded-full bg-gray-200 flex items-center px-3 text-sm"
              />
            </div>

            <div className="w-full flex flex-row gap-1">
              <div className="w-1/2 bg-purple-300 flex flex-row items-center justify-center gap-2 py-1">
                <Image
                  src="/icons/questionIcon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="text-black text-sm">Ask a question</p>
              </div>

              <div className="w-1/2 bg-transparent border border-purple-400 flex flex-row items-center justify-center gap-2 py-1">
                <Image
                  src="/icons/postIcon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="text-black text-sm">Make a post</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <div className="bg-white border-solid border-gray-500 border rounded-t-md flex flex-col px-5 md:px-10 lg:px-16 py-7">
              <div className="flex flex-row justify-between mb-3 md:mb-5">
                <div className="flex flex-row gap-3">
                  <Image
                    src="/images/vlad.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <div className="flex flex-col">
                    <p className="text-black text-xs md:text-sm font-bold">
                      John Doe
                    </p>
                    <p className="text-gray-500 text-xxs md:text-xs font-bold">
                      May 20
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src="/icons/elipses.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-black text-xxs md:text-xs">
                  Our community forum is designed to be a dynamic and
                  interactive space where members can chat, post questions,
                  share happenings, and join conversations. The forum is
                  structured to provide a seamless and engaging user experience,
                  encouraging participation and fostering a sense of community.
                </p>
              </div>

              <div className="flex flex-row self-center gap-3">
                <Image
                  src="/images/omobola.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="bg-gray-100 w-1/2"
                />
                <Image
                  src="/images/omobola.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="bg-gray-100 w-1/2"
                />
              </div>
            </div>

            <div className="flex flex-row bg-black justify-between items-center px-5 md:px-20">
              <div className="flex flex-row justify-between gap-2 py-1">
                <Image src="/icons/like.svg" alt="" width={20} height={20} />
                <p className="text-white text-sm">Like</p>
              </div>

              <div className="flex flex-row justify-between gap-2 py-1">
                <Image src="/icons/engage.svg" alt="" width={20} height={20} />
                <p className="text-white text-sm">Engage</p>
              </div>

              <div className="flex flex-row justify-between gap-2 py-1">
                <Image src="/icons/share.svg" alt="" width={20} height={20} />
                <p className="text-white text-sm">Share</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <div className="bg-white border-solid border-gray-500 border rounded-t-md flex flex-col px-5 md:px-10 lg:px-16 py-7">
              <div className="flex flex-row justify-between mb-3 md:mb-5">
                <div className="flex flex-row gap-3">
                  <Image
                    src="/images/vlad.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <div className="flex flex-col">
                    <p className="text-black text-xs md:text-sm font-bold">
                      John Doe
                    </p>
                    <p className="text-gray-500 text-xxs md:text-xs font-bold">
                      May 20
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src="/icons/elipses.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-black text-xxs md:text-xs">
                  Our community forum is designed to be a dynamic and
                  interactive space where members can chat, post questions,
                  share happenings, and join conversations. The forum is
                  structured to provide a seamless and engaging user experience,
                  encouraging participation and fostering a sense of community.
                </p>
              </div>

              <div className="flex flex-row self-center gap-3">
                <Image
                  src="/images/omobola.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="bg-gray-100 w-1/2"
                />
                <Image
                  src="/images/omobola.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="bg-gray-100 w-1/2"
                />
              </div>
            </div>

            <div className="flex flex-row bg-black justify-between items-center px-5 md:px-20">
              <div className="flex flex-row justify-between gap-2 py-1">
                <Image src="/icons/like.svg" alt="" width={20} height={20} />
                <p className="text-white text-sm">Like</p>
              </div>

              <div className="flex flex-row justify-between gap-2 py-1">
                <Image src="/icons/engage.svg" alt="" width={20} height={20} />
                <p className="text-white text-sm">Engage</p>
              </div>

              <div className="flex flex-row justify-between gap-2 py-1">
                <Image src="/icons/share.svg" alt="" width={20} height={20} />
                <p className="text-white text-sm">Share</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col w-full lg:w-1/3">
          <div className="flex flex-col bg-white border-solid border-gray-500 border rounded-md px-10 lg:px-5 py-10 mb-5">
            <p className="text-black text-2xl mb-5">
              Choose A <br /> Membership Tier
            </p>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <p className="text-gray-500 text-xs leading-3 mb-5">
              We offer different membership tiers tailored to your business’
              growth phase. Whether you’re a student, just starting out, or a
              seasoned entrepreneur, we’ve got you covered.
            </p>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-start justify-between">
              <Image src="/icons/platnum.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Platinum</p>
                <p className="text-gray-400 text-xs mb-1">Bronze</p>
              </div>

              <p className="text-gray-400 text-sm mb-1">N1,650,000/annum</p>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row justify-between">
              <Image src="/icons/platnum.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Gold</p>
                <p className="text-gray-400 text-xs mb-1">Bronze</p>
              </div>

              <p className="text-gray-400 text-sm mb-1">N412,500/annum</p>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row justify-between">
              <Image src="/icons/silver.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Silver</p>
                <p className="text-gray-400 text-xs mb-1">Silver</p>
              </div>

              <p className="text-gray-400 text-sm mb-1">N15,000/annum</p>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row justify-between mb-5">
              <Image src="/icons/bronze.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Bronze</p>
                <p className="text-gray-400 text-xs mb-1">Gold</p>
              </div>

              <p className="text-gray-400 text-sm mb-1">N75,000/annum</p>
            </div>

            <button className="bg-pink-600 text-white self-end py-1 px-3 rounded-full">
              See more
            </button>
          </div>

          <div className="flex flex-col bg-white border-solid border-gray-500 border rounded-md px-10 lg:px-5 py-10">
            <p className="text-black text-2xl mb-5">
              Forums you <br /> subscribed for
            </p>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-start justify-between">
              <Image src="/icons/platnum.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Platinum</p>
                <p className="text-gray-400 text-xs mb-1">12,000 members</p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row justify-between">
              <Image src="/icons/platnum.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Gold</p>
                <p className="text-gray-400 text-xs mb-1">12,000 members</p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row justify-between">
              <Image src="/icons/silver.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Silver</p>
                <p className="text-gray-400 text-xs mb-1">12,000 members</p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row justify-between">
              <Image src="/icons/bronze.svg" alt="" width={50} height={20} />

              <div className="flex flex-col">
                <p className="text-gray-400 text-sm mb-1">Bronze</p>
                <p className="text-gray-400 text-xs mb-1">12,000 members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
