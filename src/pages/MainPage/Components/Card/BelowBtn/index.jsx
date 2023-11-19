import React from "react";

function BelowBtn(props) {
  return (
    <div className="text-white bg-main h-6 text-xs pt-1 px-4 rounded-2xl max-w-fit ">
      <div>{props.name}</div>
    </div>
  );
}

export default BelowBtn;
