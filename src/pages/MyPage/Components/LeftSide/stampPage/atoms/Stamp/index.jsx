import React from "react";

const Stamp = ({ image }) => (
    <div className="w-32 h-32 flex items-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-2 my-2">
      <img src={image}/>
    </div>
);

export default Stamp;
