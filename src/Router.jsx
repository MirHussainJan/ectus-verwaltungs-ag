import { createBrowserRouter } from "react-router";
import Landing from "./pages/landing";
import AssetManagementPage from "./pages/asset-management";
import IpoPage from "./pages/ipo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/verm-gensverwaltung",
    element: <AssetManagementPage />,
  },
  {
    path: "/ipo",
    element: <IpoPage />,
  },
]);

export default router;
