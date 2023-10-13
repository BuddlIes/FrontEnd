import React from "react";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
function MainPage() {
  return (
    <div className="">
      <div className="flex pb-16">
        <LeftSide className="w-56 opacity-30 h-screen " />
        <RightSide />
        <div className="pr-20"></div>
      </div>
    </div>
  );
}

export default MainPage;
