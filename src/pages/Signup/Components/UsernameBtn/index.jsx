//닉네임 설정
import React, { useEffect, useState } from "react";

function Username() {
  return (
    <div class="flex flex-col pt-6 pb-24 px-5">
      <div className="text-lg text-semibold text-[#161718] pb-3">
        닉네임 생성
      </div>
      <input
        type="text"
        placeholder="닉네임 입력"
        class="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
      />
      <div className="text-xs font-normal text-[#CE6429]">
        이미 사용중인 닉네임입니다.
      </div>
    </div>
  );
}

export default Username;
