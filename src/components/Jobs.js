import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./main.scss";
import "./Jobs.scss";
import Navbar from "./Navbar";
import SearchField from "./SearchField";
import ListInformation from "./ListInformation";
import JobList from "./JobList";
import Contact from "./Contact";
import Footer from "./Footer";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultJobs: [],
      companyNames: [
        { company: "", company_url: "" },
        { company: "", company_url: "" },
        { company: "", company_url: "" },
      ],
      searchedJobs: [],
    };
  }
  render() {
    // const {defaultJobs} = this.state
    return (
      <>
        <Navbar />
        <SearchField defaultJobList={this.state.companyNames} />
        <div className="container">
          <ListInformation />
          <JobList defaultJobList={this.state.defaultJobs} />
        </div>
        <Contact />
        <Footer />
      </>
    );
  }
  componentDidMount = async () => {
    // console.log(this.searchJobs("node"));
    const defaultJobs = await this.getDefaultJobs();
    // console.log(defaultJobs);
    const companyNames = this.checkCompanyUrlExists(defaultJobs);
    this.setState({ defaultJobs, companyNames }, () =>
      console.log(this.state.defaultJobs)
    );
  };
  // THIS WILL NEED REVISION BEFORE DEPLOYMENT
  // USING CORS WORK-AROUND
  getDefaultJobs = async () => {
    // axios("/positions.json").then((response) => {
    //   // console.log(response.data);
    //   return response.data;
    // });
    const response = await axios("/positions.json");
    return response.data;
  };
  searchJobs = async (query) => {
    // console.log(query);
    // const response = await fetch(
    //   `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${query}`
    // );
    // const response = await fetch(`/positions.json?search=${query}`);
    // return await response;
    axios(`/positions.json?search=${query}`).then((response) => {
      // console.log(response);
    });
  };
  checkCompanyUrlExists = (jobs) => {
    let result = [];
    let count = 0;
    jobs.forEach((job) => {
      if (job.company_url !== null && count < 3) {
        result.push(job);
        count++;
      }
    });
    console.log(result);
    return result;
  };
}

export default Jobs;
