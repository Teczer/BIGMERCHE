import { Routes, Route, useLocation, RouterProvider } from "react-router-dom";
import router from "./Services/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
