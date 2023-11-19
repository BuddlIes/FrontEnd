//root
import React from "react";
import Login from "./Components/LogBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 입력된 이메일 상태
  const [password, setPassword] = useState(""); // 입력된 비밀번호 상태
  const submitHandler = async (e) => {
    e.preventDefault();

    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    try {
      e.preventDefault();

      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      console.log(response);

      const authToken = response.data.data.token;
      const schoolNum = response.data.data.userNum;

      console.log(authToken);

      localStorage.setItem("access_token", authToken);
      localStorage.setItem("schoolNum", schoolNum);

      navigate("/main");
    } catch (error) {
      alert("아이디나 비밀번호가 틀렸습니다");
      console.error("오류", error);
    }
  };
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex flex-col justify-center">
        <div className="flex flex-col items-center pt-24 h-screen">
          <form
            id="signin"
            className="flex flex-col py-6 px-5 "
            onSubmit={submitHandler}
          >
            <div className="text-4xl pb-8 font-semibold text-bdblack text-center">
              버들 로그인
            </div>
            <div className="text-base pb-16 text-[#36383B] font-semibold text-center">
              버들에서 <span className="text-main">벗</span>의 가치를
              실현해보세요
            </div>
            <input
              type="email"
              placeholder="아주대학교 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-80 h-12 rounded-lg py-3 px-4 border border-[#C7CCD0] mb-2 text-base ${
                email ? "text-[#161718]" : "text-[#ABB1B8]"
              }`}
            />
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-80 h-12 rounded-lg py-3 px-4 border border-[#C7CCD0] text-base ${
                  password ? "text-[#161718]" : "text-[#0080DD]"
                }`}
              />
            </div>
            <button
              type="submit"
              className="w-80 h-12 my-8 bg-main flex-1 py-3 px-4 text-base font-semibold text-white text-center hover:bg-[#D6DBDE] hover:text-[#8A8F94] transition-all rounded-lg"
            >
              로그인
            </button>
          </form>
          <div className="text-sm text-center text-[#36383B] font-normal">
            버들의 계정이 없으신가요?
            <Link to="/Signup" className="text-[#0080DD] font-semibold ml-2">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
