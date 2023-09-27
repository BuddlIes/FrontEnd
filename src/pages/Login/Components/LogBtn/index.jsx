//Login
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Login() {
    return(
        <div>
            <div className="bg-main flex-1 py-3 px-4 text-white text-center hover:bg-[#D6DBDE] hover:text-[#8A8F94] transition-all rounded-lg">로그인</div>
            <div className="border-b border-[#DDE1E6] my-16"></div>
            <div className="text-sm text-main">회원가입하기</div>
        </div>
    );
}

export default Login;