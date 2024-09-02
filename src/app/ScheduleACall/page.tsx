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
      <div className="sm:px-20 px-5 py-10 ">
        <div className="mb-10">
          <h1 className="text-black sm:text-4xl text-2xl font-extrabold text-center mb-2">
            SHEDULE A CALL
          </h1>

          <p className="text-black sm:text-sm text-xs text-center">
            Create a dynamic space where people from all walks of life can come
            together to share{" "}
            <span className="sm:flex hidden">
              <br />
            </span>{" "}
            knowledge, seek advice, engage in lively discussions, and build
            meaningful connections.
          </p>
        </div>

        <div className="sm:flex hidden w-full border border-gray-400 mb-10"></div>

        <div className="flex sm:flex-row flex-col text-black items-center justify-center  mb-10">
          <DateTime
            value={selectedDate}
            onChange={handleDateChange}
            dateFormat="YYYY-MM-DD"
            timeFormat="hh:mm A"
            // input={true}
            inputProps={{
              className:
                "flex text-center  justify-between appearance-none shadow border rounded py-3 px-2 text-gray-600 cursor-pointer",
            }}
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="relative -left-10 top-4 size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg> */}

          {/* <div>
            <Calendar
              onChange={(value) => setDate(value as Date | null)}
              value={date}
            />
          </div> */}

          {/* <div className="flex flex-col items-center"> */}
          {/* <p className="text-black">
              Available Times for {date?.toDateString()}
            </p> */}

          {/* <DatePicker
              selected={time}
              onChange={(date: Date | null) => setTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              minTime={minTime}
              maxTime={maxTime}
            /> */}
          {/* <TimePicker
              onChange={setTime}
              value={time}
              disableClock={true}
              format="h:mm a"
              clearIcon={null}
            /> */}
          {/* </div> */}
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center gap-3">
          <div className="relative">
            <input
              className="text-black w-full p-2 border border-red-300 rounded-lg focus:outline-none focus:border-red-800"
              placeholder=" "
              id="fullName"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
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

          <div className="relative">
            <input
              className="text-black w-full p-2 border border-red-300 rounded-lg focus:outline-none focus:border-red-800"
              placeholder=" "
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="email"
              className={`absolute left-2 top-2 text-gray-500 pointer-events-none transition-all transform origin-left ${
                email ? "-translate-y-7 scale-75" : ""
              }`}
            >
              Email
            </label>
          </div>

          <button className="bg-purple-600 text-white text-sm py-3 px-8 rounded-full">
            SCHEDULE A CALL
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
