import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <img src="https://svgshare.com/i/SkP.svg" alt="" />
        <ul className="right">
          <li>Jobs</li>
          <li>My Likes</li>
          <li>GitHub Source</li>
          <li>
            <button>Log Out</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
