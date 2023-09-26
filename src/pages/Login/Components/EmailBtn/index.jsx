//Email
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import BtnLogin from "../../../../../src/assets/button.svg";
//import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Email() {
  return (
    <div class="login-form flex flex-col pb-8">
      <label for="email" className="pb-2">아주대학교 이메일</label>
      <input type="text" placeholder="email@ajou.ac.kr" class="bg-[#F2F4F8] py-3 px-4 border-b border-[#C1C7CD]"/>
    </div>
  );
}

export default Email;
