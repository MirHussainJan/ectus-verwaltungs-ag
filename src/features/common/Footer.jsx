import React from 'react'
import Image from 'next/image'
import Logo from "../../assets/icons/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="lg:py-[45px] lg:px-[7.778vw] py-12 px-4 md:px-6 rounded-b-[50px] bg-[#F5F5F5]">
      <div className="flex justify-between gap-6 flex-col lg:flex-row border-b border-[#D1D5DB]">
        <div>
          <Logo className="w-[241px] h-[40px] mb-4" />
          <p className="lg:mb-[53px] text-[14px]/[20px]">
            Phone: +49 XXX XXX XXXX
            <br />
            <br />
            <strong className="font-bold">Business Hours:</strong> <br />
            Monday to Saturday: <strong>10:00 AM – 9:00 PM</strong> (Central
            European Summer Time, GMT+2)
            <br />
            <br />
            <strong className="font-bold">Break Time:</strong> <br />
            12:00 PM – 2:00 PM (Central European Summer Time, GMT+2)
          </p>
        </div>
        <div className="w-[256px] mb-8">
          <p className="lg:mb-[53px] text-[14px]/[20px]">
            <strong>Contact</strong>
            <br />
            <br />
            info@sk-blackrock
            <br />
            <br />
            +49 XXX XXX XXXX
            <br />
            <br />
            Sandrstraße 104, 40789 Monheim am Rhein, Germany
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 justify-center mt-[18px]">
        <p className="text-[14px]/[20px]">
          <Link href="/impressum">
            <strong className="font-bold">Impressum</strong>
          </Link>
        </p>
        <Link href="/privacy">
          <p className="text-[14px]/[20px]">
            <strong className="font-bold">Data Protection</strong>
          </p>
        </Link>
        <p className="text-[16px]/[24px] font-medium text-[#525252]">
          © Copyright 2025, All Rights Reserved
        </p>
      </div>
    </div>
  );
}
