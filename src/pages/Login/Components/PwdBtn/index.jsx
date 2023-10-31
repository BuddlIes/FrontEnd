//Pwd
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";

function Pwd() {
  const [password, setPassword] = useState(""); // 입력된 비밀번호 상태

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // 입력된 비밀번호 업데이트
  };

  return (
    <div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          className={`w-80 h-12 rounded-lg py-3 px-4 border border-[#C7CCD0] text-base ${
            password ? "text-[#161718]" : "text-[#0080DD]"
          }`}
        />
        <div className="text-sm text-[#0080DD] text-right">비밀번호 찾기</div>
      </div>
    </div>
  );
}

export default Pwd;

