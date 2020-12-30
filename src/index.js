import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Jobs from "./components/Jobs";
import Likes from "./components/Likes";
import JobDetail from "./components/JobDetail";

const routing = (
  <Router>
    <div id="routing-container">
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LogIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/jobs" exact component={Jobs}></Route>
      <Route path="/likes" component={Likes}></Route>
      <Route path="/jobs/:id" component={JobDetail}></Route>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
