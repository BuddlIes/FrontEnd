import React from "react";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
function MainPage() {
  return (
    <div className="">
      <div className="flex">
        <LeftSide className="w-56 opacity-30 h-screen" />
        <RightSide />
      </div>
    </div>
  );
}

export default MainPage;
