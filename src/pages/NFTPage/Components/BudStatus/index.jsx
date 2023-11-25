// 스탬프 개수 확인
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BudStatus() {
  const [StampNum, setStampNum] = useState(0);
  const studentId = localStorage.getItem("schoolNum");

  useEffect(() => {
    // 처음에 한 번 호출
    //updateStampCounter();
    StampCounter();

    // 1초마다 스탬프 개수 업데이트
    const intervalId = setInterval(() => {
      StampCounter(); //updateStampCounter();
    }, 1000);

    // 컴포넌트가 언마운트되면 interval 제거
    return () => clearInterval(intervalId);
  }, []);

  {/*const updateStampCounter = async () => {
    try {
      // 로컬 스토리지에서 StampNum 값을 가져옴
      const localStampNum = localStorage.getItem("StampNum");

      if (localStampNum) {
        // 가져온 값이 있으면 해당 값으로 스탬프 개수 업데이트
        setStampNum(parseInt(localStampNum, 10));
        console.log("로컬 스토리지에서 스탬프 개수 가져옴:", localStampNum);
      } else {
        // 가져온 값이 없으면 서버에서 값을 가져옴
        const response = await axios.get(
          `http://52.79.132.18:8443/stamp/get_stamp_count?user_number=${studentId}`
        );
        setStampNum(response.data);
        console.log("스탬프 개수: ", response.data);
      }
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };*/}

  const StampCounter = async () => {
    const url = `http://52.79.132.18:8443/stamp/get_stamp_count?user_number=${studentId}`;

    try {
      const response = await axios.get(url);
      setStampNum(response.data);
      console.log("스탬프 개수: ", response.data);
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };

  return (
    <div>
      <div className="max-w-2xl">
        <div className="text-4xl text-left pt-36 pb-2.5 font-semibold text-bdblack">
          벗을 위해 준비했어요
        </div>
        <div className="text-base text-left text-bdblack">
          버들에서 가치를 실현한 벗을 위해{" "}
          <span className="text-[#749C03]">할인권</span>을 드려요!
        </div>
        <div className="text-base text-left text-bdblack pb-8">
          스탬프 개수를 충족시킨 후 다양한{" "}
          <span className="text-[#749C03]">NFT</span>를 발급받으세요.
        </div>
        <div className="flex justify-between items-center text-2xl text-left text-bdblack font-bold bg-[#EFEFE4] px-5 py-1.5">
          <div>
            나의 스탬프는 현재{" "}
            <span className="text-[#749C03]">{StampNum}</span>개 입니다.
          </div>
          <Link to="/mypage/StampPage" className="text-end text-sm font-normal underline">더 보기</Link>
        </div>
      </div>
    </div>
  );
}

export default BudStatus;
