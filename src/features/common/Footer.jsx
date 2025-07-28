import React from 'react'
import Image from 'next/image'
import Logo from "../../assets/icons/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      id="contact-us"
      className="lg:py-[45px] lg:px-[7.778vw] py-12 px-4 md:px-6 rounded-b-[50px] bg-[#F5F5F5]"
    >
      <div className="flex justify-between gap-6 flex-col lg:flex-row border-b border-[#D1D5DB]">
        <div>
          <Logo className="w-[241px] h-[40px] mb-4" />
          <p className="lg:mb-[53px] text-[14px]/[20px]">
            Telefon: 0180546315
            <br />
            <br />
            <strong className="font-bold">Geschäftszeiten:</strong> <br />
            Montag bis Freitag: <strong>10:00 – 19:00 Uhr</strong> <br />
            Samstag: <strong>10:00 - 15:00 Uhr</strong> <br />
            <br />
            Mittags Pause:
            <strong> 12:00 - 13:00 Uhr</strong>
          </p>
        </div>
        <div className="w-[256px] mb-8">
          <p className="lg:mb-[53px] text-[14px]/[20px]">
            <strong>Kontakt</strong>
            <br />
            <br />
            info@sk-blackrock-financial.com
            <br />
            <br />
            0180546315
            <br />
            <br />
            Sandstraße 104 <br />
            02173 Monheim am Rhein
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
            <strong className="font-bold">Datenschutz</strong>
          </p>
        </Link>
        <p className="text-[16px]/[24px] font-medium text-[#525252]">
          © Copyright 2025, Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  );
}
