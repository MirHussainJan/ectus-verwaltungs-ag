import React from 'react'
import Image from 'next/image'
import Section8desk from "../../../assets/images/Section8desk.png";
import Section8ipad from "../../../assets/images/Section8ipad.png";
import Section8mob from "../../../assets/images/Section8mob.png";

export const Section8 = () => {
  return (
    <div className="relative lg:py-[143px] lg:px-[9.167vw] px-4 md:py-[91px] py-[64px]">
      <Image
        className="object-cover absolute top-0 left-0 w-full h-full -z-10 hidden lg:block"
        src={Section8desk}
        alt=""
      />
      <Image
        className="object-cover absolute top-0 left-0 w-full h-full -z-10 hidden md:block lg:hidden"
        src={Section8ipad}
        alt=""
      />
      <Image
        className="object-cover absolute top-0 left-0 w-full h-full -z-10 md:hidden"
        src={Section8mob}
        alt=""
      />
      <div className="bg-white lg:rounded-[204px] rounded-[88px] lg:px-[4.444vw] lg:py-[64px] py-[48px] px-[24px] flex-1">
        <h2 className="font-bold lg:text-[48px]/[100%] text-[32px]/[100%] text-center lg:px-[8.993vw] uppercase">
          Ready to Take Your Company Public?
        </h2>
        <p className="text-[16px]/[140%] text-center mt-4 lg:px-[18.472vw]">
          Your IPO journey starts with a single conversation. Speak directly
          with our team of experts today.
        </p>
      </div>
    </div>
  );
  
}
