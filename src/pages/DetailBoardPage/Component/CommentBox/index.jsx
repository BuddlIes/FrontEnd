import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router";
function CommentBox() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState("");
  const [userData, setUserData] = useState([]);

  const param = useParams();
  console.log(param.id);
  const boardId = param.id;
  console.log(comment);
  const schoolNum = localStorage.getItem("schoolNum");
  console.log(schoolNum);
  const axiosInstance = axios.create({
    baseURL: "http://52.79.132.18:8443",
  });

  const authToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const viewComment = async () => {
    try {
      const result = await axiosInstance.get(
        `/volunteer/get_comment_list?volunteerId=${boardId}`,
        config
      );
      console.log(result);
      setResult(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    viewComment(), getCommentList();
  }, [param]);

  const onClickHandler = async (e) => {
    const data = {
      volunteerId: boardId,
      comments: comment,
      whoComm: schoolNum,
    };
    console.log(data);
    try {
      console.log("a");
      const authToken = localStorage.getItem("access_token");
      console.log(authToken);

      await axiosInstance
        .post("/volunteer/write_comment", data, config)
        .then((response) => {
          console.log(response);
        });
      //console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

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

  console.log(result.data);
  return (
    <div className="justify-items-start w-full">
      {result && (
        <div className="grid grid-flow-row ">
          <input
            className="border w-full p-4 h-20"
            placeholder="댓글을 작성하세요"
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </div>
      )}
      <div className="">
        <button
          type="submit"
          className="bg-main text-white items-end rounded-lg p-3 mt-3"
          onClick={onClickHandler}
        >
          댓글 작성
        </button>
      </div>
      {userData.map((index) => (
        <div key={index.id} className="pb-16 border-y ">
          <div className="pb-12">
            <div className="text-2xl font-bold">{index.whoComm}</div>
            <div>{index.time}</div>
          </div>
          <div>{index.comments}</div>
        </div>
      ))}
    </div>
  );
}

export default CommentBox;
