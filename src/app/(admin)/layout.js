"use client";
import { useState } from "react";
import Sidebar from "@/features/admin/Sidebar";
import NavbarPortal from "@/features/common/NavbarPortal";

export default function StaticLayout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <NavbarPortal admin openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="flex">
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="lg:p-[36px] p-4 md:p-6 bg-[#F4F4F7] h-[calc(100dvh-104px)] w-full relative">
          {openMenu &&
            <div className="absolute z-2 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>}
          {children}
        </div>
      </div>
    </>

  );
}
