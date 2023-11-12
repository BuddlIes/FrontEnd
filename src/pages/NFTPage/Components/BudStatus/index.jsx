//사용자의 현재 스탬프 개수 확인
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function BudStatus() {
  const [stampNum, setStampNum] = useState(0);
  const stampCounter = async (e) => {
    e.preventDefault();

    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    try {
      console.log("a");
      e.preventDefault();

      const response = await axiosInstance.get("");
      console.log(response);

      const authToken = response.data.data.token;
      console.log(authToken);
      localStorage.getItem("access");
      
    } catch (error) {
      console.error("오류", error);
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
          <span style={{ color: "#749C03" }}>할인권</span>을 드려요!
        </div>
        <div className="text-base text-left text-bdblack pb-8">
          여러 조건들을 충족시킨 후 다양한 리워드를 받아가세요.
        </div>
        <div className="text-2xl text-left text-bdblack font-bold bg-[#EFEFE4] px-5 py-1.5">
          나의 스탬프는 현재{" "}
          <span style={{ color: "#749C03" }}>N</span>개 입니다.
        </div>
      </div>
    </div>
  );
}

export default BudStatus;
