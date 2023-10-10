import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigation = useNavigate();
  return (
    <nav className="w-full bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl ">
        <div className="font-extrabold text-main py-3">
          <Link to="/">Buddle </Link>
        </div>
        <div className="flex gap-x-3 text-gray-500 text-sm  max-w-screen-xl  ">
          <div className=" hover:bg-main">
            <Link to="/Login">Log in </Link>
          </div>
          <div className="hover:bg-main text-gray-500">
            <Link to="/SignIn">Sign up </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
    </nav>
  );
}

export default Header;
