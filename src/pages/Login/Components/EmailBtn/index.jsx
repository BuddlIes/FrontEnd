//Email
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import BtnLogin from "../../../../../src/assets/button.svg";
//import BtnSign from "../../../../../src/assets/BtnSign.svg";
function Email() {
  return (
    <div class="login-form flex flex-col pb-4">
      <input type="text" placeholder="아주대학교 이메일" class="rounded-lg py-3 px-4 border border-[#C7CCD0] text-[#ABB1B8]"/>
    </div>
  );
}

export default Email;
