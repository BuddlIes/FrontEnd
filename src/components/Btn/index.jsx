import React from "react";

function Btn(props) {
  return (
    <div className="bg-main h-12 text-xl">
      <div>{props.name}</div>
    </div>
  );
}

export default Btn;
