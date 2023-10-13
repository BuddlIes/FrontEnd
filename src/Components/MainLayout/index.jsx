import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Bottom from "../Bottom";
function index() {
  return (
    <div className="px-20">
      <Header />
      <Outlet />
      <Bottom />
    </div>
  );
}

export default index;
