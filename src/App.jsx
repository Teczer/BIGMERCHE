import { useState } from "react";
import { Routes, Route, useLocation, RouterProvider } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Hero from "./component/product/product/Hero";
import Productmain from "./component/product/Productmain";
import Test from "./components/test";
import router from "./Services/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
