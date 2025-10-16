import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Landing from "./pages/landing";
import AssetManagementPage from "./pages/asset-management";
import IpoPage from "./pages/ipo";
import ArbitragePage from "./pages/arbitrage";
import Impressum from "./pages/Impressum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "verm-gensverwaltung", element: <AssetManagementPage /> },
      { path: "ipo", element: <IpoPage /> },
      { path: "arbitrage", element: <ArbitragePage /> },
      { path: "impressum", element: <Impressum /> },
    ],
  },
]);

export default router;
