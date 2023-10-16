import React from "react";
import ToggleBtn from "./Component/ToggleBtn";

function WriteBoardPage() {
  return (
    <div className="w-full">
      <div className=" md:px-56">
        <div className="text-main font-semibold text-xl my-4">카테고리</div>
        <div className="mb-10">
          <ToggleBtn name={"카테고리 선택"} />
        </div>
      </div>
    </div>
  );
}

export default WriteBoardPage;
