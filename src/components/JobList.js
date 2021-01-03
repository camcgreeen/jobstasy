import { Link } from "react-router-dom";
import React from "react";
import JobCard from "./JobCard";

class JobList extends React.Component {
  render() {
    return (
      <>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </>
    );
    // return <h1>JobList</h1>;
    //should the pagination part go here or in a separate component?
  }
}

export default JobList;
