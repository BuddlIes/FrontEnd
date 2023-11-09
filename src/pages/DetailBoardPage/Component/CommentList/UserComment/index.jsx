import React from "react";

// 컴포넌트 확인 후
/*
function UserComment({ whoComm, comments, whoComm, time }) {
  return (
    <div>
      <div>{whoComm}</div>
      <div>{time}</div>
      <div>{comments}</div>
    </div>
  );
}*/

function UserComment() {
  return (
    <div>
      <div className="grid grid-flow-col">
        <div>김버들</div>
        <div>2023/10/10 12:56</div>
      </div>
      <div>저 지금 신청했는데, 혹시 한 번 알림 확인해주실 수 있으신가요?</div>
    </div>
  );
}
export default UserComment;
