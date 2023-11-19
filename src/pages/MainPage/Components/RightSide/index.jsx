import React, { useEffect, useState } from "react";
import FilterBtnBox from "../FilterBtnBox";
import axios from "axios";
import { Filter } from "@mui/icons-material";

import Card from "../Card";
import { useNavigate } from "react-router-dom";
import FilterBtn from "../../Atoms/FilterBtn";

function RightSide() {
  const [hashtag, setHashTag] = useState("전체");
  const [boardList, setBoardList] = useState([]);
  const BtnList = ["전체", "이동봉사", "대필", "물품요청", "기타"];
  const [clickedItem, setClicked] = useState([false, false, false, false]);

  const onClickBtnHandler = (e) => {
    console.log("clicked");
    window.location.href = "/main/write";
  };

  const changeTag = (name) => {
    setClicked("");
    setClicked(name);
    setHashTag(name);
  };
  console.log(clickedItem);
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

      setBoardList(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBoardList();
  }, [hashtag]);

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
      <div className="grid grid-flow-col max-w-fit min-w-fit">
        <FilterBtn
          name={BtnList[0]}
          onClick={() => changeTag(BtnList[0])}
          clicked={clickedItem}
        />
        <FilterBtn
          name={BtnList[1]}
          onClick={() => changeTag(BtnList[1])}
          clicked={clickedItem}
        />
        <FilterBtn
          name={BtnList[2]}
          onClick={() => changeTag(BtnList[2])}
          clicked={clickedItem}
        />
        <FilterBtn
          name={BtnList[3]}
          onClick={() => changeTag(BtnList[3])}
          clicked={clickedItem}
        />
      </div>

      <div className="relative flex flex-wrap gap-32">
        {boardList.map(
          (item, index) =>
            hashtag && (
              <div key={index}>
                <Card
                  image={item.img}
                  hashtag={item.hashtag}
                  title={item.title}
                  location={item.place}
                  time={item.whenVol}
                  id={item.volunteerId}
                  completed={false}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default RightSide;
