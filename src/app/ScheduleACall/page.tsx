"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment, { Moment } from "moment";
import Calendly from "@/components/Calendly";

export default function ScheduleACall() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  // const [time, setTime] = useState<string | null>("10:00");
  const [time, setTime] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | string>(new Date());

  const minTime = new Date();
  minTime.setHours(9, 0);

  const maxTime = new Date();
  maxTime.setHours(17, 0);

  const handleDateChange = (value: string | Moment) => {
    if (moment.isMoment(value)) {
      setSelectedDate(value.toDate());
    } else {
      setSelectedDate(value);
    }
  };

  return (
    <div className="bg-blue-100">
      <Navbar />
      <div className="sm:px-20 px-5 py-10 h-full">
        <div className="mb-10">
          <h1 className="text-black text-4xl lg:text-5xl font-extrabold text-center mb-2">
            SHEDULE A CALL
          </h1>

          <p className="text-black text-base sm:text-2xl text-center">
            Create a dynamic space where people from all walks of life can come
            together to share{" "}
            <span className="sm:flex hidden">
              <br />
            </span>{" "}
            knowledge, seek advice, engage in lively discussions, and build
            meaningful connections with people.
          </p>
        </div>

        <div className="sm:flex hidden w-full border border-gray-400 mb-10"></div>

        <div className="flex sm:flex-row flex-col text-black items-center text-base sm:text-2xl justify-center  mb-10">
          {" "}
          <Calendly url="https://calendly.com/under40ceos/one-on-one-meeting" />
        </div>

        {/* <div className="flex sm:flex-row flex-col text-black items-center text-base sm:text-2xl justify-center  mb-10">
          <DateTime
            value={selectedDate}
            onChange={handleDateChange}
            dateFormat="YYYY-MM-DD"
            timeFormat="hh:mm A"
            // input={true}
            inputProps={{
              className:
                "flex text-center text-sm sm:text-lg justify-between appearance-none shadow border rounded py-3 px-2 text-gray-600 cursor-pointer",
            }}
          />
        </div> */}

        <div className="flex md:flex-row flex-col items-center justify-center gap-3">
          <div className="relative">
            <input
              className="text-black text-base sm:text-2xl w-full p-2 border border-red-300 rounded-lg focus:outline-none focus:border-red-800"
              placeholder=" "
              id="fullName"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />

            <label
              htmlFor="fullName"
              className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left text-base sm:text-2xl ${
                fullName ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              className="text-black text-base sm:text-2xl w-full p-2 border border-red-300 rounded-lg focus:outline-none focus:border-red-800"
              placeholder=" "
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="email"
              className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left text-base sm:text-2xl ${
                email ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Email
            </label>
          </div>

          <button className="bg-purple-600 text-white text-base sm:text-2xl py-4 px-10 rounded-full">
            SCHEDULE A CALL
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
