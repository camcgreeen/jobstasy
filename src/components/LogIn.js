import { Link } from "react-router-dom";
import React from "react";
import "./FormAuthentication.scss";
import "./main.scss";
// import { generateRandomString, createDefaultNotes } from "../helpers";
// const firebase = require("firebase");

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loginError: "",
    };
  }
  render() {
    return (
      <div className="bg-authentication">
        <div className="container-authentication">
          <Link to="/login">
            <img
              className="logo-text"
              src="https://svgshare.com/i/Sub.svg"
              alt=""
            />
          </Link>
          <button
            type="submit"
            className="btn btn--authentication"
            onClick={this.createAndLoginDemoUser}
          >
            Log in as a demo user
          </button>
          <h4 className="h4-form">
            No email or password is required to log in as a demo user
          </h4>
          <span class="separator-row">
            <span class="separator-row__horizontal-line"></span>
            <span class="separator-row__label">or</span>
            <span class="separator-row__horizontal-line"></span>
          </span>
          <form onSubmit={(e) => this.submitLogin(e)}>
            <input
              // autoFocus
              type="text"
              placeholder="Email"
              className="input input--email"
              onChange={(e) => this.userTyping("email", e)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input--password-confirmation"
              onChange={(e) => this.userTyping("password", e)}
            />
            <h4 className="error-text">
              {this.state.loginError ? this.state.loginError : null}
            </h4>
            <button
              type="submit"
              className="btn btn--authentication btn--login"
            >
              Log in
            </button>
          </form>
          <h5 className="h5-form">
            Don't have an account?{" "}
            <Link to="/signup" className="h5-form__link">
              Sign up
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default LogIn;
