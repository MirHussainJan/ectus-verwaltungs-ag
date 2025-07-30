// app/components/Sidebar.jsx (or wherever you keep it)
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Setting from "../../assets/icons/sidebar/setting";
import Usermanagement from "../../assets/icons/sidebar/usermanagement";
import Klarna from "../../assets/icons/sidebar/klarna";
const BASE = "/admin";
const Sidebar = () => {
  const pathname = usePathname();
  const options = [
    { name: "User Management", route: "/usermanagement", icon: Usermanagement },
    { name: "Klarna", route: "/klarna", icon: Klarna },
    { name: "Setting", route: "/setting", icon: Setting },
  ];

  return (
    <div className="w-[250px] h-[calc(100dvh-104px)] bg-black border-t border-[#545454] p-4">
      <p className="text-[#6C7278] text-[12px]/[150%] mb-3">MAIN MENU</p>
      <div className="flex flex-col gap-2">
        {options.map(({ name, route, icon: Icon }, index) => {
          const fullPath = `${BASE}${route}`;
          const isActive =
            pathname === fullPath || pathname.startsWith(`${fullPath}/`);
          const colorClass = isActive ? "text-white" : "text-[#ACB5BB]";
          return (
            <Link
              key={fullPath}
              href={fullPath}
              className={`flex items-center p-[8.5px_12px] gap-3 rounded-md px-2 py-2 hover:bg-[#111] ${
                isActive
                  ? "bg-[rgba(246,247,250,0.2)] border-1 border-[#6e7179]"
                  : ""
              }`}
            >
              <Icon className={`size-[16px] shrink-0 ${colorClass}`} />
              <p className={`text-[14px]/[150%] font-medium ${colorClass}`}>{name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
