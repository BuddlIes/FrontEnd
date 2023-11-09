import React, { useEffect, useState } from "react";
import btnimg from "./img/button.png";
import ImgPlaceHolder from "./img/placeholder image.png";
import PlacePin from "./img/PlacePin.png";
import BelowBtn from "./Component/BelowBtn";
import ZimBtn from "./Component/ZimBtn";
import CommentBox from "./Component/CommentBox";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailBoardPage() {
  const [boardData, setBoardData] = useState({});
  const { id } = useParams();
  console.log(id);
  const getBoardDetail = async () => {
    try {
      const boardData = await axios.get(
        `/volunteer/get_volunteer_content?volunteerId=${id}`
      );
      setBoardData(boardData);
      console.log(boardData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="grow flex flex-col items-center">
      <div className="flex flex-col items-start">
        <div className="flex items-end">
          <div className="text-4xl pt-24 pb-8 font-semibold text-bdblack">
            광교관에서 성호관까지
          </div>
          <button className="items-end pl-64 hover:cursor-pointer">
            <img src={btnimg} />
          </button>
        </div>
        <div id="content header" className="flex items-end ">
          <div className="flex">
            <div id="user info" className="grid grid-flow-rows">
              <div className="font-semibold text-base">김버들</div>
              <div className="flex">
                <div className="flex text-sm pb-6 gap-3">
                  <div className="text-sm">광교관</div>
                  <div className="">12:56</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="text-lg">
          <div id="article" className="pb-">
            이동해주실 분 구합니다. 현재 광교관 계단 앞에서 기다리고 있습니다.
          </div>
          <div>
            <img src={ImgPlaceHolder} className="pt-6" />
          </div>
        </div>
        <div id="bottom_content" className="items-end flex py-3">
          <img src={PlacePin} />
          <div>경기도 수원시 영통구 광교호수공원로 80</div>
        </div>
        <BelowBtn name={"이동봉사"} />
        <div className="py-4">
          <ZimBtn />
        </div>
        <hr className="w-full" />
        <CommentBox />
      </div>
    </div>
  );
}

export default DetailBoardPage;
