"use client";
import React, { useState } from "react";
import Logo from "../../assets/icons/logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = ({ mode = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const textColor = mode === "dark" ? "text-white" : "text-black";
  const bgOverlay = mode === "dark" ? "bg-black/70" : "bg-white/90";

  return (
    <>
      {/* Navbar */}
      <div className="flex py-8 px-6 md:px-[40px] lg:px-[120px] justify-between items-center">
        <Logo className={textColor} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["About Us", "Solutions", "Our Team", "Contact Us"].map((text) => (
            <Link
              key={text}
              href="/"
              className={`${textColor} text-[16px]/[150%] font-bold`}
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Mobile Burger Icon */}
        <button
          className={`md:hidden ${textColor} z-50`}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${bgOverlay} backdrop-blur-md animate-slideDown`}
        >
          <button
            className={`absolute top-6 right-6 ${textColor}`}
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
                className={`${textColor} text-[20px] font-semibold fade-in-delay-500`}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
