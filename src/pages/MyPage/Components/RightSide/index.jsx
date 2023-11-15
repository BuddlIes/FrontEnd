//RightSide
import React, { useState, useEffect } from "react";
import axios from "axios";

function RightSide() {
  const [Voltime, setVoltime] = useState(0);
  const [Nickname, getNickname] = useState("");
  const studentId = "202020001"; // 사용자 학번

  useEffect(() => {
    VolunteerTime();
    VolNickname();
  }, []);

  const VolunteerTime = async () => {
    const url = `http://52.79.132.18:8443/volunteer/get_my_completed_volInfo?whoVol=${studentId}`;

    try {
      const response = await axios.get(url);
      console.log("봉사 시간 연동 성공");
      setVoltime(response.data.totalVolunteerTime);
      console.log(Voltime);
      console.log(response.data.totalVolunteerTime);
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };

  const VolNickname = async () => {
    const url = `http://52.79.132.18:8443/join/=${studentId}`;

    try {
      const response = await axios.get(url);
      console.log("닉네임 연동 성공");
      getNickname(response.data.nickname);
      console.log(Nickname);
      console.log(response.data.nickname);
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };

  return (
    <div className="w-full h-full mt-20">
      <div className="text-4xl font-semibold text-[#161718]">
        한 눈에 보는 <span className="text-[#749C03]">버들</span>
      </div>
      <div className="flex flex-row mr-8 gap-3 mt-12">
        <div className="w-1/2 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">
            나의 봉사 시간
          </div>
          <div className="text-lg font-semibold justify-center text-center items-center text-[#161718]">
            <span className="text-[#749C03] text-5xl">{Voltime}</span> 시간
          </div>
        </div>
        <div className="w-1/2 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">
            나의 스탬프 개수
          </div>
          <div className="text-lg font-semibold justify-center text-center items-center text-[#161718]">
            <span className="text-[#749C03] text-5xl">N</span> 개
          </div>
        </div>
      </div>
      <div className="h-12 mt-8 mr-8 bg-[#EFEFE4] text-2xl font-bold px-5 py-1.5 text-[#36383B]">
        <span>{Nickname}</span> 님이 보유하고 계신 <span className="text-[#749C03]">NFT</span> 입니다.
      </div>
    </div>
  );
}

export default RightSide;