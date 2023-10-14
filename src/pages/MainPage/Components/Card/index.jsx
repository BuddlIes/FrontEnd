import React from "react";
import BelowBtn from "./BelowBtn";
import SmallLeaf from "../../../../assets/SmallLeaf.png";
function Card({ image, hashtag, title, location, time }) {
  return (
    <div>
      <div className="w-72 h-44">
        <div className="border">
          <img src={image} className="w-72 h-44" />
        </div>
        <div className="pt-4">
          <BelowBtn name={hashtag} />
        </div>
        <div className="flex gap-2 pt-3">
          <img src={SmallLeaf} />
          <div className="text-base font-semibold">{title}</div>
        </div>
        <div>
          <div className="flex gap-2 pt-3">
            <div>{location}</div>
            <div> |</div>
            <div>{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
