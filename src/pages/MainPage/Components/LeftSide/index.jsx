import React from "react";
import LocalTittle from "./Atoms/LocalTittle";
import LocalCategory from "./Atoms/LocalCategory";
import SearchBox from "../../Atoms/SearchBox";
function LeftSide() {
  const frontgate = ["정문", "버스 정류장", "중앙 도서관"];
  const won = [
    "선구자상",
    "에너지 센터",
    "원천관",
    "원천 정보관",
    "북문",
    "화공 실험동",
    "서관",
    "동관",
    "종합 설계동",
    "대형 지반 연구 실험동",
    "토목 실험동",
    "팔달관",
    "더 테라스",
  ];
  const DormList = [
    "국제학사(기숙사)",
    "광교관(기숙사)",
    "용지관(기숙사)",
    "기숙사 식당",
    "남제관(기숙사)",
  ];
  const NorthList = ["학군단", "산악 협력원"];
  const studentRoomList = [
    "학생회관 1",
    "학생회관 2",
    "성호관",
    "노천 극장",
    "율곡관",
    "다산관",
    "약학관",
    "임상 수기 센터 및 실험동물센터",
    "연암관",
    "테니스장",
    "의생명과학관",
    "운동장",
  ];
  const frontList = frontgate.map((name, index) => (
    <LocalCategory key={index} name={name} />
  ));
  const wonList = won.map((name, index) => (
    <LocalCategory key={index} name={name} />
  ));
  const Dorm = DormList.map((name, index) => (
    <LocalCategory key={index} name={name} />
  ));
  const North = NorthList.map((name, index) => (
    <LocalCategory key={index} name={name} />
  ));

  const Student = studentRoomList.map((name, index) => (
    <LocalCategory key={index} name={name} />
  ));

  return (
    <div className="pl-20">
      <div>
        <SearchBox />
      </div>
      <div className="pt-12">
        <div>
          <LocalTittle tittle="정문" />
          <div className="grid grid-flow-row gap-y-4">{frontList}</div>
        </div>
        <div>
          <LocalTittle tittle="원천관 주변" />
          <div className="grid grid-flow-row gap-y-4">{wonList}</div>
        </div>

        <div>
          <LocalTittle tittle="기숙사" />
          <div className="grid grid-flow-row gap-y-4">{Dorm}</div>
        </div>
        <div>
          <LocalTittle tittle="아주대 북쪽" />
          <div className="grid grid-flow-row gap-y-4">{North}</div>
        </div>
        <div>
          <LocalTittle tittle="기숙사" />
          <div className="grid grid-flow-row gap-y-4">{Student}</div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
