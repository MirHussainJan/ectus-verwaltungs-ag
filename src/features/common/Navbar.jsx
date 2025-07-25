"use client";
import React, { useState } from "react";
import Logo from "../../assets/icons/logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = ({ mode = "dark" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const textColor = mode === "dark" ? "text-white" : "text-black";
  const bgOverlay = mode === "dark" ? "bg-black/70" : "bg-white/90";

  const handleNavClick = async (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/?section=${sectionId}`);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex py-8 px-6 md:px-[40px] lg:px-[120px] justify-between items-center">
        <Link href={"/"}>
          <Logo className={textColor} />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Über uns", path: "/#about-us" },
            { name: "Lösungen", path: "/#solutions" },
            { name: "Unser Team", path: "/#our-team" },
            { name: "Kontakt", path: "/#contact-us" },
          ].map((page) => (
            <a
              key={page.name}
              href={page.path}
              onClick={(e) => handleNavClick(e, page.path.replace("/#", ""))}
              className={`${textColor} text-[20px] font-semibold fade-in-delay-500 cursor-pointer`}
            >
              {page.name}
            </a>
          ))}
        </div>
        <button
          className={`md:hidden ${textColor} z-50`}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${bgOverlay} backdrop-blur-md animate-slideDown`}
        >
          <button
            className={`absolute top-6 right-6 ${textColor}`}
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {[
              { name: "Über uns", path: "/#about-us" },
              { name: "Lösungen", path: "/#solutions" },
              { name: "Unser Team", path: "/#our-team" },
              { name: "Kontakt", path: "/#contact-us" },
            ].map((page) => (
              <a
                key={page.name}
                href={page.path}
                onClick={(e) => handleNavClick(e, page.path.replace("/#", ""))}
                className={`${textColor} text-[20px] font-semibold fade-in-delay-500 cursor-pointer`}
              >
                {page.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
