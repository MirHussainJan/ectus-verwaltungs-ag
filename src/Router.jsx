import { createBrowserRouter } from "react-router";
import Landing from "./pages/landing";
import AssetManagementPage from "./pages/asset-management";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/verm-gensverwaltung",
    element: <AssetManagementPage />,
  },
]);

export default router;
