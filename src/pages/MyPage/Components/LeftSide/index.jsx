//LeftSide
import React from "react";

function LeftSide() {
    return (
        <div className="w-72 h-full ml-12 mr-8 mt-20">
            <div className="text-4xl font-semibold mb-12 text-[#161718]">
                My Page
            </div>
            <div className="w-72 h-12 bg-[#9fc70033] rounded-t-lg p-3 text-base font-semibold text-[#161718]">
                Home
            </div>
            <div className="w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold text-[#161718]">
                내 봉사내역
            </div>
            <div className="w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold text-[#161718]">
                받은 후기 확인
            </div>
            <div className="w-72 h-12 border border-[#EFEFE4] rounded-b-lg p-3 text-base font-semibold text-[#161718]">
                관심 봉사
            </div>
        </div>
    );
}

export default LeftSide;