import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./main.scss";
import "./Jobs.scss";
import Navbar from "./Navbar";
import SearchField from "./SearchField";
import Filters from "./Filters";
import JobList from "./JobList";
import Contact from "./Contact";
import Footer from "./Footer";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      description: "",
      location: "",
      sort: "most recent",
      salaryValue: [0, 150000],
      fullTimeOnly: false,
      companyTags: [],
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
        <SearchField defaultJobList={this.state.companyNames} updateSearchState={this.updateSearchState} />
        <div className="container">
          <Filters jobNumber={this.state.defaultJobs.length} updateFilterState={this.updateFilterState} />
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
    const automaticJobs = await this.getJobs("automatic");
    this.setState({ companyNames, jobs: automaticJobs });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.description !== this.state.description || prevState.location !== this.state.location) {
      console.log("Running new search with search terms: " + this.state.description + ", " + this.state.location);
    }
  }
  updateSearchState = (searchState) => {
    this.setState({description: searchState[0], location: searchState[1]});
  }
  updateFilterState = (filterState) => {
    this.setState({sort: filterState[0], salaryValue: [...filterState[1]], fullTimeOnly: filterState[2], companyTags: [...filterState[3]]});
  }
  getJobs = async (searchType) => {
    let jobs = [];
    switch(searchType) {
      case "automatic":
        jobs = await axios("/positions.json");
        break;
      case "searched":
        jobs = await axios(`/positions.json?description=${this.state.description}&location=${this.state.location}`);
        break;
      case "filtered":
        //applyFilters() method here to update this.state.jobs
        this.applyFilters();
        break;
      default:
        break;
    }
    this.setState({ jobs });
  }
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
    // console.log(result);
    return result;
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
    // this.setState({ filteredJobs }, () => {
    //   this.toggleFilters();
    //   this.toggleNoScroll();
    //   this.props.updateFilterState([this.state.inputSort, this.state.inputSalaryValue, this.state.inputFullTimeOnly, this.state.companyTags]);
    //   console.log(filteredJobs);
    // });
    return filteredJobs;
  };
}

export default Jobs;
