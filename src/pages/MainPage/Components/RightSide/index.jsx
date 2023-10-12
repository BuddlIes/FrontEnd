import React from "react";
import FilterBtnBox from "../FilterBtnBox";
import { Filter } from "@mui/icons-material";
function RightSide() {
  const onClickHandler = (e) => {
    console.log("clicked");
  };
  const buttonsNameList = [];
  return (
    <div className="py-36 pl-11 w-full">
      <div className="flex flex-initial md:flex md:gap-10 ">
        <div className="text-3xl font-bold pb-12">오늘의 벗</div>

        <button
          className="ml-48 h-8 w-36 text-white bg-main rounded-3xl hover:bg-green-700"
          onClick={onClickHandler}
        >
          글 작성하기
        </button>
      </div>
      <FilterBtnBox />
    </div>
  );
}

export default RightSide;
