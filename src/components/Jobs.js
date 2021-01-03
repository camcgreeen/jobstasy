import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Jobs.scss";
import Navbar from "./Navbar";
import SearchField from "./SearchField";
import ListInformation from "./ListInformation";
import JobList from "./JobList";
import Footer from "./Footer";

class Jobs extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SearchField />
        <div className="container">
          <ListInformation />
          <JobList />
        </div>
        <Footer />
      </>
    );
  }
  componentDidMount = () => {
    console.log(this.searchJobs("node"));
  };
  // THIS WILL NEED REVISION BEFORE DEPLOYMENT
  // USING CORS WORK-AROUND
  searchJobs = async (query) => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${query}`
    );
    return await response.json();
  };
}

export default Jobs;
