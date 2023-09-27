//root
import React from "react";
import Email from "./Components/EmailBtn";
import Pwd from "./Components/PwdBtn";
import Login from "./Components/LogBtn";

function LoginPage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex flex-col justify-center">
        <div className="flex flex-col w-[740px]">
          <div className="text-5xl pb-12 font-bold text-bdblack">버들 로그인</div>
          <div className="text-xl pb-12 text-[#36383B] font-bold">버들에서 <span className="text-main">벗</span>의 가치를 실현해보세요</div>
          <Email />
          <Pwd />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
