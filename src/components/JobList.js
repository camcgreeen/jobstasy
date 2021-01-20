import { Link } from "react-router-dom";
import React from "react";
import JobCard from "./JobCard";
import "./main.scss";
import "./JobList.scss";

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: false,
    };
  }
  render() {
    return (
      <ul style={{ listStyle: "none" }}>
        {!this.props.noJobsFound ? (
          this.props.jobs.length > 0 ? (
            this.props.jobs.map((job) => {
              return (
                <li key={job.id}>
                  <Link
                    to={{
                      pathname: `/jobs/${job.id}`,
                      state: {
                        details: job,
                        email: this.props.email,
                        nickname: this.props.nickname,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <JobCard job={job} onMouseDown={this.handleMouseDown} />
                  </Link>
                </li>
              );
            })
          ) : (
            <div className="lds-dual-ring"></div>
          )
        ) : (
          <h1 className="no-results">
            {this.props.type === "jobs"
              ? "Sorry! No results found."
              : "No results found. Like some jobs or clear any applied filters."}
          </h1>
        )}
      </ul>
    );
  }
}

export default JobList;
