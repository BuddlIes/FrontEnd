//RightSide
import React, { useState, useEffect } from "react";
import axios from "axios";
import GaugeChart from "react-gauge-chart";

function RightSide() {
  const [Voltime, setVoltime] = useState(0);
  const [Nickname, getNickname] = useState("");
  const studentId = "202020001"; // getStudentId(); // 로컬스토리지에 토큰이 있으니까 토큰으로 유저 구분해서 해당 유저 정보에서 학번 가져오기
  const temperature = 0.75; //

  useEffect(() => {
    VolunteerTime();
    VolNickname();
  }, []);

  {
    /*const getStudentId = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    try {
      const authToken = localStorage.getItem("access_token");

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const data = await axiosInstance.get(
        `/volunteer/get_volunteer_content?volunteerId=`, // 수정필요 rquest: token , response: user info
        config
      );

      return data.data.studentId; // db에 있는 key값 확인해서 studentId 수정
    } catch (e) {
      console.log(e);
    }
  };*/
  }

  const VolunteerTime = async () => {
    const url = `http://52.79.132.18:8443/volunteer/get_my_completed_volInfo?whoVol=${studentId}`;

    try {
      const response = await axios.get(url);
      //setVoltime(response.data.completedVolList[0].volTime); // 0 = user_index 게시글 하나씩 봉사시간
      setVoltime(response.data.totalVolunteerTime); //게시글 기준 전체 봉사 시간
      console.log("총 봉사시간: ", response.data.totalVolunteerTime);
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };

  const VolNickname = async () => {
    const url = `http://52.79.132.18:8443/volunteer/get_my_completed_volInfo?whoVol=${studentId}`;

    try {
      const response = await axios.get(url);
      getNickname(response.data.userNickname);
      console.log(response.data);
      console.log("닉네임: ", response.data.userNickname);
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
        <div className="w-1/3 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">
            나의 봉사 시간
          </div>
          <div className="text-lg font-semibold justify-center text-center items-center text-[#161718]">
            <span className="text-[#749C03] text-5xl">{Voltime}</span> 시간
          </div>
        </div>
        <div className="w-1/3 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">
            나의 스탬프 개수
          </div>
          <div className="text-lg font-semibold justify-center text-center items-center text-[#161718]">
            <span className="text-[#749C03] text-5xl">N</span> 개
          </div>
        </div>
        <div className="w-1/3 h-36 border border-[#D6DBDE] rounded-lg py-6 px-5">
          <div className="text-lg font-semibold mb-2 text-[#161718]">
            나의 버들 온도
          </div>
          <div className="text-2xl font-bold text-right text-[#749C03] mb-3">
            36.5°C
          </div>
          <div className="relative pt-1">
            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-[#F4F4F4] rounded">
              <div
                style={{ width: `${temperature * 100}%` }}
                className="shadow-none flex flex-col whitespace-nowrap justify-center bg-[#749C03]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 mt-12 mr-8 bg-[#EFEFE4] text-2xl font-bold px-5 py-1.5 text-[#36383B]">
        <span className="text-[#749C03] font-extrabold">{Nickname}</span> 님이
        보유하고 계신 <span className="text-[#749C03]">NFT</span> 입니다.
      </div>
    </div>
  );
}

export default RightSide;
