//root
import React from "react";
import Email from "./Components/EmailBtn";
import Pwd from "./Components/PwdBtn";
import ID from "./Components/IDBtn";
import Username from "./Components/UsernameBtn";
import Duplicate from "./Components/DuplicatecheckBtn";
import Signup from "./Components/SignupBtn";

function SignupPage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl pt-24 pb-8 font-semibold text-bdblack">
            버들 회원가입
          </div>
          <Email />
          <Username />
          <Duplicate />
          <Pwd />
          <ID />
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
