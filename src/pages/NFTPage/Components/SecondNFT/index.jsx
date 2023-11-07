//할인율 10% NFT
import React from "react";

function SecondNFT() {
  return (
    <div className="pb-8 border-b">
      <div className="text-2xl py-8 font-bold text-bdblack">
        스탬프 <span className="text-[#749C03]">10</span>개 필요{" "}
        <span className="align-middle text-xl text-[#5D6247]">| 할인율 10%</span>
      </div>
      <div className="flex items-center pt-8">
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mr-2">
            CU 로고
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">편의점</div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mr-2">
            공차 로고
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">카페</div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mr-2">
            맥도날드 로고
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">패스트푸드</div>
        </div>
      </div>
    </div>
  );
}

export default SecondNFT;
