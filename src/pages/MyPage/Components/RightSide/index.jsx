//RightSide
import React, { useState, useEffect } from "react";
import axios from "axios";
import GaugeChart from "react-gauge-chart";
import Modal from "react-modal"

function RightSide() {
  const [Voltime, setVoltime] = useState(0);
  const [Nickname, getNickname] = useState("");
  const studentId = "202020797"; // getStudentId(); // 로컬스토리지에 토큰이 있으니까 토큰으로 유저 구분해서 해당 유저 정보에서 학번 가져오기
  const temperature = 0.5;
  const [isYellowModalOpen, setIsYellowModalOpen] = useState(false);
  const [isGreenModalOpen, setIsGreenModalOpen] = useState(false);
  const [isRedModalOpen, setIsRedModalOpen] = useState(false);

  const openYellowModal = () => {
    setIsYellowModalOpen(true);
  };

  const closeYellowModal = () => {
    setIsYellowModalOpen(false);
  };

  const openGreenModal = () => {
    setIsGreenModalOpen(true);
  };

  const closeGreenModal = () => {
    setIsGreenModalOpen(false);
  };

  const openRedModal = () => {
    setIsRedModalOpen(true);
  };

  const closeRedModal = () => {
    setIsRedModalOpen(false);
  };

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
          <div className="text-3xl font-bold text-right text-[#749C03] mb-3">
            36.5°C
          </div>
          <div className="relative pt-1">
            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-[#F4F4F4] rounded">
              <div
                style={{ width: `${temperature * 100}%` }}
                className="shadow-none flex flex-col whitespace-nowrap justify-center rounded bg-[#749C03] bg-gradient-to-r from-[#9FC700] to-[#F8A5A5]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 mt-12 mr-8 bg-[#EFEFE4] text-2xl font-bold px-5 py-1.5 text-[#36383B]">
        <span className="text-[#749C03] font-extrabold">{Nickname}</span> 님이
        보유하고 계신 <span className="text-[#749C03]">NFT</span> 입니다.
      </div>
      <div className="flex flex-row items-center pt-8 pb-40">
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4" onClick={openYellowModal}>
            <img src="/src/assets/nft1.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-[#161718] font-bold">
            은행이
          </div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4" onClick={openGreenModal}>
            <img src="/src/assets/nft2.png"/>
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-[#161718] font-bold">
            행운이
          </div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4" onClick={openRedModal}>
            <img src="/src/assets/nft3.png"/>
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-[#161718] font-bold">
            단풍이
          </div>
        </div>
      </div>
      <Modal
        isOpen={isYellowModalOpen}
        onRequestClose={closeYellowModal}
        contentLabel="Yellow Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
          <span className="text-[#ffd206]">은행이</span>와 함께라면?
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            편의점 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            리워드를 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeYellowModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeYellowModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isGreenModalOpen}
        onRequestClose={closeGreenModal}
        contentLabel="Green Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            <span className="text-[#8BC501]">행운이</span>와 함께라면?
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            카페 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            리워드를 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeGreenModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeGreenModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isRedModalOpen}
        onRequestClose={closeRedModal}
        contentLabel="Red Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
          <span className="text-[#ff821a]">단풍이</span>와 함께라면?
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            패스트푸드 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            리워드를 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeRedModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeRedModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RightSide;
