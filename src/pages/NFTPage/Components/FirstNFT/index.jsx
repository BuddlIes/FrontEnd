//할인율 5% NFT
import React from "react";

function FirstNFT() {
  return (
    <div className="pb-8 border-b">
      <div className="text-2xl pt-8 font-bold text-bdblack">
        스탬프 <span className="text-[#749C03]">5</span>개 필요{" "}
        <span className="align-middle text-xl text-[#5D6247]">| 할인율 5%</span>
      </div>
      <div className="flex items-center pt-8">
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4">
          <img src="/src/assets/CU(씨유)로고1.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">편의점</div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4">
          <img src="/src/assets/공차.jpg" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">카페</div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4">
          <img src="/src/assets/맥도날드 로고.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">패스트푸드</div>
        </div>
      </div>
    </div>
  );
}

export default FirstNFT;
