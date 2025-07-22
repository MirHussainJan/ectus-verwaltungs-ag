"use client";

import Image from "next/image";
import backgroundImg from "../../../assets/images/section1bg.jpg";
import Logo from "../../../assets/icons/logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-[85dvh] flex flex-col">
      {/* Background and Overlay */}
      <Image src={backgroundImg} alt="" fill className="object-cover -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,_rgba(7,24,34,0.76),_rgba(7,24,34,0.76))] -z-10"></div>

      {/* Navbar */}
      <div className="flex py-8 px-6 md:px-[40px] lg:[120px] justify-between items-center">
        <Logo className="text-white" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["About Us", "Solutions", "Our Team", "Contact Us"].map((text) => (
            <Link
              key={text}
              href="/"
              className="text-white text-[16px]/[150%] font-bold"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md animate-slideDown">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {["About Us", "Solutions", "Our Team", "Contact Us"].map((text) => (
              <Link
                key={text}
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-white text-[20px] font-semibold fade-in-delay-500"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex w-full h-full flex-col items-center justify-center px-6 md:px-[23.056vw]">
        <h2 className="font-bold text-white text-[32px]/[130%] lg:text-[48px]/[130%] text-center fade-in-delay-500">
          SK BlackRock Financial – German Division of BlackRock, Specializing in
          IPO Listings
        </h2>
        <p className="text-white text-[20px]/[165%] text-center mt-4 px-[11.111vw] fade-in-delay-1000">
          Empowering businesses to scale through strategic IPO launches and
          financial expertise.
        </p>
      </div>
    </div>
  );
};
