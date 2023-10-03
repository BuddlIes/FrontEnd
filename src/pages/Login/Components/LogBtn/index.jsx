//Login
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Login() {
  return (
    <div>
      <div className="w-80 h-12 my-8 bg-main flex-1 py-3 px-4 text-base font-semibold text-white text-center hover:bg-[#D6DBDE] hover:text-[#8A8F94] transition-all rounded-lg">
        로그인
      </div>
      <div className="text-sm text-center text-[#36383B] font-normal">
        버들의 계정이 없으신가요?
        <span className="text-[#0080DD] font-semibold"> 회원가입</span>
      </div>
    </div>
  );
}

export default Login;
