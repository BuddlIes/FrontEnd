//학번 및 사번 입력
import React, { useEffect, useState } from "react";

function ID() {
    return (
        <div className="flex flex-col py-6 px-5">
        <div className="text-lg font-bold text-[#161718] pb-3">학번 또는 사번 입력</div>
        <input
          type="text"
          placeholder="ex. 202020202"
          style={{ color: "#161718" }}
          className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
        />
        <div className="text-xs font-normal text-[#CE6429]">이미 가입된 학번 또는 사번입니다.</div>
      </div>
    );
  }
  
  export default ID;