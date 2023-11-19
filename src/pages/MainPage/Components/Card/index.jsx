import React from "react";
import BelowBtn from "./BelowBtn";
import SmallLeaf from "../../../../assets/SmallLeaf.png";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import defaultImg from "../../Components/Card/default.svg";
import Modal from "react-modal";
// import { GET } from "../../../../utils/axios";
function Card({ image, hashtag, title, location, time, id, completed }) {
  const navigate = useNavigate();
  const [isYellowModalOpen, setIsYellowModalOpen] = useState(false);

  // console.log(image);
  // console.log(hashtag);
  const onClickHandler = (e) => {
    console.log("clicked");
    console.log(`${id}`);
    // GET(`volunteer/get_volunteer_list?hashtag/${id}`, true);
    // console.log(data);.
    // axios
    //   .get(
    //     `http://52.79.132.18:8443/volunteer/get_volunteer_content?volunteerId=${id}`
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    navigate(`/main/detailed/${id}`);
  };
  const openYellowModal = () => {
    setIsYellowModalOpen(true);
  };
  const closeYellowModal = () => {
    setIsYellowModalOpen(false);
  };
  return (
    <div className=" h-44 w-80 pb-12">
      <div className="">
        <img src={image || defaultImg} className=" h-44" />
      </div>
      <div id="card below" className="">
        <div className="pt-4">
          <div className="pb-1">
            <BelowBtn name={hashtag} />
          </div>
          {completed === true && (
            <div>
              <button
                className="border rounded-full px-1 pr-3 bg-main text-white text-sm"
                onClick={openYellowModal}
              >
                👻봉사 완료하기
              </button>
            </div>
          )}
        </div>
        <div className="flex gap-2 pt-3">
          <img src={SmallLeaf} />
          <button className="text-base font-semibold " onClick={onClickHandler}>
            {title}
          </button>
        </div>
        <div>
          <div className="flex gap-2 pt-3">
            <div>{location}</div>
            <div>|</div>
            <div>{time}</div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isYellowModalOpen}
        onRequestClose={closeYellowModal}
        contentLabel="Yellow Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25"
        className="w-80 h- rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="mb-3"></h2>
          <h2 className="text-center text-base font-normal pt-3 text-bdblack">
            해당 봉사활동을 완료하시겠습니까?
          </h2>
          <div className="flex justify-center pt-3">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeYellowModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeYellowModal}
            >
              완료하기
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
