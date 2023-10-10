//아주대 이메일 입력
import React, { useEffect, useState } from "react";

function Email() {
    return (
      <div class="flex flex-col py-6 px-5">
        <div className="text-lg text-semibold text-[#161718] pb-3">아주대학교 이메일 입력</div>
        <input
          type="text"
          placeholder="email@ajou.ac.kr"
          class="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
        />
        <div className="text-xs font-normal text-[#CE6429]">이미 가입된 이메일입니다.</div>
      </div>
    );
  }
  
  export default Email;