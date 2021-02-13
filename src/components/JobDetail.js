import React from "react";
import {
  disableRightMiddleClick,
  convertSalary,
  emailAddress,
} from "../utilities/helper";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import "./main.scss";
import "./Jobs.scss";
import "./JobDetail.scss";
const firebase = require("firebase");

const parse = require("html-react-parser");

class JobDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      jobLiked: false,
      job: {},
      createdAt: "",
      email: null,
      nickname: null,
    };
  }
  render() {
    const { job } = this.state;
    return (
      <>
        <Navbar email={this.state.email} nickname={this.state.nickname} />
        <div className="job-detail-bg">
          <div className="container"></div>
          <img className="job-detail-bg__img" src={job.company_logo} alt="" />
          <h1 className="job-detail-bg__title">{job.title}</h1>
          <h2 className="job-detail-bg__company">
            <a
              href={this.checkUrlExists(job.company_url) && job.company_url}
              style={{ textDecoration: "none" }}
              className={
                this.checkUrlExists(job.company_url)
                  ? "job-detail-bg__company url"
                  : "job-detail-bg__company"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {job.company + " "}
            </a>
            <span className="job-detail-bg__company__location">
              · {job.location}
            </span>
          </h2>
          <a
            className="btn btn--apply"
            href={`mailto:${emailAddress}?subject=Jobstasy - job search app&body=Hi, %0D%0A %0D%0A Sadly you can't actually apply to jobs using this application as the GitHub Jobs API provides no means to do this. %0D%0A %0D%0A You're more than welcome to send me a message on this email address to say hi, though! 👋 %0D%0A %0D%0A Thanks, %0D%0A Cam`}
            style={{ textDecoration: "none" }}
          >
            Apply
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
			c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
			l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
			c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="container">
          <div className="job-detail-info">
            <div className="job-detail-info__right">
              <button
                className="btn btn--like"
                onClick={() => this.toggleJobLiked(job)}
                style={{
                  backgroundColor: this.state.jobLiked ? "#444CF4" : "#4449B0",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M2.61182 5.22656H0.522376C0.235125 5.22656 0 5.4605 0 5.74891V15.1515C0 15.4397 0.234094 15.6737 0.522376 15.6737H2.61182C2.9001 15.6737 3.13419 15.4397 3.13419 15.1515V5.74891C3.13419 5.4605 2.89904 5.22656 2.61182 5.22656Z"
                      fill="white"
                    />
                    <path
                      d="M14.6966 5.22689C14.6125 5.21264 10.6735 5.22689 10.6735 5.22689L11.2237 3.72588C11.6033 2.68919 11.3575 1.10628 10.3042 0.543532C9.9612 0.360282 9.48201 0.268251 9.09567 0.365501C8.8741 0.421251 8.67939 0.567939 8.56332 0.76447C8.42985 0.990502 8.44363 1.25435 8.3961 1.50497C8.27557 2.14066 7.9752 2.74507 7.51004 3.19873C6.69904 3.9897 4.17969 6.27158 4.17969 6.27158V14.6294H12.8857C14.0605 14.6301 14.8304 13.3182 14.251 12.2935C14.9416 11.8511 15.1778 10.9194 14.7733 10.2041C15.464 9.76171 15.7002 8.82999 15.2957 8.11461C16.4874 7.35139 16.089 5.46239 14.6966 5.22689Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {this.state.jobLiked ? "Liked" : "Like"}
              </button>
              {parse(
                `<div class='job-detail-info__right__description'>
                  ${job.description}
                </div>`
              )}
            </div>
            <div className="job-detail-info__left">
              <div className="job-detail-info__left__about">
                <h1 className="job-detail-info__left__about__h1">
                  About this role
                </h1>
                <div className="job-detail-info__left__about__grid">
                  <p className="key">Job posted on</p>
                  <p className="value">{this.state.createdAt}</p>
                  <p className="key">Job type</p>
                  <p className="value">{job.type}</p>
                  <p className="key">Salary</p>
                  <p className="value">
                    £{convertSalary(job.salary_min)}-
                    {convertSalary(job.salary_max)} GBP
                  </p>
                  <p className="key">Applicants</p>
                  <p className="value">{job.applicant_number}</p>
                </div>
                <hr className="job-detail-info__left__about__line" />
                <h1 className="job-detail-info__left__about__h1">
                  Hiring timezones
                </h1>
                <ul className="job-detail-info__left__about__timezones">
                  <li>GMT</li>
                  <li>GMT + 1</li>
                  <li>GMT + 2</li>
                </ul>
                <hr className="job-detail-info__left__about__line" />
                <h2 className="job-detail-info__left__about__h2">
                  Note that some of the information on this page has been
                  generated for the purpose of demonstration
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer email={this.state.email} nickname={this.state.nickname} />
      </>
    );
  }
  componentDidMount = async () => {
    disableRightMiddleClick();
    await this.setState({
      job: this.props.location.state.details,
      email: this.props.location.state.email,
      nickname: this.props.location.state.nickname,
    });
    await this.getLikedJobs();
    const checkAlreadyLiked = this.checkJobAlreadyLiked(this.state.job, [
      ...this.state.likedJobs,
    ]);
    const createdAt = this.convertCreatedDate(this.state.job.created_at);
    await this.setState({
      createdAt,
      jobLiked: checkAlreadyLiked.alreadyLiked,
    });
  };
  checkUrlExists = (url) => {
    const regex = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;
    return regex.test(url);
  };
  convertCreatedDate = (date) => {
    const dateSplit = date.split(" ");
    const res = dateSplit[2] + " " + dateSplit[1] + " " + dateSplit[5];
    return res;
  };
  convertDate = (date) => {
    const dateSplit = date.split(" ");
    const res = dateSplit[2] + " " + dateSplit[1] + " " + dateSplit[5];
    return res;
  };
  postedAt = (date) => {
    const timeDifferenceMs = Date.now() - Date.parse(date);
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
  };
  getLikedJobs = async () => {
    if (this.state.email) {
      let likedJobs;
      await firebase
        .firestore()
        .collection("jobs")
        .doc(this.state.email)
        .get()
        .then(async (res) => {
          const data = res.data();
          likedJobs = data.likedJobs;
          this.setState({ likedJobs });
        });
    }
  };
  checkJobAlreadyLiked = (job, likedJobs) => {
    let alreadyLiked = false;
    let index = null;
    for (let i = 0; i < likedJobs.length; i++) {
      if (likedJobs[i].id === job.id) {
        alreadyLiked = true;
        index = i;
        break;
      }
    }
    return {
      alreadyLiked,
      index,
    };
  };
  toggleJobLiked = async (job) => {
    if (this.state.email) {
      let likedJobs = [...this.state.likedJobs];
      const jobLiked = this.checkJobAlreadyLiked(job, [...likedJobs]);
      if (jobLiked.alreadyLiked) {
        likedJobs.splice(jobLiked.index, 1);
        await this.setState({ jobLiked: false });
      } else {
        likedJobs.push(job);
        await this.setState({ jobLiked: true });
      }
      await firebase
        .firestore()
        .collection("jobs")
        .doc(this.state.email)
        .set({
          likedJobs: [...likedJobs],
        });
      this.getLikedJobs();
    }
  };
}

export default JobDetail;
