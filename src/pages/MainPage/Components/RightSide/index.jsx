import React from "react";
import FilterBtnBox from "../FilterBtnBox";
import { Filter } from "@mui/icons-material";
import SweetPotato from "../Card/SweetPotato.jpg";

import Card from "../Card";
function RightSide() {
  const onClickHandler = (e) => {
    console.log("clicked");
  };
  const buttonsNameList = [];
  const write_list = [
    {
      title: "제목 1",
      image: "",
      location: "광교관",
      time: "12시 32분",
      hash: "이동봉사",
    },
    {
      title: "제목 2",
      image: "",
      location: "원천관",
      time: "12시 32분",
      hash: "물품구매",
    },
    {
      title: "제목 3",
      image: "",
      location: "일신관",
      time: "12시 32분",
      hash: "대필작업",
    },
    {
      title: "제목 4",
      image: "",
      location: "일신관",
      time: "12시 32분",
      hash: "대필작업",
    },
    {
      title: "제목 5",
      image: "",
      location: "일신관",
      time: "12시 32분",
      hash: "대필작업",
    },
  ];

  return (
    <div className="py-36 pl-11 w-full">
      <div className="md:flex md:flex-initial md:gap-10 ">
        <div className="text-3xl font-bold pb-12">오늘의 벗</div>

        <button
          className="ml-48 h-8 w-36 text-white bg-main rounded-3xl hover:bg-green-700"
          onClick={onClickHandler}
        >
          글 작성하기 ✏️
        </button>
      </div>
      <FilterBtnBox />
      <div className="grid grid-cols-4 gap-3">
        {write_list.map((box) => (
          <Card
            image={box.image}
            hashtag={box.hash}
            title={box.title}
            location={box.location}
            time={box.time}
          />
        ))}
      </div>
    </div>
  );
}

export default RightSide;
