import { Link } from "react-router-dom";
import React from "react";
import { convertSalary } from "../utilities/helper";
import "./main.scss";
import "./Jobs.scss";
import "./JobDetail.scss";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import { generateRandomString } from "../utilities/helper";
const firebase = require("firebase");

const parse = require("html-react-parser");

class JobDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      jobLiked: false,
      job: {},
      createdAt: "",
      // applyBefore: "",
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
          {/* <img
            className="job-detail-bg__img"
            src="https://svgshare.com/i/Sxk.svg"
            alt=""
          /> */}
          <div className="container"></div>
          <img className="job-detail-bg__img" src={job.company_logo} alt="" />
          <h1 className="job-detail-bg__title">{job.title}</h1>
          <h2 className="job-detail-bg__company">
            <a
              href={job.company_url}
              style={{ textDecoration: "none" }}
              className="job-detail-bg__company"
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
            href="mailto:c.c.green@outlook.com?subject=Jobstasy - job search app&body=Hi, %0D%0A %0D%0A Sadly you can't actually apply to jobs using this application as the GitHub Jobs API provides no means to do this. %0D%0A %0D%0A You're more than welcome to send me a message on this email address to say hi, though! 👋 %0D%0A %0D%0A Thanks, %0D%0A Cameron"
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
              // style="enable-background:new 0 0 512 512;"
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
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
        <div className="container">
          <div className="job-detail-info">
            <div className="job-detail-info__right">
              {/* <div className="job-detail-info__right__posted-applications">
                {"Posted " + this.postedAt(this.state.createdAt) + " · "}
                {job.applicant_number === 1
                  ? job.applicant_number + " applicant"
                  : job.applicant_number + " applicants"}
              </div> */}
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
              {/* <div className="job-detail-info__right__description"> */}
              {/* <h1>Job description</h1>
                <br />
                <p>
                  Our Strategic Partnerships team is growing and our goal is to
                  build the best partner programs and channels to reach out to
                  more customers in more industries and more geographies.
                </p>
                <br />
                <p>
                  We are looking for a Sr. Global Alliance Manager who has
                  extensive experience working with ecommerce system
                  integrators, digital agencies and consulting providers.
                </p>
                <br />
                <p>
                  We deliver the largest menu of cannabis to Californians next
                  day for half the price of a dispensary. We are live in Los
                  Angeles, Long Beach, San Francisco, Peninsula, East Bay,
                  Marin, Humboldt, Sacramento, and Vallejo. We're expanding
                  quickly to cover all major California population centers in
                  2021.{" "}
                </p>
                <br />
                <p>
                  Flower Company is backed by some of the best investors in
                  Silicon Valley and cannabis industry insiders. We're building
                  a world class delivery team and effecient and cannabis
                  industry veterans.{" "}
                </p>
                <br />
                <h1>What you’ll do:</h1>
                <br />
                <p>
                  Reporting directly to the VP of Strategic Partnerships, you
                  will have a unique opportunity to shape our channel strategy
                  globally and impact Sift’s growth. You will be creating
                  trusted relationships with key strategic partners, develop
                  mutually beneficial go-to-market plans and ensure Sift is
                  their preferred Digital Trust and Safety solution. You like to
                  earn trust with your partners by leveraging your interpersonal
                  skills, industry knowledge and curiosity. You have excellent
                  businees planning skills and you are used to working with
                  cross functional teams to ensure the success of your
                  go-to-market plans with your partners.
                </p>
                <br />
                <h1>Key responsibilities:</h1>
                <br />
                <p>
                  Reporting directly to the VP of Strategic Partnerships, you
                  will have a unique opportunity to shape our channel strategy
                  globally and impact Sift’s growth. You will be creating
                  trusted relationships with key strategic partners, develop
                  mutually beneficial go-to-market plans and ensure Sift is
                  their preferred Digital Trust and Safety solution. You like to
                  earn trust with your partners by leveraging your interpersonal
                  skills, industry knowledge and curiosity. You have excellent
                  businees planning skills and you are used to working with
                  cross functional teams to ensure the success of your
                  go-to-market plans with your partners.
                </p>
                <br />
                <h1>About us:</h1>
                <br />
                <ul>
                  <li>
                    We are moving faster than software can keep up, so your job
                    is to help pick up the slack for what the product doesn't
                    handle yet by building and opperating excel / google sheet
                    tools so we can MVP as many things as possible{" "}
                  </li>
                  <li>
                    Analyze customer data to inform next sets of MVP tests{" "}
                  </li>
                  <li>Lead special projects and initiatives </li>
                  <li>
                    Provide backup support when software changes require excel
                    data manipulation for compliance information QA{" "}
                  </li>
                  <li>
                    Create models with and on behalf of the CEO + leadership
                    team{" "}
                  </li>
                </ul>
                <br />
                <h1>Requirements: </h1>
                <br />
                <ul>
                  <li>
                    2-4+ years experience at one or combo of top-tier strategy
                    consulting, private equity (operator side), or in an
                    operations role at a fast-growing startup{" "}
                  </li>
                  <li>Ability to juggle many projects at once </li>
                  <li>
                    Skills with quickly manipulating data (including Excel and
                    Google Sheets, others tools a plus) and drawing insights
                    (bottom line up front plz){" "}
                  </li>
                  <li>
                    Amazing people skills and the ability to understand people's
                    needs who don't have experience manipulating data (for tool
                    building and data gathering)
                  </li>
                  <li>Distinguished performance at a top university </li>
                </ul>
                <br />
                <h1>Additional info:</h1>
                <br />
                <p>
                  We deliver the largest menu of cannabis to Californians next
                  day for half the price of a dispensary. We are live in Los
                  Angeles, Long Beach, San Francisco, Peninsula, East Bay,
                  Marin, Humboldt, Sacramento, and Vallejo. We're expanding
                  quickly to cover all major California population centers in
                  2021.
                </p>
                <br />
                <p>
                  Flower Company is backed by some of the best investors in
                  Silicon Valley and cannabis industry insiders. We're building
                  a world class delivery team and effecient and cannabis
                  industry veterans.{" "}
                </p> */}
              {/* {job.description}
              </div> */}
              {parse(
                `<div class='job-detail-info__right__description'>
                  ${job.description}
                </div>`
              )}
            </div>
            <div className="job-detail-info__left">
              <div className="job-detail-info__left__about">
                {/* <h2 className="job-detail-info__left__about__h2">
                  Note that some of the information below is generated for
                  demonstration purposes
                </h2> */}
                <h1 className="job-detail-info__left__about__h1">
                  About this role
                </h1>
                <div className="job-detail-info__left__about__grid">
                  {/* <p className="key">Apply before</p>
                  <p className="value">{this.state.applyBefore}</p> */}
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
                  {/* {job.timezones.map((timezone) => {
                    return <li>{timezone}</li>;
                  })} */}
                  {/* {job.timezones.length === 0 ? "hey" : job.timezones} */}
                  {/* {job.timezones[0]} */}
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
    console.log(`Job ID = ${this.props.match.params.id}`);
    console.log("props", this.props.location.state.details);
    // this.setState(
    //   {
    //     job: this.props.location.state.details,
    //     email: this.props.location.state.email,
    //   },
    //   () => {
    //     const createdAt = this.convertCreatedDate(this.state.job.created_at);
    //     const applyBefore = this.convertApplyDate(this.state.job.apply_before);
    //     this.setState({ createdAt, applyBefore });
    //   }
    // );
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
    // const applyBefore = this.convertApplyDate(this.state.job.apply_before);
    // const createdAt = this.convertDate(this.state.job.created_at);
    // const applyBefore = this.convertDate(this.state.job.apply_before);
    await this.setState({
      createdAt,
      // applyBefore,
      jobLiked: checkAlreadyLiked.alreadyLiked,
    });
  };
  convertCreatedDate = (date) => {
    //date = Sat Jan 16 00:00:00 UTC 2021
    // we'd like Jan 16 2021
    const dateSplit = date.split(" ");
    const res = dateSplit[2] + " " + dateSplit[1] + " " + dateSplit[5];
    return res;
  };
  // convertApplyDate = (date) => {
  //   //date = Tue Feb 16 2021 06:54:31 GMT+0000 (Greenwich Mean Time)
  //   // we'd like Feb 16 2021
  //   // console.log(date.toString());
  //   // return date.toString();
  //   const dateSplit = date.toString().split(" ");
  //   const res = dateSplit[2] + " " + dateSplit[1] + " " + dateSplit[3];
  //   return res;
  // };
  convertDate = (date) => {
    //date = Sat Jan 16 00:00:00 UTC 2021
    // we'd like Jan 16 2021
    const dateSplit = date.split(" ");
    const res = dateSplit[2] + " " + dateSplit[1] + " " + dateSplit[5];
    return res;
  };
  convert;
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
    console.log("likedJobs = ", likedJobs);
    // likedJobs.every((likedJob, idx) => {
    //   if (likedJob.id === job.id) {
    //     console.log("aaaa");
    //     alreadyLiked = true;
    //     index = idx;
    //     return;
    //   }
    // });
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
    // const newNote = {
    //   title: "",
    //   body: "",
    //   timestamp: Date.now(),
    //   backgroundColor: colour,
    //   id: generateRandomString(10),
    // };
    // this.setState(
    //   (prevState) => ({
    //     notes: [...prevState.notes, newNote],
    //     visible: false,
    //   }),
    //   async () => {
    //     if (this.props.email) {
    //       await firebase
    //         .firestore()
    //         .collection("notes")
    //         .doc(this.props.email)
    //         .set({
    //           savedNotes: [...this.state.notes],
    //         });
    //     }
    //   }
    // );
    // ADDED FROM HERE
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
      // jobLiked.alreadyLiked
      //   ? likedJobs.splice(jobLiked.index, 1)
      //   : likedJobs.push(job);
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
