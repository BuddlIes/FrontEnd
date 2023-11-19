//LeftSide
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LeftSide() {
  const [selected, setSelected] = useState("home");
  const onClickHandler = (e) => {
    console.log(e.target.id);
    setSelected(e.target.id);
    console.log(selected);
  };
  return (
    <div className="w-72 h-full ml-12 mr-8 mt-20 flex flex-col">
      <div className="text-4xl font-semibold mb-12 text-[#161718]">My Page</div>
      <Link to="/mypage">
        <button
          id="home"
          className={`${
            selected === "home" ? "bg-[#9fc70033]" : "bg-white"
          } w-72 h-12 rounded-t-lg p-3 text-base font-semibold text-[#161718] border border-[#EFEFE4] text-left`}
          onClick={(e) => onClickHandler(e)}
        >
          Home
        </button>
      </Link>

      <Link
        to="/mypage/VolHistory"
        id="history"
        className={`${
          selected === "history" ? "bg-[#9fc70033]" : ""
        } w-72 h-12 rounded-t-lg p-3 text-base font-semibold text-[#161718] border border-[#EFEFE4] text-left`}
        onClick={(target) => onClickHandler(target)}
      >
        내 봉사 내역
      </Link>
      <Link
        to="/mypage/StampPage"
        id="stamp"
        className={`${
          selected === 2 ? "bg-[#9fc70033]" : ""
        } w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold text-[#161718]`}
        onClick={(target) => onClickHandler(target)}
      >
        스탬프 전체 확인
      </Link>
    </div>
  );
}

export default LeftSide;
