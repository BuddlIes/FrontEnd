import React from "react";
function ImgBox({ cameraIcon }) {
  return (
    <div className=" w-80 h-40 ">
      <div className="p-16mt-3">
        <img src={cameraIcon} className="w-40"></img>
      </div>
    </div>
  );
}

export default ImgBox;
