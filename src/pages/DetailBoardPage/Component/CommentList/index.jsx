import React from "react";

function CommentList() {
  const users = [
    {
      id: 1,
      comments: "대박",
      whoComm: "김쿼카",
      time: "2023-11-08T19:19:39.911043",
    },
    {
      id: 2,
      comments: "대박",
      whoComm: "김쿼카",
      time: "2023-11-08T19:19:39.911043",
    },
    {
      id: 3,
      comments: "대박",
      whoComm: "김쿼카",
      time: "2023-11-08T19:19:39.911043",
    },
  ];

  return (
    <div>
      <div>CommentList</div>
      {users.map((box) => {})}
    </div>
  );
}

export default CommentList;
