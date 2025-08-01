import React from 'react'
import Logo from "../../assets/icons/logo";
import LogoAdmin from "../../assets/icons/LogoAdmin";
import Logout from "../../assets/icons/Logout";
import BurgerIcon from "../../assets/icons/BurgerIcon";
import { X } from 'lucide-react';
const NavbarPortal = ({admin = false, openMenu, setOpenMenu}) => {
  return (
    <div className="p-[24.5px_16px] bg-black flex justify-between">
      {admin ? (
        <LogoAdmin className="w-[241px] h-[40px] text-white" />
      ) : (
        <Logo className="w-[241px] h-[40px] text-white" />
      )}
      <div
        className={`flex items-center justify-center size-[48px] rounded-full bg-[#FFFFFF29] cursor-pointer ${
          admin && "hidden md:flex"
        }`}
      >
        <Logout className={`text-white size-[24px]`} />
      </div>
      {admin && (
        <div className="md:hidden flex items-center justify-center size-[48px] cursor-pointer">
          {openMenu ? <X onClick={() => setOpenMenu(!openMenu)} className={`text-white size-[24px]`} />
        :  
            <BurgerIcon onClick={() => setOpenMenu(!openMenu)} className={`text-white size-[24px]`} />
        }
        </div>
      )}
    </div>
  );
}

export default NavbarPortal;