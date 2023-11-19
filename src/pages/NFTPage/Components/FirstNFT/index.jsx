//할인율 5% NFT
import React, { useState } from "react";
import Modal from "react-modal";
// import axios from "axios";

function FirstNFT() {
  const [isYellowModalOpen, setIsYellowModalOpen] = useState(false);
  const [isGreenModalOpen, setIsGreenModalOpen] = useState(false);
  const [isRedModalOpen, setIsRedModalOpen] = useState(false);

  const openYellowModal = () => {
    setIsYellowModalOpen(true);
  };

  const closeYellowModal = () => {
    setIsYellowModalOpen(false);
  };

  const openGreenModal = () => {
    setIsGreenModalOpen(true);
  };

  const closeGreenModal = () => {
    setIsGreenModalOpen(false);
  };

  const openRedModal = () => {
    setIsRedModalOpen(true);
  };

  const closeRedModal = () => {
    setIsRedModalOpen(false);
  };

  return (
    <div className="pb-8 border-b">
      <div className="text-2xl pt-8 font-bold text-bdblack">
        스탬프 <span className="text-[#749C03]">5</span>개 필요{" "}
        <span className="align-middle text-xl text-[#5D6247]">| 할인율 5%</span>
      </div>
      <div className="flex items-center pt-8">
        <div>
          <div
            className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4"
            onClick={openYellowModal}
          >
            <img src="/src/assets/nft1.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            편의점
          </div>
        </div>
        <div>
          <div
            className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4"
            onClick={openGreenModal}
          >
            <img src="/src/assets/nft2.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            카페
          </div>
        </div>
        <div>
          <div
            className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4"
            onClick={openRedModal}
          >
            <img src="/src/assets/nft3.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            패스트푸드
          </div>
        </div>
      </div>

      <Modal
        isOpen={isYellowModalOpen}
        onRequestClose={closeYellowModal}
        contentLabel="Yellow Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            <span className="text-[#ffd206]">은행이</span>와 함께라면?
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            편의점 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            해당 NFT를 발급 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
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
              신청
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isGreenModalOpen}
        onRequestClose={closeGreenModal}
        contentLabel="Green Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            <span className="text-[#8BC501]">행운이</span>와 함께라면?
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            카페 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            해당 NFT를 발급 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeGreenModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeGreenModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isRedModalOpen}
        onRequestClose={closeRedModal}
        contentLabel="Red Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            <span className="text-[#ff821a]">단풍이</span>와 함께라면?
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            패스트푸드 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            해당 NFT를 발급 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeRedModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeRedModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FirstNFT;
