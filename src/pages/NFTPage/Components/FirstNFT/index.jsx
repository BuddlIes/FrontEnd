//할인율 5% NFT
import React, { useState } from "react";
import Modal from "react-modal";

function FirstNFT() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            onClick={openModal}
          >
            <img src="/src/assets/CU(씨유)로고1.png" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            편의점
          </div>
        </div>
        <div>
          <div className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4">
            <img src="/src/assets/공차.jpg" className="w-4/5 h-6/7" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            카페
          </div>
        </div>
        <div>
          <div
            className="w-48 h-48 flex items-center justify-center p-6 rounded-full bg-[#e30613] border-2 border-[#ECEDEE] mx-4"
            onClick={openModal}
          >
            <img src="/src/assets/맥도날드 로고.png" className="w-5/6 h-5/6" />
          </div>
          <div className="flex items-center justify-center pt-2 text-xl text-bdblack">
            패스트푸드
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="CU Logo Modal"
        overlayClassName="fixed inset-0 bg-[#36383B] bg-opacity-25" /* 배경 스타일 */
        className="w-80 h-40 rounded-lg modal-container bg-white opacity-100" /* 팝업 스타일 */
      >
        <div className="w-80 h-40 rounded-lg border-2 p-4 shadow-lg">
          {/* 팝업 내용 */}
          <h2 className="text-2xl font-bold text-bdblack">CU 로고 팝업</h2>
          {/* 이곳에 원하는 팝업 내용을 추가하세요. */}
          <button
            className="mt-4 py-2 px-4 bg-main text-white rounded-full hover:bg-[#D6DBDE] transition-all"
            onClick={closeModal}
          >
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default FirstNFT;
