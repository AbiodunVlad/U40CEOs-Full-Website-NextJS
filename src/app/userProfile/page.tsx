"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateUser, clearUser } from "@/store/userSlice";
import Image from "next/image";
import { useState } from "react";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: user.name || "",
    email: user.email || "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.email) {
      alert("Full Name and Email are required");
      return;
    }
    dispatch(
      updateUser({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        address: formData.address,
        contactNumber: formData.contactNumber,
        city: formData.city,
        state: formData.state,
      })
    );
    alert("Profile updated successfully");
  };

  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-row items-center justify-between mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold">Edit Profile</h1>
        <Image src="images/vlad.svg" alt="" width={70} height={70} />
      </div>

      <div className="flex flex-col mb-16">
        <div className="flex flex-col mb-5">
          <strong>Full Name</strong>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border border-solid border-black px-3 py-4"
          />
        </div>

        <div className="flex flex-col mb-5">
          <strong>Email</strong>{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-solid border-black px-3 py-4"
          />
        </div>

        <div className="flex flex-col mb-5">
          <strong>Address</strong>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border border-solid border-black px-3 py-4"
          />
        </div>

        <div className="flex flex-col mb-5">
          <strong>Contact Number</strong>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full border border-solid border-black px-3 py-4"
          />
        </div>

        <div className="flex flex-row justify-center mb-5">
          <div className="flex flex-col">
            <strong>City</strong>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-solid border-black px-3 py-4"
            />
          </div>

          <div className="flex flex-col">
            <strong>State/Province</strong>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full border border-solid border-black px-3 py-4"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <strong>Password</strong>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-solid border-black px-3 py-4"
          />
        </div>
      </div>

      <div className="flex flex-row items-center xl:justify-start justify-between xl:gap-10">
        <button
          className="text-orange-500 border-orange-500 border-solid py-2 px-3 bg-white rounded-md"
          onClick={() => dispatch(clearUser())}
        >
          Cancel
        </button>

        <button
          className="text-white border-none py-2 px-3 bg-orange-500 rounded-md"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
