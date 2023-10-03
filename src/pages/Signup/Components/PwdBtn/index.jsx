//비밀번호 생성
import React, { useEffect, useState } from "react";

function Pwd() {
    return (
        <div class="flex flex-col py-3 px-5">
        <div className="text-lg text-semibold text-[#161718] pb-3">비밀번호 생성</div>
        <input
          type="text"
          placeholder="비밀번호 입력"
          class="w-80 h-10 py-2 px-0 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
        />
        <input
          type="text"
          placeholder="비밀번호 입력 재확인"
          class="w-80 h-10 py-2 px-0 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
        />
        <div className="text-xs font-normal text-[#CE6429]">비밀번호가 불일치합니다.</div>
      </div>
    );
  }
  
  export default Pwd;