 /*import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./RTK/store";

import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Category from "./Category";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <Category category="all" /> },
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);*/
























































 /*import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./RTK/store";

import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Category from "./Category";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Log from "./Log";   // ✅ استدعاء صفحة تسجيل الدخول
import Reg from "./Reg";   // ✅ استدعاء صفحة التسجيل

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <Category category="all" /> },
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "log", element: <Log /> },   // ✅ إضافة Route لتسجيل الدخول
      { path: "reg", element: <Reg /> },   // ✅ إضافة Route للتسجيل
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
); */









































/*import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./RTK/store";

import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Category from "./Category";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Log from "./Log";
import Reg from "./Reg";
import Checkout from "./Checkout.jsx";        // ✅ أضف هذا
import ThankYou from "./ThankYou.jsx";        // ✅ أضف هذا
import GoogleLogin from "./GoogleLogin"; // ✅ أضف استيراد GoogleLogin
import AdminDashboard from "./AdminDashboard"; // ✅ أضف هذا  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <Category category="all" /> },
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "log", element: <Log /> },
      { path: "reg", element: <Reg /> },
      { path: "google-login", element: <GoogleLogin /> }, // ✅ أضف هذا المسار
      { path: "checkout", element: <Checkout /> },        // ✅ أضف هذا
      {path: "AdminDashboard", element: <AdminDashboard />}, // ✅ أضف هذا
      { path: "thank-you", element: <ThankYou /> },       // ✅ أضف هذا
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);*/














import React from "react";
import ReactDOM from "react-dom/client";
import {  createHashRouter , RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./RTK/store";

import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Category from "./Category";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Log from "./Log";
import Reg from "./Reg";
import Checkout from "./Checkout.jsx";
import ThankYou from "./ThankYou.jsx";
import GoogleLogin from "./GoogleLogin";
import AdminDashboard from "./AdminDashboard";

const router =  createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <Category category="all" /> },
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "log", element: <Log /> },
      { path: "reg", element: <Reg /> },
      { path: "google-login", element: <GoogleLogin /> },
      { path: "checkout", element: <Checkout /> },
      { path: "AdminDashboard", element: <AdminDashboard /> },
      { path: "thank-you", element: <ThankYou /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);