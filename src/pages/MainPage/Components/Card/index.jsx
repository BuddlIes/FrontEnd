import React from "react";
import BelowBtn from "./BelowBtn";
import SmallLeaf from "../../../../assets/SmallLeaf.png";
function Card(props) {
  return (
    <div>
      <div className="w-72 h-44">
        <div className="border">
          <img src={props.img} className="w-72 h-44" />
        </div>
        <div className="pt-4">
          <BelowBtn name={"이동봉사"} />
        </div>
        <div className="flex gap-2 pt-3">
          <img src={SmallLeaf} />
          <div className="text-base font-semibold">제목 타이틀입니다.</div>
        </div>
        <div>
          <div className="flex gap-2 pt-3">
            <div>{props.location}</div>
            <div> |</div>
            <div>{props.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
