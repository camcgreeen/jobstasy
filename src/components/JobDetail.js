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
        </div>
        <div className="container">
          <div className="job-detail-info">
            <div className="job-detail-info__right">
              <div className="job-detail-info__right__posted-applications">
                Posted 8 days ago · 98 applicants
              </div>
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
