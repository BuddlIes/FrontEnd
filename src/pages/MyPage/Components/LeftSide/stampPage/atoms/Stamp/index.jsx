import React from "react";

function Stamp({image}){
return(
    <div className="items-center">
    <div className="w-32 h-32 flex itFems-center justify-center p-6 rounded-full bg-[#FFF] border-2 border-[#ECEDEE] mx-4">
      <img src={image}/>
    </div>
  </div>
)
}
export default Stamp;