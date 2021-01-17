import { Link } from "react-router-dom";
import React from "react";
import "./FormAuthentication.scss";
import "./main.scss";
import { generateRandomString } from "../utilities/helper";
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
  formIsValid = () => this.state.password === this.state.passwordConfirmation;
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
      this.setState({ signupError: "Passwords do not match" });
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
          // this is the bit where we add the user to our database
          // this is separate to firebase authentication bit
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email.toLowerCase())
            .set(userObj)
            .then(
              async () => {
                // this routes us to the dashboard once we've successfully signed up
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
                console.log(dbError);
                this.setState({ signupError: "Failed to add user" });
              }
            );
        },
        (authError) => {
          console.log(authError);
          this.setState({ signupError: authError.message });
        }
      );
  };
}

export default SignUp;
