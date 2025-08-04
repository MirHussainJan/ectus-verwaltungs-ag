"use client";
import React from 'react'
import Image from 'next/image';
import ProfilePic from "../../../assets/images/profile.jpg"
import EditPen from "../../../assets/icons/EditPen"
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetUserProfile, useUpdateUserProfilePicture } from "@/hooks/user/profile";
const page = () => {
  const { data, isPending } = useGetUserProfile();
  console.log(data);
  
  return (
    <>
      {isPending && <LoadingBackdrop />}
      <div className="py-4 md:py-9 px-4 md:px-6 lg:px-[4.167vw]">
        <h2 className="mb-4 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">
          Welcome back, {data?.user?.firstName} {data?.user?.lastName}
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* left */}
          <div className="p-5 md:p-[20px_16px] bg-white md:w-[263px] w-full">
            <h6 className="font-semibold text-[18px]/[150%] mb-3">
              Personal Info
            </h6>
            <div className="flex flex-col items-center mb-3">
              <div className="relative inline-block mb-[18px]">
                <Image
                  className="rounded-full size-[72px] z-0"
                  src={ProfilePic}
                  alt="Profile Pic"
                />
                <div className="absolute bottom-[-6px] right-[-3px] z-10 rounded-full size-[30px] flex items-center justify-center shadow-[0_5px_30px_0_#19191940] bg-white">
                  <EditPen className="size-[20px]" />
                </div>
              </div>
              <h5 className="font-semibold text-[16px]/[150%]">
                {data?.user?.firstName} {data?.user?.lastName}
              </h5>
            </div>
            <div className="flex flex-col gap-6">
              <hr className="border-1 border-[#E2E8F0]" />
              <div className="flex justify-between">
                <p className="font-semibold text-[13px]/[100%] text-[#7E7E7E]">
                  Date of Birth
                </p>
                <p className="font-medium text-[13px]/[100%]">
                  {new Date(data?.user?.dob).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-[13px]/[100%] text-[#7E7E7E]">
                  Gender
                </p>
                <p className="font-medium text-[13px]/[100%]">
                  {data?.user?.gender}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-[13px]/[100%] text-[#7E7E7E]">
                  Country
                </p>
                <p className="font-medium text-[13px]/[100%]">
                  {data?.user?.country}
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="p-5 bg-white md:w-[312px] w-full flex flex-col gap-6">
            <h6 className="font-semibold text-[18px]/[150%] ">
              Your Klarna Investment Details
            </h6>
            <div className="flex gap-6 justify-between">
              <div>
                <p className="font-medium text-[12px]/[100%] mb-1.5">
                  Your Klarna Shares
                </p>
                <h4 className="font-semibold text-[20px]/[150%]">
                  {data?.user?.shares}
                </h4>
              </div>
              <div>
                <p className="font-medium text-[12px]/[100%] mb-1.5">
                  Current Klarna Price
                </p>
                <h4 className="font-semibold text-[20px]/[150%]">
                  {data?.user?.klarnaPrice}
                </h4>
              </div>
            </div>
            <hr className="border-1 border-[#E2E8F0]" />
            <p className="mb-1.5 font-medium text-[12px]/[100%]">Total Value</p>
            <h4 className="font-semibold text-[20px]/[150%]">
              {data?.user?.totalShareValue}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default page