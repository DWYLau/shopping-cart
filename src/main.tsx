import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Base from "./pages/Base/Base"
import Home from "./pages/Home/Home"
import "./reset.css"
import Products from "./pages/Products/Products"
import Checkout from "./pages/Checkout/Checkout"
import Cart from "./pages/Cart/Cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "products", element: <Products /> },
      { path: "checkout", element: <Checkout /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
