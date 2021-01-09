import { Link } from "react-router-dom";
import React from "react";
import "./FormAuthentication.scss";
import "./main.scss";
// import { generateRandomString, createDefaultNotes } from "../helpers";
// const firebase = require("firebase");

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      nickname: null,
      signupError: "",
    };
  }
  render() {
    return (
      <div className="bg-authentication">
        <div className="container-authentication">
          <Link to="/signup">
            <img
              className="logo-text"
              src="https://svgshare.com/i/Sub.svg"
              alt=""
            />
          </Link>
          <form onSubmit={(e) => this.submitSignup(e)}>
            <input
              autoFocus
              type="text"
              placeholder="Email"
              className="input input--email"
              onChange={(e) => this.userTyping("email", e)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input--password"
              onChange={(e) => this.userTyping("password", e)}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input--password-confirmation"
              onChange={(e) => this.userTyping("passwordConfirmation", e)}
            />
            <input
              type="text"
              placeholder="Nickname"
              className="input input--nickname"
              onChange={(e) => this.userTyping("nickname", e)}
            />
            <h4 className="error-text">
              {this.state.signupError ? this.state.signupError : null}
            </h4>
            <button type="submit" className="btn btn--authentication">
              Sign up
            </button>
          </form>
          <h5 className="h5-form">
            Already have an account? <Link to="/login">Log in</Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default SignUp;
