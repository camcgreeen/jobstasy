import { Link } from "react-router-dom";
import React from "react";
import { emailAddress } from "../utilities/helper";
import "./main.scss";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/jobs">
          <img
            className="footer__img"
            src="https://svgshare.com/i/SxA.svg"
            alt=""
          />
        </Link>
        <ul className="footer__links">
          <li className="footer__links__email">
            <a
              href={`mailto:${emailAddress}`}
              style={{
                fontSize: "1.55rem",
                textDecoration: "none",
              }}
            >
              {emailAddress}
            </a>
          </li>
          <br />
          <br />
          <li>
            <Link to="/jobs" style={{ textDecoration: "none" }}>
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/likes`,
                state: {
                  email: this.props.email,
                  nickname: this.props.nickname,
                },
              }}
              style={{ textDecoration: "none" }}
            >
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
              GitHub Source
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
