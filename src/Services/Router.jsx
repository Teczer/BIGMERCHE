import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import PanierPage from "../pages/PanierPage";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "panier",
        element: <PanierPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "product/:var",
        element: <Produits />,
      },
    ],
  },
]);

export default router;
