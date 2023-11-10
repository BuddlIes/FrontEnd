//할인율 5% NFT
import React, { useState } from "react";
import Modal from "react-modal";
// import axios from "axios";

function FirstNFT() {
  const [isCUModalOpen, setIsCUModalOpen] = useState(false);
  const [isCafeModalOpen, setIsCafeModalOpen] = useState(false);
  const [isMacModalOpen, setIsMacModalOpen] = useState(false);

  const openCUModal = () => {
    setIsCUModalOpen(true);
  };

  const closeCUModal = () => {
    setIsCUModalOpen(false);
  };

  const openCafeModal = () => {
    setIsCafeModalOpen(true);
  };

  const closeCafeModal = () => {
    setIsCafeModalOpen(false);
  };

  const openMacModal = () => {
    setIsMacModalOpen(true);
  };

  const closeMacModal = () => {
    setIsMacModalOpen(false);
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
            onClick={openCUModal}
          >
            <img src="/src/assets/CU(씨유)로고1.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            편의점
          </div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4" onClick={openCafeModal}>
            <img src="/src/assets/공차.jpg" className="w-4/5 h-6/7" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            카페
          </div>
        </div>
        <div>
          <div
            className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#e30613] border-2 border-[#ECEDEE] mx-4"
            onClick={openMacModal}
          >
            <img src="/src/assets/맥도날드 로고.png" className="w-5/6 h-5/6" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            패스트푸드
          </div>
        </div>
      </div>

      <Modal
        isOpen={isCUModalOpen}
        onRequestClose={closeCUModal}
        contentLabel="CU Logo Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            해당 NFT 혜택
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            편의점 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            리워드를 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeCUModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeCUModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isCafeModalOpen}
        onRequestClose={closeCafeModal}
        contentLabel="Cafe Logo Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            해당 NFT 혜택
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            카페 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            리워드를 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeCafeModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeCafeModal}
            >
              신청
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isMacModalOpen}
        onRequestClose={closeMacModal}
        contentLabel="Macdonald Logo Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-52 rounded-lg modal-container bg-white opacity-100 flex items-center justify-center" /* 팝업 스타일 */
      >
        <div className="w-80 h-52 rounded-lg border-2 p-4 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-bdblack mb-5">
            해당 NFT 혜택
          </h2>
          <h2 className="text-center text-lg font-semibold text-bdblack">
            패스트푸드 5% 할인권
          </h2>
          <h2 className="text-center text-base font-normal text-bdblack">
            리워드를 받으시겠습니까?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-[#FFF] text-[#8A8F94] rounded-lg hover:bg-[#D6DBDE] transition-all border border-[#ABB1B8]"
              onClick={closeMacModal}
            >
              취소
            </button>
            <button
              className="w-52 h-11 mt-5 mx-1.5 py-2.5 px-4 bg-main text-white rounded-lg hover:bg-[#D6DBDE] transition-all"
              onClick={closeMacModal}
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
