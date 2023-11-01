import React from "react";
import BelowBtn from "./BelowBtn";
import SmallLeaf from "../../../../assets/SmallLeaf.png";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import { GET } from "../../../../utils/axios";
function Card({ image, hashtag, title, location, time, id }) {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    console.log(`${id}`);
    // GET(`volunteer/get_volunteer_list?hashtag/${id}`, true);
    // console.log(data);.
    axios
      .get(
        `http://52.79.132.18:8443/volunteer/get_volunteer_content?volunteerId=${id}`
      )
      .then((response) => {
        console.log(response.data);
      });
    //navigate(`/main/detailed/${id}`);
  };
  return (
    <div className=" h-44 w-80 pb-12">
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
