import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/jobs">
          <img
            className="footer__img"
            src="https://svgshare.com/i/Spt.svg"
            alt=""
          />
        </Link>
        <ul className="footer__links">
          <li>Contact me</li>
          <li>
            <a
              href="mailto:c.c.green@outlook.com"
              style={{ color: "white", fontSize: "1.25rem" }}
            >
              c.c.green@outlook.com
            </a>
          </li>
          <br />
          <br />

          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <li>Jobs</li>
          </Link>

          <li>
            <Link to="/likes" style={{ textDecoration: "none" }}>
              My Likes
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/camcgreen/jobstasy"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub project repo
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
