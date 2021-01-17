import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./JobCard.scss";
import { convertSalary } from "../utilities/helper";

class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewJobHovered: false,
    };
  }
  render() {
    const { job } = this.props;
    return (
      <div className="job-card">
        <div className="job-card__left">
          <img
            className="job-card__left__img"
            // src="https://svgshare.com/i/Sxk.svg"
            src={job.company_logo}
            alt=""
          />
          <div className="job-card__left__info">
            <div className="job-card__left__info__title">{job.title}</div>
            <div className="job-card__left__info__details">
              <div className="job-card__left__info__details__company">
                {job.company}
              </div>
              <div className="job-card__left__info__details__salary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="job-card__left__info__details__salary__coins"
                >
                  <path
                    d="M11.8125 0.5625C8.81325 0.5625 5.625 1.548 5.625 3.375V5.625C5.625 5.9355 5.877 6.1875 6.1875 6.1875C6.498 6.1875 6.75 5.9355 6.75 5.625V5.03888C7.94362 5.7915 9.91463 6.1875 11.8125 6.1875C13.7104 6.1875 15.6814 5.7915 16.875 5.03888V5.625C16.875 6.17513 15.4913 7.05263 12.8903 7.26975C12.582 7.2945 12.3514 7.56788 12.3772 7.87725C12.4009 8.17088 12.6472 8.3925 12.9364 8.3925C12.9532 8.3925 12.9679 8.39138 12.9847 8.39025C14.4495 8.26763 15.9086 7.8885 16.875 7.27313V7.875C16.875 8.35538 15.8558 9.04613 13.9646 9.38025C13.6597 9.43425 13.455 9.72675 13.509 10.0316C13.5574 10.3039 13.7947 10.4963 14.0614 10.4963C14.094 10.4963 14.1277 10.494 14.1604 10.4873C15.3045 10.2859 16.2203 9.95625 16.875 9.53775V10.125C16.875 10.6054 15.8558 11.2961 13.9646 11.6303C13.6597 11.6843 13.455 11.9768 13.509 12.2816C13.5574 12.5539 13.7947 12.7463 14.0614 12.7463C14.094 12.7463 14.1277 12.744 14.1604 12.7373C15.3045 12.5359 16.2203 12.2051 16.875 11.7878V12.375C16.875 12.8554 15.8558 13.5461 13.9646 13.8803C13.6597 13.9343 13.455 14.2268 13.509 14.5316C13.5574 14.8039 13.7947 14.9963 14.0614 14.9963C14.094 14.9963 14.1277 14.994 14.1604 14.9873C15.3045 14.7859 16.2203 14.4551 16.875 14.0378V14.625C16.875 15.1751 15.4913 16.0526 12.8903 16.2698C12.582 16.2945 12.3514 16.5679 12.3772 16.8773C12.4009 17.1709 12.6472 17.3925 12.9364 17.3925C12.9532 17.3925 12.9679 17.3914 12.9847 17.3903C15.4811 17.181 18 16.2461 18 14.625V3.375C18 1.548 14.8117 0.5625 11.8125 0.5625ZM11.8125 5.0625C8.72213 5.0625 6.75 4.06238 6.75 3.375C6.75 2.68763 8.72213 1.6875 11.8125 1.6875C14.9029 1.6875 16.875 2.68763 16.875 3.375C16.875 4.06238 14.9029 5.0625 11.8125 5.0625Z"
                    fill="#5D6598"
                  />
                  <path
                    d="M6.1875 7.3125C3.18825 7.3125 0 8.298 0 10.125V14.625C0 16.452 3.18825 17.4375 6.1875 17.4375C9.18675 17.4375 12.375 16.452 12.375 14.625V10.125C12.375 8.298 9.18675 7.3125 6.1875 7.3125ZM11.25 14.625C11.25 15.3124 9.27787 16.3125 6.1875 16.3125C3.09713 16.3125 1.125 15.3124 1.125 14.625V14.0389C2.31862 14.7915 4.28963 15.1875 6.1875 15.1875C8.08537 15.1875 10.0564 14.7915 11.25 14.0389V14.625ZM11.25 12.375C11.25 13.0624 9.27787 14.0625 6.1875 14.0625C3.09713 14.0625 1.125 13.0624 1.125 12.375V11.7889C2.31862 12.5415 4.28963 12.9375 6.1875 12.9375C8.08537 12.9375 10.0564 12.5415 11.25 11.7889V12.375ZM6.1875 11.8125C3.09713 11.8125 1.125 10.8124 1.125 10.125C1.125 9.43762 3.09713 8.4375 6.1875 8.4375C9.27787 8.4375 11.25 9.43762 11.25 10.125C11.25 10.8124 9.27787 11.8125 6.1875 11.8125Z"
                    fill="#5D6598"
                  />
                </svg>
                {convertSalary(job.salary_min)}-{convertSalary(job.salary_max)}{" "}
                GBP
              </div>
              <ul className="job-card__left__info__details__tags">
                <li>{job.type}</li>
                {/* <li>{job.location.split(/\s|\,/gm)[0]}</li> */}
                <li>{job.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="job-card__right">
          {/* <div
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
          </div> */}
          <p className="job-card__right__timestamp">
            {this.postedAt(job.created_at)}
          </p>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    // console.log(this.state);
    // console.log(this.state);
  };
  postedAt = (date) => {
    //date = Sat Jan 16 00:00:00 UTC 2021
    // we'd like 12 hours ago
    const timeDifferenceMs = Date.now() - Date.parse(date);
    console.log("timeDifferenceMs = " + timeDifferenceMs);

    //timeDifference = 157,773,614
    const minMs = 60000;
    const hourMs = 3600000;
    const dayMs = 86400000;
    const weekMs = 604800000;
    const monthMs = 2629800000;
    const yearMs = 31536000000;
    switch (true) {
      case timeDifferenceMs < hourMs:
        const minutes = Math.floor(timeDifferenceMs / minMs);
        return minutes === 1
          ? minutes + "minute ago"
          : minutes + " minutes ago";
      case timeDifferenceMs < dayMs:
        const hours = Math.floor(timeDifferenceMs / hourMs);
        return hours === 1 ? hours + " hour ago" : hours + " hours ago";
      case timeDifferenceMs < weekMs:
        const days = Math.floor(timeDifferenceMs / dayMs);
        return days === 1 ? days + " day ago" : days + " days ago";
      case timeDifferenceMs < monthMs:
        const weeks = Math.floor(timeDifferenceMs / weekMs);
        return weeks === 1 ? weeks + " week ago" : weeks + " hours ago";
      case timeDifferenceMs < yearMs:
        const months = Math.floor(timeDifferenceMs / monthMs);
        return months === 1 ? months + " month ago" : months + " months ago";
      case timeDifferenceMs > yearMs:
        const years = Math.floor(timeDifferenceMs / yearMs);
        return years === 1 ? years + " year ago" : years + " years ago";
      default:
        break;
    }

    // return date;
  };
}

export default JobCard;
