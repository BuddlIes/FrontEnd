//Login
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Link to="/main">
        <button className="w-80 h-12 my-8 bg-main flex-1 py-3 px-4 text-base font-semibold text-white text-center hover:bg-[#D6DBDE] hover:text-[#8A8F94] transition-all rounded-lg">
          로그인
        </button>
      </Link>
      <div className="text-sm text-center text-[#36383B] font-normal">
        버들의 계정이 없으신가요?
        <Link to="/Signup" className="text-[#0080DD] font-semibold">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Login;
