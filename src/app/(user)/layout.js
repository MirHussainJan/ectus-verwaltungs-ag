import NavbarPortal from "@/features/common/NavbarPortal";

export default function StaticLayout({ children }) {
  return (
    <>
      <NavbarPortal />
      {children}
    </>

  );
}
