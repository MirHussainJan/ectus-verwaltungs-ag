import Sidebar from "@/features/admin/Sidebar";
import NavbarPortal from "@/features/common/NavbarPortal";

export default function StaticLayout({ children }) {
  return (
    <>
      <NavbarPortal admin />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>

  );
}
