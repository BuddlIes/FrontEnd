//root
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [name, setName] = useState("");
  const [nft, setNFT] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const axiosInstance = axios.create({
        baseURL: "http://52.79.132.18:8443",
      });
      const data = {
        user_number: studentCode,
        name: name,
        email: email,
        password: password,
        wallet: nft,
        nickname: nickname,
      };
      await axiosInstance.post("/join", data).then((response) => {
        console.log(response.data);
        navigate("/login");
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center">
          <form
            id="signin"
            className="flex flex-col py-6 px-5 "
            onSubmit={submitHandler}
          >
            <div className="text-4xl pt-24 pb-8 font-semibold text-bdblack">
              버들 회원가입
            </div>
            <div id="이메일 입력" className="pb-6">
              <div className="text-lg font-bold text-[#161718] pb-3">
                아주대학교 이메일 입력
              </div>
              <input
                type="text"
                placeholder="email@ajou.ac.kr"
                style={{ color: "#161718" }}
                className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="text-lg font-bold text-[#161718] pb-3">
              비밀번호 생성
              <div className="flex pb-6">
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  style={{ color: "#161718" }}
                  className="w-80 h-10 py-4 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div id="닉네임 생성" className="pb-6">
              <div className="text-lg font-bold text-[#161718] pb-3">
                닉네임 생성
              </div>
              <input
                type="text"
                placeholder="닉네임 입력"
                style={{ color: "#161718" }}
                onChange={(e) => setNickName(e.target.value)}
                className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
              />
            </div>
            <div id="이름 입력" className="pb-6 ">
              <div className="text-lg font-bold text-[#161718] pb-3">
                이름 입력
              </div>
              <input
                type="text"
                placeholder="이름을 입력해주세요"
                style={{ color: "#161718" }}
                onClick={(e) => setName(e.target.value)}
                className="w-80 h-10 py-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
              />
            </div>
            <div className="text-lg font-bold text-[#161718] pb-3">
              학번 또는 사번 입력
            </div>
            <input
              type="text"
              placeholder="ex. 202020202"
              style={{ color: "#161718" }}
              onChange={(e) => setStudentCode(e.target.value)}
              className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
            />
            <div className="text-lg font-bold text-[#161718] pb-3">NFT</div>
            <input
              type="text"
              placeholder="ex. 202020202"
              style={{ color: "#161718" }}
              onChange={(e) => setNFT(e.target.value)}
              className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
            />
            <button
              type="submit"
              className="w-full h-11 mt-2 mb-40 bg-white flex-1 py-2.5 px-4 text-base font-semibold border border-[#749C03] text-[#749C03] text-center hover:border-[#ABB1B8] hover:text-white hover:bg-main transition-all rounded-lg"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
