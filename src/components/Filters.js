import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Filters.scss";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      root: {
        // marginLeft: 20,
        // marginRight: 20,
        width: "95%",
        display: "flex",
        margin: "0 auto",
      },
      markLabel: {
        marginTop: "10px",
        marginRight: "10px",
      },
      thumb: {
        color: "white",
        border: "solid #444cf4  1px",
        stroke: "#444cf4",
        height: "30px",
        width: "30px",
        transform: "translate(-10px, -10px)",
        // transform: "translate(-25%, -25%)",
      },
      track: {
        color: "#444cf4",
      },
      rail: {
        color: "#444cf4",
      },
    },
  },
});

const marks = [
  {
    value: 0,
    label: "£0",
  },
  {
    value: 150000,
    label: "£150k",
  },
];

class SalarySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 150000],
    };
  }
  // render() {
  // return (
  // <ThemeProvider theme={muiTheme}>
  //   <Slider
  //     value={this.state.value}
  //     onChange={this.handleChange}
  //     valueLabelDisplay="auto"
  //     valueLabelFormat={(x) =>
  //       x !== 0 ? Math.round(x / 1000).toString() + "k" : 0
  //     }
  //     aria-labelledby="range-slider"
  //     color="primary"
  //     marks={marks}
  //     min={0}
  //     max={150000}
  //     step={5000}
  //   />
  // </ThemeProvider>
  // );
  // }
  // handleChange = (e, newVal) => {
  //   if (newVal[1] > newVal[0]) {
  //     this.setState({ value: [...newVal] });
  //     // props.handleChangeSlider(e, newVal);
  //   }
  // };
}

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersOpen: false,
      inputSort: "most recent",
      inputSalaryMin: 0,
      inputSalaryMax: 150000,
      inputSalaryValue: [0, 150000],
      inputCompanyTag: "",
      inputFullTimeOnly: false,
      companyTags: [],
      jobs: [],
      filteredJobs: [],
    };
  }
  render() {
    const slider = document.getElementById("slider");
    return (
      <>
        <div className="list-info" style={{ marginTop: this.props.marginTop }}>
          <div
            className="filters"
            onClick={() => {
              this.toggleFilters();
              this.toggleNoScroll();
            }}
          >
            {/* <img
              className="filters__img"
              src="https://svgshare.com/i/SxK.svg"
              alt="filter"
            /> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M15.4055 0H0.65625C0.311035 0 0.03125 0.279785 0.03125 0.625C0.03125 2.36548 0.777344 4.0271 2.07825 5.18347L4.81543 7.61634C5.29004 8.03821 5.56226 8.64441 5.56226 9.27955V15.3743C5.56226 15.8723 6.1189 16.1709 6.53382 15.8942L10.2212 13.436C10.395 13.3201 10.4995 13.125 10.4995 12.916V9.27955C10.4995 8.64441 10.7717 8.03821 11.2463 7.61634L13.9834 5.18347C15.2843 4.0271 16.0304 2.36548 16.0304 0.625C16.0304 0.279785 15.7506 0 15.4055 0ZM13.153 4.24915L10.4159 6.68213C9.67469 7.34107 9.24951 8.28772 9.24951 9.27942V12.5815L6.81214 14.2064V9.27955C6.81214 8.28772 6.38697 7.34107 5.64575 6.68213L2.90869 4.24927C2.03149 3.46936 1.47156 2.40076 1.32166 1.24988H14.74C14.5901 2.40076 14.0303 3.46936 13.153 4.24915Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="filters__text">Filters</p>
          </div>
          <p className="job-number">
            {this.props.jobNumber +
              (this.props.jobNumber > 1 ? " jobs" : " job")}
          </p>
        </div>
        <div
          className={
            this.state.filtersOpen ? "filter-overlay visible" : "filter-overlay"
          }
        >
          <div className="filter-overlay__title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter-overlay__title__close"
              onClick={() => {
                this.toggleFilters();
                this.toggleNoScroll();
              }}
            >
              <path
                d="M4.90857 3.51569L20.4649 19.072C20.8552 19.4624 20.8552 20.0959 20.4649 20.4863C20.0746 20.8766 19.441 20.8766 19.0507 20.4863L3.49436 4.9299C3.10403 4.53958 3.10403 3.90601 3.49435 3.51569C3.88468 3.12537 4.51824 3.12537 4.90857 3.51569Z"
                fill="#404668"
              />
              <path
                d="M20.6777 5.12146L5.12132 20.6778C4.731 21.0681 4.09743 21.0681 3.70711 20.6778C3.31678 20.2875 3.31678 19.6539 3.70711 19.2636L19.2635 3.70725C19.6538 3.31693 20.2873 3.31693 20.6777 3.70725C21.068 4.09757 21.068 4.73114 20.6777 5.12146Z"
                fill="#404668"
              />
            </svg>
            <h1>Filters</h1>
          </div>
          <div className="filter-overlay__body">
            <div className="filter-overlay__body__section">
              <form action="" className="filter-overlay__body__section__sort">
                <h2>Sort by </h2>
                {/* <label htmlFor="sortOptions"> */}
                <select
                  name="sortOptions"
                  id="sortOptions"
                  value={this.state.inputSort}
                  onChange={this.handleChangeSort}
                >
                  <option value="most recent">most recent</option>
                  <option value="salary (high to low)">
                    salary (high to low)
                  </option>
                  <option value="salary (low to high)">
                    salary (low to high)
                  </option>
                </select>
                {/* </label> */}
              </form>
            </div>
            <hr />
            <div className="filter-overlay__body__section">
              <h2>Company</h2>
              <div className="filter-overlay__body__section__area">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6875 2.25C4.69111 2.25 2.25 4.69112 2.25 7.6875C2.25 10.6839 4.69111 13.125 7.6875 13.125C8.98363 13.125 10.1751 12.6671 11.1108 11.9062L14.7898 15.5852C14.8416 15.6392 14.9037 15.6823 14.9724 15.712C15.0411 15.7417 15.115 15.7574 15.1899 15.7581C15.2647 15.7589 15.3389 15.7447 15.4082 15.7164C15.4775 15.6881 15.5405 15.6463 15.5934 15.5934C15.6463 15.5405 15.6881 15.4775 15.7164 15.4082C15.7447 15.3389 15.7589 15.2647 15.7581 15.1899C15.7574 15.115 15.7417 15.0411 15.712 14.9724C15.6823 14.9037 15.6392 14.8416 15.5852 14.7898L11.9063 11.1108C12.6671 10.1751 13.125 8.98363 13.125 7.6875C13.125 4.69112 10.6839 2.25 7.6875 2.25ZM7.6875 3.375C10.0759 3.375 12 5.29911 12 7.6875C12 8.85098 11.5411 9.90214 10.7966 10.6765C10.7507 10.7102 10.7102 10.7507 10.6765 10.7966C9.90214 11.5411 8.85098 12 7.6875 12C5.29911 12 3.375 10.0759 3.375 7.6875C3.375 5.29911 5.29911 3.375 7.6875 3.375Z"
                    fill="#A0AEC0"
                  />
                </svg>
                <input
                  id="input-add-company-tag"
                  type="text"
                  placeholder="Search by company"
                  onKeyUp={(e) => this.handleUserInput(e)}
                />
              </div>
              <ul className="filter-overlay__body__section__tags">
                {this.state.companyTags.map((company, i) => {
                  return (
                    <li key={i} onClick={() => this.removeCompanyTag(i)}>
                      {company}
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0)">
                          <path
                            d="M1.63619 1.1719L6.82164 6.35735C6.95175 6.48745 6.95175 6.69864 6.82164 6.82875C6.69153 6.95886 6.48034 6.95886 6.35024 6.82875L1.16478 1.6433C1.03468 1.51319 1.03468 1.302 1.16478 1.1719C1.29489 1.04179 1.50608 1.04179 1.63619 1.1719Z"
                            fill="#4449B0"
                          />
                          <path
                            d="M6.89256 1.7065L1.70711 6.89195C1.577 7.02206 1.36581 7.02206 1.2357 6.89195C1.10559 6.76184 1.10559 6.55066 1.2357 6.42055L6.42115 1.2351C6.55126 1.10499 6.76245 1.10499 6.89256 1.2351C7.02267 1.36521 7.02267 1.5764 6.89256 1.7065Z"
                            fill="#4449B0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="8"
                              height="8"
                              fill="white"
                              transform="translate(0 8) rotate(-90)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr />
            <div className="filter-overlay__body__section">
              <h2>Salary</h2>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  value={this.state.inputSalaryValue}
                  onChange={this.handleChangeSlider}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(x) =>
                    x !== 0 ? Math.round(x / 1000).toString() + "k" : 0
                  }
                  aria-labelledby="range-slider"
                  color="primary"
                  marks={marks}
                  min={0}
                  max={150000}
                  step={5000}
                />
              </ThemeProvider>
            </div>
            <hr />
            <div className="filter-overlay__body__section filter-overlay__body__section__type">
              <h2>Type of work</h2>
              <form action="">
                <input
                  type="checkbox"
                  // value="full-time-only"
                  id="full-time-only"
                  checked={this.state.inputFullTimeOnly}
                  onChange={this.handleUserCheckbox}
                />
                <label htmlFor="full-time-only">Full time only</label>
              </form>
            </div>
          </div>
          <div className="filter-overlay__submit">
            <button
              className="btn btn--clear-filter"
              onClick={this.clearFilters}
            >
              Clear
            </button>
            <button
              className="btn btn--apply-filter"
              onClick={this.applyFilters}
            >
              Confirm
            </button>
          </div>
        </div>
      </>
    );
  }
  componentDidMount = () => {
    const jobs = [
      {
        id: "aa02f7d8-f353-4885-a51d-073613afbc42",
        type: "Full Time",
        url:
          "https://jobs.github.com/positions/aa02f7d8-f353-4885-a51d-073613afbc42",
        created_at: "Sat Jan 09 21:25:42 UTC 2021",
        company: "PAI Health",
        company_url: "https://www.paihealth.com",
        location: "Vancouver, British Columbia",
        title: "Senior Full Stack Engineer",
        description:
          "<p><strong>PAI Health has joined forces with Huami Corporation and is scaling up internationally. Help us lead this growth as a Senior Full Stack Engineer!</strong></p>\n<p><strong>About PAI Health</strong></p>\n<p>Our health software uses wearable technology to turn data insights into tailored, actionable health and wellness advice based on each user’s heart rate and preferences. Our mission is to help people live longer, healthier lives.</p>\n<p><strong>What’s Next for PAI Health?</strong></p>\n<p>Our API product suite recently caught the attention of Huami Corporation, one of the world’s largest smart wearable technology company, who has taken the market by storm since 2013. With Huami’s proven AI algorithms, massive data sets and analytical capabilities, global distribution channels, and demonstrated success launching international products in the health tech space, this acquisition has put PAI Health on a whole new playing field.</p>\n<p>Looking ahead, we have a unique opportunity to scale up our exceptional product, backed by the expertise and power of a global organization.</p>\n<p><strong>What Can You Expect?</strong></p>\n<p>As Senior Full Stack Engineer, you will be a technical leader at PAI Health, overseeing code, setting the standard for quality and acting as a trusted advisor to both leadership and your team. You will work closely with our engineering, product management and product design teams to help translate business requirements into delivered platform features.</p>\n<p>You can expect your day-to-day to include:</p>\n<p><strong>Coding (80%)</strong></p>\n<ol>\n<li>Drive continuous delivery by participating in our agile development process, including estimating effort and complexity of new features and tasks.</li>\n<li>Produce clean, performant code, establishing quality standards with the engineering team through example and leadership.</li>\n<li>Design systems architecture, including infrastructure that enables continuous integration and delivery.</li>\n<li>Contribute fresh ideas and concepts by actively seeking out new technologies and best practices.</li>\n</ol>\n<p><strong>Mentorship (20%)</strong></p>\n<ol>\n<li>Lead projects, gathering requirements, setting timelines, communicating milestones, and proactively troubleshooting.</li>\n<li>Mentor and lead junior engineers, performing code reviews and delivering meaningful feedback.</li>\n<li>Deliver projects successfully by collaborating with project managers, product management and other key stakeholders.</li>\n</ol>\n<p><strong>Your Background</strong></p>\n<ul>\n<li>5+ years of full stack development experience with relevant post-secondary education</li>\n<li>Experience (and interest in) leading teams or projects</li>\n<li>Team player – you include your team in the process, you’re not looking to walk alone</li>\n<li>Mentorship – you lead by example and give and take constructive feedback</li>\n<li>Communication – you can express your ideas concisely and effectively</li>\n<li>Commitment – you’re never afraid to suggest alternatives, but always commit to the collective decision</li>\n<li>Hands-on contributor – you enjoy writing code, solving problems, and being in the trenches</li>\n<li>Process-oriented – you identify as process-oriented</li>\n<li>Confident – you manage stakeholder expectations and know when to say ‘no’</li>\n</ul>\n<p><strong>Your Tech Stack</strong></p>\n<ul>\n<li>Modern full-stack frameworks (NodeJS is ideal)</li>\n<li>Modern front-end languages &amp; frameworks (React is ideal)</li>\n<li>Strong understanding of AWS and cloud native application development (microservices architecture)</li>\n<li>Experience with Docker</li>\n</ul>\n<p><strong>Not Convinced Yet?</strong></p>\n<p>In addition to being part of a great company with a proven product, you’ll get to work on new and interesting technical challenges every day. You will be a trusted leader as we scale up. You will be empowered to succeed in your role with the resources and technology of an established global market leader. We also offer:</p>\n<ul>\n<li>Flexible schedule with a commitment to work-life balance – put your family first, for real</li>\n<li>Competitive compensation with extended benefits to look after the ones you love</li>\n<li>Opportunity to be a valued leader and work closely with our leadership team</li>\n<li>Ongoing training and development opportunities to propel your career</li>\n<li>Leading, modern technology and tools to build and experiment with</li>\n<li>Inclusive and collaborative culture built on communication and respect</li>\n<li>Fun social events to spend time with your teammates</li>\n<li>Social team and a physical environment designed for connection (On-site foosball, ping pong, beer on tap, gym, rooftop patio, and more!)</li>\n</ul>\n<p><strong>Interested in learning more? Apply today with your resume and cover letter!</strong></p>\n<p><em>PAI Health is an Equal Opportunity employer and welcomes everyone to our team. If you need reasonable accommodation at any point in the application or interview process, please let us know. In your application, please feel free to note which pronouns you use (for example: she/her/hers, he/him/his, they/them/theirs, etc).</em></p>\n",
        how_to_apply:
          '<p>Apply on our career site!</p>\n<p><a href="https://paihealth.bamboohr.com/jobs/view.php?id=122">https://paihealth.bamboohr.com/jobs/view.php?id=122</a></p>\n',
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdm1VIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b7ca6a65f7d4184edb73ff81352f5c09395cba99/PAI%20Logo.png",
        salary_min: 50000,
        salary_max: 55000,
      },
      {
        id: "65f747a3-4a1f-47b3-8caf-1d92f6d0a39e",
        type: "Full Time",
        url:
          "https://jobs.github.com/positions/65f747a3-4a1f-47b3-8caf-1d92f6d0a39e",
        created_at: "Sat Jan 09 03:23:58 UTC 2021",
        company: "PAI Health",
        company_url: "https://www.paihealth.com",
        location: "Vancouver, British Columbia",
        title: "Software Development Team Lead",
        description:
          "<p><strong>PAI Health is hiring a Software Development Team Lead with a passion for healthy living to help revolutionize global wellness!</strong></p>\n<p><strong>About PAI Health</strong></p>\n<p>Our health software uses wearable technology to turn data insights into tailored, actionable health and wellness advice based on each user’s heart rate and preferences. Our mission is to help people live longer, healthier lives.</p>\n<p><strong>What’s Next for PAI Health?</strong></p>\n<p>Our API product suite caught the attention of Huami Corporation, one of the world’s largest smart wearable technology company, who has taken the market by storm since 2013. With Huami’s proven AI algorithms, massive data sets and analytical capabilities, global distribution channels, and demonstrated success launching international products in the health tech space, this acquisition has put PAI Health on a whole new playing field.</p>\n<p>Looking ahead, we have a unique opportunity to scale up our product at an international level, backed by the expertise and power of a global organization.</p>\n<p><strong>What to Expect</strong></p>\n<p>As a Team Lead at PAI Health, you will be a trusted advisor to both leadership and your team. You will work cross-departmentally to help translate business requirements into delivered platform features, providing feedback and expertise along the way.</p>\n<p>Your daily responsibilities include:</p>\n<ol>\n<li>Planning – Lead our agile development process, gather project requirements, set timelines, communicate milestones, collaborate with key stakeholders and proactively troubleshoot.</li>\n<li>Execution – Produce clean, performant code and contribute to the design of systems architecture and CI/CD infrastructure.</li>\n<li>Coaching – Lead and mentor junior engineers, establish quality standards, perform code reviews and delivering meaningful feedback to help the team grow.</li>\n<li>Engagement – Motivate team members, lead by example and ensure alignment to company and department objectives, metrics and values.</li>\n<li>Contribution – Advise on fresh ideas and concepts by actively seeking out new technologies and best practices.</li>\n</ol>\n<p><strong>Who You Are</strong></p>\n<ul>\n<li>Experienced – 5+ years of full stack development experience with relevant post-secondary education and experience leading projects or teams</li>\n<li>Team player – you include your team in the process, you’re not looking to walk alone</li>\n<li>Mentorship – you lead by example and give and take constructive feedback</li>\n<li>Communication – you can express your ideas concisely and effectively</li>\n<li>Commitment – you encourage ideation and suggestions, but can evoke a collective decision when it matters</li>\n<li>Hands-on contributor – you enjoy writing code, solving problems, and being in the trenches</li>\n<li>Process-oriented – you see things logically and enjoy optimizing process</li>\n<li>Confident – you manage stakeholder expectations and know when to say ‘no’</li>\n</ul>\n<p><strong>Your Tech Stack</strong></p>\n<ul>\n<li>Modern full-stack frameworks (NodeJS is ideal)</li>\n<li>Modern front-end languages &amp; frameworks (React is ideal)</li>\n<li>Strong understanding of AWS and cloud native application development (microservices architecture)</li>\n<li>Experience with Docker</li>\n</ul>\n<p><strong>Not Convinced Yet?</strong></p>\n<p>In addition to being part of a great company with a proven product, you’ll lead work on new and interesting technical challenges every day. You will be a trusted leader as we scale up. You will be empowered to succeed in your role with the resources and technology of an established global market leader. We also offer:</p>\n<ul>\n<li>Competitive compensation with extended benefits to look after the ones you love</li>\n<li>Flexible schedule with a commitment to work-life balance – put your family first, for real</li>\n<li>Opportunity to be a valued leader and work closely with our leadership team</li>\n<li>Ongoing training and development opportunities to propel your career</li>\n<li>Leading, modern technology and tools to build and experiment with</li>\n<li>Inclusive and collaborative culture built on communication and respect</li>\n<li>Fun social events to spend time with your teammates</li>\n<li>Social team and a physical environment designed for connection (On-site foosball, ping pong, beer on tap, gym, rooftop patio, and more!)</li>\n</ul>\n<p><strong>Excited to learn more? Apply today with your resume and cover letter!</strong></p>\n<p><em>PAI Health is an Equal Opportunity employer and welcomes everyone to our team. If you need reasonable accommodation at any point in the application or interview process, please let us know. In your application, please feel free to note which pronouns you use (for example: she/her/hers, he/him/his, they/them/theirs, etc).</em></p>\n",
        how_to_apply:
          '<p>Apply directly through our career page!</p>\n<p><a href="https://paihealth.bamboohr.com/jobs/view.php?id=124">https://paihealth.bamboohr.com/jobs/view.php?id=124</a></p>\n',
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdk9VIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--610dedda3ec8002b2b35934b4f2d7c6d45460449/PAI%20Logo.png",
        salary_min: 60000,
        salary_max: 70000,
      },
      {
        id: "6986e1a2-990e-4386-9ca7-80a56293a4b3",
        type: "Full Time",
        url:
          "https://jobs.github.com/positions/6986e1a2-990e-4386-9ca7-80a56293a4b3",
        created_at: "Thu Jan 07 11:49:50 UTC 2021",
        company: "Hasura",
        company_url: "https://hasura.io/",
        location: "Remote",
        title: "Support Engineer (Hasura Cloud)",
        description:
          "<p>Hasura is hiring Customer Support Engineers who can help our users get productive with Hasura Cloud. This is a technical customer-facing role with a focus on helping users and customers achieve success in their use of Hasura Cloud.</p>\n<p>You will work with our users to ensure their queries are responded to and their problems are resolved. Internally, you will act as the voice of the user within the company, and liaise with the product and documentation teams to surface necessary changes.</p>\n<p>We are a globally distributed team, with offices in San Francisco.</p>\n<p>What the role will involve:</p>\n<ul>\n<li>Answer questions, troubleshoot problems, and provide deep technical support to our users over email and live chat.</li>\n<li>Schedule calls and/or pair programming sessions as needed to help users resolve problems.</li>\n<li>Special focus on onboarding support to help new users get productive with Hasura Cloud quickly.</li>\n<li>Work with the Product team to tweak the onboarding and overall Product UX for a better developer experience.</li>\n<li>Work with the Documentation team to ensure our docs address common questions and use-cases.</li>\n</ul>\n<p>Requirements:</p>\n<ul>\n<li>Solid understanding of the modern web application stack. You are familiar with one or more of the following technologies: Typescript, React, Angular, Vue, GraphQL, Node.js.</li>\n<li>Previous experience in a customer-facing technical role.</li>\n<li>Creative problem-solving skills, with the ability to troubleshoot problems and identify workarounds.</li>\n<li>Very good written &amp; spoken communication skills in English.</li>\n<li>Bonus: Familiarity with one or more of: Kubernetes/Docker, Android/iOS, Postgres, Java, CI/CD tooling.</li>\n</ul>\n<p>Location:</p>\n<p>This role will be based out of the following locations:</p>\n<ul>\n<li>Our office in Bangalore, India</li>\n<li>Out of US: We hire remotely in these 10 states in the US: Illinois, Virginia, California, Washington State, Maryland, Florida, Colorado, Massachusetts, Oregon, New York.\nWe have an office in SF, and if you're based in SF, you can choose to work out of our office.</li>\n</ul>\n<p>Working at Hasura:</p>\n<p>At Hasura, we help developers build modern apps and APIs faster. Through your work at Hasura, you will have the opportunity to make a lasting impact on both Hasura as well as the larger developer ecosystem.</p>\n<p>As a team, we take a lot of pride in our work. We obsess over the developer experience, and our first priority as a company will always be to make things easier for our users.</p>\n<p>We offer competitive salaries, have a generous vacation policy and provide health insurance for everyone employed with Hasura.</p>\n<p>We are an equal opportunity employer and do not tolerate discrimination of any kind.</p>\n<p>About Hasura:</p>\n<p>Hasura is a venture-backed open-source technology company with offices in San Francisco and Bangalore. Hasura makes your data instantly accessible over a real-time GraphQL API, so you can build and ship modern apps and APIs faster. Hasura connects to your databases, REST servers, GraphQL servers and third-party APIs (eg: Stripe, Salesforce) and provides a unified API across all your data sources.</p>\n<p>We are a globally distributed team, with offices in San Francisco &amp; Bangalore.</p>\n",
        how_to_apply:
          '<p>You can apply using this link:\n<a href="https://hasura.info/3rWJvXP">https://hasura.info/3rWJvXP</a></p>\n',
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3VVIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dae42066003da6174c28bccad65275d46797aee2/logo_black.png",
        salary_min: 35000,
        salary_max: 40000,
        // tags: [this.type, this.location.split(" ")[0]],
      },
      {
        id: "bbe1e167-f135-4b0c-9d78-2f1825b6dac8",
        type: "Full Time",
        url:
          "https://jobs.github.com/positions/bbe1e167-f135-4b0c-9d78-2f1825b6dac8",
        created_at: "Thu Jan 07 11:35:14 UTC 2021",
        company: "Hasura",
        company_url: "https://hasura.io/",
        location: "Remote",
        title: "Fullstack Web Developer",
        description:
          "<p>We are looking for a fullstack web developer who can take ownership of multiple frontend sites at Hasura, both on the UI and backend front.</p>\n<p>You will be a part of a global team realizing a vision to build the next generation of application development powered by GraphQL. Hasura is focused on making data access fast, secure &amp; scalable; so that developer teams or API consumers can immediately get productive. We want to get to a world where data delivery is just another piece of infrastructure.</p>\n<p>We are a globally distributed team, with offices in San Francisco &amp; Bangalore.</p>\n<p>Brief Overview:\nWe are looking for a fullstack web developer (in Bangalore preferably, but we’re open to remote applications as well). Your role will involve creating, improving and maintaining the web assets at Hasura including our main website, docs and learn assets. You will be working closely with the marketing, growth, community and design teams at Hasura.</p>\n<p>We’re looking for someone who is very familiar with web technologies and cares deeply about the end-user experience. Our ideal candidate will be someone who has an extremely high attention to detail, is very focussed on performance, automation, accessibility as well as the aesthetic aspects of the website.</p>\n<p>Key Responsibilities:</p>\n<ul>\n<li>Build and maintain reusable UI components for the web platform.</li>\n<li>Setup APIs for any dynamic functionalities across the website.</li>\n<li>Take ownership of the website metrics focussed on speed - lighthouse metrics, health and monitoring by setting up tooling around it and constantly monitoring for changes.</li>\n<li>Build CMS interfaces for the product and marketing team to be able to quickly make modifications to the website.</li>\n<li>Work with the Growth team for setting up different integration pipelines (database to different external services).</li>\n<li>Setup A/B testing pipeline for React apps.</li>\n<li>Take ownership and initiative of upgrading any legacy components of the architecture in moving to a more modern and maintainable stack.</li>\n<li>Setup CI/CD pipelines for automating deployments of web apps.</li>\n</ul>\n<p>Requirements:</p>\n<ul>\n<li>2+ years of work experience as a fullstack engineer</li>\n<li>In-depth experience with HTML/CSS/Javascript and React/Gatsby.</li>\n<li>Experience with writing, managing and testing APIs in either of Node.js/Golang is a must.</li>\n<li>Working knowledge of Docker and Kubernetes.</li>\n<li>Experience in setting up CI/CD pipelines.</li>\n<li>Good written and verbal communication skills in English.</li>\n</ul>\n<p>Good to have:</p>\n<ul>\n<li>Knowledge of GraphQL / Hasura.</li>\n<li>Good understanding of SEO best practices for frontend.</li>\n<li>Design &amp; UX Experience is a plus.</li>\n</ul>\n<p>Location:</p>\n<p>This role is fully remote. We hire in most countries. If you're applying from the US, we hire remotely in these 10 states in the US: Illinois, Virginia, California, Washington State, Maryland, Florida, Colorado, Massachusetts, Oregon, New York.</p>\n<p>Working at Hasura:</p>\n<p>At Hasura, we help developers build modern apps and APIs faster. Through your work at Hasura, you will have the opportunity to make a lasting impact on both Hasura as well as the larger developer ecosystem.</p>\n<p>As a team, we take a lot of pride in our work. We obsess over the developer experience, and our first priority as a company will always be to make things easier for our users.</p>\n<p>We offer competitive salaries, have a generous vacation policy and provide health insurance for everyone employed with Hasura.</p>\n<p>We are an equal opportunity employer and do not tolerate discrimination of any kind.</p>\n<p>About Hasura:</p>\n<p>Hasura is a venture-backed open-source technology company with offices in San Francisco and Bangalore. Hasura makes your data instantly accessible over a real-time GraphQL API, so you can build and ship modern apps and APIs faster. Hasura connects to your databases, REST servers, GraphQL servers and third party APIs (eg: Stripe, Salesforce) and provides a unified API across all your data sources.</p>\n<p>We are a globally distributed team, with offices in San Francisco &amp; Bangalore.</p>\n",
        how_to_apply:
          '<p>You can apply by visiting the link:\n<a href="https://hasura.info/3s5OANE">https://hasura.info/3s5OANE</a></p>\n',
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2FVIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--06ada3c68c12dc04e0b1429d8f6da0a4cdf2ea43/logo_black.png",
        salary_min: 55000,
        salary_max: 65000,
      },
      {
        id: "37d79e89-f50f-459a-bc29-76e499cd4cba",
        type: "Full Time",
        url:
          "https://jobs.github.com/positions/37d79e89-f50f-459a-bc29-76e499cd4cba",
        created_at: "Thu Jan 07 09:11:18 UTC 2021",
        company: "VISI/ONE GmbH",
        company_url: "https://www.visi-one.com/de",
        location: "Berlin",
        title: "Senior Fullstack Engineer - Javascript",
        description:
          "<p>VISI/ONE is the world's leading company in price labeling systems. Since our foundation in 1998, our products have become today's global standard for more than 40 automotive brands in over 70 countries. We believe in simple, high-quality products that have been developed to perfection. We believe in products that are of inspiring design and quality, surprising our customers with new ideas and unexpected solutions.</p>\n<p>Our CSI (CarSales Intelligence) Display is the world's first product solution with cutting-edge cloud software and NB-IoT hardware technology for automotive digital pricing. With CSI Display, car dealers can update digital price boards inside cars wirelessly and from anywhere. This game-changing technology innovation not only eliminates the inconvenience and inefficiency of traditional paper-based solutions, but also creates entirely new and innovative opportunities to increase dealership profits.</p>\n<p><strong>Tasks</strong></p>\n<p>As a Fullstack Engineer at VISI/ONE you are part of a development team of passionate and dedicated developers. In a collaborative and agile environment, you'll work on the next generation of our highly scalable cloud platform, leveraging the latest cutting-edge technology.</p>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Degree in computer science or equivalent or you have acquired a deep understanding of software development in a comparable education or practical experience.</li>\n<li>Several years of professional experience in software development, design and development of object-oriented software.</li>\n<li>Knowledge of the following web technologies: Node.js, JavaScript/TypeScript, Rest APIs, GraphQL, Test frameworks, React, HTML5 and CSS.</li>\n<li>Good command of SQL.</li>\n<li>Experience with Python is a plus.</li>\n<li>Very good understanding and the passion to write Clean Code with the ability and the need to implement elegant, durable solutions.</li>\n<li>Experience with cloud, micro-service and serverless architecture, ideally on the AWS platform and with common development tools such as versioning, build and test tools.</li>\n<li>Enjoyment of solving complex problems.</li>\n<li>Open-minded towards new technologies and enjoyment of learning.</li>\n<li>Fluent written and spoken English skills, German is a big plus.</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>International team of passionate tech enthusiasts with great team spirit and hands-on mentality.</li>\n<li>Outstanding career opportunities in a growth oriented environment.</li>\n<li>Continuous development of skills and knowledge.</li>\n<li>Startup feeling at a global Market Leader.</li>\n<li>New designed office located in the heart of Berlin.</li>\n<li>Competitive payment structure.</li>\n<li>Last, but not least: beverages, organic fruits and delicious sweets at work – enjoy.</li>\n</ul>\n<p><strong>We look forward to your application!</strong></p>\n",
        how_to_apply:
          '<p><a href="https://visione.join.com/jobs/1726380-senior-fullstack-engineer-javascript?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=senior%2Bfullstack%2Bengineer%2B-%2Bjavascript">https://visione.join.com/jobs/1726380-senior-fullstack-engineer-javascript?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=senior%2Bfullstack%2Bengineer%2B-%2Bjavascript</a></p>\n',
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcm1VIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--583a643cf1cc2cbba7ecaeb1463e0f3f87551df6/visi%20one.png",
        salary_min: 45000,
        salary_max: 55000,
      },
    ];
    this.setState({ jobs });
  };
  handleChangeSlider = (e, val) => {
    this.setState({ inputSalaryValue: [...val] });
  };
  handleChangeSort = (e) => {
    this.setState({ inputSort: e.target.value });
  };
  handleUserInput = (e) => {
    this.setState({ inputCompanyTag: e.target.value });
    e.keyCode === 13
      ? this.addCompanyTag()
      : this.setState({ inputCompanyTag: e.target.value });
  };
  addCompanyTag = () => {
    document.getElementById("input-add-company-tag").value = "";
    let updatedCompanyTags = [...this.state.companyTags];
    updatedCompanyTags.push(this.state.inputCompanyTag);
    this.setState({
      inputCompanyTag: "",
      companyTags: [...updatedCompanyTags],
    });
  };
  handleUserCheckbox = (e) => {
    this.setState({ inputFullTimeOnly: e.target.checked });
  };
  clearFilters = () => {
    this.setState({
      inputSort: "most recent",
      inputSalaryValue: [0, 150000],
      inputCompanyTag: "",
      inputFullTimeOnly: false,
      companyTags: [],
    });
  };
  toggleFilters = () => {
    this.state.filtersOpen
      ? this.setState({ filtersOpen: false })
      : this.setState({ filtersOpen: true });
  };
  toggleNoScroll = () => {
    const body = document.body;
    !this.state.filtersOpen
      ? body.classList.add("no-scroll")
      : body.classList.remove("no-scroll");
  };
  removeCompanyTag = (i) => {
    let updatedCompanyTags = [...this.state.companyTags];
    updatedCompanyTags.splice(i, 1);
    // console.log(updatedCompanyTags);
    this.setState({ companyTags: [...updatedCompanyTags] });
  };
  sortJobs = (jobs, sortBy) => {
    switch (sortBy) {
      case "most recent":
        return jobs.sort(
          (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
        );
      case "salary (high to low)":
        return jobs.sort((a, b) => Number(b.salary_max) - Number(a.salary_max));
      case "salary (low to high)":
        return jobs.sort((a, b) => Number(a.salary_min) - Number(b.salary_min));
      default:
        return [];
    }
  };
  filterJobsByCompany = (jobs, searchTerms) => {
    return jobs.filter((job) => {
      const keywords = job.company.toLowerCase().split(" ");
      let matchFound = false;
      // nested loop mxn complexity, but m and n will always be very low
      searchTerms.forEach((searchTerm) => {
        keywords.forEach((keyword) => {
          if (keyword === searchTerm.toLowerCase()) {
            matchFound = true;
            return;
          }
        });
      });
      return matchFound;
    });
  };
  filterJobsBySalary = (jobs, userMin, userMax) => {
    return jobs.filter((job) => {
      return (
        (job.salary_max >= userMin || job.salary_min >= userMin) &&
        (job.salary_min <= userMax || job.salary_max <= userMax)
      );
    });
  };
  filterJobsByFullTime = (jobs) => {
    return jobs.filter((job) => job.type === "Full Time");
  };
  applyFilters = () => {
    // let filteredJobs = [];
    let filteredJobs = [...this.state.jobs];
    filteredJobs = this.sortJobs(filteredJobs, this.state.inputSort);
    if (this.state.companyTags.length > 0) {
      filteredJobs = this.filterJobsByCompany(
        filteredJobs,
        this.state.companyTags
      );
    }
    filteredJobs = this.filterJobsBySalary(
      filteredJobs,
      this.state.inputSalaryValue[0],
      this.state.inputSalaryValue[1]
    );
    filteredJobs = this.state.inputFullTimeOnly
      ? this.filterJobsByFullTime(filteredJobs)
      : filteredJobs;
    this.setState({ filteredJobs }, console.log(filteredJobs));
  };
}

export default Filters;
