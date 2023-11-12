import React, { useEffect, useState } from "react";
import btnimg from "./img/button.png";
import ImgPlaceHolder from "./img/placeholder image.png";
import PlacePin from "./img/PlacePin.png";
import BelowBtn from "./Component/BelowBtn";
import ZimBtn from "./Component/ZimBtn";
import CommentBox from "./Component/CommentBox";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import base64 from "base-64";
function DetailBoardPage() {
  const [boardData, setBoardData] = useState({});
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [place, setPlace] = useState("");
  const [encoded, setEncoded] = useState("");
  const [image, setImage] = useState("");

  const [hour, writeHour] = useState("");
  const [minute, writeMinute] = useState("");
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState("");
  const navigate = useNavigate();

  const getBoardDetail = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    try {
      const authToken = localStorage.getItem("access_token");

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const data = await axiosInstance.get(
        `/volunteer/get_volunteer_content?volunteerId=${id}`,
        config
      );

      setBoardData(data);

      setTitle(data.data.title);
      setWriter(data.data.writer);
      setPlace(data.data.place);
      //console.log(data.data.img);

      const dataObject = new Date(data.data.writeTime);

      writeHour(dataObject.getHours());
      writeMinute(dataObject.getMinutes());
      setContent(data.data.detailed);
      setHashtag(data.data.hashtag);
      setEncoded(data.data.img);
      //console.log(encoded);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(encoded);

  const onClickHandler = () => {
    console.log("clicked");
    navigate("/chat");
  };

  useEffect(() => {
    getBoardDetail();
  }, []);
  useEffect(() => {
    const decodedImage = new Image();
    decodedImage.src = encoded;
    decodedImage.onload = () => {
      setImage(decodedImage.src);
    };
  }, [encoded]);
  return (
    <div className="grow flex flex-col items-center">
      <div className="flex flex-col items-start">
        <div className="flex items-end">
          <div className="text-4xl pt-8 pb-8 font-semibold text-bdblack">
            {title}
          </div>
          <button className="items-end pl-64 hover:cursor-pointer">
            <img src={btnimg} onClick={onClickHandler} />
          </button>
        </div>
        <div id="content header" className="flex items-end ">
          <div className="flex">
            <div id="user info" className="grid grid-flow-rows">
              <div className="font-semibold text-base">{writer}</div>
              <div className="flex">
                <div className="flex text-sm pb-6 gap-3">
                  <div className="text-sm">{place}</div>
                  <div className="">
                    {hour} : {minute}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="text-lg">
          <div id="article" className="pb-">
            {content}
          </div>
          <div>
            <img src={image || ImgPlaceHolder} className="pt-6" />
          </div>
        </div>
        <div id="bottom_content" className="items-end flex py-3">
          <img src={PlacePin} />
          <div>{place}</div>
        </div>
        <BelowBtn name={hashtag} />
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
