// 스탬프 페이지
import React, { useState, useEffect } from "react";
import axios from "axios";
import leaf from "../../../../../assets/스탬프.png";
import Stamp from "./atoms/stamp";
function StampPage() {
  const [StampNum, getStampNum] = useState(0);
  const studentId = "202020797"; // getStudentId(); // 로컬스토리지에 토큰이 있으니까 토큰으로 유저 구분해서 해당 유저 정보에서 학번 가져오기

  useEffect(() => {
    StampCounter();
  }, []);

  const StampCounter = async () => {
    const url = `http://52.79.132.18:8443/stamp/get_stamp_count?user_number=${studentId}`;

    try {
      const response = await axios.get(url);
      getStampNum(response.data);
      console.log("스탬프 개수: ", response.data);
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-row">
      <div className="grow flex flex-col items-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-4xl text-left pt-36 pb-2.5 font-semibold text-bdblack">
            벗을 위해 준비했어요
          </div>
          <div className="text-base text-left text-bdblack">
            버들에서 가치 실현을 통해{" "}
            <span className="text-[#749C03] font-semibold">스탬프</span>를 모을
            수 있어요!
          </div>
          <div className="text-base text-left text-bdblack pb-8">
            다양한 활동(
            <span className="text-[#749C03] font-semibold">
              마이크로 자원봉사
            </span>
            부터 로그인, 댓글, 리뷰 등)을 하면 스탬프를 드립니다.
          </div>
          <div className="max-w-full text-bdblack text-base text-left text-bdblack bg-[#EFF5C4] px-5 py-1.5 rounded-lg mb-8">
            <div className="pb-4">
              Q. 스탬프는 어떻게 얻나요?
            </div>
            <div>
              A. "<span className="text-[#749C03] font-semibold">버들 접속(로그인)</span> 1회 + <span className="text-[#749C03] font-semibold">댓글</span> 작성 1회 + <span className="text-[#749C03] font-semibold">봉사 완료</span> 1회 + <span className="text-[#749C03] font-semibold">리뷰 </span>
              작성 1회"시 스탬프 1개를 받을 수 있습니다.
            </div>
            <div>
            모든 영역에서 1회씩 더 수행할 경우, 스탬프를 1개 더 드립니다!
            </div>
          </div>
          <div className="box-border justify-center w-full ">
            <div className="flex flex-col">
              <div className="max-w-full text-2xl text-left text-bdblack font-bold bg-[#EFEFE4] px-5 py-1.5">
                나의 스탬프는 현재{" "}
                <span className="text-[#749C03]">{StampNum}</span>개 입니다.
              </div>
            </div>
            <div>
              <div className="grid grid-flow-col grid-cols-5 py-8 border-b">
                {" "}
                {/*스탬프1~5*/}
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
              </div>
              <div className="grid grid-flow-col grid-cols-5 py-8 border-b filter grayscale">
                {" "}
                {/*스탬프6~10*/}
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
              </div>
              <div className="grid grid-flow-col grid-cols-5 py-8 border-b filter grayscale mb-36">
                {" "}
                {/*스탬프11~15*/}
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
                <Stamp image={leaf} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StampPage;
