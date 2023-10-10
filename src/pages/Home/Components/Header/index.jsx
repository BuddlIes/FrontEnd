import React, { useEffect, useState } from "react";
import Logo from "../../../../../src/assets/WebbyFrames.svg";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Header() {
  return (
    <nav className="w-full bg-white  ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl ">
        <div className="">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-x-3">
          <div className=" hover:bg-main">
            <Link to="/Login">
              <img src={BtnLogin} className="w-[50px]" />
            </Link>
          </div>
          <div className="hover:bg-main">
            <Link to="/Signup">
              <img src={BtnSign} className="w-[50px] " />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
