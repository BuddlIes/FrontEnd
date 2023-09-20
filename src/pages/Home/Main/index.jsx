import React from "react";
import StartBtn from "../../../assets/StartBtn.svg";
import { Link } from "react-router-dom";
import MidCont from "./Components/MidCont";
import Line from "./assets/line.svg";
function Main() {
  return (
    <div className="">
      <div className="w-full h-screen py-28 pl-40 bg-home font-bold relative">
        <div className="grid grid-rows-1 place-content-stretch">
          <div className="justify-center">
            <div className="text-5xl pb-3">버들에서</div>
            <div className="text-5xl">'벗'의 가치를 실현해보세요</div>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/Login">
            <button>
              <img src={StartBtn} />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full absolute top-1/2 ">
        <MidCont />
      </div>
      <div className="w-full bg-home">
        <div>
          <div className="px-20 text-2xl font-bold pt-12">Buddle</div>
          <div className="pt-12 px-20 text-black">
            <hr className="border-black border-1" />
          </div>
          <div className="px-20 py-12">Buddle @2023. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
