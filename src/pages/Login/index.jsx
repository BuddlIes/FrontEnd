//root
import React from "react";
import Email from "./Components/EmailBtn";
import Pwd from "./Components/PwdBtn";
import Login from "./Components/LogBtn";

function LoginPage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex flex-col justify-center">
        <div className="flex flex-col items-center pt-24 h-screen">
          <div className="text-4xl pb-8 font-semibold text-bdblack">
            버들 로그인
          </div>
          <div className="text-base pb-16 text-[#36383B] font-semibold">
            버들에서 <span className="text-main">벗</span>의 가치를 실현해보세요
          </div>
          <Email />
          <Pwd />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
