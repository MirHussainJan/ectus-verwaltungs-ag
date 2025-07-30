import { Footer } from "@/features/common/Footer";

export default function StaticLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>

  );
}
