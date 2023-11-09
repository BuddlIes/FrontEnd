import React from "react";

function BelowBtn({ name }) {
  return (
    <div className="border rounded-2xl border-main text-main text-xl w-24 h-8 text-center ">
      <div>{name}</div>
    </div>
  );
}

export default BelowBtn;
