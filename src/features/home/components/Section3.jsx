import React from 'react'
import Image from "next/image";
import image from "../../../assets/images/sec3.png";

export const Section3 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-[90px] gap-8">
      <div className="lg:w-[45.972vw] relative py-12">
        <div className="absolute bg-[#F3F4F7] top-0 left-0 w-full h-[85%] -z-10"></div>
        <div className="absolute bg-[#F3F4F7] bottom-0 left-0 w-[85%] h-full -z-10"></div>
        <Image
          className="w-[92.07vw] lg:w-[41.944vw] h-full object-cover rounded-r-[36px]"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-center px-6  lg:pr-[8.333vw] py-10">
        <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] lg:pr-[6.042vw] mb-4 uppercase">
          About BlackRock and SK Black Rock Financial
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-[16px]/[140%] lg:text-[18px]/[28px] text-[#626262]">
            BlackRock is one of the most recognized names in the financial
            world, known for its global leadership in asset management.
            Established in 1988 in New York by Larry Fink and seven partners,
            the company initially focused on managing fixed-income securities,
            laying the foundation for its long-term success. Over the decades,
            BlackRock expanded its services to include investment management,
            risk solutions, and advisory services for institutional and private
            clients worldwide.
          </p>
          <p className="text-[18px]/[28px] text-[#626262]">
            A key milestone in BlackRock’s growth was the 2009 acquisition of
            Barclays Global Investors, which positioned the firm as the largest
            asset manager in the world. Today, BlackRock manages a diverse
            portfolio across multiple asset classes and is a leader in
            exchange-traded funds (ETFs) through its iShares brand, serving
            millions of clients globally.
          </p>
          <p className="text-[18px]/[28px] text-[#626262]">
            In line with this global expansion, 2023 saw the establishment of SK
            Black Rock Financial GmbH in Monheim am Rhein, Germany, under the
            management of Mustafa Sizan. While SK Black Rock Financial operates
            independently, it aligns with the principles and expertise that have
            made BlackRock a trusted name in the industry. Our mission is to
            provide German and European businesses with access to world-class
            financial strategies, specializing in IPO preparation and market
            entry solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
