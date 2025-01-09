"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateUser, clearUser } from "@/store/userSlice";
import Image from "next/image";
import { useState } from "react";
import {
  updateProfile,
  updateUserProfile,
  updateUserDetails,
} from "../../../pages/api/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(true);

  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    address: user?.address || "",
    contactNumber: user?.contactNumber || "",
    city: user?.city || "",
    state: user?.state || "",
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
    if (!formData.address || !formData.contactNumber || !formData.state) {
      alert("Please provide all required fields");
      return;
    }

    console.log("Handle Save Triggered");

    const profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      contactNumber: formData.contactNumber,
      city: formData.city,
      state: formData.state,
    };
    console.log("profileData", profileData);

    try {
      const updateProfileResponse = await updateUserDetails(profileData);
      setIsEditing(false);

      console.log("API Response", updateProfileResponse);
      // dispatch(setAccessToken(loginResponse?.data?.accessToken));

      if (updateProfileResponse?.status === true) {
        dispatch(updateUser(updateProfileResponse.data));
        // dispatch(updateUser(updateProfileResponse));

        localStorage.setItem(
          "user",
          JSON.stringify(updateProfileResponse.data)
        );
        setIsEditing(false);
        // const getProfileResponse = await getUserProfile();
        console.log("get profile response", updateProfileResponse?.data);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating profile:", error.message);
        alert(error.message);
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
          <div className="flex flex-row items-center mb-10">
            {" "}
            <strong className="mr-2">First Name:</strong>{" "}
            <p className="text-black text-sm sm:text-lg font-normal">
              {" "}
              {formData.firstName}
            </p>
          </div>

          <div className="flex flex-row items-center mb-10">
            <strong className="mr-2">Last Name: </strong>
            <p className="text-black text-sm sm:text-lg font-normal">
              {formData.lastName}
            </p>
          </div>

          <div className="flex flex-row items-center mb-10">
            <strong className="mr-2">Email:</strong>{" "}
            <p className="text-black text-sm sm:text-lg font-normal">
              {formData.email}
            </p>
          </div>

          <div className="flex flex-col mb-5">
            <strong>Address:</strong>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
              />
            ) : (
              <p className="text-black text-sm sm:text-lg font-normal">
                {formData.address || "Not Provided"}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <strong>Contact Number:</strong>
            {isEditing ? (
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
              />
            ) : (
              <p className="text-black text-sm sm:text-lg font-normal">
                {formData.contactNumber || "Not Provided"}
              </p>
            )}
          </div>

          <div className="flex flex-row justify-center mb-5 gap-3">
            <div className="flex flex-col w-1/2">
              <strong>City:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
                />
              ) : (
                <p className="text-black text-sm sm:text-lg font-normal">
                  {formData.city || "Not Provided"}
                </p>
              )}
            </div>

            <div className="flex flex-col w-1/2">
              <strong>State/Province:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-solid border-black px-3 py-4 focus:outline-none"
                />
              ) : (
                <p className="text-black text-sm sm:text-lg font-normal">
                  {formData.state || "Not Provided"}
                </p>
              )}
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
          {isEditing ? (
            <>
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
            </>
          ) : (
            <button
              className="text-white border-none py-3 px-12 bg-orange-500 rounded-md w-1/2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
