import React from "react";
import ground from "./src/ground.png";
import startBtn from "./src/startBtn.svg";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="">
      <div className=" w-screen h-screen font-bold relative">
        <div className="relative max-h-fit pt-24 bg-[#36383B] ">
          <div className="flex flex-col justify-center h-full text-center m-auto">
            <div className="flex text-center justify-center mt-10">
              <div className="text-5xl text-main ">버들</div>
              <div className="text-5xl text-white">에서</div>
            </div>
            <div className="text-5xl text-white">
              '벗'의 가치를 실현해보세요
            </div>
            <Link to="/login">
              <button className="justify-center block m-auto my-12">
                <img src={startBtn} />
              </button>
            </Link>
            <div className="bg-white py-40">
              <div className=" text-4xl font-bold">버들과 함께하는 삶</div>
              <div className="mt-4 text-2xl font-normal">
                <div>
                  교내 장애인 학우들을 위한 봉사 활동 장려 서비스 입니다.
                </div>
                <div>
                  아주대 주변 봉사 활동을 제공해주며 리워드를 제공하는 선순환
                  구조를 이룹니다.
                </div>
              </div>
            </div>
            <img src={ground} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
