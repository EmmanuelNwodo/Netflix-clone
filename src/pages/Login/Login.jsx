import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/images/netflix-logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign-In");

  const toggleForm = () => {
    signState === "Sign-In" ? setSignState("Sign-Up") : setSignState("Sign-In");
  };

  return (
    <div className="login">
      <img src={Logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign-Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign-In" ? (
            <p>
              New to Netflix? <span onClick={toggleForm}>Sign-Up Now</span>
            </p>
          ) : (
            <p>
              Already Have an Account?
              <span onClick={toggleForm}>Sign-In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
