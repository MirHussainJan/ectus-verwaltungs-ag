import React from 'react'
import Image from "next/image";
import imagedesk from "../../../assets/images//sec3desk.png";
import imageipad from "../../../assets/images/sec3ipad.png";
import imagemob from "../../../assets/images/sec3mob.png";

export const Section3 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-[90px] gap-8">
      <div className="lg:w-[40vw] w-full">
        <div className="hidden lg:block">
          <Image className="w-full" src={imagedesk} alt="" />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image className="w-full" src={imageipad} alt="" />
        </div>
        <div className="block md:hidden">
          <Image className="w-full" src={imagemob} alt="" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center lg:pr-[8.333vw]">
        <h2 className="font-bold text-[40px]/[130%] lg:pr-[6.042vw] mb-4 uppercase">
          About BlackRock and SK Black Rock Financial
        </h2>
        <div className="flex flex-col gap-4">
          <p className='text-[18px]/[28px] text-[#626262]'>
            BlackRock is one of the most recognized names in the financial
            world, known for its global leadership in asset management.
            Established in 1988 in New York by Larry Fink and seven partners,
            the company initially focused on managing fixed-income securities,
            laying the foundation for its long-term success. Over the decades,
            BlackRock expanded its services to include investment management,
            risk solutions, and advisory services for institutional and private
            clients worldwide.
          </p>
          <p className='text-[18px]/[28px] text-[#626262]'>
            A key milestone in BlackRock’s growth was the 2009 acquisition of
            Barclays Global Investors, which positioned the firm as the largest
            asset manager in the world. Today, BlackRock manages a diverse
            portfolio across multiple asset classes and is a leader in
            exchange-traded funds (ETFs) through its iShares brand, serving
            millions of clients globally.
          </p>
          <p className='text-[18px]/[28px] text-[#626262]'>
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
