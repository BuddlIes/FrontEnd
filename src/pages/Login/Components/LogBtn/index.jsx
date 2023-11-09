//Login
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
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
