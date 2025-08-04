"use client";
import React from "react";
import Logo from "../../assets/icons/logo";
import LogoAdmin from "../../assets/icons/LogoAdmin";
import Logout from "../../assets/icons/Logout";
import BurgerIcon from "../../assets/icons/BurgerIcon";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useAdminLogout, useUserLogout } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

const NavbarPortal = ({ admin = false, openMenu, setOpenMenu }) => {
  const router = useRouter();

  const { mutate: logoutAdmin, isPending: isAdminLoggingOut } = useAdminLogout(
    () => {
      router.push("/login/admin");
    }
  );

  const { mutate: logoutUser, isPending: isUserLoggingOut } = useUserLogout(
    () => {
      router.push("/login");
    }
  );

  const handleLogout = () => {
    if (admin) {
      logoutAdmin();
    } else {
      logoutUser();
    }
  };

  return (
    <>
      {(isAdminLoggingOut || isUserLoggingOut) && <LoadingBackdrop />}

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
          <Logout onClick={handleLogout} className="text-white size-[24px]" />
        </div>

        {admin && (
          <div className="md:hidden flex items-center justify-center size-[48px] cursor-pointer">
            {openMenu ? (
              <X
                onClick={() => setOpenMenu(!openMenu)}
                className="text-white size-[24px]"
              />
            ) : (
              <BurgerIcon
                onClick={() => setOpenMenu(!openMenu)}
                className="text-white size-[24px]"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarPortal;
