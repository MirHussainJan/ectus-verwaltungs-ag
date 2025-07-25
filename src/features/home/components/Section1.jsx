"use client";

import Image from "next/image";
import backgroundImg from "../../../assets/images/section1bg.jpg";
import { Navbar } from "@/features/common/Navbar";

export const Section1 = () => {
  return (
    <div className="relative h-[85dvh] flex flex-col">
      {/* Background and Overlay */}
      <Image
        src={backgroundImg}
        alt=""
        fill
        className="object-cover -z-10 rounded-t-[50px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,_rgba(7,24,34,0.76),_rgba(7,24,34,0.76))] -z-10 rounded-t-[50px]"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex w-full h-full flex-col items-center justify-center px-6 md:px-[23.056vw]">
        <h2 className="font-bold text-white text-[32px]/[130%] lg:text-[48px]/[130%] text-center fade-in-delay-500">
          SK BlackRock Financial – Deutsche Niederlassung von BlackRock,
          spezialisiert auf Börsengänge (IPOs)
        </h2>
        <p className="text-white text-[20px]/[165%] text-center mt-4 px-[11.111vw] fade-in-delay-1000">
          Wir unterstützen Unternehmen beim Wachstum durch strategische
          Börsengänge und finanzielle Fachkompetenz.
        </p>
      </div>
    </div>
  );
};
