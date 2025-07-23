import React from 'react'
import Airbnb from "../../../assets/images/airbnb.png";
import Snowflake from "../../../assets/images/snowflake.png";
import CheckIcon from "../../../assets/images/sec4-check.png";
import Image from "next/image";
export const Section4 = () => {
  return (
    <div className="flex flex-col gap-10 lg:px-[120px] lg:py-[85px] py-12 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-[6.806vw]">
        <div className="lg:w-[31.528vw]">
          <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] uppercase">
            Our Proven Success in Public Markets
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-[16px]/[140%] lg:text-[20px]/[140%] text-[#626262]">
            At SK BlackRock Financial, we have a track record of guiding
            innovative businesses to successful IPOs. Our strategic expertise,
            global network, and hands-on approach have helped numerous companies
            enter and thrive in public markets.
            <br />
            <br />
            <strong className="font-bold text-[#000000]">
              {" "}
              Notable Success Stories:
            </strong>
          </p>
          <div className="flex flex-col gap-1 lg:gap-4">
            <div className="flex gap-4 lg:items-center">
              <Image
                className="size-[45px] hidden lg:block"
                src={Airbnb}
                alt=""
              />
              <Image
                className="size-[18px] mt-1.5 lg:hidden"
                src={CheckIcon}
                alt=""
              />
              <p className="text-[16px]/[28px] lg:text-[18px]/[28px]">
                <strong className="font-bold">Airbnb –</strong> Transformed into
                a global hospitality leader through a landmark IPO.
              </p>
            </div>
            <div className="flex gap-4 lg:items-center">
              <Image
                className="size-[45px] hidden lg:block"
                src={Snowflake}
                alt=""
              />
              <Image
                className="size-[18px] mt-1.5 lg:hidden"
                src={CheckIcon}
                alt=""
              />
              <p className="text-[16px]/[28px] lg:text-[18px]/[28px]">
                <strong className="font-bold">Snowflake –</strong>
                Achieved one of the most significant software IPOs in history.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 lg:gap-8 flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center rounded-[81px] bg-[#F5F5F5] py-6">
          <h2 className="font-bold text-[20px]/[140%] lg:text-[32px]/[140%] text-[#000000] text-center">
            €10B+
          </h2>
          <p className="text-[16px]/[140%] lg:text-[20px]/[140%]">
            Fund Raised
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-[81px] bg-[#F5F5F5] py-6">
          <h2 className="font-bold text-[20px]/[140%] lg:text-[32px]/[140%] text-[#000000]">
            25+
          </h2>
          <p className="text-[16px]/[140%] lg:text-[20px]/[140%] text-center">
            Companies Taken Public
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-[81px] bg-[#F5F5F5] py-6">
          <h2 className="font-bold text-[20px]/[140%] lg:text-[32px]/[140%] text-[#000000]">
            20+
          </h2>
          <p className="text-[16px]/[140%] lg:text-[20px]/[140%] text-center">
            Years of Combined Expertise
          </p>
        </div>
      </div>
    </div>
  );
}
