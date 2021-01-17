import { Link } from "react-router-dom";
import React from "react";
import "./FormAuthentication.scss";
import "./main.scss";
import { generateRandomString } from "../utilities/helper";
const firebase = require("firebase");

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
  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  };
  createAndLoginDemoUser = async () => {
    const demoUser = this.generateRandomString(10);
    const demoEmail = `${demoUser}@gmail.com`;
    const demoPassword = "thisisademo";
    const demoNickname = "Demo";
    await this.setState({
      email: demoEmail,
      password: demoPassword,
      nickname: demoNickname,
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email.toLowerCase(),
        this.state.password
      )
      .then((authRes) => {
        console.log("authRes = ", authRes);
        const userObj = {
          email: authRes.user.email,
          nickname: this.state.nickname,
        };
        // this is the bit where we add the user to our database
        // this is separate to firebase authentication bit
        firebase
          .firestore()
          .collection("users")
          .doc(this.state.email)
          .set(userObj)
          .then(async () => {
            const likedJobs = [];
            await firebase
              .firestore()
              .collection("jobs")
              .doc(this.state.email)
              .set({
                likedJobs: [...likedJobs],
              });
            this.props.history.push("/jobs");
          });
      });
  };
  generateRandomString = (length) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  };
  submitLogin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.email.toLowerCase(),
        this.state.password
      )
      .then(
        () => {
          // const user = firebase.auth().currentUser;
          // user
          //   .sendEmailVerification()
          //   .then(() => {
          //     // console.log("authRes", authRes);
          //     console.log("Email verification link sent to");
          //   })
          //   .catch((err) => console.log(err));
          this.props.history.push("/jobs");
        },
        (err) => {
          this.setState({ loginError: err.message });
          console.log(err);
        }
      );
  };
}

export default LogIn;
