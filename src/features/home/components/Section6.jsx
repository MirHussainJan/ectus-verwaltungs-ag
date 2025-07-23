import React from 'react'
import CheckIcon from "../../../assets/images/sec4-check.png"
import Image from 'next/image';
export const Section6 = () => {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-[8.333vw] lg:py-[85px] flex flex-col lg:gap-[64px] gap-8 items-center">
      <div className="lg:px-[20.833vw]">
        <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] mb-5 md:mb-4 lg:text-center uppercase">
          Strategic Solutions for Growth
        </h2>
        <p className="text-[16px]/[140%] lg:text-[18px]/[28px] text-[#626262] lg:text-center">
          We provide tailored strategies and proven frameworks to help
          businesses scale, attract investors, and succeed in public markets.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="lg:p-[40px] p-6 rounded-[24px] lg:rounded-[48px] bg-[#F5F5F5] flex-1">
          <h3 className="mb-3 font-bold lg:text-[24px]/[32px] text-[20px]/[32px]">
            Klarna
          </h3>
          <p className="lg:text-[18px]/[28px] text-[16px]/[140%] lg:mb-8 mb-5">
            Our expertise in scaling leading fintech platforms is exemplified
            through Klarna—a success story that demonstrates how we guide
            companies from early-stage growth to global market leadership.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Early-Stage Advisory
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Capital Access
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Regulatory Navigation
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Post-IPO Support
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:p-[40px] p-6 rounded-[48px] bg-[#F5F5F5] flex-1">
          <h3 className="mb-3 font-bold lg:text-[24px]/[32px] text-[20px]/[32px]">
            Fscale
          </h3>
          <p className="lg:text-[18px]/[28px] text-[16px]/[140%] lg:mb-8 mb-5">
            Fscale is our proven framework for IPO readiness. We provide
            end-to-end support, ensuring your business is structured for a
            successful listing on the world’s most competitive exchanges.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Comprehensive Assessment
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Structuring & Governance
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Investor Positioning
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Execution & Listing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
