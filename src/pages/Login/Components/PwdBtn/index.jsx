//Pwd
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Pwd() {
  return (
    <div>
      <div class="flex flex-col">
        <input
          type="text"
          placeholder="비밀번호"
          class="w-80 h-12 rounded-lg py-3 px-4 border border-[#C7CCD0] text-base text-[#ABB1B8]"
        />
        <div className="text-sm text-[#0080DD] text-right">비밀번호 찾기</div>
      </div>
    </div>
  );
}

export default Pwd;
