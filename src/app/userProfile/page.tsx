"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateUser, clearUser } from "@/store/userSlice";
import Image from "next/image";
import { useState } from "react";
import { updateProfile, updateUserProfile } from "../../../pages/api/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    profileImage: user.profileImage || "/images/defaultImg.jpg",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!formData.fullName || !formData.email) {
      alert("Full Name and Email are required");
      return;
    }

    const profileData = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      contactNumber: formData.contactNumber,
      city: formData.city,
      state: formData.state,
      profileImage: formData.profileImage,
    };
    console.log("profileData", profileData);

    try {
      const updateProfileResponse = await updateProfile(profileData);

      console.log("updateProfileResponse here", updateProfileResponse);
      // dispatch(setAccessToken(loginResponse?.data?.accessToken));

      if (updateProfileResponse?.status === true) {
        // const getProfileResponse = await getUserProfile();
        console.log("get profile response", updateProfileResponse?.data);
      }
    } catch (error) {
      if (error instanceof Error) {
        // setError(error.message);
      }
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-start px-5 md:px-20 pt-10 md:pt-20 pb-20">
        <div className="flex flex-row items-center justify-between mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold">Edit Profile</h1>

          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-solid border-black">
            <Image
              src={formData.profileImage}
              alt="profileImg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // width={70}
              // height={70}
              className="absolute"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col mb-16">
          <div className="flex flex-row mb-10">
            <strong>Full Name: </strong>
            <p className="text-black text-sm sm:text-lg font-bold">
              {formData.fullName}
            </p>
            {/* <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
            /> */}
          </div>

          <div className="flex flex-row mb-10">
            <strong>Email: </strong>{" "}
            <p className="text-black text-sm sm:text-lg font-bold">
              {formData.email}
            </p>
            {/* <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
            /> */}
          </div>

          <div className="flex flex-col mb-5">
            <strong>Address</strong>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <strong>Contact Number</strong>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
            />
          </div>

          <div className="flex flex-row justify-center mb-5 gap-3">
            <div className="flex flex-col w-1/2">
              <strong>City</strong>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
              />
            </div>

            <div className="flex flex-col w-1/2">
              <strong>State/Province</strong>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
              />
            </div>
          </div>

          {/* <div className="flex flex-col">
          <strong>Password</strong>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-solid border-black px-3 py-4"
          />
        </div> */}
        </div>

        <div className="flex flex-row items-center xl:justify-start justify-between gap-3 xl:self-start">
          <button
            className="text-orange-500 border border-orange-500 border-solid py-3 px-10 bg-white rounded-md  w-1/2"
            onClick={() => dispatch(clearUser())}
          >
            Cancel
          </button>

          <button
            className="text-white border-none py-3 px-12 bg-orange-500 rounded-md  w-1/2"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
