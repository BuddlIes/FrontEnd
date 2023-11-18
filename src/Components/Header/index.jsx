import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BuddleIcon from "./Icon/Rectangle.svg";
import ChatIcon from "./Icon/ChatIcon.svg";
import MypageIcon from "./Icon/MypageIcon.svg";
import Login from "./Icon/square.and.pencil.svg";

function Header() {
  const navigation = useNavigate();
  return (
    <nav className="w-full bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
        <div className=" text-main py-3">
          <Link to="/">
            <div className="flex gap-2">
              <img src={BuddleIcon} className="w-4" />
              <div className="text-2xl font-bold">Buddle</div>
            </div>
          </Link>
        </div>
        <div className="flex gap-x-3 text-gray-500 text-sm  max-w-screen-xl  ">
          <div className="">
            <Link to="/NFT">
              <div className="flex gap-2">
                <img src={BuddleIcon} className="w-4" />
                <div className="text-sm font-semibold text-gray05 hover:text-main">
                  NFT
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/mypage">
              <div className="flex gap-2">
                <img src={MypageIcon} />
                <div className="text-sm font-semibold text-gray05 hover:text-main">
                  my page
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/login">
              <div className="flex gap-2">
                <img src={Login} />
                <div className="text-sm font-semibold text-gray05 pl-3 hover:text-main">
                  log in
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
    </nav>
  );
}

export default Header;
