import React from "react";

function SmallCont(props) {
  return (
    <div>
      <div className="">
        <img src={props.name} className="pl-24" />
      </div>
      <div className="text-lg left-1/2 text-center">{props.content}</div>
    </div>
  );
}

export default SmallCont;
