import React from "react";
import calender from "../../assets/calendar.svg";
import Car from "../../assets/car.svg";
import Luggage from "../../assets/luggage.svg";
import activity from "../../assets/activity.svg";
import SmallCont from "./Atoms/SmallCont";

function MidCont({ name, content }) {
  return (
    <div className="bg-white max-w-full">
      <div className="px-28">
        <div className="text-[42px] text-center pt-20">
          버들에서 지속 가능한 가치 실현을 꿈꿔보세요
        </div>
        <div className="grid grid-cols-4 py-16 gap-36">
          <div className="justify-self-center">
            <SmallCont name={calender} content="내 시간에 맞는 봉사활동 매칭" />
          </div>
          <div>
            <SmallCont name={Luggage} content="나와 맞는 봉사자 매칭" />
          </div>
          <div>
            <SmallCont
              name={activity}
              content="봉사활동 현황에 따른 리워드 지급"
            />
          </div>
          <div>
            <SmallCont
              name={Car}
              content="이동봉사와 같은 다양한 마이크로 봉사 제공"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidCont;
