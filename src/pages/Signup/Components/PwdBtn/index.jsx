//비밀번호 생성
import React, { useState } from "react";

function Pwd() {
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 재확인 상태

  // 비밀번호 입력란 값이 변경될 때 호출되는 함수
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 비밀번호 재확인 입력란 값이 변경될 때 호출되는 함수
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isPasswordEmpty = password.trim() === ""; // 비밀번호가 비어 있는지 확인

  return (
    <div className="flex flex-col py-6 px-5">
      <div className="text-lg font-bold text-[#161718] pb-3">비밀번호 생성</div>
      <input
        type="text"
        placeholder="비밀번호 입력"
        value={password}
        onChange={handlePasswordChange}
        style={{ color: "#161718" }}
        className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
      />
      <input
        type="text"
        placeholder="비밀번호 입력 재확인"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ color: "#161718" }}
        className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
      />
      {isPasswordEmpty ? (
        <div className="text-xs font-normal text-[#CE6429]">
          비밀번호를 입력해주세요.
        </div>
      ) : password === confirmPassword ? (
        <div className="text-xs font-normal text-[#13BB05]">
          비밀번호가 일치합니다.
        </div>
      ) : (
        <div className="text-xs font-normal text-[#CE6429]">
          비밀번호가 불일치합니다.
        </div>
      )}
    </div>
  );
}

export default Pwd;