import { Link } from "react-router-dom";
import React from "react";
import { disableRightMiddleClick } from "../utilities/helper";
import "./FormAuthentication.scss";
import "./main.scss";
const firebase = require("firebase");

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
  componentDidMount = () => {
    disableRightMiddleClick();
  };
  checkNicknameValid = (nickname) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(nickname);
  };
  formIsValid = () =>
    this.state.password === this.state.passwordConfirmation &&
    this.state.email !== null &&
    this.state.password !== null &&
    this.state.passwordConfirmation !== null &&
    this.state.nickname !== null &&
    this.checkNicknameValid(this.state.nickname);
  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;
      case "nickname":
        this.setState({ nickname: e.target.value });
        break;
      default:
        break;
    }
  };
  submitSignup = (e) => {
    e.preventDefault();
    if (!this.formIsValid()) {
      switch (true) {
        case this.state.email === null:
          this.setState({ signupError: "You must enter an email address" });
          return;
        case this.state.password === null:
          this.setState({ signupError: "You must enter a password" });
          return;
        case this.state.password !== this.state.passwordConfirmation:
          this.setState({ signupError: "Passwords do not match" });
          return;
        case this.state.nickname === null:
          this.setState({ signupError: "You must enter a nickname" });
          return;
        case !this.checkNicknameValid(this.state.nickname):
          this.setState({ signupError: "Nickname must only include letters." });
          return;
      }
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email.toLowerCase(),
        this.state.password
      )
      .then(
        (authRes) => {
          const userObj = {
            email: authRes.user.email,
            nickname: this.state.nickname,
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email.toLowerCase())
            .set(userObj)
            .then(
              async () => {
                const likedJobs = [];
                await firebase
                  .firestore()
                  .collection("jobs")
                  .doc(this.state.email)
                  .set({
                    likedJobs: [...likedJobs],
                  });
                this.props.history.push("/jobs");
              },
              (dbError) => {
                this.setState({ signupError: "Failed to add user" });
              }
            );
        },
        (authError) => {
          this.setState({ signupError: authError.message });
        }
      );
  };
}

export default SignUp;
