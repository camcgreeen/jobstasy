import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./JobCard.scss";

class JobCard extends React.Component {
  constructor() {
    super();
    this.state = {
      viewJobHovered: false,
    };
  }
  render() {
    return (
      <div className="job-card">
        <div className="job-card__left">
          <img
            className="job-card__left__img"
            src="https://svgshare.com/i/SpD.svg"
            alt=""
          />
          <div className="job-card__left__info">
            <div className="job-card__left__info__title">
              User Experience Design
            </div>
            <div className="job-card__left__info__company">Patreon</div>
            <ul className="job-card__left__info__tags">
              <li>Full Time</li>
              <li>Senior Level</li>
            </ul>
          </div>
        </div>
        <div className="job-card__right">
          <div
            className="job-card__right__view"
            onMouseEnter={() => this.setState({ viewJobHovered: true })}
            onMouseLeave={() => this.setState({ viewJobHovered: false })}
          >
            <p
              className="job-card__right__view__text"
              style={{
                color: this.state.viewJobHovered ? "#f7aeae" : "#7A80AA",
              }}
            >
              View job
            </p>
            <svg
              className="job-card__right__view__svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              // fill={this.state.viewJobHovered ? "#7A80AA" : "#f7aeae"}
              // fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4108 0.180472C13.1471 -0.0601572 12.7083 -0.0601572 12.4355 0.180472C12.1718 0.412971 12.1718 0.799928 12.4355 1.03189L17.3809 5.39301H1.06169C0.681273 5.39355 0.378906 5.66019 0.378906 5.99567C0.378906 6.33114 0.681273 6.60645 1.06169 6.60645H17.3809L12.4355 10.9594C12.1718 11.2001 12.1718 11.5876 12.4355 11.8195C12.7083 12.0602 13.1477 12.0602 13.4108 11.8195L19.5269 6.42598C19.7998 6.19348 19.7998 5.80652 19.5269 5.57456L13.4108 0.180472Z"
                fill={this.state.viewJobHovered ? "#f7aeae" : "#7A80AA"}
                style={{ transition: "fill 0.2s ease-in-out" }}
              />
            </svg>
          </div>
          <p>1 day ago</p>
        </div>
      </div>
    );
  }
  componentDidUpdate = () => {
    // console.log(this.state);
  };
}

export default JobCard;
