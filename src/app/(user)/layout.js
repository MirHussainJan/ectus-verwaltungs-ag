import NavbarPortal from "@/features/common/NavbarPortal";

export default function StaticLayout({ children }) {
  return (
    <>
      <NavbarPortal />
      <div className="bg-[#F4F4F7] h-[calc(100dvh-104px)] w-full">
        {children}
      </div>
    </>

  );
}
