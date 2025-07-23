import React from 'react'
import Section5Img from "../../../assets/images/section5.jpg";
import Image from "next/image";

export const Section5 = () => {
  return (
    <div className="bg-[#F5F5F5] py-12 px-4 md:px-6 lg:px-[8.333vw] lg:py-[85px] flex lg:gap-[11.25vw] flex-col lg:flex-row gap-8 lg:items-center">
      <div className="flex flex-col gap-5 lg:w-[39.375vw]">
        <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] uppercase">
          Backed by Global Strength
        </h2>
        <p className="lg:text-[20px]/[140%] text-[16px]/[140%]">
          As the German division of Blackbox, SK BlackRock Financial leverages
          deep expertise and international networks to deliver best-in-class
          financial services. Our affiliation with global leaders ensures
          unparalleled trust, stability, and access to capital.
        </p>
      </div>
        <Image
          className="rounded-[35px] flex-1 object-cover"
          src={Section5Img}
          alt=""
        />
    </div>
  );
}
