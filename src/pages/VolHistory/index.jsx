// 봉사내역
import React from "react";
import LeftSide from "../MyPage/Components/LeftSide";
import RightSide from "../VolHistory/RightSide";
function VolHistory() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex justify-start h-screen">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default VolHistory;
