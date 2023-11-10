import React, { useEffect, useState } from "react";
import FilterBtnBox from "../FilterBtnBox";
import axios from "axios";
import { Filter } from "@mui/icons-material";
import SweetPotato from "../Card/SweetPotato.jpg";

import Card from "../Card";
import { useNavigate } from "react-router-dom";

function RightSide() {
  const [hashtag, setHashTag] = useState("전체");
  const [boardList, setBoardList] = useState({});

  const onClickBtnHandler = (e) => {
    console.log("clicked");
    window.location.href = "/main/write";
  };

  const getBoardList = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    try {
      const authToken = localStorage.getItem("access_token");

      //console.log(localStorage.access_token);
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const result = await axiosInstance.get(
        `/volunteer/get_volunteer_list?hashtag=${hashtag}`,
        config
      );
      setBoardList(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBoardList();
  }, [boardList]);
  /*const write_list = [
    {
      id: 1,
      title: "제목 1",
      image: "",
      location: "광교관",
      time: "12시 32분",
      hash: "이동봉사",
    },
    {
      id: 2,
      title: "제목 2",
      image: "",
      location: "원천관",
      time: "12시 32분",
      hash: "물품구매",
    },
    {
      id: 3,
      title: "제목 3",
      image: "",
      location: "일신관",
      time: "12시 32분",
      hash: "대필작업",
    },
    {
      id: 4,
      title: "제목 4",
      image: "",
      location: "일신관",
      time: "12시 32분",
      hash: "대필작업",
    },
    {
      id: 5,
      title: "제목 5",
      image: "",
      location: "일신관",
      time: "12시 32분",
      hash: "대필작업",
    },
  ];*/

  return (
    <div className="py-36 pl-11 w-full">
      <div className="md:flex md:flex-initial md:gap-10 ">
        <div className="text-3xl font-bold pb-12">오늘의 벗</div>

        <button
          className="ml-48 h-8 w-36 text-white bg-main rounded-3xl hover:bg-green-700"
          onClick={onClickBtnHandler}
        >
          글 작성하기 ✏️
        </button>
      </div>
      <FilterBtnBox />
      <div className="relative flex flex-wrap gap-32">
        <Card {...boardList} />
      </div>
    </div>
  );
}

export default RightSide;
