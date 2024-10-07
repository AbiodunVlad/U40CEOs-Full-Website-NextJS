import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Community() {
  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex flex-col py-5 md:py-10 px-5 md:px-20">
        <h1 className="text-black text-center text-4xl lg:text-5xl font-extrabold mb-0 md:leading-10 uppercase">
          Explore Our Thriving Community Forum:{" "}
        </h1>
        <p className="text-3xl lg:text-4xl text-center uppercase mb-4">
          Where Discussions Flow and Connections Blossom
        </p>

        <p className="text-gray-500 text-center text-base sm:text-2xl">
          Connect, and engage in insightful discussions with diverse minds from
          all walks of
          <br className="md:flex hidden" /> life. From knowledge sharing to
          building lasting connections, it all happens here.{" "}
        </p>
      </div>

      <div className="bg-gray-300 w-full h-0.5 mb-10"></div>

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
                    <p className="text-gray-500 text-base sm:text-2xl font-bold">
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
            <div className="flex flex-row justify-between items-center gap-5 mb-5 w-full">
              <div className="flex flex-row w-1/12">
                <Image
                  src="/images/vlad.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full w-full"
                />
              </div>

              <input
                placeholder="Write something here..."
                type="text"
                className="w-11/12 rounded-full bg-gray-100 flex items-center px-5 py-4 text-base sm:text-2xl"
              />
            </div>

            <div className="w-full flex flex-row gap-1">
              <div className="w-1/2 bg-purple-300 flex flex-row items-center justify-center gap-2 py-1">
                <Image
                  src="/icons/questionIcon.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <p className="text-black text-base sm:text-2xl">
                  Ask a question
                </p>
              </div>

              <div className="w-1/2 bg-transparent border border-purple-400 flex flex-row items-center justify-center gap-2 py-1">
                <Image
                  src="/icons/postIcon.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <p className="text-black text-base sm:text-2xl">Make a post</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <div className="bg-white border-solid border-gray-500 border rounded-t-md flex flex-col px-5 md:px-10 lg:px-16 py-7">
              <div className="flex flex-row justify-between mb-3 md:mb-5 w-full">
                <div className="flex flex-row gap-3 w-11/12">
                  <Image
                    src="/images/vlad.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-1/12"
                  />

                  <div className="flex flex-col w-11/12">
                    <p className="text-black text-base sm:text-2xl font-bold">
                      Oluwaseun Adeboye{" "}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm font-bold">
                      May 20
                    </p>
                  </div>
                </div>

                <div className="w-1/12">
                  <Image
                    src="/icons/elipses.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-black text-base sm:text-2xl">
                  Hello everyone! I&apos;m diving into the world of fintech
                  startups. Any advice on securing initial funding and
                  navigating regulatory frameworks? Let&apos;s share insights
                  and support each other&apos;s ventures.
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
              <div className="flex flex-row justify-between mb-3 md:mb-5 w-full">
                <div className="flex flex-row gap-3 w-11/12">
                  <Image
                    src="/images/vlad.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-1/12"
                  />

                  <div className="flex flex-col w-11/12">
                    <p className="text-black text-base sm:text-2xl font-bold">
                      Fatou Diop{" "}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm font-bold">
                      May 20
                    </p>
                  </div>
                </div>

                <div className="w-1/12">
                  <Image
                    src="/icons/elipses.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-black text-base sm:text-2xl">
                  Top of the day to you all! I&apos;m passionate about
                  sustainable fashion startups. How can we balance creativity
                  with eco-friendly practices? Excited to brainstorm innovative
                  solutions with fellow entrepreneurs!
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
              <div className="flex flex-row justify-between mb-3 md:mb-5 w-full">
                <div className="flex flex-row gap-3 w-11/12">
                  <Image
                    src="/images/vlad.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-1/12"
                  />

                  <div className="flex flex-col w-11/12">
                    <p className="text-black text-base sm:text-2xl font-bold">
                      Obi Uche{" "}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm font-bold">
                      May 20
                    </p>
                  </div>
                </div>

                <div className="w-1/12">
                  <Image
                    src="/icons/elipses.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-black text-base sm:text-2xl">
                  Hi entrepreneurs! Excited to join this buoyant community. How
                  do you maintain work-life balance while growing your business?
                  Looking forward to sharing insights and learning from great
                  minds like you.
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
            <p className="text-black text-2xl sm:text-3xl font-extrabold mb-5">
              Choose A <br /> Membership Tier
            </p>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <p className="text-gray-500 text-base sm:text-2xl leading-3 mb-5">
              We offer different membership tiers tailored to your business’
              growth phase. Whether you’re a student, just starting out, or a
              seasoned entrepreneur, we’ve got you covered.
            </p>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/platnum.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  Platinum membership
                </p>
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  ₦1,650,000/annum
                </p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/platnum.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  Gold membership
                </p>
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  ₦412,500/annum
                </p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/silver.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  Bronze membership
                </p>
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  ₦75,000/annum
                </p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between mb-5">
              <Image
                src="/icons/bronze.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  Student membership
                </p>
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  ₦15,000/biannual
                </p>
              </div>
            </div>

            <Link href="/MembershipOptions" className="self-stretch flex">
              <button className="bg-pink-600 text-white w-full py-4 px-10 rounded-full">
                See more
              </button>
            </Link>
          </div>

          <div className="flex flex-col bg-white border-solid border-gray-500 border rounded-md px-10 lg:px-5 py-10">
            <p className="text-black text-2xl sm:text-3xl font-extrabold mb-5">
              Forums you <br /> subscribed for
            </p>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/platnum.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  Platinum
                </p>
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  12,000 members
                </p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/platnum.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  Gold
                </p>
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  12,000 members
                </p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/silver.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  Bronze
                </p>
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  12,000 members
                </p>
              </div>
            </div>

            <div className=" w-full border border-gray-400 mb-5"></div>

            <div className="flex flex-row items-center justify-between">
              <Image
                src="/icons/bronze.svg"
                className="w-1/4"
                alt=""
                width={50}
                height={20}
              />

              <div className="flex flex-col w-3/4">
                <p className="text-gray-400 text-base sm:text-2xl font-bold mb-1">
                  Student
                </p>
                <p className="text-gray-400 text-base sm:text-2xl mb-1">
                  12,000 members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
