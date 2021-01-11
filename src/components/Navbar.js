import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    return (
      <>
        <nav>
          <NavLink to="/jobs">
            <img
              src="https://svgshare.com/i/Sub.svg"
              className="logo"
              alt=""
              style={{
                visibility:
                  this.state.menuOpen && window.innerWidth <= 1024
                    ? "hidden"
                    : "visible",
              }}
            />
          </NavLink>
          <div className="collapsible">
            <ul
              className={
                this.state.menuOpen
                  ? "collapsible__links visible"
                  : "collapsible__links"
              }
            >
              <NavLink
                to="/jobs"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  // width: "60px",
                }}
              >
                <li className="collapsible__links__link">Jobs</li>
              </NavLink>
              <NavLink
                to={{
                  pathname: "/likes",
                  state: { menuOpen: this.state.menuOpen },
                }}
                // to="/likes"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                <li className="collapsible__links__link">My Likes</li>
              </NavLink>
              <a
                href="https://github.com/camcgreen/jobstasy"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  margin: 0,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="links__github">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.47833 0 0 4.59069 0 10.2528C0 14.7828 2.865 18.6259 6.83917 19.9819C7.33833 20.0767 7.5 19.7589 7.5 19.4889V17.5801C4.71833 18.2004 4.13917 16.3703 4.13917 16.3703C3.68417 15.1853 3.02833 14.87 3.02833 14.87C2.12083 14.2335 3.0975 14.2471 3.0975 14.2471C4.10167 14.3189 4.63 15.304 4.63 15.304C5.52167 16.871 6.96917 16.4182 7.54 16.1559C7.62917 15.4937 7.88833 15.0409 8.175 14.7854C5.95417 14.5248 3.61917 13.6456 3.61917 9.71795C3.61917 8.59783 4.01 7.68362 4.64917 6.96593C4.54583 6.70704 4.20333 5.66382 4.74667 4.25235C4.74667 4.25235 5.58667 3.97723 7.4975 5.30326C8.295 5.07599 9.15 4.96236 10 4.95808C10.85 4.96236 11.7058 5.07599 12.505 5.30326C14.4142 3.97723 15.2525 4.25235 15.2525 4.25235C15.7967 5.66467 15.4542 6.7079 15.3508 6.96593C15.9925 7.68362 16.38 8.59868 16.38 9.71795C16.38 13.6559 14.0408 14.5231 11.8142 14.7769C12.1725 15.0947 12.5 15.7184 12.5 16.6753V19.4889C12.5 19.7614 12.66 20.0818 13.1675 19.981C17.1383 18.6234 20 14.7811 20 10.2528C20 4.59069 15.5225 0 10 0Z"
                      fill="#5D6598"
                    />
                  </svg>
                  {/* <p>Source</p> */}
                  Source
                </li>
              </a>
              <li className="links__logout">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7527 9.52072L17.6127 8.01205C17.225 7.73873 16.6891 8.01705 16.6891 8.49096V9.41369H6.4141C6.09051 9.41369 5.82812 9.67604 5.82812 9.99967C5.82812 10.3233 6.09051 10.5856 6.4141 10.5856H16.689V11.5083C16.689 11.9853 17.2278 12.2585 17.6126 11.9872L19.7526 10.4785C20.0794 10.2483 20.086 9.75619 19.7527 9.52072Z"
                    fill="#5D6598"
                  />
                  <path
                    d="M16.8153 13.7625C16.5352 13.6005 16.1767 13.6962 16.0146 13.9763C14.6382 16.3559 12.0653 17.9533 9.12512 17.9533C4.73973 17.9533 1.17191 14.3855 1.17191 10.0001C1.17191 5.61473 4.73973 2.04691 9.12512 2.04691C12.0673 2.04691 14.639 3.64586 16.0146 6.02383C16.1766 6.30398 16.5352 6.39957 16.8152 6.23766C17.0954 6.07562 17.1911 5.71715 17.0291 5.43703C15.446 2.70039 12.4894 0.875 9.12512 0.875C4.08164 0.875 0 4.95621 0 10.0001C0 15.0436 4.08121 19.1252 9.12512 19.1252C12.4909 19.1252 15.4467 17.2986 17.0291 14.5631C17.1911 14.283 17.0954 13.9246 16.8153 13.7625Z"
                    fill="#5D6598"
                  />
                </svg>
                {/* <p>Source</p> */}
                Log Out
              </li>
              {/* <li>
            <button className="btn btn--log-out">Log Out</button>
          </li> */}
            </ul>
            {/* <div
            className="collapsible__menu-btn"
            // style={{ width: "20px", height: "20px" }}
            onClick={this.toggleHamburger}
            className={
              this.state.menuOpen
                ? "collapsible__menu-btn open"
                : "collapsible__menu-btn"
            }
          >
            <div className="collapsible__menu-btn__burger"></div>
          </div> */}
            <div
              onClick={this.toggleHamburger}
              className={
                this.state.menuOpen
                  ? "collapsible__menu-btn open"
                  : "collapsible__menu-btn"
              }
            >
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
            </div>
          </div>
        </nav>
        <div
          className={
            this.state.menuOpen ? "mobile-menu visible" : "mobile-menu"
          }
        >
          <ul className="mobile-menu__links">
            <NavLink to="/jobs" style={{ textDecoration: "none" }}>
              <li className="mobile-menu__links__link">Jobs</li>
            </NavLink>
            <NavLink to="/likes" style={{ textDecoration: "none" }}>
              <li className="mobile-menu__links__link">My Likes</li>
            </NavLink>
            <a
              href="https://github.com/camcgreen/jobstasy"
              style={{
                textDecoration: "none",
                display: "inline-block",
                margin: 0,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mobile-menu__links__link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.47833 0 0 4.59069 0 10.2528C0 14.7828 2.865 18.6259 6.83917 19.9819C7.33833 20.0767 7.5 19.7589 7.5 19.4889V17.5801C4.71833 18.2004 4.13917 16.3703 4.13917 16.3703C3.68417 15.1853 3.02833 14.87 3.02833 14.87C2.12083 14.2335 3.0975 14.2471 3.0975 14.2471C4.10167 14.3189 4.63 15.304 4.63 15.304C5.52167 16.871 6.96917 16.4182 7.54 16.1559C7.62917 15.4937 7.88833 15.0409 8.175 14.7854C5.95417 14.5248 3.61917 13.6456 3.61917 9.71795C3.61917 8.59783 4.01 7.68362 4.64917 6.96593C4.54583 6.70704 4.20333 5.66382 4.74667 4.25235C4.74667 4.25235 5.58667 3.97723 7.4975 5.30326C8.295 5.07599 9.15 4.96236 10 4.95808C10.85 4.96236 11.7058 5.07599 12.505 5.30326C14.4142 3.97723 15.2525 4.25235 15.2525 4.25235C15.7967 5.66467 15.4542 6.7079 15.3508 6.96593C15.9925 7.68362 16.38 8.59868 16.38 9.71795C16.38 13.6559 14.0408 14.5231 11.8142 14.7769C12.1725 15.0947 12.5 15.7184 12.5 16.6753V19.4889C12.5 19.7614 12.66 20.0818 13.1675 19.981C17.1383 18.6234 20 14.7811 20 10.2528C20 4.59069 15.5225 0 10 0Z"
                    fill="#5D6598"
                  />
                </svg>
                {/* <p>Source</p> */}
                Source
              </li>
            </a>
            <li className="mobile-menu__links__link mobile-menu__links__link__logout">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7527 9.52072L17.6127 8.01205C17.225 7.73873 16.6891 8.01705 16.6891 8.49096V9.41369H6.4141C6.09051 9.41369 5.82812 9.67604 5.82812 9.99967C5.82812 10.3233 6.09051 10.5856 6.4141 10.5856H16.689V11.5083C16.689 11.9853 17.2278 12.2585 17.6126 11.9872L19.7526 10.4785C20.0794 10.2483 20.086 9.75619 19.7527 9.52072Z"
                  fill="#5D6598"
                />
                <path
                  d="M16.8153 13.7625C16.5352 13.6005 16.1767 13.6962 16.0146 13.9763C14.6382 16.3559 12.0653 17.9533 9.12512 17.9533C4.73973 17.9533 1.17191 14.3855 1.17191 10.0001C1.17191 5.61473 4.73973 2.04691 9.12512 2.04691C12.0673 2.04691 14.639 3.64586 16.0146 6.02383C16.1766 6.30398 16.5352 6.39957 16.8152 6.23766C17.0954 6.07562 17.1911 5.71715 17.0291 5.43703C15.446 2.70039 12.4894 0.875 9.12512 0.875C4.08164 0.875 0 4.95621 0 10.0001C0 15.0436 4.08121 19.1252 9.12512 19.1252C12.4909 19.1252 15.4467 17.2986 17.0291 14.5631C17.1911 14.283 17.0954 13.9246 16.8153 13.7625Z"
                  fill="#5D6598"
                />
              </svg>
              {/* <p>Source</p> */}
              Log Out
            </li>
          </ul>
        </div>
      </>
    );
  }
  toggleHamburger = () => {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true });
    } else {
      this.setState({ menuOpen: false });
    }
  };
  componentDidUpdate = () => {
    console.log(this.state);
  };
}

export default Navbar;
