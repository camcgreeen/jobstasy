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
            src="https://svgshare.com/i/SpD.svg"
            alt=""
          />
          <h1 className="job-detail-bg__title">Product Operations Analyst</h1>
          <h2 className="job-detail-bg__company">Patreon</h2>
        </div>
        <div className="job-detail-info">
          <div className="job-detail-info__description">
            <h1>Job description</h1>
            <p>
              Our Strategic Partnerships team is growing and our goal is to
              build the best partner programs and channels to reach out to more
              customers in more industries and more geographies. <br /> We are
              looking for a Sr. Global Alliance Manager who has extensive
              experience working with ecommerce system integrators, digital
              agencies and consulting providers.
            </p>
            <h1>What you'll do</h1>
            <p>
              Reporting directly to the VP of Strategic Partnerships, you will
              have a unique opportunity to shape our channel strategy globally
              and impact Sift’s growth. You will be creating trusted
              relationships with key strategic partners, develop mutually
              beneficial go-to-market plans and ensure Sift is their preferred
              Digital Trust and Safety solution. You like to earn trust with
              your partners by leveraging your interpersonal skills, industry
              knowledge and curiosity. You have excellent businees planning
              skills and you are used to working with cross functional teams to
              ensure the success of your go-to-market plans with your partners.
            </p>
            <h1>Key responsibilities</h1>
            <p>
              Reporting directly to the VP of Strategic Partnerships, you will
              have a unique opportunity to shape our channel strategy globally
              and impact Sift’s growth. You will be creating trusted
              relationships with key strategic partners, develop mutually
              beneficial go-to-market plans and ensure Sift is their preferred
              Digital Trust and Safety solution. You like to earn trust with
              your partners by leveraging your interpersonal skills, industry
              knowledge and curiosity. You have excellent businees planning
              skills and you are used to working with cross functional teams to
              ensure the success of your go-to-market plans with your partners.
            </p>
          </div>
          <div className="job-detail-info__left">
            <div className="job-detail-info__left__apply">
              <div className="job-detail-info__left__apply__section">
                <p className="job-detail-info__left__apply__section__now">
                  Apply now
                </p>
                <div className="job-detail-info__left__apply__section__now__btn">
                  <p className="job-detail-info__left__apply__section__now__btn__apply">
                    Apply
                  </p>
                  <svg
                    className="job-detail-info__left__apply__section__now__btn__arrow"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    // fill={this.state.viewJobHovered ? "#7A80AA" : "#f7aeae"}
                    // fill="white"
                    // fill="#f7aeae"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4108 0.180472C13.1471 -0.0601572 12.7083 -0.0601572 12.4355 0.180472C12.1718 0.412971 12.1718 0.799928 12.4355 1.03189L17.3809 5.39301H1.06169C0.681273 5.39355 0.378906 5.66019 0.378906 5.99567C0.378906 6.33114 0.681273 6.60645 1.06169 6.60645H17.3809L12.4355 10.9594C12.1718 11.2001 12.1718 11.5876 12.4355 11.8195C12.7083 12.0602 13.1477 12.0602 13.4108 11.8195L19.5269 6.42598C19.7998 6.19348 19.7998 5.80652 19.5269 5.57456L13.4108 0.180472Z"
                      // fill={this.state.viewJobHovered ? "#f7aeae" : "#7A80AA"}
                      fill="#FF7663"
                      style={{ transition: "fill 0.2s ease-in-out" }}
                    />
                  </svg>
                </div>
              </div>
              <p>This could be the start of something wonderful!</p>
            </div>
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
              </div>
            </div>
          </div>
        </div>
        <h1>Companies section</h1>
        <Footer />
      </>
    );
  }
  componentDidMount = () => {
    console.log(`Job ID = ${this.props.match.params.id}`);
  };
}

export default JobDetail;
