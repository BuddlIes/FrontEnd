import React from "react";

function BelowBtn(props) {
  return (
    <div className="text-white bg-main h-6 text-xs pt-1 pl-2.5 rounded-2xl w-16">
      <div>{props.name}</div>
    </div>
  );
}

export default BelowBtn;
