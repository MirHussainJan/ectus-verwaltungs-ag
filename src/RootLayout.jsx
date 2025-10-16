import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  return <Outlet />;
}
