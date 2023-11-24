import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewComment() {
  const [userData, setUserData] = useState([]);
  const param = useParams();
  const id = param.id;
  const getCommentList = async () => {
    const authToken = localStorage.getItem("access_token");

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const axiosInstance = axios.create({
      baseURL: "http://52.79.132.18:8443",
    });

    try {
      const result = await axiosInstance.get(
        `/volunteer/get_volunteer_content?volunteerId=${id}`,
        config
      );
      setUserData(result.data.commentInfo);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userData);

  useEffect(() => {
    getCommentList();
  }, []);
  return (
    <div>
      <div className="font-semibold">댓글 리스트</div>
      {userData.map((index) => (
        <div key={index.id} className="pb-16 border-y  min-w-full">
          <div className="py-12">
            <div className="font-bold text-xl">{index.whoComm}</div>
            <div>{index.time}</div>
          </div>
          <div>{index.comments}</div>
        </div>
      ))}
    </div>
  );
}

export default ViewComment;
