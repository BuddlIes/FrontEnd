import React from "react";
import { useState } from "react";
function FilterBtn(props) {
  const [clicked, setClicked] = useState(props.clicked);
  const onClickHandler = (e) => {
    setClicked(props.name);
  };
  return (
    <div className="">
      <div
        onClick={onClickHandler}
        className={`rounded-3xl px-4 pt-1  hover:cursor-pointer hover:bg-green-800
        ${
          clicked
            ? " text-white bg-green04"
            : "border-gray03 border border-1 text-gray03}"
        }`}
      >
        {props.name}
      </div>
    </div>
  );
}

export default FilterBtn;
