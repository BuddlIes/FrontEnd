//Pwd
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogin from "../../../../../src/assets/button.svg";
import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Pwd() {
    return (
        <div class="login-form flex flex-col pb-36">
          <label for="email" className="pb-2">비밀번호 입력</label>
          <input type="text" placeholder="비밀번호를 입력해주세요" class="bg-[#F2F4F8] py-3 px-4 border-b border-[#C1C7CD]"/>
        </div>
      );
}

export default Pwd;