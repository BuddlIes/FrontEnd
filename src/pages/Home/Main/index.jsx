import React from "react";
import ground from "./src/ground.png";
import startBtn from "./src/startBtn.svg";
import { Link } from "react-router-dom";
import clock from "./src/clock.svg";
import luggage from "./src/luggage.svg";
import matching from "./src/matching.svg";
import reward from "./src/reward.svg";
function Main() {
  return (
    <div className="">
      <div className=" max-w-full max-h-full font-bold relative">
        <div className="relative max-h-fit pt-28 bg-[#36383B] ">
          <div className="flex flex-col justify-center h-full text-center m-auto">
            <div className="flex text-center justify-center m-10">
              <div className="text-5xl text-main ">버들</div>
              <div className="text-5xl text-white">에서</div>
            </div>
            <div className="text-5xl text-white">
              '벗'의 가치를 실현해보세요
            </div>
            <Link to="/login">
              <button className="justify-center block m-auto my-24 animate-pulse">
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
              <div className="grid grid-flow-col-dense justify-items-center py-20">
                <div className="grid grid-flow-cols text-xl  justify-items-center">
                  <img src={clock} className="mb-2" />
                  <div>원하는 시간대</div>
                  <div className="font-normal">원하는 시간에 봉사활동 요청</div>
                </div>
                <div className="grid grid-flow-cols text-xl justify-items-center">
                  <img src={matching} className="mb-3" />
                  <div>매칭 시스템</div>
                  <div className="font-normal">
                    요청자의 니즈와 맞는 봉사 지원자 매칭
                  </div>
                </div>
                <div className="grid grid-flow-cols text-xl justify-items-center">
                  <img src={reward} className="mb-6" />
                  <div>리워드 지급</div>
                  <div className="font-normal">
                    유저의 봉사활동 현황에 걸맞는 리워드 지급
                  </div>
                </div>
                <div className="grid grid-flow-cols text-xl justify-items-center">
                  <img src={luggage} className="mb-5" />
                  <div>다양한 봉사</div>
                  <div className="font-normal">
                    이동봉사, 물품요청 등과 같은 다양한 마이크로 봉사 제공
                  </div>
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
