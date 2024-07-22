import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Courses() {
  return (
    <div className="flex flex-col pt-20">
      <div className="bg-purple-500 px-40 py-5 flex flex-row justify-between">
        <div className="flex flex-col justify-between h-48">
          <div>
            <h5 className="text-white text-3xl font-bold mb-3">Learning Hub</h5>
            <p className="text-white text-sm mb-4">About Learning Hub</p>
          </div>

          <button className="self-start inline-flex bg-black text-white py-2 px-4 rounded-full">
            LEARN MORE
          </button>
        </div>

        <div>
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-96 h-48"
          />
        </div>
      </div>

      <div className="bg-black pt-10 pb-16 px-20 flex flex-row items-center justify-center gap-5 relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute text-gray-700 right-96 left-90"
        />
        <input
          type="search"
          placeholder="Search"
          className="w-2/3 rounded-full text-gray-700 text-xs py-1 px-3 border-pink-500 border-solid border"
        />

        <div className="bg-pink-500 py-2 px-5 rounded-md text-white text-sm flex flex-row justify-between items-center gap-2">
          <FontAwesomeIcon icon={faFilter} />
          <p>Filter</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-lg font-bold mb-10">EXPLORE COURSES</h5>

        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5 w-full mb-7">
            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <iframe
                src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
                className="w-full h-48 mb-5"
              />

              <p className="text-black text-sm font-bold mb-5">
                COURSE TITLE GOES HERE
              </p>

              <button className="bg-purple-600 text-white text-xs py-2 px-5 w-full">
                ENROL NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
