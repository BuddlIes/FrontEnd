import React from "react";
import StartBtn from "../../../assets/StartBtn.svg";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="">
      <div className="w-full h-screen py-28 pl-40 bg-home font-bold">
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
    </div>
  );
}

export default Main;
