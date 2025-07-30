import Sidebar from "@/features/admin/Sidebar";
import NavbarPortal from "@/features/common/NavbarPortal";

export default function StaticLayout({ children }) {
  return (
    <>
      <NavbarPortal admin />
      <div className="flex">
        <Sidebar />
        <div className="lg:p-[36px] p-4 md:p-6 bg-[#F4F4F7] h-[calc(100dvh-104px)] w-full">
          {children}
        </div>
      </div>
    </>

  );
}
