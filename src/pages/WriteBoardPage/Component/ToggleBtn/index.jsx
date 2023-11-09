import React from "react";
import downBtn from "./img/ic.svg";
function ToggleBtn({ name }) {
  return (
    <div className="flex gap-3 border border-1 max-w-fit border-main rounded-lg hover:cursor-pointer">
      <div className=" text-main text-xs md:text-base font-semibold ml-4 my-2">
        {name}
      </div>
      <img src={downBtn} className="mr-4" />
    </div>
  );
}

export default ToggleBtn;
