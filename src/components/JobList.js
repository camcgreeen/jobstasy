import { Link } from "react-router-dom";
import React from "react";
import JobCard from "./JobCard";
import "./main.scss";

class JobList extends React.Component {
  render() {
    return (
      <>
        {
          // !!IMPORTANT!! - used for both JobList and Likes so list should be fed in via props
        }
        <Link to={`/jobs/job1`} style={{ textDecoration: "none" }}>
          <JobCard />
        </Link>
        <Link to={`/jobs/job2`} style={{ textDecoration: "none" }}>
          <JobCard />
        </Link>
        <Link to={`/jobs/job3`} style={{ textDecoration: "none" }}>
          <JobCard />
        </Link>
        <Link to={`/jobs/job4`} style={{ textDecoration: "none" }}>
          <JobCard />
        </Link>
      </>
    );
    //should the pagination part go here or in a separate component?
  }
}

export default JobList;
