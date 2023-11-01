import React from "react";
import cameraIcon from "./icon/ic.png";
function ImgBox() {
  return (
    <div className="">
      <div className="bg-slate-300 p-16 w-40 h-40 mt-3">
        <img src={cameraIcon}></img>
      </div>
    </div>
  );
}

export default ImgBox;
