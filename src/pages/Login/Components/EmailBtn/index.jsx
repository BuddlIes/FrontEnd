//Email
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Email() {
  const [email, setEmail] = useState(""); // 입력된 이메일 상태

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // 입력된 이메일 업데이트
  };

  return (
    <div className="flex flex-col pb-4">
      <input
        type="text"
        placeholder="아주대학교 이메일"
        value={email}
        onChange={handleEmailChange}
        className={`w-80 h-12 rounded-lg py-3 px-4 border border-[#C7CCD0] text-base ${
          email ? "text-[#161718]" : "text-[#ABB1B8]"
        }`}
      />
    </div>
  );
}

export default Email;
