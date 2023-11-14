//RightSide
import React from "react";

function RightSide() {
  return (
    <div className="w-full h-full mt-40">
      <div className="text-4xl font-semibold">내 프로필</div>
      <div className="w-full h-32 py-6 px-5 text-2xl items-center">닉네임</div>
      <div className="flex flex-col">
        <div className="w-1/3 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold">나의 버들 시간</div>
          <div className="text-lg font-semibold justify-center text-center items-center"><span className="text-[#749C03] text-5xl">N</span> 시간</div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
