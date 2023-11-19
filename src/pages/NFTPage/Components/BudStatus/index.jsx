// 스탬프 개수 확인
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BudStatus() {
  const [StampNum, getStampNum] = useState(0);
  const studentId = localStorage.getItem("schoolNum");

  useEffect(() => {
    StampCounter();
  }, []);

  const StampCounter = async () => {
    const url = `http://52.79.132.18:8443/stamp/get_stamp_count?user_number=${studentId}`;

    try {
      const response = await axios.get(url);
      getStampNum(response.data);
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
