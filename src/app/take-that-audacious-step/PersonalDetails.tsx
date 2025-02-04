import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

export default function PersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [whyJoin, setWhyJoin] = useState<string[]>([]);
  const [whatGain, setWhatGain] = useState("");
  const [headshot, setHeadshot] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const options = [
    {
      value: "Networking with other young entrepreneurs",
      label: "Networking with other young entrepreneurs",
    },
    {
      value: "Access to educational resources and courses",
      label: "Access to educational resources and courses",
    },
    {
      value: "Learning from successful business leaders",
      label: "Learning from successful business leaders",
    },
    {
      value: "Participating in events and webinars",
      label: "Participating in events and webinars",
    },
    {
      value: "Growing my business through mentorship opportunities",
      label: "Growing my business through mentorship opportunities",
    },
    { value: "Others", label: "Others" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setHeadshot(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWhyJoinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setWhyJoin(selectedOptions);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("linkedinUrl", linkedinUrl);
    formData.append("whyJoin", JSON.stringify(whyJoin));
    formData.append("whatGain", whatGain);
    if (headshot) formData.append("headshot", headshot);
  };

  return (
    <div className="">
      <p className="text-center mb-7">
        Please confirm your details before proceeding to the next page
      </p>

      <form className="flex flex-col justify-center items-center w-full">
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full xl:w-1/2">
            <input
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              placeholder=""
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label
              htmlFor="firstName"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                firstName ? "-translate-y-9 scale-75" : ""
              }`}
            >
              First Name
            </label>
          </div>

          <div className="relative mb-0 w-full xl:w-1/2">
            <input
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              placeholder=""
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label
              htmlFor="lastName"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                lastName ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Last Name
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full xl:w-1/2">
            <DatePicker
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg"
              value={dateOfBirth}
              onChange={(date) => setDateOfBirth(date.toString())}
            />

            <label
              htmlFor="dateOfBirth"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                dateOfBirth ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Date of Birth
            </label>
          </div>

          <div className="relative mb-0 w-full xl:w-1/2">
            <input
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              placeholder=""
              id="linkedinUrl"
              type="text"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />

            <label
              htmlFor="linkedinUrl"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                linkedinUrl ? "-translate-y-9 scale-75" : ""
              }`}
            >
              LinkedIn URL
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <label
              htmlFor="whyJoin"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                whyJoin ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Why did you join Under 40 CEOs?{" "}
              <span className="text-slate-300">(Select 3 Options)</span>
            </label>

            <Select
              isMulti
              options={options}
              className="text-black w-full"
              onChange={(selected) =>
                setWhyJoin(selected.map((item) => item.value))
              }
              value={options.filter((option) => whyJoin.includes(option.value))}
            />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <textarea
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={whatGain}
              onChange={(e) => setWhatGain(e.target.value)}
            />

            <label
              htmlFor="whatGain"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                whatGain ? "-translate-y-9 scale-75" : ""
              }`}
            >
              What do you hope to gain from this community?
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full xl:w-1/2">
            <input type="file" onChange={handleFileChange} accept="image/*" />
          </div>
          <div className="relative mb-0 w-full xl:w-1/2">
            {preview && (
              <Image
                src={preview}
                alt="Preview"
                className="w-full max-h-64 object-cover"
              />
            )}
          </div>
        </div>
        <Link href="/" className="w-full">
          <button
            className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full text-white font-bold uppercase"
            style={{ backgroundColor: "#C54ED8" }}
            onClick={handleFormSubmit}
          >
            NEXT
          </button>
        </Link>{" "}
      </form>
    </div>
  );
}
