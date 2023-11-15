//LeftSide
import React from "react";
import { Link } from "react-router-dom";

function LeftSide() {
    return (
        <div className="w-72 h-full ml-12 mr-8 mt-20 flex flex-col">
            <div className="text-4xl font-semibold mb-12 text-[#161718]">
                My Page
            </div>
            <div className="w-72 h-12 bg-[#9fc70033] rounded-t-lg p-3 text-base font-semibold text-[#161718]">
                Home
            </div>
            <Link to="/mypage/VolHistory" className="w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold text-[#161718]">
                내 봉사 내역
            </Link>
            <Link to="/mypage/StampPage" className="w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold text-[#161718]">
                스탬프 전체 확인
            </Link>
        </div>
    );
}

export default LeftSide;