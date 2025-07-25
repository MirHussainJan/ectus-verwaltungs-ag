import React from 'react'
import Section5Img from "../../../assets/images/section5.jpg";
import Image from "next/image";

export const Section5 = () => {
  return (
    <div className="bg-[#F5F5F5] py-12 px-4 md:px-6 lg:px-[8.333vw] lg:py-[85px] flex lg:gap-[11.25vw] flex-col lg:flex-row gap-8 lg:items-center">
      <div className="flex flex-col gap-5 lg:w-[39.375vw]">
        <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] uppercase">
          Gestützt durch globale Stärke
        </h2>
        <p className="lg:text-[20px]/[140%] text-[16px]/[140%]">
          Als deutsche Niederlassung von Blackbox nutzt SK BlackRock Financial
          tiefgreifende Expertise und internationale Netzwerke, um
          Finanzdienstleistungen auf höchstem Niveau zu erbringen. Unsere
          Verbindung zu globalen Marktführern garantiert unvergleichliches
          Vertrauen, Stabilität und Zugang zu Kapital.
        </p>
      </div>
      <Image
        style={{
          objectFit: "cover",
          height: "468px",
          width: "auto",
          maxHeight: "468%",
          minHeight: "468%",
        }}
        className="rounded-[35px] lg:max-w-[50%] flex-1 object-cover"
        src={Section5Img}
        alt=""
      />
    </div>
  );
}
