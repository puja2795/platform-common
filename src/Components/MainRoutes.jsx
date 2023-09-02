import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Catalouge from "../Pages/Catalouge";
import Cart from "../Pages/Cart";
import MainLayout from "./MainLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="catelog" element={<Catalouge />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
