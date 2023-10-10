import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
function index() {
  return (
    <div className="px-20">
      <Header />
      <Outlet />
    </div>
  );
}

export default index;
