import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router";
function CommentBox() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState("");
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
    viewComment();
  }, [param]);

  const onClickHandler = async (e) => {
    e.preventDefault();
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
  return (
    <div className="justify-items-start w-full">
      <div className="text-lg font-semibold text-gray-500 my-6">
        number개의 댓글
      </div>
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
    </div>
  );
}

export default CommentBox;
