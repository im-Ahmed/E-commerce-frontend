import React from "react";
import "./CSS/LoginSiginup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="continue">Continue</button>
        <p className="login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="agree">
          <input id="chk" type="checkbox" />
          <label htmlFor="chk">I agree terms and privacy policy</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
