import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import PanierPage from "../pages/PanierPage";
import RootLayout from "../layouts/RootLayout";
import Productmain from "../component/product/Productmain";

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
				element: <Productmain />,
			},
		],
	},
]);

export default router;
