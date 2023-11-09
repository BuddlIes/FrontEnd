import React from "react";
import { useState } from "react";
function CommentBox() {
  const [comment, setComment] = useState("");
  console.log(comment);
  const onClickHandler = () => {
    
  };
  return (
    <div className="justify-items-start w-full">
      <div className="text-lg font-semibold text-gray-500 my-6">
        number개의 댓글
      </div>
      <div className="grid grid-flow-row ">
        <input
          className="border w-full p-4 h-20"
          placeholder="댓글을 작성하세요"
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </div>
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
