import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Jobs.scss";
import "./JobDetail.scss";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

const parse = require("html-react-parser");

class JobDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      jobLiked: false,
      job: {},
    };
  }
  render() {
    const { job } = this.state;
    return (
      <>
        <Navbar />
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
          <button className="btn btn--apply">
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
          </button>
        </div>
        <div className="container">
          <div className="job-detail-info">
            <div className="job-detail-info__right">
              <div className="job-detail-info__right__posted-applications">
                Posted X days ago · X applicants
              </div>
              <button className="btn btn--like">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5948 3.18661L12 3.74685L12.4051 3.18663C12.8296 2.59975 13.3075 2.10173 13.8304 1.69723C14.8616 0.899833 16.0232 0.5 17.2956 0.5C19.0111 0.5 20.5819 1.18501 21.7285 2.42853C22.8632 3.65939 23.5 5.35416 23.5 7.21252C23.5 9.09882 22.8038 10.8477 21.2348 12.7408L21.2348 12.7408C19.8158 14.4531 17.7661 16.2019 15.3373 18.2717L15.3372 18.2717L15.3165 18.2894C14.4958 18.9889 13.5646 19.7826 12.5983 20.6276L12.598 20.6279C12.433 20.7723 12.2206 20.8523 12 20.8523C11.7794 20.8523 11.5671 20.7724 11.4016 20.6275L11.4013 20.6272C10.4279 19.7762 9.49075 18.9775 8.66603 18.2745L8.66332 18.2722L8.66329 18.2722C6.2341 16.2021 4.18441 14.4532 2.76535 12.741C1.19634 10.8477 0.5 9.09879 0.5 7.21271C0.5 5.35416 1.1368 3.65939 2.27135 2.42853C3.41786 1.18502 4.98889 0.5 6.70441 0.5C7.97679 0.5 9.1384 0.899836 10.1694 1.69721L10.1694 1.69723C10.6925 2.10171 11.1706 2.59991 11.5948 3.18661Z"
                    stroke={this.state.jobLiked ? "none" : "black"}
                    fill={this.state.jobLiked ? "black" : "none"}
                    stroke-width="1px"
                    style={{
                      transition:
                        "stroke 0.2s ease-in-out, fill 0.2s ease-in-out",
                    }}
                  />
                </svg>
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
                `<div class='job-detail-info__right__description'>${job.description}</div>`
              )}
            </div>
            <div className="job-detail-info__left">
              <div className="job-detail-info__left__about">
                <h1 className="job-detail-info__left__about__h1">
                  About this role
                </h1>
                <div className="job-detail-info__left__about__grid">
                  <p className="key">Apply before</p>
                  <p className="value">February 18th, 2021</p>
                  <p className="key">Job posted on</p>
                  <p className="value">{job.created_at + "FORMAT THIS"}</p>
                  <p className="key">Job type</p>
                  <p className="value">{job.type}</p>
                  <p className="key">Salary</p>
                  <p className="value">
                    £{job.salary_min}-{job.salary_max} GBP
                  </p>
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
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </>
    );
  }
  componentDidMount = () => {
    console.log(`Job ID = ${this.props.match.params.id}`);
    console.log("props", this.props.location.state.details);
    this.setState({
      job: this.props.location.state.details,
    });
  };
}

export default JobDetail;
