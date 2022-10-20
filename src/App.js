import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import { userInputs, productInputs } from "./formData";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/:userId",
    element: <Single />,
  },
  {
    path: "/products/:productId",
    element: <Single />,
  },
  {
    path: "/users",
    element: <Customers />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/users/:userId/new",
    element: <New inputs={userInputs} title={"Add New User"} />,
  },
  {
    path: "/products/:productId/new",
    element: <New inputs={productInputs} title={"Add New Product"} />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
