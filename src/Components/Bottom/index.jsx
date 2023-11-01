import React from "react";

function Bottom() {
  return (
    <div className="border-t fixed bottom-0 bg-white w-full mb-1">
      <div className="text-main text-xl  font-semibold pb-3 pt-3 flex-1">
        Buddle
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex gap-6">
          <div className="text-sm font-normal">
            주소 | 경기도 수원시 월드컵로 206 아주대학교 팔달관 344호
          </div>
          <div className="text-sm font-normal">고객 센터 | @paran_buddle </div>
        </div>
        <div className="grid grid-rows-2 gap-x-3 pb-3 text-base font-semibold">
          버들 이용약관
          <div className="flex gap-10 ">
            <div className="text-sm font-normal">개인정보 처리방침</div>

            <div className="text-sm font-normal">서비스 이용약관 </div>

            <div className="text-sm font-normal"> 위치기반서비스 이용약관 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
