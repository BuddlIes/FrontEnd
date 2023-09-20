//root
import React from "react";
import Email from "./Components/EmailBtn";
import Pwd from "./Components/PwdBtn";
import Login from "./Components/LogBtn";

function LoginPage() {
    return (
      <div className="">
        <Email />
        <Pwd />
        <Login />
      </div>
    );
  }

  export default LoginPage;