//아주대 이메일 입력
import React, { useEffect, useState } from "react";
import axios from "axios";

function Email() {
  const [email, setEmail] = useState("");
  console.log(email);
  const inputEmail = (e) => {
    console.log("input");
    console.log(`${email}`);
    axios.post(`http://52.79.132.18:8443/join=${email}`).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <div className="flex flex-col py-6 px-5">
        <div className="text-lg font-bold text-[#161718] pb-3">
          아주대학교 이메일 입력
        </div>
        <input
          type="email"
          placeholder="email@ajou.ac.kr"
          style={{ color: "#161718" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-80 h-10 py-2 px-2 border-b border-[#D6DBDE] text-base text-[#ABB1B8]"
        />
        <div className="text-xs font-normal text-[#CE6429]">
          이미 가입된 이메일입니다.
        </div>
      </div>
    </div>
  );
}

export default Email;
