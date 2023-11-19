import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function ChatPage() {
  return (
    <div>
      <div className="flex pb-16">
        <RightSide />
        <div className="pr-20"></div>
      </div>
    </div>
  );
}

export default ChatPage;
