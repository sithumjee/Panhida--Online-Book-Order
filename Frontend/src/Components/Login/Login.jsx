import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currentState, SetCurrentState] = useState("Sign Up");
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your password" required />
        </div>

        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => SetCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => SetCurrentState("Login")}>
              Login Here
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
