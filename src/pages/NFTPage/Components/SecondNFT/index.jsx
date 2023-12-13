//할인율 10% NFT
import React from "react";

function SecondNFT() {
  return (
    <div className="pb-8 border-b">
      <div className="text-2xl pt-8 font-bold text-bdblack">
        스탬프 <span className="text-[#749C03]">10</span>개 필요{" "}
        <span className="align-middle text-xl text-[#5D6247]">
          | 할인율 10%
        </span>
      </div>
      <div className="flex items-center pt-8">
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] border-dashed mx-4">
            <img src="/src/assets/nft1.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            편의점
          </div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] border-dashed mx-4">
            <img src="/src/assets/nft2.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            카페
          </div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] border-dashed mx-4">
            <img src="/src/assets/nft3.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            패스트푸드
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondNFT;
