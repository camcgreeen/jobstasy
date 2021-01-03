import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/jobs">
          <img src="https://svgshare.com/i/SkP.svg" alt="" />
        </Link>
        <ul className="links">
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <li>Jobs</li>
          </Link>
          <Link to="/likes" style={{ textDecoration: "none" }}>
            <li>My Likes</li>
          </Link>
          <a
            href="https://github.com/camcgreen/jobstasy"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>GitHub Source</li>
          </a>
          <li>
            <button className="btn btn--log-out">Log Out</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
