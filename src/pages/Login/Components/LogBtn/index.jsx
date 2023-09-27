//Login
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Login() {
    return(
        <div>
            <div className="bg-[#C0C4B6] flex-1 py-3 px-4 text-white text-center hover:bg-main transition-all">Log In</div>
            <div className="border-b border-[#DDE1E6] my-16"></div>
            <div className="text-sm text-main">회원가입하기</div>
        </div>
    );
}

export default Login;