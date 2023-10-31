import React from "react";
import FilterBtn from "../../Atoms/FilterBtn";
import { useState } from "react";
function FilterBtnBox() {
  const BtnList = ["전체", "이동봉사", "대필", "물품요청", "기타"];
  const [clickedItem, setClicked] = useState([false, false, false, false]);
  const changeTag = (name) => {
    setClicked("");
    setClicked(name);
  };
  return (
    <div className="flex gap-2 pb-4">
      <FilterBtn
        name={BtnList[0]}
        onClick={() => changeTag(BtnList[0])}
        clicked={clickedItem}
      />
      <FilterBtn
        name={BtnList[1]}
        onClick={() => changeTag(BtnList[1])}
        clicked={clickedItem}
      />
      <FilterBtn
        name={BtnList[2]}
        onClick={() => changeTag(BtnList[2])}
        clicked={clickedItem}
      />
      <FilterBtn
        name={BtnList[3]}
        onClick={() => changeTag(BtnList[3])}
        clicked={clickedItem}
      />
    </div>
  );
}

export default FilterBtnBox;
