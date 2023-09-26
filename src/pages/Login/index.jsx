//root
import React from "react";
import Email from "./Components/EmailBtn";
import Pwd from "./Components/PwdBtn";
import Login from "./Components/LogBtn";

function LoginPage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-56 bg-main opacity-30 h-screen"></div>
      <div className="grow flex flex-col justify-center">
        <div className="flex flex-col w-[740px] mx-56">
          <div className="text-5xl pb-12 font-bold">Log in</div>
          <Email />
          <Pwd />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
