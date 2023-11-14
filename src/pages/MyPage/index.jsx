//Mypage root
import React from "react";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

function MyPage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex justify-start h-screen">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default MyPage;
