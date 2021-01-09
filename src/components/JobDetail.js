import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./JobDetail.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

class JobDetail extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="job-detail-bg">
          <img
            className="job-detail-bg__img"
            src="https://svgshare.com/i/Sxk.svg"
            alt=""
          />
          <h1 className="job-detail-bg__title">Product Operations Analyst</h1>
          <h2 className="job-detail-bg__company">
            Apple{" "}
            <span className="job-detail-bg__company__location">
              · London, UK
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
                Posted 8 days ago · 98 applicants
              </div>
              <button className="btn btn--like">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99998 16.9986C8.74373 16.9986 8.49667 16.9058 8.30414 16.7371C7.57698 16.1013 6.87592 15.5038 6.25739 14.9767L6.25423 14.974C4.4408 13.4286 2.87484 12.094 1.78528 10.7794C0.567305 9.30968 0 7.9162 0 6.39391C0 4.91487 0.507155 3.55037 1.42795 2.55157C2.35972 1.54097 3.63825 0.984375 5.02843 0.984375C6.06746 0.984375 7.01902 1.31287 7.85658 1.96065C8.27928 2.28763 8.66243 2.68781 8.99998 3.15459C9.33768 2.68781 9.72069 2.28763 10.1435 1.96065C10.9811 1.31287 11.9326 0.984375 12.9717 0.984375C14.3617 0.984375 15.6404 1.54097 16.5722 2.55157C17.4929 3.55037 18 4.91487 18 6.39391C18 7.9162 17.4328 9.30968 16.2148 10.7792C15.1253 12.094 13.5594 13.4285 11.7463 14.9737C11.1267 15.5016 10.4245 16.1001 9.69569 16.7374C9.50329 16.9058 9.2561 16.9986 8.99998 16.9986V16.9986ZM5.02843 2.03879C3.93626 2.03879 2.93293 2.47467 2.20303 3.26624C1.46228 4.06975 1.05427 5.18047 1.05427 6.39391C1.05427 7.67422 1.53012 8.81927 2.59703 10.1066C3.62823 11.3509 5.16205 12.658 6.93799 14.1715L6.94129 14.1743C7.56215 14.7034 8.26596 15.3033 8.99847 15.9438C9.73538 15.302 10.4403 14.7012 11.0624 14.1713C12.8382 12.6578 14.3719 11.3509 15.4031 10.1066C16.4698 8.81927 16.9457 7.67422 16.9457 6.39391C16.9457 5.18047 16.5377 4.06975 15.7969 3.26624C15.0672 2.47467 14.0637 2.03879 12.9717 2.03879C12.1716 2.03879 11.437 2.29312 10.7884 2.79465C10.2104 3.24179 9.80775 3.80704 9.57168 4.20255C9.45029 4.40593 9.2366 4.52733 8.99998 4.52733C8.76337 4.52733 8.54968 4.40593 8.42828 4.20255C8.19235 3.80704 7.7897 3.24179 7.21155 2.79465C6.56295 2.29312 5.82837 2.03879 5.02843 2.03879V2.03879Z"
                    fill="#4449B0"
                  />
                </svg>
              </button>
              <div className="job-detail-info__right__description">
                <h1>Job description</h1>
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
                </p>
              </div>
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
                  <p className="value">December 20th, 2020</p>
                  <p className="key">Job type</p>
                  <p className="value">Full Time</p>
                  <p className="key">Salary</p>
                  <p className="value">£65k-85k GBP</p>
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
        <Footer />
      </>
    );
  }
  componentDidMount = () => {
    console.log(`Job ID = ${this.props.match.params.id}`);
  };
}

export default JobDetail;
