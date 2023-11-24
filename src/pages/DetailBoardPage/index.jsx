import React, { useEffect, useState } from "react";
import btnimg from "./img/button.png";
import ImgPlaceHolder from "./img/placeholder image.png";
import PlacePin from "./img/PlacePin.png";
import BelowBtn from "./Component/BelowBtn";
import ZimBtn from "./Component/ZimBtn";
import CommentBox from "./Component/CommentBox";
import { useNavigate, useParams } from "react-router-dom";
import ViewComment from "./Component/ViewComment";
import axios from "axios";
import Modal from "react-modal";
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
  const [isYellowModalOpen, setIsYellowModalOpen] = useState(false);
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

      const dataObject = new Date(data.data.writeTime);

      writeHour(dataObject.getHours());
      writeMinute(dataObject.getMinutes());
      setContent(data.data.detailed);
      setHashtag(data.data.hashtag);
      setEncoded(data.data.img);
    } catch (e) {
      console.log(e);
    }
  };
  const closeYellowModal = () => {
    setIsYellowModalOpen(false);
  };

  const onClickHandler = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });
    console.log("clicked");
    const authToken = localStorage.getItem("access_token");
    const schoolNum = localStorage.getItem("schoolNum");

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const body = {
      volunteerId: id,
      whoVol: schoolNum,
    };
    const data = await axiosInstance.post(
      "/volunteer/when_vol_applied",
      body,
      config
    );
    console.log(data);
    //navigate(`/chat/${id}`);
  };
  const openYellowModal = () => {
    console.log("hi");
    setIsYellowModalOpen(true);
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
            <img src={btnimg} onClick={openYellowModal} />
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
        <div className="pt-6">
          <ViewComment />
        </div>
      </div>
      <Modal
        isOpen={isYellowModalOpen}
        ariaHideApp={false}
        onRequestClose={closeYellowModal}
        contentLabel="Yellow Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25"
        className="w-80 h- rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        {" "}
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="mb-3"></h2>
          <h2 className="text-center text-base font-normal pt-3 text-bdblack">
            해당 봉사활동을 신청하시겠습니까?
          </h2>
          <div className="flex justify-center pt-3">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={(e) => closeYellowModal(e)}
              id="cancel"
            >
              아니오
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={(e) => onClickHandler(e)}
              id="complete"
            >
              신청하기
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DetailBoardPage;
