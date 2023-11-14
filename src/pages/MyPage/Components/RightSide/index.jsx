//RightSide
import React from "react";

function RightSide() {
  return (
    <div className="w-full h-full mt-20">
      <div className="text-4xl font-semibold text-[#161718]">내 프로필</div>
      <div className="w-full h-32 py-6 px-5 text-2xl items-center text-[#161718]">닉네임</div>
      <div className="flex flex-row mr-8 gap-3">
        <div className="w-1/2 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">나의 버들 시간</div>
          <div className="text-lg font-semibold justify-center text-center items-center text-[#161718]"><span className="text-[#749C03] text-5xl">N</span> 시간</div>
        </div>
        <div className="w-1/2 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">나의 스탬프 개수</div>
          <div className="text-lg font-semibold justify-center text-center items-center text-[#161718]"><span className="text-[#749C03] text-5xl">N</span> 개</div>
        </div>
      </div>
      <div className="h-12 mt-8 mr-8 bg-[#EFEFE4] text-2xl font-bold px-5 py-1.5 text-[#36383B]">
        나의 스탬프는 현재 <span className="text-[#749C03]">N</span>개 입니다.
      </div>
    </div>
  );
}

export default RightSide;
