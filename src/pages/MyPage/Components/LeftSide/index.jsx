//LeftSide
import React from "react";

function LeftSide() {
    return (
        <div className="w-72 h-full ml-60 mr-8 mt-40">
            <div className="text-4xl font-semibold mb-12">
                My Page
            </div>
            <div className="w-72 h-12 bg-[#9fc70033] rounded-t-lg p-3 text-base font-semibold">
                Home
            </div>
            <div className="w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold">
                내 봉사내역
            </div>
            <div className="w-72 h-12 border border-[#EFEFE4] p-3 text-base font-semibold">
                받은 후기 확인
            </div>
            <div className="w-72 h-12 border border-[#EFEFE4] rounded-b-lg p-3 text-base font-semibold">
                관심 봉사
            </div>
        </div>
    );
}

export default LeftSide;