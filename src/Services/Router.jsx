import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import PanierPage from "../pages/PanierPage";
import RootLayout from "../layouts/RootLayout";
import Productmain from "../component/product/Productmain";
import Jewelery from "../components/category/Jewelery";

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
        path: "detail",
        element: <DetailPage />,
      },
      {
        path: "product/:id",
        element: <Productmain />,
      },
      {
        path: "category/:category",
        element: <Jewelery />,
      },
    ],
  },
]);

export default router;
