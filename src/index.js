import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Jobs from "./components/Jobs";
import Likes from "./components/Likes";
import JobDetail from "./components/JobDetail";
import ScrollToTop from "./components/ScrollToTop";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDSdLiJqn6nILt4u0pMB8L_UrAvgofINN0",
  authDomain: "jobstasy.firebaseapp.com",
  projectId: "jobstasy",
  storageBucket: "jobstasy.appspot.com",
  messagingSenderId: "550293971299",
  appId: "1:550293971299:web:6decad660871b21790f356",
});

const routing = (
  <Router>
    <div id="routing-container">
      <ScrollToTop>
        <Route exact path="/">
          <Redirect to="/jobs" />
        </Route>
        <Route path="/login" component={LogIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/jobs" exact component={Jobs}></Route>
        <Route path="/likes" component={Likes}></Route>
        <Route path="/jobs/:id" component={JobDetail}></Route>
      </ScrollToTop>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
