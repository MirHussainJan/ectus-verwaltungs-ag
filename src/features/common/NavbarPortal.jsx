import React from 'react'
import Logo from "../../assets/icons/logo";
import LogoAdmin from "../../assets/icons/LogoAdmin";
import Logout from "../../assets/icons/Logout";
const NavbarPortal = ({admin = false}) => {
  return (
    <div className="p-[24.5px_60px] bg-black flex justify-between">
        {admin ? <LogoAdmin className="w-[241px] h-[40px] text-white" /> 
    :    
        <Logo className="w-[241px] h-[40px] text-white" />
    }
      <div
        className="flex items-center justify-center size-[48px] rounded-full bg-[#FFFFFF29] cursor-pointer"
      >
        <Logout className="text-white size-[24px]" />
      </div>
    </div>
  );
}

export default NavbarPortal