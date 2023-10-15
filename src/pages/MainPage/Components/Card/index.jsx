import React from "react";
import BelowBtn from "./BelowBtn";
import SmallLeaf from "../../../../assets/SmallLeaf.png";
import { Navigate, useNavigate } from "react-router-dom";
function Card({ image, hashtag, title, location, time, id }) {
  const onClickHandler = (e) => {
    console.log(`clicked, ${id}`);
  };
  return (
    <div className=" h-44 w-76 pb-12">
      <div className="border">
        <img src={image} className=" h-44" />
      </div>
      <div id="card below" className="">
        <div className="pt-4">
          <BelowBtn name={hashtag} />
        </div>
        <div className="flex gap-2 pt-3">
          <img src={SmallLeaf} />
          <button className="text-base font-semibold" onClick={onClickHandler}>
            {title}
          </button>
        </div>
        <div>
          <div className="flex gap-2 pt-3">
            <div>{location}</div>
            <div>|</div>
            <div>{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
