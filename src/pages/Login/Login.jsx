import React from "react";
import { LoginForm } from "../../components";
import "./Login.scss";

const Login = (props) => {
  return (
    <div className="main-container bg-image">
      <LoginForm {...props} />
    </div>
  );
};

export default Login;
